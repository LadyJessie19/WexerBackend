import dotenv from 'dotenv'
dotenv.config()

const url = process.env.USER_URL

class FileMapper {
    static toClient(file:any) {
        return {
            "link": `${url}${file.filename}`,
            "id": file._id,
            "filename": file.filename,
            "mimetype": file.mimetype,
            "userId": file.userId
        }
    }
}

export default FileMapper