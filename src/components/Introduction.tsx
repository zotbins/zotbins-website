import Link from "next/link";
import React from "react";
import Image from "next/image";
import zotbins_logo from "../../public/assets/zotbins_logo.svg";
import "animate.css";

const Introduction = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Hero Section */}
        <div className="text-center items-center flex flex-col mb-8">
          <div className="relative group mb-8">
            <div className="absolute -inset-1 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative">
              <Image
                src={zotbins_logo}
                alt="zotbins_logo"
                className="max-w-48 md:max-w-64 w-full animate__animated animate__bounce"
              />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-[#87b676] mb-4 animate__animated animate__lightSpeedInRight">
            ZotBins
          </h1>
          <h3 className="text-2xl md:text-3xl text-[#87b676] mb-8 animate__animated animate__fadeInUp">
            A Smart Waste Bins Project
          </h3>
          <p className="text-xl text-gray-600 max-w-[700px] mx-auto animate__animated animate__fadeInUp">
            An independent group of undergraduate researchers passionate about
            technology-based zero waste management.
          </p>
        </div>

        <div className="flex flex-row items-center justify-center space-x-6 mb-16">
          <button className="bg-transparent hover:bg-[#87b676] text-[#87b676] font-semibold hover:text-white py-3 px-8 border-2 border-[#87b676] hover:border-transparent rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            <Link href="about">
              <p>Who We Are</p>
            </Link>
          </button>
          <button className="bg-[#87b676] text-white font-bold py-3 px-8 rounded-full hover:bg-[#7aa366] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            <Link href="apply">
              <p>Apply</p>
            </Link>
          </button>
        </div>
        <div className="bg-gray-50 rounded-2xl shadow-xl p-8 md:p-12 mb-16 animate__animated animate__fadeInUp">
          <div className="text-left">
            <h2 className="text-4xl font-bold text-[#87b676] mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              ZotBins is an innovative smart waste bin system designed to optimize
              waste management efficiency and promote sustainable practices. By
              collecting and analyzing data on waste diversion rates—specifically,
              the proportion of incorrectly placed trash items relative to the
              total waste volume (e.g. glass bottle in the trash bin instead of
              recycle bin)—we aim to enhance campus-wide waste management
              practices.
            </p>
            <button className="bg-transparent hover:bg-[#87b676] text-[#87b676] font-semibold hover:text-white py-3 px-8 border-2 border-[#87b676] hover:border-transparent rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              <Link href="our-project">
                <p>Learn More</p>
              </Link>
            </button>
          </div>
        </div>

        {/* Partners Section */}
        <div className="bg-gray-50 rounded-2xl shadow-xl p-8 md:p-12 animate__animated animate__fadeInUp">
          <div className="text-left mb-8">
            <h2 className="text-4xl font-bold text-[#87b676] mb-4">Our Partners</h2>
            <p className="text-xl text-gray-600">
              We are thankful to our partners for supporting our journey towards
              building the ZotBin!
            </p>
          </div>
          <div className="flex flex-row items-center justify-center space-x-12">
            <div className="transform transition duration-300 hover:scale-110">
              <Image
                src={"/assets/UCI_DINING.png"}
                height="150"
                width="150"
                alt="uci-dining"
                className="rounded-lg"
              />
            </div>
            <div className="transform transition duration-300 hover:scale-110">
              <Image
                src={"/assets/src.png"}
                height="150"
                width="150"
                alt="uci-src"
                className="rounded-lg"
              />
            </div>
            <div className="transform transition duration-300 hover:scale-110">
              <Image
                src={"/assets/UCI_ESW.png"}
                height="150"
                width="150"
                alt="uci-esw"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
