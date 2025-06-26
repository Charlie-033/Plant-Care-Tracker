import React from "react";

const plantList = [
  {
    title: "Snake Plant (Sansevieria) – The Unkillable Wonder",
    reasons: [
      "Thrives on neglect—water only when soil is completely dry.",
      "Tolerates low light but grows faster in bright, indirect light.",
      "Purifies indoor air by removing toxins.",
    ],
    avoid: "Overwatering (can lead to root rot).",
  },
  {
    title: "ZZ Plant (Zamioculcas zamiifolia) – The Survivor",
    reasons: [
      "Drought-resistant—stores water in its rhizomes.",
      "Grows well in low to moderate light.",
      "Rarely bothered by pests.",
    ],
    avoid: "Cold drafts and soggy soil.",
  },
  {
    title: "Pothos (Epipremnum aureum) – The Fast Grower",
    reasons: [
      "Adapts to low or bright indirect light.",
      "Tells you when it’s thirsty (leaves droop slightly).",
      "Easy to propagate—snip a stem and grow in water or soil.",
    ],
    avoid: "Direct sun (scorches leaves).",
  },
  {
    title: "Spider Plant (Chlorophytum comosum) – The Prolific Pup-Producer",
    reasons: [
      "Loves bright, indirect light but tolerates shade.",
      'Produces "babies" (spiderettes) you can repot or share.',
      "Safe for pets (non-toxic).",
    ],
    avoid: "Fluoridated water (can cause brown leaf tips).",
  },
  {
    title: "Peace Lily (Spathiphyllum) – The Drama Queen",
    reasons: [
      "Dramatically wilts when thirsty, then perks up after watering.",
      "Blooms elegant white flowers in medium light.",
      "Purifies indoor air effectively.",
    ],
    avoid: "Direct sunlight (burns leaves).",
  },
  {
    title: "Succulents (e.g., Aloe Vera, Jade Plant) – The Low-Maintenance Squad",
    reasons: [
      "Store water in leaves—water only every 2–3 weeks.",
      "Love bright light (south-facing windows are ideal).",
      "Compact and stylish for desks or shelves.",
    ],
    avoid: "Overwatering (their #1 killer).",
  },
];
const BeginnerPlant = () => {
  return (
    <div className="py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl text-center text-green-700 font-bold italic pt-5">
        Beginner Friendly Plants
      </h2>
      <div className="max-w-7xl mx-auto my-12 p-4 md:p-8 bg-green-50 dark:bg-gray-800 rounded-lg shadow-md">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://i.ibb.co/5WgXkmTP/beginner-friendly-plnats-banner.jpg"
            alt="Beginner Friendly Plants Banner"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed">
            Embarking on your plant parenthood journey can feel overwhelming
            with so many varieties to choose from – but fear not! Nature has
            graciously provided us with wonderfully resilient plants that
            practically thrive on beginner mistakes.
            <br /><br />
            These botanical troopers are the ideal starting point for anyone new to
            plant care. What makes these plants truly special is their remarkable
            combination of durability and beauty. They're like the training wheels
            of the plant world – allowing you to develop your green thumb while
            enjoying lush foliage and even some flowers.
            <br /><br />
            Whether you're working with a sunny windowsill or a dim office corner,
            there’s a perfect starter plant waiting to join your home. Let’s meet
            these forgiving botanical friends that will help you transition from
            nervous novice to confident plant caretaker! 🌱💚
          </p>
        </div>
      </div>

      {/* Plant List Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {/* Each Plant Box */}
        {plantList.map((plant, index) => (
          <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm space-y-3">
            <h3 className="text-xl font-semibold italic text-green-500">
              {index + 1}. {plant.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-200 font-medium">
              🌱 <strong>Why they're great for beginners:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-200">
              {plant.reasons.map((reason, i) => (
                <li key={i}>{reason}</li>
              ))}
            </ul>
            <p>
              <strong className="text-red-500">⚠️ Avoid:</strong>{" "}
              {plant.avoid}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default BeginnerPlant;
