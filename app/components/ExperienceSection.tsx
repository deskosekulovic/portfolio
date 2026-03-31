import { profile } from "../content";

export function ExperienceSection() {
  if (!profile.experience?.length) return null;

  return (
    <section className="mt-12 rounded-3xl border border-zinc-200/70 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
      <h2 className="text-lg font-semibold tracking-tight">Experience</h2>
      <ul className="mt-4 grid gap-2 text-sm text-zinc-700 dark:text-zinc-300">
        {profile.experience.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

