
const Aboutme = () => {
  const sectionPadding = "px-8 py-12 md:px-24";
  const paragraphMarginSmall = "mt-2";
  const headingText = "Why I learn web development?";
  const firstParagraphText =
    "I'm driven by the desire to build functional and aesthetically pleasing digital experiences that solve real-world problems. The constant evolution of web technologies presents an exciting challenge, fueling my passion for continuous learning. I believe to empower individuals and businesses to be a part of shaping that digital landscape.";
  const secondParagraphText =
    "Focusing on creating impactful digital experiences, my core skills include HTML, CSS, JavaScript, React, and Node.js. I value collaboration, attention to detail, integrity and strive to deliver high-quality, efficient solutions for clients.";

  return (
    <section id="about-section" className={`${sectionPadding} text-justify`}>
      <h1 className="font-bold">{headingText}</h1>
      <p className={`${paragraphMarginSmall} space-x-2 text-gray-500`}>
        {firstParagraphText}
      </p>
      <br />
      <p className={`{paragraphMarginLarge} text-gray-500`}>
        {secondParagraphText}
      </p>
    </section>
  );
};

export default Aboutme;
