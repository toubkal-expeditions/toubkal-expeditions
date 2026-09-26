import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SaharaTrekkingPage() {
  return (
    <main className="min-h-screen bg-[#0B1220]">

      {/* HEADER */}
      <Header />

      {/* SPACE BETWEEN HEADER & HERO */}
      <div className="h-8 bg-[#0B1220] lg:h-12" />

      {/* HERO */}
      <section className="relative mx-4 h-[78vh] min-h-[620px] overflow-hidden rounded-[2rem] lg:mx-8">

        {/* Background Image */}
        <img
          src="/images/expeditions/sahara-trekking.jpg"
          alt="Sahara trekking expedition in Morocco"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-14 lg:px-12 lg:pb-20">

            <div className="max-w-4xl">

              {/* Eyebrow */}
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-white/60" />

                <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/75">
                  Morocco • Sahara • Trekking
                </p>
              </div>

              {/* Title */}
              <h1 className="mt-6 text-5xl font-medium leading-[0.95] tracking-[-0.03em] text-white sm:text-6xl lg:text-[88px]">
                Sahara
                <span className="block text-white/65">
                  Trekking
              </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
                An immersive journey through the vast landscapes of southern
                Morocco, combining desert scenery, remote trails and authentic
                local experiences.
              </p>

              {/* Buttons */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0B1220] transition hover:bg-white/90"
                >
                  Request a Quote
                  <span className="ml-3 text-base">
                    →
                  </span>
                </Link>

                <Link
                  href="/expeditions"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-7 py-4 text-sm font-medium text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-[#0B1220]"
                >
                  View All Expeditions
                </Link>

              </div>
            </div>
          </div>
        </div>

        {/* Expedition Details */}
        <div className="absolute bottom-8 right-8 z-10 hidden lg:block">
          <div className="rounded-2xl border border-white/20 bg-black/20 px-6 py-5 backdrop-blur-md">

            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50">
              Expedition
            </p>

            <div className="mt-3 flex items-center gap-8">

              <div>
                <p className="text-xs text-white/50">
                  Duration
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  8 Days / 7 Nights
                </p>
              </div>

              <div className="h-8 w-px bg-white/20" />

              <div>
                <p className="text-xs text-white/50">
                  Style
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  Private Journey
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 lg:block">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/50">
              Explore
            </span>

            <div className="h-10 w-px bg-gradient-to-b from-white/60 to-transparent" />
          </div>
        </div>

      </section>

      {/* FOOTER */}
      <div className="mt-16">
        <Footer />
      </div>

    </main>
  );
}