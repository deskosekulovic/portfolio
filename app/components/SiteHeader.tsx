import Image from "next/image";
import Link from "next/link";
import { profile } from "../content";
import { auth } from "@/lib/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/dropdown";
import { SignOutMenuItem } from "./SignOutMenuItem";

export async function SiteHeader() {
  const session = await auth();

  return (
    <header className="sticky top-0 z-50 border-b border-white/6 bg-zinc-950/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
        <div className="flex flex-col gap-0.5">
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-violet-300/70">
            Portfolio
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-zinc-50">
            {profile.name}
          </span>
        </div>
        <nav className="flex items-center gap-1 text-sm sm:gap-2">
          <a
            href="#about"
            className="rounded-full px-3 py-2 text-zinc-300 transition hover:bg-white/8 hover:text-zinc-100"
          >
            About
          </a>
          <a
            href="#projects"
            className="rounded-full px-3 py-2 text-zinc-300 transition hover:bg-white/8 hover:text-zinc-100"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="rounded-full px-3 py-2 text-zinc-300 transition hover:bg-white/8 hover:text-zinc-100"
          >
            Contact
          </a>
          {session ? (
            <Link
              href="/dashboard"
              className="rounded-full px-3 py-2 text-zinc-300 transition hover:bg-white/8 hover:text-zinc-100"
            >
              Dashboard
            </Link>
          ) : null}
          {!session ? (
            <Link
              href="/sign-in"
              className="rounded-full px-3 py-2 text-zinc-300 transition hover:bg-white/8 hover:text-zinc-100"
            >
              Sign In
            </Link>
          ) : null}
          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Image
                  src="/me.jpg"
                  alt="User Avatar"
                  width={32}
                  height={32}
                  className="ml-1 cursor-pointer rounded-full object-cover ring-2 ring-violet-500/30"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <SignOutMenuItem />
              </DropdownMenuContent>
            </DropdownMenu>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
