import Image from "next/image";
import type { ReactNode } from "react";
import { profile } from "../content";

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
    <div className="rounded-3xl border border-white/8 bg-zinc-950/55 p-6 shadow-lg shadow-black/40 backdrop-blur-md md:p-7">
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

      <dl className="mt-6 grid gap-4 text-sm">
        <ContactRow label="Email">
          <a
            id="contact"
            href={`mailto:${profile.contact.email}`}
            className="text-violet-300 transition hover:text-violet-200 hover:underline"
          >
            {profile.contact.email}
          </a>
        </ContactRow>

        {profile.address ? (
          <ContactRow label="Address">{profile.address}</ContactRow>
        ) : null}

        {profile.education ? (
          <ContactRow label="Education">{profile.education}</ContactRow>
        ) : null}

        {profile.experienceYears ? (
          <ContactRow label="Experience">{profile.experienceYears}</ContactRow>
        ) : null}

        {profile.contact.phone ? (
          <ContactRow label="Phone">{profile.contact.phone}</ContactRow>
        ) : null}

        {profile.contact.github ? (
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
        ) : null}

        {profile.contact.linkedin ? (
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
        ) : null}
      </dl>
    </div>
  );
}
