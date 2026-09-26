import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ExpeditionsPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#0B1220]">

      {/* HEADER */}
      <Header />


      {/* HERO */}
      <section className="bg-[#0B1220] px-4 pb-4 pt-8 sm:px-6 lg:px-8 lg:pb-8 lg:pt-12">

        <div className="relative min-h-[72vh] overflow-hidden rounded-[2rem]">

          <img
            src="/images/home/berber-villages-trek-morocco.jpg"
            alt="Moroccan High Atlas landscape"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

          {/* Content */}
          <div className="relative z-10 flex min-h-[72vh] items-end">

            <div className="mx-auto w-full max-w-7xl px-6 pb-14 lg:px-12 lg:pb-20">

              <div className="max-w-4xl">

                <div className="flex items-center gap-4">

                  <span className="h-px w-10 bg-white/60" />

                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/65">
                    Toubkal Expeditions
                  </p>

                </div>

                <h1 className="mt-6 text-5xl font-medium leading-[0.95] tracking-[-0.03em] text-white sm:text-6xl lg:text-[88px]">
                  Expeditions
                  <span className="block text-white/55">
                    through Morocco.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                  Private trekking, mountain biking and adventure journeys
                  through the High Atlas, southern Morocco and the Sahara.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0B1220] transition hover:bg-white/90"
                  >
                    Start Planning
                    <span className="ml-3 text-base">
                      →
                    </span>
                  </Link>

                  <a
                    href="#expeditions"
                    className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-7 py-4 text-sm font-medium text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-[#0B1220]"
                  >
                    Explore Journeys
                  </a>

                </div>

              </div>

            </div>

          </div>


          {/* Hero Information */}
          <div className="absolute bottom-8 right-8 z-10 hidden lg:block">

            <div className="rounded-2xl border border-white/20 bg-black/20 px-6 py-5 backdrop-blur-md">

              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/45">
                Morocco
              </p>

              <div className="mt-3 flex items-center gap-8">

                <div>
                  <p className="text-xs text-white/45">
                    Experience
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    Private Journeys
                  </p>
                </div>

                <div className="h-8 w-px bg-white/20" />

                <div>
                  <p className="text-xs text-white/45">
                    Regions
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    Atlas • Sahara
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* INTRODUCTION */}
      <section className="bg-[#f7f5f0] py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-7">

              <div className="flex items-center gap-4">

                <span className="h-px w-10 bg-[#0B1220]/30" />

                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0B1220]/45">
                  Choose Your Journey
                </p>

              </div>

              <h2 className="mt-6 text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Adventure shaped
                <span className="block text-[#0B1220]/40">
                  around you.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-4 lg:col-start-9">

              <p className="text-base leading-8 text-[#0B1220]/55 sm:text-lg">
                From mountain trekking to remote cycling routes and journeys
                towards the Sahara, every expedition is designed around your
                interests, pace and experience.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* EXPEDITIONS */}
      <section
        id="expeditions"
        className="bg-white py-24 sm:py-32"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid gap-6 md:grid-cols-2">


            {/* TREKKING */}
            <Link
              href="/expeditions/trekking"
              className="group relative overflow-hidden rounded-[2rem]"
            >

              <img
                src="/images/home/berber-villages-trek-morocco.jpg"
                alt="Trekking in the High Atlas"
                className="h-[560px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/30 transition duration-500 group-hover:bg-black/45" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">

                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
                  01
                </p>

                <h3 className="mt-4 text-3xl font-medium text-white sm:text-4xl">
                  Trekking
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-7 text-white/65">
                  Explore the High Atlas on foot, from traditional Berber
                  villages and valleys to high mountain passes and Toubkal.
                </p>

                <span className="mt-7 inline-flex items-center text-sm font-semibold text-white">
                  Explore trekking
                  <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>

              </div>

            </Link>


            {/* MOUNTAIN BIKE */}
            <Link
              href="/expeditions/mountain-bike"
              className="group relative overflow-hidden rounded-[2rem]"
            >

              <img
                src="/images/home/berber-villages-trek-morocco.jpg"
                alt="Mountain biking in Morocco"
                className="h-[560px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/30 transition duration-500 group-hover:bg-black/45" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">

                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
                  02
                </p>

                <h3 className="mt-4 text-3xl font-medium text-white sm:text-4xl">
                  Mountain Bike
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-7 text-white/65">
                  Ride remote mountain roads, village trails and spectacular
                  High Atlas landscapes with experienced local guides.
                </p>

                <span className="mt-7 inline-flex items-center text-sm font-semibold text-white">
                  Explore mountain biking
                  <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>

              </div>

            </Link>


            {/* E-MTB */}
            <Link
              href="/expeditions/e-mtb"
              className="group relative overflow-hidden rounded-[2rem]"
            >

              <img
                src="/images/home/berber-villages-trek-morocco.jpg"
                alt="E-MTB adventure in Morocco"
                className="h-[560px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/30 transition duration-500 group-hover:bg-black/45" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">

                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
                  03
                </p>

                <h3 className="mt-4 text-3xl font-medium text-white sm:text-4xl">
                  E-MTB
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-7 text-white/65">
                  Cover more ground with premium e-MTBs, combining mountain
                  adventure, freedom and comfort.
                </p>

                <span className="mt-7 inline-flex items-center text-sm font-semibold text-white">
                  Explore e-MTB
                  <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>

              </div>

            </Link>


            {/* ATLAS TO DESERT */}
            <Link
              href="/expeditions/atlas-to-desert"
              className="group relative overflow-hidden rounded-[2rem]"
            >

              <img
                src="/images/home/berber-villages-trek-morocco.jpg"
                alt="Atlas to Desert adventure"
                className="h-[560px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/30 transition duration-500 group-hover:bg-black/45" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">

                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
                  04
                </p>

                <h3 className="mt-4 text-3xl font-medium text-white sm:text-4xl">
                  Atlas to Desert
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-7 text-white/65">
                  Travel from the High Atlas towards the Sahara through
                  valleys, kasbahs, mountain roads and desert landscapes.
                </p>

                <span className="mt-7 inline-flex items-center text-sm font-semibold text-white">
                  Explore Atlas to Desert
                  <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>

              </div>

            </Link>

          </div>


          {/* CUSTOM JOURNEYS */}
          <Link
            href="/expeditions/custom"
            className="group mt-6 flex flex-col gap-8 rounded-[2rem] bg-[#0B1220] p-8 text-white sm:p-10 lg:flex-row lg:items-center lg:justify-between"
          >

            <div>

              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/40">
                05
              </p>

              <h3 className="mt-4 text-3xl font-medium sm:text-4xl">
                Custom Journeys
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/50">
                Have something different in mind? Tell us your dates,
                interests and experience and we can create a private journey
                specifically for you.
              </p>

            </div>

            <span className="shrink-0 text-sm font-semibold text-white">
              Start planning
              <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>

          </Link>

        </div>

      </section>


      {/* WHY TRAVEL WITH US */}
      <section className="bg-[#0B1220] py-24 text-white sm:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="max-w-3xl">

            <div className="flex items-center gap-4">

              <span className="h-px w-10 bg-white/40" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/45">
                The Toubkal Difference
              </p>

            </div>

            <h2 className="mt-6 text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              More than a route.
              <span className="block text-white/40">
                A complete experience.
              </span>
            </h2>

          </div>


          <div className="mt-16 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-2 lg:grid-cols-4">

            <div>

              <p className="text-xs font-semibold tracking-[0.2em] text-white/30">
                01
              </p>

              <h3 className="mt-6 text-xl font-medium">
                Local Expertise
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/45">
                Local guides and a team who know Morocco's mountains,
                landscapes and communities personally.
              </p>

            </div>


            <div>

              <p className="text-xs font-semibold tracking-[0.2em] text-white/30">
                02
              </p>

              <h3 className="mt-6 text-xl font-medium">
                Private Journeys
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/45">
                Travel privately with an itinerary shaped around your group,
                interests and preferred pace.
              </p>

            </div>


            <div>

              <p className="text-xs font-semibold tracking-[0.2em] text-white/30">
                03
              </p>

              <h3 className="mt-6 text-xl font-medium">
                Personal Service
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/45">
                From the first conversation to the final day, our team manages
                the details of your journey.
              </p>

            </div>


            <div>

              <p className="text-xs font-semibold tracking-[0.2em] text-white/30">
                04
              </p>

              <h3 className="mt-6 text-xl font-medium">
                Beyond the Route
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/45">
                Discover villages, food, landscapes and experiences beyond
                the standard tourist routes.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="bg-[#f7f5f0] py-24 sm:py-32">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0B1220]/40">
            Start Your Journey
          </p>

          <h2 className="mt-6 text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Ready to explore
            <span className="block text-[#0B1220]/40">
              Morocco differently?
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#0B1220]/55 sm:text-lg">
            Tell us what you are looking for and our local team will help
            create the right expedition for you.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex rounded-full bg-[#0B1220] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#172238]"
          >
            Request a Quote
            <span className="ml-3">
              →
            </span>
          </Link>

        </div>

      </section>


      {/* FOOTER */}
      <Footer />

    </main>
  );
}