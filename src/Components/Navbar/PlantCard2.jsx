import React from 'react';

const PlantCard2 = ({plant}) => {
     const {
    _id,
    name,
    category,
    photo,
    description,
    careLevel,
    wateringFrequency
  } = plant;
  return (
    <div
      key={_id}
      className="relative bg-white rounded-xl shadow-md overflow-hidden border border-green-100 hover:shadow-lg transition-shadow duration-300 max-w-sm mx-auto"
    >
      <div className="h-48 bg-green-50 flex items-center justify-center overflow-hidden">
        <img src={photo} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="p-5">
        <span
          className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-2 ${
            category === "Flowering"
              ? "bg-purple-100 text-purple-800"
              : category === "Succulent"
              ? "bg-orange-100 text-orange-800"
              : "bg-green-100 text-green-800"
          }`}
        >
          {category}
        </span>

        <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>

        <p className="text-gray-600 mb-3 line-clamp-2">{description}</p>

        <div className="grid grid-cols-2 gap-2 text-sm mb-4">
          <div className="flex items-center">
            <span className="text-gray-500 mr-1">💧</span>
            <span>{wateringFrequency}</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-500 mr-1">🌡️</span>
            <span>{careLevel}</span>
          </div>
        
        </div>

        <div className="flex justify-between mt-4">
            <button className="flex-1 bg-blue-100 hover:bg-blue-200 text-blue-600 py-2 px-4 rounded-lg text-sm font-medium transition-colors">
              View Details
            </button>
        </div>
      </div>
    </div>
  )
};

export default PlantCard2;