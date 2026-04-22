import { profile } from "@/app/content";
import { HoverLift, Item, Reveal, Stagger } from "@/features/ui/motion";

export function SkillsSection() {
  if (!profile.skills) return null;

  return (
    <Reveal className="mt-6 rounded-3xl border border-white/12 bg-[radial-gradient(ellipse_120%_80%_at_40%_0%,rgba(139,92,246,0.15),transparent_55%),linear-gradient(to_bottom_right,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-lg shadow-black/35 ring-1 ring-white/5 backdrop-blur-md">
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-200/85">
            Skills
          </h2>
          <p className="mt-1 text-xs text-zinc-400">
            Primary stack I reach for most often.
          </p>
        </div>
        <span className="hidden rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-violet-200/85 sm:inline-flex">
          Frontend
        </span>
      </div>

      <Stagger className="mt-4 flex flex-wrap gap-2">
        {profile.skills.primary.map((t) => (
          <Item key={t}>
            <HoverLift>
              <span className="inline-flex cursor-default rounded-full border border-white/12 bg-white/6 px-3 py-1 text-xs font-medium text-zinc-100 shadow-sm shadow-black/10 transition hover:border-violet-400/25 hover:bg-violet-500/10 hover:text-violet-100">
                {t}
              </span>
            </HoverLift>
          </Item>
        ))}
      </Stagger>

      <div className="mt-5 grid gap-2">
        {profile.skills.some.length ? (
          <p className="text-xs leading-relaxed text-zinc-400">
            <span className="font-mono text-[10px] uppercase tracking-wider text-violet-300/60">
              Some experience
            </span>
            {": "}
            {profile.skills.some.join(", ")}
          </p>
        ) : null}
        {profile.skills.languages.length ? (
          <p className="text-xs text-zinc-400">
            <span className="font-mono text-[10px] uppercase tracking-wider text-violet-300/60">
              Languages
            </span>
            {": "}
            {profile.skills.languages.join(", ")}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
