"use client";

import { signOut } from "next-auth/react";

export function handleLogout() {
  signOut({ callbackUrl: "/" });
}
