import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

import "./page.css";

const changeAreas = [
  "Energy systems",
  "Processes",
  "Equipment",
  "Facilities",
  "Capital investments",
];

const processSteps = [
  {
    number: "01",
    title: "Diagnose",
    description:
      "Understand your facility, energy systems, emissions and operational baseline.",
    tags: [
      "Energy & utility assessments",
      "Emissions analysis",
      "Facility diagnostics",
    ],
  },
  {
    number: "02",
    title: "Engineer",
    description:
      "Identify, model and prioritise technically and financially viable interventions.",
    tags: [
      "Energy efficiency",
      "Process optimisation",
      "Electrification",
      "Heat recovery",
      "Feasibility studies",
      "CAPEX/OPEX modelling",
    ],
  },
  {
    number: "03",
    title: "Execute",
    description: "Support implementation and continue optimising performance.",
    tags: [
      "Engineering-as-a-Service",
      "Retrofit support",
      "Resource efficiency",
      "Continuous optimisation",
    ],
  },
];

const outcomes = [
  {
    icon: "/icons/buyerThunder.svg",
    title: "Lower energy costs",
    description:
      "Identify opportunities to reduce energy consumption and improve operational efficiency.",
  },
  {
    icon: "/icons/buyersAccountingIcon.svg",
    title: "Prioritised CAPEX",
    description: "Understand which investments deserve attention, and why.",
  },
  {
    icon: "/icons/global_access.svg",
    title: "Decarbonisation pathways",
    description:
      "Move from emissions targets to technically grounded interventions.",
  },
  {
    icon: "/icons/trust.svg",
    title: "Implementation-ready decisions",
    description:
      "Give engineering and leadership teams the information they need to act.",
  },
];

const valueProps = [
  {
    title: "Plant-level engineering",
    description:
      "Focus on the physical systems and processes where efficiency and decarbonisation actually happen.",
  },
  {
    title: "Engineering + sustainability + finance",
    description:
      "Connect technical recommendations with emissions, compliance and investment considerations.",
  },
  {
    title: "Flexible engineering capacity",
    description:
      "Access specialist engineering capability without building an entire team internally.",
  },
  {
    title: "Actionable recommendations",
    description:
      "The goal isn't another report. It's a clearer decision about what to do next.",
  },
];

export default function EngineeringPage() {
  return (
    <div className="eaas-page">
      <section className="eaas-page__hero">
        <img
          src={"/images/eaasMain.jpg"}
          alt="Fern growing in a forest stream"
          className="eaas-page__hero-image"
        />
        <div className="eaas-page__hero-overlay" />
        <div className="eaas-page__hero-container">
          {/* <span className="eaas-page__pill">Engineering-as-a-Service</span> */}
          <h1 className="eaas-page__hero-title">
            Engineering-as-a-Service for Industrial Decarbonisation
          </h1>
          <p className="eaas-page__hero-subtext">
            Turn sustainability targets into practical engineering decisions,
            investment priorities and operational improvements.
          </p>
          <p className="eaas-page__hero-body">
            Kaia Karbon provides flexible engineering capacity to help
            industrial organisations identify, evaluate and implement
            energy-efficiency and decarbonisation opportunities.
          </p>
          <Link href="/contact?active=2">
            <Button className="eaas-page__hero-cta">
              Book a Discovery Meeting
            </Button>
          </Link>
          <p className="eaas-page__hero-tagline">
            Engineering-first sustainability. Practical decarbonisation.
          </p>
        </div>
      </section>

      <section className="eaas-page__problem">
        <div className="eaas-page__problem-container">
          <div>
            <span className="eaas-page__pill eaas-page__pill--dark">
              The gap
            </span>
            <h2 className="eaas-page__problem-title">
              Decarbonisation is no longer just a reporting exercise.
            </h2>
            <p className="eaas-page__problem-body">
              Companies know they need to reduce emissions and improve
              efficiency. <br /> The harder question is:{" "}
              <strong>
                what should we{" "}
                <span
                  style={{
                    color: "#166534",
                    textDecoration: "underline",
                  }}
                >
                  {" "}
                  actually change?{" "}
                </span>
              </strong>
            </p>

            <ul className="eaas-page__change-list">
              {changeAreas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="eaas-page__problem-body">
              Kaia Karbon bridges the gap between{" "}
              <strong>sustainability targets and engineering action</strong>,
              translating emissions, energy and regulatory requirements into
              practical decisions at the plant level.
            </p>

            <p className="eaas-page__problem-highlight">
              Reporting tells you where you are. <br />
              Engineering changes where you&apos;re going.
            </p>
          </div>
          <div className="eaas-page__problem-image-container">
            <img src="/images/eaasProblem1.jpg" alt="" />
          </div>
        </div>
      </section>

      <section className="eaas-page__process">
        <Container>
          <span className="eaas-page__pill eaas-page__pill--dark">
            How it works
          </span>
          <h2 className="eaas-page__section-title">
            Engineering capability when you need it.
          </h2>

          <div className="eaas-page__process-grid">
            {processSteps.map((step) => (
              <div className="eaas-page__process-card" key={step.number}>
                <span className="eaas-page__process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="eaas-page__process-tags">
                  {step.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="eaas-page__outcomes">
        <Container>
          <span className="eaas-page__pill eaas-page__pill--dark">Impact</span>
          <h2 className="eaas-page__section-title">
            From engineering analysis to business decisions.
          </h2>

          <div className="eaas-page__outcomes-grid">
            {outcomes.map((item) => (
              <div className="eaas-page__outcome-card" key={item.title}>
                <img src={item.icon} alt="" aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="eaas-page__values">
        <Container>
          <span className="eaas-page__pill eaas-page__pill--dark">
            Why Kaia Karbon
          </span>
          <h2 className="eaas-page__section-title">
            Precision over paperwork.
          </h2>

          <div className="eaas-page__values-list">
            {valueProps.map((item) => (
              <div className="eaas-page__value-row" key={item.title}>
                <span className="eaas-page__value-check" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 10.5L8 14.5L16 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="eaas-page__cta">
        <Container className="eaas-page__cta-container">
          <h2>
            Have a decarbonisation challenge that needs an engineering answer?
          </h2>
          <p>
            Let&apos;s understand the problem, identify where engineering can
            create value, and determine whether Kaia Karbon can help.
          </p>

          <div className="eaas-page__cta-buttons">
            <Link href="/contact?active=2">
              <Button className="eaas-page__cta-primary">
                Book a Discovery Meeting &rarr;
              </Button>
            </Link>
            <span className="eaas-page__cta-or">or</span>
            <Link href="/contact?active=2">
              <Button variant="secondary" className="eaas-page__cta-secondary">
                Contact Kaia Karbon &rarr;
              </Button>
            </Link>
          </div>

          {/* <div className="eaas-page__cta-contacts">
            <a href="mailto:tanmmay@kaiakarbon.com">tanmmay@kaiakarbon.com</a>
            <a href="mailto:offsets@kaiakarbon.com">offsets@kaiakarbon.com</a>
            <span>kaiakarbon.com</span>
          </div> */}

          <p className="eaas-page__cta-note">
            No lengthy brief required. Start with the problem you&apos;re trying
            to solve.
          </p>
        </Container>
      </section>

      <section className="eaas-page__strip">
        <Container className="eaas-page__strip-container">
          <span>Engineering-first sustainability.</span>
          <span>Practical decarbonisation.</span>
          <span>Investment-ready recommendations.</span>
          <span>Better business decisions.</span>
        </Container>
      </section>
    </div>
  );
}
