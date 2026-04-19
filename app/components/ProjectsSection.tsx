import Image from "next/image";
import { companyProjects, githubProjects } from "../content";

function ProjectGrid({
  projects,
}: {
  projects: {
    title: string;
    description: string;
    image?: { src: string; alt: string };
    href?: string;
    tags?: string[];
  }[];
}) {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {projects.map((p) => {
        const Card = (
          <article className="group flex h-full flex-col rounded-[1.75rem] border border-white/8 bg-zinc-950/50 p-6 shadow-lg shadow-black/30 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-violet-500/30 hover:bg-zinc-900/55 hover:shadow-violet-950/20">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="font-display text-lg font-semibold tracking-tight text-zinc-50">
                  {p.title}
                </h3>
                {p.tags?.length ? (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white/6 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wide text-violet-200/85"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
              {p.image ? (
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl bg-zinc-800 ring-1 ring-white/10">
                  <Image
                    src={p.image.src}
                    alt={p.image.alt}
                    fill
                    sizes="48px"
                  />
                </div>
              ) : null}
            </div>

            <p className="mt-4 line-clamp-4 flex-1 text-sm leading-6 text-zinc-400">
              {p.description}
            </p>

            {p.href ? (
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center text-sm font-medium text-violet-300"
              >
                <span className="underline underline-offset-4">Open</span>
                <span className="ml-1 transition group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            ) : null}
          </article>
        );

        return (
          <div key={p.title} className="h-full">
            {Card}
          </div>
        );
      })}
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="mt-16 scroll-mt-28 md:mt-20">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
            Projects
          </h2>
          <p className="mt-2 max-w-lg text-sm text-zinc-400">
            Work projects and personal projects.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h3 className="font-display text-xl font-semibold tracking-tight text-zinc-100">
              Work projects
            </h3>
            <p className="mt-1 text-sm text-zinc-400">
              Delivered with teams in production environments.
            </p>
          </div>
        </div>
        <ProjectGrid projects={companyProjects} />
      </div>

      <div className="mt-14">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h3 className="font-display text-xl font-semibold tracking-tight text-zinc-100">
              GitHub projects
            </h3>
            <p className="mt-1 text-sm text-zinc-400">
              Public repositories and experiments.
            </p>
          </div>
        </div>
        <ProjectGrid projects={githubProjects} />
      </div>
    </section>
  );
}
