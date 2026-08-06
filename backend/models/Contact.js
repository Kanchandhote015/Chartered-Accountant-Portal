// const mongoose = require("mongoose");

// const contactSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   message: String,
//   createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model("Contact", contactSchema);

const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },

    // NEW FIELDS
    isRead: {
      type: Boolean,
      default: false
    },
    isReplied: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true } // this gives createdAt automatically
);

module.exports = mongoose.model("Contact", contactSchema);
