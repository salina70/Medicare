import multer from "multer";
// import path from "path";
const uploadDir = "uploads"

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },

  filename: (req, file, cb) => {
    cb(null,Date.now()+ "" +file.originalname)

  },
});

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith("image/")) {
//     cb(null, true);
//   } else {
//     cb(new Error("Only image files are allowed"), false);
//   }
// };

const upload = multer({
  storage
});

export default upload;