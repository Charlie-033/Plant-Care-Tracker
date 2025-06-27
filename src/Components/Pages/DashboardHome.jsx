import React, { useContext, useEffect, useState } from 'react';
import useDocumentTitle from '../Others/useDocumentTitle';
import AuthContext from '../../Provider/AuthContext';
import Loader from '../Others/Loader';

const DashboardHome = () => {
  useDocumentTitle("Dashboard");
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://plant-care-tracker-s.vercel.app/dashboard/overview?email=${encodeURIComponent(user.email)}`)
      .then(res => res.json())
      .then(data => {
        setStats(data);
        setLoading(false);
        console.log(data);
      });
  }, [user?.email]);

  if (loading) return <Loader />;

  // Destructure stats to get data easily
  const {
    totalPlants,
    myPlantsCount,
    topCategory,
    topCategoryCount
  } = stats || {};

  return (
    <>
      <h2 className="text-center text-4xl border-b-2 pb-3 border-gray-600 italic font-bold text-green-700 pt-5">
        Overview
      </h2>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 mt-8">
        {/* Profile Card: full width */}
        <div className="w-full bg-green-50 dark:bg-slate-800 rounded-xl shadow-md p-6 mb-8">
          <h3 className="flex items-center text-xl font-bold text-green-800 dark:text-green-300 mb-4">
            {user?.photoURL && (
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
            )}
            My Profile
          </h3>
          <ul className="text-sm leading-7 text-gray-700 dark:text-gray-300">
            <li className='font-bold text-[17px]'><strong className='text-lg text-green-800'>Name : </strong> {user?.displayName || "N/A"}</li>
            <li className='font-bold'><strong className='text-[16px] text-green-800'>Email : </strong> {user?.email}</li>
            {/* Add more profile info here if needed */}
          </ul>
          <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
            These are your profile details currently registered with PlantLab.
          </p>
        </div>

        {/* Cards container */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Total Plants Card */}
          <div className="p-5 rounded-xl shadow-md bg-green-50 dark:bg-slate-800">
            <h3 className="text-xl font-bold text-green-800 dark:text-green-300">
              🌿 Total Plants
            </h3>
            <p className="text-3xl mt-2 font-semibold">{totalPlants}</p>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              This is the total number of plants being tracked by all users on PlantLab.
            </p>
          </div>

          {/* My Plants Card */}
          <div className="p-5 rounded-xl shadow-md bg-green-50 dark:bg-slate-800">
            <h3 className="text-xl font-bold text-green-800 dark:text-green-300">
              🪴 My Plants
            </h3>
            <p className="text-3xl mt-2 font-semibold">{myPlantsCount}</p>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              Plants you've personally added to your collection and are caring for.
            </p>
          </div>

          {/* Top Plant Category Card */}
          <div className="p-5 rounded-xl shadow-md bg-green-50 dark:bg-slate-800 text-center">
            <h3 className="text-xl font-semibold mb-3 text-green-800 dark:text-gray-200">Top Plant Category</h3>
            {topCategory === "No plants yet" ? (
              <p className="text-gray-600 dark:text-gray-400">You haven’t added any plants yet.</p>
            ) : (
              <>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">{topCategory}</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  You have <strong>{topCategoryCount}</strong> plant{topCategoryCount > 1 ? "s" : ""} in this category.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
