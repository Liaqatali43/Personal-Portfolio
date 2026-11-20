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

const ABOUT = {
  lead: "I'm a frontend and Shopify theme developer who enjoys turning thoughtful ideas into clear, useful digital experiences.",
  story:
    "I started learning web development because [apni real wajah likhein]. Today I build responsive React interfaces and Shopify themes, including custom sections and an Ajax cart drawer. I'm always learning and improving my process.",
  looking: "Currently open to freelance projects and junior frontend roles.",
  location: "MSTP Skardu Sundus Room_5 GB, Pakistan · PKR",
  photo: "images/portfolio about image (1).png", // jaise "/about/me.jpg". Khali ho to initials avatar dikhega
  cv: "images/resume.png",
  initials: "L",
};

export default function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-16">
        {/* Left: heading, photo, location */}
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
            06 / About
          </span>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
            A Little
            <br />
            About Me
          </h2>

          <div className="mt-8 h-40 w-40 overflow-hidden rounded-full border border-white/15 bg-white/5">
            {ABOUT.photo ? (
              <img
                src={ABOUT.photo}
                alt="Portrait of Liaqat"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            ) : (
              <div
                role="img"
                aria-label="Avatar placeholder"
                className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-400 to-emerald-400 text-6xl font-bold text-slate-900"
              >
                {ABOUT.initials}
              </div>
            )}
          </div>

          <p className="mt-4 text-sm text-white/70">📍 {ABOUT.location}</p>
        </div>

        {/* Right: story, principles, buttons */}
        <div>
          <p className="text-xl leading-relaxed text-white md:text-2xl">
            {ABOUT.lead}
          </p>
          <p className="mt-6 leading-relaxed text-white/70">{ABOUT.story}</p>
          <p className="mt-4 leading-relaxed text-white/70">{ABOUT.looking}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Responsive by default",
              "Performance-conscious",
              "Accessible interfaces",
              "Reusable components",
              "Clear communication",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-white/80"
              >
                {/* <Icon name="check" size={14} /> */}
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={ABOUT.cv}
              download
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              {/* Download CV <Icon name="arrow" /> */}
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
