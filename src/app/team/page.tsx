"use client";
import { useEffect, useState } from "react";
import MemberCard from "@/components/MemberCard";
import { FaAngleDown } from "react-icons/fa6";
import { advisors } from "../advisors";
import AdvisorCard from "@/components/AdvisorCard";
import { Member } from "@/lib/members";
import "animate.css";

const teams: { name: string; heading?: string; description?: string }[] = [
  {
    name: "Hardware",
    description:
      "We oversee the design, assembly, and maintenance of the physical smart bins, encompassing their sensor arrays, wiring, and related components. Additionally, we collaborate with various sub-teams to facilitate embedded system tests, CAD durability and functionality assessments, and PCB design evaluations.",
  },
  {
    name: "Embedded",
    description:
      "Formerly utilizing Arduino-IDE, we are currently overhauling the ZotBins project into the ESP-IDF framework with the intent to use FreeRTOS scheduling on the sensor array. We collaborate with the Hardware subgroup by writing code for the sensor components on the ESP32, and also work with the Full Stack subgroup with communication protocols to send data over Wi-Fi.",
  },
  {
    name: "Waste Recognition",
    description:
      "We are researching, training, and improving a computer vision model to perform image localization and classification. We collaborate closely with the Hardware and Full Stack teams to integrate these algorithms into the mobile app and physical bins. Our daily work may include waste image collections, data labeling, data preprocessing, and algorithms development & implementation.",
  },
  {
    name: "Full Stack",
    description:
      "We build the software behind ZotBins: a cloud API on AWS that collects and stores data from the smart bins, and the ZotZero web and mobile apps that let students and UCI Waste Management put that data to use. ZotZero also lets users snap a photo of their waste to find out which bin it belongs in.",
  },
  {
    name: "Outreach",
    description:
      "We connect ZotBins with the UCI community by building relationships with campus partners, raising awareness about proper waste sorting, and helping recruit new members to the project.",
  },
  {
    name: "Alumni",
    heading: "Thank you:",
    description:
      "ZotBins is built by students, and these are the former members whose work helped get the project to where it is today.",
  },
];

const pill =
  "px-6 py-3 rounded-full transition-all duration-300 ease-in-out hover:-translate-y-1";

const Team = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [activeTeam, setActiveTeam] = useState(teams[0].name);
  const [openDropdown, setOpenDropdown] = useState(false);

  const selectTeam = (name: string) => {
    setActiveTeam(name);
    setOpenDropdown(false);
  };

  useEffect(() => {
    fetch("/members.json")
      .then((res) => res.json())
      .then(setMembers)
      .catch(() => setMembers([]));
  }, []);

  const activeMembers = members.filter((m) => m.team === activeTeam);
  const active = teams.find((t) => t.name === activeTeam);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate__animated animate__fadeInUp">
            Our Team
          </h1>
          <p className="text-xl md:text-2xl text-neutral max-w-3xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
            Meet the passionate individuals behind ZotBins, working together to revolutionize waste management!
          </p>
        </div>

        {/* Teams Section */}
        <div className="bg-gray-50 rounded-2xl shadow-xl p-8 md:p-12 mb-16 animate__animated animate__fadeInUp">
          <div className="hidden md:flex flex-row flex-wrap justify-center gap-4 mb-8">
            {teams.map(({ name }) => (
              <button
                key={name}
                onClick={() => selectTeam(name)}
                className={`${pill} hover:shadow-lg ${
                  activeTeam === name
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-neutral hover:bg-gray-100"
                }`}
              >
                {name}
              </button>
            ))}
          </div>

          <div className="md:hidden mb-8">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className={`${pill} w-full bg-white hover:bg-gray-100 text-neutral flex items-center justify-between`}
            >
              {activeTeam}
              <FaAngleDown className={`transition-transform duration-300 ${openDropdown ? "rotate-180" : ""}`} />
            </button>
            {openDropdown && (
              <div className="mt-2 bg-white rounded-lg shadow-lg overflow-hidden animate__animated animate__fadeIn">
                {teams.map(({ name }) => (
                  <button
                    key={name}
                    onClick={() => selectTeam(name)}
                    className={`w-full px-6 py-3 text-left transition-colors duration-200 ${
                      activeTeam === name ? "bg-primary text-white" : "hover:bg-gray-100"
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Team Description */}
          {active?.description && (
            <div className="mb-8 p-6 bg-white rounded-xl animate__animated animate__fadeIn">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {active.heading ?? "What we do:"}
              </h3>
              <p className="text-neutral leading-relaxed">{active.description}</p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeMembers.map((member, index) => (
              <div
                key={member.name}
                className="animate__animated animate__fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <MemberCard member={member} />
              </div>
            ))}
          </div>
        </div>

        {/* Advisors Section */}
        <div className="bg-gray-50 rounded-2xl shadow-xl p-8 md:p-12 animate__animated animate__fadeInUp">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Advisors</h2>
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
