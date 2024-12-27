import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-blue-50">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          {/* Logo and Name */}
          <a
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            href="/"
          >
            <span className="ml-3 text-xl">
              Asifa M.Qasim ❤️
            </span>
          </a>

          {/* Footer Text */}
         
          <div className="text-center mt-4 px-32">
  <p className="text-sm text-gray-500">
    © 2024 Mastering Web Development. All rights reserved.
  </p>
  <p className="text-sm text-gray-500 mt-2">
    Learn the fundamentals and advanced techniques of HTML, CSS,
    JavaScript, TypeScript, React, and Next.js.
  </p>
</div>



          {/* Social Media Links */}
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            {/* Facebook */}
            <Link
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61556456222532"
              className="text-gray-500 w-5 h-5 mr-3 hover:text-blue-500"
              aria-label="Facebook"
            >
              <FaFacebook className="hover:text-blue-500" />
            </Link>

            {/* GitHub */}
            <Link
              target="_blank"
              href="https://github.com/AsfaQasim?tab=repositories"
              className="text-gray-500 w-5 h-5 mr-3 hover:text-gray-700"
              aria-label="GitHub"
            >
              <FaGithub className="hover:text-gray-700" />
            </Link>

            {/* LinkedIn */}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/asifa-muhammad-qasim-006120305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="text-gray-500 w-5 h-5 hover:text-blue-500"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="hover:text-blue-500" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
