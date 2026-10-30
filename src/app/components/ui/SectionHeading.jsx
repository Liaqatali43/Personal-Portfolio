function SectionHeading({
  label,
  title,
  description,
  align = "center",
  className = "",
}) {
  const alignment = {
    center: "text-center items-center",
    left: "text-left items-start",
  };

  return (
    <div
      className={`flex flex-col ${alignment[align] || alignment.center} gap-4 mb-12 ${className}`}
    >
      {label && (
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          {label}
        </span>
      )}

      <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="max-w-2xl text-base leading-7 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
