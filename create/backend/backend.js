const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.set('strictQuery', true);


const mongoUrl =
  "mongodb+srv://neeladhasm:mongodb@cluster0.x7yao.mongodb.net/";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log("Database connection error:", e));

// Importing schema
require("./imageDetails");
const Images = mongoose.model("ImageDetails");

// File storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../src/images"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + file.originalname;
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

// Endpoint to upload images
app.post("/upload-image", upload.single("image"), async (req, res) => {
  console.log("Received file:", req.file ? req.file.filename : "No file uploaded");
  console.log("Request body:", req.body);

  const imageName = req.file ? req.file.filename : "";

  try {
    if (imageName) {
      await Images.create({ image: imageName, caption: req.body.caption || "" });
      res.json({ status: "ok" });
    } else {
      res.status(400).json({ status: "error", message: "No file uploaded" });
    }
  } catch (error) {
    console.error("Error saving image to database:", error);
    res.status(500).json({ status: "error", message: error.message });
  }
});

// Endpoint to retrieve images
app.get("/get-image", async (req, res) => {
  try {
    const data = await Images.find({});
    console.log("Retrieved images:", data);
    res.json({ status: "ok", data: data });
  } catch (error) {
    console.error("Error retrieving images:", error);
    res.status(500).json({ status: "error", message: error.message });
  }
});

// Endpoint to update image caption
app.put("/update-image/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { caption } = req.body;
    const result = await Images.findByIdAndUpdate(id, { caption }, { new: true });
    res.json({ status: "ok", data: result });
  } catch (error) {
    console.error("Error updating image caption:", error);
    res.status(500).json({ status: "error", message: error.message });
  }
});

// Endpoint to delete an image
app.delete("/delete-image/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const image = await Images.findById(id);
    if (image) {
      // Delete the image file from the server
      const filePath = path.join(__dirname, "../src/images", image.image);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
      await Images.findByIdAndDelete(id);
      res.json({ status: "ok" });
    } else {
      res.status(404).json({ status: "error", message: "Image not found" });
    }
  } catch (error) {
    console.error("Error deleting image:", error);
    res.status(500).json({ status: "error", message: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("Success!!!!!!");
});

app.listen(5001, () => {
  console.log("Server Started");
});