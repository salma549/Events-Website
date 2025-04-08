// const Event = require('../models/eventModel'); 


// const addEvent = async (req, res) => {
//   try {
//     const event = new Event(req.body); 
//     await event.save(); 
//     res.status(201).json(event); 
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to add event', error });
//   }
// };

// const getEvents = async (req, res) => {
//   try {
//     const events = await Event.find();
//     res.status(200).json(events); 
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to fetch events', error });
//   }
// };

// module.exports = { addEvent, getEvents };


const Event = require('../models/eventModel'); 

// Add a new event
const addEvent = async (req, res) => {
  try {
    const event = new Event(req.body); 
    await event.save(); 
    res.status(201).json(event); 
  } catch (error) {
    console.error('Error adding event:', error);
    res.status(500).json({ message: 'Failed to add event', error });
  }
};

// Get events by category
const getEvents = async (req, res) => {
  try {
    const { category } = req.query;
    let query = {};

    if (category) {
      query.category = category; // Filters events by category
    }

    const events = await Event.find(query);
    res.status(200).json(events); 
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ message: 'Failed to fetch events', error });
  }
};

module.exports = { addEvent, getEvents };
