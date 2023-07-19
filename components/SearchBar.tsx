"use client";
import React, { useState } from "react";

const SearchBar = ({ setQuery, setTagFilter, tagFilter }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleTagFilter = (tag) => {
    setTagFilter(tag);
    setIsDropdownOpen(false); // Close the dropdown after selecting a tag
  };

  const tags = [
    {
      text: "all tags",
      value: "",
    },
    {
      text: "qrcode",
      value: "qrcode",
    },
    {
      text: "mylife",
      value: "mylife",
    },
    {
      text: "aws",
      value: "aws",
    },
    {
      text: "coding",
      value: "coding",
    },
  ];

  return (
    <form className="my-8">
      <div className="flex ">
        <button
          id="dropdown-button"
          data-dropdown-toggle="dropdown"
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center    rounded-l-lg    bg-gray-700 hover:bg-gray-600  text-white  relative "
          type="button"
          onClick={toggleDropdown}
        >
          {tagFilter}
          <svg
            className={`w-2.5 h-2.5 ml-2.5 transition-transform transform ${
              isDropdownOpen ? "-rotate-180" : "rotate-0"
            }`} // Rotate the icon based on dropdown state
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        <div
          id="dropdown"
          className={`z-10 ${
            isDropdownOpen ? "" : "hidden"
          } bg-gray-700 absolute rounded-xl`}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200 "
            aria-labelledby="dropdown-button"
          >
            {tags.map((tag) => {
              return (
                <li key={tag.text} onClick={() => handleTagFilter(tag.value)}>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2  hover:bg-gray-600 hover:text-white"
                  >
                    {tag.text}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900  bg-gray-700  placeholder-gray-400 dark:text-white 
            outline-none"
            placeholder="Search Blogs"
            required
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
