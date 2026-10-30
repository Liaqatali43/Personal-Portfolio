function SkillCard({ name, icon, level, percentage }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 transition-all duration-300 hover:border-cyan-400/50">
      {/* Skill Name */}
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {icon && <span className="text-2xl">{icon}</span>}

          <h3 className="font-semibold text-white">{name}</h3>
        </div>

        {level && <span className="text-xs text-cyan-400">{level}</span>}
      </div>

      {/* Progress Bar */}
      {percentage !== undefined && (
        <div>
          <div className="mb-2 flex justify-between text-xs text-slate-400">
            <span>Proficiency</span>
            <span>{percentage}%</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-cyan-400 transition-all duration-700"
              style={{
                width: `${Math.min(100, Math.max(0, percentage))}%`,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default SkillCard;
