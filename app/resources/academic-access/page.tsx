import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteUrl = "https://conflictresolution.solutions";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Academic Access: ADR Training | Conflict Resolution",
  description:
    "Academic access for ADR training with simulations, role-play practice, and reflection prompts for negotiation skills.",
  alternates: {
    canonical: `${siteUrl}/resources/academic-access`,
  },
  openGraph: {
    type: "article",
    url: `${siteUrl}/resources/academic-access`,
    title: "Academic Access: ADR Training | Conflict Resolution",
    description:
      "Future-forward ADR training with simulations, mediation practice, and reflection prompts.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Conflict Resolution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Academic Access: ADR Training | Conflict Resolution",
    description:
      "Future-forward ADR training with simulations, mediation practice, and reflection prompts.",
    images: ["/twitter-image"],
  },
};

export default function AcademicAccessPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#2C2A26] text-[#F5F2EB]">
        <div className="absolute inset-0">
          <Image
            src="/images/background.webp"
            alt="Stormy ocean background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#2C2A26]/75" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-28">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D6D1C7]">
            Academic Access
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-serif font-bold leading-tight">
            Academic Access: The Future of ADR Training
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#D6D1C7] leading-relaxed">
            Build mediation training and conflict resolution practice into
            coursework with structured simulations and guided reflection.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/#waitlist"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#F5F2EB] text-[#2C2A26] uppercase tracking-widest text-sm font-bold rounded-sm hover:bg-[#D6D1C7] transition-colors"
            >
              Request University Access
            </Link>
            <div className="text-sm text-[#D6D1C7] leading-relaxed">
              Mention &quot;Academic&quot; when you join the waitlist.
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif">
              Student Sandbox
            </h2>
            <p className="mt-4 text-[#5D5A53] leading-relaxed">
              Students role-play against AI actors in controlled, repeatable
              scenarios. The sandbox gives them low-risk practice for real
              mediation training while tracking choices and tone.
            </p>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-serif">Simulation Mode</h2>
            <p className="mt-4 text-[#5D5A53] leading-relaxed">
              Faculty can assign structured simulations that mirror workplace,
              family, and community disputes. Each session emphasizes ADR
              techniques, negotiation skills, and calm communication.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#EBE7DE] border-y border-[#D6D1C7]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif">
            Reflection prompts and framework practice
          </h2>
          <p className="mt-4 text-[#5D5A53] leading-relaxed">
            Students can annotate transcripts, identify escalation triggers,
            and practice frameworks such as interest-based negotiation and
            nonviolent communication style.
          </p>
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#5D5A53]">
            <li className="border border-[#D6D1C7] bg-[#F5F2EB] p-4">
              What was the turning point, and what could shift it?
            </li>
            <li className="border border-[#D6D1C7] bg-[#F5F2EB] p-4">
              Which needs were stated vs implied?
            </li>
            <li className="border border-[#D6D1C7] bg-[#F5F2EB] p-4">
              How could the opening statement reduce defensiveness?
            </li>
            <li className="border border-[#D6D1C7] bg-[#F5F2EB] p-4">
              What options create mutual gains?
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-[#6B665E]">
            Roadmap
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-serif">
            Future vision for supervised learning
          </h2>
          <p className="mt-4 text-[#5D5A53] leading-relaxed">
            We are exploring ways to deepen ADR training for classrooms and
            clinics without promising timelines.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-[#5D5A53]">
            <li className="border border-[#D6D1C7] bg-white p-4">
              Students can pitch mediation strategies and receive structured
              feedback.
            </li>
            <li className="border border-[#D6D1C7] bg-white p-4">
              Supervised pathways for instructor review and assessment.
            </li>
            <li className="border border-[#D6D1C7] bg-white p-4">
              Scenario packs aligned to curriculum outcomes.
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif">
            Bring AI mediation practice to your program
          </h2>
          <p className="mt-4 text-[#5D5A53]">
            Join the waitlist and mention &quot;Academic&quot; for early access.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#waitlist"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#2C2A26] text-[#F5F2EB] uppercase tracking-widest text-sm font-bold rounded-sm hover:bg-[#3E3C38] transition-colors"
            >
              Request University Access
            </Link>
            <Link
              href="/resources/consultation-prep"
              className="inline-flex items-center justify-center px-8 py-3 border border-[#2C2A26] text-[#2C2A26] uppercase tracking-widest text-sm font-bold rounded-sm hover:bg-[#2C2A26] hover:text-[#F5F2EB] transition-colors"
            >
              Consultation Prep Kit
            </Link>
          </div>
          <p className="mt-8 text-xs text-[#6B665E] uppercase tracking-widest">
            Not legal advice. Not a substitute for professional judgment.
          </p>
        </div>
      </section>
    </div>
  );
}
