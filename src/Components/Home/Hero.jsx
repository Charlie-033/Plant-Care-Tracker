import React, { useEffect, useState } from "react";
import AuthContext from "../../Provider/AuthContext";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "https://i.ibb.co/nN1QCRMQ/banner-6.webp",
      title: "🌿 Embracing the Joy of Plant Care",
      description:
        "Surrounded by lush greenery, the scene captures the peaceful and rewarding experience of nurturing houseplants — a perfect reminder of the simple happiness found in everyday nature."
    },
    {
      src: "https://i.ibb.co/8DM7220Z/banner-4.webp",
      title: "🌿 A Modern Touch of Green Indoors",
      description:
        "Bring life and freshness into any space with a beautiful collection of indoor plants. Their clean, minimalist look adds a calming atmosphere while purifying the air — the perfect blend of style and wellness."
    },
    {
      src: "https://i.ibb.co/mFtbmFhk/banner-5.jpg",
      title: "🌞 Window-Side Serenity with Houseplants",
      description:
        "Basking in natural light, this cozy collection of potted greens brings warmth and calm to any corner. Perfectly placed by the window, these plants thrive while adding a peaceful, lived-in charm to the home."
    }
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center justify-between bg-linear-to-r from-green-300 to-orange-200  px-3 md:px-8 lg:px-16 py-5 dark:bg-linear-to-r dark:from-gray-800 dark:to-gray-900">
      <div className="overflow-hidden w-full flex justify-center items-center">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((slide, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0 flex justify-center relative"
            >
              <img
                src={slide.src}
                alt=""
                className={`transition-transform transform rounded-tl-4xl rounded-br-4xl object-cover  ${
                  i === currentIndex ? "scale-100" : "scale-65 opacity-70"
                }`}
              />
              {i === currentIndex && (
                <div className="absolute inset-0 flex items-end justify-center">
                  <h2 className="text-white bg-black/50 px-4 py-2 rounded-lg rounded-br-4xl">
                    <span className="text-xl font-semibold">{slide.title}</span> <br />
                    <span className="text-sm">
                      {slide.description}
                    </span>
                  </h2>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="md:ml-6 lg:ml-16 space-y-5">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-green-900 dark:text-gray-300">
          Smart Tracking for Healthy Plants.
        </h1>
        <p className="text-lg font-semibold text-gray-600 dark:text-gray-400">
          Whether you're a seasoned plant lover or just starting out, PlantLab
          helps you keep your green friends happy and healthy with gentle
          reminders and easy logging.
        </p>
        <div className="lg:flex gap-24">
          <button className="btn bg-orange-600 text-white rounded-full">
            Get Started
          </button>
          <div className="join rounded full">
            <div>
              <label className="input border-none join-item rounded-full">
                <input
                  type="email"
                  placeholder="Find Your Plant...."
                  required
                  className="text-blue-900 font-semibold border-none"
                />
              </label>
            </div>
            <button className="btn bg-green-700 text-white join-item rounded-full ml-3">
              Find Plant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
