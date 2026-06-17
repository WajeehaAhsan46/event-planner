const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();
app.get("/test", (req, res) => {
  console.log("TEST HIT OK");
  res.json({ message: "backend working" });
});
// middleware (FIXED)
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://event-planner-rho-tan.vercel.app"
  ]
}));
app.use(express.json());

// DB connect
connectDB();

// routes
const bookingRoutes = require("./routes/bookingRoutes");
app.use("/api/bookings", bookingRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
