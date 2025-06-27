import React from "react";
import { Leaf, Clock, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Leaf className="w-8 h-8 text-green-600" />,
    title: "Personalized Plant Tracking",
    desc: "Easily manage watering, care levels, and get reminders based on your plant type.",
  },
  {
    icon: <Clock className="w-8 h-8 text-green-600" />,
    title: "Smart Scheduling",
    desc: "Never miss a watering session again with automated next watering date tracking.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-green-600" />,
    title: "Beginner-Friendly Design",
    desc: "Even first-time plant parents feel at home with our intuitive dashboard and guides.",
  },
];

const Features = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-green-700 dark:text-green-300 mb-10">
        Why Choose PlantLab?
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, index) => (
          <div key={index} className="bg-green-50 dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
            <div className="flex justify-center mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold text-green-800 dark:text-green-200">{f.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
