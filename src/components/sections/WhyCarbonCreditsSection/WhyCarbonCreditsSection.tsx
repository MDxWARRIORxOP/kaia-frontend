import Link from "next/link";
import { Button } from "../../ui/Button";
import { Container } from "../../ui/Container";

import "./WhyCarbonCreditsSection.css";

const bulletPoints = [
  {
    lead: "Nature-based solutions could deliver up to ",
    emphasis: "37% of required climate mitigation",
    tail: " by 2030",
  },
  {
    lead: "Renewable energy could reduce up to ",
    emphasis: "70% of global emissions",
    tail: " by 2050",
  },
  {
    lead: "Carbon removal will be essential to reach ",
    emphasis: "net-zero emissions",
    tail: " globally",
  },
  {
    lead: "Over ",
    emphasis: "90% of global companies",
    tail: " have committed to net-zero targets",
  },
  {
    lead: "",
    emphasis: "Carbon credits",
    tail: " enable organizations to act immediately, even before full decarbonization",
  },
];

const barChartItems = [
  { label: "20%", fill: "28%", modifier: "" },
  { label: "30%", fill: "38%", modifier: "" },
  {
    label: "55%",
    fill: "52%",
    modifier: "why-carbon-credits__chart-bar-fill--tall",
  },
  {
    label: "70%",
    fill: "70%",
    modifier: "why-carbon-credits__chart-bar-fill--green",
  },
];

export function WhyCarbonCreditsSection() {
  return (
    <section
      className="why-carbon-credits"
      aria-labelledby="why-carbon-credits-heading"
    >
      <Container className="why-carbon-credits__container">
        <div className="why-carbon-credits__panel">
          <div className="why-carbon-credits__copy">
            <h2
              id="why-carbon-credits-heading"
              className="why-carbon-credits__heading"
            >
              <span className="why-carbon-credits__heading-row">
                <span className="why-carbon-credits__heading-line">Why</span>{" "}
                <span className="why-carbon-credits__heading-line why-carbon-credits__heading-line--accent">
                  Carbon
                </span>
              </span>
              <span className="why-carbon-credits__heading-row">
                <span className="why-carbon-credits__heading-line why-carbon-credits__heading-line--accent">
                  Credits
                </span>{" "}
                <span className="why-carbon-credits__heading-line">Exist</span>
              </span>
            </h2>

            <p className="why-carbon-credits__intro">
              Carbon credits represent one tonne of CO&#8322; reduced or removed
              from the atmosphere. They allow organizations to take
              responsibility for emissions that cannot yet be eliminated, while
              funding projects that actively restore environmental balance.
            </p>

            <ul
              className="why-carbon-credits__bullets"
              aria-label="Carbon credits highlights"
            >
              {bulletPoints.map((point) => (
                <li
                  key={`${point.lead}-${point.emphasis}`}
                  className="why-carbon-credits__bullet-item"
                >
                  <img
                    src={"/icons/goldenLeafSmall.svg"}
                    alt=""
                    aria-hidden="true"
                    className="why-carbon-credits__bullet-icon"
                  />
                  <span className="why-carbon-credits__bullet-copy">
                    {point.lead}
                    <strong>{point.emphasis}</strong>
                    {point.tail}
                  </span>
                </li>
              ))}
            </ul>

            <Link href="/contact">
              <Button className="why-carbon-credits__button">
                Contact Us &rarr;
              </Button>
            </Link>
          </div>

          <div className="why-carbon-credits__media">
            <img
              src={"/images/windmillSection5.svg"}
              alt="A wind turbine overlooking a coastal city skyline beyond dense green foliage"
              className="why-carbon-credits__image"
            />

            <aside className="why-carbon-credits__insight-card">
              <p className="why-carbon-credits__insight-value">$100B+</p>
              <p className="why-carbon-credits__insight-title">
                carbon market opportunity by 2030
              </p>
              <p className="why-carbon-credits__insight-note">
                To stay within climate targets, emissions must drop by 45% by
                2030
              </p>

              <div className="why-carbon-credits__chart" aria-hidden="true">
                {barChartItems.map((item) => (
                  <div
                    key={item.label}
                    className="why-carbon-credits__chart-column"
                  >
                    <div className="why-carbon-credits__chart-bar">
                      <span
                        className={`why-carbon-credits__chart-bar-fill ${item.modifier}`}
                        style={{ height: item.fill }}
                      />
                    </div>
                    <span className="why-carbon-credits__chart-label">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}
