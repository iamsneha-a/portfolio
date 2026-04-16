import SectionWrapper from "./SectionWrapper";
import ProjectImage from "./ProjectImage";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <SectionWrapper id="projects" title="Projects" className="bg-gray-50">
      <p className="text-sm text-gray-400 -mt-7 mb-10">
        A showcase of my work demonstrating full-stack development skills and
        real-world problem solving.
      </p>

      <div className="space-y-6">
        {projects.map((p, i) => {
          const cardUrl = p.live || p.github || "";
          const isEven = i % 2 === 0;

          return (
            <a
              key={i}
              href={cardUrl || undefined}
              target={cardUrl ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row hover:shadow-lg hover:border-gray-300 hover:scale-[1.01] transition-all duration-200 cursor-pointer"
            >
              {/* Image — left on even, right on odd (desktop only) */}
              <div
                className={`w-full md:w-72 lg:w-80 shrink-0 overflow-hidden ${
                  isEven ? "md:order-first" : "md:order-last"
                }`}
              >
                <div className="h-52 md:h-full min-h-[200px]">
                  <ProjectImage src={p.image} alt={p.title} />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-6 flex-1">
<h3 className="text-lg font-bold text-gray-900 mb-1 leading-snug">
                  {p.title}
                </h3>

                <p className="text-xs text-gray-400 italic mb-3">{p.highlight}</p>

                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {p.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-gray-600 bg-gray-100 border border-gray-200 px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {(p.github || p.live) && (
                  <div className="flex gap-4 text-sm font-medium text-gray-400 pt-3 border-t border-gray-100">
                    {p.live && (
                      <span className="group-hover:text-gray-900 transition-colors duration-150">
                        View Project ↗
                      </span>
                    )}
                    {p.github && (
                      <span className="group-hover:text-gray-900 transition-colors duration-150">
                        GitHub ↗
                      </span>
                    )}
                  </div>
                )}
              </div>
            </a>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
