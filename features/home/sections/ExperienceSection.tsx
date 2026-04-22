import { profile } from "@/app/content";
import { ItemLi, Reveal, StaggerList } from "@/features/ui/motion";

export function ExperienceSection() {
  if (!profile.experience?.length) return null;

  return (
    <Reveal className="mt-12 rounded-3xl border border-white/12 bg-zinc-900/55 p-6 shadow-lg shadow-black/35 ring-1 ring-white/5 backdrop-blur-md md:p-8">
      <h2 className="font-display text-xl font-semibold tracking-tight text-zinc-50 md:text-2xl">
        Experience
      </h2>
      <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-violet-300/65">
        Recent roles
      </p>
      <StaggerList className="mt-5 grid gap-3 text-sm leading-relaxed text-zinc-300">
        {profile.experience.map((item) => (
          <ItemLi key={item} className="flex items-start gap-3">
            <span
              className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-cyan-400/80"
              aria-hidden
            />
            <span>{item}</span>
          </ItemLi>
        ))}
      </StaggerList>
    </Reveal>
  );
}
