const express = require("express");
const router = express.Router();
const Service = require("../models/Service");
const multer = require("multer");
const path = require("path");

/* ========================================
   MULTER CONFIG
======================================== */

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/services");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

/* ========================================
GET ALL ACTIVE SERVICES
======================================== */
router.get("/", async (req, res) => {
  try {
    const services = await Service.find({ isDeleted: false }).sort({ order: 1 });
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: "Error fetching services", error });
  }
});

/* ========================================
GET TRASH SERVICES
======================================== */
router.get("/trash", async (req, res) => {
  try {
    const trashServices = await Service.find({ isDeleted: true }).sort({ createdAt: -1 });
    res.json(trashServices);
  } catch (error) {
    res.status(500).json({ message: "Error fetching trash services", error });
  }
});

/* ========================================
GET SERVICE BY SLUG
======================================== */
router.get("/slug/:slug", async (req, res) => {
  try {
    const service = await Service.findOne({
      slug: req.params.slug,
      isDeleted: false,
    });

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.json(service);
  } catch (error) {
    res.status(500).json({ message: "Error fetching service", error });
  }
});

/* ========================================
ADD NEW SERVICE
======================================== */
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const {
      title,
      description,
      fullDescription,
      highlights,
      icon,
      order
    } = req.body;

    if (!title || !description || !icon) {
      return res.status(400).json({
        message: "Title, Description and Icon are required"
      });
    }

    // AUTO SLUG GENERATION
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    console.log(req.file);

    const newService = new Service({
      title,
      slug,
      description,
      fullDescription,
      highlights: highlights ? JSON.parse(highlights) : [],
      image: req.file ? `/uploads/services/${req.file.filename}` : "",
      icon,
      order,
      isDeleted: false
    });

    await newService.save();
    res.status(201).json(newService);

  } catch (error) {
    res.status(500).json({ message: "Error adding service", error });
  }
});

/* ========================================
UPDATE SERVICE
======================================== */
router.put("/:id", async (req, res) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedService) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.json(updatedService);
  } catch (error) {
    res.status(500).json({ message: "Error updating service", error });
  }
});

/* ========================================
SOFT DELETE
======================================== */
router.put("/delete/:id", async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    );

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.json({ message: "Service moved to trash", service });
  } catch (error) {
    res.status(500).json({ message: "Error deleting service", error });
  }
});

/* ========================================
RESTORE
======================================== */
router.put("/restore/:id", async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      { isDeleted: false },
      { new: true }
    );

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.json({ message: "Service restored successfully", service });
  } catch (error) {
    res.status(500).json({ message: "Error restoring service", error });
  }
});

/* ========================================
PERMANENT DELETE
======================================== */
router.delete("/permanent/:id", async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.json({ message: "Service permanently deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error permanently deleting service", error });
  }
});

module.exports = router;
