import { Container } from "@/components/ui/Container";

import "./KaiaEcosystemSection.css";

const leftNodes = [
  {
    index: "01",
    title: "Climate Project Developers",
    description:
      "Renewables, removals, industrial decarbonisation, regenerative agriculture, biochar, CCS, and nature-based projects.",
  },
  {
    index: "02",
    title: "Industrial & Corporate Buyers",
    description:
      "Organisations pursuing net-zero goals, voluntary commitments, compliance obligations, and carbon asset procurement.",
  },
  {
    index: "03",
    title: "Carbon Registries & Standards",
    description:
      "Project registration, validation, verification, issuance, transfer, and retirement across leading global and domestic standards.",
  },
];

const rightNodes = [
  {
    index: "04",
    title: "Conservation & Nature Initiatives",
    description:
      "Forestry, biodiversity conservation, ecosystem restoration, regenerative land management, community-led climate work.",
  },
  {
    index: "05",
    title: "Policy & Compliance Markets",
    description:
      "India's CCTS, emerging carbon regulations, disclosure frameworks, and evolving climate policy landscapes.",
  },
  {
    index: "06",
    title: "Climate Finance & Investors",
    description:
      "Carbon-linked financing, project investment, climate funds, sustainability-linked capital, environmental asset monetisation.",
  },
];

const frameworkSteps = [
  {
    index: "01",
    label: "Engineering",
    lines: ["Project Design", "Feasibility Studies"],
  },
  {
    index: "02",
    label: "MRV & Data",
    lines: ["Monitoring & Verification", "Carbon Accounting"],
  },
  {
    index: "03",
    label: "Market Intelligence",
    lines: ["Market Analysis", "Methodology Selection"],
  },
  {
    index: "04",
    label: "Carbon Assets",
    lines: ["Credit Generation", "Portfolio Strategy"],
  },
  {
    index: "05",
    label: "Climate Finance",
    lines: ["Monetisation", "Investment Readiness"],
  },
];

function NodeCard({
  node,
  side,
}: {
  node: { index: string; title: string; description: string };
  side: "left" | "right";
}) {
  return (
    <article className={`kaia-ecosystem__node kaia-ecosystem__node--${side}`}>
      <div className="kaia-ecosystem__node-top">
        <span className="kaia-ecosystem__node-index">{node.index}</span>
        <span className="kaia-ecosystem__node-arrow" aria-hidden="true">
          <svg viewBox="0 0 16 16" fill="none">
            <path
              d={
                side === "left"
                  ? "M3.33301 8H12.6663M12.6663 8L8.66634 4M12.6663 8L8.66634 12"
                  : "M12.667 8H3.33366M3.33366 8L7.33366 4M3.33366 8L7.33366 12"
              }
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <h3>{node.title}</h3>
      <p>{node.description}</p>
    </article>
  );
}

export function KaiaEcosystemSection() {
  return (
    <section
      className="about-page__section kaia-ecosystem"
      aria-labelledby="kaia-ecosystem-heading"
    >
      <Container>
        <span className="kaia-ecosystem__eyebrow">
          <span className="kaia-ecosystem__eyebrow-line" />
          The Ecosystem
        </span>
        <h2 id="kaia-ecosystem-heading" className="kaia-ecosystem__heading">
          The Kaia Karbon <span>Ecosystem.</span>
        </h2>

        <div className="kaia-ecosystem__grid">
          <div className="kaia-ecosystem__column">
            {leftNodes.map((node) => (
              <NodeCard node={node} side="left" key={node.index} />
            ))}
          </div>

          <div className="kaia-ecosystem__hub">
            <span className="kaia-ecosystem__hub-label">The Hub</span>
            <div className="kaia-ecosystem__hub-ring">
              <span className="kaia-ecosystem__hub-dot kaia-ecosystem__hub-dot--top" />
              <span className="kaia-ecosystem__hub-dot kaia-ecosystem__hub-dot--right" />
              <span className="kaia-ecosystem__hub-dot kaia-ecosystem__hub-dot--bottom" />
              <span className="kaia-ecosystem__hub-dot kaia-ecosystem__hub-dot--left" />
              <div className="kaia-ecosystem__hub-photo">
                <img
                  src="/images/kaiaEcosystemHub.jpg"
                  alt="Green fern leaves"
                  aria-hidden="true"
                />
                <div className="kaia-ecosystem__hub-overlay">
                  <span className="kaia-ecosystem__hub-title">
                    Kaia
                    <br />
                    Karbon
                  </span>
                  <span className="kaia-ecosystem__hub-subtitle">
                    Engineering · Intelligence
                    <br />
                    Carbon Markets · Infrastructure
                  </span>
                </div>
              </div>
            </div>
            <p className="kaia-ecosystem__hub-caption">
              The integrated platform connecting developers, industries,
              registries, and carbon markets.
            </p>
          </div>

          <div className="kaia-ecosystem__column">
            {rightNodes.map((node) => (
              <NodeCard node={node} side="right" key={node.index} />
            ))}
          </div>
        </div>

        <div className="kaia-ecosystem__framework">
          <span className="kaia-ecosystem__framework-eyebrow">
            The Kaia Operating Framework
          </span>
          <div className="kaia-ecosystem__framework-grid">
            {frameworkSteps.map((step) => (
              <div className="kaia-ecosystem__framework-step" key={step.index}>
                <div className="kaia-ecosystem__framework-step-top">
                  <span>{step.index}</span>
                  <i aria-hidden="true" />
                </div>
                <span className="kaia-ecosystem__framework-step-label">
                  {step.label}
                </span>
                <p>
                  {step.lines.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
