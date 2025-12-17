/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

export function usePageNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = useCallback((targetId: string) => {
    if (!targetId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(targetId);
    if (!element) return;

    const headerOffset = 85;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      e.preventDefault();

      if (pathname !== "/") {
        router.push("/");
        setTimeout(() => scrollToSection(targetId), 100);
        return;
      }

      scrollToSection(targetId);
    },
    [pathname, router, scrollToSection],
  );

  const handleWaitlistClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      router.push("/waitlist");
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [router],
  );

  return { handleNavClick, handleWaitlistClick };
}

