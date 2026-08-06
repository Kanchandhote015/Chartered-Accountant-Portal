// const express = require("express");
// const Gallery = require("../models/Gallery");
// const authMiddleware = require("../middleware/authMiddleware");
// const multer = require("multer");
// const path = require("path");

// const router = express.Router();

// /* =========================
//    MULTER SETUP
// ========================= */
// const storage = multer.diskStorage({
//   destination: "uploads/",
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage });

// /* =========================
//    ADMIN - GET ALL (including deleted)
// ========================= */
// router.get("/admin/all", authMiddleware, async (req, res) => {
//   try {
//     const gallery = await Gallery.find().sort({ createdAt: -1 });
//     res.json(gallery);
//   } catch (err) {
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// /* =========================
//    ADMIN - GET TRASH ONLY
// ========================= */
// router.get("/admin/trash", authMiddleware, async (req, res) => {
//   try {
//     const trashItems = await Gallery.find({ isDeleted: true })
//       .sort({ createdAt: -1 });

//     res.json(trashItems);

//   } catch (err) {
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// /* =========================
//    PUBLIC - GET ACTIVE ONLY
// ========================= */
// router.get("/", async (req, res) => {
//   try {
//     const gallery = await Gallery.find({ isDeleted: false }).sort({ createdAt: -1 });
//     res.json(gallery);
//   } catch (err) {
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// /* =========================
//    ADMIN - ADD GALLERY
// ========================= */
// router.post(
//   "/",
//   upload.single("image"),
//   authMiddleware,
//   async (req, res) => {
//     try {
//       const newItem = new Gallery({
//         title: req.body.title,
//         type: req.body.type,
//         description: req.body.description,
//         url: req.file
//           ? `/uploads/${req.file.filename}`
//           : req.body.url,
//         isDeleted: false
//       });

//       await newItem.save();
//       res.json(newItem);

//     } catch (err) {
//       console.log(err);
//       res.status(500).json({ message: "Server Error" });
//     }
//   }
// );

// /* =========================
//    ADMIN - MOVE TO TRASH
// ========================= */
// router.patch("/delete/:id", authMiddleware, async (req, res) => {
//   try {
//     const item = await Gallery.findByIdAndUpdate(
//       req.params.id,
//       { isDeleted: true },
//       { new: true }
//     );

//     if (!item) {
//       return res.status(404).json({ message: "Gallery item not found" });
//     }

//     res.json({ message: "Moved to Trash", item });

//   } catch (err) {
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// /* =========================
//    ADMIN - RESTORE
// ========================= */
// router.patch("/restore/:id", authMiddleware, async (req, res) => {
//   try {
//     await Gallery.findByIdAndUpdate(req.params.id, {
//       isDeleted: false
//     });

//     res.json({ message: "Gallery Restored" });

//   } catch (err) {
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// /* =========================
//    ADMIN - PERMANENT DELETE
// ========================= */
// router.delete("/permanent/:id", authMiddleware, async (req, res) => {
//   try {
//     const item = await Gallery.findByIdAndDelete(req.params.id);

//     if (!item) {
//       return res.status(404).json({ message: "Gallery item not found" });
//     }

//     res.json({ message: "Gallery permanently deleted" });

//   } catch (err) {
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// module.exports = router;


const express = require("express");
const Gallery = require("../models/Gallery");
const authMiddleware = require("../middleware/authMiddleware");
const multer = require("multer");
const path = require("path");

const router = express.Router();

/* ================= MULTER ================= */
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

/* ================= PUBLIC GET (ONLY ACTIVE) ================= */
router.get("/", async (req, res) => {
  const data = await Gallery.find({ isDeleted: false }).sort({ createdAt: -1 });
  res.json(data);
});

/* ================= ADMIN GET ALL ================= */
router.get("/admin/all", authMiddleware, async (req, res) => {
  const data = await Gallery.find().sort({ createdAt: -1 });
  res.json(data);
});

/* ================= ADMIN ADD ================= */
router.post("/", authMiddleware, upload.single("image"), async (req, res) => {
  const newItem = new Gallery({
    title: req.body.title,
    type: req.body.type,
    description: req.body.description,
    url: req.file ? `/uploads/${req.file.filename}` : req.body.url,
    isDeleted: false
  });

  await newItem.save();
  res.json(newItem);
});

/* ================= SOFT DELETE ================= */
router.patch("/delete/:id", authMiddleware, async (req, res) => {
  await Gallery.findByIdAndUpdate(req.params.id, { isDeleted: true });
  res.json({ message: "Moved to Trash" });
});

/* ================= RESTORE ================= */
router.patch("/restore/:id", authMiddleware, async (req, res) => {
  await Gallery.findByIdAndUpdate(req.params.id, { isDeleted: false });
  res.json({ message: "Restored" });
});

/* ================= PERMANENT DELETE ================= */
router.delete("/permanent/:id", authMiddleware, async (req, res) => {
  await Gallery.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted Permanently" });
});

/* ================= ADMIN TRASH ================= */
router.get("/admin/trash", authMiddleware, async (req, res) => {
  const trash = await Gallery.find({ isDeleted: true }).sort({ createdAt: -1 });
  res.json(trash);
});

module.exports = router;
