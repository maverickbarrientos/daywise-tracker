"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export function LogoutButton() {
  return (
    <Button
      onClick={() => {
        void signOut({ callbackUrl: "/login" });
      }}
      variant="outline"
    >
      Sign out
    </Button>
  );
}
