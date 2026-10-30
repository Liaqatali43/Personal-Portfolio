function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-cyan-400 text-slate-950 hover:bg-cyan-300 hover:-translate-y-1",
    secondary: "bg-slate-800 text-white hover:bg-slate-700",
    outline:
      "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950",
  };

  const styles = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}

export default Button;
