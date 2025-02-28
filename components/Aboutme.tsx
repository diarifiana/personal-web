// const Aboutme = () => {
//   return (
//     <div className="px-24 py-32 text-justify">
//       <h1 className="font-bold">Why I learn web development?</h1>
//       <p className="mt-2 space-x-2">
//         I'm driven by the desire to build functional and aesthetically pleasing
//         digital experiences that solve real-world problems. The constant
//         evolution of web technologies presents an exciting challenge, fueling my
//         passion for continuous learning. I believe to empower individuals and
//         businesses to be a part of shaping that digital landscape.
//       </p>
//       <p className="mt-5">
//         Focusing on creating impactful digital experiences, my core skills
//         include HTML, CSS, JavaScript, React, and Node.js. I value
//         collaboration, attention to detail, integrity and strive to deliver
//         high-quality, efficient solutions for clients.
//       </p>
//     </div>
//   );
// };

// export default Aboutme;

import React from "react";

const Aboutme = () => {
  const sectionPadding = "px-24 py-32";
  const paragraphMarginSmall = "mt-2";
  const paragraphMarginLarge = "mt-8"; // using 8 instead of 5 to keep a spacing system.
  const headingText = "Why I learn web development?";
  const firstParagraphText =
    "I'm driven by the desire to build functional and aesthetically pleasing digital experiences that solve real-world problems. The constant evolution of web technologies presents an exciting challenge, fueling my passion for continuous learning. I believe to empower individuals and businesses to be a part of shaping that digital landscape.";
  const secondParagraphText =
    "Focusing on creating impactful digital experiences, my core skills include HTML, CSS, JavaScript, React, and Node.js. I value collaboration, attention to detail, integrity and strive to deliver high-quality, efficient solutions for clients.";

  return (
    <section id="about-section" className={`${sectionPadding} text-justify`}>
      <h1 className="font-bold">{headingText}</h1>
      <p className={`${paragraphMarginSmall} space-x-2`}>
        {firstParagraphText}
      </p>
      <p className={paragraphMarginLarge}>{secondParagraphText}</p>
    </section>
  );
};

export default Aboutme;
