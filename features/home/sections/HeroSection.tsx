import { profile } from "@/app/content";
import { Item, ItemLi, Reveal, Stagger } from "@/features/ui/motion";
import { SkillsSection } from "./SkillsSection";

export function HeroSection() {
  return (
    <section className="space-y-14 lg:space-y-20">
      <Stagger className="space-y-8">
        <Item>
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-violet-300/75">
              Portfolio
              {profile.experienceYears ? (
                <span className="text-zinc-500">
                  {" "}
                  · {profile.experienceYears}
                </span>
              ) : null}
            </p>
            <h1 className="font-display mt-4 bg-linear-to-br from-zinc-50 via-zinc-100 to-violet-200/90 bg-clip-text text-balance text-4xl font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-3 text-xl font-medium tracking-tight text-violet-200/95 md:text-2xl">
              {profile.role}
            </p>
            {profile.tagline ? (
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400">
                {profile.tagline}
              </p>
            ) : null}
            {profile.location ? (
              <p className="mt-3 text-sm text-zinc-500">{profile.location}</p>
            ) : null}
          </div>
        </Item>

        <Item>
          <ul className="grid max-w-3xl gap-3 text-sm leading-relaxed text-zinc-300 md:max-w-4xl">
            {profile.highlights.map((item) => (
              <ItemLi key={item} className="flex gap-3">
                <span
                  className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-violet-400"
                  aria-hidden
                />
                <span>{item}</span>
              </ItemLi>
            ))}
          </ul>
        </Item>

        <Item>
          <SkillsSection />
        </Item>
      </Stagger>

      <Reveal
        id="about"
        className="scroll-mt-28 rounded-3xl border border-white/12 bg-zinc-900/55 p-8 shadow-lg shadow-black/45 ring-1 ring-white/5 backdrop-blur-md md:p-10"
        delay={0.15}
      >
        <h2 className="font-display text-2xl font-semibold tracking-tight text-zinc-50 md:text-3xl">
          About
        </h2>
        <div className="mt-6 max-w-3xl space-y-5 text-pretty text-base leading-relaxed text-zinc-400">
          {profile.summary.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
