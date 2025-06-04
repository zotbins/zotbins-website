import React, { useState } from "react";
import Image from "next/image";
import "animate.css";

export default function ImageCarousel({ images }: { images: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => 
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      };
    
      const goToNext = () => {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      };
    
      const goToSlide = (index: number) => {
        setCurrentIndex(index);
      };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm">
                <button
                    onClick={goToPrevious}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all z-10"
                >
                    {`<`}
                </button>

                <Image
                    src={images[currentIndex]}
                    alt="Screenshot Image"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg animate__animated animate__fadeIn"
                />

                <button
                    onClick={goToNext}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all z-10"
                >
                    {`>`}
                </button>
            </div>

            <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-800 ${
                            index === currentIndex
                                ? 'bg-[#87b676]'
                                : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}