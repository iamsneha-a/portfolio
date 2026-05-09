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
    "I am a Computer Science graduate currently working as a Software Engineer Trainee at Alstonair Technologies. I specialize in developing web applications using Python, FastAPI, and React.js, focusing on clean architecture and performance. I have hands-on experience in real-world projects, working with APIs, testing, and collaborative development using Git. Currently, I am improving my problem-solving skills and exploring scalable system design.",
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
    items: ["Python", "C++"],
  },
  {
    category: "Backend Technologies",
    items: ["FastAPI", "Node.js"],
  },
  {
    category: "Frontend Technologies",
    items: ["HTML5", "CSS3", "Bootstrap", "React.js", "Tailwind CSS"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    category: "Tools & Libraries",
    items: ["Git", "GitHub", "VS Code", "AWS (Basics)"],
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
      "Built and maintained REST APIs using FastAPI to support key features of the real estate platform and ensure smooth data flow.",
      "Developed responsive and user-friendly UI components using React.js to improve overall usability and consistency across the application.",
      "Contributed to core FuSteps platform features and backend integrations, enhancing system functionality and performance.",
      "Performed structured manual testing, identifying, documenting, and reporting critical bugs to improve system reliability.",
      "Collaborated using Git-based workflows, including code reviews and feature branching, to maintain clean and efficient development processes.",
    ],
    tech: ["FastAPI", "React.js", "Git", "Testing", "PostgreSQL"],
  },
];

export const projects = [
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
      "Performed manual testing on real-time API validations, document workflows including auto-filled agreements and eSign/OTP signing, and property listing functionalities across sale, rent, and lease modules.",
    tech: ["React", "FastAPI", "Tailwind CSS", "JWT"],
    image: "/projects/nal.png",
    github: "",
    live: "https://alstonair.com/nal-india",
  },
  {
    title: "Authentication System",
    highlight: "A simple authentication system with signup, login, and dashboard access.",
    description:
      "Developed user registration and authentication flow where users can create an account, log in, and access a simple dashboard interface using JWT-based authentication.",
    tech: ["React", "FastAPI", "SQLite", "JWT"],
    image: "/projects/auth.png",
    github: "https://github.com/Sneha-A23/RealEstate-SignupLogin/",
    live: "",
  },
];

export const certifications = [
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
  {
    title: "Python Programming",
    issuer: "Global AI Hub",
    year: "2023",
    description: "Covered Python fundamentals, problem-solving techniques, and writing clean, efficient code.",
    link: "https://drive.google.com/file/d/10gcni2rtxO9Wc8xi2Lg7gXfPjocl42wF/view",
    logo: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
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
