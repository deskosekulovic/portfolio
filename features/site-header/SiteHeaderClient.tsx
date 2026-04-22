"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { profile } from "@/app/content";
import { HoverLift } from "@/features/ui/motion/motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/dropdown";
import { SignOutMenuItem } from "@/features/auth/sign-out";

export function SiteHeaderClient({ signedIn }: { signedIn: boolean }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/6 bg-zinc-950/70 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, y: -10, filter: "blur(10px)" }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        }}
      >
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
          <div className="flex flex-col gap-0.5">
            <span className="font-display text-lg font-semibold tracking-tight text-zinc-50">
              {profile.name}
            </span>
          </div>
          <nav className="flex items-center gap-1 text-sm sm:gap-2">
            <HoverLift className="inline-flex">
              <a
                href="#about"
                className="rounded-full px-3 py-2 text-zinc-300 transition hover:bg-white/8 hover:text-zinc-100"
              >
                About
              </a>
            </HoverLift>
            <HoverLift className="inline-flex">
              <a
                href="#projects"
                className="rounded-full px-3 py-2 text-zinc-300 transition hover:bg-white/8 hover:text-zinc-100"
              >
                Projects
              </a>
            </HoverLift>
            <HoverLift className="inline-flex">
              <a
                href="#contact"
                className="rounded-full px-3 py-2 text-zinc-300 transition hover:bg-white/8 hover:text-zinc-100"
              >
                Contact
              </a>
            </HoverLift>

            {signedIn ? (
              <HoverLift className="inline-flex">
                <Link
                  href="/dashboard"
                  className="rounded-full px-3 py-2 text-zinc-300 transition hover:bg-white/8 hover:text-zinc-100"
                >
                  Dashboard
                </Link>
              </HoverLift>
            ) : null}

            {!signedIn ? (
              <HoverLift className="inline-flex">
                <Link
                  href="/sign-in"
                  className="rounded-full px-3 py-2 text-zinc-300 transition hover:bg-white/8 hover:text-zinc-100"
                >
                  Sign In
                </Link>
              </HoverLift>
            ) : null}

            {signedIn ? (
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
      </motion.div>
    </header>
  );
}

