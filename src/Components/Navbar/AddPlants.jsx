import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AuthContext from "../../Provider/AuthContext";
import { toast } from "react-toastify";

const AddPlants = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newPlant = Object.fromEntries(formData.entries());
    console.log(newPlant);

    // Send New Plant Data to server
    fetch("http://localhost:3001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Plant Added Successfully");
          console.log(data);
        }
      });
  };
  return (
    <div className="space-y-5 max-w-6xl mx-auto my-10 py-10 bg-gradient-to-b from-green-50 to-teal-50 rounded-lg shadow-sm">
      <div className="">
        <h1 className="text-4xl italic text-green-700 font-semibold px-24 text-center">
          Add A Plant
        </h1>
        <p className="text-center text-md font-semibold px-12 italic">
          Fill in the details below to add a new plant to your collection.
          Include the plant’s name, image, description, and any specific care
          instructions to help track its growth and health.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="w-8/12 mx-auto space-y-5">
        <div className="flex gap-10">
          <label className="w-full italic">
            <span className="text-xl font-semibold">Name</span>
            <input
              type="text"
              name="name"
              placeholder="Enter Plant Name"
              className="input input-neutral w-full"
            />
          </label>
          <label className="w-full italic">
            <span className="text-xl font-semibold">Category</span>
            <select
              name="category"
              defaultValue=""
              required
              className="input input-neutral w-full"
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
            <span className="text-xl font-semibold">Image</span>
            <input
              type="text"
              name="photo"
              placeholder="Enter Photo URL"
              className="input input-neutral w-full"
            />
          </label>
          <label className="w-full italic">
            <span className="text-xl font-semibold">Description</span>
            <input
              type="text"
              name="description"
              placeholder="Enter Plant Description"
              className="input input-neutral w-full"
            />
          </label>
        </div>
        <div className="flex gap-10">
          <label className="w-full italic">
            <span className="text-xl font-semibold">Care Level</span>
            <select
              name="careLevel"
              defaultValue=""
              required
              className="input input-neutral w-full"
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
            <span className="text-xl font-semibold">Watering Frequency</span>
            <select
              name="wateringFrequency"
              defaultValue=""
              required
              className="input input-neutral w-full"
            >
              <option value="" disabled>
                Select a frequency
              </option>
              <option value="Every 2 days">Every 2 days</option>
              <option value="Every 3 days">Every 3 days</option>
              <option value="Every 5 days">Every 5 days</option>
            </select>
          </label>
        </div>
        <div className="flex gap-10">
          <label className="w-full italic">
            <span className="text-xl font-semibold">Last Watered Date</span>

            <DatePicker
              name="lastWateredDate"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="input input-neutral w-full"
            />
          </label>
          <label className="w-full italic">
            <span className="text-xl font-semibold">Health Status</span>
            <select
              name="healthStatus"
              defaultValue=""
              required
              className="input input-neutral w-full"
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
            <span className="text-xl font-semibold">Next Watered Date</span>
            <DatePicker
              name="nextWateredDate"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              className="input input-neutral w-full"
            />
          </label>
        </div>
        <div className="flex gap-10">
          <label className="w-full italic">
            <span className="text-xl font-semibold">User Name</span>
            <input
              className="input input-neutral w-full"
              type="text"
              name="userName"
              value={user?.displayName}
              placeholder="Enter User Name"
            />
          </label>
          <label className="w-full italic">
            <span className="text-xl font-semibold">User Email</span>
            <input
              className="input input-neutral w-full"
              type="text"
              name="userEmail"
              value={user?.email}
              placeholder="Enter User Email"
            />
          </label>
        </div>
        <button type="submit" className="btn bg-green-800 w-full text-white">
          Add Plant
        </button>
      </form>
    </div>
  );
};

export default AddPlants;
