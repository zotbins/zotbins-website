import Link from "next/link";
import React from "react";
import Image from "next/image";
import zotbins_logo from "../../public/assets/zotbins_logo.svg";

const Introduction = () => {
  return (
    <div className="pt-24">
      <div className="text-black/80 font-bold text-center items-center flex flex-col">
        <Image
          src={zotbins_logo}
          alt="zotbins_logo"
          className="pb-8 max-w-48 md:max-w-64 w-full"
        />
        <h1 className="text-8xl text-[#87b676]">ZotBins</h1>
        <h3 className="text-2xl text-[#87b676]">A Smart Waste Bins Project</h3>

        <p className="text-xl max-w-[700px] mx-auto mt-8 px-8">
          An independent group of undergraduate researchers passionate about
          technology-based zero waste management.
        </p>
      </div>

      <div className="flex flex-row items-center justify-center pt-8 space-x-4">
        <button className="bg-transparent hover:bg-[#87b676]/80 text-[#87b676] font-semibold hover:text-white py-2 px-4 border border-[#87b676] hover:border-transparent rounded">
          <Link href={"about"}>
            <p>Who We Are</p>
          </Link>
        </button>
        <button className="bg-[#87b676] text-white font-bold py-2 px-4 rounded">
          <Link
            href={"https://airtable.com/appzF8nZcqC7jK3Dl/shrusFzrb8htRaWjz"}
            target="_blank"
          >
            <p>Apply</p>
          </Link>
        </button>
      </div>

      <div className="m-8">
        <div className="text-black/80 text-left py-4">
          <h2 className="text-4xl font-bold text-[#87b676]">Our Mission</h2>
          <h3 className="text-xl mt-4">
            ZotBins is an innovative smart waste bin system designed to optimize
            waste management efficiency and promote sustainable practices. By
            collecting and analyzing data on waste diversion rates—specifically,
            the proportion of incorrectly placed trash items relative to the
            total waste volume (e.g. glass bottle in the trash bin instead of
            recycle bin)—we aim to enhance campus-wide waste management
            practices.
          </h3>
        </div>
        <button className="bg-transparent hover:bg-[#87b676]/80 text-[#87b676] font-semibold hover:text-white py-2 px-4 border border-[#87b676] hover:border-transparent rounded">
          <Link href={"our-project"}>
            <p>Learn More</p>
          </Link>
        </button>
      </div>

      <div className="m-8">
        <div className="text-black/80 text-left py-4">
          <h2 className="text-4xl font-bold text-[#87b676]">Our Partners</h2>
          <h3 className="text-xl my-4">
            We are thankful to our partners for supporting our journey towards
            building the ZotBin!
          </h3>
        </div>
        <div className="flex flex-row items-center justify-center space-x-8">
          <Image
            src={"/assets/UCI_DINING.png"}
            height="150"
            width="150"
            alt="uci-dining"
          />
          <Image
            src={"/assets/src.png"}
            height="150"
            width="150"
            alt="uci-src"
          />
          <Image
            src={"/assets/UCI_ESW.png"}
            height="150"
            width="150"
            alt="uci-esw"
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
