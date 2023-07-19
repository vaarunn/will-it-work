"use client";
import { useState } from "react";

interface CustomDropdownProps {
  links: string[]; // Assuming links is an array of strings
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedLink, setSelectedLink] = useState<string>("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link: string) => {
    link = link.replace("#", "");
    setSelectedLink(link);
    setIsOpen(false);
  };

  return (
    <div
      onClick={toggleDropdown}
      className="fixed py-2 rounded-xl bg-[#1f2937] w-[80%] lg:w-[50%] top-[0]"
    >
      <button type="button" className="w-[100%]">
        {selectedLink || "Table of content"}
      </button>
      {isOpen && (
        <ul className="list-disc ml-[30%] md:ml-[40%] lg:ml-[40%]">
          {links.map((link) => (
            <li
              className="my-2 underline w-full"
              key={link}
              onClick={() => handleLinkClick(link)}
            >
              <a href={link}>{link.replace(/^#/, "")}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
