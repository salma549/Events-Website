


// import React from "react";

// const BrowseEvents = () => {
//   const cities = [
//     { name: "London", icon: "🌉" },
//     { name: "Dubai", icon: "🏙️" },
//     { name: "Berlin", icon: "🏛️" },
//     { name: "Paris", icon: "🗼" },
//   ];

//   return (
//     <div className="p-4">
//       <div className="hover:cursor-pointer  py-7">
//         <h2 className="text-4xl font-bold text-green-500 ml-10">
//           Browse Events By City
//         </h2>
//         <p className="text-gray-800 mb-4 ml-10">Explore opportunities By Cities</p>
//         <div className="flex flex-wrap justify-center md:justify-between mt-6 gap-2 ml-10 hover:cursor-pointer bg-gray-200 p-10 sm:p-6 rounded-lg shadow-md">
//           {cities.map((city) => (
//             <div
//               key={city.name}
//               className="bg-white text-white w-44 h-44 flex flex-col justify-center items-center rounded-lg shadow-lg hover:cursor-pointer"
//             >
//               <div className="text-7xl animate-zoom">{city.icon}</div>
//               <h3 className="mt-4 text-lg font-semibold">{city.name}</h3>
//             </div>
//           ))}
//           <div className="flex justify-center items-center">
//             <button className="text-green-500 font-semibold text-lg">
//               More →
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BrowseEvents;


// import React from "react";

// const BrowseEvents = () => {
//   const cities = [
//     { name: "London", icon: "🌉" },
//     { name: "Dubai", icon: "🏙️" },
//     { name: "Berlin", icon: "🏛️" },
//     { name: "Paris", icon: "🗼" },
//   ];

//   return (
//     <div className="p-4">
//       <div className="hover:cursor-pointer py-7">
//         <h2 className="text-4xl font-bold text-green-500 ml-10">
//           Browse Events By City
//         </h2>
//         <p className="text-gray-800 mb-4 ml-10">
//           Explore opportunities By Cities
//         </p>
//         <div className="flex flex-wrap justify-center md:justify-between mt-6 gap-4 ml-10 bg-gray-200 p-10 sm:p-6 rounded-lg shadow-md">
//           {cities.map((city) => (
//             <div
//               key={city.name}
//               className="bg-white w-44 h-44 flex flex-col justify-center items-center rounded-lg shadow-lg hover:cursor-pointer"
//             >
//               <div className="text-7xl">{city.icon}</div>
//               <h3 className="mt-4 text-lg font-semibold text-gray-800">
//                 {city.name}
//               </h3>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-center mt-6">
//           <button className="text-green-500 font-semibold text-lg hover:underline">
//             More →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BrowseEvents;


// import React, { useState } from "react";

// const BrowseEvents = () => {
//   const allCities = [
//     { name: "London", icon: "🌉" },
//     { name: "Dubai", icon: "🏙️" },
//     { name: "Berlin", icon: "🏛️" },
//     { name: "Paris", icon: "🗼" },
//     { name: "New York", icon: "🗽" },
//     { name: "Tokyo", icon: "🗾" },
//     { name: "Sydney", icon: "🌉" },
//     { name: "Toronto", icon: "🏙️" },
//     { name: "Rome", icon: "🏛️" },
//     { name: "Barcelona", icon: "🎨" },
//     { name: "Istanbul", icon: "🕌" },
//     { name: "Singapore", icon: "🌆" },
//   ];

//   const [showMore, setShowMore] = useState(false);
//   const displayedCities = showMore ? allCities : allCities.slice(0, 4);

//   return (
//     <div className="p-4">
//       <div className="py-7">
//         <h2 className="text-4xl font-bold text-green-500 ml-10">
//           Browse Events By City
//         </h2>
//         <p className="text-gray-800 mb-4 ml-10">
//           Explore opportunities By Cities
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ml-10 bg-gray-200 p-10 sm:p-6 rounded-lg shadow-md">
//           {displayedCities.map((city) => (
//             <div
//               key={city.name}
//               className="bg-white w-44 h-44 flex flex-col justify-center items-center rounded-lg shadow-lg hover:cursor-pointer"
//             >
//               <div className="text-7xl">{city.icon}</div>
//               <h3 className="mt-4 text-lg font-semibold text-gray-800">
//                 {city.name}
//               </h3>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-center mt-6">
//           <button
//             className="text-green-500 font-semibold text-lg hover:underline"
//             onClick={() => setShowMore(!showMore)}
//           >
//             {showMore ? "Show Less ↑" : "More →"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BrowseEvents;



import React, { useState } from "react";
import {
  Landmark,
  Building2,
  TowerControl,
  Globe,
  Hotel,
  Navigation,
  MapPin,
  Library,
  Compass,
  Home,
  Flag,
  Plane,
  Mountain,
} from "lucide-react";



const BrowseEvents = () => {
  const allCities = [
    { name: "London", icon: <Landmark size={48} /> },
    { name: "Dubai", icon: <Building2 size={48} /> },
    { name: "Berlin", icon: <TowerControl size={48} /> },
    { name: "Paris", icon: <Globe size={48} /> },
    { name: "New York", icon: <Hotel size={48} /> },
    { name: "Tokyo", icon: <Navigation size={48} /> },
    { name: "Sydney", icon: <MapPin size={48} /> },
    { name: "Toronto", icon: <Library size={48} /> },
    { name: "Rome", icon: <Compass size={48} /> },
    { name: "Barcelona", icon: <Home size={48} /> },
    { name: "Istanbul", icon: <Flag size={48} /> },
    { name: "Singapore", icon: <Plane size={48} /> },
  ];

  const [showMore, setShowMore] = useState(false);
  const displayedCities = showMore ? allCities : allCities.slice(0, 4);

  return (
    <div className="p-4">
      <div className="py-7">
        <h2 className="text-4xl font-bold text-green-500 ml-10">
          Browse Events By City
        </h2>
        <p className="text-gray-800 mb-4 ml-10">
          Explore opportunities By Cities
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ml-10 bg-white p-10 sm:p-6 rounded-lg shadow-md">
          {displayedCities.map((city) => (
            <div
              key={city.name}
              className="bg-gray-200 w-56 h-56 flex flex-col justify-center items-center rounded-lg shadow-lg hover:cursor-pointer"
            >
              <div className="text-gray-700">{city.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {city.name}
              </h3>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button
            className="text-green-500 font-semibold text-lg hover:underline"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less ↑" : "More →"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrowseEvents;
