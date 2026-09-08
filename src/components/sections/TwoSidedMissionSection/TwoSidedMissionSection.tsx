import Link from "next/link";
import { Container } from "../../ui/Container";

import "./TwoSidedMissionSection.css";

type MissionCard = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  link: string;
  image: string;
  tone: "buyer" | "seller";
};

const missionCards: MissionCard[] = [
  {
    eyebrow: "For Buyers",
    title: "Invest in credits that create real impact",
    body: "Access 150+ verified carbon projects. Browse by methodology, geography, or vintage - and retire credits with full transparency.",
    cta: "Explore Buyer Platform",
    link: "/for/buyers",
    image: "/images/windmillSection7.svg",
    tone: "buyer",
  },
  {
    eyebrow: "For Sellers",
    title: "List once. Sell globally.",
    body: "Set your own pricing, maintain full ownership, and reach corporate buyers worldwide through fast, transparent settlement.",
    cta: "Explore Seller Platform",
    link: "/for/sellers",
    image: "/images/oceanProject7.svg",
    tone: "seller",
  },
];

function BuyerIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="two-sided-mission__badge-svg"
    >
      <path
        d="M7 6h13l-1.4 7.2a2 2 0 0 1-2 1.6H10a2 2 0 0 1-2-1.5L6.2 4.8H4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10.2" cy="18.4" r="1.3" fill="currentColor" />
      <circle cx="16.4" cy="18.4" r="1.3" fill="currentColor" />
    </svg>
  );
}

function SellerIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="two-sided-mission__badge-svg"
    >
      <path
        d="M5 9.2h14v9.3H5zM7.2 9.2V6.8l1.5-1.8h6.6l1.5 1.8v2.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 13.2h6M12 11v4.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CardIcon({ tone }: { tone: MissionCard["tone"] }) {
  return tone === "buyer" ? <BuyerIcon /> : <SellerIcon />;
}

export function TwoSidedMissionSection() {
  return (
    <section
      className="two-sided-mission"
      aria-labelledby="two-sided-mission-heading"
    >
      <Container className="two-sided-mission__container">
        <div className="two-sided-mission__intro">
          <h2
            id="two-sided-mission-heading"
            className="two-sided-mission__heading"
          >
            <span className="two-sided-mission__heading-dark">Two Sides.</span>{" "}
            <span className="two-sided-mission__heading-accent">
              One Mission.
            </span>
          </h2>

          <p className="two-sided-mission__subtext">
            Whether you&apos;re looking to offset your carbon footprint or
            monetize your environmental projects, KAIA has the infrastructure
            you need.
          </p>
        </div>

        <div
          className="two-sided-mission__cards"
          aria-label="Buyer and seller platform choices"
        >
          {missionCards.map((card) => (
            <article
              key={card.eyebrow}
              className={`two-sided-mission__card two-sided-mission__card--${card.tone}`}
            >
              <img
                src={card.image}
                alt=""
                aria-hidden="true"
                className="two-sided-mission__image"
              />

              <div className="two-sided-mission__overlay" />

              <div className="two-sided-mission__content">
                <div className="two-sided-mission__eyebrow">
                  <span
                    className={`two-sided-mission__badge two-sided-mission__badge--${card.tone}`}
                  >
                    <CardIcon tone={card.tone} />
                  </span>
                  <span className="two-sided-mission__eyebrow-label">
                    {card.eyebrow}
                  </span>
                </div>

                <h3 className="two-sided-mission__card-title">{card.title}</h3>
                <p className="two-sided-mission__card-body">{card.body}</p>

                <Link
                  href={card.link}
                  type="button"
                  className="two-sided-mission__card-button"
                >
                  <span>{card.cta}</span>
                  <span
                    aria-hidden="true"
                    className="two-sided-mission__card-button-arrow"
                  >
                    &rarr;
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
