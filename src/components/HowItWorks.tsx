/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-[#EBE7DE] py-20 px-6 border-b border-[#D6D1C7]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-[#D6D1C7] z-0" />

          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-[#F5F2EB] border border-[#D6D1C7] rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-[#2C2A26] transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-[#2C2A26]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3.75h9m-9 3.75h9m-9 3.75h9m-9 3.75h9m-9-15L3 20.25l6.75-2.25L16.5 20.25 21 5.25"
                />
              </svg>
            </div>
            <h3 className="text-xl font-serif text-[#2C2A26] mb-3">
              1. Paste the Chat
            </h3>
            <p className="text-[#5D5A53] font-light max-w-xs">
              Upload messy WhatsApp or Email logs.
            </p>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-[#F5F2EB] border border-[#D6D1C7] rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-[#2C2A26] transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-[#2C2A26]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
                />
              </svg>
            </div>
            <h3 className="text-xl font-serif text-[#2C2A26] mb-3">
              2. Select Mode
            </h3>
            <p className="text-[#5D5A53] font-light max-w-xs">
              Choose Peacekeeper, Barrister, or Defense.
            </p>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-[#F5F2EB] border border-[#D6D1C7] rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-[#2C2A26] transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-[#2C2A26]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-serif text-[#2C2A26] mb-3">3. Resolve</h3>
            <p className="text-[#5D5A53] font-light max-w-xs">
              Get a precise, risk-assessed response instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

