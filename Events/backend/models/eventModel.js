


// const mongoose = require('mongoose');

// const eventSchema = new mongoose.Schema({
//   name: String,
//   location: String,
//   date: Date,
//   description: String,
//   eventUrl: String, // Updated field
// });

// module.exports = mongoose.model('Event', eventSchema);


// const mongoose = require('mongoose');

// const eventSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   location: { type: String, required: true },
//   date: { type: Date, required: true },
//   description: { type: [String], required: true }, 
//   eventUrl: { type: String, required: true }
// });

// module.exports = mongoose.model('Event', eventSchema);


// const mongoose = require('mongoose');

// const eventSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   location: { type: String, required: true },
//   date: { type: Date, required: true },
//   description: { type: String, required: true },
//   eventUrl: { type: String, required: true }
// });

// // Exporting the model
// module.exports = mongoose.model('Event', eventSchema);



// const mongoose = require('mongoose');
// const moment = require('moment'); // Install using: npm install moment

// const eventSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   location: { type: String, required: true },
//   date: { 
//     type: Date, 
//     required: true,
//     set: (dateString) => moment(dateString, "DD MMMM YYYY [at] h:mm a").toDate() // Auto convert
//   },
//   description: { type: String, required: true },
//   eventUrl: { type: String, required: true }
// });

// module.exports = mongoose.model('Event', eventSchema);


const mongoose = require('mongoose');
const moment = require('moment');

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  date: { 
    type: Date, 
    required: true,
    set: (dateString) => moment(dateString, "DD MMMM YYYY [at] h:mm a").toDate()
  },
  description: { type: String, required: true },
  eventUrl: { type: String, required: true },
  category: { type: String, required: true } // Added category
});

module.exports = mongoose.model('Event', eventSchema);


