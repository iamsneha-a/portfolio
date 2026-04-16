import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <SectionWrapper id="education" title="Education">
      <div className="space-y-4 stagger">
        {education.map((edu, i) => {
          const cardClass =
            "flex items-center gap-4 p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 animate-fade-up";

          const content = (
            <>
              {/* Logo */}
              <div className="shrink-0 w-12 h-12 rounded-lg border border-gray-200 bg-gray-50 flex items-center justify-center overflow-hidden p-1">
                {edu.logo ? (
                  <Image
                    src={edu.logo}
                    alt={edu.institution}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                ) : (
                  <span className="text-sm font-bold text-gray-400">{edu.logoFallback}</span>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm leading-snug">{edu.degree}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">{edu.institution}</p>
                  </div>
                  <span className="text-xs text-gray-400 shrink-0">{edu.year}</span>
                </div>
                {edu.grade && <p className="text-xs text-gray-400 mt-1">{edu.grade}</p>}
              </div>
            </>
          );

          return edu.link ? (
            <a key={i} href={edu.link} target="_blank" rel="noreferrer" className={cardClass}>
              {content}
            </a>
          ) : (
            <div key={i} className={cardClass}>
              {content}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
