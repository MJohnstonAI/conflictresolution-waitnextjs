/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface ContactSectionProps {
  onWaitlistClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ onWaitlistClick }) => {
  const waitlistPath = "/waitlist";

  return (
    <section
      id="waitlist"
      className="py-32 px-6 md:px-12 bg-[#2C2A26] text-[#F5F2EB] border-t border-[#2C2A26]"
    >
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] mb-6 block">
          Beta Access
        </span>
        <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight text-[#F5F2EB]">
          Secure Your Spot.
        </h2>
        <p className="text-lg md:text-xl text-[#A8A29E] font-light leading-relaxed mb-16 max-w-2xl mx-auto">
          We are rolling out Beta access in batches. Join the Priority Access
          List to start resolving conflicts today.
        </p>

        <div className="max-w-xl mx-auto animate-fade-in-up">
          <a
            href={waitlistPath}
            onClick={(e) => {
              if (onWaitlistClick) {
                onWaitlistClick(e);
              }
            }}
            className="inline-flex items-center justify-center px-12 py-5 bg-[#F5F2EB] text-[#2C2A26] uppercase tracking-widest text-sm font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] rounded-sm w-full sm:w-auto"
          >
            Join Priority Access
          </a>
          <p className="text-[#A8A29E] font-light mt-6 text-sm">
            Loads the waitlist form.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

