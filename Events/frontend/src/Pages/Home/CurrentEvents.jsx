// src/components/CurrentEvents.jsx
import React from 'react';

const CurrentEvents = ({ events }) => {
  const currentMonth = new Date().getMonth();
  const currentEvents = events.filter((event) => event.month === currentMonth);

  return (
    <div className="p-6 mt-10">
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
    </div>
  );
};

export default CurrentEvents;
