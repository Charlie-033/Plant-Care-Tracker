import React from "react";
import { FaLeaf, FaSeedling, FaWater, FaSun } from "react-icons/fa";
import { Link } from "react-router";

const AboutUs = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-green-100 to-green-50 p-8 text-gray-800">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-16">
        {/* Left Image */}
        <div className="flex-1">
          <img
            src="https://i.ibb.co/zTTW68vj/blog-img-2.webp"
            alt="Healthy plants in pots"
            className="rounded-xl shadow-lg object-cover w-full max-h-[450px]"
          />
        </div>

        {/* Right Text Content */}
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-5xl font-extrabold text-green-800 mb-4">
            About PlantCare Tracker
          </h1>
          <p className="text-lg leading-relaxed">
            At <span className="font-semibold text-green-700">PlantCare Tracker</span>, we believe that everyone deserves to have a thriving garden, no matter their experience level. 
            Our mission is to make plant care simple, enjoyable, and rewarding by providing you with tools to track watering, sunlight, fertilizing, and growth schedules — all in one place.
          </p>
          <p className="text-lg leading-relaxed">
            Whether you're a seasoned gardener or just starting your green journey, our app helps you nurture your plants and build a deeper connection with nature.
          </p>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            <FeatureCard
              icon={<FaLeaf className="text-green-600 w-8 h-8" />}
              title="Personalized Care"
              description="Custom schedules based on your plant species and environment."
            />
            <FeatureCard
              icon={<FaSeedling className="text-green-600 w-8 h-8" />}
              title="Growth Tracking"
              description="Log your plant's growth and progress with photos and notes."
            />
            <FeatureCard
              icon={<FaWater className="text-green-600 w-8 h-8" />}
              title="Water Reminders"
              description="Never forget to water your plants with timely notifications."
            />
            <FeatureCard
              icon={<FaSun className="text-green-600 w-8 h-8" />}
              title="Sunlight Monitoring"
              description="Track sunlight exposure and optimize your plant placement."
            />
          </div>

          {/* Call to Action */}
          <div className="mt-12">
            <Link
              to="/"
              className="inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex items-start gap-4 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
    <div className="mt-1">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold text-green-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default AboutUs;
