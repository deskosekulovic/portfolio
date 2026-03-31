export type Project = {
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
  href?: string;
  tags?: string[];
};

export type Profile = {
  name: string;
  role: string;
  location?: string;
  address?: string;
  education?: string;
  experienceYears?: string;
  experience?: string[];
  skills?: {
    primary: string[];
    some: string[];
    languages: string[];
  };
  summary: string;
  highlights: string[];
  contact: {
    email: string;
    phone?: string;
    github?: string;
    linkedin?: string;
  };
};

export const profile: Profile = {
  name: "Desko Sekulović",
  role: "Frontend Software Developer",
  location: "Republic of Serbia",
  address: "Save Kovacevica 24, Backo Dobro Polje",
  education: "MSc in Electrical and Computer Engineering",
  experienceYears: "7+ years",
  experience: [
    "Thrust -crypto startup (Sep 2025 – Mar 2026)",
    "Brightmarbles (Sep 2020 – Sept 2025)",
    "Vega IT (Nov 2020 – Feb 2022)",
    "Execom (Mar 2019 – Sep 2020)",
  ],
  skills: {
    primary: [
      "JavaScript",
      "jQuery",
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "Jotai",
      "GraphQL",
      "HTML5",
      "CSS3",
      "Styled Components",
      "Bootstrap",
      "Material UI",
      "Radix UI",
      "Tailwind",
      "Git",
    ],
    some: ["Node.js", "MongoDB", "PHP", "MySQL"],
    languages: ["English (excellent communication)"],
  },
  summary:
    "Frontend software developer with 7+ years of experience. Focused on clean code, structural solutions, and building responsive, user-friendly web applications.",
  highlights: [
    "MSc in Electrical and Computer Engineering",
    "JavaScript/TypeScript, React, Next.js; strong HTML/CSS foundation",
    "Some experience with Node.js, MongoDB, PHP, MySQL",
  ],
  contact: {
    email: "desko.sekulovic@gmail.com",
    phone: "+381 64 209 80 90",
    github: "https://github.com/deskosekulovic",
    linkedin: "https://www.linkedin.com/in/desko-sekulovic-6162b146/",
  },
};

export const companyProjects: Project[] = [
  {
    title: "LiteBit (Web)",
    description:
      "Leading cryptocurrency trading platform in Europe. Users can trade 70+ coins via web platform and mobile application. Responsibilities included clean code structure, feature planning with the team, ensuring test coverage, technical documentation, Agile/Scrum work, and code reviews.",
    tags: ["React", "Redux", "TypeScript", "Radix UI"],
  },
  {
    title: "Umbrella",
    description:
      "Module for creating topics/articles plus FAQs with simple answers or follow-up questions. Responsive UI for desktop and mobile (Android/iOS).",
    tags: ["React", "TypeScript", "GraphQL"],
  },
  {
    title: "Cleaning equipment & full cleaning systems (responsive web app)",
    description:
      "Worked in a Scrum team on a responsive web UI for a company producing cleaning equipment and full cleaning systems. Communicated with backend REST endpoints using asynchronous requests.",
    tags: ["Angular", "Angular Material", "HTML5", "REST"],
  },
  {
    title: "Employee profiles portal",
    description:
      "Portal for managing employee profiles. Users could search employees by skill sets and compare employees by skills.",
    tags: ["React", "Redux", "TypeScript", "Styled Components"],
  },
  {
    title: "Maritime & enterprise satellite communications (multiple projects)",
    description:
      "Maintenance and feature development across multiple projects for a large maritime & enterprise satellite communications provider (MSS/VSAT).",
    tags: ["OutSystems"],
  },
  {
    title: "GreenLite",
    description:
      "National permitting partner combining AI-powered software with licensed architects/engineers and former regulators to accelerate building permit approvals and reduce delays. Worked as frontend developer.",
    tags: ["Next.js", "TypeScript", "Styled Components"],
  },
];

export const githubProjects: Project[] = [
  {
    title: "portfolio",
    description: "My personal portfolio (Next.js + TypeScript).",
    href: "https://github.com/deskosekulovic/portfolio",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "weather-app-angular",
    description: "Weather app built with Angular.",
    href: "https://github.com/deskosekulovic/weather-app-angular",
    tags: ["Angular", "TypeScript", "Angular Material"],
  },
  {
    title: "Snake",
    description: "Classic Snake game.",
    href: "https://github.com/deskosekulovic/Snake",
    tags: ["JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "yamb",
    description: "Yamb game (React + React Router + Styled Components).",
    href: "https://github.com/deskosekulovic/yamb",
    tags: ["React", "JavaScript", "Styled Components"],
  },
  {
    title: "yamb-redux",
    description: "Yamb game variant using Redux.",
    href: "https://github.com/deskosekulovic/yamb-redux",
    tags: ["React", "Redux", "JavaScript"],
  },
  {
    title: "todo-react",
    description: "Todo app in React.",
    href: "https://github.com/deskosekulovic/todo-react",
    tags: ["React", "JavaScript"],
  },
  {
    title: "weather",
    description: "Weather app (React + Styled Components).",
    href: "https://github.com/deskosekulovic/weather",
    tags: ["React", "JavaScript", "Styled Components"],
  },
  {
    title: "hackernews-redux",
    description: "Hacker News clone using Redux.",
    href: "https://github.com/deskosekulovic/hackernews-redux",
    tags: ["React", "Redux", "JavaScript"],
  },
  {
    title: "hackernews-react",
    description: "Hacker News clone in React.",
    href: "https://github.com/deskosekulovic/hackernews-react",
    tags: ["React", "JavaScript"],
  },
  {
    title: "memory-game",
    description: "Memory game built with React.",
    href: "https://github.com/deskosekulovic/memory-game",
    tags: ["React", "JavaScript"],
  },
];
