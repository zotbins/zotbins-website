import Link from "next/link";
import React from "react";
import Image from "next/image";
import zotbins_logo from "../../public/assets/zotbins_logo.svg";
import "animate.css";
import CoreValueCard from "./CoreValueCard";
import CollaborationIcon from "../../public/assets/card-icons/CollaborationIcon.png";
import DataDrivenIcon from "../../public/assets/card-icons/DataDrivenIcon.png";
import SustainabilityIcon from "../../public/assets/card-icons/SustainabilityIcon.png";
import ZotBinsLogoGrass from "../../public/assets/ZotbinLogoGrass.png";

const Introduction = () => {
  const coreValueCardsDate = [
    {
      title: "Sustainability",
      description:
        "Promoting eco-friendly practices through intelligent bin management.",
      icon: CollaborationIcon,
    },
    {
      title: "Data-Driven",
      description:
        "Leveraging data analytics to optimize waste diversion and campus sustainability.",
      icon: DataDrivenIcon,
    },
    {
      title: "Collaboration",
      description:
        "Working together with campus partners to create a sustainable future for all.",
      icon: SustainabilityIcon,
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#F6FFEC] pt-32 pb-64">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between mx-8">
            <div>
              <h1 className="text-6xl md:text-8xl font-semibold text-[#61B240] mb-2 animate__animated animate__lightSpeedInRight">
                ZotBins
              </h1>
              <h3 className="text-2xl md:text-3xl text-[#87b676] mb-6 animate__animated animate__fadeInUp">
                A Smart Waste Bins Project
              </h3>
              <p className="text-xl text-black max-w-[700px] animate__animated animate__fadeInUp">
                An independent group of undergraduate researchers leveraging
                technology and data to drive zero-waste, sustainable waste
                management.
              </p>

              {/* Learn More & Apply Buttons */}
              <div className="flex flex-row items-center space-x-6 mt-8">
                <button className=" bg-[#61B240] text-white text-lg hover:bg-[#87b676] text-[#87b676]  hover:text-white py-3 px-8 border-2 border-[#87b676] hover:border-transparent rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  <Link href="about">
                    <p>Learn More</p>
                  </Link>
                </button>
                <button className="bg-white text-[#61B240] text-lg border border-[#61B240] py-3 px-8 rounded-full hover:bg-[#7aa366] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  <Link href="apply">
                    <p>Apply</p>
                  </Link>
                </button>
              </div>
            </div>
            {/* image */}
            <div className="mx-auto mt-10">
              <Image
                src={ZotBinsLogoGrass}
                alt="zotbins_logo"
                className="max-w-72 md:max-w-72 w-full animate__animated animate__bounce"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="-mt-32 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {coreValueCardsDate.map((card, index) => (
              <CoreValueCard
                key={index}
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Mission Section */}
        <h2 className="bg-white text-4xl font-bold text-[#87b676] mb-6">
          Our Mission
        </h2>
        <div className=" mb-16 animate__animated animate__fadeInUp">
          <div className="text-left">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              ZotBins is an innovative smart waste bin system designed to
              optimize waste management efficiency and promote sustainable
              practices. By collecting and analyzing data on waste diversion
              rates—specifically, the proportion of incorrectly placed trash
              items relative to the total waste volume (e.g. glass bottle in the
              trash bin instead of recycle bin)—we aim to enhance campus-wide
              waste management practices.
            </p>
            <button className="bg-transparent hover:bg-[#87b676] text-[#87b676] font-semibold hover:text-white py-3 px-8 border-2 border-[#87b676] hover:border-transparent rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              <Link href="our-project">
                <p>Learn More</p>
              </Link>
            </button>
          </div>
        </div>

        {/* ZotBin Map */}
        <h2 className="text-4xl font-bold text-[#87b676] mb-6">
          Map of Waste Bins
        </h2>
        <div className="mb-8 animate__animated animate__fadeInUp">
          <p className="text-xl text-gray-600 leading-relaxed">
            Below is an interactive map of future projected waste bins.
          </p>
        </div>

        {/* Google Map Embed */}
        <div className="overflow-hidden mb-16">
          <div className="mt-[-60px]">
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=17OJsLw43_w0b_qqxIFMXAO_bia_ixdw&ehbc=2E312F&noprof=1"
              width="640"
              height="480"
            ></iframe>
          </div>
        </div>

        {/* Partners Section */}
        <h2 className="text-4xl font-bold text-[#87b676] mb-4">Our Partners</h2>
        <div className="animate__animated animate__fadeInUp">
          <div className="text-left mb-8">
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
                className=""
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
