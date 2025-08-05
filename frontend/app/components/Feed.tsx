"use client";

import React, { useState } from "react";

export default function Feed() {
  const [activeTab, setActiveTab] = useState<"explore" | "following">(
    "explore"
  );

  return (
    <main className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-4 border-b pb-2">
        <button
          onClick={() => setActiveTab("explore")}
          className={`px-4 py-2 font-medium ${
            activeTab === "explore"
              ? "border-b-2 border-purple-600 text-purple-600"
              : "text-gray-500"
          }`}
        >
          Explore
        </button>
        <button
          onClick={() => setActiveTab("following")}
          className={`px-4 py-2 font-medium ${
            activeTab === "following"
              ? "border-b-2 border-purple-600 text-purple-600"
              : "text-gray-500"
          }`}
        >
          Following
        </button>
      </div>

      {/* Feed Content */}
      <div>
        {activeTab === "explore" ? (
          <div className="space-y-4">
            <div className="p-4 border rounded-lg shadow-sm">
              Explore Post 1
            </div>
            <div className="p-4 border rounded-lg shadow-sm">
              Explore Post 2
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="p-4 border rounded-lg shadow-sm">
              Following Post 1
            </div>
            <div className="p-4 border rounded-lg shadow-sm">
              Following Post 2
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
