import { useEffect, useState } from "react";
import {
  CalendarDaysIcon,
  ClockIcon,
  PencilSquareIcon,
  ShoppingCartIcon,
  CheckIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Layout from "./layout";
import { useParams } from "react-router-dom";
import { useCoursesContext } from "../context/courses_context";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { Oval } from "react-loader-spinner";
import parse from "html-react-parser";

const CONTENT_SECTIONS = [
  { key: "description", label: "Description", field: "description" },
  { key: "why_register", label: "Why Register", field: "why_register" },
  {
    key: "what_you_will_learn",
    label: "Why Should You Attend",
    field: "what_you_will_learn",
  },
  {
    key: "areas_covered",
    label: "Areas Covered in the Webinar Session",
    field: "areas_covered",
  },
  {
    key: "who_will_benefit",
    label: "Who will benefit?",
    field: "who_will_benefit",
  },
  {
    key: "instructor_profile",
    label: "Instructor Profile",
    field: "instructor_profile",
  },
  { key: "background", label: "Background", field: "background" },
];

const PricingOption = ({ pricing, isChecked, onToggle }) => (
  <label
    className={`group flex items-start gap-3 p-3.5 rounded-xl cursor-pointer border transition-all duration-200 ${
      isChecked
        ? "border-[#1a6b4a] bg-[#1a6b4a]/[0.06] shadow-sm"
        : "border-[#d8ddd6] bg-white hover:border-[#8fad9a] hover:bg-[#f7faf8]"
    }`}
  >
    <span
      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors duration-200 ${
        isChecked
          ? "border-[#1a6b4a] bg-[#1a6b4a] text-white"
          : "border-[#b0b8ae] bg-white group-hover:border-[#1a6b4a]"
      }`}
    >
      {isChecked ? <CheckIcon className="h-3.5 w-3.5 stroke-[3]" /> : null}
    </span>
    <input
      type="checkbox"
      className="sr-only"
      checked={isChecked}
      onChange={onToggle}
    />
    <span className="flex-1 min-w-0">
      <span
        className={`block text-sm font-medium leading-snug ${
          isChecked ? "text-[#143d2d]" : "text-[#2a322e]"
        }`}
      >
        {pricing.sessionType}
      </span>
      <span className="mt-1 block text-base font-semibold tracking-tight text-[#1a6b4a]">
        ${pricing.price}
      </span>
    </span>
  </label>
);

const PriceSummary = ({ totalPrice, selectedCount }) => (
  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#143d2d] via-[#1a6b4a] to-[#2d8a62] px-5 py-6 text-center text-white shadow-lg shadow-[#1a6b4a]/25">
    <div
      className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10"
      aria-hidden
    />
    <div
      className="pointer-events-none absolute -bottom-10 -left-6 h-24 w-24 rounded-full bg-white/5"
      aria-hidden
    />
    <p className="relative text-xs font-medium uppercase tracking-[0.18em] text-white/70">
      Your total
    </p>
    <p className="relative mt-1 text-sm text-[#f0c27a] line-through decoration-[#f0c27a]/80">
      Was:$
      {totalPrice != null && totalPrice > 0
        ? (totalPrice + selectedCount * 49).toFixed(2)
        : "00.00"}
    </p>
    <p className="relative mt-1 text-4xl font-bold tracking-tight">
      $
      {totalPrice != null && totalPrice > 0 ? totalPrice.toFixed(2) : "00.00"}
    </p>
    <p className="relative mt-2 inline-flex items-center rounded-lg bg-white/15 px-3 py-1 text-sm font-medium text-[#ffe8b8]">
      You Save: ${selectedCount * 49}
    </p>
  </div>
);

const AddToCartButton = ({
  selectedPricings,
  courseID,
  imageSrc,
  title,
  instructor,
  totalPrice,
  discountedPrice,
  addToCart,
}) => (
  <Link
    to={selectedPricings.length === 0 ? "#" : "/cart"}
    className={`group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl py-3.5 px-4 text-sm font-semibold tracking-wide text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1a6b4a] ${
      selectedPricings.length === 0
        ? "bg-[#a8c4b4] cursor-not-allowed pointer-events-none"
        : "bg-[#143d2d] hover:bg-[#1a6b4a] hover:shadow-md hover:shadow-[#1a6b4a]/30 hover:-translate-y-0.5"
    }`}
    onClick={(e) => {
      if (selectedPricings.length === 0) {
        e.preventDefault();
        return;
      }
      addToCart(
        courseID,
        imageSrc,
        title,
        instructor,
        selectedPricings.length > 0 ? totalPrice : discountedPrice,
        selectedPricings,
      );
    }}
  >
    <ShoppingCartIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
    Add to Cart
  </Link>
);

const SectionBlock = ({ index, label, children }) => (
  <section
    className="group/section scroll-mt-8 border-b border-[#e2e8e4] last:border-0 py-8 first:pt-2 animate-[fadeSlideIn_0.5s_ease-out_both]"
    style={{ animationDelay: `${index * 60}ms` }}
  >
    <div className="mb-4 flex items-center gap-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1a6b4a]/10 text-xs font-bold text-[#1a6b4a]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h2
        className="text-xl font-semibold tracking-tight text-[#143d2d] md:text-2xl"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        {label}
      </h2>
    </div>
    <div className="pl-0 md:pl-11 prose-content text-[#4a5550] leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:my-1 [&_p]:mb-3 [&_a]:text-[#1a6b4a] [&_a]:underline-offset-2 hover:[&_a]:underline">
      {children}
    </div>
  </section>
);

const SingleTrainingDetail = () => {
  const { id } = useParams();
  const { fetchSingleCourse, single_course } = useCoursesContext();
  const { addToCart } = useCartContext();
  const [loading, setLoading] = useState(true);
  const [selectedPricings, setSelectedPricings] = useState([]);
  // const [openInfoId, setOpenInfoId] = useState(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await fetchSingleCourse(id);
      setLoading(false);
    };
    fetchData();
  }, [id, fetchSingleCourse]);

  // useEffect(() => {
  //   if (single_course?.Pricings?.length) {
  //     setSelectedPricings([single_course.Pricings[0]]);
  //   }
  // }, [single_course]);
  useEffect(() => {
    if (single_course?.Pricings?.length) {
      const isPastWebinar = new Date(single_course.webinarDate) < new Date();

      if (isPastWebinar) {
        const accessOptions = single_course.Pricings.filter(
          (pricing) =>
            pricing.sessionType === "Recorded session" ||
            pricing.sessionType === "Transcript" ||
            pricing.sessionType === "Recorded Plus Transcript session",
        );

        if (accessOptions.length > 0) {
          setSelectedPricings([accessOptions[0]]); // ✅ select first valid option
        }
      } else {
        setSelectedPricings([single_course.Pricings[0]]); // ✅ original behavior
      }
    }
  }, [single_course]);
  const handlePricingToggle = (pricing) => {
    setSelectedPricings((prev) => {
      const exists = prev.find((p) => p.id === pricing.id);

      if (exists) {
        return prev.filter((p) => p.id !== pricing.id);
      } else {
        return [...prev, pricing];
      }
    });
  };
  const totalPrice = selectedPricings.reduce(
    (sum, item) => sum + parseFloat(item.price),
    0,
  );

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gradient-to-b from-[#eef3f0] to-[#e4ebe6]">
        <Oval
          height={50}
          width={50}
          color="#1a6b4a"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#8fad9a"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
        <p
          className="text-sm font-medium tracking-wide text-[#4a5550]"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          Loading training details…
        </p>
      </div>
    );
  }

  const {
    courseID,
    title,
    instructor,
    // duration,
    // price,
    discountedPrice,
    description,
    what_you_will_learn,
    // content,
    imageSrc,
    Pricings = [],
    webinarDate,
    duration,
    areas_covered,
    who_will_benefit,
    instructor_profile,
    why_register,
    background,
    // target_companies,
    // target_association,
  } = single_course;
  console.log("🚀 ~ SingleTrainingDetail ~ Pricings:", Pricings);

  const dateTime = new Date(webinarDate);

  const webinarDateUTC = new Date(webinarDate);
  const isPastWebinar = new Date(webinarDate) < new Date();
  const accessOptions = Pricings.filter(
    (pricing) =>
      pricing.sessionType === "Recorded session" ||
      pricing.sessionType === "Transcript" ||
      pricing.sessionType === "Recorded Plus Transcript session",
  );

  const day = webinarDateUTC.getUTCDate();
  const monthYear = webinarDateUTC.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  const weekday = webinarDateUTC.toLocaleString("en-US", {
    weekday: "long",
    timeZone: "UTC",
  });
  const formattedTimeEST = dateTime.toLocaleString("en-US", {
    timeZone: "America/New_York",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const formattedTimePST = dateTime.toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  function convertMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (minutes <= 60) {
      return `${minutes} min`;
    }

    return `${hours} hour${hours > 1 ? "s" : ""} ${remainingMinutes} min`;
  }
  const visiblePricings = showMore
    ? Pricings.slice(0, 5)
    : Pricings.slice(0, 2);

  const contentValues = {
    description,
    why_register,
    what_you_will_learn,
    areas_covered,
    who_will_benefit,
    instructor_profile,
    background,
  };

  const cartProps = {
    selectedPricings,
    courseID,
    imageSrc,
    title,
    instructor,
    totalPrice,
    discountedPrice,
    addToCart,
  };

  return (
    <Layout>
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroReveal {
          from { opacity: 0; transform: scale(1.04); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes metaRise {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div
        className="min-h-screen"
        style={{
          fontFamily: "'Lato', system-ui, sans-serif",
          background:
            "linear-gradient(165deg, #eef3f0 0%, #f5f7f4 42%, #e8efe9 100%)",
        }}
      >
        {/* Atmosphere layer */}
        <div
          className="pointer-events-none fixed inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 12%, rgba(26,107,74,0.12), transparent 42%), radial-gradient(circle at 88% 8%, rgba(240,194,122,0.14), transparent 38%), repeating-linear-gradient(-12deg, transparent, transparent 22px, rgba(20,40,30,0.015) 22px, rgba(20,40,30,0.015) 23px)",
          }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 md:py-10 lg:px-8">
          {/* Hero */}
          <header className="mb-8 rounded-2xl border border-[#d5ddd6]/80 bg-white/80 p-5 shadow-[0_12px_40px_-24px_rgba(20,61,45,0.28)] backdrop-blur-sm sm:p-6 md:mb-10 md:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-7">
              <div className="mx-auto w-full max-w-[200px] shrink-0 overflow-hidden rounded-xl border border-[#e2e8e4] bg-[#f0f4f1] shadow-sm sm:mx-0 sm:w-[180px] md:w-[200px]">
                <div className="aspect-[4/5] w-full">
                  <img
                    src={imageSrc}
                    alt={title || imageSrc}
                    className="h-full w-full object-cover object-top animate-[heroReveal_0.7s_ease-out]"
                  />
                </div>
              </div>

              <div className="min-w-0 flex-1 flex flex-col justify-between gap-6">
                <div className="animate-[metaRise_0.6s_ease-out]">
                  <div className="mb-2.5 flex flex-wrap items-center gap-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a6b4a]">
                      Professional Training
                    </p>
                    <span className="text-[#c5cec8]">·</span>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5a655f]">
                      {isPastWebinar ? "On-Demand Access" : "Live Webinar"}
                    </p>
                  </div>
                  <h1
                    className="text-xl font-bold leading-snug text-[#143d2d] sm:text-2xl lg:text-[1.85rem] lg:leading-[1.25]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {title}
                  </h1>
                </div>

                <div className="grid grid-cols-1 gap-4 border-t border-[#e2e8e4] pt-5 sm:grid-cols-3 sm:gap-5 animate-[metaRise_0.7s_ease-out_0.1s_both]">
                  <div className="flex items-start gap-2.5">
                    <CalendarDaysIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#1a6b4a]" />
                    <div>
                      <div className="flex items-end gap-2">
                        <span
                          className="text-2xl font-bold leading-none text-[#143d2d] md:text-3xl"
                          style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                          }}
                        >
                          {day}
                        </span>
                        <div className="pb-0.5">
                          <p className="text-sm font-semibold text-[#2a322e]">
                            {monthYear}
                          </p>
                          <p className="text-xs text-[#6b756f]">{weekday}</p>
                        </div>
                      </div>
                      <p className="mt-1.5 text-xs text-[#5a655f]">
                        {formattedTimeEST} EST / {formattedTimePST} PST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <PencilSquareIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#1a6b4a]" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-[#6b756f]">
                        Created by
                      </p>
                      <p className="mt-1 text-sm font-semibold leading-snug text-[#143d2d]">
                        {instructor?.replace(/"/g, "")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#1a6b4a]" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-[#6b756f]">
                        Duration
                      </p>
                      <p className="mt-1 text-sm font-semibold text-[#143d2d]">
                        {duration ? convertMinutes(duration) : null}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Main grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Content column */}
            <div className="lg:col-span-8">
              <article className="rounded-3xl border border-[#d5ddd6]/80 bg-white/80 px-5 py-2 shadow-[0_12px_40px_-24px_rgba(20,61,45,0.3)] backdrop-blur-sm sm:px-8 md:px-10">
                {CONTENT_SECTIONS.filter(
                  ({ field }) => contentValues[field],
                ).map(({ key, label, field }, index) => (
                  <SectionBlock key={key} index={index} label={label}>
                    <div>{parse(contentValues[field])}</div>
                  </SectionBlock>
                ))}
              </article>
            </div>

            {/* Sticky purchase rail */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-6 space-y-5 animate-[metaRise_0.75s_ease-out_0.15s_both]">
                {isPastWebinar ? (
                  <div className="rounded-3xl border border-[#d5ddd6]/80 bg-white/90 p-5 shadow-[0_16px_48px_-28px_rgba(20,61,45,0.35)] backdrop-blur-sm sm:p-6 space-y-5">
                    <PriceSummary
                      totalPrice={totalPrice}
                      selectedCount={selectedPricings.length}
                    />
                    <AddToCartButton {...cartProps} />

                    <div>
                      <div className="mb-3 flex items-center gap-2">
                        <span className="h-px flex-1 bg-[#d8ddd6]" />
                        <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#1a6b4a]">
                          Access Options
                        </h3>
                        <span className="h-px flex-1 bg-[#d8ddd6]" />
                      </div>
                      <div className="space-y-2.5">
                        {accessOptions.map((pricing) => {
                          const isChecked = selectedPricings.some(
                            (p) => p.id === pricing.id,
                          );

                          return (
                            <PricingOption
                              key={pricing.id}
                              pricing={pricing}
                              isChecked={isChecked}
                              onToggle={() => handlePricingToggle(pricing)}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-3xl border border-[#d5ddd6]/80 bg-white/90 p-5 shadow-[0_16px_48px_-28px_rgba(20,61,45,0.35)] backdrop-blur-sm sm:p-6 space-y-6">
                    <PriceSummary
                      totalPrice={totalPrice}
                      selectedCount={selectedPricings.length}
                    />
                    <AddToCartButton {...cartProps} />

                    <div>
                      <div className="mb-3 flex items-center gap-2">
                        <span className="h-px flex-1 bg-[#d8ddd6]" />
                        <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#1a6b4a]">
                          Live Webinar
                        </h3>
                        <span className="h-px flex-1 bg-[#d8ddd6]" />
                      </div>

                      <div className="space-y-2.5">
                        {visiblePricings.map((pricing) => {
                          const isChecked = selectedPricings.some(
                            (p) => p.id === pricing.id,
                          );

                          // const isInfoOpen = openInfoId === pricing.id;

                          return (
                            <div
                              key={pricing.id}
                              className="rounded-xl overflow-hidden transition-all"
                            >
                              <PricingOption
                                pricing={pricing}
                                isChecked={isChecked}
                                onToggle={() => handlePricingToggle(pricing)}
                              />

                              {/* <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenInfoId(isInfoOpen ? null : pricing.id);
                        }}
                        className="w-5 h-5 flex items-center justify-center rounded-full border text-blue-600 text-xs font-bold hover:bg-blue-50"
                      >
                        i
                      </button> */}

                              {/* <div
                      className={`transition-all duration-300 ease-in-out ${
                        isInfoOpen
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      } overflow-hidden border-t`}
                    >
                      <ul className="text-sm text-gray-700 p-4 space-y-2 list-disc list-inside bg-gray-50">
                        <li>Access Credentials will be shared via email</li>
                        <li>
                          Credentials available the day before or day of the
                          webinar
                        </li>
                        <li>Add/Edit attendees from My Account</li>
                        <li>Certificate of Participation provided</li>
                      </ul>
                    </div> */}
                            </div>
                          );
                        })}
                      </div>

                      {Pricings.length > 2 && (
                        <button
                          onClick={() => setShowMore(!showMore)}
                          className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl border border-dashed border-[#8fad9a] bg-[#f7faf8] py-2.5 text-sm font-semibold text-[#1a6b4a] transition-all duration-200 hover:border-solid hover:bg-[#1a6b4a]/10"
                        >
                          <span>
                            {showMore ? "Less Attendees" : "More Attendees"}
                          </span>
                          <ChevronDownIcon
                            className={`h-4 w-4 transition-transform duration-300 ${
                              showMore ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>
                    {/* <div>
              <h3 className="font-semibold text-center text-blue-700 text-lg mb-3 border border-blue-300 bg-[#f9f9f9] px-4 py-2">
                Live Webinar
              </h3>

              {Pricings?.slice(0, 5).map((pricing) => {
                const isChecked = selectedPricings.some(
                  (p) => p.id === pricing.id
                );

                return (
                  <label
                    key={pricing.id}
                    className="flex items-center justify-between border p-3 rounded-md mt-2 cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handlePricingToggle(pricing)}
                      />
                      <span>
                        {pricing.sessionType} - ${pricing.price}
                      </span>
                    </div>
                  </label>
                );
              })}
            </div> */}

                    <div>
                      <div className="mb-3 flex items-center gap-2">
                        <span className="h-px flex-1 bg-[#d8ddd6]" />
                        <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#1a6b4a]">
                          On-Demand
                        </h3>
                        <span className="h-px flex-1 bg-[#d8ddd6]" />
                      </div>
                      <div className="space-y-2.5">
                        {Pricings?.filter(
                          (pricing) =>
                            pricing.sessionType === "Recorded session" ||
                            pricing.sessionType === "Transcript",
                        ).map((pricing) => {
                          const isChecked = selectedPricings.some(
                            (p) => p.id === pricing.id,
                          );

                          return (
                            <PricingOption
                              key={pricing.id}
                              pricing={pricing}
                              isChecked={isChecked}
                              onToggle={() => handlePricingToggle(pricing)}
                            />
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <div className="mb-3 flex items-center gap-2">
                        <span className="h-px flex-1 bg-[#d8ddd6]" />
                        <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#1a6b4a]">
                          Value Packs
                        </h3>
                        <span className="h-px flex-1 bg-[#d8ddd6]" />
                      </div>
                      <div className="space-y-2.5">
                        {Pricings?.filter(
                          (pricing) =>
                            pricing.sessionType ===
                              "Live Plus Recorded session" ||
                            pricing.sessionType ===
                              "Live Plus Transcript session" ||
                            pricing.sessionType ===
                              "Recorded Plus Transcript session" ||
                            pricing.sessionType ===
                              "Group Session For 10 Attendees" ||
                            pricing.sessionType ===
                              "Group Session For More Than 10 Attendees",
                        ).map((pricing) => {
                          const isChecked = selectedPricings.some(
                            (p) => p.id === pricing.id,
                          );

                          return (
                            <PricingOption
                              key={pricing.id}
                              pricing={pricing}
                              isChecked={isChecked}
                              onToggle={() => handlePricingToggle(pricing)}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleTrainingDetail;
