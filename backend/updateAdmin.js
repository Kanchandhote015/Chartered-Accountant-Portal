const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const Admin = require("./models/Admin");

mongoose.connect(process.env.MONGO_URI);

const updateAdmin = async () => {
  try {
    const email = "newadmin@gmail.com";
    const password = "123456";

    const hashedPassword = await bcrypt.hash(password, 10);

    await Admin.findOneAndUpdate(
      { email },
      {
        email,
        password: hashedPassword,
        role: "admin"
      },
      { upsert: true, new: true }
    );

    console.log("✅ Admin created/updated successfully");
    process.exit();

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

updateAdmin();