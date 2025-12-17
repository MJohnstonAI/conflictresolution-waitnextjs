/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Image from "next/image";
import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#F5F2EB] py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 relative h-[500px] bg-[#EBE7DE] rounded-sm overflow-hidden border border-[#D6D1C7] group">
            <Image
              src="/images/table.jpg"
              alt="Clean organized stack of legal briefs on a dark desk with a tablet showing the app interface"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#2C2A26]/10 group-hover:bg-[#2C2A26]/0 transition-colors duration-500" />
          </div>

          <div className="w-full lg:w-1/2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6B665E] mb-6 block">
              Value Proposition
            </span>

            <h2 className="text-4xl md:text-5xl font-serif text-[#2C2A26] leading-tight mb-8">
              Prevent Legal <br /> Spirals.
            </h2>

            <div className="w-20 h-1 bg-[#2C2A26] mb-8" />

            <p className="text-lg md:text-xl text-[#5D5A53] font-light leading-relaxed mb-6">
              Stop conflicts before they escalate into lawsuits. Our AI helps
              you de-escalate tension to avoid court entirely.
            </p>

            <p className="text-lg md:text-xl text-[#5D5A53] font-light leading-relaxed mb-8">
              If legal action is unavoidable, you&apos;ll have a clear,
              documented case history ready for your attorney, giving you the
              strategic advantage.
            </p>

            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#2C2A26] rounded-full" />
                <span className="text-sm font-medium text-[#2C2A26]">
                  Risk Assessment
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#2C2A26] rounded-full" />
                <span className="text-sm font-medium text-[#2C2A26]">
                  Evidence Logging
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

