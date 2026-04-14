import { Metadata } from "next";
import { ContactCard } from "./components/ContactCard";
import { ExperienceSection } from "./components/ExperienceSection";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export const metadata: Metadata = {
  title: "Portfolio | Desko Sekulovic",
  description: "Portfolio with basic information and list of projects.",
  openGraph: {
    title: "Portfolio | Desko Sekulovic",
    description: "Portfolio with basic information and list of projects.",
    images: ["/me.jpg"],
    url: "https://portfolio-desko.vercel.app/",
    siteName: "Portfolio | Desko Sekulovic",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <div className="min-h-full bg-zinc-50 font-sans text-zinc-950 dark:bg-black dark:text-zinc-50">
      <SiteHeader />

      <main className="mx-auto w-full max-w-5xl px-6 py-12">
        <HeroSection right={<ContactCard />} />
        <ExperienceSection />
        <ProjectsSection />
      </main>

      <SiteFooter />
    </div>
  );
}
