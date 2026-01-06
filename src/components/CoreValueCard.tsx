import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  icon: string;
}

const CoreValueCard: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-[#BFE48C] border border-[#abd472] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 pb-10">
      <div className="bg-white rounded-xl p-6 m-4 mb-6 text-center">
        <h3 className="text-2xl font-semibold text-[#61B240] mb-4">{title}</h3>
        <p className="text-black">{description}</p>
      </div>
      <div className="flex justify-center items-center h-32">
        <Image
          src={icon}
          alt={`${title} icon`}
          width={130}
          height={130}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default CoreValueCard;
