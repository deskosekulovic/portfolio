import { profile } from "../content";

export function SkillsSection() {
  if (!profile.skills) return null;

  return (
    <div className="mt-8 grid gap-4">
      <div>
        <h2 className="text-sm font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Skills
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {profile.skills.primary.map((t) => (
            <span
              key={t}
              className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700 dark:bg-white/10 dark:text-zinc-200"
            >
              {t}
            </span>
          ))}
        </div>
        {profile.skills.some.length ? (
          <p className="mt-3 text-xs text-zinc-600 dark:text-zinc-400">
            Some experience: {profile.skills.some.join(", ")}
          </p>
        ) : null}
        {profile.skills.languages.length ? (
          <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
            Languages: {profile.skills.languages.join(", ")}
          </p>
        ) : null}
      </div>
    </div>
  );
}

