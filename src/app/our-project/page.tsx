"use client";
import Image from "next/image";
import Diagram from "@/components/Diagram";
import "animate.css";
import ImageCarousel from "@/components/ImageCarousel";

const OurProject = () => {
  const images = [
    "/assets/screenshots/1.png",
    "/assets/screenshots/2.png",
    "/assets/screenshots/3.png",
    "/assets/screenshots/4.png",
    "/assets/screenshots/5.png",
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate__animated animate__fadeInUp">
            Our Project
          </h1>
          <p className="text-xl md:text-2xl text-neutral max-w-3xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
            Revolutionizing waste management through smart technology and machine learning
          </p>
        </div>

        {/* ZotBin Section */}
        <div className="bg-gray-50 rounded-2xl shadow-xl p-8 md:p-12 mb-16 animate__animated animate__fadeInUp">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-primary">The ZotBin</h2>
              <p className="text-xl text-neutral leading-relaxed">
                We are currently researching ways to leverage new machine learning
                models to interactively segment and classify trash to assist in proper
                sorting. With our findings, we are constructing a physical smart waste
                bin that will guide users towards proper waste handling, called the
                ZotBin!
              </p>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 transition duration-1000"></div>
              <div className="relative bg-white rounded-lg p-4">
                {/* For web screens */}
                <div className="hidden md:block w-full overflow-x-auto">
                  <div className="min-w-[800px]">
                    <Diagram />
                  </div>
                </div>

                {/* For mobile screens */}
                <div className="block md:hidden">
                  <Image
                    className="w-full rounded-lg"
                    src="/assets/diagram.png"
                    width="1000"
                    height="1000"
                    alt="ZotBins architectural diagram"
                  />
                </div>
              </div>
            </div>
            <div className="text-center text-gray-500 text-sm">
              ZotBins Architectural Diagram
            </div>
          </div>
        </div>

        {/* ZotZero App Section */}
        <div className="bg-gray-50 rounded-2xl shadow-xl p-8 md:p-12 animate__animated animate__fadeInUp">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group order-2 md:order-1">
              <ImageCarousel images={images} />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-4xl font-bold text-primary">The ZotZero App</h2>
              <p className="text-xl text-neutral leading-relaxed">
                To facilitate the hardware, we are developing a mobile application
                that will allow users to capture photos of their food waste, which
                will be sent to the machine learning model and then communicate to the
                users the correct bin for disposal.
              </p>
              <div className="flex space-x-4">
                <button className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  <a href="https://apps.apple.com/us/app/zotbins/id6743295314" target="_blank" rel="noopener noreferrer">
                    Download on the App Store
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default OurProject;
