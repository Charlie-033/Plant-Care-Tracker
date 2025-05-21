import React from "react";

const Mistakes = () => {
  return (
    <div className="max-w-7xl bg-red-50 p-2 rounded mx-auto shadow-sm my-10">
      <div className="py-10 mx-auto lg:flex gap-4 px-5 justify-between ">
        <div className="lg:order-2 lg:w-1/2">
          <img
            src="https://i.ibb.co/C3Jt2zs7/plant-care-mistake-banner.jpg"
            alt=""
            className="rounded-lg"
          />
        </div>
        <div className="lg:order-1 lg:w-1/2">
          <h1 className="text-3xl font-semibold italic text-red-400">
            Top Plant Care Mistakes
          </h1>
          <p className="text-gray-600 text-md mt-4">
            Caring for plants is one of life’s most fulfilling hobbies—watching
            a tiny seedling grow into a thriving, leafy beauty brings joy and a
            sense of accomplishment. However, even the most experienced
            gardeners occasionally stumble, making mistakes that can stress,
            damage, or even kill their beloved plants. The key to successful
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
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-5 space-y-5 pb-5">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold italic text-red-400">
            1. Overwatering
          </h3>
          <p className="text-gray-700">
            <strong>Problem:</strong>Many plant owners believe more water equals
            healthier plants, but overwatering is the #1 cause of root rot and
            fungal diseases.
          </p>
          <p className="text-gray-700">
            <strong>Signs:</strong>Yellowing leaves, mushy stems, moldy soil.
          </p>
          <p className="text-gray-700">
            <strong>Fix:</strong>
          </p>
          <ul className="list-disc pl-5">
            <li className="text-gray-700">
              Check soil moisture before watering (stick your finger 1-2 inches
              deep).
            </li>
            <li className="text-gray-700">Ensure pots have drainage holes.</li>
            <li className="text-gray-700">
              Adjust watering based on season (plants need less in winter).
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold italic text-red-400">
            2. Incorrect Light Conditions
          </h3>
          <p className="text-gray-700">
            <strong>Problem:</strong>Placing a shade-loving plant in direct
            sunlight (or vice versa) stresses the plant. Signs: Scorched leaves
            (too much light), leggy growth (too little light).
          </p>
          <p className="text-gray-700">
            <strong>Signs:</strong>Roots growing out of drainage holes, slow growth.
          </p>
          <p className="text-gray-700">
            <strong>Fix:</strong>
          </p>
          <ul className="list-disc pl-5">
            <li className="text-gray-700">
              Research your plant’s light needs (low, medium, or bright indirect light).
            </li>
            <li className="text-gray-700">Rotate plants periodically for even growth..</li>
            <li className="text-gray-700">
              Use grow lights for low-light areas.
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold italic text-red-400">
            3. Poor Soil Quality
          </h3>
          <p className="text-gray-700">
            <strong>Problem:</strong>Using the wrong soil type leads to drainage issues or nutrient deficiencies.
 
          </p>
          <p className="text-gray-700">
            <strong>Signs:</strong>Slow growth, waterlogged soil, pests.
          </p>
          <p className="text-gray-700">
            <strong>Fix:</strong>
          </p>
          <ul className="list-disc pl-5">
            <li className="text-gray-700">
              Use well-draining potting mix for succulents/cacti.
            </li>
            <li className="text-gray-700">Add perlite or compost for better aeration.</li>
            <li className="text-gray-700">
              Repot every 1-2 years to refresh soil.
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold italic text-red-400">
            4. Ignoring Humidity Needs
          </h3>
          <p className="text-gray-700">
            <strong>Problem:</strong>Tropical plants suffer in dry indoor air, while desert plants rot in high humidity.
          </p>
          <p className="text-gray-700">
            <strong>Signs:</strong> Brown leaf tips, wilting, mold.
          </p>
          <p className="text-gray-700">
            <strong>Fix:</strong>
          </p>
          <ul className="list-disc pl-5">
            <li className="text-gray-700">
              Group humidity-loving plants together.
            </li>
            <li className="text-gray-700">Use a pebble tray or humidifier.</li>
            <li className="text-gray-700">
              Ensure good airflow for succulents/aroids.
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold italic text-red-400">
           5. Over-Fertilizing
          </h3>
          <p className="text-gray-700">
            <strong>Problem:</strong>Excess fertilizer burns roots and harms soil microbes.
          </p>
          <p className="text-gray-700">
            <strong>Signs:</strong>Yellow/brown leaf edges, crusty soil surface.
          </p>
          <p className="text-gray-700">
            <strong>Fix:</strong>
          </p>
          <ul className="list-disc pl-5">
            <li className="text-gray-700">
              Fertilize only during growing season (spring/summer).
            </li>
            <li className="text-gray-700">Dilute liquid fertilizer to half strength.</li>
            <li className="text-gray-700">
              Flush soil occasionally to prevent salt buildup.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mistakes;
