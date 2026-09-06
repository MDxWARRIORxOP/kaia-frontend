import { Container } from "../../ui/Container";

import "./ClimateConfidenceSection.css";

const featureCards = [
  {
    title: "Verified Quality, Not Guesswork",
    body: "Every project on KAIA is independently verified and screened for integrity, ensuring your investment creates real impact.",
  },
  {
    title: "Compare Before You Commit",
    body: "Evaluate projects across geographies, methodologies, and impact types. Make decisions based on transparency, not assumptions.",
  },
];

export function ClimateConfidenceSection() {
  return (
    <section
      className="climate-confidence"
      aria-labelledby="climate-confidence-heading"
    >
      <Container className="climate-confidence__container">
        <div className="climate-confidence__layout">
          <div className="climate-confidence__content">
            <h2
              id="climate-confidence-heading"
              className="climate-confidence__heading"
            >
              <span className="climate-confidence__heading-line">
                Make Climate Decisions
              </span>
              <span className="climate-confidence__heading-line">
                With Confidence
              </span>
            </h2>

            <p className="climate-confidence__intro">
              Navigating Carbon Markets Is Complex. KAIA Gives You The Clarity,
              Data, And Access Needed To Make Informed, High-Impact Decisions
              Without Uncertainty.
            </p>
          </div>

          <div
            className="climate-confidence__cards"
            aria-label="Climate confidence highlights"
          >
            {featureCards.map((card) => (
              <article key={card.title} className="climate-confidence__card">
                <img
                  src={"/icons/blackLeafSmall.svg"}
                  alt=""
                  aria-hidden="true"
                  className="climate-confidence__card-icon"
                />
                <h3 className="climate-confidence__card-title">{card.title}</h3>
                <p className="climate-confidence__card-body">{card.body}</p>
              </article>
            ))}
          </div>

          <div className="climate-confidence__media">
            <img
              src={"/images/roofSection7.svg"}
              alt="An aerial view of industrial rooftops and factory buildings under warm evening light"
              className="climate-confidence__image"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
