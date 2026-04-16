import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import { certifications } from "@/data/portfolio";

const issuerInitials = (issuer: string) =>
  issuer.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" title="Certifications">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger">
        {certifications.map((cert, i) => (
          <a
            key={i}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 rounded-xl shadow-sm p-5 flex flex-col gap-3 hover:shadow-md hover:scale-[1.02] hover:border-gray-300 transition-all duration-200 animate-fade-up"
          >
            {/* Logo + issuer */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md border border-gray-200 bg-gray-50 flex items-center justify-center shrink-0 overflow-hidden">
                {cert.logo ? (
                  <Image
                    src={cert.logo}
                    alt={cert.issuer}
                    width={36}
                    height={36}
                    className="w-full h-full object-contain p-0.5"
                    unoptimized
                  />
                ) : (
                  <span className="text-xs font-bold text-gray-500">
                    {issuerInitials(cert.issuer)}
                  </span>
                )}
              </div>
              <span className="text-xs text-gray-400">{cert.issuer}</span>
            </div>

            {/* Title + year + description */}
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-gray-700 transition-colors">
                {cert.title}
              </h3>
              <p className="text-xs text-gray-400 mt-1">{cert.year}</p>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">{cert.description}</p>
            </div>

            {/* View link */}
            <div className="text-xs font-medium text-gray-400 group-hover:text-gray-900 transition-colors pt-2 border-t border-gray-100">
              View Certificate ↗
            </div>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
