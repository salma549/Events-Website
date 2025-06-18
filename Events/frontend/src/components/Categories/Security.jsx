import React, { useState, useEffect } from "react";

const Security = ({ category }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Helper function to format date strings (same as your original Food code)
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        setError(null);
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
    <div className="bg-white rounded-lg shadow-md p-6 mt-20 ">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        {category.charAt(0).toUpperCase() + category.slice(1)} Events
      </h2>

      {loading ? (
        <p className="text-gray-500 text-center">Loading events...</p>
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : events.length === 0 ? (
        <p className="text-gray-500 text-center">No events found for {category}.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {events.map((event) => (
            <li
              key={event._id}
              className="relative p-6 rounded-[30px] bg-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-103 hover:cursor-pointer"
            >
              {/* Top Wave */}
              <div className="absolute -top-5 left-0 w-full h-12 bg-blue-400 rounded-t-[30px]">
                <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
                  <path
                    fill="white"
                    d="M0,128L60,160C120,192,240,256,360,250.7C480,245,600,171,720,144C840,117,960,139,1080,170.7C1200,203,1320,245,1380,266.7L1440,288V0H0Z"
                  ></path>
                </svg>
              </div>

              {/* Event Details */}
              <div className="mt-10 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{event.name}</h3>

                <p className="text-gray-600 mb-6 text-lg">
                  📍 {event.location} <br /> 📅 {formatDate(event.startDate)}
                  {event.endDate ? ` to ${formatDate(event.endDate)}` : ""}
                </p>

                <p className="text-gray-700 mb-8">{event.description}</p>

                {/* Floating Action Button */}
                <a
                  href={event.eventUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition duration-300"
                >
                  Visit Event
                </a>
              </div>

              {/* Optional Bottom Wave, uncomment if you want */}
              {/* <div className="absolute -bottom-5 left-0 w-full h-12 bg-blue-400 rounded-b-[30px]">
                <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
                  <path fill="white" d="M0,288L60,266.7C120,245,240,203,360,170.7C480,139,600,117,720,144C840,171,960,245,1080,250.7C1200,256,1320,192,1380,160L1440,128V320H0Z"></path>
                </svg>
              </div> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Security;
