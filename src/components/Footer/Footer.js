import React from "react";

function Footer() {
  return (
    <div>
      <footer className="p-4 mt-10 bg-white rounded-lg shadow md:flex md:items-center md:justify-center md:p-6 ">
        <span className="text-sm text-gray-500 sm:text-center ">
          © 2023{" "}
          <a href="/" className="hover:underline">
            Task
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}

export default Footer;
