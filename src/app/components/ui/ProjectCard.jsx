import Button from "@/components/ui/Button";

function ProjectCard({
  image,
  title,
  description,
  technologies = [],
  liveLink,
  githubLink,
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50">
      {/* Project Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>

        <p className="mb-5 text-sm leading-7 text-slate-400">{description}</p>

        {/* Technologies */}
        <div className="mb-6 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-cyan-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap gap-3">
          {liveLink && (
            <Button href={liveLink} variant="primary">
              Live Demo ↗
            </Button>
          )}

          {githubLink && (
            <Button href={githubLink} variant="outline">
              GitHub ↗
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
