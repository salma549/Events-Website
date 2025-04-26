
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
import BrowseEvents from "../Pages/Home/BrowseEvents";
import Countries from "../Pages/Home/Countries";
import CurrentEvents from "../Pages/Home/CurrentEvents";
import UpcomingEvents from "../Pages/Home/UpcommingEvents";

const events = [
  { title: 'Hong Toys & Games', date: 'Mon, 06 - Thu, 09 Jan 2025', location: 'Hongkong, China', month: 0, url: 'https://www.hktdc.com/event/hktoyfair/en/' },
  { title: 'Summit For Clinical Ops', date: 'Mon, 06 - Thu, 09 Jan 2025', location: 'Orlando, USA', month: 0, url: 'https://www.clinicaloperationseast.com/' },
  { title: 'Texworld Apparel', date: 'Mon, 06 - Thu, 09 Jan 2025', location: 'Paris, France', month: 0, url: 'https://texworld-paris.fr.messefrankfurt.com/paris/en.html' },
  { title: 'Mobile World Congress', date: 'Mon, 24 - Thu, 27 Feb 2025', location: 'Barcelona, Spain', month: 1, url: 'https://www.mwcbarcelona.com/' },
  { title: 'Berlin Design Week', date: 'Wed, 19 - Sun, 23 Feb 2025', location: 'Berlin, Germany', month: 1, url: 'https://berlindesignweek.com/' },
  { title: 'Game Developers Conference', date: 'Mon, 17 - Fri, 21 Mar 2025', location: 'San Francisco, USA', month: 2, url: 'https://gdconf.com/' },
  { title: 'SXSW Conference & Festival', date: 'Fri, 07 - Sun, 16 Mar 2025', location: 'Austin, USA', month: 2, url: 'https://www.sxsw.com/' },
  { title: 'Holi Festival', date: 'Thu, 06 Mar 2025', location: 'Various Locations, India', month: 2, url: 'https://www.holifestival.org/' },
  { title: 'London Book Fair', date: 'Tue, 08 - Thu, 10 Apr 2025', location: 'London, UK', month: 3, url: 'https://www.londonbookfair.co.uk/' },
  { title: 'Salone del Mobile', date: 'Tue, 15 - Sun, 21 Apr 2025', location: 'Milan, Italy', month: 3, url: 'https://www.salonemilano.it/en' },
  { title: 'IPL Opening Ceremony', date: 'Sat, 06 - Mon, 08 Apr 2025', location: 'Mumbai, India', month: 3, url: 'https://www.iplt20.com/' },
  { title: 'Cannes Film Festival', date: 'Tue, 13 - Sat, 24 May 2025', location: 'Cannes, France', month: 4, url: 'https://www.festival-cannes.com/en/' },
  { title: 'Chelsea Flower Show', date: 'Tue, 20 - Sat, 24 May 2025', location: 'London, UK', month: 4, url: 'https://www.rhs.org.uk/shows-events/rhs-chelsea-flower-show' },
  { title: 'E3 Expo', date: 'Tue, 10 - Thu, 12 Jun 2025', location: 'Los Angeles, USA', month: 5, url: 'https://e3expo.com/' },
  { title: 'Bonnaroo Music & Arts Festival', date: 'Thu, 12 - Sun, 15 Jun 2025', location: 'Manchester, USA', month: 5, url: 'https://www.bonnaroo.com/' },
  { title: 'Comic-Con International', date: 'Thu, 24 - Sun, 27 Jul 2025', location: 'San Diego, USA', month: 6, url: 'https://www.comic-con.org/' },
  { title: 'Glastonbury Festival', date: 'Wed, 25 - Sun, 29 Jul 2025', location: 'Pilton, UK', month: 6, url: 'https://www.glastonburyfestivals.co.uk/' },
  { title: 'Edinburgh Festival Fringe', date: 'Fri, 02 - Mon, 26 Aug 2025', location: 'Edinburgh, UK', month: 7, url: 'https://www.edfringe.com/' },
  { title: 'Notting Hill Carnival', date: 'Sun, 25 - Mon, 26 Aug 2025', location: 'London, UK', month: 7, url: 'https://www.nhcarnival.org/' },
  { title: 'IFA Consumer Electronics Show', date: 'Fri, 05 - Wed, 10 Sep 2025', location: 'Berlin, Germany', month: 8, url: 'https://b2b.ifa-berlin.com/' },
  { title: 'New York Fashion Week', date: 'Thu, 12 - Wed, 18 Sep 2025', location: 'New York, USA', month: 8, url: 'https://nyfw.com/' },
  { title: 'Paris Fashion Week', date: 'Mon, 23 - Tue, 01 Oct 2025', location: 'Paris, France', month: 9, url: 'https://fhcm.paris/en/paris-fashion-week-en/' },
  { title: 'Frankfurt Book Fair', date: 'Wed, 16 - Sun, 20 Oct 2025', location: 'Frankfurt, Germany', month: 9, url: 'https://www.buchmesse.de/en' },
  { title: 'Mysuru Dasara Festival', date: 'Thu, 10 - Fri, 18 Oct 2025', location: 'Mysuru, India', month: 9, url: 'https://www.mysoredasara.gov.in/' },
  { title: 'Dubai Expo', date: 'Tue, 12 - Sat, 16 Nov 2025', location: 'Dubai, UAE', month: 10, url: 'https://www.expo2020dubai.com/' },
  { title: 'Web Summit', date: 'Mon, 04 - Thu, 07 Nov 2025', location: 'Lisbon, Portugal', month: 10, url: 'https://websummit.com/' },
  { title: 'Art Basel Miami Beach', date: 'Thu, 04 - Sun, 07 Dec 2025', location: 'Miami, USA', month: 11, url: 'https://www.artbasel.com/miami-beach' },
  { title: 'Festival of Lights', date: 'Sat, 14 - Sun, 15 Dec 2025', location: 'Lyon, France', month: 11, url: 'https://www.fetedeslumieres.lyon.fr/en' },
];



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

      <CurrentEvents events={events} />
      <Countries />
      <BrowseEvents />


      <CategorySection />
     
      <UpcomingEvents events={events} />
    
     
    </>
  );
};

export default Home;
