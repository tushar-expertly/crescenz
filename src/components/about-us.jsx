import React from "react";
import Layout from "./layout";
// import tailoredSolutions from "../Assets/about/undraw_solution_mindset_re_57bf.svg";
// import experts from "../Assets/about/undraw_experts_re_i40h.svg";
// import patners from "../Assets/about/undraw_team_up_re_84ok.svg";
// import excel from "../Assets/about/undraw_details_8k13.svg";
// import impact from "../Assets/about/24372256_6909933.svg";
// import { Link } from "react-router-dom";

function Aboutus() {
  return (
    <Layout>
      {/* 
<!-- Section 2 --> */}
      <div class="py-16 bg-white">
        {/* <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class="md:5/12 lg:w-5/12">
              <img
                src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div class="md:7/12 lg:w-6/12">
              <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">
                About Us
              </h2>
              <p class="mt-6 text-gray-600">
                At Gradeage, we believe in the transformative power of
                education. Our mission is to empower individuals and
                organizations worldwide through high-quality online training
                programs designed to unlock potential and drive success.
              </p>
            </div>
          </div>
        </div> */}

        <div className="bg-gray-100  flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-8xl w-full space-y-8">
            <div className="bg-gray-100 shadow-md rounded-lg p-8">
              <div className="space-y-6">
                {/* <section className="">
                  <div className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                          <div className="relative">
                            <dt>
                              <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                                Our Impact
                              </p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">
                              We provide a vibrant online learning platform with
                              a diverse range of courses designed to equip you
                              with the skills and knowledge you need to succeed.
                              Our satisfied learners have used our training.
                            </dd>
                          </div>
                          <div className="relative">
                            <dt>
                              <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                                The Problem We Solve
                              </p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">
                              {" "}
                              In today's rapidly changing world, traditional
                              learning methods can feel restrictive. We
                              understand the challenges of busy schedules,
                              geographical limitations, and the need for
                              flexible learning options
                            </dd>
                          </div>
                          <div className="relative">
                            <dt>
                              <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                                Meet the Experts
                              </p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">
                              {" "}
                              Our team is comprised of passionate instructors
                              and industry veterans with a wealth of experience.
                              You can learn more about our team on our dedicated
                              page!
                            </dd>
                          </div>
                          <div className="relative">
                            <dt>
                              <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                                Learning Designed for You
                              </p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">
                              {" "}
                              We believe in engaging and interactive online
                              training. Whether you're a visual learner, an
                              auditory learner, or a hands-on learner, we have a
                              training approach that caters to your style.
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                </section> */}
                <div>
                  <h4 className=" text-gray-800">About Crescenz</h4>
                  <p className="mt-2 text-gray-600">
                    Welcome to Crescenz, where knowledge meets innovation.
                    We're not just another online training firm; we're a
                    community of learners, educators, and enthusiasts passionate
                    about unlocking the potential of every individual.
                  </p>
                </div>
                <div>
                  <h4 className=" text-gray-800">Our Story</h4>
                  <p className="mt-2 text-gray-600">
                    Crescenz was born out of a shared vision to
                    revolutionize the way people learn. What started as a small
                    initiative has now grown into a dynamic platform offering
                    cutting-edge online courses to students worldwide.
                  </p>
                </div>

                <div>
                  <h4 className=" text-gray-800">What Sets Us Apart</h4>
                  <p className="mt-2 text-gray-600">
                    <ul>
                      <li>
                        • Holistic Learning Approach: We believe in nurturing
                        not just intellect but also creativity, critical
                        thinking, and practical skills essential for success in
                        today's fast-paced world.
                      </li>
                      <li>
                        • Industry-Relevant Curriculum: Our courses are
                        meticulously designed by industry experts to equip you
                        with the knowledge and skills demanded by employers in
                        your field.
                      </li>
                      <li>
                        • Community Engagement: Join a vibrant community of
                        learners where you can collaborate, share ideas, and
                        network with like-minded individuals from around the
                        globe.
                      </li>
                      <li>
                        • Continuous Improvement: We're committed to staying
                        ahead of the curve, regularly updating our course
                        offerings, and integrating feedback to ensure an
                        unparalleled learning experience.
                      </li>
                    </ul>
                  </p>
                </div>

                <div>
                  <h4 className=" text-gray-800">Our Team</h4>
                  <p className="mt-2 text-gray-600">
                    Behind every successful course is a team of dedicated
                    professionals passionate about education. From instructors
                    and curriculum developers to support staff, our team works
                    tirelessly to ensure you receive the support and resources
                    you need to succeed.
                  </p>
                </div>
                <div>
                  <h4 className=" text-gray-800">Our Promise</h4>
                  <p className="mt-2 text-gray-600">
                    When you choose Crescenz, you're not just investing in a
                    course; you're investing in your future. We're here to
                    support you every step of the way, from enrollment to
                    graduation and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Aboutus;
