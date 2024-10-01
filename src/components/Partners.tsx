"use client";
import React from "react";
import Image from "next/image";
import uci_dining from "../assets/UCI_DINING.png";
import uci_src from "../assets/src.png";
import uci_esw from "../assets/UCI_ESW.png";

const Partners = () => {
  return (
    <div className="pt-24 m-8">
      <div className="text-black/80 text-left py-4">
        <h2 className="text-4xl font-bold text-[#87b676]">Our Partners</h2>
        <h3 className="text-xl max-w-[700px] mt-4">
          Our partners support us to create a product that will...
        </h3>
      </div>
      <div className="flex flex-row items-center justify-center space-x-8">
        <Image src={uci_dining} width="100" alt="uci-dining" />
        <Image src={uci_src} width="100" alt="uci-src" />
        <Image src={uci_esw} width="100" alt="uci-esw" />
      </div>
    </div>
  );
};

export default Partners;
