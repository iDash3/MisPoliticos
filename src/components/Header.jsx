import React, { useState } from "react";

import logo from "../logo3.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [block, setBlock] = useState(false);

  return (
    <div>
      <nav class="bg-white dark:bg-gray-800  shadow py-4 ">
        <div class="max-w-7xl mx-auto px-8">
          {/* Header container */}
          <div class="flex items-center justify-between h-16">
            <div class=" flex items-center">
              {/* Logo */}
              <Link to="/">
                <a class="flex-shrink-0" href="/">
                  <img class="h-20 w-20" src={logo} alt="Logo" />
                </a>
              </Link>

              {/* Links */}
              <div class="md:block hidden">
                <div class="ml-10 flex items-baseline space-x-4">
                  <Link to="/">
                    <a
                      href="/"
                      class="text-gray-800 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    >
                      Inicio
                    </a>
                  </Link>
                  <Link to="mission">
                    <a
                      href="/mission"
                      class="text-gray-800  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    >
                      Misión y Objetivos
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            {/* Seach Block */}
            <div class="block">
              <div class="md:block hidden -mr-2 flex">
                <form class="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                  <div class=" relative ">
                    <input
                      type="text"
                      id='"form-subscribe-Search'
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Escribe aquí..."
                    />
                  </div>
                  <button
                    class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                    type="submit"
                  >
                    Buscar
                  </button>
                </form>
              </div>
              <div class="ml-4 flex items-center md:ml-6"></div>
            </div>

            {/* Mobile block button */}
            <div class="-mr-2 flex md:hidden">
              <button
                onClick={() => {
                  setBlock(!block);
                }}
                class="text-gray-800 dark:text-white inline-flex items-center justify-center p-2 rounded-md   focus:outline-none"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="h-8 w-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {block && (
          <div class="md:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="mission">
                <a
                  href="/"
                  class="text-gray-800 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Inicio
                </a>
              </Link>
              <Link to="mission">
                <a
                  href="/mission"
                  class="text-gray-800 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Misión y Objetivos
                </a>
              </Link>
            </div>

            {/* Search on mobile */}
            <div class="p-2 flex">
              <form class="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                <div class=" relative ">
                  <input
                    type="text"
                    id='"form-subscribe-Search'
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Nombre"
                  />
                </div>
                <button
                  class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                  type="submit"
                >
                  Buscar
                </button>
              </form>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
