/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface PageFrameProps {
  children: React.ReactNode;
  onNavClick: (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => void;
  onWaitlistClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function PageFrame({
  children,
  onNavClick,
  onWaitlistClick,
}: PageFrameProps) {
  return (
    <div className="min-h-screen bg-[#F5F2EB] font-sans text-[#2C2A26] selection:bg-[#D6D1C7] selection:text-[#2C2A26]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-[#F5F2EB] focus:text-[#2C2A26] focus:px-4 focus:py-2 focus:rounded-sm focus:ring-2 focus:ring-[#2C2A26]/30"
      >
        Skip to content
      </a>
      <Navbar onNavClick={onNavClick} onWaitlistClick={onWaitlistClick} />

      <main id="main-content">{children}</main>

      <Footer onLinkClick={onNavClick} onWaitlistClick={onWaitlistClick} />
    </div>
  );
}
