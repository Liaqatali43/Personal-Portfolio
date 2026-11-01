"use client";

import { useState } from "react";

function ArrowIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.82c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.61 1.21 3.24.92.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.51 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.28-2.6 5.22-5.08 5.5.4.35.75 1.02.75 2.06v3.11c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8.1 18.5H5.15V9h2.95v9.5ZM6.63 7.7a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12 10.8h-2.95v-4.62c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.7H9.4V9h2.84v1.3h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.55 1.98 3.55 4.55v5.2Z" />
    </svg>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="border-t border-white/10 bg-[#0d1118] py-24 sm:py-32">
      <div className="mx-auto grid  gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-[110px]">
        {/* Left Side */}
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-sky-400">
            07 / Contact
          </span>

          <h2 className="mt-7 font-[family-name:var(--font-space)] text-5xl font-medium leading-[0.98] tracking-[-0.055em] text-[#f5f7fa] sm:text-7xl">
            Have a Project
            <br />
            in Mind?
          </h2>

          <p className="mb-10 mt-7 max-w-[430px] text-sm leading-7 text-[#a1a8b7] sm:mb-14 sm:text-[15px]">
            Let s build a storefront or web experience that fits your goals.
          </p>

          {/* Email */}
          <div className="grid gap-2">
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#6f7788]">
              Email
            </span>

            <a
              href="mailto:liaqatali4359@gmail.com"
              className="w-fit font-[family-name:var(--font-space)] text-base text-[#f5f7fa] transition-colors hover:text-sky-400"
            >
              Liaqatali4359@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-7 flex gap-2">
            <a
              href="https://github.com/Liaqatali43"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center border border-white/15 text-[#a1a8b7] transition-all hover:border-sky-400 hover:text-sky-400"
            >
              <GithubIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/liaqat-ali-10253b404/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center border border-white/15 text-[#a1a8b7] transition-all hover:border-sky-400 hover:text-sky-400"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="grid gap-6 border border-white/10 bg-[#121620] p-6 sm:p-10"
        >
          {/* Name and Email */}
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-3 text-[10px] font-medium uppercase tracking-[0.1em] text-[#c6cbd4]">
              Name
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="h-12 w-full border border-white/10 bg-[#0e1118] px-4 text-xs normal-case tracking-normal text-white outline-none transition-colors placeholder:text-[#5e6674] focus:border-sky-400"
              />
            </label>

            <label className="grid gap-3 text-[10px] font-medium uppercase tracking-[0.1em] text-[#c6cbd4]">
              Email
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                required
                className="h-12 w-full border border-white/10 bg-[#0e1118] px-4 text-xs normal-case tracking-normal text-white outline-none transition-colors placeholder:text-[#5e6674] focus:border-sky-400"
              />
            </label>
          </div>

          {/* Project Type */}
          <label className="grid gap-3 text-[10px] font-medium uppercase tracking-[0.1em] text-[#c6cbd4]">
            Project Type
            <select
              name="projectType"
              defaultValue=""
              required
              className="h-12 w-full border border-white/10 bg-[#0e1118] px-4 text-xs normal-case tracking-normal text-white outline-none transition-colors focus:border-sky-400"
            >
              <option value="" disabled>
                Select a project type
              </option>
              <option value="Shopify">Shopify</option>
              <option value="Frontend">Frontend</option>
              <option value="Other">Other</option>
            </select>
          </label>

          {/* Message */}
          <label className="grid gap-3 text-[10px] font-medium uppercase tracking-[0.1em] text-[#c6cbd4]">
            Message
            <textarea
              name="message"
              rows={5}
              placeholder="Tell me a little about your project, goals, and timeline."
              required
              className="w-full resize-y border border-white/10 bg-[#0e1118] px-4 py-4 text-xs leading-6 normal-case tracking-normal text-white outline-none transition-colors placeholder:text-[#5e6674] focus:border-sky-400"
            />
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="inline-flex w-fit items-center justify-center gap-4 bg-sky-400 px-6 py-4 text-xs font-semibold text-[#07131b] transition-all hover:bg-sky-300"
          >
            {submitted ? "Inquiry Ready to Send" : "Send Inquiry"}

            {submitted ? <CheckIcon /> : <ArrowIcon />}
          </button>

          {submitted && (
            <p className="text-[11px] leading-5 text-[#95bf47]">
              This demo form is ready to connect to your preferred form service.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
