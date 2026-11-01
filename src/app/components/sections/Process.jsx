const steps = [
  {
    number: "01",
    title: "Understand",
    description: "Requirements, context, and the goals that define success.",
  },
  {
    number: "02",
    title: "Design",
    description: "Layout, structure, and a clear user experience.",
  },
  {
    number: "03",
    title: "Develop",
    description: "Responsive, reusable, and maintainable code.",
  },
  {
    number: "04",
    title: "Test & Deliver",
    description: "Cross-device testing, refinement, and a clean handoff.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="border-t border-white/10 bg-[#121620] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1240px] px-6">
        {/* Section Heading */}
        <div className="mb-16 grid gap-6 md:grid-cols-[1fr_2fr_1.4fr] md:items-end md:gap-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-sky-400">
            05 / Process
          </span>

          <h2 className="font-[family-name:var(--font-space)] text-5xl font-medium leading-[0.98] tracking-[-0.055em] text-[#f5f7fa] sm:text-6xl">
            How I Work
          </h2>

          <p className="text-sm leading-7 text-[#a1a8b7]">
            A straightforward process that keeps the work focused and
            communication clear.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="relative grid grid-cols-[52px_1fr] gap-4 pb-10 last:pb-0 md:block md:pb-0 md:pr-9"
            >
              {/* Number and Connecting Line */}
              <div className="relative flex h-full items-start md:h-[52px] md:items-center">
                <span className="relative z-10 grid h-[34px] w-[34px] shrink-0 place-items-center border border-white/20 bg-[#121620] font-mono text-[10px] text-sky-400">
                  {step.number}
                </span>

                {/* Desktop Line */}
                {index !== steps.length - 1 && (
                  <span className="absolute left-[36px] right-0 top-1/2 hidden h-px bg-white/15 lg:block" />
                )}

                {/* Mobile Vertical Line */}
                {index !== steps.length - 1 && (
                  <span className="absolute bottom-[-40px] left-[16px] top-[34px] w-px bg-white/15 md:hidden" />
                )}
              </div>

              {/* Step Content */}
              <div>
                <h3 className="mb-3 mt-0 font-[family-name:var(--font-space)] text-xl font-medium tracking-tight text-[#f5f7fa] md:mt-[22px]">
                  {step.title}
                </h3>

                <p className="max-w-[220px] text-xs leading-[1.7] text-[#a1a8b7]">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
