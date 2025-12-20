import Link from "next/link";

const RESOURCE_LINKS = [
  { href: "/resources/consultation-prep", label: "Consultation Prep" },
  { href: "/resources/academic-access", label: "Academic Access" },
  { href: "/resources/clinical-toolkit", label: "Clinical Toolkit" },
];

export default function ResourcesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#F5F2EB] text-[#2C2A26]">
      <header className="sticky top-0 z-40 border-b border-[#2C2A26]/10 bg-[#2C2A26]/85 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-[#F5F2EB] font-serif font-bold text-lg tracking-tight"
          >
            <span className="w-3 h-3 bg-[#F5F2EB] rounded-sm rotate-45" />
            Conflict Resolution
          </Link>
          <nav className="flex items-center gap-6 text-xs uppercase tracking-[0.2em] font-semibold text-[#F5F2EB]/80">
            <Link href="/" className="hover:text-[#F5F2EB] transition-colors">
              Home
            </Link>
            <Link
              href="/#waitlist"
              className="px-4 py-2 border border-[#F5F2EB]/70 text-[#F5F2EB] hover:bg-[#F5F2EB] hover:text-[#2C2A26] transition-colors"
            >
              Join Waitlist
            </Link>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-[#2C2A26] text-[#F5F2EB] border-t border-[#3E3C38]">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 font-serif text-lg font-bold">
              <span className="w-3 h-3 bg-[#F5F2EB] rounded-sm rotate-45" />
              Conflict Resolution
            </div>
            <p className="mt-4 text-sm text-[#D6D1C7] leading-relaxed max-w-xs">
              Practical guides and templates for calmer, clearer dispute
              preparation.
            </p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A8A29E]">
              Resources
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[#F5F2EB]">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A8A29E]">
              Navigate
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[#F5F2EB]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#waitlist"
                  className="hover:text-white transition-colors"
                >
                  Join Waitlist
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 pb-10 text-xs text-[#A8A29E] uppercase tracking-widest">
          Conflict Resolution is in beta. Not a law firm.
        </div>
      </footer>
    </div>
  );
}
