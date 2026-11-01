const capabilities = [
  {
    number: "01",
    category: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    number: "02",
    category: "State & Integration",
    skills: ["Redux Toolkit", "REST APIs", "Fetch API", "Git", "GitHub"],
  },
  {
    number: "03",
    category: "Shopify",
    skills: [
      "Liquid",
      "JSON templates",
      "Section schema",
      "Snippets",
      "Theme settings",
      "Shopify CLI",
      "Ajax Cart API",
    ],
  },
];

export default function ShopifySpecialty() {
  return (
    <section className="border-t border-white/10 py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        {/* Section Heading */}
        <div className="mb-12 grid gap-6 md:grid-cols-[1fr_2fr_1.4fr] md:items-end md:gap-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-sky-400">
            04 / Capabilities
          </span>

          <h2 className="font-[family-name:var(--font-space)] text-5xl font-medium leading-[0.98] tracking-[-0.055em] text-[#f5f7fa] sm:text-6xl">
            My Toolkit
          </h2>

          <p className="text-sm leading-7 text-[#a1a8b7]">
            A practical stack selected to build dependable, maintainable digital
            products.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="border-t border-white/15">
          {capabilities.map((item) => (
            <div
              key={item.number}
              className="grid min-h-[160px] items-center gap-6 border-b border-white/10 py-8 md:grid-cols-[1fr_2.4fr] md:gap-10"
            >
              {/* Category Heading */}
              <div className="flex items-center gap-6">
                <span className="font-[family-name:var(--font-space)] text-xs text-[#6f7788]">
                  {item.number}
                </span>

                <h3 className="font-[family-name:var(--font-space)] text-2xl font-medium tracking-tight text-[#f5f7fa]">
                  {item.category}
                </h3>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-white/10 px-3 py-2.5 text-[10px] tracking-wide text-[#aeb5c2] transition-all duration-200 hover:border-sky-400/40 hover:bg-sky-400/[0.04] hover:text-white sm:text-[11px]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
