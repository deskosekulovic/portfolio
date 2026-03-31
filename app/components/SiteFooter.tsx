import { profile } from "../content";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200/70 py-10 dark:border-white/10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-6 text-sm text-zinc-600 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
