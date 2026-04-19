import { ContactCard } from "./components/ContactCard";
import { ExperienceSection } from "./components/ExperienceSection";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export default function Home() {
  return (
    <div className="dark relative isolate min-h-full overflow-x-hidden bg-[#030306] font-sans text-zinc-300">
      {/* Deep base + colored atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(ellipse_100%_70%_at_50%_-30%,rgba(91,33,182,0.18),transparent_55%),radial-gradient(ellipse_80%_55%_at_100%_10%,rgba(79,70,229,0.12),transparent_50%),radial-gradient(ellipse_60%_45%_at_0%_90%,rgba(6,182,212,0.06),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 motion-reduce:animate-none animate-gradient-shift bg-linear-to-br from-zinc-950 via-[#0a0812] to-indigo-950/45 opacity-90"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed -left-32 top-1/4 -z-10 h-[min(85vw,560px)] w-[min(85vw,560px)] rounded-full bg-violet-600/18 blur-3xl motion-reduce:animate-none animate-float-orb"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed -right-28 bottom-0 -z-10 h-[min(75vw,480px)] w-[min(75vw,480px)] rounded-full bg-indigo-600/14 blur-3xl motion-reduce:animate-none animate-float-orb-slow"
      />

      <SiteHeader />

      <main className="mx-auto w-full max-w-5xl px-6 py-12 md:py-16">
        <HeroSection right={<ContactCard />} />
        <ExperienceSection />
        <ProjectsSection />
      </main>

      <SiteFooter />
    </div>
  );
}
