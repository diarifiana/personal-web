"use client";

import React from "react";
import { Button } from "./ui/button";

const SendEmail = () => {
  const sectionBgColor = "bg-black";
  const sectionPadding = "py-12";
  const headingTextColor = "text-white";
  const buttonSubmitColor =
    "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300";
  const inputTextColor = "text-black";
  const inputFocusColor = "focus:ring-blue-500 focus:border-blue-500";

  const myEmail = "diarifiana@gmail.com";

  const handleContactClick = () => {
    const emailSubject = "Contact from Website";
    const emailBody = "Enter your message here...";

    const mailtoLink = `mailto:${myEmail}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className={` ${sectionBgColor} ${sectionPadding}`}>
      <div className="mb-8 md:mb-0">
        <form className="max-w-md mx-auto">
          {" "}
          {/* Adjust form width */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className={`block mb-2 text-sm font-medium ${headingTextColor}`}
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className={`bg-gray-50 border border-gray-300 ${inputTextColor} text-sm rounded-lg ${inputFocusColor} block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="yourname@mail.com"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className={`block mb-2 text-sm font-medium ${headingTextColor}`}
            >
              Message
            </label>
            <textarea
              id="message"
              className={`bg-gray-50 border border-gray-300 ${inputTextColor} text-sm rounded-lg ${inputFocusColor} block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              required
            />
          </div>
          <Button
            onClick={handleContactClick}
            type="submit"
            className={`text-white ${buttonSubmitColor} font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default SendEmail;
