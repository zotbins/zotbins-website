"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Diagram from "@/components/Diagram";
import "animate.css";
import ImageCarousel from "@/components/ImageCarousel";
import { Unity, useUnityContext } from "react-unity-webgl";

const OurProject = () => {
  const images = [
    "/assets/screenshots/1.png",
    "/assets/screenshots/2.png",
    "/assets/screenshots/3.png",
    "/assets/screenshots/4.png",
    "/assets/screenshots/5.png",
  ];

  const [isUnityLoaded, setIsUnityLoaded] = useState(false);
  const [isUnityReady, setIsUnityReady] = useState(false);
  const [showUnity, setShowUnity] = useState(false);

  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "/assets/ZotBinsDemo/Build/ZotBinsDemo.loader.js",
    dataUrl: "/assets/ZotBinsDemo/Build/ZotBinsDemo.data",
    frameworkUrl: "/assets/ZotBinsDemo/Build/ZotBinsDemo.framework.js",
    codeUrl: "/assets/ZotBinsDemo/Build/ZotBinsDemo.wasm",
  });

  useEffect(() => {
    console.log("Unity loading state:", { isLoaded, loadingProgression });
    if (isLoaded) {
      setIsUnityLoaded(true);
      setTimeout(() => {
        console.log("Setting Unity ready");
        setIsUnityReady(true);
      }, 1000);
    }
  }, [isLoaded, loadingProgression]);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold text-[#87b676] mb-6 animate__animated animate__fadeInUp">
            Our Project
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
            Revolutionizing waste management through smart technology and machine learning
          </p>
        </div>

        {/* ZotBin Section */}
        <div className="bg-gray-50 rounded-2xl shadow-xl p-8 md:p-12 mb-16 animate__animated animate__fadeInUp">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#87b676]">The ZotBin</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
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
        <div className="bg-gray-50 rounded-2xl shadow-xl p-8 md:p-12 mb-16 animate__animated animate__fadeInUp">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group order-2 md:order-1">
              <ImageCarousel images={images} />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-4xl font-bold text-[#87b676]">The ZotZero App</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                To facilitate the hardware, we are developing a mobile application
                that will allow users to capture photos of their food waste, which
                will be sent to the machine learning model and then communicate to the
                users the correct bin for disposal.
              </p>
              <div className="flex space-x-4">
                <button className="bg-[#87b676] text-white font-bold py-3 px-8 rounded-full hover:bg-[#7aa366] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  <a href="https://apps.apple.com/us/app/zotbins/id6743295314" target="_blank" rel="noopener noreferrer">
                    Download on the App Store
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Unity Demo Section */}
        <div className="bg-gray-50 rounded-2xl shadow-xl p-8 md:p-12 animate__animated animate__fadeInUp">
          <h2 className="text-4xl font-bold text-[#87b676] mb-8 text-center">Interactive Demo</h2>
          <div className="relative w-full aspect-video bg-white rounded-lg overflow-hidden">
            {showUnity ? (
              <>
                {!isUnityLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#87b676] mx-auto mb-4"></div>
                      <p className="text-gray-600">
                        Loading 3D Demo... {Math.round(loadingProgression * 100)}%
                      </p>
                    </div>
                  </div>
                )}
                <Unity unityProvider={unityProvider} className="w-full h-full" />
              </>
            ) : (
              <button
                onClick={() => setShowUnity(true)}
                className="absolute inset-0 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-all duration-300 rounded-lg"
              >
                <span className="text-lg font-semibold text-[#87b676]">
                  Click to load the 3D Demo!
                </span>
              </button>
            )}

          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            Try our interactive 3D demo to see how a ZotBin works!
          </p>
        </div>
      </div>
    </div >
  );
};

export default OurProject;
