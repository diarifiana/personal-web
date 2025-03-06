import React from "react";

const BlogPage = () => {
  return (
    <div>
      <div className="p-8 text-justify">
        <h1 className="pb-8 text-center font-bold text-3xl">Formula 1 Fan Blog</h1>
        <p>
          This project involved the collaborative creation of a blog dedicated
          to Formula 1. The blog aims to provide in-depth analysis, news, and
          engaging content related to the sport, fostering a community for F1
          fans.
        </p>
        <br />
        <p className="text-black dark:text-gray-400">
          As passionate Formula 1 fans, my friend and I noticed a gap in the
          online space for detailed, engaging, and community-focused content. We
          wanted to create a platform where fans could delve deeper into the
          sport and share their enthusiasm.
        </p>
        <br />
        <p>Our primary tasks were to:</p> <br />
        <ol className="list-decimal">
          <li>1. Design and develop a responsive and user-friendly blog</li>
          <li>
            2. Create high-quality, informative, and engaging content, including
            race analyses and opinion pieces
          </li>
          <li>
            3. Build a community by encouraging interaction and discussion
          </li>
          <li>4. Maintain a consistent posting schedule</li>
        </ol>
        <br />
        <p>
          {" "}
          We began by brainstorming content ideas and defining our target
          audience. In developing the website, I used Next.js & React.js,
          Tailwind CSS, Backend Technology (Backendless), and JavaScript. We
          used tools such as Google Analytics to track site traffic, and
          understand what content was most engaging. The blog is deployed using
          Vercel.
        </p>
        <br />
        We successfully launched and maintained a custom blog that provides
        valuable content to Formula 1 fans. I gained valuable experience in
        full-stack web development, content management, and community
        engagement.
      </div>
    </div>
  );
};

export default BlogPage;
