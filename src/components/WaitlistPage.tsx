/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

const GOOGLE_FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfmAWXigJGtDZq5WsQyTq0LO4romkyPwGwFyLTq1RMDQzmHag/viewform?embedded=true";

const WaitlistPage: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#F5F2EB] text-[#2C2A26] pt-28 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-serif font-bold">
          Secure Your Spot.
        </h1>
        <p className="text-lg md:text-xl text-[#5D5A53] max-w-3xl mx-auto">
          Join the early-access waitlist. We&apos;ll email you as soon as the
          Conflict Resolution platform opens.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-10 md:mt-14 px-0 md:px-6">
        <div className="bg-white shadow-xl border border-[#D6D1C7] rounded-sm p-4 md:p-6">
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <iframe
              title="Conflict Resolution Waitlist"
              src={GOOGLE_FORM_EMBED_URL}
              width="100%"
              height="900"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistPage;

