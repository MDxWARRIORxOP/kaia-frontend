import { Container } from "../../ui/Container";

import "./PlatformHighlights.css";

const trustCardCopy = {
  title:
    "Trusted by forward-thinking climate leaders worldwide chosen by organizations driving real climate impact",
  value: "2,500+",
  label: "Carbon Credits Sold",
};

const statCardCopy = {
  title: "Global carbon emissions exceed 36 billion tonnes of CO2 per year",
  label: "1 Carbon Credit = 1 tonne of CO2 reduced",
};

export function PlatformHighlights() {
  return (
    <section
      className="platform-highlights"
      aria-labelledby="platform-highlights-title"
    >
      <Container className="platform-highlights__container">
        <div className="platform-highlights__intro">
          <div className="platform-highlights__badge">
            <span
              className="platform-highlights__badge-dot"
              aria-hidden="true"
            />
            <span>A Carbon Market That Actually Works</span>
          </div>

          <h2
            id="platform-highlights-title"
            className="platform-highlights__title"
          >
            KAIA connects project developers and buyers through a transparent,
            real-time platform. No intermediaries, no opacity.
            <span className="platform-highlights__title-accent">
              {" "}
              Just verified credits, instant transactions, and measurable
              outcomes.
            </span>
          </h2>
        </div>

        <div className="platform-highlights__grid">
          <article className="platform-card platform-card--light">
            <div className="platform-card__icon-wrap">
              <img
                src={"/icons/greenPlantSmall.svg"}
                alt=""
                aria-hidden="true"
                className="platform-card__icon platform-card__icon--plant"
              />
            </div>

            <div className="platform-card__body">
              <p className="platform-card__copy">{trustCardCopy.title}</p>
              <p className="platform-card__metric">{trustCardCopy.value}</p>
              <p className="platform-card__label">{trustCardCopy.label}</p>
            </div>
          </article>

          <article className="platform-card platform-card--image">
            <img
              src={"/icons/windmillImage.svg"}
              alt="A wind turbine standing in a dry field under a bright sky"
              className="platform-card__image"
            />

            <div className="platform-card__image-overlay">
              <h3 className="platform-card__image-title">KAIA&apos;s Vision</h3>
              <p className="platform-card__image-copy">
                A world where climate action is measurable, transparent, and
                integrated into every business decision.
              </p>
            </div>
          </article>

          <article className="platform-card platform-card--accent">
            <div className="platform-card__icon-wrap platform-card__icon-wrap--outline">
              <img
                src={"/icons/leafBadge.svg"}
                alt=""
                aria-hidden="true"
                className="platform-card__icon"
              />
            </div>

            <div className="platform-card__body platform-card__body--split">
              <p className="platform-card__copy platform-card__copy--compact">
                {statCardCopy.title}
              </p>

              <div className="platform-card__credit">
                <div className="platform-card__credit-icons" aria-hidden="true">
                  <span className="platform-card__credit-icon-shell platform-card__credit-icon-shell--light">
                    <img
                      src={"/icons/kaiaIconSmall.svg"}
                      alt=""
                      className="platform-card__credit-icon"
                    />
                  </span>
                  <span className="platform-card__credit-icon-shell platform-card__credit-icon-shell--dark">
                    <img
                      src={"/icons/worldIconSmall.svg"}
                      alt=""
                      className="platform-card__credit-icon"
                    />
                  </span>
                </div>

                <p className="platform-card__credit-text">
                  {statCardCopy.label}
                </p>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
