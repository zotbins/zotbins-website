import React from "react";
import Image from "next/image";
import sample_pfp from "../assets/profile-images/sample-pfp.png";

const MemberCard = (props: any) => {
  return (
    <div className="w-96 border border-gray-300 flex p-4 rounded-lg">
      <div className="flex flex-row items-center">
        <Image
          width="100"
          height="100"
          className="w-24 h-24 rounded-full shadow-lg"
          src={props.member.image}
          alt="Profile Picture"
        />
        <div className="flex flex-col pl-4">
          <h5 className="text-xl font-medium text-black/80">
            {props.member.name}
          </h5>
          <div className="mb-2 text-md text-gray-500">{props.member.role}</div>
          <div className="text-sm text-gray-500">
            {props.member.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
