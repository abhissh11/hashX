"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 h-16 gap-4">
      <Link href="/" className="text-xl font-bold">
        Hash<span className="text-2xl text-purple-600">X</span>
      </Link>

      <SignedOut>
        <div className="flex gap-3">
          <Link
            href="/sign-in"
            className="bg-purple-500 text-white rounded-md text-sm px-4 py-2 hover:bg-purple-600"
          >
            Sign In
          </Link>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="h-full border-2 rounded-full border-purple-600">
          <UserButton afterSignOutUrl="/" />
        </div>
      </SignedIn>
    </header>
  );
}
