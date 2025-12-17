"use client";

import About from "@/src/components/About";
import ContactSection from "@/src/components/ContactSection";
import Hero from "@/src/components/Hero";
import HowItWorks from "@/src/components/HowItWorks";
import Modes from "@/src/components/Modes";
import PageFrame from "@/src/components/PageFrame";
import { usePageNavigation } from "@/src/hooks/usePageNavigation";

export default function HomePage() {
  const { handleNavClick, handleWaitlistClick } = usePageNavigation();

  return (
    <PageFrame onNavClick={handleNavClick} onWaitlistClick={handleWaitlistClick}>
      <Hero onWaitlistClick={handleWaitlistClick} />
      <Modes />
      <About />
      <HowItWorks />
      <ContactSection onWaitlistClick={handleWaitlistClick} />
    </PageFrame>
  );
}
