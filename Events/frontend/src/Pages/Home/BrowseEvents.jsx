


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


import React from "react";

const BrowseEvents = () => {
  const cities = [
    { name: "London", icon: "🌉" },
    { name: "Dubai", icon: "🏙️" },
    { name: "Berlin", icon: "🏛️" },
    { name: "Paris", icon: "🗼" },
  ];

  return (
    <div className="p-4">
      <div className="hover:cursor-pointer py-7">
        <h2 className="text-4xl font-bold text-green-500 ml-10">
          Browse Events By City
        </h2>
        <p className="text-gray-800 mb-4 ml-10">
          Explore opportunities By Cities
        </p>
        <div className="flex flex-wrap justify-center md:justify-between mt-6 gap-4 ml-10 bg-gray-200 p-10 sm:p-6 rounded-lg shadow-md">
          {cities.map((city) => (
            <div
              key={city.name}
              className="bg-white w-44 h-44 flex flex-col justify-center items-center rounded-lg shadow-lg hover:cursor-pointer"
            >
              <div className="text-7xl">{city.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {city.name}
              </h3>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button className="text-green-500 font-semibold text-lg hover:underline">
            More →
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrowseEvents;

