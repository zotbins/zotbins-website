import React from "react";
import Timeline from "@/components/Timeline";
import Image from "next/image";

const OurProject = () => {
  return (
    <div className="pt-12 m-8">
      <div className="text-black/80 text-left py-4">
        <h2 className="text-4xl font-bold text-[#87b676]">The ZotBin</h2>
        <h3 className="text-xl max-w-[700px] mt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
          commodi amet voluptatum, maiores tempora molestiae dolores dolore modi
          non tenetur possimus hic quia porro itaque cumque odit nihil assumenda
          neque!
        </h3>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Image
          className="w-[32rem] rounded-lg border"
          src="/assets/integration.png"
          width="1000"
          height="1000"
          alt="integration"
        />
        <div className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
          Integration into ZotBins Organization
        </div>
      </div>

      <div className="pt-24 text-black/80 text-left py-4">
        <h2 className="text-4xl font-bold text-[#87b676]">Timeline</h2>
        <Timeline />
      </div>
    </div>
  );
};

export default OurProject;
