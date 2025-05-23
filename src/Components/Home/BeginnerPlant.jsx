import React from "react";

const BeginnerPlant = () => {
  return (
    <div className="max-w-7xl bg-green-50 p-2 rounded mx-auto shadow-xs my-10">
      <div className="py-10 mx-auto lg:flex gap-4 px-5 justify-between ">
        <div className="lg:order-1 lg:w-1/2">
          <img
            src="https://i.ibb.co/5WgXkmTP/beginner-friendly-plnats-banner.jpg"
            alt=""
            className="rounded-lg"
          />

        </div>
        <div className="lg:order-2 lg:w-1/2">
          <h1 className="text-3xl font-semibold italic text-green-400">
            Beginner Friendly Plants
          </h1>
          <p className="text-gray-600 text-md mt-4">
            Embarking on your plant parenthood journey can feel overwhelming
            with so many varieties to choose from - but fear not! Nature has
            graciously provided us with wonderfully resilient plants that
            practically thrive on beginner mistakes. These botanical troopers
            are the ideal starting point for anyone new to plant care, offering
            forgiveness when you forget a watering or two and adaptability to
            less-than-perfect home environments. What makes these plants truly
            special is their remarkable combination of durability and beauty.
            They're like the training wheels of the plant world - allowing you
            to develop your green thumb while still enjoying lush foliage and
            even some flowers. .Whether you're working with a sunny
            windowsill or a dim office corner, whether you tend to over-love
            with water or forget for weeks at a time, there's a perfect starter
            plant waiting to join your home. These green companions are ready to
            grow with you as you learn the rhythms of plant care, making them
            the most rewarding first choices for any aspiring plant parent.
            Let's meet these forgiving botanical friends that will help you
            transition from nervous novice to confident plant caretaker! 🌱💚
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-5 space-y-5 pb-5">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold italic text-green-400">
           1. Snake Plant (Sansevieria) – The Unkillable Wonder
          </h3>
          <p className="text-gray-700">
            <strong>🌱 Why they're great for beginners:</strong>
          </p>
          <ul className="list-disc pl-5">
            <li className="text-gray-700">
              Thrives on neglect—water only when soil is completely dry.
            </li>
            <li className="text-gray-700">Tolerates low light but grows faster in bright, indirect light.</li>
            <li className="text-gray-700">
              Purifies indoor air by removing toxins.
            </li>
          </ul>
          <p><strong className="text-red-500">⚠️ Avoid:</strong>Overwatering (can lead to root rot).</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold italic text-green-400">
            2. ZZ Plant (Zamioculcas zamiifolia) – The Survivor
          </h3>
          <p className="text-gray-700">
            <strong>🌱 Why they're great for beginners:</strong>
          </p>
          <ul className="list-disc pl-5">
            <li className="text-gray-700">
              Drought-resistant—stores water in its rhizomes.
            </li>
            <li className="text-gray-700">Grows well in low to moderate light.</li>
            <li className="text-gray-700">
              Rarely bothered by pests.
            </li>
          </ul>
          <p><strong className="text-red-500">⚠️ Avoid:</strong> Cold drafts and soggy soil.</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold italic text-green-400">
            3. Pothos (Epipremnum aureum) – The Fast Grower
          </h3>
          <p className="text-gray-700">
            <strong>🌱 Why they're great for beginners:</strong>
          </p>
          <ul className="list-disc pl-5">
            <li className="text-gray-700">
              Adapts to low or bright indirect light.
            </li>
            <li className="text-gray-700">Tells you when it’s thirsty (leaves droop slightly).</li>
            <li className="text-gray-700">
              Easy to propagate—snip a stem and grow in water or soil.
            </li>
          </ul>
          <p><strong className="text-red-500">⚠️ Avoid:</strong>Direct sun (scorches leaves).</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold italic text-green-400">
            4. Spider Plant (Chlorophytum comosum) – The Prolific Pup-Producer
          </h3>
          <p className="text-gray-700">
            <strong>🌱 Why they're great for beginners:</strong>
          </p>
          <ul className="list-disc pl-5">
            <li className="text-gray-700">
              Loves bright, indirect light but tolerates shade.
            </li>
            <li className="text-gray-700">Produces "babies" (spiderettes) you can repot or share.</li>
            <li className="text-gray-700">
              Safe for pets (non-toxic).
            </li>
          </ul>
          <p><strong className="text-red-500">⚠️ Avoid:</strong> Fluoridated water (can cause brown leaf tips).</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold italic text-green-400">
            5. Peace Lily (Spathiphyllum) – The Drama Queen
          </h3>
          <p className="text-gray-700">
            <strong>🌱 Why they're great for beginners:</strong>
          </p>
          <ul className="list-disc pl-5">
            <li className="text-gray-700">
              Dramatically wilts when thirsty, then perks up after watering.
            </li>
            <li className="text-gray-700">Blooms elegant white flowers in medium light.</li>
            <li className="text-gray-700">
              Purifies indoor air effectively.
            </li>
          </ul>
          <p><strong className="text-red-500">⚠️ Avoid:</strong> Direct sunlight (burns leaves).</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold italic text-green-400">
            6. Succulents (e.g., Aloe Vera, Jade Plant) – The Low-Maintenance Squad
          </h3>
          <p className="text-gray-700">
            <strong>🌱 Why they're great for beginners:</strong>
          </p>
          <ul className="list-disc pl-5">
            <li className="text-gray-700">
              Store water in leaves—water only every 2-3 weeks.
            </li>
            <li className="text-gray-700">Love bright light (south-facing windows are ideal).</li>
            <li className="text-gray-700">
              Compact and stylish for desks or shelves.
            </li>
          </ul>
          <p><strong className="text-red-500">⚠️ Avoid:</strong> Overwatering (their #1 killer).</p>
        </div>
        
      </div>
    </div>
  );
};

export default BeginnerPlant;
