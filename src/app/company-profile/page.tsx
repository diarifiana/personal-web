import Link from "next/link";

const CompanyProfilePage = () => {
  return (
    <div className="p-8 text-justify">
      <Link href="https://company-profile-gilt.vercel.app/">
        <h1 className="pb-8 text-center font-bold text-3xl hover:underline hover:text-blue-200">
          Local Jewelry Company Profile Website
        </h1>
      </Link>
      <p>
        This project involved designing and developing a company profile website
        for a local jewelry business. The goal was to create an engaging and
        informative online presence that would showcase their unique jewelry
        pieces, brand story, and contact information to potential customers.
      </p>
      <br />
      <p className="text-black dark:text-gray-400">
        In order to expand its customer base and establish an online presence,
        one of the local jewelry was lack a professional website to showcase
        their products and brand identity.
      </p>
      <br />
      <p>Therefore, to help them, my primary tasks were to:</p> <br />
      <ol className="list-decimal">
        <li>1. Design and develop a responsive and user-friendly website</li>
        <li>
          2. Showcase the jewelry products with high-quality images and detailed
          descriptions
        </li>
        <li>
          3. Develop a section for the company&apos;ss story, values, and
          craftsmanship
        </li>
        <li>
          4. Ensure the website was responsive and optimized for various devices
        </li>
      </ol>
      <br />
      <p>
        {" "}
        For the development, I utilized Next.js, Tailwind CSS, and JavaScript.
        Gathering high-quality images of their jewelry and craft compelling
        descriptions. The site is deployed using Vercel, to take advantage of
        it&apos;ss easy to use deployment features.
      </p>
      <br />
      Through this project, I learned how to translate a physical brand into a
      digital presence.
    </div>
  );
};

export default CompanyProfilePage;
