/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useEffect, useState } from "react";
import { BRAND_NAME } from "../constants";

interface NavbarProps {
  onNavClick: (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => void;
  onWaitlistClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick, onWaitlistClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    setMobileMenuOpen(false);
    onNavClick(e, targetId);
  };

  const handlePriorityAccessClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    setMobileMenuOpen(false);
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "click_priority_access", {
        event_category: "navigation",
        event_label: "navbar_button",
      });
    }
    if (onWaitlistClick) {
      onWaitlistClick(e);
    } else {
      handleLinkClick(e, "waitlist");
    }
  };

  const isLightBackground = scrolled || mobileMenuOpen;
  const textColorClass = isLightBackground ? "text-[#2C2A26]" : "text-[#F5F2EB]";
  const logoDotClass = isLightBackground ? "bg-[#2C2A26]" : "bg-[#F5F2EB]";
  const priorityButtonClass = isLightBackground
    ? "px-6 py-2 border border-[#2C2A26] text-[#2C2A26] hover:bg-[#2C2A26] hover:text-[#F5F2EB]"
    : "px-6 py-2 border border-[#F5F2EB] text-[#F5F2EB] hover:bg-[#F5F2EB] hover:text-[#2C2A26]";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out border-b border-[#2C2A26]/5 ${
          scrolled || mobileMenuOpen
            ? "bg-[#F5F2EB]/90 backdrop-blur-md py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              onNavClick(e, "");
            }}
            className={`text-2xl md:text-3xl font-serif font-bold tracking-tight z-50 relative transition-colors duration-500 flex items-center gap-2 ${textColorClass}`}
          >
            <div
              className={`w-3 h-3 rounded-sm rotate-45 transition-colors duration-500 ${logoDotClass}`}
            />
            {BRAND_NAME}
          </a>

          <div
            className={`hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase transition-colors duration-500 ${textColorClass}`}
          >
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, "about")}
              className="hover:opacity-60 transition-opacity"
            >
              Philosophy
            </a>
            <a
              href="#modes"
              onClick={(e) => handleLinkClick(e, "modes")}
              className="hover:opacity-60 transition-opacity"
            >
              Modes
            </a>
            <a
              href="/waitlist"
              onClick={handlePriorityAccessClick}
              className={`${priorityButtonClass} transition-all rounded-sm`}
            >
              Priority Access
            </a>
          </div>

          <div className="md:hidden z-50 relative">
            <button
              className={`block focus:outline-none transition-colors duration-500 ${textColorClass}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
            >
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-[#F5F2EB] z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-8 text-xl font-serif font-medium text-[#2C2A26]">
          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, "about")}
            className="hover:opacity-60 transition-opacity"
          >
            Philosophy
          </a>
          <a
            href="#modes"
            onClick={(e) => handleLinkClick(e, "modes")}
            className="hover:opacity-60 transition-opacity"
          >
            Modes
          </a>
          <a
            href="/waitlist"
            onClick={handlePriorityAccessClick}
            className="border-b border-[#2C2A26] pb-1"
          >
            Priority Access
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;

