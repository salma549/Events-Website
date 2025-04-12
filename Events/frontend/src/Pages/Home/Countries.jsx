


// import React from "react";

// const Countries = () => {
//   const countries = [
//     { name: "US", flag: "https://flagcdn.com/us.svg" },
//     { name: "UK", flag: "https://flagcdn.com/gb.svg" },
//     { name: "India", flag: "https://flagcdn.com/in.svg" },
//     { name: "UAE", flag: "https://flagcdn.com/ae.svg" },
//     { name: "Australia", flag: "https://flagcdn.com/au.svg" },
//     { name: "Spain", flag: "https://flagcdn.com/es.svg" },
//     { name: "France", flag: "https://flagcdn.com/fr.svg" },
//     { name: "China", flag: "https://flagcdn.com/cn.svg" },
//   ];

//   return (
//     <div className="px-4 py-8  mt-10">
//       <div className="ml-14 ">
//         <h2 className="text-4xl font-bold text-green-700 mt-10">Discover Events By Country</h2>
//         <p className="text-gray-800 mb-4">Explore opportunities worldwide</p>
//       </div>
//       <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-24 max-full mx-auto ml-3 mr-3 bg-gray-50 p-6">
//         {countries.map((country, index) => (
//           <div
//             key={index}
//             className="relative group bg-black text-white rounded-bl-[50px] p-5 shadow-lg hover:cursor-pointer hover:scale-105 transition-transform flex flex-col justify-between"
//           >
//             {/* Flag */}
//             <div className="flex justify-center items-center mb-4 hover:cursor-pointer">
//               <img
//                 src={country.flag}
//                 alt={`${country.name} flag`}
//                 className="w-24 h-24 object-cover rounded-md"
//               />
//             </div>

//             {/* Country Name */}
//             <div className="text-center">
//               <p className="text-lg font-semibold">{country.name}</p>
//             </div>

//             {/* Glow Effect */}
//             <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-blue-500 opacity-0 group-hover:opacity-30 transition-opacity rounded-bl-[50px]"></div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Countries;

// import React from "react";

// const Countries = () => {
//   const countries = [
//     { name: "US", flag: "https://flagcdn.com/us.svg" },
//     { name: "UK", flag: "https://flagcdn.com/gb.svg" },
//     { name: "India", flag: "https://flagcdn.com/in.svg" },
//     { name: "UAE", flag: "https://flagcdn.com/ae.svg" },
//     { name: "Australia", flag: "https://flagcdn.com/au.svg" },
//     { name: "Spain", flag: "https://flagcdn.com/es.svg" },
//     { name: "France", flag: "https://flagcdn.com/fr.svg" },
//     { name: "China", flag: "https://flagcdn.com/cn.svg" },
//   ];

//   return (
//     <div className="px-4 py-8 mt-10">
//       {/* Heading Section */}
//       <div className="ml-10 mb-6">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-500">
//           Discover Events By Country
//         </h2>
//         <p className="text-gray-800 text-sm sm:text-base">
//           Explore opportunities worldwide
//         </p>
//       </div>

//       {/* Countries Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-10 mx-auto bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md">
//         {countries.map((country, index) => (
//           <div
//             key={index}
//             className="relative group bg-black text-white rounded-bl-[40px] p-4 sm:p-5 shadow-lg hover:cursor-pointer hover:scale-105 transition-transform flex flex-col justify-between"
//           >
//             {/* Flag */}
//             <div className="flex justify-center items-center mb-4">
//               <img
//                 src={country.flag}
//                 alt={`${country.name} flag`}
//                 className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-md"
//               />
//             </div>

//             {/* Country Name */}
//             <div className="text-center">
//               <p className="text-sm sm:text-base md:text-lg font-semibold">
//                 {country.name}
//               </p>
//             </div>

//             {/* Glow Effect */}
//             <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-blue-500 opacity-0 group-hover:opacity-30 transition-opacity rounded-bl-[40px]"></div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Countries;


import React from "react";

const Countries = () => {
  const countries = [
    { name: "US", flag: "https://flagcdn.com/us.svg" },
    { name: "UK", flag: "https://flagcdn.com/gb.svg" },
    { name: "India", flag: "https://flagcdn.com/in.svg" },
    { name: "UAE", flag: "https://flagcdn.com/ae.svg" },
    { name: "Australia", flag: "https://flagcdn.com/au.svg" },
    { name: "Spain", flag: "https://flagcdn.com/es.svg" },
    { name: "France", flag: "https://flagcdn.com/fr.svg" },
    { name: "China", flag: "https://flagcdn.com/cn.svg" },
    { name: "Germany", flag: "https://flagcdn.com/de.svg" },
    { name: "Japan", flag: "https://flagcdn.com/jp.svg" }
    
  ];
  return (
    <div className="px-10 py-10 mt-10 bg-white ">
      {/* Heading Section */}
      <div className="ml-10 mb-6">
        <h2 className="text-4xl font-bold text-green-500 ">Discover Events By Country</h2>
        <p className="text-gray-800 mb-4">Explore opportunities worldwide</p>
      </div>

      {/* Countries Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-9">
        {countries.map((country, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105"
          >
            {/* Flag */}
            <img
              src={country.flag}
              alt={`${country.name} flag`}
              className="w-full h-28 sm:h-32 object-cover rounded-t-xl"
            />

            {/* Country Name */}
            <div className="text-center py-2">
              <p className="text-gray-800 text-base font-medium">{country.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;