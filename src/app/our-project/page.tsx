"use client";
import React from "react";
import Timeline from "@/components/Timeline";
import Image from "next/image";
import Diagram from "@/components/Diagram";
import ContextualZoomFlow from "@/components/HiddenNodes";

const OurProject = () => {
  return (
    <div className="pt-12 m-8">
      <div className="text-black/80 text-left py-4">
        <h2 className="text-4xl font-bold text-[#87b676]">The ZotBin</h2>
        <h3 className="text-xl mt-4">
          We are currently researching ways to leverage new machine learning
          models to interactively segment and classify trash to assist in proper
          sorting. With our findings, we are constructing a physical smart waste
          bin that will guide users towards proper waste handling, called the
          ZotBin!
        </h3>
      </div>

      <div className="flex flex-col items-center justify-center py-4">
        {/* For web screens */}
        <div className="hidden md:block">
          <Diagram />
        </div>

        {/* For mobile screens */}
        <div className="block md:hidden">
          <Image
            className="w-[32rem]"
            src="/assets/diagram.png"
            width="1000"
            height="1000"
            alt="diagram"
          />
        </div>

        <div className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
          Zotbins Architectural Diagram
        </div>
      </div>


      <div className="text-black/80 text-left py-4">
        <h2 className="text-4xl font-bold text-[#87b676]">The ZotZero App</h2>
        <h3 className="text-xl mt-4">
          To facilitate the hardware, we are developing a mobile application
          that will allow users to capture photos of their food waste, which
          will be sent to the machine learning model and then communicate to the
          users the correct bin for disposal.
        </h3>
      </div>

      {/* <div className="text-black/80 text-left py-4">
        <h2 className="text-4xl font-bold text-[#87b676]">Timeline</h2>
        <Timeline />
      </div> */}
    </div>
  );
};

export default OurProject;
