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
      <Navbar onNavClick={onNavClick} onWaitlistClick={onWaitlistClick} />

      <main>{children}</main>

      <Footer onLinkClick={onNavClick} onWaitlistClick={onWaitlistClick} />
    </div>
  );
}

