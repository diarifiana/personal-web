// import { Button } from "./ui/button";

// const Contact = () => {
//   return (
//     <div className="grid grid-cols-2 bg-black py-12">
//       <div>
//         <p className="text-center text-white text-lg pb-8">
//           Have an idea?
//           <br />
//           <span className="text-white">Let's talk about it!</span>
//         </p>

//         <form className="max-w-sm mx-auto">
//           <div className="mb-5">
//             <label className="block mb-2 text-sm font-medium text-white">
//               Your email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder="yourname@mail.com"
//               required
//             />
//           </div>
//           <div className="mb-5">
//             <label className="block mb-2 text-sm font-medium text-white dark:text-white">
//               Message
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>

//       <div>
//         <p className="text-center text-white pb-12">Connect with me!</p>
//         <div className="grid grid-cols-3 items-center m-auto">
//           <Button
//             className="w-[150px] justify-self-end text-white"
//             variant="link"
//           >
//             Linkedin
//           </Button>

//           <Button
//             className="w-[150px] justify-self-end text-white"
//             variant="link"
//           >
//             Instagram
//           </Button>

//           <Button
//             className="w-[150px] justify-self-end text-white"
//             variant="link"
//           >
//             Github
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import { Button } from "./ui/button";

const Contact = () => {
  const sectionBgColor = "bg-black";
  const sectionPadding = "py-12";
  const headingTextColor = "text-white";
  const inputTextColor = "text-white";
  const inputFocusColor = "focus:ring-blue-500 focus:border-blue-500";
  const buttonSubmitColor =
    "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300";

  return (
    <section
      id="contact-section"
      className={`grid grid-cols-2 ${sectionBgColor} ${sectionPadding}`}
    >
      <div>
        <p className={`text-center ${headingTextColor} text-lg pb-8`}>
          Have an idea?
          <br />
          <span className={headingTextColor}>Let's talk about it!</span>
        </p>

        <form className="max-w-sm mx-auto">
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
            type="submit"
            className={`text-white ${buttonSubmitColor} font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
          >
            Send Message
          </Button>
        </form>
      </div>

      <div className="pr-12">
        <p className={`text-center ${headingTextColor} pb-12`}>
          Connect with me!
        </p>
        <div className="grid grid-cols-3 items-center m-auto">
          <Button
            className="w-[150px] justify-self-end text-white"
            variant="link"
          >
            Linkedin
          </Button>
          <Button
            className="w-[150px] justify-self-end text-white"
            variant="link"
          >
            Instagram
          </Button>
          <Button
            className="w-[150px] justify-self-end text-white"
            variant="link"
          >
            Github
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
