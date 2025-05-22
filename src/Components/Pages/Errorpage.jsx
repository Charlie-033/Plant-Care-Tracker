import React from "react";
import { Link } from "react-router";

const Errorpage = () => {
  return (
    <div class="bg-gradient-to-br from-indigo-100 to-purple-200 min-h-screen flex items-center justify-center p-4">
      <div class="max-w-2xl mx-auto text-center">
        <div class="relative flex items-center justify-center mb-8">
          <p class=" text-9xl font-bold text-green-600 opacity-30">
            404
          </p>
          <p class="text-2xl md:text-3xl lg:text-4xl -top-4 -right-4 font-bold text-red-600 opacity-30 absolute">
            Page Not Found
          </p>
        </div>

        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Lost in Space?
        </h1>
        <p class="text-lg text-gray-600 mb-8">
          The page you're looking for doesn't exist. Maybe it was moved, or
          maybe it never existed in the first place.
        </p>

        <Link
          to="/"
          class="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md transition duration-300 transform hover:scale-105"
        >
          Beam Me Back Home
        </Link>

        <p class="mt-10 text-sm text-gray-500">
          Meanwhile, here's a joke: Why did the web page go to therapy?
          <br />
          <span class="text-green-600">
            Because it had too many unresolved issues (404).
          </span>
        </p>
      </div>
    </div>
  );
};

export default Errorpage;
