/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import PageFrame from "@/src/components/PageFrame";
import WaitlistPage from "@/src/components/WaitlistPage";
import { usePageNavigation } from "@/src/hooks/usePageNavigation";

export default function WaitlistRoutePage() {
  const { handleNavClick, handleWaitlistClick } = usePageNavigation();

  return (
    <PageFrame onNavClick={handleNavClick} onWaitlistClick={handleWaitlistClick}>
      <WaitlistPage />
    </PageFrame>
  );
}
