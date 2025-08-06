"use client";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Feed from "../components/Feed";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function Home() {
  const { user, isLoaded, isSignedIn } = useUser();

  useEffect(() => {
    const createUserIfNotExists = async () => {
      if (!isLoaded || !user || !isSignedIn) return;

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              clerkId: user.id,
              username: user.username || user.id.slice(0, 8),
              bio: "",
              profileImage: user.imageUrl,
            }),
          }
        );

        const data = await res.json();
        console.log("[Mongo user ensured]", data);
      } catch (err) {
        console.error("[Failed to create user]", err);
      }
    };

    createUserIfNotExists();
  }, [isLoaded, isSignedIn, user]);
  return (
    <section className="min-h-screen bg-teal-200 text-black">
      <div className="max-w-7xl mx-auto px-4 py-2 grid grid-cols-1 md:grid-cols-12 gap-2">
        <div className="md:col-span-3">
          <LeftSidebar />
        </div>
        <div className="md:col-span-6">
          <Feed />
        </div>
        <div className="md:col-span-3">
          <RightSidebar />
        </div>
      </div>
    </section>
  );
}
