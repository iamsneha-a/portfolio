import SectionWrapper from "./SectionWrapper";
import { about } from "@/data/portfolio";

export default function About() {
  return (
    <SectionWrapper id="about" title="About Me" className="bg-gray-50">
      <p className="text-sm text-gray-400 -mt-7 mb-8">{about.subtitle}</p>
      <div className="w-full bg-white border border-gray-200 rounded-xl shadow-sm p-8 hover:shadow-md transition-all duration-300">
        {about.paragraphs.map((para, i) => (
          <p key={i} className="text-gray-600 text-sm leading-relaxed">
            {para}
          </p>
        ))}
      </div>
    </SectionWrapper>
  );
}
