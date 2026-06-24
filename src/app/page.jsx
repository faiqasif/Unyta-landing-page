"use client";

import { HowItWorks } from "./_components/HowItWorks";
import { Vision } from "./_components/Vision";
import { HomePlatformFeatures } from "./_components/HomePlatformFeatures";
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
import { Pricing } from "./_components/Pricing";
import { FAQ } from "./_components/FAQ";
import { HomeOpportunities } from "./_components/HomeOpportunities";
import { PlatformFeatures } from "./_components/PlatformFeatures";
import { WhereWeOperate } from "./_components/WhereWeOperate";
import { CoreSectors } from "./_components/CoreSectors";
import { BrandGuidance } from "./_components/BrandGuidance";

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
      {/* <Vision /> */}
      {/* <HomePlatformFeatures /> */}
      <PlatformFeatures />
      <WhereWeOperate />
      <CoreSectors />
      {/* <WhyUnyta /> */}
      <Opportunities
        onJoinCreator={() => setIsCreatorModalOpen(true)}
        onJoinBrand={() => setIsBrandModalOpen(true)}
      />
      <BrandGuidance />
      {/* <HomeOpportunities
        onJoinCreator={() => setIsCreatorModalOpen(true)}
        onJoinBrand={() => setIsBrandModalOpen(true)}
      /> */}
      {/* <Pricing /> */}
      {/* <GettingStarted /> */}
      <WhyChooseUs />
      {/* <FAQ /> */}
      {/* <AboutUnyta /> */}
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
