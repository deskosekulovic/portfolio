import { auth } from "@/lib/auth";
import { SiteHeaderClient } from "./SiteHeaderClient";

export async function SiteHeader() {
  const session = await auth();

  return <SiteHeaderClient signedIn={!!session} />;
}

