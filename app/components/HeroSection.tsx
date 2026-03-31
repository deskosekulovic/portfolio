import type { ReactNode } from "react";
import { profile } from "../content";
import { SkillsSection } from "./SkillsSection";

export function HeroSection({ right }: { right?: ReactNode }) {
  return (
    <section className="grid gap-10 lg:grid-cols-12 items-start">
      <div className="lg:col-span-6">
        <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          {profile.role}
        </h1>
        {profile.location ? (
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
            {profile.location}
          </p>
        ) : null}

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
          {profile.summary}
        </p>

        <ul className="mt-6 grid gap-2 text-sm text-zinc-700 dark:text-zinc-300">
          {profile.highlights.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <SkillsSection />

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-black/8 px-5 py-3 text-sm font-medium transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
          >
            Contact
          </a>
        </div>
      </div>
      {right ? <div className="lg:col-span-6">{right}</div> : null}
    </section>
  );
}
