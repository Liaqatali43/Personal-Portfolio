const projects = [
  {
    number: "01",
    type: "Shopify Development",
    title: "Storefront Customization",
    description:
      "A premium ecommerce experience with modular Liquid sections, flexible merchandising, and responsive product journeys.",
    tech: ["Shopify Liquid", "HTML", "CSS", "JavaScript"],
    theme: "shopify",
    preview: "store",
  },
  {
    number: "02",
    type: "Frontend Application",
    title: "Ecommerce Application",
    description:
      "A responsive shopping experience with intuitive filtering, persistent cart state, and a fast component-led interface.",
    tech: ["React", "Tailwind CSS", "Redux Toolkit"],
    theme: "commerce",
    preview: "commerce",
  },
  {
    number: "03",
    type: "API Integration",
    title: "Country Information App",
    description:
      "An exploratory data interface with fast search, region filters, and focused dynamic detail pages.",
    tech: ["React", "JavaScript", "REST API", "Tailwind CSS"],
    theme: "country",
    preview: "country",
  },
  {
    number: "04",
    type: "Personal Platform",
    title: "Developer Portfolio",
    description:
      "A considered personal site built around reusable components, modern typography, and purposeful interactions.",
    tech: ["Next.js", "Tailwind CSS", "JavaScript"],
    theme: "portfolio",
    preview: "portfolio",
  },
];

// Project preview designs
function ProjectPreview({ type }) {
  if (type === "store") {
    return (
      <div className="min-h-[280px] bg-[#f1eee7] p-5 text-[#25251f] sm:min-h-[350px] sm:p-7">
        <div className="flex items-center justify-between border-b border-[#d8d5ce] pb-4 text-[10px]">
          <strong className="text-lg tracking-tight">NORD.</strong>
          <span>SHOP &nbsp; ABOUT &nbsp; CART</span>
        </div>

        <div className="py-7 text-center">
          <span className="text-[9px] tracking-[0.2em] text-[#88857d]">
            NEW COLLECTION
          </span>
          <h4 className="mt-2 text-3xl font-medium tracking-tight sm:text-4xl">
            Designed for living.
          </h4>
          <p className="mt-2 text-[10px] text-[#77736b]">
            Discover our latest collection
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {["#c9c2b5", "#b7b4ad", "#d4c9b7"].map((color) => (
            <div
              key={color}
              className="flex h-24 items-center justify-center sm:h-32"
              style={{ backgroundColor: color }}
            >
              <div className="h-14 w-9 rounded-full bg-black/20 sm:h-20 sm:w-12" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "commerce") {
    return (
      <div className="min-h-[280px] bg-[#f3f1ed] p-5 text-[#222329] sm:min-h-[350px] sm:p-7">
        <div className="flex items-center justify-between border-b border-[#d8d5ce] pb-4 text-[10px]">
          <strong className="text-lg">TECH STORE.</strong>
          <span>PRODUCTS &nbsp; CART</span>
        </div>

        <div className="flex items-end justify-between py-6">
          <div>
            <span className="text-[9px] uppercase tracking-widest text-gray-500">
              Featured products
            </span>
            <h4 className="mt-1 text-2xl font-semibold">Our Collection</h4>
          </div>
          <span className="text-[9px] text-gray-500">View all →</span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {["#d8d8d8", "#c8c5c0", "#d9d0c4"].map((color, index) => (
            <div key={color}>
              <div
                className="flex h-24 items-center justify-center sm:h-32"
                style={{ backgroundColor: color }}
              >
                <div className="h-14 w-10 rounded-md bg-[#55565a] shadow-lg sm:h-20 sm:w-14" />
              </div>
              <p className="mt-2 text-[9px] font-medium">Product {index + 1}</p>
              <p className="text-[8px] text-gray-500">$120.00</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "country") {
    return (
      <div className="min-h-[280px] bg-[#eff4fb] p-5 text-[#142138] sm:min-h-[350px] sm:p-7">
        <div className="flex items-center justify-between text-[10px]">
          <strong className="text-lg">Atlas.</strong>
          <span className="text-[#708096]">Explore the world</span>
        </div>

        <div className="mt-7 flex h-9 items-center justify-between border border-[#dae2ed] bg-white px-3 text-[9px] text-[#8190a5]">
          Search for a country...
          <span>⌘ K</span>
        </div>

        <div className="mt-6 grid grid-cols-2 items-center gap-4">
          <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-[#a8c3e5] bg-gradient-to-br from-[#e8f6fc] to-[#a6c7ec] shadow-lg sm:h-40 sm:w-40">
            <span className="text-5xl">🌍</span>
          </div>

          <div className="grid gap-2">
            {[
              ["🇯🇵", "Japan", "Asia"],
              ["🇳🇴", "Norway", "Europe"],
              ["🇧🇷", "Brazil", "Americas"],
            ].map(([flag, name, region]) => (
              <div
                key={name}
                className="flex items-center gap-2 bg-white p-2 shadow-sm"
              >
                <span>{flag}</span>
                <div>
                  <p className="text-[10px] font-semibold">{name}</p>
                  <p className="text-[8px] text-gray-400">{region}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[280px] bg-[#ede9e0] p-5 text-[#1a1917] sm:min-h-[350px] sm:p-7">
      <div className="flex items-center justify-between text-[10px]">
        <strong className="text-lg">LQ.</strong>
        <span>WORK &nbsp; ABOUT &nbsp; CONTACT</span>
      </div>

      <div className="mt-12 sm:mt-16">
        <span className="text-[9px] tracking-[0.2em] text-[#756e64]">
          FRONTEND / SHOPIFY
        </span>
        <h4 className="mt-3 text-4xl font-medium leading-[0.95] tracking-tight sm:text-5xl">
          Useful digital
          <br />
          <span className="text-[#b2593a]">experiences.</span>
        </h4>
      </div>

      <div className="mt-12 flex justify-between border-t border-[#bdb8af] pt-3 text-[9px] text-[#726d65]">
        <span>Selected work</span>
        <span>2026</span>
      </div>
    </div>
  );
}

function BrowserFrame({ children, url }) {
  return (
    <div className="overflow-hidden rounded-md bg-white shadow-2xl">
      <div className="flex h-9 items-center gap-1.5 bg-[#e8e8e8] px-3">
        <span className="h-2 w-2 rounded-full bg-[#f28b82]" />
        <span className="h-2 w-2 rounded-full bg-[#fbbc04]" />
        <span className="h-2 w-2 rounded-full bg-[#81c995]" />

        <div className="ml-3 flex-1 rounded-sm bg-white px-3 py-1 text-center text-[8px] text-gray-500">
          {url}
        </div>
      </div>

      {children}
    </div>
  );
}

function ProjectCard({ project, index }) {
  const isReverse = index % 2 !== 0;

  return (
    <article
      className={`grid items-center gap-10 lg:gap-20 ${
        isReverse
          ? "lg:grid-cols-[0.75fr_1.55fr]"
          : "lg:grid-cols-[1.55fr_0.75fr]"
      }`}
    >
      {/* Project Preview */}
      <div
        className={`relative p-5 sm:p-11 ${isReverse ? "lg:order-2" : ""} ${
          project.theme === "shopify"
            ? "bg-[#172025]"
            : project.theme === "commerce"
              ? "bg-[#282434]"
              : project.theme === "country"
                ? "bg-[#142033]"
                : "bg-[#26201d]"
        }`}
      >
        <BrowserFrame url={`demo.liaqat.dev/${project.theme}`}>
          <ProjectPreview type={project.preview} />
        </BrowserFrame>

        <span className="absolute bottom-2 right-4 font-[family-name:var(--font-space)] text-5xl font-semibold text-white/20">
          {project.number}
        </span>
      </div>

      {/* Project Details */}
      <div className={`max-w-[420px] ${isReverse ? "lg:order-1" : ""}`}>
        <span
          className={`font-[family-name:var(--font-space)] text-[10px] font-semibold uppercase tracking-[0.16em] ${
            project.theme === "shopify"
              ? "text-[#95bf47]"
              : project.theme === "commerce"
                ? "text-purple-300"
                : project.theme === "portfolio"
                  ? "text-orange-300"
                  : "text-sky-400"
          }`}
        >
          {project.type}
        </span>

        <h3 className="mb-5 mt-4 font-[family-name:var(--font-space)] text-3xl font-medium leading-tight tracking-tight text-[#f5f7fa] sm:text-4xl">
          {project.title}
        </h3>

        <p className="text-sm leading-7 text-[#a1a8b7]">
          {project.description}
        </p>

        {/* Technology Tags */}
        <div className="my-7 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="border border-white/10 px-3 py-2 text-[9px] tracking-wide text-[#aeb5c2]"
            >
              {item}
            </span>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-4 border-b border-white/20 pb-2 text-xs font-semibold text-white transition-colors hover:border-sky-400 hover:text-sky-400"
        >
          View Project
          <span className="text-base">↗</span>
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <div className="border-t border-white/10 bg-[#0e1118] py-24 sm:py-32">
      <div className="mx-auto ] px-6">
        {/* Section Heading */}
        <div className="mb-16 grid gap-6 md:grid-cols-[1fr_2fr_1.4fr] md:items-end md:gap-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-sky-400">
            02 / Selected Work
          </span>

          <h2 className="font-[family-name:var(--font-space)] text-5xl font-medium leading-[0.98] tracking-[-0.055em] text-[#f5f7fa] sm:text-6xl">
            Work That
            <br />
            Solves Problems
          </h2>

          <p className="text-sm leading-7 text-[#a1a8b7]">
            A selection of demo projects demonstrating my approach to design,
            development, and practical problem-solving.
          </p>
        </div>

        {/* Projects List */}
        <div className="grid gap-20 sm:gap-28 lg:gap-[136px]">
          {projects.map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
