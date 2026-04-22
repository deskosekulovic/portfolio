import { profile } from "@/app/content";

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-white/6 bg-zinc-950/40 py-10 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-5xl px-6 text-sm text-zinc-400">
        <p className="text-zinc-300">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}

