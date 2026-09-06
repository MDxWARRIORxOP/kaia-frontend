import Link from "next/link";
import { Button } from "../../ui/Button";
import { Container } from "../../ui/Container";
import { MarqueeStrip } from "../../ui/MarqueeStrip";

import "./AIDecisionSection.css";

const marqueeItems = [
  "Verified Impact",
  "Blockchain Verified",
  "Carbon Credits",
  "Verified Projects",
];

const stripIcons = ["/icons/halfLeaf.svg", "/icons/fullLeaf.svg"];

export function AIDecisionSection() {
  return (
    <section
      className="ai-decision-section"
      aria-labelledby="ai-decision-heading"
    >
      <Container className="ai-decision-section__container">
        <div className="ai-decision-panel">
          <div className="ai-decision-panel__surface" aria-hidden="true" />

          <div className="ai-decision-panel__content">
            <div className="ai-decision-panel__copy">
              <h2
                id="ai-decision-heading"
                className="ai-decision-panel__heading"
              >
                <span className="ai-decision-panel__heading-line">
                  Smarter Carbon Decisions,
                </span>
                <span className="ai-decision-panel__heading-line">
                  Powered by{" "}
                  <span className="ai-decision-panel__heading-accent">AI</span>
                </span>
              </h2>

              <p className="ai-decision-panel__subtext">
                Navigating carbon markets can be complex. KAIA uses intelligent
                systems to help you discover the right projects, evaluate
                impact, and transact with confidence.
              </p>
              <Link href="/contact">
                <Button className="ai-decision-panel__button">
                  Contact Us &rarr;
                </Button>
              </Link>
            </div>

            <aside className="ai-decision-panel__card">
              <img
                src={"/icons/kaiaIconWhite.svg"}
                alt=""
                aria-hidden="true"
                className="ai-decision-panel__card-icon"
              />

              <p className="ai-decision-panel__card-text">
                From selection to settlement, AI helps you move faster with
                clarity and precision.
              </p>
            </aside>
          </div>
        </div>
      </Container>

      <MarqueeStrip
        items={marqueeItems}
        ariaLabel="Verified carbon intelligence highlights"
        className="ai-decision-strip"
        contentClassName="ai-decision-strip__content"
        itemClassName="ai-decision-strip__item"
        renderItem={(item, index) => (
          <>
            <img
              src={stripIcons[index % stripIcons.length]}
              alt=""
              aria-hidden="true"
              className="ai-decision-strip__icon"
            />
            <span className="ai-decision-strip__label">{item}</span>
          </>
        )}
      />
    </section>
  );
}
