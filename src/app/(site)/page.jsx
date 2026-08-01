"use client";

import { HowItWorks } from "@/app/_components/HowItWorks";
import { Vision } from "@/app/_components/Vision";
import { HomePlatformFeatures } from "@/app/_components/HomePlatformFeatures";
import { WhyUnyta } from "@/app/_components/WhyUnyta";
import { Opportunities } from "@/app/_components/Opportunities";
import { GettingStarted } from "@/app/_components/GettingStarted";
import { WhyChooseUs } from "@/app/_components/WhyChooseUs";
import { AboutUnyta } from "@/app/_components/AboutUnyta";
import { CTA } from "@/app/_components/CTA";
import { CreatorDialog } from "@/app/_components/CreatorDialog";
import { BrandDialog } from "@/app/_components/BrandDialog";
import { ApplicationThankYouDialog } from "@/app/_components/ApplicationThankYouDialog";
import { HeroSection } from "@/app/_components/HeroSection";
import { useState } from "react";
import { Pricing } from "@/app/_components/Pricing";
import { FAQ } from "@/app/_components/FAQ";
import { HomeOpportunities } from "@/app/_components/HomeOpportunities";
import { PlatformFeatures } from "@/app/_components/PlatformFeatures";
import { WhereWeOperate } from "@/app/_components/WhereWeOperate";
import { CoreSectors } from "@/app/_components/CoreSectors";
import { BrandGuidance } from "@/app/_components/BrandGuidance";

export default function Home() {
  const [isCreatorModalOpen, setIsCreatorModalOpen] = useState(false);
  const [isBrandModalOpen, setIsBrandModalOpen] = useState(false);
  const [thankYouVariant, setThankYouVariant] = useState(null);

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
      <BrandGuidance onDemoSubmitSuccess={() => setThankYouVariant("demo")} />
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
        onSubmitSuccess={() => setThankYouVariant("application")}
      />

      <BrandDialog
        isOpen={isBrandModalOpen}
        onClose={() => setIsBrandModalOpen(false)}
        onSubmitSuccess={() => setThankYouVariant("application")}
      />

      <ApplicationThankYouDialog
        isOpen={thankYouVariant !== null}
        variant={thankYouVariant ?? "application"}
        onClose={() => setThankYouVariant(null)}
      />

    </main>
  );
}
