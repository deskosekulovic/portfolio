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
      <dt className="text-zinc-600 dark:text-zinc-400">{label}</dt>
      <dd className="truncate font-medium">{children}</dd>
    </div>
  );
}

export function ContactCard() {
  return (
    <div className="rounded-3xl border border-zinc-200/70 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">Currently</p>
          <p className="truncate text-base font-medium">
            Open to collaboration / job
          </p>
        </div>
        <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-zinc-100 dark:bg-white/10">
          <Image src="/me.jpg" alt="Avatar" fill sizes="40px" />
        </div>
      </div>

      <dl className="mt-6 grid gap-4 text-sm">
        <ContactRow label="Email">
          <a
            id="contact"
            href={`mailto:${profile.contact.email}`}
            className="hover:underline"
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
              className="hover:underline"
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
              className="hover:underline"
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
