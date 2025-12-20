import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteUrl = "https://conflictresolution.solutions";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Consultation Prep Kit | Conflict Resolution",
  description:
    "Templates and checklists to prepare for a professional consultation about a dispute, with timelines and message summaries.",
  alternates: {
    canonical: `${siteUrl}/resources/consultation-prep`,
  },
  openGraph: {
    type: "article",
    url: `${siteUrl}/resources/consultation-prep`,
    title: "Consultation Prep Kit | Conflict Resolution",
    description:
      "Prepare for a professional consultation about a dispute with timelines, summaries, and clear questions.",
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
    title: "Consultation Prep Kit | Conflict Resolution",
    description:
      "Prepare for a professional consultation about a dispute with timelines, summaries, and clear questions.",
    images: ["/twitter-image"],
  },
};

const faqItems = [
  {
    question: "Do I need to bring every message thread?",
    answer:
      "No. Bring anchor messages that show decisions, promises, threats, or escalation points. A short, organized set is better than a full dump.",
  },
  {
    question: "What if I do not know exact dates?",
    answer:
      "Use approximate dates and label them as estimates. Clarity about sequence matters more than perfect timestamps.",
  },
  {
    question: "Is this a substitute for professional advice?",
    answer:
      "No. This kit is for organization and clarity so you can use professional time well.",
  },
  {
    question: "Can I use this for HR, mediation, or a lawyer consultation?",
    answer:
      "Yes. The structure is designed to help any professional quickly understand the dispute and your goals.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function ConsultationPrepPage() {
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
            Consultation Prep Kit
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-serif font-bold leading-tight">
            Consultation Prep Kit: Timeline &amp; Message Summary Templates
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#D6D1C7] leading-relaxed">
            Use this kit to prepare for a mediation, HR, or lawyer consultation
            about a dispute. Organize the story, reduce noise, and make your
            goals clear.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/#waitlist"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#F5F2EB] text-[#2C2A26] uppercase tracking-widest text-sm font-bold rounded-sm hover:bg-[#D6D1C7] transition-colors"
            >
              Join Waitlist
            </Link>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#D6D1C7]">
              <Link
                href="/resources/clinical-toolkit"
                className="underline underline-offset-4 hover:text-white"
              >
                De-escalation Toolkit
              </Link>
              <Link
                href="/resources/academic-access"
                className="underline underline-offset-4 hover:text-white"
              >
                Academic Access
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif">
            How to prepare for a consultation about a dispute
          </h2>
          <ol className="mt-6 space-y-4 text-[#5D5A53] leading-relaxed">
            <li>
              <span className="font-semibold text-[#2C2A26]">
                1. One-sentence dispute summary.
              </span>{" "}
              Capture the who, what, and desired outcome in a single sentence.
            </li>
            <li>
              <span className="font-semibold text-[#2C2A26]">
                2. Timeline (facts first).
              </span>{" "}
              List dates, events, and actions in order without interpretation.
            </li>
            <li>
              <span className="font-semibold text-[#2C2A26]">
                3. Select anchor messages.
              </span>{" "}
              Pick 5 to 10 messages that show key promises, threats, or changes.
            </li>
            <li>
              <span className="font-semibold text-[#2C2A26]">
                4. Facts vs interpretations vs feelings.
              </span>{" "}
              Separate verifiable facts from how you interpreted them and how
              they felt.
            </li>
            <li>
              <span className="font-semibold text-[#2C2A26]">
                5. Outcomes plus constraints.
              </span>{" "}
              Define what resolution looks like and any limits you cannot move.
            </li>
            <li>
              <span className="font-semibold text-[#2C2A26]">
                6. Three questions for the professional.
              </span>{" "}
              Focus on options, risk, and best next steps.
            </li>
            <li>
              <span className="font-semibold text-[#2C2A26]">
                7. Optional calm message draft.
              </span>{" "}
              Write a short, neutral draft you can use if asked to respond.
            </li>
          </ol>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#EBE7DE] border-y border-[#D6D1C7]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif">
            Copy/paste templates
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6">
            <div>
              <h3 className="text-xl font-serif mb-3">
                One-sentence dispute summary
              </h3>
              <pre className="bg-[#F5F2EB] border border-[#D6D1C7] p-4 text-sm text-[#2C2A26] overflow-x-auto">
                <code>{`[Who] + [issue] + [timeframe] + [current status] + [what you want]

Example:
I have a dispute with [name] about [issue] from [month], and I am seeking [outcome].`}</code>
              </pre>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-3">Timeline template</h3>
              <pre className="bg-[#F5F2EB] border border-[#D6D1C7] p-4 text-sm text-[#2C2A26] overflow-x-auto">
                <code>{`Timeline
- [Date]: [Event or action]
- [Date]: [Message summary or decision]
- [Date]: [Follow-up or outcome]`}</code>
              </pre>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-3">
                Message thread summary
              </h3>
              <pre className="bg-[#F5F2EB] border border-[#D6D1C7] p-4 text-sm text-[#2C2A26] overflow-x-auto">
                <code>{`Anchor Messages (5 to 10)
- [Date/Channel] [Sender]: "[short quote]" -> Why it matters
- [Date/Channel] [Sender]: "[short quote]" -> Why it matters`}</code>
              </pre>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-3">
                Facts vs feelings split
              </h3>
              <pre className="bg-[#F5F2EB] border border-[#D6D1C7] p-4 text-sm text-[#2C2A26] overflow-x-auto">
                <code>{`Facts
- [What happened, verifiable]

Interpretations
- [What you assumed or inferred]

Feelings and impact
- [How it affected you or others]`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif">
            When to escalate to a professional
          </h2>
          <p className="mt-4 text-[#5D5A53] leading-relaxed">
            Seek professional help if the dispute involves threats,
            harassment, money, contracts, property, custody, or formal
            complaints. If you are unsure about your rights or potential
            exposure, ask for legal advice from a qualified professional.
          </p>
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#5D5A53]">
            <li className="border border-[#D6D1C7] bg-[#F5F2EB] p-4">
              Explicit threats, harassment, or safety concerns
            </li>
            <li className="border border-[#D6D1C7] bg-[#F5F2EB] p-4">
              Contracts, invoices, or large financial exposure
            </li>
            <li className="border border-[#D6D1C7] bg-[#F5F2EB] p-4">
              Property, custody, or ongoing shared obligations
            </li>
            <li className="border border-[#D6D1C7] bg-[#F5F2EB] p-4">
              Formal complaints at work or in your community
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#F5F2EB]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif">FAQ</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="border border-[#D6D1C7] bg-white p-4"
              >
                <summary className="cursor-pointer font-semibold text-[#2C2A26]">
                  {item.question}
                </summary>
                <p className="mt-3 text-[#5D5A53]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif">
            Ready to de-escalate with AI guidance?
          </h2>
          <p className="mt-4 text-[#5D5A53]">
            Join the waitlist for early access to Conflict Resolution.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#waitlist"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#2C2A26] text-[#F5F2EB] uppercase tracking-widest text-sm font-bold rounded-sm hover:bg-[#3E3C38] transition-colors"
            >
              Join Waitlist
            </Link>
            <Link
              href="/resources/clinical-toolkit"
              className="inline-flex items-center justify-center px-8 py-3 border border-[#2C2A26] text-[#2C2A26] uppercase tracking-widest text-sm font-bold rounded-sm hover:bg-[#2C2A26] hover:text-[#F5F2EB] transition-colors"
            >
              Visit Clinical Toolkit
            </Link>
          </div>
          <p className="mt-8 text-xs text-[#6B665E] uppercase tracking-widest">
            Not legal advice. Not a substitute for professional judgment.
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </div>
  );
}
