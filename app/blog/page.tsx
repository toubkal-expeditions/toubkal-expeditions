import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#0B1220]">

      {/* HEADER */}
      <Header />


      {/* HERO */}
      <section className="bg-[#0B1220] px-4 pb-4 pt-8 sm:px-6 lg:px-8 lg:pb-8 lg:pt-12">

        <div className="relative min-h-[68vh] overflow-hidden rounded-[2rem]">

          <img
            src="/images/home/berber-villages-trek-morocco.jpg"
            alt="Moroccan High Atlas mountains and villages"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

          <div className="relative z-10 flex min-h-[68vh] items-end">

            <div className="mx-auto w-full max-w-7xl px-6 pb-14 lg:px-12 lg:pb-20">

              <div className="max-w-4xl">

                <div className="flex items-center gap-4">

                  <span className="h-px w-10 bg-white/60" />

                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/65">
                    Journal • Morocco
                  </p>

                </div>

                <h1 className="mt-6 text-5xl font-medium leading-[0.95] tracking-[-0.03em] text-white sm:text-6xl lg:text-[88px]">
                  Stories from
                  <span className="block text-white/55">
                    Morocco.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                  Travel inspiration, mountain stories, cycling routes and
                  local insights from the landscapes we know and love.
                </p>

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
                  From the Journal
                </p>

              </div>

              <h2 className="mt-6 text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Discover Morocco
                <span className="block text-[#0B1220]/40">
                  beyond the itinerary.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-4 lg:col-start-9">

              <p className="text-base leading-8 text-[#0B1220]/55 sm:text-lg">
                Our journal brings together practical travel advice,
                mountain knowledge, route inspiration and stories from the
                people and places that make Morocco extraordinary.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* FEATURED ARTICLE */}
      <section className="bg-white py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="mb-12 flex items-end justify-between">

            <div>

              <div className="flex items-center gap-4">

                <span className="h-px w-10 bg-[#0B1220]/25" />

                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0B1220]/45">
                  Featured Story
                </p>

              </div>

            </div>

          </div>


          <Link
            href="/blog/exploring-the-high-atlas"
            className="group grid overflow-hidden rounded-[2rem] bg-[#0B1220] lg:grid-cols-2"
          >

            {/* Image */}
            <div className="relative min-h-[420px] overflow-hidden lg:min-h-[600px]">

              <img
                src="/images/home/berber-villages-trek-morocco.jpg"
                alt="High Atlas mountains and Berber villages"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20" />

            </div>


            {/* Content */}
            <div className="flex items-center p-8 text-white sm:p-12 lg:p-16">

              <div className="max-w-xl">

                <div className="flex items-center gap-4">

                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/45">
                    High Atlas
                  </span>

                  <span className="h-px w-8 bg-white/20" />

                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                    Travel Guide
                  </span>

                </div>

                <h2 className="mt-6 text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
                  Exploring the High Atlas:
                  <span className="block text-white/50">
                    A Journey Through Morocco's Mountains
                  </span>
                </h2>

                <p className="mt-6 text-sm leading-7 text-white/55 sm:text-base">
                  Discover the landscapes, villages, mountain passes and
                  cultural experiences that make the High Atlas one of
                  Morocco's most remarkable regions to explore.
                </p>

                <div className="mt-8 flex items-center text-sm font-semibold">

                  Read the story

                  <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </div>

              </div>

            </div>

          </Link>

        </div>

      </section>


      {/* CATEGORIES */}
      <section className="bg-[#f7f5f0] py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="flex flex-wrap gap-3">

            <button
              type="button"
              className="rounded-full bg-[#0B1220] px-5 py-3 text-xs font-semibold text-white"
            >
              All Stories
            </button>

            <button
              type="button"
              className="rounded-full border border-[#0B1220]/15 px-5 py-3 text-xs font-medium text-[#0B1220]/60 transition hover:border-[#0B1220]/40 hover:text-[#0B1220]"
            >
              Trekking
            </button>

            <button
              type="button"
              className="rounded-full border border-[#0B1220]/15 px-5 py-3 text-xs font-medium text-[#0B1220]/60 transition hover:border-[#0B1220]/40 hover:text-[#0B1220]"
            >
              Mountain Biking
            </button>

            <button
              type="button"
              className="rounded-full border border-[#0B1220]/15 px-5 py-3 text-xs font-medium text-[#0B1220]/60 transition hover:border-[#0B1220]/40 hover:text-[#0B1220]"
            >
              Travel Guide
            </button>

            <button
              type="button"
              className="rounded-full border border-[#0B1220]/15 px-5 py-3 text-xs font-medium text-[#0B1220]/60 transition hover:border-[#0B1220]/40 hover:text-[#0B1220]"
            >
              Morocco
            </button>

          </div>

        </div>

      </section>


      {/* ARTICLE GRID */}
      <section className="bg-white py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <div className="flex items-center gap-4">

                <span className="h-px w-10 bg-[#0B1220]/25" />

                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0B1220]/45">
                  Latest Stories
                </p>

              </div>

              <h2 className="mt-6 text-4xl font-medium tracking-tight sm:text-5xl">
                From the journal
              </h2>

            </div>

            <p className="max-w-md text-sm leading-7 text-[#0B1220]/45">
              Practical knowledge and inspiration for your next Moroccan
              adventure.
            </p>

          </div>


          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">


            {/* ARTICLE 1 */}
            <Link
              href="/blog/best-time-to-trek-toubkal"
              className="group"
            >

              <div className="relative overflow-hidden rounded-[1.5rem]">

                <img
                  src="/images/home/berber-villages-trek-morocco.jpg"
                  alt="Toubkal trekking in Morocco"
                  className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="mt-6">

                <div className="flex items-center gap-3">

                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#0B1220]/40">
                    Trekking
                  </span>

                  <span className="h-px w-5 bg-[#0B1220]/15" />

                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#0B1220]/35">
                    Guide
                  </span>

                </div>

                <h3 className="mt-4 text-2xl font-medium leading-tight">
                  The Best Time to Trek Mount Toubkal
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#0B1220]/50">
                  A practical guide to seasons, conditions and what to expect
                  when planning a Toubkal trek.
                </p>

                <span className="mt-5 inline-flex text-sm font-semibold">
                  Read article
                  <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>

              </div>

            </Link>


            {/* ARTICLE 2 */}
            <Link
              href="/blog/mountain-biking-high-atlas"
              className="group"
            >

              <div className="relative overflow-hidden rounded-[1.5rem]">

                <img
                  src="/images/home/berber-villages-trek-morocco.jpg"
                  alt="Mountain biking in the High Atlas"
                  className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="mt-6">

                <div className="flex items-center gap-3">

                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#0B1220]/40">
                    Mountain Bike
                  </span>

                  <span className="h-px w-5 bg-[#0B1220]/15" />

                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#0B1220]/35">
                    Cycling
                  </span>

                </div>

                <h3 className="mt-4 text-2xl font-medium leading-tight">
                  Mountain Biking in Morocco's High Atlas
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#0B1220]/50">
                  What makes the Atlas such a rewarding destination for
                  mountain bikers and adventure cyclists.
                </p>

                <span className="mt-5 inline-flex text-sm font-semibold">
                  Read article
                  <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>

              </div>

            </Link>


            {/* ARTICLE 3 */}
            <Link
              href="/blog/atlas-to-sahara"
              className="group"
            >

              <div className="relative overflow-hidden rounded-[1.5rem]">

                <img
                  src="/images/home/berber-villages-trek-morocco.jpg"
                  alt="Atlas to Sahara journey"
                  className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="mt-6">

                <div className="flex items-center gap-3">

                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#0B1220]/40">
                    Morocco
                  </span>

                  <span className="h-px w-5 bg-[#0B1220]/15" />

                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#0B1220]/35">
                    Journey
                  </span>

                </div>

                <h3 className="mt-4 text-2xl font-medium leading-tight">
                  From the Atlas Mountains to the Sahara
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#0B1220]/50">
                  A journey across changing landscapes, from high mountain
                  valleys to the vast horizons of southern Morocco.
                </p>

                <span className="mt-5 inline-flex text-sm font-semibold">
                  Read article
                  <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>

              </div>

            </Link>


            {/* ARTICLE 4 */}
            <Link
              href="/blog/berber-villages-morocco"
              className="group"
            >

              <div className="relative overflow-hidden rounded-[1.5rem]">

                <img
                  src="/images/home/berber-villages-trek-morocco.jpg"
                  alt="Berber villages in Morocco"
                  className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="mt-6">

                <div className="flex items-center gap-3">

                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#0B1220]/40">
                    Culture
                  </span>

                  <span className="h-px w-5 bg-[#0B1220]/15" />

                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#0B1220]/35">
                    Morocco
                  </span>

                </div>

                <h3 className="mt-4 text-2xl font-medium leading-tight">
                  Discovering Morocco's Mountain Villages
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#0B1220]/50">
                  Discover the communities, traditions and landscapes found
                  throughout the High Atlas valleys.
                </p>

                <span className="mt-5 inline-flex text-sm font-semibold">
                  Read article
                  <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>

              </div>

            </Link>


            {/* ARTICLE 5 */}
            <Link
              href="/blog/what-to-pack-morocco-adventure"
              className="group"
            >

              <div className="relative overflow-hidden rounded-[1.5rem]">

                <img
                  src="/images/home/berber-villages-trek-morocco.jpg"
                  alt="Preparing for an adventure in Morocco"
                  className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="mt-6">

                <div className="flex items-center gap-3">

                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#0B1220]/40">
                    Travel Guide
                  </span>

                  <span className="h-px w-5 bg-[#0B1220]/15" />

                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#0B1220]/35">
                    Planning
                  </span>

                </div>

                <h3 className="mt-4 text-2xl font-medium leading-tight">
                  What to Pack for a Morocco Adventure
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#0B1220]/50">
                  Essential clothing and equipment for trekking, cycling and
                  exploring Morocco's varied landscapes.
                </p>

                <span className="mt-5 inline-flex text-sm font-semibold">
                  Read article
                  <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>

              </div>

            </Link>


            {/* ARTICLE 6 */}
            <Link
              href="/blog/visiting-morocco-local-perspective"
              className="group"
            >

              <div className="relative overflow-hidden rounded-[1.5rem]">

                <img
                  src="/images/home/berber-villages-trek-morocco.jpg"
                  alt="Moroccan landscape and local life"
                  className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="mt-6">

                <div className="flex items-center gap-3">

                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#0B1220]/40">
                    Morocco
                  </span>

                  <span className="h-px w-5 bg-[#0B1220]/15" />

                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#0B1220]/35">
                    Travel
                  </span>

                </div>

                <h3 className="mt-4 text-2xl font-medium leading-tight">
                  Seeing Morocco Through a Local Perspective
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#0B1220]/50">
                  Why travelling with people who know the mountains and
                  communities can change the way you experience Morocco.
                </p>

                <span className="mt-5 inline-flex text-sm font-semibold">
                  Read article
                  <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>

              </div>

            </Link>

          </div>

        </div>

      </section>


      {/* NEWSLETTER / TRAVEL INSPIRATION */}
      <section className="bg-[#0B1220] py-24 text-white sm:py-32">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/40">
            Stay Inspired
          </p>

          <h2 className="mt-6 text-4xl font-medium leading-[1.05] sm:text-5xl lg:text-6xl">
            Keep Morocco
            <span className="block text-white/40">
              on your horizon.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
            Follow our latest stories, mountain routes and travel inspiration
            as you plan your next journey through Morocco.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0B1220] transition hover:bg-white/90"
          >
            Start Planning
            <span className="ml-3">
              →
            </span>
          </Link>

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="bg-[#f7f5f0] px-6 py-24 sm:py-32">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0B1220]/40">
            Your Morocco Adventure
          </p>

          <h2 className="mt-6 text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Turn inspiration
            <span className="block text-[#0B1220]/40">
              into a journey.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#0B1220]/55 sm:text-lg">
            Tell us what you have in mind and our local team can help turn
            your ideas into a private Moroccan adventure.
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