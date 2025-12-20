/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { DEMO_EXAMPLES } from "../constants";

interface HeroProps {
  onWaitlistClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Hero: React.FC<HeroProps> = ({ onWaitlistClick }) => {
  const [email, setEmail] = useState("");
  const [resolved, setResolved] = useState(false);
  const [exampleIndex, setExampleIndex] = useState(0);
  const [showFollowUp, setShowFollowUp] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setResolved((prev) => {
        const next = !prev;
        if (!next) {
          setExampleIndex((idx) => (idx + 1) % DEMO_EXAMPLES.length);
        }
        return next;
      });
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!resolved) {
      setShowFollowUp(false);
      return;
    }

    const timer = setTimeout(() => {
      setShowFollowUp(true);
    }, 1600);

    return () => clearTimeout(timer);
  }, [resolved, exampleIndex]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleJoinListClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_join_list", {
        event_category: "conversion",
        event_label: "hero_cta",
        value: email ? 1 : 0,
      });
    }
    if (onWaitlistClick) {
      onWaitlistClick(e);
    } else {
      handleNavClick(e, "waitlist");
    }
  };

  const currentExample = DEMO_EXAMPLES[exampleIndex % DEMO_EXAMPLES.length];
  const highRiskReply =
    currentExample.highRiskResponse ??
    "Are you kidding me? This is ridiculous. I'm done with this.";
  const followUpMode = currentExample.followUpMode || currentExample.mode;

  return (
    <section className="relative w-full min-h-screen pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#2C2A26] px-6">
      <div className="absolute inset-x-0 top-0 h-[65vh] z-0 overflow-hidden">
        <Image
          src="/images/background.webp"
          alt="Stormy ocean background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#2C2A26]/10 via-[#2C2A26]/10 to-[#2C2A26]/10 z-10 pointer-events-none" />

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] z-0 opacity-40" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-700/10 rounded-full blur-[120px] z-0 opacity-40" />

      <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="animate-fade-in-up order-2 lg:order-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F2EB]/10 border border-[#F5F2EB]/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-widest text-[#F5F2EB]/80">
              AI Mediation Beta
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#F5F2EB] tracking-tight mb-6 leading-[1.1]">
            Master Every <br />
            <span className="italic text-[#A8A29E]">Conflict.</span>
          </h1>

          <p className="text-lg md:text-xl text-[#A8A29E] font-light leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
            From social friction to legal disputes - get the strategic AI
            response in seconds. Choose your engine: Peacekeeper, Barrister, or
            Defense.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0">
            <input
              type="email"
              placeholder="Enter your email"
              inputMode="email"
              autoComplete="email"
              className="flex-1 px-6 py-4 rounded-sm bg-[#F5F2EB]/5 border border-[#F5F2EB]/20 text-[#F5F2EB] placeholder-[#A8A29E] focus:outline-none focus:border-[#F5F2EB]/50 transition-colors"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <a
              href="/waitlist"
              onClick={handleJoinListClick}
              className="px-8 py-4 bg-[#F5F2EB] text-[#2C2A26] font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-[#D6D1C7] transition-colors whitespace-nowrap flex items-center justify-center"
            >
              Join List
            </a>
          </div>
          <p className="mt-4 text-sm text-[#A8A29E] font-medium tracking-wide">
            Limited spots for the Beta release.
          </p>
        </div>

        <div className="order-1 lg:order-2 relative flex justify-center items-center h-[520px] lg:h-[740px] animate-fade-in-up animate-delay-200">
          <div
            className="w-[360px] sm:w-[380px] lg:w-[420px] bg-gradient-to-b from-[#1f1d1b] via-[#191816] to-[#0f0e0d] border border-[#3E3C38] rounded-[28px] p-4 shadow-[0_25px_50px_rgba(0,0,0,0.45)] relative overflow-hidden ring-1 ring-white/10 min-h-[520px] lg:min-h-[680px]"
            style={{
              boxShadow:
                "0 25px 50px rgba(0,0,0,0.45), inset 0 1px 8px rgba(255,255,255,0.06), inset 0 -2px 16px rgba(0,0,0,0.45)",
            }}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20" />

            <div className="absolute top-0 left-0 right-0 h-16 bg-[#2C2A26] border-b border-[#3E3C38] flex items-center px-6 gap-3 z-10">
              <div className="w-8 h-8 rounded-full bg-[#3E3C38]" />
              <div>
                <div className="h-2 w-20 bg-[#3E3C38] rounded mb-1" />
                <div className="h-1.5 w-12 bg-[#3E3C38]/50 rounded" />
              </div>
            </div>

            <div className="pt-20 pb-16 space-y-4 relative">
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-[#3E3C38] shrink-0 mt-2" />
                <div className="bg-[#2C2A26] p-3 rounded-2xl rounded-tl-none text-sm text-[#A8A29E] leading-relaxed border border-[#3E3C38] max-w-[80%]">
                  {currentExample.conflict}
                </div>
              </div>

              <div className="flex flex-col items-end">
                <div
                  className={`transition-all duration-700 ease-in-out transform ${
                    resolved
                      ? "opacity-0 translate-y-4 absolute"
                      : "opacity-100 translate-y-0 relative"
                  }`}
                >
                  <div className="bg-red-900/20 border border-red-900/30 p-3 rounded-2xl rounded-tr-none text-sm text-red-400 leading-relaxed max-w-[80%] ml-auto">
                    {highRiskReply}
                  </div>
                  <span className="text-xs text-red-500/70 mt-1 block text-right font-medium">
                    WRONG - High Risk
                  </span>
                </div>

                <div
                  className={`transition-all duration-700 ease-in-out transform ${
                    !resolved
                      ? "opacity-0 -translate-y-4 absolute"
                      : "opacity-100 translate-y-0 relative"
                  }`}
                >
                  <div className="bg-[#F5F2EB] p-3 rounded-2xl rounded-tr-none text-sm text-[#2C2A26] leading-relaxed max-w-[90%] ml-auto shadow-lg">
                    {currentExample.response}
                  </div>
                  <div className="flex items-center justify-end gap-1 mt-1">
                    <span className="w-2 h-2 rounded-full bg-[#F5F2EB]" />
                    <span className="text-xs text-[#F5F2EB] font-medium">
                      {currentExample.mode} Mode
                    </span>
                  </div>
                </div>
                {showFollowUp && currentExample.opponentFollowUp && (
                  <div className="flex gap-2 w-full pt-2">
                    <div className="w-8 h-8 rounded-full bg-[#3E3C38] shrink-0 mt-2" />
                    <div className="bg-[#2C2A26] p-3 rounded-2xl rounded-tl-none text-sm text-[#A8A29E] leading-relaxed border border-[#3E3C38] max-w-[80%]">
                      {currentExample.opponentFollowUp}
                    </div>
                  </div>
                )}
                {showFollowUp && currentExample.userSecondResponse && (
                  <div className="flex flex-col items-end w-full pt-2 space-y-1">
                    <div className="bg-[#F5F2EB] p-3 rounded-2xl rounded-tr-none text-sm text-[#2C2A26] leading-relaxed max-w-[90%] ml-auto shadow-lg">
                      {currentExample.userSecondResponse}
                    </div>
                    <div className="flex items-center justify-end gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#F5F2EB]" />
                      <span className="text-xs text-[#F5F2EB] font-medium">
                        {followUpMode} Mode
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/8 via-transparent to-transparent" />
            </div>

            <div
              className={`absolute bottom-6 left-1/2 -translate-x-1/2 transition-opacity duration-300 ${
                !resolved && resolved !== null ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="bg-[#2C2A26]/90 backdrop-blur px-4 py-2 rounded-full border border-[#3E3C38] flex items-center gap-2 shadow-sm">
                <div className="w-3 h-3 border-2 border-[#F5F2EB] border-t-transparent rounded-full animate-spin" />
                <span className="text-xs uppercase tracking-widest text-[#F5F2EB] font-bold">
                  Optimizing...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
