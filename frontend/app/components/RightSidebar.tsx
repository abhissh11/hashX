import Link from "next/link";
import React from "react";

export default function RightSidebar() {
  return (
    <aside className="space-y-2">
      {/* About Me */}
      <div className="p-6 rounded-lg shadow-sm bg-teal-800 text-white flex flex-col gap-4">
        <h2 className="font-semibold text-lg mb-1">About Me</h2>
        <p className="text-sm text-neutral-300">
          Hi, I’m Abhishek Kumar, a fullstack developer experienced in building
          MERN and Next.js end-to-end application. I have 4 months frontend
          development experience as well as have worked as freelancer and have
          delivered web applications in MERN and Next.js and got positive
          reviews. <br /> Actively looking for full-time / part-time /
          internship roles.
        </p>
        <button className="flex items-center justify-center bg-teal-400 text-neutral-800 text-base font-semibold px-4 py-3 rounded-2xl cursor-pointer">
          abhishekkr.ssh@gmail.com
        </button>
      </div>

      {/* Links */}
      <div className="p-6 rounded-lg shadow-sm bg-teal-800 text-white flex flex-col gap-2">
        <h2 className="font-semibold text-lg">Connect With Me</h2>
        <ul className="flex flex-col">
          <Link
            href="https://linkedin/in/abhishekkr-dev"
            target="_blank"
            className="hover:bg-teal-900 rounded-lg text-neutral-300 px-4 py-2"
          >
            <span>LinkedIn</span>
          </Link>
          <Link
            href="https://abhish.tech"
            target="_blank"
            className="hover:bg-teal-900 rounded-lg text-neutral-300 px-4 py-2"
          >
            <span>Portfolio</span>
          </Link>
          <Link
            href="mailto:abhishekkr.ssh@gmail.com"
            target="_blank"
            className="hover:bg-teal-900 rounded-lg text-neutral-300 px-4 py-2"
          >
            <span>Email</span>
          </Link>
          <Link
            href="https://github.com/abhissh11"
            target="_blank"
            className="hover:bg-teal-900 rounded-lg text-neutral-300 px-4 py-2"
          >
            <span>GitHub</span>
          </Link>
        </ul>
      </div>
    </aside>
  );
}
