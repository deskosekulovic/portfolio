import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import { profile } from "@/app/content";

function allowedEmails(): string[] {
  const raw = process.env.AUTH_ALLOWED_EMAILS?.trim();
  if (raw) {
    return raw
      .split(",")
      .map((e) => e.trim().toLowerCase())
      .filter(Boolean);
  }
  return [profile.contact.email.toLowerCase()];
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [Github],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "github") return false;
      const email = user.email?.toLowerCase();
      if (!email) return false;
      return allowedEmails().includes(email);
    },
  },
});
