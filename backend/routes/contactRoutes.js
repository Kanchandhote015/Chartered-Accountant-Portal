const express = require("express");
const Contact = require("../models/Contact");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();


// PUBLIC - Submit Contact
router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.json({ message: "Contact submitted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});


// ADMIN - Get All Contacts
router.get("/", authMiddleware, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});


// ADMIN - Mark as Read
router.put("/read/:id", authMiddleware, async (req, res) => {
  await Contact.findByIdAndUpdate(req.params.id, { isRead: true });
  res.json({ message: "Marked as read" });
});


// ADMIN - Mark as Replied
router.put("/reply/:id", authMiddleware, async (req, res) => {
  await Contact.findByIdAndUpdate(req.params.id, { isReplied: true });
  res.json({ message: "Marked as replied" });
});


// ADMIN - Delete Contact
router.delete("/:id", authMiddleware, async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
