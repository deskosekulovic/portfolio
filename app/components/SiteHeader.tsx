import Link from "next/link";
import { profile } from "../content";
import { auth, signOut } from "@/lib/auth";

export async function SiteHeader() {
  const session = await auth();

  return (
    <header className="border-b border-zinc-200/70 dark:border-white/10">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
        <div className="flex flex-col">
          <span className="text-sm text-zinc-600 dark:text-zinc-400">
            Portfolio
          </span>
          <span className="text-lg font-semibold tracking-tight">
            {profile.name}
          </span>
        </div>
        <nav className="flex items-center gap-3 text-sm">
          <a
            href="#projects"
            className="rounded-full px-3 py-2 text-zinc-700 hover:bg-zinc-200/60 dark:text-zinc-200 dark:hover:bg-white/10"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="rounded-full px-3 py-2 text-zinc-700 hover:bg-zinc-200/60 dark:text-zinc-200 dark:hover:bg-white/10"
          >
            Contact
          </a>
          {session ? (
            <Link
              href="/dashboard"
              className="rounded-full px-3 py-2 text-zinc-700 hover:bg-zinc-200/60 dark:text-zinc-200 dark:hover:bg-white/10"
            >
              Dashboard
            </Link>
          ) : null}
          <Link
            href={session ? "#" : "/sign-in"}
            className="rounded-full px-3 py-2 text-zinc-700 hover:bg-zinc-200/60 dark:text-zinc-200 dark:hover:bg-white/10"
            onClick={async () => {
              "use server";
              if (session) {
                await signOut();
              }
            }}
          >
            {session ? "Sign Out" : "Sign In"}
          </Link>
        </nav>
      </div>
    </header>
  );
}
