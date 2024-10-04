"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navLinks = [
  { title: "ZotBins", path: "/" },
  { title: "About", path: "about" },
  { title: "Our Project", path: "our-project" },
  { title: "Team", path: "team" },
  { title: "Contact", path: "contact" },
  { title: "Apply", path: "contact" },
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
          <Link href={"/"}>ZOTBINS</Link>
        </div>
        {/* About, Our Project, Team */}
        <div className="flex flex-1 justify-center">
          <ul className="flex flex-row">
            {navLinks.map(
              (link, index) =>
                link.title !== "ZotBins" &&
                link.title !== "Contact" &&
                link.title !== "Apply" && (
                  <li
                    className="px-8 flex text-nowrap justify-center items-center "
                    key={index}
                  >
                    <Link href={link.path}>
                      <p>{link.title}</p>
                    </Link>
                  </li>
                )
            )}
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
              target="_blank"
            >
              <p>Apply</p>
            </Link>
          </button>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex mx-8 justify-between items-center">
        {!nav && (
          <div className="md:hidden flex flex-1 pt-2 justify-start text-[#87b676]">
            <Link href={"/"}>ZOTBINS</Link>
          </div>
        )}
        <button
          onClick={toggleNav}
          className="md:hidden absolute top-5 right-5 p-2 z-50"
        >
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </button>
      </div>

      <div className="w-full z-4 bg-white">
        {nav && (
          <ul className="text-4xl font-semibold text-center space-y-16 h-screen flex flex-col justify-center">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={link.title === "ZotBins" ? "text-[#87b676]" : ""}
              >
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
