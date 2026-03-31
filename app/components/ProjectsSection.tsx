import Image from "next/image";
import { projects } from "../content";

export function ProjectsSection() {
  return (
    <section id="projects" className="mt-14">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Selected projects on which I worked.
          </p>
        </div>
        <span className="text-sm text-zinc-500 dark:text-zinc-400">
          {projects.length} total
        </span>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {projects.map((p) => {
          const Card = (
            <article className="group h-full rounded-3xl border border-zinc-200/70 bg-white p-6 shadow-sm transition-colors hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-950 dark:hover:bg-white/5">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  {p.tags?.length ? (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700 dark:bg-white/10 dark:text-zinc-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
                {p.image ? (
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-200/60 dark:bg-white/10 dark:ring-white/10">
                    <Image
                      src={p.image.src}
                      alt={p.image.alt}
                      fill
                      sizes="48px"
                    />
                  </div>
                ) : null}
              </div>

              <p className="mt-4 line-clamp-4 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                {p.description}
              </p>

              {p.href ? (
                <p className="mt-5 text-sm font-medium text-zinc-950 dark:text-zinc-50">
                  <span className="underline underline-offset-4">
                    Open project
                  </span>
                  <span className="ml-1 opacity-70">→</span>
                </p>
              ) : (
                <p className="mt-5 text-xs text-zinc-500 dark:text-zinc-400">
                  Link not added
                </p>
              )}
            </article>
          );

          return p.href ? (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="block h-full"
            >
              {Card}
            </a>
          ) : (
            <div key={p.title} className="h-full">
              {Card}
            </div>
          );
        })}
      </div>
    </section>
  );
}
