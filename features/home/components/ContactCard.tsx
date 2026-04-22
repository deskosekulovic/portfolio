"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { profile } from "@/app/content";
import { HoverLift, Item, Reveal, StaggerDl } from "@/features/ui/motion";

function ContactRow({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <dt className="shrink-0 font-mono text-[11px] font-medium uppercase tracking-wider text-violet-300/65">
        {label}
      </dt>
      <dd className="truncate text-right text-sm font-medium text-zinc-200">
        {children}
      </dd>
    </div>
  );
}

export function ContactCard() {
  return (
    <Reveal>
      <HoverLift className="rounded-3xl">
        <div className="rounded-3xl border border-white/12 bg-zinc-900/60 p-6 shadow-lg shadow-black/45 ring-1 ring-white/5 backdrop-blur-md md:p-7">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="font-mono text-[11px] font-medium uppercase tracking-wider text-violet-300/70">
                Currently
              </p>
              <p className="mt-1 truncate text-base font-semibold tracking-tight text-zinc-50">
                Open to collaboration / job
              </p>
            </div>
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl bg-zinc-800 ring-2 ring-violet-500/25">
              <Image src="/me.jpg" alt="Avatar" fill sizes="48px" />
            </div>
          </div>

          <StaggerDl className="mt-6 grid gap-4 text-sm">
            <Item>
              <ContactRow label="Email">
                <a
                  id="contact"
                  href={`mailto:${profile.contact.email}`}
                  className="text-violet-300 transition hover:text-violet-200 hover:underline"
                >
                  {profile.contact.email}
                </a>
              </ContactRow>
            </Item>

            {profile.address ? (
              <Item>
                <ContactRow label="Address">{profile.address}</ContactRow>
              </Item>
            ) : null}

            {profile.education ? (
              <Item>
                <ContactRow label="Education">{profile.education}</ContactRow>
              </Item>
            ) : null}

            {profile.experienceYears ? (
              <Item>
                <ContactRow label="Experience">{profile.experienceYears}</ContactRow>
              </Item>
            ) : null}

            {profile.contact.phone ? (
              <Item>
                <ContactRow label="Phone">{profile.contact.phone}</ContactRow>
              </Item>
            ) : null}

            {profile.contact.github ? (
              <Item>
                <ContactRow label="GitHub">
                  <a
                    href={profile.contact.github}
                    className="text-violet-300 transition hover:text-violet-200 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {profile.contact.github.replace(/^https?:\/\//, "")}
                  </a>
                </ContactRow>
              </Item>
            ) : null}

            {profile.contact.linkedin ? (
              <Item>
                <ContactRow label="LinkedIn">
                  <a
                    href={profile.contact.linkedin}
                    className="text-violet-300 transition hover:text-violet-200 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {profile.contact.linkedin.replace(/^https?:\/\//, "")}
                  </a>
                </ContactRow>
              </Item>
            ) : null}
          </StaggerDl>
        </div>
      </HoverLift>
    </Reveal>
  );
}

