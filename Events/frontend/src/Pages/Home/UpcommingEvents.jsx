// src/components/UpcomingEvents.jsx
import React from 'react';

const UpcomingEvents = ({ events }) => {
  const currentMonth = new Date().getMonth();
  const upcomingEvents = events.filter((event) => event.month > currentMonth);

  return (
    <div className="p-6 mt-10">
      <h2 className="text-4xl font-bold text-green-500 ml-9">Upcoming Events</h2>
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

export default UpcomingEvents;
