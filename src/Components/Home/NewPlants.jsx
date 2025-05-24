import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import PlantCard2 from "../Navbar/PlantCard2";
import Loader from "../Others/Loader";

const NewPlants = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://plant-care-tracker-server-nine.vercel.app/plants/recent")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPlants(data);
        setLoading(false);
      });
  }, [loading]);
  if (loading) return <Loader />;

  return (
    <div className="py-5 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl text-center text-green-700 font-bold italic py-5">
        Most Recent Plants
      </h2>
      {plants.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {plants.map((plant) => (
            <PlantCard2
              key={plant._id}
              plant={plant}
              plants={plants}
              setPlants={setPlants}
            ></PlantCard2>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-72">
          <h2 className="text-center text-2xl font-bold text-gray-700">
            No plants found. Please add some plants to your collection.
            <br />
            <Link to="/addplant" className="btn btn-sm bg-green-700">
              Add Plant
            </Link>
          </h2>
        </div>
      )}
    </div>
  );
};

export default NewPlants;
