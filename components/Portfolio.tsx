const portfolio = [
  {
    id: 1,
    title: "Personal Website",
    description:
      "A glimpse into my digital playground, allowing me to explore the use of HTML, CSS, and Javascript to build a clean interactive portfolio website",
    link: "/personal-website",
  },
  {
    id: 2,
    title: "Blog",
    description:
      "Teamed up with a friend who shares passion for Formula 1 to create a project where we dive into all the exciting aspects of the sport",
    link: "/blog",
  },
  {
    id: 3,
    title: "Company Profile",
    description:
      "Using my creativity to imagine and build the website for a local jewelry company, bringing fresh ideas to the table",
    link: "/company-profile",
  },
];

const Portfolio = () => {
  const showPortfolio = portfolio.map((data) => {
    return (
      <div
        key={data.id}
        className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
      >
        <a href={data.link}>
          <h5 className="pb-2 text-centermb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.title}
          </h5>
        </a>
        <p className="text-justify mb-3 font-normal text-gray-700 dark:text-gray-400">
          {data.description}
        </p>
        <a
          href={data.link}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    );
  });
  return (
    <div id="portfolio" className="md: py-12">
      <h2 className="text-center font-bold text-3xl p-8">Portfolio</h2>
      <div className="flex flex-wrap md:grid grid-cols-3 gap-4 px-12">
        {showPortfolio}
      </div>
    </div>
  );
};

export default Portfolio;
