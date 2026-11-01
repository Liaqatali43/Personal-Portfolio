import React from "react";

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </svg>
  );
}

function StoreMockup() {
  return (
    <div className="h-[350px] bg-[#e8e0d2] text-[#1d211d]">
      <div className="flex h-12 items-center justify-between border-b border-black/10 px-5">
        <strong className="font-bold tracking-widest">NORDA</strong>

        <div className="hidden gap-5 text-[10px] sm:flex">
          <span>New in</span>
          <span>Shop</span>
          <span>Journal</span>
        </div>

        <span className="text-[10px]">Bag (0)</span>
      </div>

      <div className="grid h-[calc(100%-48px)] grid-cols-[42%_58%]">
        <div className="flex flex-col justify-center pl-5 sm:pl-8">
          <span className="text-[8px] uppercase tracking-widest text-[#756e64]">
            New collection / 26
          </span>

          <h3 className="mt-4 font-['Space_Grotesk'] text-2xl font-semibold leading-[1.05] sm:text-4xl">
            Form meets
            <br />
            function.
          </h3>

          <span className="mt-5 text-[9px]">Shop the collection →</span>
        </div>

        <div className="relative flex items-center justify-center overflow-hidden">
          <div className="absolute h-40 w-40 rounded-full bg-[#c5b49c] blur-2xl" />

          <div className="relative flex h-48 w-24 items-center justify-center rounded-[35%_35%_20%_20%] border border-[#a99b84] bg-gradient-to-r from-[#d1c2aa] via-[#f1e8d9] to-[#b6a58d] shadow-2xl">
            <span className="text-[9px] font-bold tracking-widest">NORDA</span>
          </div>

          <div className="absolute bottom-8 right-5 h-16 w-16 rounded-full border border-[#b5a68f]" />
          <div className="absolute left-3 top-8 h-12 w-12 rounded-full bg-[#d3c5ae]" />
        </div>
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="flex h-[190px] bg-[#f7f8fa] text-[#222936]">
      <aside className="flex w-12 flex-col items-center gap-5 border-r border-gray-200 bg-white py-4">
        <div className="grid h-6 w-6 place-items-center rounded bg-[#38bdf8] text-xs text-white">
          ◈
        </div>
        {[1, 2, 3, 4].map((item) => (
          <span key={item} className="h-2 w-2 rounded-sm bg-gray-300" />
        ))}
      </aside>

      <div className="flex-1 p-3 sm:p-5">
        <div className="flex items-center justify-between">
          <strong className="text-xs sm:text-sm">Overview</strong>
          <span className="text-[8px] text-gray-400">Last 30 days</span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="border border-gray-100 bg-white p-2">
            <span className="text-[8px] text-gray-400">Orders</span>
            <strong className="mt-1 block text-sm sm:text-xl">1,284</strong>
            <span className="text-[8px] text-green-600">+12.4%</span>
          </div>

          <div className="border border-gray-100 bg-white p-2">
            <span className="text-[8px] text-gray-400">Conversion</span>
            <strong className="mt-1 block text-sm sm:text-xl">4.82%</strong>
            <span className="text-[8px] text-green-600">+0.8%</span>
          </div>
        </div>

        <div className="mt-3 flex h-12 items-end gap-1 border-b border-gray-200 px-1">
          {[35, 50, 42, 68, 60, 80, 70, 90, 78, 100].map((height, index) => (
            <span
              key={index}
              style={{ height: `${height}%` }}
              className="flex-1 rounded-t-sm bg-[#38bdf8]/70"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function BrowserFrame({ children, url }) {
  return (
    <div className="overflow-hidden border border-white/15 bg-[#10141b] shadow-2xl">
      <div className="grid h-[34px] grid-cols-[1fr_2fr_1fr] items-center border-b border-white/10 bg-[#151a23] px-3">
        <div className="flex gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[#95616a]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#8c8256]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#4b5260]" />
        </div>

        <span className="truncate text-center text-[7px] text-[#687181]">
          {url}
        </span>

        <span className="justify-self-end h-1.5 w-1.5 rounded-full border border-gray-500" />
      </div>

      {children}
    </div>
  );
}

export default function Hero() {
  const technologies = [
    "React.js",
    "Next.js",
    "JavaScript",
    "Tailwind CSS",
    "Shopify Liquid",
  ];

  return (
    <section
      id="home"
      className="mx-auto grid min-h-[800px] w-full max-w-[1240px] grid-cols-1 items-center gap-12 overflow-hidden px-6 pb-20 pt-36 md:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16"
    >
      {/* Left Content */}
      <div className="relative z-10">
        {/* Availability */}
        <div className="mb-7 flex items-center gap-3 font-['Space_Grotesk'] text-[11px] font-semibold uppercase tracking-[0.16em] text-[#a1a8b7]">
          <span className="relative h-2 w-2 rounded-full bg-[#95bf47] shadow-[0_0_0_5px_rgba(149,191,71,0.1)]">
            <span className="absolute -inset-[5px] animate-ping rounded-full border border-[#95bf47]/30" />
          </span>
          Available for freelance projects
        </div>

        {/* Heading */}
        <h1 className="max-w-[680px] font-['Space_Grotesk'] text-[clamp(48px,5.5vw,82px)] font-medium leading-[0.98] tracking-[-0.055em] text-[#f5f7fa]">
          Building Digital
          <br />
          Experiences <span className="text-[#38bdf8]">That Work.</span>
        </h1>

        {/* Description */}
        <p className="mt-7 max-w-[610px] text-[15px] leading-[1.8] text-[#a1a8b7] sm:text-[17px]">
          I&apos;m a{" "}
          <strong className="font-medium text-[#38bdf8]">
            Frontend Developer
          </strong>{" "}
          and{" "}
          <strong className="font-medium text-[#95bf47]">
            Shopify Theme Developer
          </strong>{" "}
          focused on building responsive websites, custom storefronts, and
          intuitive digital experiences.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex min-h-[52px] items-center justify-center gap-3 bg-[#f5f7fa] px-6 text-[13px] font-semibold text-[#0b0d12] transition hover:-translate-y-1 hover:bg-[#38bdf8]"
          >
            View My Projects
            <ArrowIcon />
          </a>

          <a
            href="#contact"
            className="inline-flex min-h-[52px] items-center justify-center border border-white/20 px-6 text-[13px] font-semibold text-[#f5f7fa] transition hover:-translate-y-1 hover:border-white hover:bg-white/5"
          >
            Let&apos;s Work Together
          </a>
        </div>

        {/* Technologies */}
        <div className="mt-11 flex flex-wrap items-center gap-x-3 gap-y-3 font-['Space_Grotesk'] text-[11px] tracking-wide text-[#6f7788]">
          {technologies.map((tech, index) => (
            <React.Fragment key={tech}>
              <span>{tech}</span>
              {index !== technologies.length - 1 && (
                <span className="h-[3px] w-[3px] rounded-full bg-[#3d4554]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Right Visual */}
      <div className="relative mx-auto min-h-[480px] w-full max-w-[600px] lg:min-h-[570px] lg:translate-x-8">
        {/* Background Glow */}
        <div className="absolute left-[20%] top-[10%] h-[65%] w-[65%] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.15),transparent_68%)] blur-3xl" />

        {/* Main Shopify Preview */}
        <div className="absolute left-0 top-8 z-10 w-[88%] -rotate-1">
          <BrowserFrame url="norda-demo.myshopify.com">
            <StoreMockup />
          </BrowserFrame>
        </div>

        {/* Dashboard Preview */}
        <div className="absolute -bottom-1 right-0 z-20 w-[62%] rotate-[2.5deg]">
          <BrowserFrame url="store.admin/overview">
            <DashboardMockup />
          </BrowserFrame>
        </div>

        {/* Floating Code Card */}
        <div className="absolute right-0 top-16 z-30 w-[205px] rotate-2 border border-[#8b5cf6]/30 bg-[#0e1118]/95 p-4 font-mono text-[9px] leading-[1.9] text-[#aab3c3] shadow-2xl max-sm:right-0 max-sm:top-5 max-sm:w-[155px]">
          <div>
            <span className="text-[#fb7185]">const</span> cart ={" "}
            <span className="text-[#38bdf8]">useCart</span>();
          </div>
          <div>
            <span className="text-[#c084fc]">return</span> (
          </div>
          <div className="pl-3">
            &lt;<span className="text-[#a3e635]">ProductGrid</span>
          </div>
          <div className="pl-6">items=&#123;products&#125;</div>
          <div className="pl-3">/&gt;</div>
          <div>);</div>
        </div>

        {/* Bottom Badge */}
        <div className="absolute -bottom-8 left-0 z-30 flex items-center gap-3 border border-white/15 bg-[#0b0d12]/95 px-4 py-3 text-[9px] uppercase leading-relaxed tracking-widest text-[#38bdf8] shadow-xl sm:-left-6">
          <span className="text-xl">✦</span>
          <span className="text-[#6f7788]">
            Built with care
            <br />
            <strong className="font-medium text-[#f5f7fa]">
              and clean code
            </strong>
          </span>
        </div>
      </div>
    </section>
  );
}
