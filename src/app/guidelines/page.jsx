"use client";

import { motion } from "motion/react";

export default function GuidelinesPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col w-full">
      {/* HEADER SECTION */}
      <section className="w-full h-[283px] bg-[#EEE8E6] flex flex-col items-center justify-center pt-20 px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="font-cormorant text-[40px] font-semibold text-[#22000C]">
            Community Guidelines
          </h1>
          <p className="font-sans font-light text-[#22000C] max-w-[564px] text-base tracking-wide">
            Unyta is built on mutual trust and transparency. These guidelines protect both creators and brands to foster successful collaborations.
          </p>
        </motion.div>
      </section>

      {/* CONTENT REGION */}
      <section className="mx-auto py-24 px-6 md:px-12 font-sans font-light text-[#22000C]/90 leading-relaxed text-[15px] md:text-lg">

        <div className="flex flex-col gap-y-6 max-w-[1200px] w-full">

          <div>
            <h2 className="font-cormorant text-2xl text-[#741717] font-semibold mb-3 leading-tight">Audience Authenticity Checks</h2>
            <p>
              We ensure that influencers&apos; audiences are genuine and engaged, helping protect brand reputation and fostering trust between brands and creators.
            </p>
          </div>

          <div>
            <h2 className="font-cormorant text-2xl text-[#741717] font-semibold mb-3 leading-tight">No Show Policy</h2>
            <p>
              If an influencer misses two bookings in a row, they will be unable to book any future experiences for the following month, promoting accountability.
            </p>
          </div>

          <div>
            <h2 className="font-cormorant text-2xl text-[#741717] font-semibold mb-3 leading-tight">Rescheduling Policy</h2>
            <div className="">
              <p>For fixed date and time experiences, reschedule up to 48h before and cancel up to 24h before start.</p>
              <p>For date range experiences, reschedule within the original window and available slots.</p>
              <p>For flexible experiences, reschedule anytime until expiry.</p>
            </div>
          </div>

          <div>
            <h2 className="font-cormorant text-2xl text-[#741717] font-semibold mb-3 leading-tight">Content Delivery Delays</h2>
            <p>
              In the case of two delays in content delivery, influencers will be unable to receive complimentary products for the next month, ensuring timely and reliable content creation.
            </p>
          </div>

          <div>
            <h2 className="font-cormorant text-2xl text-[#741717] font-semibold mb-3 leading-tight">Brand Non-Compliance</h2>
            <p>
              If a brand fails to send products or cancels an experience, they will be restricted from matching with creators for the next week, maintaining fairness and consistency in partnerships.
            </p>
          </div>

          <div>
            <h2 className="font-cormorant text-2xl text-[#741717] font-semibold mb-3 leading-tight">Creator Non-Compliance</h2>
            <p>
              If content is not delivered at all for two brand collaborations within a one-month period, the influencer&apos;s membership will be suspended.
            </p>
          </div>

          <div>
            <h2 className="font-cormorant text-2xl text-[#741717] font-semibold mb-3 leading-tight">Collaborator Conditions</h2>
            <p className="">
              Creator must post within 1 week of receiving the item, and within 2 days after completion of experience. Must visibly tag the brand, showcasing the product, experience, or location clearly. Brand must ship product within 72 hours after collaboration confirmation.
            </p>
          </div>

          <div className="flex justify-center pt-12 pb-12">
            <a
              href="/"
              className="px-10 py-3 rounded-full border border-[#741717] text-[#741717] font-sans font-medium hover:bg-[#741717]/5 transition-all text-[15px]"
            >
              Back to homepage
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
