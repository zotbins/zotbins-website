import React from "react";
import { FaYoutube, FaGithub, FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" py-8 bg-[#87b676] text-white flex flex-col items-center">
      <div className="text-xl flex flex-row space-x-8">
        <Link
          href={"https://www.linkedin.com/company/zotbins/"}
          target="_blank"
        >
          <CiLinkedin />
        </Link>
        <Link href={"https://www.instagram.com/zotbins/"} target="_blank">
          <FaInstagram />
        </Link>
        <Link href={"mailto:zotbinsuci@gmail.com"} target="_blank">
          <IoMailOutline />
        </Link>
        <Link
          href={"https://www.youtube.com/channel/UC0b3gQI-uJxT0_gnSBwXmNA"}
          target="_blank"
        >
          <FaYoutube />
        </Link>
        <Link href={"https://www.github.com/zotbins"} target="_blank">
          <FaGithub />
        </Link>
      </div>
      <p className="pt-8 text-sm">
        Copyright © ZotBins 2017 - {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
