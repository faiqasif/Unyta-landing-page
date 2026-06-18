"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "How do I create an account?", a: "You can download the Unyta app from the App Store or Google Play and follow the simple registration process to create your profile." },
    { q: "How can brands find the right creators?", a: "Brands can use our smart search filters and swipe-to-match algorithm to discover creators that align with their specific niche and values." },
    { q: "On what basis do you accept members?", a: "We review every application manually, looking at audience authenticity, engagement quality, and content style to ensure a high-standard community." },
    { q: "Can I manage multiple campaigns at once?", a: "Yes! Our dashboard is designed to help you track and manage multiple active collaborations simultaneously with ease." },
    { q: "Is Unyta free for creators?", a: "Unyta offers a comprehensive Free plan for creators to get started. We also have an Advanced plan for those looking to unlock more growth tools." },
    { q: "What privacy and data protections are in place?", a: "We take data security seriously. All user information is encrypted and we never share your private data with third parties without your consent." },
    { q: "Can I customize my profile and audience info?", a: "Absolutely. You can tailor your bio, showcase your best work, and connect your social accounts to provide real-time audience insights." },
    { q: "Can I cancel or change my plan anytime?", a: "Yes, you have full control over your subscription. You can upgrade, downgrade, or cancel your plan at any time through your account settings." },
    { q: "Is Unyta available on iOS and Android?", a: "Yes, both versions are fully optimized and available for download on their respective platforms." },
    { q: "What should I do if I encounter issues?", a: "Our support team is always ready to help. You can reach out through our in-app support chat or email us directly at support@unyta.com." },
    { q: "What types of collaborations are supported?", a: "We support gifted collaborations, paid campaigns, long-term brand ambassadorships, and more." },
    { q: "How do gifted collaborations work?", a: "Brands can offer products or services in exchange for content. Our platform facilitates the agreement and tracking of these exchanges." },
    { q: "How does the matching work?", a: "Our algorithm analyzes your preferences, location, and audience metrics to suggest the most relevant partners for swipes and matches." },
    { q: "Can I collaborate with brands/creators outside my country?", a: "Yes, Unyta is designed for global reach, allowing you to connect with authentic partners across international borders." },
    { q: "Do I need a minimum number of followers to join?", a: "We value engagement and quality over just numbers. While there's no strict minimum, we look for an active and genuine community." },
    { q: "How does Unyta ensure fair and reliable collaborations?", a: "We provide clear briefs, in-app messaging for transparency, and star reviews to maintain accountability for both sides." },
  ];

  return (
    <section id="faq" className="w-full py-24 bg-white flex flex-col items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center">
        
        {/* HEADER */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cormorant text-[36px] md:text-[48px] text-[#0D0D12] mb-3 leading-tight uppercase">
            Frequently Asked Questions
          </h2>
          <p className="font-sans font-light text-[#22000C]/70 text-base md:text-lg">
            Everything you need to know about Unyta.
          </p>
        </motion.div>

        {/* FAQ GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 w-full">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-[#F9F6F6] rounded-[12px] overflow-hidden border border-black/5"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group transition-colors hover:bg-black/[0.02]"
              >
                <span className="font-cormorant font-semibold text-[#741717] text-lg pr-4 leading-tight">
                  {faq.q}
                </span>
                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#741717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <polyline points="6 9 12 15 18 9"/>
                   </svg>
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-0 font-sans font-light text-[#22000C]/70 text-[15px] leading-relaxed border-t border-black/5 mx-2">
                       <div className="pt-4">
                         {faq.a}
                       </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
