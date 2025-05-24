import React, { useEffect, useState } from "react";
import Loader from "../Others/Loader";
import { Link } from "react-router";
import DocumentTitle from "../Others/DocumentTitle";

const AllPlants = () => {
  // const loader = <Loader/>
  const [plants, setPlants] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [loading, setLoading] = useState(<Loader/>);
  useEffect(() => {
    let url = "https://plant-care-tracker-server-nine.vercel.app/plants";
    if(sortBy === "wateringFrequency"){
      url += "?sort=wateringFrequency";
    } else if(sortBy === "careLevel"){
      url += "?sort=careLevel";
    } else url


    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPlants(data);
        setLoading(false);
      });
  }, [sortBy, loading]);

  DocumentTitle("All Plants");
  return (
    <div className="overflow-x-auto py-10 pl-5">
      <h2 className="text-center text-4xl border-b-2 pb-3 border-gray-600 italic font-bold text-green-700">All Plants</h2>
      <label className="flex items-center gap-3 my-5">
        <span className=" font-semibold">Sort by :</span>
        <select name="" value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="rounded ">

          <option className="dark:text-gray-200 dark:bg-gray-800" value="">Order</option>
          <option className="dark:text-gray-200 dark:bg-gray-800" value="wateringFrequency">Watering Freequency</option>
          <option className="dark:text-gray-200 dark:bg-gray-800" value="careLevel">Care level</option>
        </select>
      </label>
  
      <table className="table">
        {/* head */}
        <thead className="bg-gradient-to-b from-green-50 to-teal-50">
          <tr>
            <th>SL No.</th>
            <th>Plant Name</th>
            <th>Category</th>
            <th>Watering Frequency</th>
            <th>Care Level</th>
            <th>Details</th>
          </tr>
        </thead>
        {loading ? (
          <tr>
            <td colSpan={6}>
                <Loader />
            </td>
          </tr>
        ) : (
          <tbody>
            {plants.map((plant, index) => (
              <tr key={plant._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={plant.photo}
                          alt="Avatar Tailwind CSS Component"
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{plant.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">
                    {plant.category}
                  </span>
                </td>
                <td>{plant.wateringFrequency}</td>
                <td>{plant.careLevel}</td>
                <th className="">
                  <Link to={`/plants/${plant._id}`}>
                  <button className="btn btn-xs btn-info">Details</button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default AllPlants;
