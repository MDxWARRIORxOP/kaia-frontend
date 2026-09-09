"use client";

import { AIDecisionSection } from "@/components/sections/AIDecisionSection/AIDecisionSection";
import { ClimateConfidenceSection } from "@/components/sections/ClimateConfidenceSection/ClimateConfidenceSection";
import { GuideSection } from "@/components/sections/GuideSection/GuideSection";
import { Hero } from "@/components/sections/Hero/Hero";
import { PlatformHighlights } from "@/components/sections/PlatformHighlights/PlatformHighlights";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection/TestimonialsSection";
import { TwoSidedMissionSection } from "@/components/sections/TwoSidedMissionSection/TwoSidedMissionSection";
import { WhyCarbonCreditsSection } from "@/components/sections/WhyCarbonCreditsSection/WhyCarbonCreditsSection";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";

// import "./page.css";

const marqueeItems = [
  "Verified Impact",
  "Blockchain Verified",
  "Carbon Credits",
  "Verified Projects",
];

const stripIcons = ["/icons/halfLeaf.svg", "/icons/fullLeaf.svg"];

export default function HomePage() {
  return (
    <div>
      <Hero />
      <PlatformHighlights />
      <GuideSection />
      <AIDecisionSection />
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
      <WhyCarbonCreditsSection />
      <ClimateConfidenceSection />
      <TwoSidedMissionSection />
      {/* <TestimonialsSection /> */}
    </div>
  );
}
