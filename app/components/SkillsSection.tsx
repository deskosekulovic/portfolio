import { profile } from "../content";

export function SkillsSection() {
  if (!profile.skills) return null;

  return (
    <div className="mt-2 grid gap-4">
      <div>
        <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-300/75">
          Skills
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {profile.skills.primary.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-200"
            >
              {t}
            </span>
          ))}
        </div>
        {profile.skills.some.length ? (
          <p className="mt-3 text-xs leading-relaxed text-zinc-400">
            <span className="font-mono text-[10px] uppercase tracking-wider text-violet-300/55">
              Some experience
            </span>
            {": "}
            {profile.skills.some.join(", ")}
          </p>
        ) : null}
        {profile.skills.languages.length ? (
          <p className="mt-2 text-xs text-zinc-400">
            <span className="font-mono text-[10px] uppercase tracking-wider text-violet-300/55">
              Languages
            </span>
            {": "}
            {profile.skills.languages.join(", ")}
          </p>
        ) : null}
      </div>
    </div>
  );
}
