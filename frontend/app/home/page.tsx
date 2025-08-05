import dynamic from "next/dynamic";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Feed from "../components/Feed";

export default function Home() {
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
