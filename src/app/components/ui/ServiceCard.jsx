function ServiceCard({ icon, title, description, features = [] }) {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50">
      {/* Icon */}
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/10 text-3xl text-cyan-400 transition-colors group-hover:bg-cyan-400 group-hover:text-slate-950">
        {icon}
      </div>

      {/* Title */}
      <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>

      {/* Description */}
      <p className="mb-5 text-sm leading-7 text-slate-400">{description}</p>

      {/* Features */}
      {features.length > 0 && (
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-sm text-slate-300"
            >
              <span className="text-cyan-400">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ServiceCard;
