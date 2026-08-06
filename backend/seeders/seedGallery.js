// const mongoose = require("mongoose");
// require("dotenv").config();
// const Gallery = require("../models/Gallery");

// const galleryData = [

//   // =========================
//   // PHOTOS (All from frontend)
//   // =========================

//   {
//     title: "Office Workspace",
//     type: "photo",
//     url: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&h=900&fit=crop",
//     description: "Office environment"
//   },
//   {
//     title: "Team Collaboration",
//     type: "photo",
//     url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop",
//     description: "Team collaboration"
//   },
//   {
//     title: "Client Discussion",
//     type: "photo",
//     url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=800&fit=crop",
//     description: "Client meeting"
//   },
//   {
//     title: "Corporate Office",
//     type: "photo",
//     url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=500&fit=crop",
//     description: "Corporate workspace"
//   },
//   {
//     title: "Planning Session",
//     type: "photo",
//     url: "https://images.unsplash.com/photo-1523958203904-cdcb402031fd?w=600&h=750&fit=crop",
//     description: "Planning session"
//   },
//   {
//     title: "Modern Office",
//     type: "photo",
//     url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=450&fit=crop",
//     description: "Modern workspace"
//   },
//   {
//     title: "Seminar Event",
//     type: "photo",
//     url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=850&fit=crop",
//     description: "Seminar event"
//   },
//   {
//     title: "Presentation",
//     type: "photo",
//     url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=550&fit=crop",
//     description: "Business presentation"
//   },
//   {
//     title: "Conference Hall",
//     type: "photo",
//     url: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=700&fit=crop",
//     description: "Conference hall"
//   },
//   {
//     title: "Office Interior",
//     type: "photo",
//     url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=600&h=600&fit=crop",
//     description: "Office interior"
//   },
//   {
//     title: "Startup Workspace",
//     type: "photo",
//     url: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=600&h=600&fit=crop",
//     description: "Startup culture"
//   },
//   {
//     title: "Startup Workspace Duplicate",
//     type: "photo",
//     url: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=600&h=500&fit=crop",
//     description: "Duplicate image from frontend array"
//   },

//   // =========================
//   // VIDEOS (All 9 from frontend)
//   // =========================

//   {
//     title: "Rainforest Nature Sounds",
//     type: "video",
//     url: "mPZkdNFkNps",
//     description: "Relaxing mountain landscapes and peaceful natural scenery."
//   },
//   {
//     title: "Rainforest Nature Sounds",
//     type: "video",
//     url: "mPZkdNFkNps",
//     description: "Calming ocean waves and golden sunset views."
//   },
//   {
//     title: "Rainforest Nature Sounds",
//     type: "video",
//     url: "mPZkdNFkNps",
//     description: "Cinematic forest scenes with soothing background atmosphere."
//   },
//   {
//     title: "Rainforest Nature Sounds",
//     type: "video",
//     url: "mPZkdNFkNps",
//     description: "Beautiful waterfall surrounded by lush greenery."
//   },
//   {
//     title: "Rainforest Nature Sounds",
//     type: "video",
//     url: "mPZkdNFkNps",
//     description: "Aerial drone footage of snowy mountains and valleys."
//   },
//   {
//     title: "Rainforest Nature Sounds",
//     type: "video",
//     url: "mPZkdNFkNps",
//     description: "Deep rainforest visuals with natural soundscape."
//   },
//   {
//     title: "Rainforest Nature Sounds",
//     type: "video",
//     url: "mPZkdNFkNps",
//     description: "Golden desert sunset captured in timelapse."
//   },
//   {
//     title: "Rainforest Nature Sounds",
//     type: "video",
//     url: "mPZkdNFkNps",
//     description: "Gentle flowing river surrounded by trees."
//   },
//   {
//     title: "Rainforest Nature Sounds",
//     type: "video",
//     url: "mPZkdNFkNps",
//     description: "Deep rainforest visuals with natural soundscape."
//   }

// ];

// const seedGallery = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB Connected");

//     await Gallery.deleteMany();

//     await Gallery.insertMany(galleryData);

//     console.log("All Gallery items seeded successfully");
//     process.exit();
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };

// seedGallery();


const mongoose = require("mongoose");
require("dotenv").config();
const Gallery = require("../models/Gallery");

const galleryData = [

  // =========================
  // PHOTOS
  // =========================

  {
    title: "Office Workspace",
    type: "photo",
    url: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&h=900&fit=crop",
    description: "Office environment",
    isDeleted: false
  },
  {
    title: "Team Collaboration",
    type: "photo",
    url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop",
    description: "Team collaboration",
    isDeleted: false
  },
  {
    title: "Client Discussion",
    type: "photo",
    url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=800&fit=crop",
    description: "Client meeting",
    isDeleted: false
  },
  {
    title: "Corporate Office",
    type: "photo",
    url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=500&fit=crop",
    description: "Corporate workspace",
    isDeleted: false
  },
  {
    title: "Planning Session",
    type: "photo",
    url: "https://images.unsplash.com/photo-1523958203904-cdcb402031fd?w=600&h=750&fit=crop",
    description: "Planning session",
    isDeleted: false
  },
  {
    title: "Modern Office",
    type: "photo",
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=450&fit=crop",
    description: "Modern workspace",
    isDeleted: false
  },
  {
    title: "Seminar Event",
    type: "photo",
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=850&fit=crop",
    description: "Seminar event",
    isDeleted: false
  },
  {
    title: "Presentation",
    type: "photo",
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=550&fit=crop",
    description: "Business presentation",
    isDeleted: false
  },
  {
    title: "Conference Hall",
    type: "photo",
    url: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=700&fit=crop",
    description: "Conference hall",
    isDeleted: false
  },
  {
    title: "Office Interior",
    type: "photo",
    url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=600&h=600&fit=crop",
    description: "Office interior",
    isDeleted: false
  },
  {
    title: "Conference Hall",
    type: "photo",
    url: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=700&fit=crop",
    description: "Conference hall",
    isDeleted: false
  },
  {
    title: "Presentation",
    type: "photo",
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=550&fit=crop",
    description: "Business presentation",
    isDeleted: false
  },

  // =========================
  // VIDEOS
  // =========================

  {
    title: "Rainforest Nature Sounds 1",
    type: "video",
    url: "mPZkdNFkNps",
    description: "Relaxing mountain landscapes and peaceful natural scenery.",
    isDeleted: false
  },
  {
    title: "Rainforest Nature Sounds 2",
    type: "video",
    url: "mPZkdNFkNps",
    description: "Calming ocean waves and golden sunset views.",
    isDeleted: false
  },
  {
    title: "Rainforest Nature Sounds 3",
    type: "video",
    url: "mPZkdNFkNps",
    description: "Cinematic forest scenes with soothing background atmosphere.",
    isDeleted: false
  },
  {
    title: "Rainforest Nature Sounds 2",
    type: "video",
    url: "mPZkdNFkNps",
    description: "Calming ocean waves and golden sunset views.",
    isDeleted: false
  },
  {
    title: "Rainforest Nature Sounds 2",
    type: "video",
    url: "mPZkdNFkNps",
    description: "Calming ocean waves and golden sunset views.",
    isDeleted: false
  },
  {
    title: "Rainforest Nature Sounds 2",
    type: "video",
    url: "mPZkdNFkNps",
    description: "Calming ocean waves and golden sunset views.",
    isDeleted: false
  }

];

const seedGallery = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected ✅");

    // Remove old gallery items
    await Gallery.deleteMany({});
    console.log("Old Gallery Data Cleared");

    // Insert new data
    await Gallery.insertMany(galleryData);
    console.log("Gallery Seeded Successfully 🚀");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedGallery();
