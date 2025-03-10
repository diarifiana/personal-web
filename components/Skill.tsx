import React from "react";
import Image from "next/image";

const Skill = () => {
  const sectionGridStyle = "grid grid-row-2 px-8 md:py-12";
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
