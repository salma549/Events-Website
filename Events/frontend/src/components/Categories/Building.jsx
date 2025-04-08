



import React, { useState, useEffect } from "react";

const Building = ({ category }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/events?category=${category}`);
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [category]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-20">
      <h2 className="text-2xl font-bold mb-4">{category.charAt(0).toUpperCase() + category.slice(1)} Events</h2>

      {loading ? (
        <p className="text-gray-500">Loading events...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : events.length === 0 ? (
        <p className="text-gray-500">No events found for {category}.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {events.map((event) => (
            <li key={event._id} className="border p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{event.name}</h3>
              <p className="text-gray-600">{event.location} - {new Date(event.date).toLocaleDateString()}</p>
              <p className="text-gray-700">{event.description}</p>
              <a
                href={event.eventUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 block"
              >
                Visit Event Page
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Building;
