// import React from "react";
// import { SearchIcon, MapPinIcon, AdjustmentsHorizontalIcon, CalendarIcon, OfficeBuildingIcon, UserGroupIcon, PlusCircleIcon } from "@heroicons/react/outline";

// const Header = () => {
//   return (
//     <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
//       {/* Logo */}
//       <div className="flex items-center space-x-2">
//         <div className="text-lg font-semibold text-green-600">YOUR LOGO</div>
//       </div>

//       {/* Search Bar */}
//       <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 space-x-2 w-1/2">
//         <SearchIcon className="h-5 w-5 text-gray-500" />
//         <input
//           type="text"
//           placeholder="Type Event or Location"
//           className="bg-transparent focus:outline-none text-sm w-full"
//         />
//       </div>

//       {/* Options */}
//       <div className="flex items-center space-x-6">
//         <button className="flex items-center space-x-1 text-sm font-medium text-gray-700">
//           <MapPinIcon className="h-5 w-5 text-green-600" />
//           <span>Nearby</span>
//         </button>

//         <button className="flex items-center space-x-1 text-sm font-medium text-gray-700">
//           <AdjustmentsHorizontalIcon className="h-5 w-5 text-green-600" />
//           <span>Filter</span>
//         </button>

//         <button className="flex items-center space-x-1 text-sm font-medium text-gray-700">
//           <CalendarIcon className="h-5 w-5 text-gray-700" />
//           <span>Events</span>
//         </button>

//         <button className="flex items-center space-x-1 text-sm font-medium text-gray-700">
//           <OfficeBuildingIcon className="h-5 w-5 text-gray-700" />
//           <span>Companies</span>
//         </button>

//         <button className="flex items-center space-x-1 text-sm font-medium text-gray-700">
//           <UserGroupIcon className="h-5 w-5 text-gray-700" />
//           <span>Experts</span>
//         </button>

//         <button className="flex items-center space-x-1 text-sm font-medium text-gray-700">
//           <PlusCircleIcon className="h-5 w-5 text-green-600" />
//           <span>Add Event</span>
//         </button>

//         <button className="bg-green-600 text-white text-sm font-medium py-2 px-4 rounded-full">
//           LOGIN
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;



// import React from "react";
// import logo from "../assets/images/eventLogo.jpeg"

// import { MagnifyingGlassIcon, MapPinIcon, AdjustmentsHorizontalIcon, CalendarDaysIcon, BuildingOffice2Icon, UserGroupIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

// const Header = () => {
//   return (
//     <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
//       {/* Logo */}
//       <div className="flex items-center space-x-2">
//       <img
//         src={logo} // Using the imported logo
//         alt="Logo"
//         className="w-24 h-20" // You can adjust the size here
//       />
    
//     </div>

//       {/* Search Bar */}
//       <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 space-x-2 w-1/2">
//         <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
//         <input
//           type="text"
//           placeholder="Type Event or Location"
//           className="bg-transparent focus:outline-none text-sm w-full"
//         />
//       </div>

//       {/* Options */}
//       <div className="flex items-center space-x-6">
//         <button className="flex items-center space-x-1 text-sm font-medium text-gray-700">
//           <MapPinIcon className="h-5 w-5 text-green-600" />
//           <span>Nearby</span>
//         </button>

//         <button className="flex items-center space-x-1 text-sm font-medium text-gray-700">
//           <AdjustmentsHorizontalIcon className="h-5 w-5 text-green-600" />
//           <span>Filter</span>
//         </button>

//         <button className="flex items-center space-x-1 text-sm font-medium text-gray-700">
//           <CalendarDaysIcon className="h-5 w-5 text-gray-700" />
//           <span>Events</span>
//         </button>

//         <button className="flex items-center space-x-1 text-sm font-medium text-gray-700">
//           <BuildingOffice2Icon className="h-5 w-5 text-gray-700" />
//           <span>Companies</span>
//         </button>

//         <button className="flex items-center space-x-1 text-sm font-medium text-gray-700">
//           <UserGroupIcon className="h-5 w-5 text-gray-700" />
//           <span>Experts</span>
//         </button>

//         <button className="flex items-center space-x-1 text-sm font-medium text-gray-700">
//           <PlusCircleIcon className="h-5 w-5 text-green-600" />
//           <span>Add Event</span>
//         </button>

//         <button className="bg-green-600 text-white text-sm font-medium py-2 px-4 rounded-full">
//           LOGIN
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useState } from "react";
// import logo from "../assets/images/eventLogo.jpeg";

// import {
//   MagnifyingGlassIcon,
//   MapPinIcon,
//   AdjustmentsHorizontalIcon,
//   CalendarDaysIcon,
//   BuildingOffice2Icon,
//   UserGroupIcon,
//   PlusCircleIcon,
//   Bars3Icon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-md py-4 px-6">
//       {/* Main container */}
//       <div className="flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <img
//             src={logo} // Using the imported logo
//             alt="Logo"
//             className="w-32 h-22" // Adjusted size
//           />
//         </div>

//         {/* Hamburger Menu for Small Screens */}
//         <div className="lg:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
//             {menuOpen ? (
//               <XMarkIcon className="h-8 w-8" />
//             ) : (
//               <Bars3Icon className="h-8 w-8" />
//             )}
//           </button>
//         </div>

//         {/* Search Bar */}
//         <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 space-x-2 w-1/2">
//           <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
//           <input
//             type="text"
//             placeholder="Type Event or Location"
//             className="bg-transparent focus:outline-none text-sm w-full"
//           />
//         </div>

//         {/* Options */}
//         <div className="hidden lg:flex items-center space-x-6">
//           <button className="flex items-center space-x-1 text-sm font-medium text-gray-700">
//             <MapPinIcon className="h-5 w-5 text-green-600" />
//             <span>Nearby</span>
//           </button>

//           <button className="flex items-center space-x-1 text-sm font-medium text-gray-700">
//             <AdjustmentsHorizontalIcon className="h-5 w-5 text-green-600" />
//             <span>Filter</span>
//           </button>

//           <button className="flex items-center space-x-1 text-sm font-medium text-gray-700">
//             <CalendarDaysIcon className="h-5 w-5 text-gray-700" />
//             <span>Events</span>
//           </button>

//           <button className="flex items-center space-x-1 text-sm font-medium text-gray-700">
//             <BuildingOffice2Icon className="h-5 w-5 text-gray-700" />
//             <span>Companies</span>
//           </button>

//           <button className="flex items-center space-x-1 text-sm font-medium text-gray-700">
//             <UserGroupIcon className="h-5 w-5 text-gray-700" />
//             <span>Experts</span>
//           </button>

//           <button className="flex items-center space-x-1 text-sm font-medium text-gray-700">
//             <PlusCircleIcon className="h-5 w-5 text-green-600" />
//             <span>Add Event</span>
//           </button>

//           <button className="bg-green-600 text-white text-sm font-medium py-2 px-4 rounded-full">
//             LOGIN
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="lg:hidden flex flex-col bg-gray-100 mt-4 space-y-4 p-4 rounded-md">
//           <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 space-x-2">
//             <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
//             <input
//               type="text"
//               placeholder="Type Event or Location"
//               className="bg-transparent focus:outline-none text-sm w-full"
//             />
//           </div>

//           <button className="flex items-center space-x-1 text-sm font-medium text-gray-700">
//             <MapPinIcon className="h-5 w-5 text-green-600" />
//             <span>Nearby</span>
//           </button>

//           <button className="flex items-center space-x-1 text-sm font-medium text-gray-700">
//             <AdjustmentsHorizontalIcon className="h-5 w-5 text-green-600" />
//             <span>Filter</span>
//           </button>

//           <button className="flex items-center space-x-1 text-sm font-medium text-gray-700">
//             <CalendarDaysIcon className="h-5 w-5 text-gray-700" />
//             <span>Events</span>
//           </button>

//           <button className="flex items-center space-x-1 text-sm font-medium text-gray-700">
//             <BuildingOffice2Icon className="h-5 w-5 text-gray-700" />
//             <span>Companies</span>
//           </button>

//           <button className="flex items-center space-x-1 text-sm font-medium text-gray-700">
//             <UserGroupIcon className="h-5 w-5 text-gray-700" />
//             <span>Experts</span>
//           </button>

//           <button className="flex items-center space-x-1 text-sm font-medium text-gray-700">
//             <PlusCircleIcon className="h-5 w-5 text-green-600" />
//             <span>Add Event</span>
//           </button>

//           <button className="bg-green-600 text-white text-sm font-medium py-2 px-4 rounded-full">
//             LOGIN
//           </button>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;


import React, { useState } from "react";
import logo from "../assets/images/eventLogo.jpeg";

import {
  MagnifyingGlassIcon,
  MapPinIcon,
  AdjustmentsHorizontalIcon,
  CalendarDaysIcon,
  BuildingOffice2Icon,
  UserGroupIcon,
  PlusCircleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 px-6">
      {/* Main container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={logo} // Using the imported logo
            alt="Logo"
            className="w-36 h-18 mr-10" // Adjusted size
          />
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
            {menuOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 space-x-2 w-1/2">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
          <input
            type="text"
            placeholder="Type Event or Location"
            className="bg-transparent focus:outline-none text-sm w-full"
          />
        </div>

        {/* Options */}
        <div className="hidden lg:flex items-center space-x-6">
          <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-green-600">
            <MapPinIcon className="h-6 w-7 text-green-600" />
            <span>Nearby</span>
          </button>

          <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-green-600">
            <AdjustmentsHorizontalIcon className="h-6 w-7 text-green-600" />
            <span>Filter</span>
          </button>

          <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-green-600">
            <CalendarDaysIcon className="h-6 w-7 text-green-700" />
            <span><Link to='/categories'>Events</Link></span>
          </button>

          <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-green-600">
            <BuildingOffice2Icon className="h-6 w-7 text-green-700" />
            <span>Companies</span>
          </button>

          <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-green-600">
            <UserGroupIcon className="h-6 w-7 text-green-700" />
            <span>Experts</span>
          </button>


          <button className="bg-green-500 text-white text-lg font-medium py-2 px-4 rounded-full hover:bg-green-700">
            Login
          </button>

          <button className="bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-full hover:bg-blue-700">
          Business  login
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col bg-gray-100 mt-4 space-y-4 p-4 rounded-md">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 space-x-2">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Type Event or Location"
              className="bg-transparent focus:outline-none text-sm w-full"
            />
          </div>

          <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-green-600">
            <MapPinIcon className="h-5 w-5 text-green-600" />
            <span>Nearby</span>
          </button>

          <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-green-600">
            <AdjustmentsHorizontalIcon className="h-5 w-5 text-green-600" />
            <span>Filter</span>
          </button>

          <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-green-900">
            <CalendarDaysIcon className="h-5 w-5 text-gray-700" />
            <span>Events</span>
          </button>

          <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-green-900">
            <BuildingOffice2Icon className="h-5 w-5 text-gray-700" />
            <span>Companies</span>
          </button>

          <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-green-600">
            <UserGroupIcon className="h-5 w-5 text-gray-700" />
            <span>Experts</span>
          </button>

          

          <button className="bg-green-500 text-white text-sm font-medium py-2 px-4 rounded-full hover:bg-green-700">
            Login
          </button>

          <button className="bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-full hover:bg-blue-700">
          Business login
          </button>

        </div>

        
      )}
    </header>
  );
};

export default Header;
