import React from "react";
import {  useLoaderData } from "react-router";

const PlantDetails = () => {
  const plant = useLoaderData();
  console.log(plant);
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 ">
      <div
        className="bg-white shadow-lg rounded-2xl  overflow-hidden p-2 bg-gradient-to-br from-green-50 to-emerald-100 
            rounded-lg shadow-md p-4 
            border border-green-200"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="h-76 flex items-center justify-center overflow-hidden">
            <img
              src={plant.photo}
              alt={plant.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="p-6 flex flex-col justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">{plant.name}</h2>
              <p className="text-gray-600 italic">{plant.description}</p>
            </div>
            <div className="border-b-2 border-gray-600"></div>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
              <p>
                <strong>Category:</strong> {plant.category}
              </p>
              <p>
                <strong>Care Level:</strong> {plant.careLevel}
              </p>
              <p>
                <strong>Health Status:</strong> {plant.healthStatus}
              </p>
              <p>
                <strong>Watering:</strong> {plant.wateringFrequency}
              </p>
              <p>
                <strong>Last Watered:</strong> {plant.lastWateredDate}
              </p>
              <p>
                <strong>Next Watering:</strong> {plant.nextWateredDate}
              </p>
              <p className="text-lg items-center">
                <strong>Added by:</strong> {plant.userName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
