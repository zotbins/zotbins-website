"use client";
import React, { useState } from "react";
import MemberCard from "@/components/MemberCard";
import { members } from "../members";
import { FaAngleDown } from "react-icons/fa6";
import MentorCard from "@/components/MentorCard";
import { mentors } from "../mentors";
import { advisors } from "../advisors";
import AdvisorCard from "@/components/AdvisorCard";
import "animate.css";

const Team = () => {
  const teams = [
    "Hardware",
    "Embedded Systems",
    "Waste Recognition",
    "API",
    "Web & Mobile",
  ];

  const [activeTeam, setActiveTeam] = useState("Hardware");
  const [openDropdown, setOpenDropdown] = useState(false);
  const getActiveTeamMembers = () => {
    return members.filter(m => m.subgroup === activeTeam);
  };
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold text-[#87b676] mb-6 animate__animated animate__fadeInUp">
            Our Team
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
            Meet the passionate individuals behind ZotBins, working together to revolutionize waste management!
          </p>
        </div>

        {/* Teams Section */}
        <div className="bg-gray-50 rounded-2xl shadow-xl p-8 md:p-12 mb-16 animate__animated animate__fadeInUp">
          <div className="hidden md:flex flex-row justify-center space-x-4 mb-8">
            {teams.map((team) => (
              <button
                key={team}
                onClick={() => setActiveTeam(team)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg ${activeTeam === team
                    ? "bg-[#87b676] text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {team}
              </button>
            ))}
          </div>

          <div className="md:hidden mb-8">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="w-full bg-white hover:bg-gray-100 text-gray-600 px-6 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex items-center justify-between"
            >
              {activeTeam}
              <FaAngleDown className={`transform transition-transform duration-300 ${openDropdown ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown && (
              <div className="mt-2 bg-white rounded-lg shadow-lg overflow-hidden animate__animated animate__fadeIn">
                {teams.map((team) => (
                  <button
                    key={team}
                    onClick={() => {
                      setActiveTeam(team);
                      setOpenDropdown(false);
                    }}
                    className={`w-full px-6 py-3 text-left transition-colors duration-200 ${activeTeam === team
                        ? "bg-[#87b676] text-white"
                        : "hover:bg-gray-100"
                      }`}
                  >
                    {team}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Team Description */}
          <div className="mb-8 p-6 bg-white rounded-xl animate__animated animate__fadeIn">
            <h3 className="text-2xl font-bold text-[#87b676] mb-4">What we do:</h3>
            {activeTeam === "Hardware" && (
              <p className="text-gray-600 leading-relaxed">
                We oversee the design, assembly, and maintenance of the physical
                smart bins, encompassing their sensor arrays, wiring, and related
                components. Additionally, we collaborate with various sub-teams to
                facilitate embedded system tests, CAD durability and functionality
                assessments, and PCB design evaluations.
              </p>
            )}
            {activeTeam === "Embedded Systems" && (
              <p className="text-gray-600 leading-relaxed">
                Formerly utilizing Arduino-IDE, we are currently overhauling the
                ZotBins project into the ESP-IDF framework with the intent to use
                FreeRTOS scheduling on the sensor array. We collaborate with the
                Hardware subgroup by writing code for the sensor components on the
                ESP32, and also work with the API subgroup with communication
                protocols to send data over Wi-Fi.
              </p>
            )}
            {activeTeam === "Waste Recognition" && (
              <p className="text-gray-600 leading-relaxed">
                We are researching, training, and improving a computer vision model
                to perform image localization and classification. We collaborate
                closely with the Hardware and Web & Mobile teams to integrate these
                algorithms into the mobile app and physical bins. Our daily work may
                include waste image collections, data labeling, data preprocessing,
                and algorithms development & implementation.
              </p>
            )}
            {activeTeam === "API" && (
              <p className="text-gray-600 leading-relaxed">
                We leverage cloud technologies to develop scalable middleware
                infrastructure that acts as a bridge between hardware and software.
                Our job is to ensure the smooth and secure transfer of data from
                embedded systems integrated into the smart bins to our database
                living on the cloud, and then from our database to our web and
                mobile apps.
              </p>
            )}
            {activeTeam === "Web & Mobile" && (
              <p className="text-gray-600 leading-relaxed">
                We are responsible for developing the web and mobile applications
                (i.e. ZotZero) that our users will interact with alongside the
                ZotBin. We work alongside designers to build elegant and intuitive
                UI/UX designs, while our developers integrate them using Next.js,
                React Native, and Node.js web frameworks.
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {getActiveTeamMembers().map((member, index) => (
              <div
                key={`${member.name}-${index}`}
                className="animate__animated animate__fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <MemberCard member={member} />
              </div>
            ))}
          </div>
        </div>

        {/* Mentors Section */}
        <div className="bg-gray-50 rounded-2xl shadow-xl p-8 md:p-12 mb-16 animate__animated animate__fadeInUp">
          <h2 className="text-3xl font-bold text-[#87b676] mb-8 text-center">Mentors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((m, index) => (
              <div key={index} className="animate__animated animate__fadeInUp">
                <MentorCard member={m} />
              </div>
            ))}
          </div>
        </div>

        {/* Advisors Section */}
        <div className="bg-gray-50 rounded-2xl shadow-xl p-8 md:p-12 animate__animated animate__fadeInUp">
          <h2 className="text-3xl font-bold text-[#87b676] mb-8 text-center">Advisors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisors.map((m, index) => (
              <div key={index} className="animate__animated animate__fadeInUp">
                <AdvisorCard member={m} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
