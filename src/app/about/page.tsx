"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

import "./page.css";
import Link from "next/link";

const missionPoints = [
  {
    eyebrow: "The Problem",
    title: "Carbon markets weren't built for everyone",
    description:
      "Participation in voluntary carbon markets required deep expertise, significant capital, and opaque intermediaries. Most businesses couldn't access it at all.",
    highlight:
      "Only ~3% of global businesses actively participate in voluntary carbon markets prior to modern infrastructure platforms.",
  },
  {
    eyebrow: "The Gap",
    title: "Projects generating credits had no efficient route to buyers",
    description:
      "Project developers had to depend on fragmented broker networks, slow introductions, and inconsistent discovery to find serious buyers.",
    highlight:
      "Disconnected supply and buyer demand created delays, pricing opacity, and low conversion for high-quality projects.",
  },
  {
    eyebrow: "The Solution",
    title: "KAIA: infrastructure that bridges both sides",
    description:
      "We built the connective tissue - a marketplace, a protocol, and an API layer - that connects verified project developers directly with corporate buyers, consultancies, and individuals.",
    highlight:
      "150+ projects · 38 countries · instant on-chain settlement · no intermediaries",
  },
  {
    eyebrow: "Today & Beyond",
    title: "From idea to measurable environmental impact",
    description:
      "What started as an idea to unlock value in carbon reduction is now evolving into a platform focused on real, measurable environmental impact - for every actor in the market.",
    highlight:
      "2.4M+ tonnes retired on-chain · 1,200+ organisations · growing globally",
  },
];

const valueCards = [
  {
    title: "Trust & Integrity",
    description:
      "Every credit on KAIA is verified through internationally recognized standards. We never compromise on quality or provenance.",
    icon: "/icons/trust.svg",
  },
  {
    title: "Radical Transparency",
    description:
      "Full visibility into project data, pricing history, and verification status. No hidden fees, no opaque processes.",
    icon: "/icons/radical_transparency.svg",
  },
  {
    title: "Global Access",
    description:
      "We remove geographic and financial barriers, enabling projects from 20+ countries to reach buyers worldwide.",
    icon: "/icons/global_access.svg",
  },
  {
    title: "Speed & Simplicity",
    description:
      "What used to take months of broker negotiations now happens in clicks. Instant settlement, zero middlemen.",
    icon: "/icons/speed_simplicity.svg",
  },
  {
    title: "Impact First",
    description:
      "We prioritize projects that deliver measurable co-benefits - biodiversity, community development, clean water.",
    icon: "/icons/leaf_border_aboutus.svg",
  },
  {
    title: "Community Driven",
    description:
      "Built in collaboration with project developers, NGOs, and corporate sustainability teams who shaped every feature.",
    icon: "/icons/community_driven.svg",
  },
];

const infrastructureCards = [
  {
    index: "01",
    title: "Full Market Transparency",
    description:
      "Live pricing, order book depth, and retirement history - visible to every participant. No information asymmetry, no hidden markups.",
    linkLabel: "Explore marketplace",
  },
  {
    index: "02",
    title: "Direct P2P\nConnections",
    description:
      "Buyers and sellers transact directly. No broker in the middle, no excessive fees, no waiting for a third party to confirm the deal.",
    linkLabel: "See how it works",
  },
  {
    index: "03",
    title: "Immutable Proof of Retirement",
    description:
      "Every retirement is recorded on Polygon mainnet the instant it happens. Permanent, public, and tamper-proof. Your certificate is cryptographically real.",
    linkLabel: "View a sample certificate",
  },
  {
    index: "04",
    title: "Programmable Carbon Operations",
    description:
      "Automated retirement via API, webhook triggers, and white-label SDKs. Embed carbon infrastructure into any product, workflow, or reporting system.",
    linkLabel: "Read the API docs",
  },
];

const teamMembers = [
  {
    name: "Aryan Kapoor",
    role: "CEO & Co-Founder",
    description:
      "A decade of experience spanning carbon finance, climate policy, and marketplace platforms. Previously led ESG strategy at a global commodities firm.",
    image: "/images/testimonial3.svg",
  },
  {
    name: "Shreya Rao",
    role: "CTO & Co-Founder",
    description:
      "Full-stack blockchain engineer with deep expertise in DeFi protocols and environmental asset tokenisation. Polygon ecosystem contributor since 2021.",
    image: "/images/testimonial3.svg",
  },
  {
    name: "James Muturi",
    role: "Head of Markets",
    description:
      "Former Verra project developer with 8 years validating forest conservation and cookstove projects across East Africa and Southeast Asia.",
    image: "/images/testimonial3.svg",
  },
  {
    name: "Priya Lal",
    role: "Head of Growth",
    description:
      "Built go-to-market for two climate fintech exits. Specialist in B2B sustainability software, enterprise carbon procurement, and ESG communications.",
    image: "/images/testimonial3.svg",
  },
];

function SectionEyebrow({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <span className={cn("about-page__eyebrow", className)}>
      <span className="about-page__eyebrow-line" />
      {children}
    </span>
  );
}

export default function AboutUsPage() {
  const [hoveredMissionPoint, setHoveredMissionPoint] = useState<number | null>(
    null,
  );
  const [pinnedMissionPoint, setPinnedMissionPoint] = useState<number | null>(
    null,
  );
  const activeMissionPoint = hoveredMissionPoint ?? pinnedMissionPoint;

  return (
    <div className="about-page">
      <section className="about-page__hero">
        <div className="about-page__hero-frame">
          <img
            src={"/images/aboutUsMainImage.png"}
            alt="Wind turbines over green hills"
            className="about-page__hero-image"
          />
          <div className="about-page__hero-overlay" />

          <div className="about-page__hero-content">
            <span className="about-page__hero-pill">ABOUT KAIA</span>
            <h1 className="about-page__hero-title">
              Building The Future Of
              <br />
              Climate Commerce
            </h1>
            <p className="about-page__hero-copy">
              KAIA was built on a simple realization: while the world is rapidly
              moving towards sustainability, many businesses still struggle to
              access and participate in carbon markets. We exist to change that.
            </p>
          </div>
        </div>
      </section>

      <section className="about-page__section about-page__section--story">
        <Container className="about-page__story-container">
          <SectionEyebrow className="about-page__eyebrow--story">
            Our Story
          </SectionEyebrow>

          <div className="about-page__story-grid">
            <div className="about-page__story-visual">
              <img
                src={"/images/about_us_2.svg"}
                alt="A lone tree across a green landscape"
                className="about-page__story-image"
              />
              <div className="about-page__story-stat">
                <strong>500M+</strong>
                <span>Carbon credits generated each year worldwide</span>
              </div>
            </div>

            <div className="about-page__story-copy">
              <h2 className="about-page__section-title about-page__story-title">
                <span className="about-page__story-title-primary">
                  KAIA was built on a simple realisation - while the world is
                  rapidly moving towards sustainability,
                </span>
                <span className="about-page__story-title-muted">
                  many businesses still struggle to access and participate in
                  carbon markets.
                </span>
              </h2>

              <p>
                The world generates over 500 million carbon credits annually,
                yet most never reach the organizations that need them. Complex
                intermediaries, opaque pricing, and fragmented markets have left
                climate action locked behind closed doors.
              </p>

              <p>
                KAIA was built to change that. We connect project developers
                directly with corporate buyers, making carbon credit
                transactions accessible, transparent, and fair.
              </p>

              <Button className="about-page__story-button px-5 py-3 text-[14px] font-medium">
                Contact Us &rarr;
              </Button>
            </div>
          </div>

          <div className="about-page__story-highlight">
            <span className="about-page__badge">
              <span className="about-page__badge-dot" />
              Building Climate Infrastructure for The Next Era
            </span>
            <h3 className="about-page__story-highlight-title">
              <span className="about-page__story-highlight-primary">
                The world generates over 500 million carbon credits annually -
                yet never reach the organizations that need them.
              </span>
              <span className="about-page__story-highlight-muted">
                Complex intermediaries, opaque pricing, and fragmented markets
                keep climate action locked behind closed doors.
              </span>
            </h3>
          </div>
        </Container>

        <div className="about-page__landscape-bleed">
          <img
            src={"/images/aboutUsWindmills.svg"}
            alt="Wind turbines beside a river valley"
            className="about-page__landscape-image"
          />
        </div>
      </section>

      <section className="about-page__section about-page__section--mission">
        <Container>
          <div className="about-page__mission-grid">
            <div className="about-page__mission-copy">
              <SectionEyebrow>Our Mission</SectionEyebrow>

              <h2 className="about-page__section-title about-page__section-title--mission">
                <span>A World Where Every</span>
                <span>Tonne of Carbon has a</span>
                <span>
                  <span className="about-page__mission-accent">Price</span> and
                  a <span className="about-page__mission-accent">Purpose</span>
                </span>
              </h2>

              <p>
                We started KAIA to bridge this gap by connecting project
                developers with corporate buyers, simplifying carbon credit
                transactions and making climate action more accessible,
                transparent, and scalable.
              </p>

              <p>
                We envision carbon markets that are as liquid, transparent, and
                accessible as traditional financial markets, powering the
                transition to a net-zero economy.
              </p>

              <blockquote className="about-page__quote">
                <p>
                  "What began as an idea to unlock value in carbon reduction is
                  now evolving into a platform focused on enabling real,
                  measurable environmental impact."
                </p>
                <footer>KAIA FOUNDER</footer>
              </blockquote>
            </div>

            <div className="about-page__mission-points">
              <div className="about-page__mission-track" aria-hidden="true" />
              {missionPoints.map((point, index) => (
                <article
                  key={point.title}
                  className={cn(
                    "about-page__mission-card",
                    activeMissionPoint === index &&
                      "about-page__mission-card--active",
                  )}
                  onMouseLeave={() => setHoveredMissionPoint(null)}
                >
                  <button
                    type="button"
                    className="about-page__mission-trigger"
                    onMouseEnter={() => setHoveredMissionPoint(index)}
                    onFocus={() => setHoveredMissionPoint(index)}
                    onBlur={() => setHoveredMissionPoint(null)}
                    onClick={() =>
                      setPinnedMissionPoint((current) =>
                        current === index ? null : index,
                      )
                    }
                    aria-expanded={activeMissionPoint === index}
                  >
                    <span
                      className="about-page__mission-marker"
                      aria-hidden="true"
                    >
                      <span className="about-page__mission-marker-core" />
                    </span>
                    <div className="about-page__mission-trigger-copy">
                      <span className="about-page__mission-card-label">
                        {point.eyebrow}
                      </span>
                      <h3>{point.title}</h3>
                    </div>
                  </button>

                  <div
                    className={cn(
                      "about-page__mission-panel",
                      activeMissionPoint === index &&
                        "about-page__mission-panel--active",
                    )}
                  >
                    <p>{point.description}</p>
                    <div className="about-page__mission-highlight">
                      {point.highlight}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="about-page__section about-page__section--values">
        <Container>
          <div className="about-page__values-grid">
            <div className="about-page__values-copy">
              <SectionEyebrow>Our Values</SectionEyebrow>
              <h2 className="about-page__section-title about-page__section-title--values">
                What Drives
                <br />
                Every Decision
              </h2>
              <p>
                These aren't wall posters - they're the principles embedded in
                every line of code and every partnership we form.
              </p>
            </div>

            <div className="about-page__values-cards">
              {valueCards.map((value) => (
                <article key={value.title} className="about-page__value-card">
                  <div className="about-page__value-card-header">
                    <span className="about-page__value-icon">
                      <img src={value.icon} alt="" aria-hidden="true" />
                    </span>
                    <div className="about-page__value-card-copy">
                      <h3>{value.title}</h3>
                      <p>{value.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="about-page__infrastructure">
        <Container>
          <div className="about-page__infrastructure-header">
            <SectionEyebrow>Infrastructure</SectionEyebrow>
            <h2 className="about-page__infrastructure-title">
              We provide the rails
              <br />
              climate finance runs on.
            </h2>
            <p>
              Not just a marketplace, a full-stack infrastructure layer for
              <br />
              verified carbon markets.
            </p>
          </div>

          <div className="about-page__infra-grid">
            {infrastructureCards.map((card) => (
              <article key={card.title} className="about-page__infra-card">
                <span className="about-page__infra-card-index">
                  {card.index}
                </span>
                <img
                  src={"/icons/chart.svg"}
                  alt=""
                  aria-hidden="true"
                  className="about-page__infra-card-icon"
                />
                <h3>
                  {card.title.split("\n").map((line, index) => (
                    <span key={`${card.index}-${line}`}>
                      {index > 0 ? <br /> : null}
                      {line}
                    </span>
                  ))}
                </h3>
                <p>{card.description}</p>
                <span className="about-page__infra-card-link">
                  <span>{card.linkLabel}</span>
                  <span
                    className="about-page__infra-card-link-icon"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.33301 8H12.6663M12.6663 8L8.66634 4M12.6663 8L8.66634 12"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </span>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="about-page__cta">
        <div className="about-page__cta-frame">
          <img
            src={"/images/aboutUs4.svg"}
            alt="Rolling green hills"
            className="about-page__cta-image"
          />
          <div className="about-page__cta-overlay" />
          <div className="about-page__cta-rings" aria-hidden="true">
            <span className="about-page__cta-ring about-page__cta-ring--outer" />
            <span className="about-page__cta-ring about-page__cta-ring--middle" />
            <span className="about-page__cta-ring about-page__cta-ring--inner" />
          </div>

          <div className="about-page__cta-content">
            <span className="about-page__cta-kicker" aria-hidden="true" />
            <h2>Ready To Make Your Climate Commitment Count?</h2>
            <p>
              Join Organizations Already Using KAIA To Buy, Sell, And Retire
              Carbon Credits With Confidence.
            </p>

            <div className="about-page__cta-actions">
              <Button className="about-page__cta-button about-page__cta-button--primary">
                <span>Buy Carbon Credits</span>
                <span
                  className="about-page__cta-button-icon"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33301 8H12.6663M12.6663 8L8.66634 4M12.6663 8L8.66634 12"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Button>
              <Button className="about-page__cta-button about-page__cta-button--secondary">
                <span>Explore Marketplace</span>
                <span
                  className="about-page__cta-button-icon"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33301 8H12.6663M12.6663 8L8.66634 4M12.6663 8L8.66634 12"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="about-page__section about-page__section--team">
        <Container>
          <div className="about-page__team-header">
            <SectionEyebrow>The Team</SectionEyebrow>
            <h2 className="about-page__section-title about-page__section-title--centered">
              Built by People Who Understand Both Sides
            </h2>
            <p>
              Climate expertise, financial technology, and blockchain
              infrastructure combined in one team with a singular mission.
            </p>
          </div>

          <div className="about-page__team-grid">
            {teamMembers.map((member) => (
              <article key={member.name} className="about-page__team-card">
                <div className="about-page__team-media">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="about-page__team-image"
                  />
                </div>
                <div className="about-page__team-copy">
                  <h3>{member.name}</h3>
                  <span>{member.role}</span>
                  <p>{member.description}</p>
                </div>
                <Link href="/" className="about-page__team-link">
                  <img
                    src={"/icons/linkedin.svg"}
                    alt=""
                    aria-hidden="true"
                    className="about-page__team-link-icon"
                  />
                  LinkedIn
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
