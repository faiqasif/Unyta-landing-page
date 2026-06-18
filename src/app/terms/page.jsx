"use client";

import { motion } from "motion/react";

export default function TermsPage() {
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
            Terms and Conditions
          </h1>
          <p className="font-sans font-light text-[#22000C] text-base tracking-wide">
            Effective Date: March 12, 2026 &nbsp;-&nbsp; Last Updated: March 12, 2026
          </p>
        </motion.div>
      </section>

      {/* CONTENT REGION */}
      <section className="mx-auto py-24 px-6 md:px-12 font-sans font-light text-[#22000C]/90 leading-relaxed text-[15px] md:text-lg">
        <div className="flex flex-col gap-y-6 max-w-[1200px] w-full">

          <div>
            <h2 className="font-cormorant text-2xl text-[#741717] font-semibold mb-3 leading-tight">Unyta Terms & Conditions</h2>
            <p>
              These Terms & Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the Unyta Platform, including all services, features, and content. By creating an account or using Unyta, you agree to be bound by these Terms.
            </p>
          </div>

          <div>
            <h3 className="font-cormorant text-2xl text-[#741717] font-semibold mb-3">1. Definitions</h3>
            <ul className="">
              <li>&ldquo;Platform&rdquo; &mdash; the Unyta mobile app, website, and related services.</li>
              <li>&ldquo;User&rdquo; &mdash; any individual or organization using Unyta, including brands and creators.</li>
              <li>&ldquo;Content&rdquo; &mdash; all materials, posts, images, or data shared on the Platform.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-cormorant text-2xl text-[#741717] font-semibold mb-3">2. Eligibility</h3>
            <p>
              You must be at least 18 years old (or the minimum age required by law in your country of residence) to use Unyta. <br />If you are under 18 years old, you may only use the Platform with the consent or supervision of a parent or legal guardian.
            </p>
          </div>

          <div>
            <h3 className="font-cormorant text-2xl text-[#741717] font-semibold mb-3">3. Account Registration</h3>
            <p className="">Users must register to access Unyta&apos;s features.</p>
            <p className="">You are responsible for maintaining the confidentiality of your account credentials and for any activity that occurs under your account.</p>
            <p>Unyta may suspend or terminate accounts that provide false information or violate these Terms.</p>
          </div>

          <div>
            <h3 className="font-cormorant text-2xl text-[#741717] font-semibold mb-3">4. Acceptable Use</h3>
            <p className="font-medium">Users agree to:</p>
            <ul className="">
              <li>Use Unyta only for lawful, professional purposes.</li>
              <li>Not misuse, spam, or harass other users.</li>
              <li>Not upload content that is defamatory, obscene, or infringes any rights.</li>
              <li>Not interfere with the Platform&apos;s functionality or attempt unauthorized access.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-cormorant text-2xl text-[#741717] font-semibold mb-3">5. Community Guidelines and Account Conduct</h3>
            <p className="">
              To maintain mutual trust and transparency, all users must comply with Unyta&apos;s Community Guidelines, designed to protect both creators and brands and ensure reliable collaborations.
            </p>
            <p className="mb-4 font-medium">Key principles:</p>
            <ul className="space-y-">
              <li><span className="font-medium text-[#22000C]">Authenticity:</span> Influencer audiences must be genuine and organically engaged.</li>
              <li><span className="font-medium text-[#22000C]">Reliability:</span> Creators must honor bookings and deliver agreed content on time.</li>
              <li><span className="font-medium text-[#22000C]">Fairness:</span> Brands must send promised products or experiences as confirmed.</li>
              <li><span className="font-medium text-[#22000C]">Professional conduct:</span> Users must maintain respectful and lawful communication at all times.</li>
            </ul>
            <p className="">
              <span className="font-medium text-[#22000C]">Enforcement:</span> Unyta reserves the right to issue warnings, temporarily suspend, or permanently remove any account that repeatedly violates these principles, fails to meet obligations, or engages in fraudulent or abusive behavior. Serious or repeated non-compliance may lead to permanent account termination.
            </p>
          </div>

          <div>
            <h3 className="font-cormorant text-2xl text-[#741717] font-semibold mb-3">6. Collaborations Between Brands and Creators</h3>
            <p className="mb-6">
              Unyta facilitates gifting and collaboration opportunities but is not a party to any agreement between users. Unyta does not guarantee the performance, delivery or outcome of any collaboration and does not verify the accuracy of user representations, audience metrics, or content performance.
            </p>
            <p className="font-medium">Users are responsible for:</p>
            <ul className="">
              <li>Complying with all applicable advertising, consumer, and tax laws.</li>
              <li>Delivering on disclosure obligations for terms truthfully.</li>
              <li>Resolving disputes directly between themselves.</li>
            </ul>
            <p className="">Unyta bears no liability for losses, delays, or disputes arising from collaborations.</p>
          </div>

          <div>
            <h3 className="font-cormorant text-2xl text-[#741717] font-semibold mb-3">7. Fees and Subscriptions</h3>
            <p className="">Access to certain features may require payment of subscription fees.</p>
            <p className="">Users agree to pay all applicable charges according to their selected plan.</p>
            <p className="">Failure to pay may result in restricted access or account suspension.</p>
            <p className="">All payments are non-refundable unless required by law.</p>
            <p>Unyta reserves the right to modify subscription pricing or introduce new fees at any time. Users will be notified in advance of any material pricing changes.</p>
          </div>

          <div>
            <h3 className="font-cormorant text-2xl text-[#741717] font-semibold mb-3">8. Intellectual Property</h3>
            <p className="">All trademarks, software and materials on the Platform belong to Unyta or its licensors.</p>
            <p>Users retain ownership of their own content but grant Unyta a non-exclusive, worldwide, royalty-free license to display, distribute, and promote it within the Platform and related communications. This license allows Unyta to display user content within the Platform, marketing materials, and promotional communications related to the Platform.</p>
          </div>

          <div>
            <h3 className="font-cormorant text-2xl text-[#741717] font-semibold mb-3">9. Third-Party Links</h3>
            <p>The Platform may contain links to third-party websites or services. Unyta does not control and is not responsible for the content, policies, or practices of these third parties.</p>
          </div>

          <div>
            <h3 className="font-cormorant text-2xl text-[#741717] font-semibold mb-3">10. Limitation of Liability</h3>
            <p className="font-medium">To the fullest extent permitted by law:</p>
            <ul className="">
              <li>Unyta is not liable for indirect, incidental, or consequential damages.</li>
              <li>The Platform is provided &ldquo;as is&rdquo; without warranty of uninterrupted availability.</li>
              <li>Users assume all risks associated with use of the Platform.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-cormorant text-2xl text-[#741717] font-semibold mb-3">11. Platform Availability</h3>
            <p>Unyta may modify, suspend, or discontinue any part of the Platform at any time without prior notice. While we aim to maintain reliable service, we do not guarantee uninterrupted availability or error-free operation.</p>
          </div>

          <div>
            <h3 className="font-cormorant text-2xl text-[#741717] font-semibold mb-3">12. Indemnification</h3>
            <p>You agree to indemnify and hold harmless Unyta, its affiliates, and employees from any claims or losses arising out of your use of the Platform or breach of these Terms.</p>
          </div>

          <div>
            <h3 className="font-cormorant text-2xl text-[#741717] font-semibold mb-3">13. Termination</h3>
            <p className="">Unyta may suspend or terminate any account at its discretion, with or without notice, if it believes a violation of these Terms or applicable law has occurred.</p>
            <p>Upon termination, all rights granted to you will cease immediately.</p>
          </div>

          <div>
            <h3 className="font-cormorant text-2xl text-[#741717] font-semibold mb-3">14. Governing Law and Jurisdiction</h3>
            <p className="">These Terms are governed by and construed in accordance with the laws of the United Arab Emirates.</p>
            <p className="">To the extent permitted by applicable law, any dispute, claim, or controversy arising out of or relating to these Terms or the use of the Platform shall be subject to the exclusive jurisdiction of the courts of Dubai, United Arab Emirates.</p>
            <p>Users residing in other jurisdictions, including the European Union or the United Kingdom, may also benefit from any mandatory consumer protections granted under the laws of their country of residence.</p>
          </div>

          <div>
            <h3 className="font-cormorant text-2xl text-[#741717] font-semibold mb-3">15. Regional Compliance Clause</h3>
            <p className="">Where required by local regulations, specific provisions of these Terms will be interpreted in accordance with applicable laws in the user&apos;s country of residence, including:</p>
            <ul className="">
              <li>EU GDPR and consumer law.</li>
              <li>UK data protection and e-commerce regulations.</li>
              <li>UAE Federal Decree-Law No. 45 of 2021 (PDPL).</li>
            </ul>
            <p className="">Nothing in these Terms limits any rights you have under these laws.</p>
          </div>

          <div>
            <h3 className="font-cormorant text-2xl text-[#741717] font-semibold mb-3">16. Changes to the Terms</h3>
            <p>Unyta may amend these Terms at any time. Updated versions will be posted with a new &ldquo;Last Updated&rdquo; date. Continued use of the Platform after changes constitutes acceptance.</p>
          </div>

          <div>
            <h3 className="font-cormorant text-2xl text-[#741717] font-semibold mb-3">17. Contact</h3>
            <p className="">For questions regarding these Terms, please contact</p>
            <p className="">contact@joinunyta.com</p>
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
