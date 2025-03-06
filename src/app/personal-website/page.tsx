const PersonalWebsitePage = () => {
  return (
    <div className="p-8 text-justify">
      <h1 className="pb-8 text-center font-bold text-3xl">Personal Website</h1>
      <p>
        This project involved the development of a personal portfolio website to
        showcase my skills, projects, and experience to potential employers,
        collaborators, and clients. The site serves as a central hub for my
        professional identity, demonstrating my proficiency in front-end
        development and design.
      </p>
      <br />
      <p className="text-black dark:text-gray-400">
        As a developing front-end developer, I recognized the need for a
        professional online presence to effectively present my portfolio. I
        wanted to create a platform that would not only display my projects but
        also reflect my personal brand and design aesthetic.
      </p>
      <br />
      <p>My primary tasks were to:</p> <br />
      <ol className="list-decimal">
        <li>1. Design and develop a responsive and user-friendly website</li>
        <li>
          2. Showcase my projects with clear descriptions, images, and links
        </li>
        <li>3. Create a section for my resume and contact information</li>
        <li>4. Optimize the website for performance and SEO</li>
      </ol>
      <br />
      <p>
        {" "}
        For the front-end development, I utilized Next.js, Tailwind CSS, and
        JavaScript. I implemented a component based design, to make the site
        easy to update in the future. The site is deployed using Vercel, to take
        advantage of it's easy to use deployment features.
      </p>
      <br />
      The website successfully provides a professional online presence,
      showcasing my skills and projects.
    </div>
  );
};

export default PersonalWebsitePage;
