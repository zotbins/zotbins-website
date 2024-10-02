"use client";
import React, { useState } from "react";
import MemberCard from "@/components/MemberCard";
import { members } from "../members";

const Team = () => {
  const teams = [
    "Hardware",
    "Embedded",
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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          officiis mollitia excepturi cupiditate soluta minus accusantium
          ratione quia, nulla asperiores illum? Voluptas ipsum blanditiis
          facilis explicabo, cum vitae laudantium aspernatur!
        </h3>
      </div>
      {/* Teams */}
      <div className="rounded-lg p-2">
        <div className="flex flex-row justify-between pb-2 border-b border-g-400">
          {teams.map((team) => (
            <button
              key={team}
              onClick={() => setActiveTeam(team)}
              className={`p-2 px-16 rounded-lg text-black/80 font-bold hover:bg-[#87b676]/20 ${
                activeTeam === team ? "bg-[#87b676]/50" : ""
              }`}
            >
              {team}
            </button>
          ))}
        </div>
        <h4 className="pt-4 text-xl font-bold text-black/80">What we do:</h4>
        <p className="pb-4 text-md text-black/80">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
          deserunt beatae, doloribus corporis consequuntur nihil dignissimos et
          sapiente obcaecati. Soluta nesciunt repudiandae debitis impedit. Sunt
          magnam voluptatibus cumque cum nesciunt.
        </p>
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
