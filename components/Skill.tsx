const Skill = () => {
  return (
    <div className="grid grid-row-2">
      <div className="p-2 m-auto">
        <p className="text-3xl font-semibold">My skills</p>
      </div>

      <div className="grid grid-cols-3 px-24 gap-10 h-[300px]">
        <div className="bg-slate-950 border-radius text-white text-center">
          <h1>Front-End Skills</h1>
          <p>Technologies like HTML, CSS, JavaScript, React, Angular, etc.</p>
        </div>

        <div className="bg-slate-950 rounded-lg text-white text-center">
          <h1>Back-End Skills</h1>
          <p>
            Frameworks and languages like Node.js, Express, Django, or Ruby on
            Rails
          </p>
        </div>

        <div className="bg-slate-950 rounded-lg text-white text-center">
          <h1>DevOps & Tools</h1>
          <p>
            Tools used in development, such as Docker, Git, Jenkins, AWS, or
            CI/CD solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
