import Image from "next/image";
import { personal } from "@/data/portfolio";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center pt-14 bg-white">
      <div className="max-w-5xl mx-auto px-6 w-full py-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-14">

          {/* Left */}
          <div className="w-full max-w-[500px] text-center md:text-left animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-3">
              {personal.name}
            </h1>
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-7">
              {personal.title}
            </p>
            <p className="text-gray-500 text-base leading-relaxed max-w-md mx-auto md:mx-0 mb-7">
              {personal.tagline}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-8">
              {personal.heroTech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium text-gray-600 bg-gray-100 border border-gray-200 px-3 py-1 rounded-full hover:bg-gray-200 hover:border-gray-300 transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-8">
              <a
                href="#projects"
                className="text-sm font-medium bg-gray-900 text-white px-5 py-2.5 rounded-lg hover:bg-gray-700 hover:-translate-y-px active:translate-y-0 transition-all duration-200 shadow-sm hover:shadow"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="text-sm font-medium border border-gray-200 text-gray-600 px-5 py-2.5 rounded-lg hover:border-gray-400 hover:text-gray-900 hover:-translate-y-px active:translate-y-0 transition-all duration-200"
              >
                Contact Me
              </a>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 justify-center md:justify-start">
              {[
                { href: personal.linkedin, label: "LinkedIn", icon: <LinkedInIcon /> },
                { href: personal.github, label: "GitHub", icon: <GitHubIcon /> },
                { href: `mailto:${personal.email}`, label: "Email", icon: <EmailIcon /> },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.label !== "Email" ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:text-gray-900 hover:border-gray-400 hover:-translate-y-px transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — profile image */}
          <div className="shrink-0 animate-fade-up">
            <div className="w-44 h-44 md:w-56 md:h-56 rounded-full border-2 border-gray-200 shadow-sm overflow-hidden bg-gray-100 hover:shadow-md transition-shadow duration-300">
              <Image
                src={personal.avatar}
                alt={personal.name}
                width={224}
                height={224}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
