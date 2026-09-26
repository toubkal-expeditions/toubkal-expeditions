import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#0B1220]">

      {/* HEADER */}
      <Header />


      {/* HERO */}
      <section className="bg-[#0B1220] px-4 pb-4 pt-8 sm:px-6 lg:px-8 lg:pb-8 lg:pt-12">

        <div className="relative min-h-[72vh] overflow-hidden rounded-[2rem]">

          <img
            src="/images/home/berber-villages-trek-morocco.jpg"
            alt="High Atlas mountains and Berber villages in Morocco"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

          <div className="relative z-10 flex min-h-[72vh] items-end">

            <div className="mx-auto w-full max-w-7xl px-6 pb-14 lg:px-12 lg:pb-20">

              <div className="max-w-4xl">

                <div className="flex items-center gap-4">

                  <span className="h-px w-10 bg-white/60" />

                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/65">
                    About Toubkal Expeditions
                  </p>

                </div>

                <h1 className="mt-6 text-5xl font-medium leading-[0.95] tracking-[-0.03em] text-white sm:text-6xl lg:text-[88px]">
                  Morocco from
                  <span className="block text-white/55">
                    the inside.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                  We create private trekking, cycling and adventure journeys
                  built around the places, people and landscapes we know best.
                </p>

              </div>

            </div>

          </div>


          {/* HERO INFO */}
          <div className="absolute bottom-8 right-8 z-10 hidden lg:block">

            <div className="rounded-2xl border border-white/20 bg-black/20 px-6 py-5 backdrop-blur-md">

              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/45">
                Our Approach
              </p>

              <div className="mt-3 flex items-center gap-8">

                <div>
                  <p className="text-xs text-white/45">
                    Based in
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    High Atlas
                  </p>
                </div>

                <div className="h-8 w-px bg-white/20" />

                <div>
                  <p className="text-xs text-white/45">
                    Journeys
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    Private & Custom
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

          <div className="grid gap-14 lg:grid-cols-12 lg:items-start">

            <div className="lg:col-span-7">

              <div className="flex items-center gap-4">

                <span className="h-px w-10 bg-[#0B1220]/30" />

                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0B1220]/45">
                  Who We Are
                </p>

              </div>

              <h2 className="mt-6 text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                A local team with
                <span className="block text-[#0B1220]/40">
                  a deep connection to Morocco.
                </span>
              </h2>

            </div>

            <div className="space-y-6 lg:col-span-4 lg:col-start-9">

              <p className="text-base leading-8 text-[#0B1220]/65 sm:text-lg">
                Toubkal Expeditions is a Morocco-based adventure company
                specialising in private trekking, mountain biking and
                tailor-made journeys.
              </p>

              <p className="text-base leading-8 text-[#0B1220]/55 sm:text-lg">
                Our work is rooted in the High Atlas, but our journeys extend
                far beyond the mountains — into southern valleys, desert
                landscapes, traditional villages and the wider Morocco we
                know through years of travelling, guiding and working locally.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* OUR STORY */}
      <section className="bg-white py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid gap-8 lg:grid-cols-12">

            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-[2rem] lg:col-span-7">

              <img
                src="/images/home/berber-villages-trek-morocco.jpg"
                alt="Mountain landscape in the High Atlas"
                className="h-[620px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 sm:bottom-10 sm:left-10">

                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/55">
                  Our Home
                </p>

                <p className="mt-3 max-w-lg text-2xl font-medium leading-tight text-white sm:text-3xl">
                  The mountains are not simply where we work.
                  <span className="text-white/55">
                    {" "}They are part of who we are.
                  </span>
                </p>

              </div>

            </div>


            {/* STORY */}
            <div className="flex flex-col justify-center rounded-[2rem] bg-[#f7f5f0] p-8 sm:p-12 lg:col-span-5 lg:p-14">

              <div className="flex items-center gap-4">

                <span className="h-px w-10 bg-[#0B1220]/25" />

                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0B1220]/40">
                  Our Story
                </p>

              </div>

              <h2 className="mt-6 text-3xl font-medium leading-tight sm:text-4xl">
                Built around the way we believe Morocco should be experienced.
              </h2>

              <div className="mt-7 space-y-5 text-sm leading-7 text-[#0B1220]/55 sm:text-base">

                <p>
                  We started with a simple idea: the best journeys are not
                  necessarily the ones that follow the busiest routes.
                </p>

                <p>
                  They are the ones that take you further into the landscape,
                  introduce you to local communities and give you time to
                  experience a place rather than simply pass through it.
                </p>

                <p>
                  Today, our team brings together local knowledge, outdoor
                  experience and careful logistics to create journeys that feel
                  personal from beginning to end.
                </p>

              </div>

              <Link
                href="/contact"
                className="mt-9 inline-flex w-fit rounded-full bg-[#0B1220] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#172238]"
              >
                Talk to Our Team
                <span className="ml-3">
                  →
                </span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* WHAT WE DO */}
      <section className="bg-[#0B1220] py-24 text-white sm:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="max-w-3xl">

            <div className="flex items-center gap-4">

              <span className="h-px w-10 bg-white/40" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/45">
                What We Do
              </p>

            </div>

            <h2 className="mt-6 text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Adventure with
              <span className="block text-white/40">
                purpose and personality.
              </span>
            </h2>

          </div>


          <div className="mt-16 grid gap-0 border-t border-white/10 md:grid-cols-2 lg:grid-cols-4">

            {/* 01 */}
            <div className="border-b border-white/10 py-10 md:border-r md:pr-10 lg:border-b-0">

              <p className="text-xs font-semibold tracking-[0.2em] text-white/30">
                01
              </p>

              <h3 className="mt-7 text-xl font-medium">
                Trekking
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/45">
                From village walks and valley routes to high-altitude
                adventures and Mount Toubkal.
              </p>

            </div>


            {/* 02 */}
            <div className="border-b border-white/10 py-10 md:pl-10 lg:border-b-0 lg:border-r lg:pr-10">

              <p className="text-xs font-semibold tracking-[0.2em] text-white/30">
                02
              </p>

              <h3 className="mt-7 text-xl font-medium">
                Mountain Biking
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/45">
                Carefully selected routes through mountain valleys, villages,
                passes and remote landscapes.
              </p>

            </div>


            {/* 03 */}
            <div className="border-b border-white/10 py-10 md:border-r md:pr-10 lg:border-b-0 lg:pl-10">

              <p className="text-xs font-semibold tracking-[0.2em] text-white/30">
                03
              </p>

              <h3 className="mt-7 text-xl font-medium">
                E-MTB Adventures
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/45">
                Explore further with premium e-MTBs and routes designed around
                the experience you want.
              </p>

            </div>


            {/* 04 */}
            <div className="py-10 md:pl-10">

              <p className="text-xs font-semibold tracking-[0.2em] text-white/30">
                04
              </p>

              <h3 className="mt-7 text-xl font-medium">
                Custom Journeys
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/45">
                Private itineraries combining adventure, culture, landscapes
                and the places you want to discover.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* OUR VALUES */}
      <section className="bg-[#f7f5f0] py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-12">

            <div className="lg:col-span-5">

              <div className="flex items-center gap-4">

                <span className="h-px w-10 bg-[#0B1220]/30" />

                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0B1220]/45">
                  Our Values
                </p>

              </div>

              <h2 className="mt-6 text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
                The way we
                <span className="block text-[#0B1220]/40">
                  approach every journey.
                </span>
              </h2>

              <p className="mt-7 max-w-md text-base leading-8 text-[#0B1220]/55">
                Good guiding is about much more than knowing the route. It is
                about understanding people, reading the landscape and making
                the experience feel effortless.
              </p>

            </div>


            <div className="lg:col-span-6 lg:col-start-7">

              <div className="divide-y divide-[#0B1220]/10 border-y border-[#0B1220]/10">

                <div className="py-7 sm:py-8">

                  <h3 className="text-xl font-medium">
                    Local knowledge
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#0B1220]/50">
                    We know the landscapes, villages, routes and practical
                    realities that make a Moroccan adventure work.
                  </p>

                </div>


                <div className="py-7 sm:py-8">

                  <h3 className="text-xl font-medium">
                    Personal service
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#0B1220]/50">
                    Your journey starts with a conversation. We listen first,
                    then build the experience around your group.
                  </p>

                </div>


                <div className="py-7 sm:py-8">

                  <h3 className="text-xl font-medium">
                    Responsible travel
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#0B1220]/50">
                    We value local communities, local businesses and the
                    landscapes that make Morocco worth discovering.
                  </p>

                </div>


                <div className="py-7 sm:py-8">

                  <h3 className="text-xl font-medium">
                    Attention to detail
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#0B1220]/50">
                    From route planning and equipment to accommodation and
                    transfers, we take care of the details behind the journey.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* MOROCCO SECTION */}
      <section className="bg-white py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="relative overflow-hidden rounded-[2rem]">

            <img
              src="/images/home/berber-villages-trek-morocco.jpg"
              alt="High Atlas landscape in Morocco"
              className="h-[600px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />

            <div className="absolute inset-0 flex items-center">

              <div className="max-w-2xl px-8 sm:px-12 lg:px-16">

                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/55">
                  Why Morocco
                </p>

                <h2 className="mt-6 text-4xl font-medium leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                  One country.
                  <span className="block text-white/50">
                    Extraordinary variety.
                  </span>
                </h2>

                <p className="mt-7 text-base leading-8 text-white/65 sm:text-lg">
                  Snow-covered peaks, green valleys, red-earth villages,
                  ancient kasbahs, dramatic gorges and vast desert horizons.
                  Morocco brings remarkable contrasts together within a single
                  country.
                </p>

                <Link
                  href="/expeditions"
                  className="mt-9 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0B1220] transition hover:bg-white/90"
                >
                  Explore Our Expeditions
                  <span className="ml-3">
                    →
                  </span>
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="bg-[#0B1220] px-6 py-24 text-white sm:py-32">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/40">
            Meet Morocco
          </p>

          <h2 className="mt-6 text-4xl font-medium leading-[1.05] sm:text-5xl lg:text-6xl">
            Your journey starts
            <span className="block text-white/40">
              with a conversation.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
            Tell us what you would like to experience and let our local team
            start shaping your Moroccan adventure.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0B1220] transition hover:bg-white/90"
          >
            Talk to Our Team
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