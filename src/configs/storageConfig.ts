import multer from "multer"

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/")
  },
  filename(req, file, cb) {
    let error = null

    const valids = ["image/png", "image/jpg", "image/jpeg"]

    if(!valids.includes(file.mimetype)) {
      error = new Error("Invalid file type")
    }

    cb(error, Date.now() + "-" + file.originalname)
  },
})

const upload = multer({ storage })

export { upload }
