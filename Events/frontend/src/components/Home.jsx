
// import React from 'react';
// import HeroImage from "../assets/images/bg1.jpeg";


// const Home = () => {
//   return (
//     <div>
//       {/* Full-Screen Banner */}
//       <div className="relative h-screen bg-gray-100">
//         {/* Background Image */}
//         <img
//           src={HeroImage}
//           alt="Innovative Solutions"
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black opacity-50"></div>

//         {/* Overlay Text */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 lg:px-0 z-10 hover:cursor-pointer font-poppins">
//           <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
//         Helping Humans Reconnect<br/> Beyond the Digital World.
         
//           </h1>
//           {/* <p className="text-2xl text-white max-w-3xl">
//             At <span className='text-green-500'>TSUPP</span>, we specialize in crafting custom software solutions that empower businesses to thrive in today's digital landscape.
//             Our expertise spans across diverse sectors, allowing us to develop tailored applications that meet the unique needs of our clients.
//           </p> */}
//         </div>
//       </div>

    
     


      
     
//     </div>
//   );
// };

// export default Home;


// import React from 'react';
// import HeroImage from "../assets/images/bg1.jpeg";

// const Home = () => {
//   return (
//     <div>
//       {/* Full-Screen Banner */}
//       <div className="relative h-screen bg-gray-100">
//         {/* Background Image */}
//         <img
//           src={HeroImage}
//           alt="Innovative Solutions"
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black opacity-50"></div>

//         {/* Overlay Text */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 lg:px-0 z-10 hover:cursor-pointer font-poppins">
//           <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
//             Helping Humans Reconnect<br/> Beyond the Digital World.
//           </h1>
//         </div>
//       </div>

//       {/* Button Section */}
//       <div className="flex justify-center space-x-36 mt-8">
//         <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md">
//           All Events
//         </button>
//         <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md">
//           Today
//         </button>
//         <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md">
//           Top 100
//         </button>
//         <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md">
//           Virtual
//         </button>
//         <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md">
//           Network
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;


// import React from "react";
// import HeroImage from "../assets/images/bg2.jpeg";
// import CategorySection from "../Pages/Home/Category";
// import FeaturedEvents from "../Pages/Home/FeaturedEvents";
// import BrowseEvents from "../Pages/Home/BrowseEvents";
// import Countries from "../Pages/Home/Countries";


// const Home = () => {
//   return (
//     <>
//     <div className="relative bg-gray-100">
//       {/* Background Image */}
//       <div className="relative h-[60vh] sm:h-[70vh] lg:h-[70vh] ">
//       <img
//           src={HeroImage}
//           alt="Innovative Solutions"

//           className="w-full h-full object-cover"
//         />
//         {/* Text Overlay */}
//         <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <h1 className="text-white text-center text-2xl sm:text-4xl lg:text-7xl  px-4 font-serif">
//             Helping Humans Reconnect <br /> Beyond the Digital World.
//           </h1>
//         </div>
//       </div>

//       {/* Button Section */}
//       <div className="flex justify-center gap-24 py-4 bg-white shadow-md">
//         <button className="px-10 py-2 text-2xl rounded-full bg-green-500 text-white font-serif hover:bg-green-600 transition">
//           All Events
//         </button>
//         <button className="px-10 py-2 text-2xl rounded-full bg-blue-900 text-white font-serif hover:bg-blue-700 transition">
//           Today
//         </button>
//         <button className="px-10 py-2 text-2xl rounded-full bg-green-500 text-white font-serif hover:bg-green-600 transition">
//           Top 100
//         </button>
//         <button className="px-10 py-2 text-2xl rounded-full bg-blue-900 text-white font-serif hover:bg-blue-700 transition">
//           Virtual
//         </button>
//         <button className="px-10 py-2 text-2xl rounded-full bg-green-500 text-white font-serif hover:bg-green-600 transition">
//           Network
//         </button>
//       </div>
//     </div>
//           <CategorySection />
//       <FeaturedEvents />
//       <BrowseEvents />
//       <Countries/>
//           </>
//   );
// };

// export default Home;


import React from "react";
import HeroImage from "../assets/images/bg2.jpeg";
import CategorySection from "../Pages/Home/Category";
import FeaturedEvents from "../Pages/Home/FeaturedEvents";
import BrowseEvents from "../Pages/Home/BrowseEvents";
import Countries from "../Pages/Home/Countries";

const Home = () => {
  return (
    <>
      <div className="relative bg-gray-100">
        {/* Background Image */}
        <div className="relative h-[50vh] sm:h-[60vh] lg:h-[75vh]">
          <img
            src={HeroImage}
            alt="Innovative Solutions"
            className="w-full h-full object-cover"
          />
          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-white text-center text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl px-2 font-serif">
              Helping Humans Reconnect <br /> Beyond the Digital World.
            </h1>
          </div>
        </div>

        {/* Button Section */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-28 py-6 bg-white shadow-md">
          <button className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg md:text-xl lg:text-2xl rounded-full bg-green-500 text-white font-serif hover:bg-green-600 transition">
            All Events
          </button>
          <button className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg md:text-xl lg:text-2xl rounded-full bg-blue-900 text-white font-serif hover:bg-blue-700 transition">
            Today
          </button>
          <button className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg md:text-xl lg:text-2xl rounded-full bg-green-500 text-white font-serif hover:bg-green-600 transition">
            Top 100
          </button>
          <button className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg md:text-xl lg:text-2xl rounded-full bg-blue-900 text-white font-serif hover:bg-blue-700 transition">
            Virtual
          </button>
          <button className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg md:text-xl lg:text-2xl rounded-full bg-green-500 text-white font-serif hover:bg-green-600 transition">
            Network
          </button>
        </div>
      </div>

      <Countries />
      <BrowseEvents />


      <CategorySection />
      <FeaturedEvents />
     
    </>
  );
};

export default Home;
