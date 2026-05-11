export const personal = {
  name: "Sneha A",
  title: "Aspiring Software Developer",
  tagline:
    "Building scalable web applications using Python, Django, and React with hands-on experience in real-world product development and modular SaaS platforms.",
  email: "Snehaanjinappanaik@gmail.com",
  github: "https://github.com/sneha",
  linkedin: "https://www.linkedin.com/in/asneha",
  resume: "/SNEHA A Resume.pdf",
  heroTech: ["Python", "Django", "React.js", "MySQL", "Git"],
  avatar: "/avatar.png",
};

export const about = {
  subtitle: "A little bit about me and what I do.",
  paragraphs: [
    "Aspiring Software Developer with hands-on experience in scalable SaaS platform development using Python, Django, and React. Worked on authentication systems, RBAC, modular architecture, and real-world web application workflows through industry projects and internship experience.",
  ],
  location: "Bangalore, India",
};

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Presidency University, Yelahanka",
    year: "2021 – 2025",
    grade: "",
    logo: "/images/PU_logo.png",
    logoFallback: "PU",
    link: "https://presidencyuniversity.in",
  },
  {
    degree: "Class 12th — PCMB",
    institution: "RT Nagar PU College, Yelahanka",
    year: "2019 – 2021",
    grade: "",
    logo: "/images/rtnet.jpg",
    logoFallback: "RT",
    link: "",
  },
];

export const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "JavaScript", "TypeScript", "C++ (Basics)"],
  },
  {
    category: "Backend Technologies",
    items: ["Django", "Django REST Framework", "FastAPI"],
  },
  {
    category: "Frontend Technologies",
    items: ["React", "HTML", "CSS"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL (Basics)"],
  },
  {
    category: "Tools & Libraries",
    items: ["Git", "GitHub", "VS Code"],
  },
];

export const experience = [
  {
    role: "Software Developer Intern",
    company: "Alstonair Technologies Pvt Ltd",
    companyUrl: "https://alstonair.com",
    location: "Bengaluru",
    duration: "Feb 2026 – Apr 2026",
    logo: "/images/alstonair-logo.png",
    logoFallback: "AT",
    points: [
      "Worked on scalable SaaS platform development using Django, React, and PostgreSQL. Contributed to Identity & Authentication and Access Control modules including MFA, RBAC, permissions, and session management workflows.",
      "Worked on real-time industry projects including FuSteps and NAL India.",
      "Contributed to scalable workflow development and reusable platform architecture.",
      "Gained hands-on experience in SDLC, debugging, testing, and collaborative development environments.",
    ],
    tech: ["Django", "React", "PostgreSQL", "RBAC", "Git"],
  },
];

export const projects = [
  {
    title: "Alstonair Modular SaaS Platform",
    highlight: "Reusable Django + React/TypeScript Engineering Framework",
    description:
      "Worked on Identity & Authentication modules including Login, MFA, Session Management, and Recovery workflows. Developed Access Control & Role Management features such as RBAC, Permissions, and Feature Flags. Contributed to reusable backend/frontend modules for scalable and maintainable integration.",
    tech: ["Python", "Django", "Django REST Framework", "React", "TypeScript", "PostgreSQL", "Vite"],
    image: "/projects/saas-platform.png",
    github: "https://github.com/gowthamalstonair/Boiler-Plate",
    live: "",
  },
  {
    title: "FuSteps Platform",
    highlight: "A scalable career platform for job applications and skill intelligence.",
    description:
      "Worked on core platform features including bulk job posting, reusable templates, and skill taxonomy design. Implemented network intelligence features such as influence scoring to enhance user insights and recommendations.",
    tech: ["React.js", "Node.js", "MySQL", "Firebase", "AWS S3"],
    image: "/projects/FuSteps.png",
    github: "",
    live: "https://alstonair.com/fusteps",
  },
  {
    title: "NAL – Real Estate Platform",
    highlight: "A real estate platform with advanced listing, validation, and comparison features.",
    description:
      "Contributed to manual testing and workflow validation for a real-time enterprise real estate platform involving authentication, API validation, document workflows, eSign/OTP signing, and property management functionalities across sale, rent, and lease modules.",
    tech: ["React", "FastAPI", "Tailwind CSS", "JWT"],
    image: "/projects/nal.png",
    github: "",
    live: "https://alstonair.com/nal-india",
  },

];

export const certifications = [
  {
    title: "Internship Completion Certificate",
    issuer: "Alstonair Technologies Pvt Ltd",
    year: "2026",
    description: "Completed a Software Developer Internship contributing to SaaS platform development, authentication systems, RBAC, and real-world industry projects.",
    link: "/certificates/alstonair-internship.pdf",
    logo: "/images/alstonair-logo.png",
    featured: true,
  },
  {
    title: "Software Engineer Intern",
    issuer: "HackerRank",
    year: "2024",
    description: "Assessed coding ability, problem-solving skills, and real-world engineering scenarios.",
    link: "https://www.hackerrank.com/certificates/cf1b96e1f5e6",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
  },
  {
    title: "SQL Basic",
    issuer: "HackerRank",
    year: "2024",
    description: "Demonstrated proficiency in SQL queries, joins, aggregations, and database fundamentals.",
    link: "https://www.hackerrank.com/certificates/2d88b75b0d75",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
