import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B1220] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <span className="block text-2xl font-semibold tracking-[0.18em]">
                TOUBKAL
              </span>

              <span className="mt-1 block text-[10px] tracking-[0.35em] text-white/50">
                EXPEDITIONS
              </span>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/50">
              Trekking, mountain biking and adventure journeys through
              Morocco's High Atlas, desert and beyond.
            </p>
          </div>

          {/* Main Pages */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Explore
            </h3>

            <nav className="mt-5 flex flex-col gap-3 text-sm">
              <Link
                href="/about"
                className="text-white/70 transition hover:text-white"
              >
                About
              </Link>

              <Link
                href="/expeditions"
                className="text-white/70 transition hover:text-white"
              >
                Expeditions
              </Link>

              <Link
                href="/blog"
                className="text-white/70 transition hover:text-white"
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className="text-white/70 transition hover:text-white"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Start Planning
            </h3>

            <p className="mt-5 text-sm leading-7 text-white/50">
              Ready to explore Morocco?
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0B1220] transition hover:bg-white/90"
            >
              Request a Quote
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Toubkal Expeditions. All rights
            reserved.
          </p>

          <p className="text-xs text-white/30">
            Morocco • High Atlas • Sahara
          </p>
        </div>
      </div>
    </footer>
  );
}