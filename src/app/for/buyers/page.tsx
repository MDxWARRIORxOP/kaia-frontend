"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";

// import buyerConsultanciesImage from "../assets/images/buyer_for_consultancies.svg";
// import buyerHeroImage from "../assets/images/Buyer_main_image.svg";
// import buyerBenefitImage from "../assets/images/buyer_section3.svg";
// import buyerFeatureShieldIcon from "../assets/images/shield_buyer_icon.svg";
// import buyerMarketplaceImage from "../assets/images/buyer_section4.svg";
// import buyerJourneyImage from "../assets/images/buyer_section5.svg";
// import projectAmazonImage from "../assets/images/buyer_section6_1.svg";
// import projectRajasthanImage from "../assets/images/buyer_section6_2.svg";
// import projectKenyaImage from "../assets/images/buyer_section6_3.svg";
// import marketplaceMangroveImage from "../assets/images/mangrove_small_buyer.svg";
// import ctaImage from "../assets/images/AboutUs4.svg";
// import buyerNeonLeafIcon from "../assets/neon_green_leaf_icon_buyer.svg";
// import buyerFeatureThunderIcon from "../assets/akar-icons_thunder.svg";
// import goldenLeafIcon from "../assets/goldenleaf_small.svg";
// import buyerFeatureHandshakeIcon from "../assets/material-symbols-light_handshake-outline-rounded.svg";
// import buyersConsultanciesIcon from "../assets/env_icon_buyers.svg";
// import buyersEnterpriseIcon from "../assets/notes_icon_buyers.svg";
// import buyersAccountingIcon from "../assets/notepad_icon_buyers.svg";
// import buyersLeafIcon from "../assets/leaf_border_aboutus_icon.svg";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

import "./page.css";

const serviceCards = [
  {
    icon: "/icons/buyersEnterprise.svg",
    title: "Corporates & Enterprises",
    description:
      "Build net-zero commitments with verified credits that withstand scrutiny from regulators and stakeholders.",
  },
  {
    icon: "/images/buyerForConsultancies.svg",
    title: "Environmental Consultancies",
    description:
      "Source credits on behalf of your clients with full transparency on provenance, pricing, and retirement.",
  },
  {
    icon: "/icons/buyersAccountingIcon.svg",
    title: "Carbon Accounting Firms",
    description:
      "Integrate KAIA data into your reporting workflows via API. Turn procurement, tracking and compliance-ready documentation.",
  },
  {
    icon: "/icons/leafBorderIcon.svg",
    title: "Sustainability Teams",
    description:
      "Empower your team with tools to plan, purchase, and report on your carbon offset strategy - all in one platform.",
  },
];

const journeySteps = [
  {
    number: "01",
    title: "Create Your Account",
    description:
      "Sign up in minutes and get access to our full project catalogue with detailed impact metrics and pricing.",
    detail:
      "Onboarding takes less than 5 minutes. No credit card required to browse.",
  },
  {
    number: "02",
    title: "Browse & Select",
    description:
      "Filter by project type, geography, certification standard, or vintage. Find credits that align with your ESG mandates.",
    detail: "Smart filters · Saved searches · Recommendations",
  },
  {
    number: "03",
    title: "Purchase & Retire",
    description:
      "Complete transactions instantly with secure payment. Retire credits on-chain and receive verifiable digital certificates.",
    detail: "Blockchain-verified · Instant certificates",
  },
  {
    number: "04",
    title: "Report & Share",
    description:
      "Download audit-ready reports, ESG disclosures, and shareable impact dashboards for stakeholders.",
    detail: "TCFD · CDP · GRI templates included",
  },
];

const stats = [
  { value: "124+", label: "Verified Projects" },
  { value: "16+", label: "Countries" },
  { value: "8M+", label: "Tonnes Retired" },
  { value: "415+", label: "Corporate Buyers" },
];

const projects = [
  {
    image: "/images/buyerSection6_1.svg",
    tag: "Nature-Based",
    location: "Pará, Brazil",
    name: "Amazon Rainforest Conservation",
    metadata: ["Verra VCS", "REDD+", "1.2M tCO2"],
    price: "$15.00",
  },
  {
    image: "/images/buyerSection6_2.svg",
    tag: "Nature-Based",
    location: "Rajasthan, India",
    name: "Rajasthan Solar Farm Development",
    metadata: ["Gold Standard", "REDD+", "850K tCO2"],
    price: "$8.50",
  },
  {
    image: "/images/buyerSection6_3.svg",
    tag: "Health",
    location: "Pará, Brazil",
    name: "Kenya Clean Cookstoves Initiative",
    metadata: ["Household Energy", "340K tCO2e"],
    price: "$18.00",
  },
];

const marketplaceFeatures = [
  {
    icon: "/icons/buyerShield.svg",
    label: "Fully verified, high-integrity credits",
  },
  {
    icon: "/icons/buyerThunder.svg",
    label: "Real-time pricing and instant settlement",
  },
  {
    icon: "/icons/buyerHandshake.svg",
    label: "No intermediaries, no hidden margins",
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4.16699 10H15.8337M15.8337 10L10.8337 5M15.8337 10L10.8337 15"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationPinIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 14.3333C10.6667 11.6667 12 9.57733 12 8.06533C12 5.85619 10.2091 4.06531 8 4.06531C5.79086 4.06531 4 5.85619 4 8.06533C4 9.57733 5.33333 11.6667 8 14.3333Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="8"
        cy="8.06543"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function SectionEyebrow({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <span className={cn("buyers-page__eyebrow", className)}>
      <span className="buyers-page__eyebrow-line" />
      {children}
    </span>
  );
}

export default function BuyersPage() {
  const benefitFrameRef = useRef<HTMLDivElement | null>(null);
  const [isBenefitExpanded, setIsBenefitExpanded] = useState(false);
  const [activeJourneyIndex, setActiveJourneyIndex] = useState(0);

  useEffect(() => {
    const frame = benefitFrameRef.current;
    if (!frame) {
      setIsBenefitExpanded(true);
      return;
    }

    let animationFrame = 0;

    const updateBenefitState = () => {
      const rect = frame.getBoundingClientRect();
      const isFullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

      setIsBenefitExpanded((current) =>
        current === isFullyVisible ? current : isFullyVisible,
      );
    };

    const requestUpdate = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateBenefitState);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <div className="buyers-page">
      <section className="buyers-page__hero">
        <img
          src={"/images/buyerMain.svg"}
          alt="Fern growing in a forest stream"
          className="buyers-page__hero-image"
        />
        <div className="buyers-page__hero-overlay" />
        <div className="buyers-page__hero-map" aria-hidden="true">
          <span className="buyers-page__map-label buyers-page__map-label--green">
            Green
            <br />
            Environment
          </span>
          <span className="buyers-page__map-label buyers-page__map-label--carbon">
            Carbon Credits
          </span>
          <span className="buyers-page__map-line buyers-page__map-line--horizontal" />
          <span className="buyers-page__map-line buyers-page__map-line--vertical" />
          <span className="buyers-page__map-node buyers-page__map-node--leaf">
            <img
              src={"/icons/goldenLeafSmall.svg"}
              alt=""
              className="buyers-page__map-leaf"
            />
          </span>
          <span className="buyers-page__map-node buyers-page__map-node--pin">
            <span className="buyers-page__map-pulse" />
            <span className="buyers-page__map-dot" />
          </span>
        </div>
        <div className="buyers-page__hero-content">
          <span className="buyers-page__hero-pill">Buy Carbon Credits</span>
          <h1>
            Source <span>Credits</span> That
            <br />
            Actually Count.
          </h1>
          <p>
            Invest in a verifiable future. Every credit on KAIA is pre-screened
            against the highest international standards - protecting your brand
            and accelerating your net-zero journey.
          </p>
        </div>
      </section>

      <section className="buyers-page__section buyers-page__section--consultancies">
        <Container className="buyers-page__consultancies-container">
          <div className="buyers-page__consultancies-grid">
            <div className="buyers-page__consultancies-copy">
              <SectionEyebrow>For Consultancies</SectionEyebrow>
              <h2>
                Built for Consultancies
                <br />
                <span>Driving Climate Action</span>
              </h2>
              <p>
                KAIA empowers environmental consultants and carbon advisors to
                seamlessly integrate carbon offsetting into their client
                offerings, manage purchases, retire credits, and generate
                reports, all from one platform.
              </p>
              <Link href="/contact">
                <Button className="buyers-page__green-button">
                  Partner with KAIA
                  <ArrowIcon />
                </Button>
              </Link>
              <span className="buyers-page__supporting-text">
                Supporting ESG Leaders And Sustainability Teams Globally
              </span>
              <div className="buyers-page__users-row">
                <span />
                <span />
                <span />
                <strong>
                  25M<span>+</span>
                </strong>
                <em>Happy user</em>
              </div>
            </div>

            <div className="buyers-page__consultancies-media">
              <img
                src={"/images/buyerForConsultancies.svg"}
                alt="Consultants reviewing climate project data"
                className="buyers-page__consultancies-image"
              />
              <div className="buyers-page__metric-card buyers-page__metric-card--portfolio">
                <span>Client Portfolio</span>
                <strong>12 Projects</strong>
                <em>+18% last quarter</em>
              </div>
              <div className="buyers-page__metric-card buyers-page__metric-card--credits">
                <span>Credits Retired</span>
                <strong>
                  8,450 tCO<sub>2</sub>
                </strong>
                <div className="buyers-page__metric-bars" aria-hidden="true">
                  {[34, 52, 62, 48, 82, 42, 28, 46, 55, 64, 38, 50, 58, 72].map(
                    (height, index) => (
                      <i
                        key={`${height}-${index}`}
                        style={
                          { "--bar-height": `${height}%` } as CSSProperties
                        }
                      />
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        className={cn(
          "buyers-page__benefit",
          isBenefitExpanded && "buyers-page__benefit--active",
        )}
      >
        <div className="buyers-page__benefit-label">
          <SectionEyebrow>How Buyers Benefit</SectionEyebrow>
        </div>
        <div className="buyers-page__benefit-sticky">
          <div ref={benefitFrameRef} className="buyers-page__benefit-frame">
            <img
              src={"/images/buyerSection3.svg"}
              alt="Hands around a small green plant"
              className="buyers-page__benefit-image"
            />
            <div className="buyers-page__benefit-copy">
              <span className="buyers-page__benefit-pill">
                <span aria-hidden="true" />
                Gold Standard · Verra VCS · Puro.earth verified
              </span>
              <h2>
                Every project on KAIA is pre-screened against the highest
                international standards, protecting your brand from greenwashing
                claims.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="buyers-page__section buyers-page__marketplace">
        <Container>
          <div className="buyers-page__marketplace-grid">
            <div className="buyers-page__marketplace-media">
              <img
                src={"/images/buyerSection4.svg"}
                alt="Carbon credit marketplace preview"
                className="buyers-page__marketplace-image"
              />
              <div className="buyers-page__marketplace-offset-card">
                <div>
                  <span>Total Offset</span>
                  <strong>
                    <img
                      src={"/icons/neanGreenLeaf.svg"}
                      alt=""
                      aria-hidden="true"
                    />
                    1,256 tCO<sub>2</sub>
                  </strong>
                </div>
                <span className="buyers-page__marketplace-verified">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M3.5 8.25 6.45 11.2 12.5 5.15"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Verified
                </span>
              </div>
              <div className="buyers-page__marketplace-project-card">
                <img
                  src={"/images/buyerMangroveSmall.svg"}
                  alt="Mangrove restoration project"
                  className="buyers-page__marketplace-project-thumb"
                />
                <div className="buyers-page__marketplace-project-copy">
                  <strong>Mangrove Restoration</strong>
                  <span>Indonesia - Verra VCS</span>
                  <div
                    className="buyers-page__marketplace-progress"
                    aria-hidden="true"
                  >
                    <i />
                  </div>
                </div>
                <div className="buyers-page__marketplace-project-metric">
                  <span>Available</span>
                  <strong>
                    250,000,100 CO<sub>2</sub>
                  </strong>
                </div>
              </div>
            </div>

            <div className="buyers-page__marketplace-copy">
              <SectionEyebrow>Buy Carbon Credits</SectionEyebrow>
              <h2>
                Confidently Invest in
                <br />
                Carbon Credits That
                <br />
                <span>Deliver Real Impact</span>
              </h2>
              <p>
                Whether you&apos;re offsetting emissions or building a long-term
                climate strategy, KAIA gives you direct access to verified
                carbon credits with full transparency and zero friction.
              </p>
              <div className="buyers-page__marketplace-actions">
                <Link href="/marketplace">
                  <Button className="buyers-page__green-button">
                    Explore Marketplace
                    <ArrowIcon />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="secondary"
                    className="buyers-page__outline-button"
                  >
                    Talk to an Expert
                    <ArrowIcon />
                  </Button>
                </Link>
              </div>

              <div className="buyers-page__feature-row">
                {marketplaceFeatures.map((feature) => (
                  <span
                    key={feature.label}
                    className="buyers-page__feature-item"
                  >
                    <img src={feature.icon} alt="" aria-hidden="true" />
                    {feature.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="buyers-page__serve">
        <Container>
          <div className="buyers-page__serve-grid">
            <div>
              <SectionEyebrow>Who We Serve</SectionEyebrow>
              <h2>
                Built for
                <br />
                organizations
                <br />
                that mean it
              </h2>
            </div>

            <div className="buyers-page__service-grid">
              {serviceCards.map((card) => (
                <article key={card.title} className="buyers-page__service-card">
                  <span
                    className="buyers-page__service-icon"
                    aria-hidden="true"
                  >
                    <img src={card.icon} alt="" />
                  </span>
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="buyers-page__section buyers-page__journey">
        <Container>
          <SectionEyebrow>How It Works</SectionEyebrow>
          <h2>
            Your Journey to <span>Net Zero</span>
          </h2>

          <div className="buyers-page__journey-grid">
            <div className="buyers-page__journey-steps">
              {journeySteps.map((step, index) => (
                <article
                  key={step.title}
                  className={cn(
                    "buyers-page__journey-step",
                    index === activeJourneyIndex && "is-active",
                  )}
                >
                  <button
                    type="button"
                    className="buyers-page__journey-step-trigger"
                    onClick={() => setActiveJourneyIndex(index)}
                    aria-expanded={index === activeJourneyIndex}
                  >
                    <span className="buyers-page__journey-step-number">
                      {step.number}
                    </span>
                    <h3>{step.title}</h3>
                  </button>
                  <div className="buyers-page__journey-step-body">
                    <div className="buyers-page__journey-step-body-inner">
                      <p>{step.description}</p>
                      <span>{step.detail}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <img
              src={"/images/buyerSection5.svg"}
              alt="Green office building facade"
              className="buyers-page__journey-image"
            />
          </div>
        </Container>
      </section>

      <section className="buyers-page__stats">
        <Container>
          <div className="buyers-page__stats-grid">
            {stats.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="buyers-page__catalogue">
        <Container>
          <div className="buyers-page__catalogue-header">
            <SectionEyebrow>Project Catalogue</SectionEyebrow>
            <h2>
              Verified Projects, <span>Real</span>
              <br />
              <span>Impact</span>
            </h2>
            <p>
              Browse our curated selection of independently verified carbon
              credit projects spanning the globe.
            </p>
          </div>

          <div className="buyers-page__project-grid">
            {projects.map((project) => (
              <article key={project.name} className="buyers-page__project-card">
                <div className="buyers-page__project-media">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="buyers-page__project-image"
                  />
                </div>
                <div className="buyers-page__project-body">
                  <span className="buyers-page__project-location">
                    <LocationPinIcon />
                    {project.location}
                  </span>
                  <h3>{project.name}</h3>
                  <div className="buyers-page__project-meta">
                    {project.metadata.map((item, index) => (
                      <span key={`${project.name}-${item}`}>
                        {index > 0 ? <i aria-hidden="true" /> : null}
                        {item}
                      </span>
                    ))}
                  </div>
                  <div
                    className="buyers-page__project-divider"
                    aria-hidden="true"
                  />
                  <div className="buyers-page__project-price">
                    <span>Price per tonne</span>
                    <strong>{project.price}</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <Link href="/marketplace" className="buyers-page__catalogue-link">
            Explore KAIA Marketplace
            <ArrowIcon />
          </Link>
        </Container>
      </section>

      <section className="buyers-page__cta">
        <img
          src={"/images/aboutUs4.svg"}
          alt="Rolling green hills"
          className="buyers-page__cta-image"
        />
        <div className="buyers-page__cta-overlay" />
        <div className="buyers-page__cta-rings" aria-hidden="true">
          <span className="buyers-page__cta-ring buyers-page__cta-ring--outer" />
          <span className="buyers-page__cta-ring buyers-page__cta-ring--middle" />
          <span className="buyers-page__cta-ring buyers-page__cta-ring--inner" />
        </div>

        <div className="buyers-page__cta-content">
          <span className="buyers-page__cta-kicker" aria-hidden="true" />
          <h2>Ready To Make Your Climate Commitment Count?</h2>
          <p>
            Join Organizations Already Using KAIA To Buy, Sell, And Retire
            Carbon Credits With Confidence.
          </p>

          <div className="buyers-page__cta-actions">
            <Link href="/contact">
              <Button className="buyers-page__cta-button buyers-page__cta-button--primary">
                Buy Carbon Credits
                <ArrowIcon />
              </Button>
            </Link>
            <Link href="/marketplace">
              <Button className="buyers-page__cta-button buyers-page__cta-button--secondary">
                Explore Marketplace
                <ArrowIcon />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
