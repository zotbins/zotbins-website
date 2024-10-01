"use client";
import Link from "next/link";
import React from "react";

const Introduction = () => {
  return (
    <div className="pt-24">
      <div className="text-black/80 font-bold text-center">
        <h1 className="text-8xl text-[#87b676]">ZotBins</h1>
        <h3 className="text-2xl text-[#87b676]">A Smart Waste Bins Project</h3>

        <p className="text-xl max-w-[700px] mx-auto mt-8">
          An independent group of undergraduate researchers passionate about
          technology-based zero waste management.
        </p>
      </div>

      <div className="flex flex-row items-center justify-center p-8 space-x-4">
        <button className="bg-transparent hover:bg-[#87b676]/80 text-[#87b676] font-semibold hover:text-white py-2 px-4 border border-[#87b676] hover:border-transparent rounded">
          <Link href={"about"}>
            <p>Who We Are</p>
          </Link>
        </button>
        <button className="bg-[#87b676] text-white font-bold py-2 px-4 rounded">
          <Link
            href={"https://airtable.com/appzF8nZcqC7jK3Dl/shrusFzrb8htRaWjz"}
          >
            <p>Apply</p>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Introduction;
