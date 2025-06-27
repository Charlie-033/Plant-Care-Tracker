import React from "react";
import { useLoaderData } from "react-router";
import useDocumentTitle from "../Others/useDocumentTitle";

const PlantDetails = () => {
  const plant = useLoaderData();
  useDocumentTitle("Plant Details");

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-gray-800 dark:text-gray-100">
      {/* Title Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-green-700 dark:text-green-400 mb-3">
          {plant.name}
        </h1>
        <p className="text-lg italic text-gray-600 dark:text-gray-300">
          {plant.description}
        </p>
      </div>

      {/* Image Section */}
      <div className="mb-12">
        <img
          src={plant.photo}
          alt={plant.name}
          className="w-full h-[400px] object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
        <div>
          <h3 className="text-xl font-semibold mb-2">Plant Information</h3>
          <ul className="space-y-2">
            <li>
              <strong>Category:</strong> {plant.category}
            </li>
            <li>
              <strong>Care Level:</strong> {plant.careLevel}
            </li>
            <li>
              <strong>Health Status:</strong> {plant.healthStatus}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Watering Schedule</h3>
          <ul className="space-y-2">
            <li>
              <strong>Watering Frequency:</strong> {plant.wateringFrequency}
            </li>
            <li>
              <strong>Last Watered:</strong> {plant.lastWateredDate}
            </li>
            <li>
              <strong>Next Watering:</strong> {plant.nextWateredDate}
            </li>
          </ul>
        </div>
      </div>

      {/* Added By */}
      <div className="mt-12 border-t pt-6 text-lg">
        <p>
          <strong>Added by:</strong> {plant.userName}
        </p>
      </div>
    </div>
  );
};

export default PlantDetails;
