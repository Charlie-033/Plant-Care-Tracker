import React, { useEffect, useState } from "react";
import { Link } from "react-router";

import Loader from "../Others/Loader";
import PlantCard2 from "../Navbar/PlantCard2";

const EasyCarePlants = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://plant-care-tracker-s.vercel.app/easycare-plants")
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="py-16 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl text-center text-green-700 font-bold italic py-5">
        Easy Care Plants
      </h2>
      {plants.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {plants.map((plant) => (
            <PlantCard2
              key={plant._id}
              plant={plant}
              plants={plants}
              setPlants={setPlants}
            />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-72">
          <h2 className="text-center text-2xl font-bold text-gray-700">
            No easy care plants found. <br />
          </h2>
        </div>
      )}
    </div>
  );
};

export default EasyCarePlants;
