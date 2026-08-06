const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    slug: {
      type: String,
      required: true,
      unique: true
    },

    intro: String,

    description: {
      type: String,
      required: true
    },

    fullDescription: String,

    highlights: [String],

    image: String,

    icon: {
      type: String,
      required: true
    },

    buttonText: String,
    buttonLink: String,

    order: {
      type: Number,
      default: 0
    },

    isDeleted: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", serviceSchema);
