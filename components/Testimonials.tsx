// import { Button } from "./ui/button";

// const Testimonials = () => {
//   return (
//     <div>
//       <div className="text-center py-12">
//         <p className="text-3xl font-semibold">Testimonials</p>
//       </div>

//       <div className="grid grid-cols-2 px-12 text-center">
//         {/* testimonial 1 */}
//         <div className="px-4">
//           <h1 className="pb-4">
//             <span className="font-semibold">Jane, </span>Marketing Manager
//           </h1>
//           <p className="italic">
//             "I was incredibly impressed with the level of support I received.
//             She went above and beyond to resolve my issue. I'll definitely be a
//             returning customer."
//           </p>
//           <Button
//             className="w-[150px] justify-self-end font-semibold pt-8"
//             variant="link"
//           >
//             Read more
//           </Button>
//         </div>

//         {/* testimonial 2 */}
//         <div className="px-4">
//           <h1 className="pb-4">
//             <span className="font-semibold">Brian, </span>Senior Developer
//           </h1>
//           <p className="italic pb-6">
//             "The platform was very user friendly. I was able to navigate it
//             easily and find what I needed."
//           </p>
//           <Button
//             className="w-[150px] justify-self-end font-semibold pt-8 mb-24"
//             variant="link"
//           >
//             Read more
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;


import React from "react";
import { Button } from "./ui/button";

const Testimonials = () => {
  const sectionPadding = "py-12";
  const headingStyle = "text-3xl font-semibold";
  const testimonialsGridStyle = "grid grid-cols-2 px-12 text-center";
  const testimonialItemStyle = "px-4";
  const testimonialAuthorStyle = "pb-4";
  const testimonialQuoteStyle = "italic";
  const readMoreButtonStyle = "justify-self-end pt-8 pb-28";

  const testimonials = [
    {
      author: "Jane, Marketing Manager",
      quote:
        "I was incredibly impressed with the level of support I received. She went above and beyond to resolve my issue. I'll definitely be a returning customer.",
    },
    {
      author: "Brian, Senior Developer",
      quote:
        "The platform was very user friendly. I was able to navigate it easily and find what I needed.",
    },
  ];

  return (
    <section>
      <div className={`text-center ${sectionPadding}`}>
        <p className={headingStyle}>Testimonials</p>
      </div>

      <div className={testimonialsGridStyle}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={testimonialItemStyle}>
            <h1 className={testimonialAuthorStyle}>
              <span className="font-semibold">
                {testimonial.author.split(",")[0]},
              </span>
              {testimonial.author.split(",")[1]}
            </h1>
            <blockquote className={testimonialQuoteStyle}>
              {testimonial.quote}
            </blockquote>
            <Button className={readMoreButtonStyle} variant="link">
              Read more
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;