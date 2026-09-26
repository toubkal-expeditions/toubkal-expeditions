import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#0B1220]">
      
      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        
        {/* Hero Image */}
        <img
          src="/images/home/berber-villages-trek-morocco.jpg"
          alt="Trekking through the Berber villages of Morocco"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-screen items-center">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <div className="max-w-4xl">

              <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-white/80">
                Morocco • High Atlas • Sahara
              </p>

              <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
                Discover Morocco
                <span className="block text-white/75">
                  beyond the ordinary.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
                Private trekking, mountain biking and adventure journeys
                through the landscapes, mountains and villages of Morocco.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <a
                  href="#experiences"
                  className="rounded-full bg-white px-7 py-4 text-center text-sm font-semibold text-[#0B1220] transition hover:bg-white/90"
                >
                  Explore Our Tours
                </a>

                <a
                  href="/contact"
                  className="rounded-full border border-white/60 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-[#0B1220]"
                >
                  Plan Your Adventure
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom Label */}
        <div className="absolute bottom-8 left-6 z-10 text-xs uppercase tracking-[0.3em] text-white/70 lg:left-10">
          Since 2008 • Morocco
        </div>

      </section>

            {/* ABOUT / INTRODUCTION */}
      <section className="bg-[#f7f5f0] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">

            {/* Section Label */}
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0B1220]/50">
                About Toubkal Expeditions
              </p>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-7 lg:col-start-6">

              <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#0B1220] sm:text-5xl">
                Morocco through the eyes of people who know it best.
              </h2>

              <div className="mt-8 space-y-6 text-base leading-8 text-[#0B1220]/65 sm:text-lg">
                <p>
                  Toubkal Expeditions is a locally based Moroccan adventure
                  company creating private and small-group journeys across
                  the High Atlas, Sahara and beyond.
                </p>

                <p>
                  From high mountain trekking and Toubkal expeditions to
                  mountain biking, e-MTB adventures and Atlas-to-desert
                  journeys, we combine carefully designed routes with genuine
                  local knowledge and personal service.
                </p>

                <p>
                  Our goal is simple: to take you beyond the usual tourist
                  experience and introduce you to the landscapes, villages,
                  people and cultures that make Morocco so unique.
                </p>
              </div>

              {/* Small Details */}
              <div className="mt-10 grid gap-6 border-t border-[#0B1220]/10 pt-8 sm:grid-cols-3">

                <div>
                  <p className="text-2xl font-semibold text-[#0B1220]">
                    Local
                  </p>
                  <p className="mt-2 text-sm text-[#0B1220]/50">
                    Moroccan guides & expertise
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-semibold text-[#0B1220]">
                    Private
                  </p>
                  <p className="mt-2 text-sm text-[#0B1220]/50">
                    Journeys designed around you
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-semibold text-[#0B1220]">
                    Personal
                  </p>
                  <p className="mt-2 text-sm text-[#0B1220]/50">
                    From first enquiry to finish
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

            {/* OUR EXPERIENCES */}
      <section id="experiences" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          {/* Section Header */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0B1220]/45">
                Our Experiences
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-[#0B1220] sm:text-5xl lg:text-6xl">
                Choose your way
                <span className="block text-[#0B1220]/45">
                  to experience Morocco.
                </span>
              </h2>
            </div>

            <div className="max-w-md">
              <p className="text-base leading-7 text-[#0B1220]/60">
                From mountain trails and high-altitude trekking to remote
                desert landscapes, explore our collection of carefully designed
                Moroccan adventures.
              </p>
            </div>

          </div>

          {/* Experience Cards */}
          <div className="mt-16 grid gap-6 lg:grid-cols-3">

            {/* TREKKING */}
            <a
              href="/expeditions"
              className="group relative block min-h-[560px] overflow-hidden rounded-[2rem] bg-[#0B1220]"
            >
              <img
                src="/images/home/berber-villages-trek-morocco.jpg"
                alt="Trekking in the Moroccan High Atlas"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5" />

              <div className="absolute left-7 top-7 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-sm text-white">
                01
              </div>

              <div className="relative flex min-h-[560px] flex-col justify-end p-8 sm:p-10">

                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/60">
                  On Foot
                </p>

                <h3 className="mt-3 text-4xl font-semibold tracking-tight text-white">
                  Trekking
                </h3>

                <div className="mt-5 h-px w-10 bg-white/40 transition-all duration-500 group-hover:w-16" />

                <p className="mt-5 max-w-sm text-sm leading-7 text-white/75">
                  High Atlas peaks, remote Berber villages and unforgettable
                  mountain journeys, including Mount Toubkal.
                </p>

                <div className="mt-7 flex items-center text-sm font-semibold text-white">
                  Explore expeditions
                  <span className="ml-3 text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

              </div>
            </a>

            {/* MOUNTAIN BIKE */}
            <a
              href="/expeditions"
              className="group relative block min-h-[560px] overflow-hidden rounded-[2rem] bg-[#0B1220]"
            >
              <img
                src="/images/home/berber-villages-trek-morocco.jpg"
                alt="Mountain biking in the Moroccan Atlas Mountains"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5" />

              <div className="absolute left-7 top-7 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-sm text-white">
                02
              </div>

              <div className="relative flex min-h-[560px] flex-col justify-end p-8 sm:p-10">

                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/60">
                  On Two Wheels
                </p>

                <h3 className="mt-3 text-4xl font-semibold tracking-tight text-white">
                  Mountain Bike
                </h3>

                <div className="mt-5 h-px w-10 bg-white/40 transition-all duration-500 group-hover:w-16" />

                <p className="mt-5 max-w-sm text-sm leading-7 text-white/75">
                  Ride beyond the usual routes through mountain trails, passes
                  and villages, with MTB and e-MTB adventures for different
                  levels of experience.
                </p>

                <div className="mt-7 flex items-center text-sm font-semibold text-white">
                  Explore expeditions
                  <span className="ml-3 text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

              </div>
            </a>

            {/* ATLAS TO DESERT */}
            <a
              href="/expeditions"
              className="group relative block min-h-[560px] overflow-hidden rounded-[2rem] bg-[#0B1220]"
            >
              <img
                src="/images/home/berber-villages-trek-morocco.jpg"
                alt="Adventure journey from the Atlas Mountains to the Moroccan desert"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5" />

              <div className="absolute left-7 top-7 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-sm text-white">
                03
              </div>

              <div className="relative flex min-h-[560px] flex-col justify-end p-8 sm:p-10">

                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/60">
                  Across Morocco
                </p>

                <h3 className="mt-3 text-4xl font-semibold tracking-tight text-white">
                  Atlas to Desert
                </h3>

                <div className="mt-5 h-px w-10 bg-white/40 transition-all duration-500 group-hover:w-16" />

                <p className="mt-5 max-w-sm text-sm leading-7 text-white/75">
                  Cross Morocco's changing landscapes from the High Atlas
                  towards the Sahara, through valleys, kasbahs and ancient
                  desert routes.
                </p>

                <div className="mt-7 flex items-center text-sm font-semibold text-white">
                  Explore expeditions
                  <span className="ml-3 text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

              </div>
            </a>

          </div>

          {/* Bottom Link */}
          <div className="mt-10 flex justify-end">
            <a
              href="/expeditions"
              className="group inline-flex items-center rounded-full border border-[#0B1220]/15 px-6 py-3 text-sm font-semibold text-[#0B1220] transition hover:border-[#0B1220] hover:bg-[#0B1220] hover:text-white"
            >
              View all expeditions
              <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

        </div>
      </section>

            {/* WHY TOUBKAL EXPEDITIONS */}
      <section className="bg-[#0B1220] py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          {/* Introduction */}
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
                Why Toubkal Expeditions
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Local knowledge.
                <span className="block text-white/45">
                  Personal service.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-base leading-8 text-white/55 sm:text-lg">
                We believe the best way to discover Morocco is with people who
                know its mountains, communities and landscapes from the inside.
              </p>
            </div>

          </div>

          {/* Features */}
          <div className="mt-20 grid border-t border-white/10 md:grid-cols-2 lg:grid-cols-4">

            {/* 01 */}
            <div className="border-b border-white/10 py-10 md:border-r md:pr-8 lg:border-b-0 lg:border-r lg:pr-10">
              <span className="text-xs font-medium tracking-[0.2em] text-white/30">
                01
              </span>

              <h3 className="mt-8 text-xl font-semibold">
                Local Expertise
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/50">
                Based in the High Atlas, we know the mountains, villages,
                trails and routes that make Morocco truly special.
              </p>
            </div>

            {/* 02 */}
            <div className="border-b border-white/10 py-10 md:pl-8 lg:border-b-0 lg:border-r lg:px-10">
              <span className="text-xs font-medium tracking-[0.2em] text-white/30">
                02
              </span>

              <h3 className="mt-8 text-xl font-semibold">
                Designed Around You
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/50">
                Private and small-group journeys shaped around your dates,
                interests, experience and preferred pace.
              </p>
            </div>

            {/* 03 */}
            <div className="border-b border-white/10 py-10 md:border-b-0 md:border-r md:pr-8 lg:border-r lg:px-10">
              <span className="text-xs font-medium tracking-[0.2em] text-white/30">
                03
              </span>

              <h3 className="mt-8 text-xl font-semibold">
                Experienced Team
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/50">
                Experienced local guides, drivers and trusted partners working
                together to make every journey run smoothly.
              </p>
            </div>

            {/* 04 */}
            <div className="py-10 md:pl-8 lg:pl-10">
              <span className="text-xs font-medium tracking-[0.2em] text-white/30">
                04
              </span>

              <h3 className="mt-8 text-xl font-semibold">
                Beyond the Route
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/50">
                Adventure is only part of the journey. Discover Morocco's
                villages, food, traditions and landscapes along the way.
              </p>
            </div>

          </div>

          {/* Bottom Statement */}
          <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">

            <p className="max-w-2xl text-sm leading-7 text-white/40">
              From your first enquiry to the end of your journey, our team is
              here to make your experience personal, seamless and memorable.
            </p>

            <a
              href="/contact"
              className="group inline-flex shrink-0 items-center text-sm font-semibold text-white"
            >
              Start planning
              <span className="ml-3 text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

          </div>

        </div>
      </section>
            {/* FEATURED EXPEDITIONS */}
      <section className="bg-[#f7f5f0] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          {/* Section Header */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0B1220]/45">
                Featured Expeditions
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-[#0B1220] sm:text-5xl lg:text-6xl">
                Journeys made for
                <span className="block text-[#0B1220]/40">
                  discovery.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[#0B1220]/60 sm:text-lg">
                Explore some of our signature journeys across Morocco,
                combining adventure, remarkable landscapes and authentic
                local experiences.
              </p>
            </div>

            <a
              href="/expeditions"
              className="group inline-flex shrink-0 items-center text-sm font-semibold text-[#0B1220]"
            >
              View all expeditions
              <span className="ml-3 text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

          </div>

          {/* Expedition Cards */}
          <div className="mt-16 grid gap-6 lg:grid-cols-3">

            {/* TOUBKAL */}
            <a
              href="/expeditions/toubkal-berber-villages"
              className="group relative min-h-[580px] overflow-hidden rounded-[2rem] bg-[#0B1220]"
            >
              <img
                src="/images/home/berber-villages-trek-morocco.jpg"
                alt="Toubkal trekking and Berber villages in Morocco"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/5" />

              <div className="absolute left-7 top-7 rounded-full border border-white/25 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70">
                Trekking
              </div>

              <div className="relative flex min-h-[580px] flex-col justify-end p-8 sm:p-10">

                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
                  8 Days
                </p>

                <h3 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-white">
                  Toubkal &<br />
                  Berber Villages
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/70">
                  An immersive High Atlas journey combining Mount Toubkal,
                  remote mountain trails and traditional Berber villages.
                </p>

                <div className="mt-7 flex items-center text-sm font-semibold text-white">
                  Discover expedition
                  <span className="ml-3 text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

              </div>
            </a>

            {/* MOUNTAIN BIKE */}
            <a
              href="/expeditions/high-atlas-mountain-biking"
              className="group relative min-h-[580px] overflow-hidden rounded-[2rem] bg-[#0B1220]"
            >
              <img
                src="/images/home/berber-villages-trek-morocco.jpg"
                alt="Mountain biking through the High Atlas Mountains"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/5" />

              <div className="absolute left-7 top-7 rounded-full border border-white/25 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70">
                Mountain Bike
              </div>

              <div className="relative flex min-h-[580px] flex-col justify-end p-8 sm:p-10">

                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
                  8 Days
                </p>

                <h3 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-white">
                  High Atlas<br />
                  Mountain Biking
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/70">
                  Ride deep into the High Atlas through mountain passes,
                  valleys and remote Berber communities on a multi-day
                  mountain bike adventure.
                </p>

                <div className="mt-7 flex items-center text-sm font-semibold text-white">
                  Discover expedition
                  <span className="ml-3 text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

              </div>
            </a>

            {/* SAHARA */}
            <a
              href="/expeditions/sahara-trekking"
              className="group relative min-h-[580px] overflow-hidden rounded-[2rem] bg-[#0B1220]"
            >
              <img
                src="/images/home/berber-villages-trek-morocco.jpg"
                alt="Sahara trekking expedition in Morocco"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/5" />

              <div className="absolute left-7 top-7 rounded-full border border-white/25 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70">
                Sahara
              </div>

              <div className="relative flex min-h-[580px] flex-col justify-end p-8 sm:p-10">

                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
                  8 Days
                </p>

                <h3 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-white">
                  Sahara Trekking<br />
                  Expedition
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/70">
                  Discover Morocco's desert landscapes on foot, travelling
                  through vast open spaces, remote trails and unforgettable
                  Saharan scenery.
                </p>

                <div className="mt-7 flex items-center text-sm font-semibold text-white">
                  Discover expedition
                  <span className="ml-3 text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

              </div>
            </a>

          </div>

          {/* All Expeditions */}
          <div className="mt-12 text-center">
            <a
              href="/expeditions"
              className="inline-flex items-center rounded-full bg-[#0B1220] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#0B1220]/90"
            >
              Explore all expeditions
              <span className="ml-3">
                →
              </span>
            </a>
          </div>

        </div>
      </section>

            {/* MOROCCO / OUR LANDSCAPES */}
      <section className="bg-[#0B1220] py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          {/* Section Introduction */}
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-7">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-white/40" />

                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/45">
                  Our Landscapes
                </p>
              </div>

              <h2 className="mt-6 text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                One country.
                <span className="block text-white/40">
                  Endless landscapes.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-base leading-8 text-white/55 sm:text-lg">
                From the high peaks of the Atlas Mountains to remote valleys
                and the vast Sahara, Morocco offers extraordinary landscapes
                within a single journey.
              </p>
            </div>

          </div>

          {/* Landscape Feature */}
          <div className="mt-16 relative overflow-hidden rounded-[2rem]">

            <img
              src="/images/home/berber-villages-trek-morocco.jpg"
              alt="Mountain landscape and Berber villages in Morocco"
              className="h-[620px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-14">

              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/55">
                High Atlas
              </p>

              <h3 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
                Mountains, villages & open trails
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                Travel through dramatic mountain scenery, traditional villages,
                green valleys and remote trails where everyday Moroccan life
                remains closely connected to the landscape.
              </p>

            </div>

          </div>

          {/* Landscape Highlights */}
          <div className="mt-6 grid gap-6 md:grid-cols-3">

            <div className="border-t border-white/10 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
                01
              </p>

              <h3 className="mt-4 text-xl font-medium">
                High Atlas
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/45">
                High mountain passes, valleys, peaks and traditional villages.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
                02
              </p>

              <h3 className="mt-4 text-xl font-medium">
                Southern Morocco
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/45">
                Kasbahs, valleys, dry landscapes and changing mountain scenery.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
                03
              </p>

              <h3 className="mt-4 text-xl font-medium">
                Sahara
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/45">
                Vast desert landscapes, remote routes and unforgettable
                Saharan horizons.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* HOW IT WORKS */}
      <section className="bg-[#f7f5f0] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          {/* Header */}
          <div className="max-w-3xl">

            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#0B1220]/30" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0B1220]/45">
                How It Works
              </p>
            </div>

            <h2 className="mt-6 text-4xl font-medium leading-[1.05] tracking-tight text-[#0B1220] sm:text-5xl lg:text-6xl">
              From first idea
              <span className="block text-[#0B1220]/40">
                to the mountains.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#0B1220]/55 sm:text-lg">
              Planning a private adventure in Morocco should feel simple.
              We take care of the details while you focus on the journey.
            </p>

          </div>

          {/* Steps */}
          <div className="mt-16 grid border-t border-[#0B1220]/10 md:grid-cols-3">

            {/* Step 1 */}
            <div className="border-b border-[#0B1220]/10 py-10 md:border-b-0 md:border-r md:pr-10">

              <span className="text-xs font-semibold tracking-[0.2em] text-[#0B1220]/30">
                01
              </span>

              <h3 className="mt-8 text-2xl font-medium text-[#0B1220]">
                Tell us what you want
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#0B1220]/50">
                Share your dates, group size, interests, experience and the
                kind of Moroccan adventure you have in mind.
              </p>

            </div>

            {/* Step 2 */}
            <div className="border-b border-[#0B1220]/10 py-10 md:border-b-0 md:border-r md:px-10">

              <span className="text-xs font-semibold tracking-[0.2em] text-[#0B1220]/30">
                02
              </span>

              <h3 className="mt-8 text-2xl font-medium text-[#0B1220]">
                We design your journey
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#0B1220]/50">
                Our local team creates a route and experience around your
                interests, preferred pace and available time.
              </p>

            </div>

            {/* Step 3 */}
            <div className="py-10 md:pl-10">

              <span className="text-xs font-semibold tracking-[0.2em] text-[#0B1220]/30">
                03
              </span>

              <h3 className="mt-8 text-2xl font-medium text-[#0B1220]">
                Enjoy Morocco
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#0B1220]/50">
                Once everything is confirmed, our team takes care of the
                logistics so you can concentrate on the adventure.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* GUEST EXPERIENCES */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          {/* Header */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-3xl">

              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#0B1220]/25" />

                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0B1220]/45">
                  Guest Experiences
                </p>
              </div>

              <h2 className="mt-6 text-4xl font-medium leading-[1.05] tracking-tight text-[#0B1220] sm:text-5xl lg:text-6xl">
                Morocco remembered
                <span className="block text-[#0B1220]/40">
                  long after the journey.
                </span>
              </h2>

            </div>

          </div>

          {/* Testimonials */}
          <div className="mt-16 grid gap-6 lg:grid-cols-3">

            {/* Testimonial 1 */}
            <div className="rounded-[2rem] bg-[#f7f5f0] p-8 sm:p-10">

              <p className="text-3xl leading-none text-[#0B1220]/20">
                “
              </p>

              <p className="mt-6 text-lg leading-8 text-[#0B1220]/75">
                An unforgettable way to experience Morocco. Everything was
                carefully organised and the local knowledge made the journey
                feel truly special.
              </p>

              <div className="mt-8 border-t border-[#0B1220]/10 pt-6">

                <p className="text-sm font-semibold text-[#0B1220]">
                  Guest Experience
                </p>

                <p className="mt-1 text-xs text-[#0B1220]/40">
                  Private Morocco Journey
                </p>

              </div>

            </div>

            {/* Testimonial 2 */}
            <div className="rounded-[2rem] bg-[#0B1220] p-8 text-white sm:p-10">

              <p className="text-3xl leading-none text-white/20">
                “
              </p>

              <p className="mt-6 text-lg leading-8 text-white/75">
                The route, landscapes and villages were incredible. Having a
                local team with us made the whole experience relaxed and
                seamless.
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">

                <p className="text-sm font-semibold text-white">
                  Guest Experience
                </p>

                <p className="mt-1 text-xs text-white/40">
                  High Atlas Adventure
                </p>

              </div>

            </div>

            {/* Testimonial 3 */}
            <div className="rounded-[2rem] bg-[#f7f5f0] p-8 sm:p-10">

              <p className="text-3xl leading-none text-[#0B1220]/20">
                “
              </p>

              <p className="mt-6 text-lg leading-8 text-[#0B1220]/75">
                From the mountains to the desert, every part of the journey
                felt personal and authentic. We discovered places we would
                never have found on our own.
              </p>

              <div className="mt-8 border-t border-[#0B1220]/10 pt-6">

                <p className="text-sm font-semibold text-[#0B1220]">
                  Guest Experience
                </p>

                <p className="mt-1 text-xs text-[#0B1220]/40">
                  Atlas to Desert Journey
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* FINAL CTA */}
      <section className="bg-[#0B1220] px-4 py-4 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-[2rem]">

          {/* Background Image */}
          <img
            src="/images/home/berber-villages-trek-morocco.jpg"
            alt="Moroccan mountain landscape"
            className="h-[560px] w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/20" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">

            <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">

              <div className="max-w-3xl">

                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/55">
                  Your Morocco Adventure
                </p>

                <h2 className="mt-6 text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">
                  Ready to discover
                  <span className="block text-white/55">
                    Morocco differently?
                  </span>
                </h2>

                <p className="mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
                  Tell us what you are looking for and let our local team
                  create a journey around you.
                </p>

                <div className="mt-9">

                  <a
                    href="/contact"
                    className="inline-flex items-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0B1220] transition hover:bg-white/90"
                  >
                    Start Planning
                    <span className="ml-3 text-base">
                      →
                    </span>
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <Footer />

    </main>
  );
}