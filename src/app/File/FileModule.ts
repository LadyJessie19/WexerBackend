import FileController from "./FileController";
import File from "./FileEntity";
import FileRepository from "./FileRepository";
import FileService from "./FileService";

class FileModule {
    static build(){
        const repository = new FileRepository(File)
        const service = new FileService(repository)
        const controller = new FileController(service)
        return { repository, service, controller }
    }
}

export default FileModule