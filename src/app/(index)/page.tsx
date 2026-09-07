"use client";

import { AIDecisionSection } from "@/components/sections/AIDecisionSection/AIDecisionSection";
import { ClimateConfidenceSection } from "@/components/sections/ClimateConfidenceSection/ClimateConfidenceSection";
import { GuideSection } from "@/components/sections/GuideSection/GuideSection";
import { Hero } from "@/components/sections/Hero/Hero";
import { PlatformHighlights } from "@/components/sections/PlatformHighlights/PlatformHighlights";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection/TestimonialsSection";
import { TwoSidedMissionSection } from "@/components/sections/TwoSidedMissionSection/TwoSidedMissionSection";
import { WhyCarbonCreditsSection } from "@/components/sections/WhyCarbonCreditsSection/WhyCarbonCreditsSection";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <PlatformHighlights />
      <GuideSection />
      <AIDecisionSection />
      <WhyCarbonCreditsSection />
      <ClimateConfidenceSection />
      <TwoSidedMissionSection />
      {/* <TestimonialsSection /> */}
    </div>
  );
}
