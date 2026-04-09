import React, { useState } from "react";

export default function SearchBar({ placeholder = "Search movies..." }) {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full max-w-xl mx-auto relative mt-6">
      {/* Input Field */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full px-6 py-4 rounded-full bg-gray-900/80 text-white placeholder-gray-400 backdrop-blur-sm border border-gray-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
      />

      {/* Search Button (inside the input) */}
      <button
        onClick={() => console.log("Searching:", query)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg shadow-blue-600/20 transition-all duration-300"
      >
        {/* Magnifying Glass Icon */}
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
}