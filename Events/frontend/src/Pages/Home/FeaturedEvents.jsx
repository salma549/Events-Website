// import React from 'react';

// const FeaturedEvents = () => {
//   const events = [
//     {
//       title: 'Hong Toys & Games',
//       date: 'Mon, 06 - Thu, 09 Jan 2025',
//       location: 'Hongkong, China',
//     },
//     {
//       title: 'Summit For Clinical Ops',
//       date: 'Mon, 06 - Thu, 09 Jan 2025',
//       location: 'Rosen Shingle Creek, Orlando, USA',
//     },
//     {
//       title: 'Texworld Apparel',
//       date: 'Mon, 06 - Thu, 09 Jan 2025',
//       location: 'Paris, France',
//     },
//   ];

//   return (
//     <div className="p-6 bg-white mt-10">
//       <h2 className="text-4xl font-bold text-green-700 ml-9">Featured Events</h2>
//       <p className="text-gray-800 mb-4 ml-9">Handpicked popular events</p>

//       <div className="bg-purple-100 p-9 rounded-lg relative">
//         {/* Event Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {Array(6)
//             .fill(0)
//             .map((_, index) => {
//               const event = events[index % events.length];
//               return (
//                 <div
//                   key={index}
//                   className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-tl-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:cursor-pointer"
//                 >
//                   <h3 className="text-xl font-bold">{event.title}</h3>
//                   <p className="text-lg">{event.date}</p>
//                   <p className="text-lg">{event.location}</p>
//                 </div>
//               );
//             })}
//         </div>
//       </div>

//       {/* Add Event Button */}
//       <div className="text-center mt-4">
//         <button className="bg-green-800 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-700">
//           Add Event
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FeaturedEvents;

// import React from 'react';

// const FeaturedEvents = () => {
//   const events = [
//     { title: 'Hong Toys & Games', date: 'Mon, 06 - Thu, 09 Jan 2025', location: 'Hongkong, China', month: 0 }, // January
//     { title: 'Summit For Clinical Ops', date: 'Mon, 06 - Thu, 09 Jan 2025', location: 'Orlando, USA', month: 0 },
//     { title: 'Texworld Apparel', date: 'Mon, 06 - Thu, 09 Jan 2025', location: 'Paris, France', month: 0 },
    
//     { title: 'Summit For Clinical Ops', date: 'Mon, 06 - Thu, 09 Jan 2025', location: 'Orlando, USA', month: 0 },

//     { title: 'Mobile World Congress', date: 'Mon, 24 - Thu, 27 Feb 2025', location: 'Barcelona, Spain', month: 1 }, // February
//     { title: 'Berlin Design Week', date: 'Wed, 19 - Sun, 23 Feb 2025', location: 'Berlin, Germany', month: 1 },
//     { title: 'Mobile World Congress', date: 'Mon, 24 - Thu, 27 Feb 2025', location: 'Barcelona, Spain', month: 1 },

//     { title: 'Game Developers Conference', date: 'Mon, 17 - Fri, 21 Mar 2025', location: 'San Francisco, USA', month: 2 }, // March
//     { title: 'SXSW Conference & Festival', date: 'Fri, 07 - Sun, 16 Mar 2025', location: 'Austin, USA', month: 2 },
//     { title: 'Holi Festival', date: 'Thu, 06 Mar 2025', location: 'Various Locations, India', month: 2 },
    

//     { title: 'London Book Fair', date: 'Tue, 08 - Thu, 10 Apr 2025', location: 'London, UK', month: 3 }, // April
//     { title: 'Salone del Mobile', date: 'Tue, 15 - Sun, 21 Apr 2025', location: 'Milan, Italy', month: 3 },
//     { title: 'IPL Opening Ceremony', date: 'Sat, 06 - Mon, 08 Apr 2025', location: 'Mumbai, India', month: 3 }, 

//     { title: 'Cannes Film Festival', date: 'Tue, 13 - Sat, 24 May 2025', location: 'Cannes, France', month: 4 }, // May
//     { title: 'Chelsea Flower Show', date: 'Tue, 20 - Sat, 24 May 2025', location: 'London, UK', month: 4 },

//     { title: 'E3 Expo', date: 'Tue, 10 - Thu, 12 Jun 2025', location: 'Los Angeles, USA', month: 5 }, // June
//     { title: 'Bonnaroo Music & Arts Festival', date: 'Thu, 12 - Sun, 15 Jun 2025', location: 'Manchester, USA', month: 5 },

//     { title: 'Comic-Con International', date: 'Thu, 24 - Sun, 27 Jul 2025', location: 'San Diego, USA', month: 6 }, // July
//     { title: 'Glastonbury Festival', date: 'Wed, 25 - Sun, 29 Jul 2025', location: 'Pilton, UK', month: 6 },

//     { title: 'Edinburgh Festival Fringe', date: 'Fri, 02 - Mon, 26 Aug 2025', location: 'Edinburgh, UK', month: 7 }, // August
//     { title: 'Notting Hill Carnival', date: 'Sun, 25 - Mon, 26 Aug 2025', location: 'London, UK', month: 7 },

//     { title: 'IFA Consumer Electronics Show', date: 'Fri, 05 - Wed, 10 Sep 2025', location: 'Berlin, Germany', month: 8 }, // September
//     { title: 'New York Fashion Week', date: 'Thu, 12 - Wed, 18 Sep 2025', location: 'New York, USA', month: 8 },

//     { title: 'Paris Fashion Week', date: 'Mon, 23 - Tue, 01 Oct 2025', location: 'Paris, France', month: 9 }, // October
//     { title: 'Frankfurt Book Fair', date: 'Wed, 16 - Sun, 20 Oct 2025', location: 'Frankfurt, Germany', month: 9 },

//     { title: 'Mysuru Dasara Festival', date: 'Thu, 10 - Fri, 18 Oct 2025', location: 'Mysuru, India', month: 9 }, // October

//     { title: 'Dubai Expo', date: 'Tue, 12 - Sat, 16 Nov 2025', location: 'Dubai, UAE', month: 10 }, // November
//     { title: 'Web Summit', date: 'Mon, 04 - Thu, 07 Nov 2025', location: 'Lisbon, Portugal', month: 10 },

//     { title: 'Art Basel Miami Beach', date: 'Thu, 04 - Sun, 07 Dec 2025', location: 'Miami, USA', month: 11 }, // December
//     { title: 'Festival of Lights', date: 'Sat, 14 - Sun, 15 Dec 2025', location: 'Lyon, France', month: 11 },
//   ];

//   const currentMonth = new Date().getMonth();

//   const currentEvents = events.filter(event => event.month === currentMonth);
//   const upcomingEvents = events.filter(event => event.month !== currentMonth);
//   return (
//     <div className="p-6 bg-white mt-10 bg-gray-100">
//       {/* Current Events Section */}
//       <h2 className="text-4xl font-bold text-green-700 ml-9">Current Events</h2>
//       <p className="text-gray-800 mb-4 ml-9">Events happening this month</p>
//       <div className="bg-purple-100 p-9 rounded-tl-xl relative"> {/* Curved top-left corner */}
//         {currentEvents.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {currentEvents.map((event, index) => (
//               <div
//                 key={index}
//                 className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-tl-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:cursor-pointer"
//               >
//                 <h3 className="text-xl font-bold">{event.title}</h3>
//                 <p className="text-lg">{event.date}</p>
//                 <p className="text-lg">{event.location}</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-gray-500">No events this month.</p>
//         )}
//       </div>
  
//       {/* Upcoming Events Section */}
//       <h2 className="text-4xl font-bold text-green-700 ml-9 mt-10">Upcoming Events</h2>
//       <p className="text-gray-800 mb-4 ml-9">Events from other months</p>
//       <div className="bg-purple-100 p-9 rounded-lg">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {upcomingEvents.map((event, index) => (
//             <div
//               key={index}
//               className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-tl-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:cursor-pointer"
//             >
//               <h3 className="text-xl font-bold">{event.title}</h3>
//               <p className="text-lg">{event.date}</p>
//               <p className="text-lg">{event.location}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
  
// };

// export default FeaturedEvents;


// import React from 'react';

// const FeaturedEvents = () => {
//   const events = [
//     { title: 'Hong Toys & Games', date: 'Mon, 06 - Thu, 09 Jan 2025', location: 'Hongkong, China', month: 0 }, // January
//     { title: 'Summit For Clinical Ops', date: 'Mon, 06 - Thu, 09 Jan 2025', location: 'Orlando, USA', month: 0 },
//     { title: 'Texworld Apparel', date: 'Mon, 06 - Thu, 09 Jan 2025', location: 'Paris, France', month: 0 },
//     { title: 'Mobile World Congress', date: 'Mon, 24 - Thu, 27 Feb 2025', location: 'Barcelona, Spain', month: 1 }, // February
//     { title: 'Berlin Design Week', date: 'Wed, 19 - Sun, 23 Feb 2025', location: 'Berlin, Germany', month: 1 },
//        { title: 'Game Developers Conference', date: 'Mon, 17 - Fri, 21 Mar 2025', location: 'San Francisco, USA', month: 2 }, // March
//     { title: 'SXSW Conference & Festival', date: 'Fri, 07 - Sun, 16 Mar 2025', location: 'Austin, USA', month: 2 },
//     { title: 'Holi Festival', date: 'Thu, 06 Mar 2025', location: 'Various Locations, India', month: 2 },
    

//     { title: 'London Book Fair', date: 'Tue, 08 - Thu, 10 Apr 2025', location: 'London, UK', month: 3 }, // April
//     { title: 'Salone del Mobile', date: 'Tue, 15 - Sun, 21 Apr 2025', location: 'Milan, Italy', month: 3 },
//     { title: 'IPL Opening Ceremony', date: 'Sat, 06 - Mon, 08 Apr 2025', location: 'Mumbai, India', month: 3 }, 

//     { title: 'Cannes Film Festival', date: 'Tue, 13 - Sat, 24 May 2025', location: 'Cannes, France', month: 4 }, // May
//     { title: 'Chelsea Flower Show', date: 'Tue, 20 - Sat, 24 May 2025', location: 'London, UK', month: 4 },

//     { title: 'E3 Expo', date: 'Tue, 10 - Thu, 12 Jun 2025', location: 'Los Angeles, USA', month: 5 }, // June
//     { title: 'Bonnaroo Music & Arts Festival', date: 'Thu, 12 - Sun, 15 Jun 2025', location: 'Manchester, USA', month: 5 },

//     { title: 'Comic-Con International', date: 'Thu, 24 - Sun, 27 Jul 2025', location: 'San Diego, USA', month: 6 }, // July
//     { title: 'Glastonbury Festival', date: 'Wed, 25 - Sun, 29 Jul 2025', location: 'Pilton, UK', month: 6 },

//     { title: 'Edinburgh Festival Fringe', date: 'Fri, 02 - Mon, 26 Aug 2025', location: 'Edinburgh, UK', month: 7 }, // August
//     { title: 'Notting Hill Carnival', date: 'Sun, 25 - Mon, 26 Aug 2025', location: 'London, UK', month: 7 },

//     { title: 'IFA Consumer Electronics Show', date: 'Fri, 05 - Wed, 10 Sep 2025', location: 'Berlin, Germany', month: 8 }, // September
//     { title: 'New York Fashion Week', date: 'Thu, 12 - Wed, 18 Sep 2025', location: 'New York, USA', month: 8 },

//     { title: 'Paris Fashion Week', date: 'Mon, 23 - Tue, 01 Oct 2025', location: 'Paris, France', month: 9 }, // October
//     { title: 'Frankfurt Book Fair', date: 'Wed, 16 - Sun, 20 Oct 2025', location: 'Frankfurt, Germany', month: 9 },

//     { title: 'Mysuru Dasara Festival', date: 'Thu, 10 - Fri, 18 Oct 2025', location: 'Mysuru, India', month: 9 }, // October

//     { title: 'Dubai Expo', date: 'Tue, 12 - Sat, 16 Nov 2025', location: 'Dubai, UAE', month: 10 }, // November
//     { title: 'Web Summit', date: 'Mon, 04 - Thu, 07 Nov 2025', location: 'Lisbon, Portugal', month: 10 },

//     { title: 'Art Basel Miami Beach', date: 'Thu, 04 - Sun, 07 Dec 2025', location: 'Miami, USA', month: 11 }, // December
//     { title: 'Festival of Lights', date: 'Sat, 14 - Sun, 15 Dec 2025', location: 'Lyon, France', month: 11 },
//   ];

//   const currentMonth = new Date().getMonth();

//   const currentEvents = events.filter(event => event.month === currentMonth);
//   const upcomingEvents = events.filter(event => event.month > currentMonth);

//   return (
//     <div className="p-6 bg-white mt-10 bg-gray-100">
//       {/* Current Events Section */}
//       <h2 className="text-4xl font-bold text-green-700 ml-9">Current Events</h2>
//       <p className="text-gray-800 mb-4 ml-9">Events happening this month</p>
//       <div className="bg-purple-100 p-9 rounded-tl-xl relative">
//         {currentEvents.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {currentEvents.map((event, index) => (
//               <div key={index} className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-tl-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:cursor-pointer">
//                 <h3 className="text-xl font-bold">{event.title}</h3>
//                 <p className="text-lg">{event.date}</p>
//                 <p className="text-lg">{event.location}</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-gray-500">No events this month.</p>
//         )}
//       </div>
  
//       {/* Upcoming Events Section */}
//       <h2 className="text-4xl font-bold text-green-700 ml-9 mt-10">Upcoming Events</h2>
//       <p className="text-gray-800 mb-4 ml-9">Events from upcoming months</p>
//       <div className="bg-purple-100 p-9 rounded-lg">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {upcomingEvents.map((event, index) => (
//             <div key={index} className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-tl-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:cursor-pointer">
//               <h3 className="text-xl font-bold">{event.title}</h3>
//               <p className="text-lg">{event.date}</p>
//               <p className="text-lg">{event.location}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedEvents;









import React from 'react';

const FeaturedEvents = () => {
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

  const currentMonth = new Date().getMonth();

  const currentEvents = events.filter((event) => event.month === currentMonth);
  const upcomingEvents = events.filter((event) => event.month > currentMonth);

  return (
    <div className="p-6 mt-10">
      {/* Current Events Section */}
      <h2 className="text-4xl font-bold text-green-500 ml-9">Current Events</h2>
      <p className="text-gray-800 mb-4 ml-9">Events happening this month</p>
      <div className="bg-green-200 p-9 rounded-tl-xl relative shadow-md">
        {currentEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md">
            {currentEvents.map((event, index) => (
              <a
                key={index}
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-bold">{event.title}</h3>
                <p className="text-lg">{event.date}</p>
                <p className="text-lg">{event.location}</p>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No events this month.</p>
        )}
      </div>

      {/* Upcoming Events Section */}
      <h2 className="text-4xl font-bold text-green-500 ml-9 mt-10">Upcoming Events</h2>
      <p className="text-gray-800 mb-4 ml-9">Events from upcoming months</p>
      <div className="bg-blue-200 p-9 rounded-lg shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md">
          {upcomingEvents.map((event, index) => (
            <a
              key={index}
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-500 hover:bg-green-600 text-white p-4 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-bold">{event.title}</h3>
              <p className="text-lg">{event.date}</p>
              <p className="text-lg">{event.location}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedEvents;