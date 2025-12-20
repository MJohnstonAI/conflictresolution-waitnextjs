/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import { usePathname } from "next/navigation";
import React from "react";

interface FooterProps {
  onLinkClick: (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => void;
  onWaitlistClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick, onWaitlistClick }) => {
  const pathname = usePathname();
  const siteUrl = "https://conflictresolution.solutions";
  const currentUrl = `${siteUrl}${pathname ?? ""}`;
  const buildVersion = process.env.NEXT_PUBLIC_BUILD_VERSION ?? "v1.2";
  const shareText =
    "Check out Conflict Resolution - AI Mediation for Texts and Emails.";
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
      shareText,
    )}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      currentUrl,
    )}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      currentUrl,
    )}`,
  };

  return (
    <footer className="bg-[#EBE7DE] pt-24 pb-12 px-6 text-[#5D5A53] border-t border-[#D6D1C7]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-6">
          <h4 className="text-2xl font-serif text-[#2C2A26] mb-6 flex items-center gap-2">
            <div className="w-3 h-3 bg-[#2C2A26] rounded-sm rotate-45" />
            Conflict Resolution
          </h4>
          <p className="max-w-xs font-light leading-relaxed text-[#5D5A53]">
            Instant AI Mediation for Texts, Emails, and Disputes. Peacekeeper,
            Barrister, and Defense modes to protect your peace.
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-bold text-[#2C2A26] mb-6 tracking-wide text-xs uppercase">
            Product
          </h4>
          <ul className="space-y-4 font-light text-sm">
            <li>
              <a
                href="#about"
                onClick={(e) => onLinkClick(e, "about")}
                className="hover:text-[#2C2A26] transition-colors"
              >
                Philosophy
              </a>
            </li>
            <li>
              <a
                href="#modes"
                onClick={(e) => onLinkClick(e, "modes")}
                className="hover:text-[#2C2A26] transition-colors"
              >
                Modes
              </a>
            </li>
            <li>
              <a
                href="/waitlist"
                onClick={(e) => {
                  if (onWaitlistClick) {
                    onWaitlistClick(e);
                  } else {
                    onLinkClick(e, "waitlist");
                  }
                }}
                className="hover:text-[#2C2A26] transition-colors"
              >
                Priority Access
              </a>
            </li>
          </ul>
          <h4 className="font-bold text-[#2C2A26] mt-8 mb-6 tracking-wide text-xs uppercase">
            Resources
          </h4>
          <ul className="space-y-4 font-light text-sm">
            <li>
              <a
                href="/resources/consultation-prep"
                className="hover:text-[#2C2A26] transition-colors"
              >
                Consultation Prep
              </a>
            </li>
            <li>
              <a
                href="/resources/academic-access"
                className="hover:text-[#2C2A26] transition-colors"
              >
                Academic Access
              </a>
            </li>
            <li>
              <a
                href="/resources/clinical-toolkit"
                className="hover:text-[#2C2A26] transition-colors"
              >
                Clinical Toolkit
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-bold text-[#2C2A26] mb-6 tracking-wide text-xs uppercase">
            Share
          </h4>
          <div className="flex gap-4">
            <a
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-[#D6D1C7]/30 rounded-full hover:bg-[#2C2A26] hover:text-[#F5F2EB] transition-all duration-300"
              aria-label="Share on X (Twitter)"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-[#D6D1C7]/30 rounded-full hover:bg-[#2C2A26] hover:text-[#F5F2EB] transition-all duration-300"
              aria-label="Share on Facebook"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-4 w-4">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a
              href={shareLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-[#D6D1C7]/30 rounded-full hover:bg-[#2C2A26] hover:text-[#F5F2EB] transition-all duration-300"
              aria-label="Share on LinkedIn"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-4 w-4">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5S0 4.881 0 3.5C0 2.12 1.11 1 2.48 1s2.48 1.12 2.48 2.5zm.02 4.5H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[#D6D1C7] flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest text-[#6B665E]">
        <p>&copy; 2025 NeuroSyncTeam AI Dynamics. All rights reserved.</p>
        <p className="mt-3 md:mt-0">Build {buildVersion}</p>
      </div>
    </footer>
  );
};

export default Footer;

