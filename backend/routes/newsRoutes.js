// const express = require("express");
// const News = require("../models/News");
// const authMiddleware = require("../middleware/authMiddleware");

// const router = express.Router();


// // Public - Get News
// router.get("/", async (req, res) => {
//   try {
//     const news = await News.find();
//     res.json(news);
//   } catch (err) {
//     res.status(500).json({ message: "Server Error" });
//   }
// });


// // Admin - Add News
// router.post("/", authMiddleware, async (req, res) => {
//   try {
//     const news = new News(req.body);
//     await news.save();
//     res.json({ message: "News Added" });
//   } catch (err) {
//     res.status(500).json({ message: "Server Error" });
//   }
// });


// // Admin - Delete News
// router.delete("/:id", authMiddleware, async (req, res) => {
//   try {
//     await News.findByIdAndDelete(req.params.id);
//     res.json({ message: "News Deleted" });
//   } catch (err) {
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// module.exports = router;

const express = require("express");
const News = require("../models/News");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Public - Get Active News
router.get("/", async (req, res) => {
  try {
    const news = await News.find({
      isDeleted: { $ne: true }
    }).sort({ createdAt: -1 });

    res.json(news);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

/*
====================================
ADMIN - GET TRASH NEWS
====================================
*/
// router.get("/trash", authMiddleware, async (req, res) => {
//   try {
//     const trashNews = await News.find({ isDeleted: true }).sort({ createdAt: -1 });
//     res.json(trashNews);
//   } catch (err) {
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// Admin - Get Trash News
router.get("/trash", authMiddleware, async (req, res) => {
  try {
    const news = await News.find({
      isDeleted: true
    }).sort({ createdAt: -1 });

    res.json(news);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

/*
====================================
ADMIN - ADD NEWS
====================================
*/
router.post("/", authMiddleware, async (req, res) => {
  try {
    const news = new News(req.body);
    await news.save();
    res.json({ message: "News Added", news });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

/*
====================================
ADMIN - SOFT DELETE (MOVE TO TRASH)
====================================
*/
router.put("/delete/:id", authMiddleware, async (req, res) => {
  try {
    const news = await News.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    );

    res.json({ message: "News moved to trash", news });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

/*
====================================
ADMIN - RESTORE FROM TRASH
====================================
*/
router.put("/restore/:id", authMiddleware, async (req, res) => {
  try {
    const news = await News.findByIdAndUpdate(
      req.params.id,
      { isDeleted: false },
      { new: true }
    );

    res.json({ message: "News restored", news });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

/*
====================================
ADMIN - PERMANENT DELETE
====================================
*/
router.delete("/permanent/:id", authMiddleware, async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id);
    res.json({ message: "News permanently deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
