import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AuthContext from "../../Provider/AuthContext";
import { useLoaderData, useNavigate } from "react-router";
import { useContext } from "react";
import Swal from "sweetalert2";
import DocumentTitle from "../Others/DocumentTitle";

const UpdatePlant = () => {
  const { user } = useContext(AuthContext);
  const plant = useLoaderData();
  console.log(plant);
  const navigate = useNavigate();
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
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date(nextWateredDate));
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatePlant = Object.fromEntries(formData.entries());
    console.log(updatePlant);
    // Send Update Plant Data to server
    fetch(`https://plant-care-tracker-server-nine.vercel.app/plants/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatePlant),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Plant Updated Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myplants");
        }
      });
  };

  DocumentTitle("Update Plant");
  return (
    <div className="space-y-5 max-w-6xl mx-auto my-10 py-10 bg-gradient-to-b from-orange-50 to-teal-50 rounded-lg shadow-sm dark:from-gray-800 dark:to-gray-900">
      <div>
        <h1 className="text-3xl md:text-4xl italic text-green-700 font-semibold px-24 text-center dark:text-gray-300">
          Update Plant
        </h1>
        <p className="text-center text-md font-semibold px-2 md:px-12 italic dark:text-gray-300">
          Fill in the details below to add a new plant to your collection.
          Include the plant’s name, image, description, and any specific care
          instructions to help track its growth and health.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-8/12 px-4 mx-auto space-y-5"
      >
        <div className="flex gap-10">
          <label className="w-full italic">
            <span className="text-xl font-semibold dark:text-gray-300">Name</span>
            <input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Enter Plant Name"
              className="input input-neutral w-full dark:text-gray-800"
            />
          </label>
          <label className="w-full italic">
            <span className="text-xl font-semibold dark:text-gray-300">Category</span>
            <select
              name="category"
              defaultValue={category}
              required
              className="input input-neutral w-full dark:text-gray-800"
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="Succulent">Succulent</option>
              <option value="Flowering">Flowering</option>
              <option value="Fern">Fern</option>
            </select>
          </label>
        </div>
        <div className="flex gap-10">
          <label className="w-full italic">
            <span className="text-xl font-semibold dark:text-gray-300">Image</span>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Enter Photo URL"
              className="input input-neutral w-full dark:text-gray-800"
            />
          </label>
          <label className="w-full italic">
            <span className="text-xl font-semibold dark:text-gray-300">Description</span>
            <input
              type="text"
              name="description"
              defaultValue={description}
              placeholder="Enter Plant Description"
              className="input input-neutral w-full dark:text-gray-800"
            />
          </label>
        </div>
        <div className="flex gap-10">
          <label className="w-full italic">
            <span className="text-xl font-semibold dark:text-gray-300">Care Level</span>
            <select
              name="careLevel"
              defaultValue={careLevel}
              required
              className="input input-neutral w-full dark:text-gray-800"
            >
              <option value="" disabled>
                Select a level
              </option>
              <option value="Easy">Easy</option>
              <option value="Moderate">Moderate</option>
              <option value="Difficult">Difficult</option>
            </select>
          </label>
          <label className="w-full italic">
            <span className="text-xl font-semibold dark:text-gray-300">Watering Frequency</span>
            <select
              name="wateringFrequency"
              defaultValue={wateringFrequency}
              required
              className="input input-neutral w-full dark:text-gray-800"
            >
              <option value="" disabled>
                Select a frequency
              </option>
              <option value="Every 2 days">Every 2 days</option>
              <option value="Every 3 days">Every 3 days</option>
              <option value="Every 5 days">Every 5 days</option>
              <option value="Every 7 days">Every 7 days</option>
            </select>
          </label>
        </div>
        <div className="flex gap-10">
          <label className="w-full italic">
            <span className="text-xl font-semibold dark:text-gray-300">Last Watered Date</span>

            <DatePicker
              name="lastWateredDate"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="input input-neutral w-full dark:text-gray-800"
              defaultValue={lastWateredDate}
            />
          </label>
          <label className="w-full italic">
            <span className="text-xl font-semibold dark:text-gray-300">Health Status</span>
            <select
              name="healthStatus"
              defaultValue={healthStatus}
              required
              className="input input-neutral w-full dark:text-gray-800"
            >
              <option value="" disabled>
                Select Health Status
              </option>
              <option value="Poor">Poor</option>
              <option value="Normal">Normal</option>
              <option value="Good">Good</option>
              <option value="Great">Great</option>
            </select>
          </label>
          <label className="w-full italic">
            <span className="text-xl font-semibold dark:text-gray-300">Next Watered Date</span>
            <DatePicker
              name="nextWateredDate"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              className="input input-neutral w-full dark:text-gray-800"
              defaultValue={nextWateredDate}
            />
          </label>
        </div>
        <div className="flex gap-10">
          <label className="w-full italic">
            <span className="text-xl font-semibold dark:text-gray-300">User Name</span>
            <input
              className="input input-neutral w-full dark:text-gray-800"
              type="text"
              name="userName"
              value={user?.displayName}
              placeholder="Enter User Name"
            />
          </label>
          <label className="w-full italic">
            <span className="text-xl font-semibold dark:text-gray-300">User Email</span>
            <input
              className="input input-neutral w-full dark:text-gray-800"
              type="text"
              name="userEmail"
              value={user?.email}
              placeholder="Enter User Email"
            />
          </label>
        </div>
        <button type="submit" className="btn bg-green-800 w-full text-white">
          Update Plant
        </button>
      </form>
    </div>
  );
};

export default UpdatePlant;
