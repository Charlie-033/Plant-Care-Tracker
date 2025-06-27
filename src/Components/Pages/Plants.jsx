import React, { useEffect, useState } from "react";
import Loader from "../Others/Loader";
import { Link } from "react-router"; 
import useDocumentTitle from "../Others/useDocumentTitle";

const Plants = () => {
  const [plants, setPlants] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url = "https://plant-care-tracker-s.vercel.app/plants";
    if (sortBy === "wateringFrequency") {
      url += "?sort=wateringFrequency";
    } else if (sortBy === "careLevel") {
      url += "?sort=careLevel";
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
        setLoading(false);
      });
  }, [sortBy]);

  useDocumentTitle("All Plants");

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <h2 className="text-center text-4xl border-b-2 pb-3 border-gray-600 italic font-bold text-green-700">
        All Plants
      </h2>

      <div className="flex justify-end items-center gap-3 my-5">
        <span className="font-semibold">Sort by:</span>
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
            setLoading(true);
          }}
          className="rounded px-3 py-1 border dark:text-gray-200 dark:bg-gray-800"
        >
          <option value="">Order</option>
          <option value="wateringFrequency">Watering Frequency</option>
          <option value="careLevel">Care Level</option>
        </select>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plants.map((plant) => (
            <div
              key={plant._id}
              className="bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden transition hover:shadow-xl"
            >
              <img
                src={plant.photo}
                alt={plant.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold text-green-700">
                  {plant.name}
                </h3>
                <p>
                  <span className="font-medium">Category:</span>{" "}
                  {plant.category}
                </p>
                <p>
                  <span className="font-medium">Care Level:</span>{" "}
                  {plant.careLevel}
                </p>
                <div className="text-right">
                  <Link to={`/plants/${plant._id}`}>
                    <button className="btn btn-info btn-sm">Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Plants;
