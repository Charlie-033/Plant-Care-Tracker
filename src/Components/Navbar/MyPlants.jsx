// import React, { useContext, useEffect, useState } from "react";
// import AuthContext from "../../Provider/AuthContext";

// const MyPlants = () => {
//   const [plants, setPlants] = useState([]);
//   const { user } = useContext(AuthContext);
//   const email = user?.email;
//   console.log(email, user);
//   // Fetch user's plants from the server
//   useEffect(() => {
//     if (!email) return;
//     // Fetch plants data from the server
//     const fetchPlants = async () => {
//       const response = await fetch(
//         `http://localhost:3001/plants/user/${encodeURIComponent(email)}`
//       );
//       const data = await response.json();
//       console.log(data);
//       setPlants(data);
//     };
//     fetchPlants();
//   }, [email]);
//   return (
//     <div className="py-5 max-w-7xl mx-auto">
//       <h2 className="text-center text-4xl border-b-2 pb-3 border-gray-600 italic font-bold text-green-700">
//         My Plants
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
//         {plants.length > 0 ? (
//           <div className="card bg-base-100 w-96 shadow-sm">
//             <figure>
//               <img
//                 src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//                 alt="Shoes"
//               />
//             </figure>
//             <div className="card-body">
//               <h2 className="card-title">
//                 Card Title
//                 <div className="badge badge-secondary">NEW</div>
//               </h2>
//               <p>
//                 A card component has a figure, a body part, and inside body
//                 there are title and actions parts
//               </p>
//               <div className="card-actions justify-end">
//                 <div className="badge badge-outline">Fashion</div>
//                 <div className="badge badge-outline">Products</div>
//               </div>
//             </div>
//           </div>
//         ) : (
          
//           <div>
//             <h2 className="text-center text-2xl font-bold text-gray-700">
//               No plants found. Please add some plants to your collection.
//             </h2>
//             <img
//               src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//               alt="No Plants"
//               className="mx-auto mt-5"
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyPlants;
