const principles = [
  "Responsive by default",
  "Performance-conscious",
  "Accessible interfaces",
  "Reusable components",
  "Clear communication",
];

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="border-t border-white/10 py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-[100px]">
        {/* Left Side */}
        <div className="relative border-b border-white/10 pb-8 lg:border-b-0 lg:border-r lg:pb-0">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-sky-400">
            06 / About
          </span>

          <h2 className="mt-7 font-[family-name:var(--font-space)] text-6xl font-medium leading-[0.98] tracking-[-0.055em] text-[#f5f7fa] sm:text-7xl">
            A Little
            <br />
            About Me
          </h2>

          {/* Code Symbol */}
          <div className="mt-10 font-[family-name:var(--font-space)] text-7xl font-semibold tracking-[-0.15em] text-sky-400/20 sm:mt-[70px] sm:text-8xl">
            &lt;/&gt;
          </div>
        </div>

        {/* Right Side */}
        <div className="self-center">
          <p className="mb-7 font-[family-name:var(--font-space)] text-xl leading-[1.45] tracking-[-0.025em] text-[#f5f7fa] sm:text-[25px]">
            I m a frontend and Shopify theme developer who enjoys turning
            thoughtful ideas into clear, useful digital experiences.
          </p>

          <p className="max-w-[620px] text-sm leading-[1.8] text-[#a1a8b7]">
            My work balances visual detail with practical engineering—clean
            components, responsive behavior, and Shopify themes that are
            straightforward to manage. I m always learning, refining my process,
            and looking for the simplest durable solution.
          </p>

          {/* Professional Principles */}
          <div className="mt-10 grid grid-cols-1 border-t border-white/10 sm:grid-cols-2">
            {principles.map((item) => (
              <div
                key={item}
                className="flex min-h-[54px] items-center gap-3 border-b border-white/10 text-[11px] text-[#c5cad3]"
              >
                <span className="text-sky-400">
                  <CheckIcon />
                </span>

                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
