import React from "react";
import ExpertlyLogoLogin from "../../../Assets/logo/ExpertlyLogoLogin.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <section className="py-10  sm:pt-16 lg:pt-24 bg-violet-100">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-4 gap-y-16 gap-x-12">
          <div>
            <p className="text-sm  tracking-widest  uppercase">Company</p>

            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  to="/about-us"
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Our Mission
                </Link>
              </li>

              <li>
                <Link
                  to="/contact-us"
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Get in Touch
                </Link>
              </li>

              <li>
                <Link
                  to="/terms-of-use"
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm  tracking-widest  uppercase">Help</p>

            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  to="/consulting"
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Advice
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy-policy"
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/subscribe"
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <img className="h-14 w-17" src={ExpertlyLogoLogin} alt="" />

            <p className="text-base leading-relaxed text-gray-600 mt-7">
              Driving growth with innovative training and consulting solutions.
              Empowering continuous learning to thrive in constantly changing
              business environments.
            </p>
          </div>
          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <form className="mt-6 flex">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="block  text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-2 py-2 ml-3 font-semibold text-white transition-all duration-200  bg-gradient-to-r from-blue-500 to-green-500 rounded-md hover:bg-blue-700 focus:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-6 mb-5 border-gray-200" />

        <p className="text-sm text-center text-gray-600">
          © Copyright 2024, All Rights Reserved by Crescenz
        </p>
      </div>
    </section>
  );
}

export default Footer;
