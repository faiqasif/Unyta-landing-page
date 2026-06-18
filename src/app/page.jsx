"use client";

import { HowItWorks } from "./_components/HowItWorks";
import { Vision } from "./_components/Vision";
import { PlatformFeatures } from "./_components/PlatformFeatures";
import { WhyUnyta } from "./_components/WhyUnyta";
import { Opportunities } from "./_components/Opportunities";
import { GettingStarted } from "./_components/GettingStarted";
import { WhyChooseUs } from "./_components/WhyChooseUs";
import { AboutUnyta } from "./_components/AboutUnyta";
import { CTA } from "./_components/CTA";
import { CreatorDialog } from "./_components/CreatorDialog";
import { BrandDialog } from "./_components/BrandDialog";
import { HeroSection } from "./_components/HeroSection";
import { useState } from "react";

export default function Home() {
  const [isCreatorModalOpen, setIsCreatorModalOpen] = useState(false);
  const [isBrandModalOpen, setIsBrandModalOpen] = useState(false);

  return (
    <main className="min-h-screen w-full bg-white font-sans text-stone-900">
      <HeroSection
        onJoinCreator={() => setIsCreatorModalOpen(true)}
        onJoinBrand={() => setIsBrandModalOpen(true)}
      />
      <HowItWorks />
      <Vision />
      <PlatformFeatures />
      <WhyUnyta />
      <Opportunities
        onJoinCreator={() => setIsCreatorModalOpen(true)}
        onJoinBrand={() => setIsBrandModalOpen(true)}
      />
      {/* <Pricing /> */}
      <GettingStarted />
      <WhyChooseUs />
      {/* <FAQ /> */}
      <AboutUnyta />
      <CTA
        onJoinCreator={() => setIsCreatorModalOpen(true)}
        onJoinBrand={() => setIsBrandModalOpen(true)}
      />
      <CreatorDialog
        isOpen={isCreatorModalOpen}
        onClose={() => setIsCreatorModalOpen(false)}
      />

      <BrandDialog
        isOpen={isBrandModalOpen}
        onClose={() => setIsBrandModalOpen(false)}
      />

    </main>
  );
}
