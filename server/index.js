require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const router = express.Router();

const app = express();

const PortfolioModel = require("./models/user");

const corsOptions = {
  origin: ['http://localhost:3000', 'https://nvaibhav.netlify.app'],
};

// Use CORS middleware
app.use(cors(corsOptions));

// Mount the router middleware on your Express application
app.use("/", router);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.post("/portfolio", async (req, res) => {
  try {
    const { name, subject, email, message, phone } = req.body;

    // Check if a response with the same email already exists
    const existingResponse = await PortfolioModel.findOne({ email });

    if (existingResponse) {
      // If a response with the same email exists, update it with the new data
      existingResponse.name = name;
      existingResponse.subject = subject;
      existingResponse.message = message;
      existingResponse.phone = phone;

      await existingResponse.save();

      res.status(200).json({ message: "Portfolio data updated successfully" });
    } else {
      // If no response with the same email exists, create a new response
      const portfolioData = new PortfolioModel({
        name,
        phone,
        email,
        subject,
        message,
      });

      await portfolioData.save();
      res.status(201).json({ message: "Portfolio data saved successfully" });
    }
  } catch (error) {
    console.error("Error saving/updating portfolio data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
const port = 8001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
