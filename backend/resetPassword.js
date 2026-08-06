const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const MONGO_URI = "mongodb://localhost:27017/ca_website_db";

const run = async () => {
  await mongoose.connect(MONGO_URI);

  const newPassword = await bcrypt.hash("admin123", 10);

  await mongoose.connection.collection("admins").updateOne(
    { email: "newadmin@gmail.com" },
    { $set: { password: newPassword } }
  );

  console.log("✅ Password Reset Done");
  process.exit();
};

run();