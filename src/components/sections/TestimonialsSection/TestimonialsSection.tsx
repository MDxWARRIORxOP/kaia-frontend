import { Container } from "../../ui/Container";

import "./TestimonialsSection.css";

const testimonials = [
  {
    text: "KAIA gave us clarity in a space that usually feels opaque. We were able to purchase and retire carbon credits with full confidence, knowing every transaction was transparent and verifiable.",
    name: "Head of Sustainability",
    title: "Global Manufacturing Company",
    image: "/images/testimonial1.png",
  },
  {
    text: "Integrating KAIA into our workflow allowed us to offer carbon offsetting as a seamless part of our ESG services. The transparency and ease of use made a huge difference for both us and our clients.",
    name: "Climate Strategy Consultant",
    title: "ESG Advisory Firm",
    image: "/images/testimonial2.svg",
  },
  {
    text: "KAIA helped us reach buyers we couldn’t access before. The ability to list our credits and control pricing without intermediaries has completely changed how we monetize our projects.",
    name: "Project Lead",
    title: "Renewable Energy Developer",
    image: "/images/testimonial3.svg",
  },
];

const starPattern = [true, true, true, true, false];

export function TestimonialsSection() {
  return (
    <section
      className="testimonials-section"
      aria-labelledby="testimonials-heading"
    >
      <Container className="testimonials-section__container">
        <div className="testimonials-section__intro">
          <h2
            id="testimonials-heading"
            className="testimonials-section__heading"
          >
            <span className="testimonials-section__heading-dark">
              Trusted by Teams Driving
            </span>
            <span className="testimonials-section__heading-accent">
              Real Climate Impact.
            </span>
          </h2>

          <p className="testimonials-section__subtext">
            From enterprises to climate consultants, teams use KAIA to simplify
            carbon markets and deliver measurable results.
          </p>
        </div>

        <div
          className="testimonials-section__grid"
          aria-label="Customer testimonials"
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="testimonials-section__card"
            >
              <div className="testimonials-section__stars" aria-hidden="true">
                {starPattern.map((filled, index) => (
                  <span
                    key={`${testimonial.name}-${index}`}
                    className={`testimonials-section__star ${
                      filled ? "testimonials-section__star--filled" : ""
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              <p className="testimonials-section__review">{testimonial.text}</p>

              <div className="testimonials-section__reviewer">
                <img
                  src={testimonial.image}
                  alt=""
                  aria-hidden="true"
                  className="testimonials-section__avatar"
                />

                <div className="testimonials-section__reviewer-copy">
                  <h3 className="testimonials-section__reviewer-name">
                    {testimonial.name}
                  </h3>
                  <p className="testimonials-section__reviewer-title">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
