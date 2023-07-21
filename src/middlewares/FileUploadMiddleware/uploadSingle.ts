import multer from "multer"

class UploadSingle{
  static build(name:string){
    const options = multer.diskStorage({
      destination(req, file, callback) {
        callback(null, 'uploads/')  
      },
      filename(req, file, callback) {
        const [, extension] = file.mimetype.split('/')
        callback(null, file.fieldname + "-" + new Date().getTime() + "." + extension )  
      },
    })

    const upload = multer({ storage: options })

    return upload.single(name)
  }  
}

export default UploadSingle


