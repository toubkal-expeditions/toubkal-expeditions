import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-50 w-full bg-[#0B1220]">
      <div className="mx-auto flex min-h-[92px] max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <Link href="/" className="text-white">
          <span className="block text-xl font-semibold tracking-[0.18em]">
            TOUBKAL
          </span>

          <span className="mt-1 block text-[10px] tracking-[0.35em] text-white/60">
            EXPEDITIONS
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-9 md:flex">

          <Link
            href="/about"
            className="group relative py-2 text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white"
          >
            About
            <span className="absolute bottom-0 left-1/2 h-px w-0 bg-white transition-all duration-300 group-hover:left-0 group-hover:w-full" />
          </Link>

          <Link
            href="/expeditions"
            className="group relative py-2 text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white"
          >
            Expeditions
            <span className="absolute bottom-0 left-1/2 h-px w-0 bg-white transition-all duration-300 group-hover:left-0 group-hover:w-full" />
          </Link>

          <Link
            href="/blog"
            className="group relative py-2 text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white"
          >
            Blog
            <span className="absolute bottom-0 left-1/2 h-px w-0 bg-white transition-all duration-300 group-hover:left-0 group-hover:w-full" />
          </Link>

          <Link
            href="/contact"
            className="group relative py-2 text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white"
          >
            Contact
            <span className="absolute bottom-0 left-1/2 h-px w-0 bg-white transition-all duration-300 group-hover:left-0 group-hover:w-full" />
          </Link>

        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="rounded-full border border-white/50 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#0B1220]"
        >
          Request a Quote
        </Link>

      </div>
    </header>
  );
}