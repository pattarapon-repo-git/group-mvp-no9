import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.js";
import { router as apiRoutes } from "./routes/index.js";
import { User } from "./models/user.model.js";

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

app.use(express.json());
app.use(cookieParser());

app.use("/api", apiRoutes);
app.use((err, req, res, next) => {
  return res.status(500).json({
    error: "Something went wrong on the server...",
    message: err.message,
  });
});

const PORT = process.env.PORT;
async function seedAdmin() {
  try {
    const adminExists = await User.findOne({ email: "admin@test.com" });
    if (!adminExists) {
      await User.create({
        firstname: "System",
        lastname: "Admin",
        username: "admin_test",
        email: "admin@test.com",
        password: "123", // Will be hashed by pre-save hook
        role: "admin",
      });
      console.log("Admin account (admin@test.com / 123) created successfully.");
    }
  } catch (error) {
    console.log("Error seeding admin:", error.message);
  }
}

async function start() {
  try {
    await connectDB();
    await seedAdmin(); // Seed admin after DB connects
    app.listen(PORT, () => {
      console.log(`Server is running on PORT:${PORT}`);
    });
  } catch (error) {
    console.log("Fail to connect to MongoDB:", error.message);
    process.exit(1);
  }
}

start();

