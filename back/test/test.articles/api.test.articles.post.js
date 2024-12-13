const express = require("express");
const multer = require("multer");
const path = require("path");
const createHttpError = require("http-errors");

const app = express();

app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); 
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|pdf/; 
    const mimeType = allowedTypes.test(file.mimetype);
    const extName = allowedTypes.test(path.extname(file.originalname).toLowerCase());

    if (mimeType && extName) {
      cb(null, true);
    } else {
      cb(new createHttpError.BadRequest("Invalid file type"));
    }
  },
});

const mockDb = [];

app.post("/articles/upload", upload.single("file"), (req, res, next) => {
  try {
    if (!req.file) {
      throw new createHttpError.BadRequest("No file uploaded");
    }

    const { title, content } = req.body;

    if (!title || !content) {
      throw new createHttpError.BadRequest("Title and content are required");
    }

    const newArticle = {
      id: mockDb.length + 1,
      title,
      content,
      filePath: req.file.path,
      fileName: req.file.filename,
    };
    mockDb.push(newArticle);

    res.status(201).json({
      message: "Article uploaded successfully",
      article: newArticle,
    });
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
