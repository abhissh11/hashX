"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between bg-teal-900 items-center p-4 h-16 gap-4 text-black">
      <Link href="/" className="text-xl text-white font-bold">
        Hash<span className="text-2xl text-orange-600">X</span>
      </Link>

      <SignedOut>
        <div className="flex gap-3">
          <Link
            href="/sign-in"
            className="bg-teal-800 text-white rounded-md text-sm px-5 py-3 hover:bg-teal-700"
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
