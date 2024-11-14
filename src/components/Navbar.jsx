import { useState } from "react";
import { close, parthmittal, menu } from "../assets";
import { navLinks } from "../constants";
import { scrollToSection } from "../lib/helperFunctions";
import { aboutMe } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full  flex justify-between items-center navbar">
      {/* Logo */}
      <a href="#home">
       
      <div className="mt-4 w-[250px] h-[60px] bg-primary p-[2px] rounded-md flex items-center justify-center relative">
        <div className="absolute left-0 top-0 h-full w-4 bg-gradient-to-t from-blue-400 to-purple-400 rounded-l-md"></div>
          <h1 className="font-poppins font-semibold text-[20px] text-white flex items-center justify-center">
            <span className="text-gradient">Rohit Kumar</span>
          </h1>
        <div className="absolute right-0 top-0 h-full w-4 bg-gradient-to-t from-purple-400 to-blue-400 rounded-r-md"></div>
      </div>






      </a>

      {/* List of links */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins
            font-normal
            cursor-pointer
            text-[16px]
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}
            text-white hover:text-teal-200`}
            onClick={() => scrollToSection(nav.id)}
          >
            {nav.title}
          </li>
        ))}
      </ul>

      {/* only for mobile devices, created separately */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {/* shows toggle icon based on its state */}
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          // correct way to change state using the prev
          // version of the same state using a callback function
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient
        absolute top-20 right-0 mx-4 my-2
        min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins
                font-normal
                cursor-pointer
                text-[16px]
                ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}
                text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
