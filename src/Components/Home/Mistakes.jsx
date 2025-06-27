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
    <div className="py-12 max-w-7xl mx-auto px-4">
      <h2 className="text-4xl text-center font-bold text-green-700 italic mb-8">
        Top Plant Care Mistakes
      </h2>

      {/* 🌿 Banner Image at the Top */}
      <div className="mb-10">
        <img
          src="https://i.ibb.co/C3Jt2zs7/plant-care-mistake-banner.jpg"
          alt="Top Plant Care Mistakes"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>

      {/* 📝 Intro Paragraph */}
      <div className="prose prose-lg max-w-none dark:prose-invert mb-12">
        <p>
          Caring for plants is one of life’s most fulfilling hobbies—watching a tiny seedling grow into a thriving, leafy beauty brings joy and a sense of accomplishment.
        </p>
        <p>
          The key to successful plant care lies not just in knowing what to do, but also in recognizing and avoiding common pitfalls. Many plant problems stem from simple, correctable errors—overzealous watering, insufficient light, or neglecting a plant’s specific needs.
        </p>
        <p>
          In this guide, we’ll explore the most common plant care mistakes that even seasoned plant parents make, how to identify them, and what to do instead.
        </p>
      </div>

      {/* 🔍 Blog Style Mistake Articles */}
      <div className="space-y-12">
        {mistakeList.map((mistake, index) => (
          <article key={index} className="border-b pb-8">
            <h3 className="text-2xl font-bold text-red-600 mb-3">
              {index + 1}. {mistake.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>Problem:</strong> {mistake.problem}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>Signs:</strong> {mistake.signs}
            </p>
            <div className="mb-2">
              <p className="font-semibold text-gray-800 dark:text-gray-200">Fix:</p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                {mistake.fix.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Mistakes;
