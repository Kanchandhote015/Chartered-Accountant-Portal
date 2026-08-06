// const mongoose = require("mongoose");

// const newsSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true
//   },
//   description: {
//     type: String,
//     required: true
//   },
//   tag: {
//     type: String,
//     required: true
//   },
//   date: {
//     type: String,   // "March 2026"
//     required: true
//   }
// }, { timestamps: true });

// module.exports = mongoose.model("News", newsSchema);


const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },

  // ✅ ADD THIS
  isDeleted: {
    type: Boolean,
    default: false
  }

}, { timestamps: true });

module.exports = mongoose.model("News", newsSchema);
