"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

import "./page.css";
import Link from "next/link";

const scaleFeatures = [
  {
    icon: "/icons/sellerScale1.svg",
    title: "Global Market Exposure",
    description:
      "Gain instant visibility with multinational corporations and ESG funds actively seeking high-quality offsets. KAIA's distribution network spans 40+ countries with a growing base of verified buyers.",
  },
  {
    icon: "/icons/sellerScale2.svg",
    title: "Stay in Control",
    description:
      "Maintain full ownership of your credits and set your own pricing. No exclusivity clauses, no hidden margins - just transparent access to the market with clear tracking at every step.",
  },
  {
    icon: "/icons/sellerScale3.svg",
    title: "One Platform, Multiple Channels",
    description:
      "List your credits once and access multiple sales channels - including direct corporate buyers and structured transactions. KAIA handles the discovery so you focus on impact.",
  },
  {
    icon: "/icons/sellerScale4.svg",
    title: "Reliable, Fast Settlements",
    description:
      "KAIA ensures secure, transparent transactions with clear tracking and efficient settlement - giving you confidence and capital at every step without the traditional broker delays.",
  },
];

const acceptedRegistries = [
  {
    title: "Verra VCS",
    description:
      "Verified Carbon Standard - world's largest voluntary GHG program",
  },
  {
    title: "Gold Standard",
    description: "Rigorous standards for climate and development impact",
  },
  {
    title: "ICR",
    description: "Indian Carbon Registry - leading offset program since 2015",
  },
  {
    title: "And More!",
    description: "Additional registries and programs available",
  },
];

const lifecycleSteps = [
  {
    number: "01",
    title: "Assess (Feasibility)",
    description:
      "We evaluate your project's carbon potential, calculate estimated tonnes CO2e, and identify the right methodology and registry for maximum revenue.",
    side: "left",
  },
  {
    number: "02",
    title: "Register (Listing)",
    detail: "GOAL: FORMALIZE THE PROJECT.",
    description:
      "Action: Submit a Project Design Document (PDD) to a global registry (e.g., Verra or Gold Standard) for public review.",
    side: "right",
  },
  {
    number: "03",
    title: "Verify (Auditing)",
    detail: "GOAL: PROVE THE CO2 IMPACT.",
    description:
      "Independent third-party auditors (VVBs) inspect the site and data to confirm actual emissions reduced or removed.",
    side: "left",
  },
  {
    number: "04",
    title: "Issue (Minting)",
    description:
      "Once verified, carbon credits are issued directly to your registry account.",
    side: "right",
  },
  {
    number: "05",
    title: "Sell (Monetization)",
    detail: "GOAL: LIQUIDATE AND RETIRE.",
    description:
      'Credits are sold to corporations or on exchanges. Once used to offset emissions, they are "Retired" to prevent double-counting.',
    side: "left",
  },
];

const sellingSteps = [
  {
    number: "01",
    title: "Register & Verify",
    description:
      "Submit your project documentation and certifications. Our team reviews and onboards you within days, not months.",
    detail: "Verra · Gold Standard · Paris-aligned",
  },
  {
    number: "02",
    title: "List Your Credits",
    description:
      "KAIA's technical team reviews the project's Active status, credit availability, vintage information, and compliance history.",
    detail: "Average review time: 48 hours",
  },
  {
    number: "03",
    title: "Get Matched",
    description:
      "Your project is featured on the KAIA Marketplace with a dedicated Impact Page - complete with imagery, methodology details, and SDG alignment.",
    detail: "Dedicated project page · SEO optimized",
  },
  {
    number: "04",
    title: "Settle & Scale",
    description:
      "Receive direct inquiries from qualified corporate buyers. Track performance, manage pricing, and scale your portfolio from a single dashboard.",
    detail: "Multi-currency · Auto-invoicing · Growth analytics",
  },
];

const consultancyChecklist = [
  {
    title: "Registry Verification",
    description:
      "Project must be registered and active with Verra VCS, Gold Standard, or ACR",
  },
  {
    title: "Active Credit Status",
    description:
      "Credits must be unsold and available in the relevant registry database",
  },
  {
    title: "Project Documentation",
    description:
      "Full project description, methodology, and monitoring reports must be available",
  },
  {
    title: "Legal Entity",
    description:
      "Seller must be a registered entity or authorized representative of the project",
  },
];

const growthBars = [
  22, 34, 26, 42, 31, 48, 39, 55, 46, 60, 44, 72, 82, 92, 76, 64, 54, 43, 41,
  44, 52, 47, 59, 50, 36,
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
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

function SectionEyebrow({ children }: { children: string }) {
  return (
    <span className="sellers-page__eyebrow">
      <span className="sellers-page__eyebrow-line" />
      {children}
    </span>
  );
}

export default function SellersPage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="sellers-page">
      <section className="sellers-page__hero">
        <img
          src={"/images/sellerMain.svg"}
          alt="Climate project landscape"
          className="sellers-page__hero-image"
        />
        <div className="sellers-page__hero-overlay" />

        <div className="sellers-page__hero-content">
          <span className="sellers-page__hero-pill">Sell Carbon Credits</span>
          <h1>
            List Once.
            <br />
            Sell Globally.
          </h1>
          <p>
            Connect your verified environmental project to global liquidity.
            KAIA offers open market access for carbon credits - reach
            multinational buyers actively seeking high-quality offsets.
          </p>
          <Link href="/contact?active=1">
            <Button className="sellers-page__hero-button">
              List Your Project
              <ArrowIcon />
            </Button>
          </Link>
        </div>

        <div className="sellers-page__hero-proof-card">
          <img
            src={"/images/sellerPlant.svg"}
            alt="Verified environmental project"
            className="sellers-page__hero-proof-image"
          />
          <div className="sellers-page__hero-proof-copy">
            <div className="sellers-page__hero-proof-icons" aria-hidden="true">
              <span className="sellers-page__hero-proof-icon sellers-page__hero-proof-icon--plant">
                <img src={"/icons/greenPlantSmall.svg"} alt="" />
              </span>
              <span className="sellers-page__hero-proof-icon sellers-page__hero-proof-icon--world">
                <img src={"/icons/worldIconSmall.svg"} alt="" />
              </span>
            </div>
            <strong>300+</strong>
            <p>
              Every credit on KAIA is linked to a verified environmental
              project.
            </p>
          </div>
        </div>
      </section>

      <section className="sellers-page__lifecycle">
        <Container className="sellers-page__wide-container">
          <div className="sellers-page__lifecycle-grid">
            <div className="sellers-page__lifecycle-media">
              <div className="sellers-page__lifecycle-media-sticky">
                <img
                  src={"/images/carbonCreditLifecycle.png"}
                  alt="Carbon credit lifecycle"
                  className="sellers-page__lifecycle-image"
                />
                {/* <button
                  type="button"
                  className="sellers-page__lifecycle-arrow"
                  aria-label="Next"
                >
                  <ArrowIcon />
                </button> */}
                <div className="sellers-page__lifecycle-overlay" />
                <div className="sellers-page__lifecycle-copy">
                  <h2>
                    Carbon Credit <span>Lifecycle</span>
                  </h2>
                  <p>
                    From your first feasibility meeting to your last credit
                    retirement - every step is transparent, traceable, and
                    verified.
                  </p>
                </div>
              </div>
            </div>

            <div className="sellers-page__lifecycle-timeline">
              <div
                className="sellers-page__lifecycle-line"
                aria-hidden="true"
              />
              {lifecycleSteps.map((step) => (
                <article
                  key={step.number}
                  className={cn(
                    "sellers-page__lifecycle-step",
                    step.side === "left"
                      ? "sellers-page__lifecycle-step--left"
                      : "sellers-page__lifecycle-step--right",
                  )}
                >
                  <div className="sellers-page__lifecycle-step-content">
                    <h3>{step.title}</h3>
                    {step.detail ? (
                      <p className="sellers-page__lifecycle-step-detail">
                        {step.detail}
                      </p>
                    ) : null}
                    <p className="sellers-page__lifecycle-step-description">
                      {step.description}
                    </p>
                  </div>
                  <div
                    className="sellers-page__lifecycle-step-marker"
                    aria-hidden="true"
                  >
                    <span className="sellers-page__lifecycle-step-number">
                      {step.number}
                    </span>
                    <span className="sellers-page__lifecycle-step-dot" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="sellers-page__section sellers-page__section--gateway">
        <Container className="sellers-page__wide-container">
          <div className="sellers-page__gateway-grid">
            <div className="sellers-page__gateway-media">
              <img
                src={"/images/sellerDiscovery.svg"}
                alt="Verified project discovery"
                className="sellers-page__gateway-image"
              />
            </div>

            <div className="sellers-page__gateway-copy">
              <SectionEyebrow>Sell Carbon Credits</SectionEyebrow>
              <h2>
                Connect your verified environmental project to global liquidity.
                KAIA offers open market access for carbon credits -
                <br />
                <span>
                  reach multinational buyers actively seeking high-quality
                  offsets.
                </span>
              </h2>
              <p>
                Join hundreds of organizations building credible climate
                strategies with KAIA. Start with as little as one tonne.
              </p>

              <Link href="/contact?active=1">
                <Button className="sellers-page__green-button">
                  Sell Carbon Credits
                  <ArrowIcon />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="sellers-page__scale">
        <div className="sellers-page__scale-left">
          <div className="sellers-page__scale-left-inner">
            <SectionEyebrow>Sell Smarter</SectionEyebrow>
            <h2>
              Everything You Need
              <br />
              to <span>Scale Your Impact</span>
            </h2>
            <p>
              KAIA enables seamless onboarding and connects your carbon credits
              with a growing network of corporate buyers.
            </p>

            <div className="sellers-page__registry-panel">
              <span>Accepted Registries</span>
              <h3>
                We Only Work With Globally
                <br />
                Recognized Standards
              </h3>

              <div className="sellers-page__registry-list">
                {acceptedRegistries.map((registry) => (
                  <article key={registry.title}>
                    <i aria-hidden="true" />
                    <div>
                      <strong>{registry.title}</strong>
                      <p>{registry.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="sellers-page__scale-right">
          <img
            src={"/images/sellerPlantBackground.png"}
            alt=""
            aria-hidden="true"
            className="sellers-page__scale-right-plant"
          />
          <div className="sellers-page__scale-card-list">
            {scaleFeatures.map((feature) => (
              <article key={feature.title} className="sellers-page__scale-card">
                <span className="sellers-page__scale-icon">
                  <img src={feature.icon} alt="" aria-hidden="true" />
                </span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sellers-page__journey">
        <Container>
          <SectionEyebrow>The Onboarding Path</SectionEyebrow>
          <h2>
            From Project to <span>Marketplace</span>
          </h2>

          <div className="sellers-page__journey-grid">
            <div className="sellers-page__journey-steps">
              {sellingSteps.map((step, index) => (
                <article
                  key={step.title}
                  className={cn(
                    "sellers-page__journey-step",
                    index === activeStep && "is-active",
                  )}
                >
                  <button
                    type="button"
                    className="sellers-page__journey-step-trigger"
                    onClick={() => setActiveStep(index)}
                    aria-expanded={index === activeStep}
                  >
                    <span>{step.number}</span>
                    <h3>{step.title}</h3>
                  </button>
                  <div className="sellers-page__journey-step-body">
                    <div>
                      <p>{step.description}</p>
                      <em>{step.detail}</em>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <img
              src={"/images/sellerAccess.svg"}
              alt="Seller verification workflow"
              className="sellers-page__journey-image"
            />
          </div>
        </Container>
      </section>

      <section className="sellers-page__consultancies">
        <Container className="sellers-page__consultancies-container">
          <div className="sellers-page__consultancies-grid">
            <div className="sellers-page__consultancies-copy">
              <span className="sellers-page__consultancies-eyebrow">
                <span />
                For Organisations
              </span>
              <h2>
                Built for Organisations
                <br />
                <span>Driving Climate Action</span>
              </h2>
              <p>
                KAIA maintains a high-integrity marketplace. Here's what a
                successful listing needs.
              </p>

              <div className="sellers-page__consultancies-list">
                {consultancyChecklist.map((item) => (
                  <article key={item.title}>
                    <span aria-hidden="true" />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="sellers-page__consultancies-media">
              <img
                src={"/images/sellerProof.svg"}
                alt="Climate action landscape"
              />
              <div
                className="sellers-page__growth-card"
                aria-label="Growth rate chart"
              >
                <div className="sellers-page__growth-topline">
                  <span>Growth rate</span>
                  <span>W&nbsp;&nbsp;M&nbsp;&nbsp;Y</span>
                </div>
                <strong>
                  1.45
                  <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path
                      d="M7 11.0833V2.91663M7 2.91663L3.5 6.41663M7 2.91663L10.5 6.41663"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </strong>
                <div className="sellers-page__growth-bars" aria-hidden="true">
                  {growthBars.map((height, index) => (
                    <i
                      key={`${height}-${index}`}
                      className={
                        index >= 11 && index <= 15 ? "is-active" : undefined
                      }
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="sellers-page__growth-dates">
                  <span>January, 01</span>
                  <span>July, 01</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="sellers-page__cta">
        <Container>
          <div className="sellers-page__cta-panel">
            <h2>
              Ready to Connect Your
              <br />
              Project to Global Buyers?
            </h2>
            <p>
              If your project is verified, KAIA provides the global storefront
              to sell it.
            </p>
            <div className="sellers-page__cta-actions">
              <Link href="/contact?active=1">
                <Button className="sellers-page__cta-button">
                  Sell Carbon Credits
                  <ArrowIcon />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
