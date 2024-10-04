"use client";
import React, { useState } from "react";
import MemberCard from "@/components/MemberCard";
import { members } from "../members";

const Team = () => {
  const teams = [
    "Hardware",
    "Embedded Systems",
    "Waste Recognition",
    "API",
    "Web & Mobile",
  ];

  const [activeTeam, setActiveTeam] = useState("Hardware");
  return (
    <div className="pt-12 m-8">
      <div className="text-black/80 text-left py-4">
        <h2 className="text-4xl font-bold text-[#87b676]">Meet the Team</h2>
        <h3 className="text-xl max-w-[700px] mt-4">
          Our team consists of five subgroups, each of which provide an
          essential component to our research towards building the ZotBin.
          Explore our subgroups and members below!
        </h3>
      </div>
      {/* Teams */}
      <div className="rounded-lg p-2">
        <div className="flex flex-row justify-between pb-2 border-b border-g-400">
          {teams.map((team) => (
            <button
              key={team}
              onClick={() => setActiveTeam(team)}
              className={`p-2 rounded-lg text-black/80 font-bold hover:bg-[#87b676]/20 ${
                activeTeam === team ? "bg-[#87b676]/50" : ""
              }`}
            >
              {team}
            </button>
          ))}
        </div>
        <h4 className="pt-4 text-xl font-bold text-black/80">What we do:</h4>
        {activeTeam === "Hardware" && (
          <p className="pb-4 text-md text-black/80">
            We oversee the design, assembly, and maintenance of the physical
            smart bins, encompassing their sensor arrays, wiring, and related
            components. Additionally, we collaborate with various sub-teams to
            facilitate embedded system tests, CAD durability and functionality
            assessments, and PCB design evaluations.
          </p>
        )}
        {activeTeam === "Embedded Systems" && (
          <p className="pb-4 text-md text-black/80">
            Formerly utilizing Arduino-IDE, we are currently overhauling the
            ZotBins project into the ESP-IDF framework with the intent to use
            FreeRTOS scheduling on the sensor array. We collaborate with the
            Hardware subgroup by writing code for the sensor components on the
            ESP32, and also work with the API subgroup with communication
            protocols to send data over Wi-Fi.
          </p>
        )}
        {activeTeam === "Waste Recognition" && (
          <p className="pb-4 text-md text-black/80">WASTE REC DESCRIPTION</p>
        )}
        {activeTeam === "API" && (
          <p className="pb-4 text-md text-black/80">
            We leverage cloud technologies to develop scalable middleware
            infrastructure that acts as a bridge between hardware and software.
            Our job is to ensure the smooth and secure transfer of data from
            embedded systems integrated into the smart bins to our database
            living on the cloud, and then from our database to our web and
            mobile apps.
          </p>
        )}
        {activeTeam === "Web & Mobile" && (
          <p className="pb-4 text-md text-black/80">
            We are responsible for developing the web and mobile applications
            (i.e. ZotZero) that our users will interact with alongside the
            ZotBin. We work alongside designers to build elegant and intuitive
            UI/UX designs, while our developers integrate them using Next.js,
            React Native, and Node.js web frameworks.
          </p>
        )}

        <div className="flex flex-row flex-wrap items-center justify-center">
          {members.map((m, index) => {
            if (m.subgroup === activeTeam)
              return (
                <div key={index} className="p-2">
                  <MemberCard member={m} />
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
