import React from "react";
import Image from "next/image";
import "animate.css";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold text-[#87b676] mb-6 animate__animated animate__fadeInUp">
            About ZotBins
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
            Pioneering sustainable waste management through technology and innovation
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate__animated animate__fadeInLeft">
            <h2 className="text-3xl font-bold text-[#87b676]">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are an independent group of undergraduate researchers at UCI
              passionate about technology-based zero waste management. We aim to
              assist communities towards improving waste diversion rates (% of waste
              diverted from landfills through methods such as recycling) and
              reducing waste management CO<sub>2</sub> emissions!
            </p>
          </div>
          <div className="relative group animate__animated animate__fadeInRight">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#87b676] to-green-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                className="rounded-lg w-full h-auto transform transition duration-500 hover:scale-105"
                width={4032}
                height={1672}
                src={"/assets/group_photo.jpg"}
                alt="group_photo"
              />
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-gray-50 rounded-2xl shadow-xl p-8 md:p-12 animate__animated animate__fadeInUp animate__delay-1s">
          <h2 className="text-3xl font-bold text-[#87b676] mb-6">Our Story</h2>
          <div className="text-gray-600">
            <p>
              This project started at UCI in 2017 with a group of 4 undergraduates
              for a hackathon hosted by UCI TIPPERS. The aim of the project was to
              help create a tool to help with UCI's zero waste initiatives.
            </p>
            <p className="mt-4">
              With the guidance of professors and graduate students from the TIPPERS research
              group, the team was able to grow from 4 to over 15 individuals all
              working on the ZotBins project. Together they have been able to build
              and deploy a network of 9 smart bins on campus that are currently
              making a positive impact for UCI.
            </p>
            <p className="mt-4">
              Since then, the project is being shared to the open-source community through ZBCE 
              and the ZotBins UCI undergraduate team continues with new members every year.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
