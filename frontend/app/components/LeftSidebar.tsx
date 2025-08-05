import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function LeftSidebar() {
  return (
    <aside className="space-y-2">
      {/* User Info */}
      <div className="p-6 rounded-lg shadow-sm bg-teal-800 text-white flex flex-col gap-4">
        <div className="flex justify-center items-center flex-col gap-2">
          <Image
            src="/user.png"
            alt="user"
            height={40}
            width={40}
            className="rounded-full bg-white border-2"
          />
          <p className="text-sm text-teal-100 font-semibold">username</p>
        </div>
        <div className="flex justify-evenly">
          <p className="text-center text-sm font-normal text-neutral-300">
            <span className="text-teal-100 text-base font-semibold">12</span>
            <br /> Posts
          </p>
          <p className="text-center text-sm font-normal text-neutral-300">
            <span className="text-teal-100 text-base font-semibold">231</span>
            <br /> Followers
          </p>
          <p className="text-center text-sm font-normal text-neutral-300">
            <span className="text-teal-100 text-base font-semibold">126</span>
            <br /> Following
          </p>
        </div>
        <button className="group flex items-center justify-center bg-teal-400 text-neutral-900 text-base font-semibold px-4 py-3 rounded-2xl cursor-pointer">
          Profile{" "}
          <span>
            <ChevronsRight className="group-hover:translate-x-1.5 transition-all duration-200" />
          </span>
        </button>
      </div>

      {/* Tags */}
      <div className="p-6 rounded-lg shadow-sm bg-teal-800 h-full text-neutral-100">
        <h2 className="font-semibold text-lg mb-2">Topics</h2>
        <ul className="space-y-1 text-neutral-200">
          <li className="bg-teal-900 p-2 rounded-lg font-normal px-4">#tech</li>
          <li className="bg-teal-900 p-2 rounded-lg font-normal px-4">#life</li>
          <li className="bg-teal-900 p-2 rounded-lg font-normal px-4">
            #memes
          </li>
          <li className="bg-teal-900 p-2 rounded-lg font-normal px-4">#ai</li>
          <li className="bg-teal-900 p-2 rounded-lg font-normal px-4">
            #politics
          </li>
          <li className="bg-teal-900 p-2 rounded-lg font-normal px-4">
            #cinema
          </li>
        </ul>
      </div>
    </aside>
  );
}
