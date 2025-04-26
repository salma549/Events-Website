


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



// import React, { useState } from "react";
// import {
//   Landmark,
//   Building2,
//   TowerControl,
//   Globe,
//   Hotel,
//   Navigation,
//   MapPin,
//   Library,
//   Compass,
//   Home,
//   Flag,
//   Plane,
//   Mountain,
// } from "lucide-react";



// const BrowseEvents = () => {
//   const allCities = [
//     { name: "London", icon: <Landmark size={48} /> },
//     { name: "Dubai", icon: <Building2 size={48} /> },
//     { name: "Berlin", icon: <TowerControl size={48} /> },
//     { name: "Paris", icon: <Globe size={48} /> },
//     { name: "New York", icon: <Hotel size={48} /> },
//     { name: "Tokyo", icon: <Navigation size={48} /> },
//     { name: "Sydney", icon: <MapPin size={48} /> },
//     { name: "Toronto", icon: <Library size={48} /> },
//     { name: "Rome", icon: <Compass size={48} /> },
//     { name: "Barcelona", icon: <Home size={48} /> },
//     { name: "Istanbul", icon: <Flag size={48} /> },
//     { name: "Singapore", icon: <Plane size={48} /> },
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
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ml-10 bg-white p-10 sm:p-6 rounded-lg shadow-md">
//           {displayedCities.map((city) => (
//             <div
//               key={city.name}
//               className="bg-gray-200 w-56 h-56 flex flex-col justify-center items-center rounded-lg shadow-lg hover:cursor-pointer"
//             >
//               <div className="text-gray-700">{city.icon}</div>
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
import towerBridge from "../../assets/images/tower-bridge-london.jpeg";
import BurjKhalifa from "../../assets/images/Burj-Khalifa.jpeg";
import Bandenburger from "../../assets/images/Brandenburger.jpeg";
import Eiffel from "../../assets/images/Tour_Eiffel.jpg";
const BrowseEvents = () => {
  const allCities = [
    { 
      name: "London", 
      imageUrl: towerBridge  // use local image
    },
    { 
      name: "Dubai", 
      imageUrl: BurjKhalifa
    },
    { 
      name: "Berlin", 
      imageUrl: Bandenburger
    },
    { 
      name: "Paris", 
      imageUrl: Eiffel
    },
    { 
      name: "New York", 
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg"
    },
    { 
      name: "Tokyo", 
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Tokyo_Tower_and_around_Skyscrapers.jpg"
    },
    { 
      name: "Sydney", 
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/40/Sydney_Opera_House_Sails.jpg"
    },
    { 
      name: "Toronto", 
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d3/CN_Tower_from_front_of_Rogers_Centre.jpg"
    },
    { 
      name: "Rome", 
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg"
    },
    { 
      name: "Barcelona", 
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/45/Sagrada_Familia_01.jpg"
    },
    { 
      name: "Istanbul", 
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Blue_Mosque%2C_Istanbul_September_2008_crop.jpg"
    },
    { 
      name: "Singapore", 
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Merlion_Singapore_Marina_Bay.jpg"
    },
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
              className="bg-gray-200 w-56 h-64 flex flex-col justify-center items-center rounded-lg shadow-lg hover:cursor-pointer overflow-hidden"
            >
              <img 
                src={city.imageUrl} 
                alt={city.name} 
                className="w-full h-40 object-cover rounded-t-lg"
              />
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
