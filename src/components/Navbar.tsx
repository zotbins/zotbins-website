"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import zotbins_logo from "../../public/assets/zotbins_logo.svg";

const navLinks = [
  { title: "ZotBins", path: "/" },
  { title: "About", path: "about" },
  { title: "Our Project", path: "our-project" },
  { title: "Team", path: "team" },
  { title: "Contact", path: "contact" },
  { title: "Apply", path: "apply" },
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
        <div className="flex flex-1 justify-start transition duration-300 ease-in-out hover:-translate-y-1">
          <Link href={"/"}>
            <Image
              width={30}
              height={30}
              src={zotbins_logo}
              alt="zotbins_logo"
            />
          </Link>
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
                    className="px-6 flex text-nowrap justify-center items-center"
                    key={index}
                  >
                    <Link href={link.path}>
                      <p className="transition duration-300 ease-in-out hover:text-[#87b676] hover:-translate-y-1 hover:scale-110 text-gray-600">{link.title}</p>
                    </Link>
                  </li>
                )
            )}
          </ul>
        </div>
        {/* Contact, Apply */}
        <div className="flex flex-1 justify-end">
          <Link href={"contact"}>
            <p className="py-2 px-6 transition duration-300 ease-in-out hover:text-[#87b676] hover:-translate-y-1 hover:scale-110 text-gray-600">Contact</p>
          </Link>
          <button className="bg-[#87b676] hover:bg-[#87b676]/80 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out hover:text-white hover:-translate-y-1 hover:scale-110">
            <Link href={"apply"}>
              <p>Apply</p>
            </Link>
          </button>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex mx-8 justify-between items-center">
        {!nav && (
          <div className="md:hidden flex flex-1 justify-start align-middle text-[#87b676]">
            <Link href={"/"}>
              <Image
                width={30}
                height={30}
                src={zotbins_logo}
                alt="zotbins_logo"
              />
            </Link>
          </div>
        )}
        <button onClick={toggleNav} className="md:hidden z-50">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </button>
      </div>

      <div className="w-full z-4 bg-white">
        {nav && (
          <ul className="text-4xl font-semibold text-center space-y-16 h-screen flex flex-col justify-center">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={
                  link.title === "ZotBins"
                    ? "text-[#87b676] transition duration-300 ease-in-out hover:text-gray-600 hover:-translate-y-1 hover:scale-110"
                    : "hover:text-gray-600 transition duration-300 ease-in-out hover:text-[#87b676] hover:-translate-y-1 hover:scale-110"
                }
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
