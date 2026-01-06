import React from "react";
import Image from "next/image";

const MentorCard = (props: any) => {
  return (
    <div className="w-[23rem] flex py-4 pl-4 bg-white/80 backdrop-blur-lg rounded-xl border border-white/30 shadow-lg">
      <div className="flex flex-row items-center">
        <Image
          width="100"
          height="100"
          className="w-24 h-24 rounded-full shadow-lg"
          src={props.member.image}
          alt="Profile Picture"
        />
        <div className="flex flex-col px-4">
          <h5 className="text-xl font-medium text-gray-600">
            {props.member.name}
          </h5>
          <div className="mb-2 text-md text-gray-500">
            {props.member.school}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
