import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../Provider/AuthContext";
import PlantCard from "./PlantCard";
import { Link } from "react-router";

const MyPlants = () => {
  const [plants, setPlants] = useState([]);
  const { user } = useContext(AuthContext);
  const email = user?.email;
  //   console.log(email, user);
  // Fetch user's plants from the server
  useEffect(() => {
    if (!email) return;
    // Fetch plants data from the server
    const fetchPlants = async () => {
      const response = await fetch(
        `http://localhost:3001/plants/user/${encodeURIComponent(email)}`
      );
      const data = await response.json();
      console.log(data);
      setPlants(data);
    };
    fetchPlants();
  }, [email]);

  return (
    <div className="py-5 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl border-b-2 pb-3 border-gray-600 italic font-bold text-green-700">
        My Plants
      </h2>

      {plants.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {plants.map((plant) => (
            <PlantCard key={plant._id} plant={plant}></PlantCard>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-72">
          <h2 className="text-center text-2xl font-bold text-gray-700">
            No plants found. Please add some plants to your collection.
          </h2> <br />
          <p><Link className="btn btn-md btn-success">Add Plant</Link></p>
        </div>
      )}
    </div>
  );
};

export default MyPlants;
