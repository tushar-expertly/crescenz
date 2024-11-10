import React from "react";
import Layout from "../layout";
// import Slider from "../slider/slider";
// import startupPng from "../../Assets/startup.png";
// import OurExperts from '../OurExperts'
// import Testimonials from '../Testimonials'
import { Link } from "react-router-dom";
// import abouut from "../../Assets/logo/abouut.jpg";
// const ButtonArrow = () => {
//   return (
//     <svg
//       className="size-5 rtl:rotate-180"
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         d="M17 8l4 4m0 0l-4 4m4-4H3"
//       />
//     </svg>
//   );
// };

function Home() {
  return (
    <Layout>
      <div className="relative bg-gray-800 text-white">
        <div className="w-full h-64 sm:h-96 bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 opacity-80"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl font-bold mb-2">
              Welcome to Crescenz!
            </h1>
            <p className="text-lg sm:text-xl mb-6">
              We're happy to have you with us. Discover more about what we
              offer.
            </p>
            <Link
              to={"/training"}
              className="bg-white text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-200"
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-10">
            <dl className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-12">
              <div className="relative bg-white p-6 rounded-lg shadow-lg">
                <dt>
                  <p className="font-heading text-xl leading-7 font-semibold text-gray-800 mb-3">
                    About Crescenz
                  </p>
                </dt>
                <dd className="text-base text-gray-600">
                  Introducing Crescenz, your dependable partner in lifelong
                  learning. We are dedicated to providing high-quality, easily
                  accessible online training that empowers individuals to thrive
                  in an evolving world.
                </dd>
              </div>
              <div className="relative bg-white p-6 rounded-lg shadow-lg">
                <dt>
                  <p className="font-heading text-xl leading-7 font-semibold text-gray-800 mb-3">
                    Meet Our Specialists
                  </p>
                </dt>
                <dd className="text-base text-gray-600">
                  Our team consists of passionate educators and experienced
                  industry experts with a wealth of knowledge. Discover more
                  about our specialists on our dedicated team page!
                </dd>
              </div>
              <div className="relative bg-white p-6 rounded-lg shadow-lg">
                <dt>
                  <p className="font-heading text-xl leading-7 font-semibold text-gray-800 mb-3">
                    Our Pledge to You
                  </p>
                </dt>
                <dd className="text-base text-gray-600">
                  By choosing Crescenz, you're not merely signing up for a
                  course; you're becoming part of a community focused on your
                  success. From registration to graduation, we're with you
                  throughout the entire journey.
                </dd>
              </div>
              <div className="relative bg-white p-6 rounded-lg shadow-lg">
                <dt>
                  <p className="font-heading text-xl leading-7 font-semibold text-gray-800 mb-3">
                    Tailored Learning Journeys
                  </p>
                </dt>
                <dd className="text-base text-gray-600">
                  We are committed to offering dynamic and interactive online
                  training. Whether you learn best through visuals, audio, or
                  practical experience, our courses are designed to suit your
                  individual learning preferences.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      {/* <Slider /> */}
    </Layout>
  );
}

export default Home;
