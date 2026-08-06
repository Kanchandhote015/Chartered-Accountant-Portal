// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// const serviceRoutes = require("./routes/serviceRoutes");

// app.use("/api/services", serviceRoutes);

// const path = require("path");

// app.use("/images", express.static(path.join(__dirname, "public/images")));


// // Routes
// app.use("/api/admin", require("./routes/adminRoutes"));
// app.use("/api/services", require("./routes/serviceRoutes"));
// app.use("/api/gallery", require("./routes/galleryRoutes"));
// app.use("/api/news", require("./routes/newsRoutes"));
// app.use("/api/contact", require("./routes/contactRoutes"));
// app.use("/uploads", express.static("uploads"));

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log(err));

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// STATIC IMAGE FOLDER
// app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use("/uploads", express.static("uploads"));

// ROUTES
app.use("/api/services", require("./routes/serviceRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/gallery", require("./routes/galleryRoutes"));
app.use("/api/news", require("./routes/newsRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));

// DATABASE
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
