"use client";

import { DropdownMenuItem } from "@/components/dropdown";
import { LogOutIcon } from "lucide-react";
import { signOut } from "next-auth/react";

export function SignOutMenuItem() {
  return (
    <DropdownMenuItem
      onClick={() => signOut({ redirectTo: "/" })}
      className="cursor-pointer"
    >
      <LogOutIcon className="mr-2 h-4 w-4" />
      Sign Out
    </DropdownMenuItem>
  );
}
