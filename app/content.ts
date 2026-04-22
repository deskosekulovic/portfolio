export type Project = {
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
  href?: string;
  link?: string;
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
  /** Short line under the role (also used for meta description when set). */
  tagline?: string;
  /** About / bio — one string per paragraph. */
  summary: string[];
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
  role: "Frontend-focused engineer",
  tagline:
    "React, Next.js & TypeScript — performance, real-time UX, production-ready interfaces.",
  location: "Republic of Serbia",
  address: "Save Kovacevica 24, Backo Dobro Polje",
  education: "MSc in Electrical and Computer Engineering",
  experienceYears: "7+ years",
  experience: [
    "Thrust - crypto startup (Sep 2025 – Mar 2026)",
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
    some: ["Node.js", "MongoDB", "PHP", "MySQL", "PostgreSQL"],
    languages: ["English (excellent communication)"],
  },
  summary: [
    "Frontend-focused engineer with 7+ years of experience building modern web applications, with a strong fullstack mindset when needed. I primarily work with React, Next.js, and TypeScript, and I enjoy turning complex product requirements into clean, scalable, and user-friendly solutions.",
    "Over the years, I've had the opportunity to work on a wide range of products — from cryptocurrency trading platforms and real-time consumer apps, to healthcare solutions and platforms that simplify building and permitting workflows. Working across these different domains helped me become comfortable with ambiguity and quick to adapt to new problem spaces.",
    "I'm especially interested in performance, real-time systems, and building responsive interfaces that feel fast and reliable even under heavy data load. Whether it's optimizing rendering, managing server state, or handling real-time updates, I like digging into the details that make an application feel smooth and production-ready.",
    "Although my main focus is frontend, I've also worked with backend technologies like Next.js API routes, REST, and GraphQL, which allows me to think beyond the UI and understand how data flows through the system end-to-end.",
    "I enjoy collaborating with teams, contributing to architecture decisions, and improving code quality through clean, maintainable solutions and thoughtful code reviews. I'm always looking for ways to balance simplicity with scalability — building things that work well today but are also ready to grow tomorrow.",
  ],
  highlights: [
    "7+ years shipping UIs across fintech, healthcare, consumer, and permitting domains",
    "React / Next.js / TypeScript; performance, real-time updates, and heavy data surfaces",
    "MSc Electrical & Computer Engineering; fullstack-aware (REST, GraphQL, Next.js APIs)",
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
    title: "Thrust - Crypto trading platform startup",
    description:
      "Developed real-time features for a consumer web app (chat, notifications) using Socket.IO. Designed scalable state management with React Query and Jotai for dynamic content feeds. Built performant UI for subscription and monetization features using Tailwind CSS and Radix UI. Worked closely with backend teams to integrate APIs and ensure a seamless user experience.",
    tags: ["React", "Jotai", "TypeScript", "Radix UI", "WebSockets"],
  },
  {
    title: "LiteBit (Web)",
    description:
      "Cryptocurrency trading platform. Users can trade 70+ coins via web platform and mobile application. Responsibilities included clean code structure, feature planning with the team, ensuring test coverage, technical documentation, Agile/Scrum work, and code reviews.",
    tags: ["React", "Redux", "TypeScript", "Radix UI"],
  },
  {
    title: "Umbrella",
    description:
      "Worked on module for creating topics/articles plus FAQs with simple answers or follow-up questions. Responsive UI for desktop and mobile (Android/iOS).",
    tags: ["React", "TypeScript", "GraphQL"],
  },
  {
    title: "GreenLite",
    description:
      "National permitting partner combining AI-powered software with licensed architects/engineers and former regulators to accelerate building permit approvals and reduce delays. Worked as frontend developer.",
    tags: ["Next.js", "TypeScript", "Styled Components"],
  },
  {
    title: "Cura - Medical asisance app",
    description:
      "Medical asisance app for patients and doctors. Aplication for online ordering presciptions and other medical products Built responsive UI for helping users to connect with medical experts. Worked as fullstack developer.",
    tags: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
  },
  {
    title:
      "Karcher - Cleaning equipment & full cleaning systems (responsive web app)",
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
];

export const githubProjects: Project[] = [
  {
    title: "portfolio",
    description: "My personal portfolio (Next.js + TypeScript).",
    href: "https://github.com/deskosekulovic/portfolio",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Snake-pixi",
    description:
      "Snake game built with Pixi.js. Porpuse of this project was to learn Pixi.js and refresh my knowledge of JavaScript.",
    href: "https://github.com/deskosekulovic/snake-pixi",
    tags: ["JavaScript", "TypeScript", "React", "Pixi.js", "HTML5", "CSS3"],
    link: "https://snake-pixi.vercel.app/",
  },
  {
    title: "weather-app-angular",
    description:
      "Weather app built with Angular. Porpuse of this project was to learn Angular and Angular Material.",
    href: "https://github.com/deskosekulovic/weather-app-angular",
    tags: ["Angular", "TypeScript", "Angular Material"],
  },
  {
    title: "Snake",
    description:
      "Classic Snake game. I built this game for my first technical interview. I got job offer after this interview :).",
    href: "https://github.com/deskosekulovic/Snake",
    tags: ["JavaScript", "React", "HTML5", "CSS3"],
  },
  {
    title: "yamb",
    description:
      "Yamb game (React + React Router + Styled Components). I wanted to build something that I like to play with my friends.",
    href: "https://github.com/deskosekulovic/yamb",
    tags: ["React", "JavaScript", "Styled Components"],
    link: "https://yamb-desko.vercel.app/",
  },
  {
    title: "yamb-redux",
    description:
      "Yamb game variant using Redux. Porpuse of this project was to learn Redux.",
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
    description:
      "My first React project - Weather app (React + Styled Components). Built with OpenWeather API.",
    href: "https://github.com/deskosekulovic/weather",
    tags: ["React", "JavaScript", "Styled Components"],
  },
  {
    title: "hackernews-redux",
    description:
      "Hacker News clone using Redux. Built with Hacker News API. Porpuse of this project was to learn Redux.",
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
