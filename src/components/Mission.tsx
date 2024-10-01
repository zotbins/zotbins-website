"use client";
import Link from "next/link";
import React from "react";

const Mission = () => {
  return (
    <div className="pt-24 m-8">
      <div className="text-black/80 text-left py-4">
        <h2 className="text-4xl font-bold text-[#87b676]">Our Mission</h2>
        <h3 className="text-xl max-w-[700px] mt-4">
          ZotBins is a smart waste bin system that collects data to help make
          waste management more efficient and to promote zero waste. We aim to
          deploy our final design at the Los Angeles Olympics in 2028!
        </h3>
      </div>
      <button className="bg-transparent hover:bg-[#87b676]/80 text-[#87b676] font-semibold hover:text-white py-2 px-4 border border-[#87b676] hover:border-transparent rounded">
        <Link href={"our-project"}>
          <p>Learn More</p>
        </Link>
      </button>
    </div>
  );
};

export default Mission;
