// import Image from "next/image";
// import { Button } from "./ui/button";

// const Skill = () => {
//   return (
//     <div className="grid grid-row-2 ">
//       <div className="m-auto mb-8">
//         <p className="text-3xl font-semibold">Programming skills</p>
//       </div>

//       <div className="grid grid-cols-3 gap-5 h-[500px]">
//         <div className="rounded-lg text-black text-center justify-center items-center m-auto">
//         <Image
//             src="/html.png"
//             alt="html"
//             width={100}
//             height={100}
//           />
//           <p className="mt-2">HTML</p> 
//         </div>

//         <div className="rounded-lg text-black text-center justify-center items-center m-auto">
//         <Image
//             src="/css.png"
//             alt="css"
//             width={100}
//             height={100}
//           />
//           <p className="mt-2">CSS</p> 
//         </div>

//         <div className="rounded-lg text-black text-center justify-center items-center m-auto">
//         <Image
//             src="/js.png"
//             alt="js"
//             width={100}
//             height={100}
//           />
//           <p className="mt-2">Javascript</p> 
//         </div>

//         <div className="rounded-lg text-black text-center justify-center items-center m-auto">
//         <Image
//             src="/git.png"
//             alt="git"
//             width={100}
//             height={100}
//           />
//           <p className="mt-2">GIT</p> 
//         </div>

//         <div className="rounded-lg text-black text-center justify-center items-center m-auto">
//         <Image
//             src="/react.png"
//             alt="react"
//             width={100}
//             height={100}
//           />
//           <p className="mt-2">React</p> 
//         </div>

//         <div className="rounded-lg text-black text-center justify-center items-center m-auto">
//         <Image
//             src="/nodes.png"
//             alt="nodejs"
//             width={100}
//             height={100}
//           />
//           <p className="mt-2">Node.js</p> 
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Skill;

import React from "react";
import Image from "next/image";

const Skill = () => {
  const sectionGridStyle = "grid grid-row-2";
  const titleStyle = "m-auto mb-8";
  const headingStyle = "text-3xl font-semibold";
  const skillsGridStyle = "grid grid-cols-3 gap-5 h-[500px]";
  const skillItemStyle =
    "rounded-lg text-black text-center justify-center items-center m-auto";
  const skillNameStyle = "mt-2";
  const imageSize = 100;

  const skills = [
    { src: "/html.png", alt: "html", name: "HTML" },
    { src: "/css.png", alt: "css", name: "CSS" },
    { src: "/js.png", alt: "js", name: "Javascript" },
    { src: "/git.png", alt: "git", name: "GIT" },
    { src: "/react.png", alt: "react", name: "React" },
    { src: "/nodes.png", alt: "nodejs", name: "Node.js" },
  ];

  return (
    <section className={sectionGridStyle}>
      <div className={titleStyle}>
        <p className={headingStyle}>Programming skills</p>
      </div>

      <ul className={skillsGridStyle}>
        {skills.map((skill, index) => (
          <li key={index} className={skillItemStyle}>
            <Image
              src={skill.src}
              alt={skill.alt}
              width={imageSize}
              height={imageSize}
            />
            <p className={skillNameStyle}>{skill.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skill;
