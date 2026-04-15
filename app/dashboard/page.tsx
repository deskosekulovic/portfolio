import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import DashboardLayout from "@/features/dashboard/page";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return <DashboardLayout />;
}
