import React from "react";

const Experience = () => {
  const sectionPaddingTop = "pt-16";
  const sectionPaddingBottom = "pb-12";
  const headingTextLg = "text-lg";
  const headingText3xl = "text-3xl font-semibold";
  const jobTitleStyle = "font-semibold text-lg";
  const roleTitleStyle = "text-lg font-semibold text-gray-900 dark:text-white";
  const roleDescriptionStyle =
    "mb-4 text-base font-normal text-gray-500 dark:text-gray-400";
  const timelineBulletStyle =
    "absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700";

  const jobExperiences = [
    {
      title: "Cerah Education Pte Ltd",
      dates: "August 2023 - Present",
      roles: [
        {
          title: "Customer Service",
          description:
            "Dedicated to ensure a positive experience in delivering solutions and building lasting customer relationships with efficient and clear communication",
        },
      ],
    },
    {
      title: "PT Mitracomm Ekasarana (Traveloka Project)",
      dates: "April 2021 - September 2023",
      roles: [
        {
          title: "Team Leader",
          description:
            "Oversee the operational of refund team to ensure the fulfillment of targets from client",
        },
        {
          title: "Quality Analyst",
          description:
            "Conducting performance analyses of customer support agents and providing coaching to improve their work quality",
        },
        {
          title: "Customer Support Agent",
          description:
            "Submitting refund claims on behalf of customers and providing ongoing follow-up with the airline",
        },
      ],
    },
  ];

  return (
    <section>
      <div
        className={`text-center ${sectionPaddingTop} ${sectionPaddingBottom}`}
      >
        <p className={headingTextLg}>
          Experience
          <br />
          <span className={headingText3xl}>Professional Work History</span>
        </p>
      </div>

      <div className="md:grid md:grid-cols-2 px-4 md:px-24">
        {" "}
        {/* Responsive grid */}
        <div className="md:text-right md:mr-4">
          {" "}
          {/* Right align on medium screens */}
          {jobExperiences.map((job, index) => (
            <div
              key={index}
              className={`mb-6 md:mb-0 ${index === 0 ? "md:pb-24" : ""}`} // Add margin bottom for mobile
            >
              <h1 className={jobTitleStyle}>{job.title}</h1>
              <time>{job.dates}</time>
            </div>
          ))}
        </div>
        <div>
          <ul className="relative border-s border-gray-200 dark:border-gray-700">
            {jobExperiences.map((job) =>
              job.roles.map((role, roleIndex) => (
                <li key={roleIndex} className="mb-10 ms-4">
                  <div className={timelineBulletStyle} />
                  <h3 className={roleTitleStyle}>{role.title}</h3>
                  <p className={roleDescriptionStyle}>{role.description}</p>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
