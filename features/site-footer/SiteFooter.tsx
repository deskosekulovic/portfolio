import { profile } from "@/app/content";
import { GithubIcon } from "@/features/ui/icons/github";
import { LinkedInIcon } from "@/features/ui/icons/linkedin";
import { MailIcon } from "@/features/ui/icons/mail";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="mt-8 scroll-mt-28 border-t border-white/10 bg-zinc-950/45 py-10 backdrop-blur-md"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-zinc-300">
          © {new Date().getFullYear()} {profile.name}
        </p>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.contact.email}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-200 transition hover:border-violet-400/35 hover:bg-violet-500/10 hover:text-violet-100"
            aria-label="Email"
          >
            <MailIcon className="h-5 w-5" />
          </a>

          {profile.contact.github ? (
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-200 transition hover:border-violet-400/35 hover:bg-violet-500/10 hover:text-violet-100"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
          ) : null}

          {profile.contact.linkedin ? (
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-200 transition hover:border-violet-400/35 hover:bg-violet-500/10 hover:text-violet-100"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}

