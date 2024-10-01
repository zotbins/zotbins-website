"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navLinks = [
  { title: "About", path: "about" },
  { title: "Our Project", path: "our-project" },
  { title: "Team", path: "team" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="pt-6">
      {/* Desktop View */}
      <div className="hidden md:flex mx-8 justify-between items-center">
        {/* Logo */}
        <div className="flex flex-1 justify-start text-[#87b676]">
          <Link href={"/"}>LOGO</Link>
        </div>
        {/* About, Our Project, Team */}
        <div className="flex flex-1 justify-center">
          <ul className="flex flex-row space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path}>
                  <p>{link.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact, Apply */}
        <div className="flex flex-1 justify-end">
          <Link href={"contact"}>
            <p className="py-2 px-8">Contact</p>
          </Link>
          <button className="bg-[#87b676] hover:bg-[#87b676]/80 text-white font-bold py-2 px-4 rounded">
            <Link
              href={"https://airtable.com/appzF8nZcqC7jK3Dl/shrusFzrb8htRaWjz"}
            >
              <p>Apply</p>
            </Link>
          </button>
        </div>
      </div>
      {/* Mobile View */}
      <div
        onClick={toggleNav}
        className="md:hidden absolute top-5 right-5 p-2 z-50"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div className="fixed left-0 top-0 w-full z-40">
        {nav && (
          <ul className="text-4xl font-semibold my-24 text-center space-y-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path} onClick={closeNav}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
