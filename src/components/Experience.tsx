import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <SectionWrapper id="experience" title="Experience">
      <p className="text-sm text-gray-400 -mt-7 mb-8">
        Professional contribution and real-world impact.
      </p>

      <div className="space-y-6 w-full">
        {experience.map((exp, i) => (
          <a
            key={i}
            href={exp.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-full bg-white border border-gray-200 rounded-xl shadow-sm px-6 py-6 hover:shadow-lg hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            {/* Top — logo + company info side by side */}
            <div className="flex items-center gap-4 mb-4">
              <div className="shrink-0 w-16 h-16 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center overflow-hidden shadow-sm p-1.5">
                {exp.logo ? (
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                ) : (
                  <span className="text-base font-bold text-gray-400">{exp.logoFallback}</span>
                )}
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 leading-snug">
                  {exp.company}, {exp.location}
                </h3>
                <p className="text-sm font-medium text-indigo-600 mt-0.5">{exp.role}</p>
                <p className="text-sm text-gray-400 mt-0.5">{exp.duration}</p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 mb-4" />

            {/* Full-width bullet points */}
            <ul className="w-full space-y-3 mb-5 block">
              {exp.points.map((pt, j) => (
                <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed w-full">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
                  <span className="w-full text-justify [text-align-last:left]">
                    {pt.split(/(FastAPI|React\.js|Git)/).map((part, k) =>
                      ["FastAPI", "React.js", "Git"].includes(part)
                        ? <span key={k} className="font-medium text-gray-800">{part}</span>
                        : part
                    )}
                  </span>
                </li>
              ))}
            </ul>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs text-gray-600 bg-gray-100 border border-gray-200 px-2.5 py-0.5 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
