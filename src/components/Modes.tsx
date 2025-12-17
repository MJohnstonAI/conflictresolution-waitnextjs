/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

const Modes: React.FC = () => {
  return (
    <section
      id="modes"
      className="bg-[#EBE7DE] py-24 px-6 border-t border-[#D6D1C7]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6B665E] mb-4 block">
            The Engines
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#2C2A26]">
            Choose Your Engine.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          <div className="bg-[#F5F2EB] border border-[#D6D1C7] p-8 md:p-12 hover:border-blue-900/30 transition-all duration-500 shadow-sm hover:shadow-xl group">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-blue-100 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-blue-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-serif text-[#2C2A26] mb-4">
              The Social Navigator
            </h3>
            <p className="text-[#5D5A53] leading-relaxed mb-8 h-12">
              Navigate the drama without losing your cool. Tuned for emotional
              intelligence and de-escalation.
            </p>
            <ul className="space-y-4 border-t border-[#D6D1C7] pt-8">
              <li className="flex items-center gap-3 text-sm text-[#5D5A53]">
                <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 text-xs">
                  ✓
                </span>
                Best for Dating &amp; Family
              </li>
              <li className="flex items-center gap-3 text-sm text-[#5D5A53]">
                <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 text-xs">
                  ✓
                </span>
                Cooling down heated texts
              </li>
              <li className="flex items-center gap-3 text-sm text-[#5D5A53]">
                <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 text-xs">
                  ✓
                </span>
                Managing social friction
              </li>
            </ul>
          </div>

          <div className="bg-[#2C2A26] border border-[#2C2A26] p-8 md:p-12 transition-all duration-500 shadow-xl group text-[#F5F2EB] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-yellow-600/10 rounded-full blur-[80px] -mr-16 -mt-16" />

            <div className="w-16 h-16 bg-[#3E3C38] rounded-full flex items-center justify-center mb-8 relative z-10 border border-yellow-900/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-yellow-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-serif text-[#F5F2EB] mb-4 relative z-10">
              The Strategic Defense
            </h3>
            <p className="text-[#A8A29E] leading-relaxed mb-8 relative z-10 h-12">
              Rock solid protection for high-stakes disputes. Detects legal
              risks and creates a documented &apos;War Room&apos;.
            </p>
            <ul className="space-y-4 border-t border-[#3E3C38] pt-8 relative z-10">
              <li className="flex items-center gap-3 text-sm text-[#A8A29E]">
                <span className="w-5 h-5 rounded-full bg-yellow-900/30 flex items-center justify-center text-yellow-500 text-xs">
                  ✓
                </span>
                Best for Business &amp; Custody
              </li>
              <li className="flex items-center gap-3 text-sm text-[#A8A29E]">
                <span className="w-5 h-5 rounded-full bg-yellow-900/30 flex items-center justify-center text-yellow-500 text-xs">
                  ✓
                </span>
                Fact-checking &amp; Timeline logging
              </li>
              <li className="flex items-center gap-3 text-sm text-[#A8A29E]">
                <span className="w-5 h-5 rounded-full bg-yellow-900/30 flex items-center justify-center text-yellow-500 text-xs">
                  ✓
                </span>
                Prevent litigation spirals
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modes;

