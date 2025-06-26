import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const PlantCard = ({ plant, setPlants }) => {
  const handleDelete = (id) => {
    // console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://plant-care-tracker-s.vercel.app/plants/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              setPlants((prevPlants) =>
                prevPlants.filter((plant) => plant._id !== id)
              );
            }
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your plant has been deleted.",
          icon: "success",
        });
      }
    });
  };
  const {
    _id,
    name,
    category,
    photo,
    description,
    careLevel,
    wateringFrequency,
    lastWateredDate,
    healthStatus,
    nextWateredDate,
  } = plant;
  return (
    <div
      key={_id}
      className="relative bg-white rounded-xl shadow-md overflow-hidden border border-green-100 hover:shadow-lg transition-shadow duration-300 max-w-sm mx-auto dark:bg-gray-600 w-full"
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

        <h3 className="text-xl font-bold text-gray-800 mb-1 dark:text-gray-300">{name}</h3>

        <p className="text-gray-600 mb-3 line-clamp-2 dark:text-gray-300">{description}</p>

        <div className="grid grid-cols-2 gap-2 text-sm mb-4">
          <div className="flex items-center dark:text-gray-300">
            <span className="text-gray-500 mr-1">💧</span>
            <span>{wateringFrequency}</span>
          </div>
          <div className="flex items-center dark:text-gray-300">
            <span className="text-gray-500 mr-1">🌡️</span>
            <span>{careLevel}</span>
          </div>
          <div className="flex items-center dark:text-gray-300">
            <span className="text-gray-500 mr-1">⏱️</span>
            <span>Last: {new Date(lastWateredDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center dark:text-gray-300">
            <span className="text-gray-500 mr-1">📅</span>
            <span>Next: {new Date(nextWateredDate).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="flex items-center mb-4">
          <span
            className={`w-3 h-3 rounded-full mr-2 dark:text-gray-300 ${
              healthStatus === "Great"
                ? "bg-green-500"
                : healthStatus === "Good"
                ? "bg-blue-500"
                : healthStatus === "Normal"
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
          ></span>
          <span className="text-sm font-medium">{healthStatus}</span>
        </div>

        <div className="flex justify-between mt-4">
          <Link to={`/updateplant/${plant._id}`} className="w-full">
            <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
              Update
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="flex-1 bg-red-100 hover:bg-red-200 text-red-600 py-2 px-4 rounded-lg text-sm font-medium transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
