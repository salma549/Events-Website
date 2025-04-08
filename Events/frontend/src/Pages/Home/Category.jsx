


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const categories = [
//   { icon: '🎓', title: 'Education & Training', events: '2.9k Events', route: '/education' },
//   { icon: '🏥', title: 'Medical & Pharma', events: '99k Events', route: '/medical' },
//   { icon: '💻', title: 'IT & Technology', events: '2.9k Events', route: '/it' },
//   { icon: '🏦', title: 'Banking & Finance', events: '2.9k Events', route: '/banking' },
//   { icon: '🏢', title: 'Business Services', events: '2.9k Events', route: '/business' },
//   { icon: '⚙️', title: 'Industrial Engineering', events: '33.1k Events', route: '/engineering' },
//   { icon: '🎬', title: 'Entertainment & Media', events: '24 Events', route: '/entertainment' },
//   { icon: '🏗️', title: 'Building & Construction', events: '2.9k Events', route: '/construction' },
//   { icon: '🔌', title: 'Power & Energy', events: '22.6k Events', route: '/energy' },
//   { icon: '🔬', title: 'Science & Research', events: '48.8k Events', route: '/science' },
//   { icon: '💆‍♀️', title: 'Wellness, Health & Fitness', events: '32.6k Events', route: '/wellness' },
//   { icon: '🚜', title: 'Agriculture & Forestry', events: '16.4k Events', route: '/agriculture' },
//   { icon: '🍔', title: 'Food & Beverages', events: '2.9k Events', route: '/food' },
//   { icon: '🎨', title: 'Arts & Crafts', events: '15.3k Events', route: '/arts' },
//   { icon: '🚚', title: 'Logistics & Transportation', events: '2.9k Events', route: '/logistics' },
//   { icon: '🔌', title: 'Electric & Electronics', events: '2.9k Events', route: '/electronics' },
//   { icon: '🚗', title: 'Auto & Automotive', events: '2.9k Events', route: '/automotive' },
//   { icon: '💄', title: 'Fashion & Beauty', events: '9.162k Events', route: '/fashion' },
//   { icon: '🏠', title: 'Home & Office', events: '1.013k Events', route: '/home' },
//   { icon: '👚', title: 'Apparel & Clothing', events: '2.9k Events', route: '/apparel' },
//   { icon: '🏨', title: 'Hospitality', events: '2.9k Events', route: '/hospitality' },
//   { icon: '🗺️', title: 'Travel & Tourism', events: '2.9k Events', route: '/travel' },
//   { icon: '🛡️', title: 'Security & Defense', events: '2.9k Events', route: '/security' },
//   { icon: '🐾', title: 'Animals & Pets', events: '5.6k Events', route: '/animals' },
//   { icon: '👶', title: 'Baby, Kids & Maternity', events: '7.074k Events', route: '/baby' },
//   { icon: '📦', title: 'Packing & Packaging', events: '2.9k Events', route: '/packing' },
//   { icon: '🔀', title: 'Miscellaneous', events: '2.9k Events', route: '/misc' },
// ];

// const CategorySection = () => {
//   const [showAll, setShowAll] = useState(false);

//   const handleToggleView = () => {
//     setShowAll((prev) => !prev);
//   };

//   return (
//     <div className="px-4 py-8 md:px-10">
//       <h2 className="text-4xl font-bold mb-6 font-serif mt-14 text-gray-800">Browse By Category</h2>
//       <div className="flex flex-wrap justify-center items-center gap-24 bg-gray-50 p-4 rounded-tl-xl relative">
//         {categories.slice(0, showAll ? categories.length : 4).map((category, index) => (
//           <Link
//             to={category.route}
//             key={index}
//             className="flex flex-col items-center w-[250px] bg-green-200 shadow-md rounded-lg p-6 hover:shadow-lg transition-all hover:cursor-pointer"
//           >
//             <div className="text-3xl mb-4">
//               {category.icon}
//             </div>
//             <div className="text-center">
//               <h3 className="text-lg font-medium">{category.title}</h3>
//               {category.events && <p className="text-sm text-gray-500">{category.events}</p>}
//             </div>
//           </Link>
//         ))}
//       </div>
//       <div
//         onClick={handleToggleView}
//         className="text-center mt-3 text-xl font-semibold cursor-pointer text-blue-500 hover:underline"
//       >
//         {showAll ? 'View Less' : 'View All'}
//       </div>
//     </div>
//   );
// };

// export default CategorySection;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { icon: '🎓', title: 'Education & Training', events: '2.9k Events', route: '/education' },
  { icon: '🏥', title: 'Medical & Pharma', events: '99k Events', route: '/medical' },
  { icon: '💻', title: 'IT & Technology', events: '2.9k Events', route: '/it' },
  { icon: '🏦', title: 'Banking & Finance', events: '2.9k Events', route: '/banking' },
  { icon: '🏢', title: 'Business Services', events: '2.9k Events', route: '/business' },
  { icon: '⚙️', title: 'Industrial Engineering', events: '33.1k Events', route: '/engineering' },
  { icon: '🎬', title: 'Entertainment & Media', events: '24 Events', route: '/entertainment' },
  { icon: '🏗️', title: 'Building & Construction', events: '2.9k Events', route: '/construction' },
  { icon: '🔌', title: 'Power & Energy', events: '22.6k Events', route: '/energy' },
  { icon: '🔬', title: 'Science & Research', events: '48.8k Events', route: '/science' },
  { icon: '💆‍♀️', title: 'Wellness, Health & Fitness', events: '32.6k Events', route: '/wellness' },
  { icon: '🚜', title: 'Agriculture & Forestry', events: '16.4k Events', route: '/agriculture' },
  { icon: '🍔', title: 'Food & Beverages', events: '2.9k Events', route: '/food' },
  { icon: '🎨', title: 'Arts & Crafts', events: '15.3k Events', route: '/arts' },
  { icon: '🚚', title: 'Logistics & Transportation', events: '2.9k Events', route: '/logistics' },
  { icon: '🔌', title: 'Electric & Electronics', events: '2.9k Events', route: '/electronics' },
  { icon: '🚗', title: 'Auto & Automotive', events: '2.9k Events', route: '/automotive' },
  { icon: '💄', title: 'Fashion & Beauty', events: '9.162k Events', route: '/fashion' },
  { icon: '🏠', title: 'Home & Office', events: '1.013k Events', route: '/home' },
  { icon: '👚', title: 'Apparel & Clothing', events: '2.9k Events', route: '/apparel' },
  { icon: '🏨', title: 'Hospitality', events: '2.9k Events', route: '/hospitality' },
  { icon: '🗺️', title: 'Travel & Tourism', events: '2.9k Events', route: '/travel' },
  { icon: '🛡️', title: 'Security & Defense', events: '2.9k Events', route: '/security' },
  { icon: '🐾', title: 'Animals & Pets', events: '5.6k Events', route: '/animals' },
  { icon: '👶', title: 'Baby, Kids & Maternity', events: '7.074k Events', route: '/baby' },
  { icon: '📦', title: 'Packing & Packaging', events: '2.9k Events', route: '/packing' },
  { icon: '🔀', title: 'Miscellaneous', events: '2.9k Events', route: '/misc' },
];

const CategorySection = () => {
  const [showAll, setShowAll] = useState(false);

  const handleToggleView = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <div className="px-4 py-8 md:px-10   ">
      <h2 className="text-4xl font-bold mb-6 font-serif mt-14 text-green-500 ml-5">Browse By Category</h2>
      <div className="flex flex-wrap justify-center items-center gap-24 bg-gray-200 p-10 rounded-tl-xl relative shadow-md ">
        {categories.slice(0, showAll ? categories.length : 4).map((category, index) => (
          <Link
            to={category.route}
            key={index}
            className="flex flex-col items-center w-[250px] bg-gradient-to-r from-green-500 to-blue-500 hover:bg-gradient-to-r from-green-500 to-blue-600 shadow-md rounded-lg p-6 transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
  style={{ borderRadius: '20px 0 20px 0' }}
          >
            <div className="text-3xl mb-4">
              {category.icon}
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium">{category.title}</h3>
              {category.events && <p className="text-sm text-white">{category.events}</p>}
            </div>
          </Link>
        ))}
      </div>
      <div
        onClick={handleToggleView}
        className="text-center mt-3 text-xl font-semibold cursor-pointer text-blue-500 hover:underline"
      >
        {showAll ? 'View Less' : 'View All'}
      </div>
    </div>
  );
};

export default CategorySection;
