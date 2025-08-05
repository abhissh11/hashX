import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-teal-400 min-h-screen p-6 md:p-12">
      <div className="text-black bg-teal-100 lg:h-[85svh] md:flex md:flex-row justify-evenly flex flex-col items-center rounded-4xl">
        <div className="flex justify-center items-center flex-col h-full leading-4 gap-4">
          <h1 className="text-2xl pt-6 md:text-4xl font-mono font-extrabold text-center">
            Engage, Evolve, Excel, <br /> Social Evolution
          </h1>
          <p className="text-base font-normal text-center text-neutral-700">
            Crafting social experiences that resonate, inspire <br /> and
            connect to real people.
          </p>
          <Link href="/home">
            <button className="group px-6 py-2 rounded-2xl bg-black text-white flex items-center gap-1 cursor-pointer hover:scale-105 transition-all">
              Get Started
              <span>
                <ArrowUpRight
                  size={34}
                  className="bg-teal-600 p-2 rounded-full group-hover:rotate-45 transition-all"
                />
              </span>
            </button>
          </Link>
        </div>
        {/* Image with floating social icons */}
        <div className="relative mt-8">
          <Image
            src="/hero-girl.png"
            alt="hero"
            width={300}
            height={300}
            className="rounded-full"
          />
          <div className="absolute -top-4 -left-4 bg-white p-2 rounded-full shadow">
            <FaFacebookF className="text-blue-600" />
          </div>
          <div className="absolute -top-4 -right-4 bg-white p-2 rounded-full shadow">
            <FaInstagram className="text-pink-500" />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-white p-2 rounded-full shadow">
            <FaTwitter className="text-blue-400" />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white p-2 rounded-full shadow">
            <FaYoutube className="text-red-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
