import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="pt-12 m-8">
      <div className="text-black/80 text-left py-4">
        <h2 className="text-4xl font-bold text-[#87b676]">About Us</h2>
        <h3 className="text-xl mt-4">
          We are an independent group of undergraduate researchers at UCI
          passionate about technology-based zero waste management. We aim to
          assist communities towards improving waste diversion rates (% of waste
          diverted from landfills through methods such as recycling) and
          reducing waste management CO<sub>2</sub> emissions!
        </h3>
      </div>
      <div className="py-4 flex justify-center">
        <Image
          className="rounded-lg w-full max-w-3xl"
          width={4032}
          height={1672}
          src={"/assets/group_photo.jpg"}
          alt="group_photo"
        />
      </div>

      <div className="text-black/80 text-left py-4">
        <h2 className="text-4xl font-bold text-[#87b676]">Our Story</h2>
        <h3 className="text-xl mt-4">
          This project started at UCI in 2017 with a group of 4 undergraduates
          for a hackathon hosted by UCI TIPPERS. The aim of the project was to
          help create a tool to help with UCI's zero waste initiatives. With the
          guidance of professors and graduate students from the TIPPERS research
          group, the team was able to grow from 4 to over 15 individuals all
          working on the ZotBins project. Together they have been able to build
          and deploy a network of 9 smart bins on campus that are currently
          making a positive impact for UCI. Since then, the project is being
          shared to the open-source community through ZBCE and the ZotBins UCI
          undergraduate team continues with new members every year.
        </h3>
      </div>
    </div>
  );
};

export default About;
