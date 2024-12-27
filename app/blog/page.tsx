"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Italiana } from "next/font/google";

// Load the Italiana font
const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
});

const Blogpage = () => {
  const router = useRouter();

  const Blogpost = [
    {
      id: 1,
      title: "What is HTML?",
      description: "HyperText Markup Language",
      content:
        "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content...",
      image: "/html.png",
      date: "25 December 2024",
    },
    {
      id: 2,
      title: "What is CSS?",
      description: "Cascading Style Sheets",
      content:
        "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML...",
      image: "/css.jpg",
      date: "25 December 2024",
    },
    {
      id: 3,
      title: "What is JS?",
      description: "JavaScript",
      content:
        "JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions...",
      image: "/js.jpg",
      date: "25 December 2024",
    },
    {
      id: 4,
      title: "What is TS?",
      description: "TypeScript",
      content:
        "TypeScript is a superset of JavaScript, meaning that everything available in JavaScript is also available in TypeScript...",
      image: "/ts.png",
      date: "25 December 2024",
    },
    {
      id: 5,
      title: "What is React?",
      description: "React",
      content:
        "React is a JavaScript library for building user interfaces. It lets you create reusable components to build dynamic and efficient web applications...",
      image: "/react.jpg",
      date: "25 December 2024",
    },
    {
      id: 6,
      title: "What is Next Js",
      description: "Next Js",
      content:
        "Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces...",
      image: "/nextjs.png",
      date: "25 December 2024",
    },
  ];

  return (
    <div className="bg-blue-50 md:px-10 px-4 py-12 font-[sans-serif]">
      <div className="max-w-5xl mx-auto">
        <h2
          className={`text-5xl font-extrabold text-blue-900 mb-8 text-center ${italiana.className}`}
        >
          Latest Blogs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Blogpost.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform 
              transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => router.push(`/blog/${post.id}`)}
            >
              <Image
                src={post.image}
                alt={post.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className={`${italiana.className} p-6`}>
                <h3 className="text-lg font-bold text-blue-900">{post.title}</h3>
                <p className="text-blue-900 mt-2  font-serif">{post.description}</p>
                <p className="text-blue-900 text-sm mt-4 font-serif">{post.date}</p>
                <button
                  className="mt-4 w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogpage;
