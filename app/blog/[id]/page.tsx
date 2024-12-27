"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link"
import { Italiana } from "next/font/google";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
});


// BlogPost component
const BlogPost = ({ params }: { params: { id: string } }) => {
  const blogPost: Record<
    number,
    {
      title: string;
      content: string;
      date: string;
      image?: string;
      description: string;
      img: string;
      link?:string
    }
  > = {
    1: {
      title: "What is HTML?",
      description: "HyperText Markup Language",
      content:
        "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript)&apos;Hypertext&apos; refers to links that connect web pages to one another, either within a single website or between websites. Links are a fundamental aspect of the Web. By uploading content to the Internet and linking it to pages created by other people, you become an active participant in the World Wide Web.",
      image: "/html.png",
      date: "25 December 2024",
      img: "/ss1.png",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML"

    },
    2: {
      title: "What is CSS?",
      description: "Cascading Style Sheets",
      content: "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.CSS is among the core languages of the open web and is standardized across Web browsers according to W3C specifications. Previously, the development of various parts of CSS specification was done synchronously, which allowed the versioning of the latest recommendations. You might have heard about CSS1, CSS2.1, or even CSS3. There will never be a CSS3 or a CSS4; rather, everything is now just &apos;CSS&apos; with individual CSS modules having version numbers.",
      image: "/css.jpg",
      date: "25 December 2024",
      img: "/ss2.png",
      link:"https://developer.mozilla.org/en-US/docs/Web/Css"
    },
    3: {
      title: "What is JS?",
      description: "JavaScript",
      content:
        "JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.",
      image: "/js.jpg",
      date: "25 December 2024",
      img: "/ss3.png",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    4: {
      title: "What is TS?",
      description: "TypeScript",
      content: "TypeScript is a programming language that adds static type checking to JavaScript.TypeScript is a superset of JavaScript, meaning that everything available in JavaScript is also available in TypeScript, and that every JavaScript program is a syntactically legal TypeScript program. Also, the runtime behavior of TypeScript and JavaScript is identical.",
      image: "/ts.png",
      date: "25 December 2024",
      img: "/ss4.png",
      link: "https://www.typescriptlang.org/docs/"
    },
    5: {
      title: "What is React?",
      description: "React",
      content: "As its official tagline states, React is a library for building user interfaces. React is not a framework – it's not even exclusive to the web. It's used with other libraries to render to certain environments. For instance, React Native can be used to build mobile applications.To build for the web, developers use React in tandem with ReactDOM. React and ReactDOM are often discussed in the same spaces as — and utilized to solve the same problems as — other true web development frameworks. When we refer to React as a &apos;framework&apo;, we're working with that colloquial understanding.React's primary goal is to minimize the bugs that occur when developers are building UIs. It does this through the use of components — self-contained, logical pieces of code that describe a portion of the user interface. These components can be composed together to create a full UI, and React abstracts away much of the rendering work, leaving you to concentrate on the UI design.",
      image: "/react.jpg",
      date: "25 December 2024",
      img: "/ss5.png",
      link: "https://reactjs.org/docs/getting-started.html"
    },
    6: {
      title: "What is Next Js",
      description: "Next Js",
      content:
        "Next.js 15 is officially stable and ready for production. This release builds on the updates from both RC1 and RC2. We've focused heavily on stability while adding some exciting updates we think you'll love Here's what is new in Next.js 15 @next/codemod CLI: Easily upgrade to the latest Next.js and React versions. Async Request APIs (Breaking): Incremental step towards a simplified rendering and caching model.Caching Semantics (Breaking): fetch requests, GET Route Handlers, and client navigations are no longer cached by default.React 19 Support: Support for React 19, React Compiler (Experimental), and hydration error improvements.Turbopack Dev (Stable): Performance and stability improvements.Static Indicator: New visual indicator shows static routes during development.unstable_after API (Experimental): Execute code after a response finishes streaming.instrumentation.js API (Stable): New API for server lifecycle observability.Enhanced Forms (next/form): Enhance HTML forms with client-side navigation.next.config: TypeScript support for next.config.ts.Self-hosting Improvements: More control over Cache-Control headers.Server Actions Security: Unguessable endpoints and removal of unused actions.Bundling External Packages (Stable): New config options for App and Pages Router.ESLint 9 Support: Added support for ESLint 9.Development and Build Performance: Improved build times and Faster Fast Refresh.",
      image: "/nextjs.png",
      date: "25 December 2024",
      img: "/ss6.png",
      link: "https://nextjs.org/blog/next-15"
    },
  };

  const id = params.id;
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const postId = Number(id);
      const foundPost = blogPost[postId];

      setPost(foundPost);
    }
  }, [id]);

  // State for comment section
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  // Add a comment
  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  if (!post) {
    return <div className="text-center py-10">Post not found!</div>;
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen p-8 font-[sans-serif] max-w-full">
      <div className={`max-w-3xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden ${italiana.className}`}>
        <Image
          src={post.image || "/placeholder.png"}
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-80 object-cover rounded-t-lg"
        />
        <div className="p-8">
          <h1 className="text-4xl font-semibold text-blue-800 mb-4">
            {post.title}
          </h1>
          <p className="text-sm text-blue-500 mb-4 font-serif">{post.date}</p>
          <p className="text-gray-700 leading-relaxed mb-6 font-serif">{post.content}</p>
        </div>

        {/* Dynamic Image Section */}
        <div className="p-4 sm:p-6 md:p-8">
  <h2 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-4">
    Related Image
  </h2>
  <div className="relative w-full max-w-full overflow-hidden">
    <Image
      src={post.img || "/placeholder.png"}
      alt={`Related image for ${post.title}`}
      width={600}
      height={300}
      className="w-full h-auto object-cover rounded-lg"
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px" 
      priority
    />
  </div>
</div>

<div className="flex justify-center mt-6 sm:mt-8 md:mt-10">
  <Link href={post.link || "#"} passHref>
    <button className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 mb-3 bg-blue-500 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out shadow-md">
      Documentation
    </button>
  </Link>
</div>

        <div className="p-8 border-t border-blue-200 bg-blue-50">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Comments</h2>
          {comments.length > 0 ? (
            <ul className="space-y-4">
              {comments.map((comment, index) => (
                <li key={index} className="bg-blue-100 p-4 rounded-lg shadow-md">
                  {comment}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">
              No comments yet. Be the first to comment!
            </p>
          )}
          <div className="mt-6">
            <textarea
              className="w-full p-4 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 font-serif focus:ring-blue-500 transition duration-200 ease-in-out"
              rows={4}
              placeholder="Write your comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
            <button
              className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
              onClick={handleAddComment}
            >
              Add Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

