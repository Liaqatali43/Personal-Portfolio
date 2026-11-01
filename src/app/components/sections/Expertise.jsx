const CodeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const ShopifyIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M5 8h14l-1 13H6L5 8Z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    <path d="M9 13c1.5 1 4.5 1 6 0" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);

const services = [
  {
    number: "01",
    title: (
      <>
        Frontend
        <br />
        Development
      </>
    ),
    description:
      "Fast, responsive interfaces that feel considered on every screen.",
    icon: <CodeIcon />,
    theme: "frontend",
    skills: [
      "React.js and Next.js applications",
      "Responsive UI implementation",
      "Reusable component architecture",
      "API integration and dynamic interfaces",
      "Tailwind CSS and modern JavaScript",
    ],
    link: "#projects",
  },
  {
    number: "02",
    title: (
      <>
        Shopify Theme
        <br />
        Development
      </>
    ),
    description:
      "Custom Shopify storefronts designed for performance and better shopping experiences.",
    icon: <ShopifyIcon />,
    theme: "shopify",
    skills: [
      "Shopify Liquid and JSON templates",
      "Custom Shopify sections and blocks",
      "Theme customization and development",
      "Product pages and collection layouts",
      "Cart functionality and AJAX Cart API",
    ],
    link: "#projects",
  },
];

export default function Expertise() {
  return (
    <div className="border-t border-white/10 py-24 sm:py-32">
      <div className="mx-auto  px-6">
        {/* Section Heading */}
        <div className="mb-16 grid gap-6 md:grid-cols-[1fr_2fr_1.4fr] md:items-end md:gap-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-sky-400">
            01 / Expertise
          </span>

          <h2 className="font-[family-name:var(--font-space)] text-5xl font-medium leading-[0.98] tracking-[-0.055em] text-[#f5f7fa] sm:text-6xl">
            What I Do
          </h2>

          <p className="text-sm leading-7 text-[#a1a8b7]">
            Focused development services for teams that care about quality,
            clarity, and the details users notice.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className={`group relative min-h-[640px] overflow-hidden border border-white/10 bg-[#121620] p-7 transition-all duration-300 hover:-translate-y-1 sm:p-10 ${
                service.theme === "frontend"
                  ? "hover:border-sky-400/40"
                  : "hover:border-[#95bf47]/50"
              }`}
            >
              {/* Top Accent */}
              <div
                className={`absolute left-0 top-0 h-[2px] w-full ${
                  service.theme === "frontend" ? "bg-sky-400" : "bg-[#95bf47]"
                }`}
              />

              {/* Card Top */}
              <div className="flex items-center justify-between">
                <span
                  className={`flex h-[52px] w-[52px] items-center justify-center border border-white/15 ${
                    service.theme === "frontend"
                      ? "text-sky-400"
                      : "text-[#95bf47]"
                  }`}
                >
                  {service.icon}
                </span>

                <span className="font-mono text-xs text-[#39404c]">
                  {service.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-[18px] mt-11 font-[family-name:var(--font-space)] text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-[#f5f7fa]">
                {service.title}
              </h3>

              <p className="max-w-[430px] text-sm leading-7 text-[#a1a8b7]">
                {service.description}
              </p>

              {/* Skills */}
              <ul className="relative z-10 my-8 grid gap-[13px]">
                {service.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-xs text-[#c5cad4]"
                  >
                    <span
                      className={
                        service.theme === "frontend"
                          ? "text-sky-400"
                          : "text-[#95bf47]"
                      }
                    >
                      <CheckIcon />
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a
                href={service.link}
                className={`relative z-10 inline-flex items-center gap-4 border-b border-white/20 pb-2 text-xs font-semibold text-white transition-colors ${
                  service.theme === "frontend"
                    ? "hover:border-sky-400 hover:text-sky-400"
                    : "hover:border-[#95bf47] hover:text-[#95bf47]"
                }`}
              >
                Explore Projects
                <ArrowIcon />
              </a>

              {/* Decorative Code Card */}
              <div
                className={`absolute -bottom-5 -right-4 grid w-[300px] rotate-[-3deg] grid-cols-[20px_1fr] gap-x-3 gap-y-2 border p-6 font-mono text-[9px] leading-relaxed opacity-40 transition-opacity group-hover:opacity-70 ${
                  service.theme === "frontend"
                    ? "border-sky-400/20"
                    : "border-[#95bf47]/20"
                }`}
              >
                <span>01</span>
                <span>display: grid;</span>
                <span>02</span>
                <b className="text-sky-400">gap: var(--space);</b>
                <span>03</span>
                <i className="text-purple-400">align-items: center;</i>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
