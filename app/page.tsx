import { ContactCard, ExperienceSection, HeroSection, ProjectsSection } from "@/features/home";
import { SiteFooter } from "@/features/site-footer";
import { SiteHeader } from "@/features/site-header";

export default function Home() {
  return (
    <div className="dark relative isolate min-h-full bg-[#050514] font-sans text-zinc-300">
      {/* Subtle side atmosphere (keeps base from pure-black) */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_55%_70%_at_0%_55%,rgba(79,70,229,0.12),transparent_60%),radial-gradient(ellipse_55%_70%_at_100%_60%,rgba(139,92,246,0.10),transparent_60%)]"
      />
      <SiteHeader />

      <main className="mx-auto w-full max-w-5xl overflow-x-hidden px-6 py-12 md:py-16">
        <HeroSection right={<ContactCard />} />
        <ExperienceSection />
        <ProjectsSection />
      </main>

      <SiteFooter />
    </div>
  );
}
