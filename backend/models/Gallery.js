// const mongoose = require("mongoose");

// const gallerySchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true
//   },

//   type: {
//     type: String,
//     enum: ["photo", "video"],
//     required: true
//   },

//   url: {
//     type: String,
//     required: true
//   },

//   description: {
//     type: String
//   },

//   isDeleted: {
//     type: Boolean,
//     default: false
//   }

// }, { timestamps: true });

// module.exports = mongoose.model("Gallery", gallerySchema);


const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    title: String,
    type: String,
    url: String,
    description: String,
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Gallery", gallerySchema);
