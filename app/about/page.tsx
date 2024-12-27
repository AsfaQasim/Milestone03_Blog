import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Italiana } from "next/font/google";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
});


const About = () => {
  return (
    <div className="bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50 min-h-screen flex flex-col items-center justify-center py-12">
      <div id="about" className="max-w-6xl mx-auto px-5">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center mb-16 md:mb-0">
              <h1 className={`text-5xl font-bold text-blue-900 mb-6 ${italiana.className}`}>
                I am Asifa Qasim
              </h1>
              <p className="leading-relaxed text-lg max-w-lg text-gray-700 mb-6">
                Welcome to my blog! I'm Asifa, a passionate web developer
                dedicated to exploring and sharing the world of web development.
              </p>
              <p className="leading-relaxed text-lg max-w-lg text-gray-700 mb-8">
                Join me as I dive deep into the ever-evolving landscape of web
                development and explore new trends, techniques, and tools to
                build powerful and efficient websites.
              </p>
              <Link href = "/blog">
              <button className={`px-6 py-3 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800 transition-all ${italiana.className}`}>
                Explore My Blog
              </button>
              </Link>
            </div>
            <div className="md:w-1/2 lg:w-1/3 lg:pl-10 md:pl-5 flex justify-center">
              <Image
                src="/mypics.jpg"
                alt="Asifa Qasim"
                width={300}
                height={300}
                className="rounded-full shadow-xl object-cover border-4 border-blue-700"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
