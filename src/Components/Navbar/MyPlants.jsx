import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../Provider/AuthContext";
import PlantCard from "./PlantCard";
import { Link } from "react-router";
import useDocumentTitle from "../Others/useDocumentTitle";
import Loader from "../Others/Loader";

const MyPlants = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const email = user?.email;
  //   console.log(email, user);
  // Fetch user's plants from the server
  useEffect(() => {
    if (!email) return;

    const fetchPlants = async () => {
      const response = await fetch(
        `https://plant-care-tracker-s.vercel.app/plants/user/${encodeURIComponent(
          email
        )}`
      );
      const data = await response.json();
      setPlants(data);
      setLoading(false);
    };

    fetchPlants();
  }, [email]);
  useDocumentTitle("My Plants");
;

  return (
    <div className="py-5 max-w-7xl mx-auto px-2 md:px-5 lg:px-8">
      <h2 className="text-center text-4xl border-b-2 pb-3 border-gray-600 italic font-bold text-green-700">
        My Plants
      </h2>

      {loading ? (
        <Loader />
      ) : plants.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {plants.map((plant) => (
            <PlantCard
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
            No plants found. Please add some plants to your collection.
            <br />
            <Link
              to="/dashboard/addplant"
              className="btn btn-sm bg-green-700 mt-3"
            >
              Add Plant
            </Link>
          </h2>
        </div>
      )}
    </div>
  );
};

export default MyPlants;
