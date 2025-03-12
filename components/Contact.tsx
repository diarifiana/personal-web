import SendEmail from "./SendEmail";
import { Button } from "./ui/button";

const Contact = () => {
  const sectionBgColor = "bg-black";
  const sectionPadding = "py-12";
  const headingTextColor = "text-white";

  return (
    <section id="contact" className={` ${sectionBgColor} ${sectionPadding}`}>
      <div className="md:grid md:grid-cols-2 px-4 md:px-0">
        {" "}
        {/* Responsive grid */}
        <div className="sm:mb-4 md:mb-0">
          {" "}
          {/* Add margin bottom for mobile */}
          <p className={`text-center ${headingTextColor} text-lg pb-2`}>
            Have an idea?
            <br />
            <span className={headingTextColor}>Lets talk about it!</span>
          </p>
          <SendEmail />
        </div>
        <div className="md:pr-12 mt-8 md:mt-0">
          {" "}
          {/* Add margin top for mobile */}
          <p className={`text-center ${headingTextColor} pb-8 md:pb-12`}>
            Connect with me!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center m-auto justify-items-center">
            {" "}
            {/* Adjust grid */}
            <a
              href="https://www.linkedin.com/in/diarifiana/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full md:w-[150px] text-white" variant="link">
                Linkedin
              </Button>
            </a>
            <a
              href="https://www.instagram.com/diarifiana/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full md:w-[150px] text-white" variant="link">
                Instagram
              </Button>
            </a>
            <a
              href="https://github.com/diarifiana"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full md:w-[150px] text-white" variant="link">
                Github
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
