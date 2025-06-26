import React from "react";
const mistakeList = [
  {
    title: "Overwatering",
    problem:
      "Many plant owners believe more water equals healthier plants, but overwatering is the #1 cause of root rot and fungal diseases.",
    signs: "Yellowing leaves, mushy stems, moldy soil.",
    fix: [
      "Check soil moisture before watering (stick your finger 1–2 inches deep).",
      "Ensure pots have drainage holes.",
      "Adjust watering based on season (plants need less in winter).",
    ],
  },
  {
    title: "Incorrect Light Conditions",
    problem:
      "Placing a shade-loving plant in direct sunlight (or vice versa) stresses the plant.",
    signs: "Scorched leaves, leggy growth, slow development.",
    fix: [
      "Research your plant’s light needs (low, medium, or bright indirect).",
      "Rotate plants periodically for even growth.",
      "Use grow lights for low-light environments.",
    ],
  },
  {
    title: "Poor Soil Quality",
    problem:
      "Using the wrong soil type leads to drainage issues or nutrient deficiencies.",
    signs: "Slow growth, waterlogged soil, pests.",
    fix: [
      "Use well-draining potting mix for succulents and cacti.",
      "Add perlite or compost for better aeration.",
      "Repot every 1–2 years to refresh soil.",
    ],
  },
  {
    title: "Ignoring Humidity Needs",
    problem:
      "Tropical plants suffer in dry air, while desert plants rot in high humidity.",
    signs: "Brown leaf tips, wilting, mold.",
    fix: [
      "Group humidity-loving plants together.",
      "Use a pebble tray or humidifier.",
      "Ensure airflow for succulents and aroids.",
    ],
  },
  {
    title: "Over-Fertilizing",
    problem:
      "Excess fertilizer burns roots and harms soil microbes.",
    signs: "Yellow/brown leaf edges, crusty soil surface.",
    fix: [
      "Fertilize only during growing season (spring/summer).",
      "Dilute liquid fertilizer to half strength.",
      "Flush soil occasionally to prevent salt buildup.",
    ],
  },
];

const Mistakes = () => {
  return (
    <div className="py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl text-center text-green-700 font-bold italic pt-5">
        Top Plant Care Mistakes
      </h2>
      <div className="max-w-7xl mx-auto my-12 p-4 md:p-8 bg-red-50 dark:bg-gray-800 rounded-lg shadow-md">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed">
             Caring for plants is one of life’s most fulfilling hobbies—watching
            a tiny seedling grow into a thriving, leafy beauty brings joy and a
            sense of accomplishment. The key to successful
            plant care lies not just in knowing what to do, but also in
            recognizing and avoiding common pitfalls. Many plant problems stem
            from simple, correctable errors—overzealous watering, insufficient
            light, or neglecting a plant’s specific needs. The good news? Once
            you understand these mistakes, you can quickly adjust your care
            routine to help your plants recover and flourish. In this guide,
            we’ll explore the top plant care mistakes that even seasoned plant
            parents make, how to spot the warning signs, and most
            importantly—practical, actionable solutions to fix them. Whether
            you’re a beginner learning the basics or an experienced grower
            troubleshooting persistent issues, this breakdown will help you
            cultivate healthier, happier plants. Let’s dive into the most
            frequent missteps and how to avoid them, ensuring your green friends
            thrive under your care! 🌱💚
          </p>
        </div>

        {/* Banner Image */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <img
            src="https://i.ibb.co/C3Jt2zs7/plant-care-mistake-banner.jpg"
            alt="Top Plant Care Mistakes"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Mistakes List Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {mistakeList.map((mistake, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm space-y-3"
          >
            <h3 className="text-xl font-semibold italic text-red-500">
              {index + 1}. {mistake.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-200">
              <strong>Problem:</strong> {mistake.problem}
            </p>
            <p className="text-gray-700 dark:text-gray-200">
              <strong>Signs:</strong> {mistake.signs}
            </p>
            <p className="text-gray-700 dark:text-gray-200">
              <strong>Fix:</strong>
            </p>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200 space-y-1">
              {mistake.fix.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Mistakes;
