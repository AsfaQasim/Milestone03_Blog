"use client";

import React from "react";
import { Roboto } from "next/font/google";
import Typewriter from "typewriter-effect";
import Image from "next/image";

// Importing Roboto font
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const Hero = () => {
  return (
    <div
      className={`relative flex items-center justify-center h-screen text-center px-4 sm:px-8 ${roboto.className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/pic.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={75}
          className="opacity-50"
          priority
        />
      </div>

      {/* Centered Content */}
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-4 text-4xl sm:text-5xl font-bold text-black">
          Welcome to MY Blogs
        </h1>

        {/* Typewriter Effect */}
        <div className="text-lg sm:text-2xl text-gray-800 leading-relaxed">
          <Typewriter
            options={{
              strings: [
                "Web development transforms ideas into functional and visually appealing digital experiences. It's the backbone of creating websites that connect people and businesses worldwide.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
