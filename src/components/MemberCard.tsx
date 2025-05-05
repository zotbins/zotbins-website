import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const MemberCard = (props: any) => {
  return (
    <div className="w-[23rem] border border-gray-300 flex py-4 pl-4 rounded-lg">
      <div className="flex flex-row items-top">
        <Image
          width="100"
          height="100"
          className="w-24 h-24 rounded-full shadow-lg"
          src={props.member.image}
          alt="Profile Picture"
        />
        <div className="flex flex-col px-4">
          <h5 className="text-xl font-medium text-black/80">
            {props.member.name}
          </h5>
          <div className="mb-2 text-md text-gray-500">{props.member.role}</div>
          <div className="text-xl text-black/80 w-fit">
            {props.member.linkedin ? <Link href={props.member.linkedin} target="_blank">
              <FaLinkedin />
            </Link> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
