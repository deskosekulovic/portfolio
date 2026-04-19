import { profile } from "../content";

export function ExperienceSection() {
  if (!profile.experience?.length) return null;

  return (
    <section className="mt-12 rounded-3xl border border-white/8 bg-zinc-950/45 p-6 shadow-lg shadow-black/30 backdrop-blur-md md:p-8">
      <h2 className="font-display text-xl font-semibold tracking-tight text-zinc-50 md:text-2xl">
        Experience
      </h2>
      <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-violet-300/65">
        Recent roles
      </p>
      <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-zinc-300">
        {profile.experience.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span
              className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-cyan-400/80"
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
