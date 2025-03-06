const Testimonials = () => {
  const sectionPadding = "py-12";
  const headingStyle = "text-3xl font-semibold";
  const testimonialItemStyle = "px-4";
  const testimonialAuthorStyle = "pb-4 pt-4";
  const testimonialQuoteStyle = "italic";

  const testimonials = [
    {
      author: "Susie, Business Owner",
      quote:
        "I was incredibly impressed with the level of support I received. She went above and beyond to resolve my issue. I'll definitely be a returning customer.",
      image: "/susie.jpg",
    },
    {
      author: "Carlos, Senior Developer",
      quote:
        "The platform was very user friendly. I was able to navigate it easily and find what I needed.",
      image: "/carlos.png",
    },
  ];

  return (
    <section>
      <div className={`text-center ${sectionPadding}`}>
        <p className={headingStyle}>Testimonials</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 px-4 pb-8 md:px-12 text-center">
        {" "}
        {/* Responsive grid */}
        {testimonials.map((testimonial, index) => (
          <div key={index} className={testimonialItemStyle}>
            <img
              className="w-[80px] h-[80px] rounded-full m-auto object-cover"
              src={testimonial.image}
              alt="Rounded avatar"
            />
            <h1 className={testimonialAuthorStyle}>
              <span className="font-semibold">
                {testimonial.author.split(",")[0]},
              </span>
              {testimonial.author.split(",")[1]}
            </h1>
            <blockquote className={testimonialQuoteStyle}>
              {testimonial.quote}
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
