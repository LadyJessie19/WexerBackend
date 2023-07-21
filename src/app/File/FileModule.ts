import File from "./FileEntity";
import FileController from "./FileController";
import FileRepository from "./FileRepository";
import FileService from "./FileService";

import OccurrenceModule from "../Occurrence/OccurrenceModule";
import UserModule from "../User/UserModule";

class FileModule {
    static build(){
        const repository = new FileRepository(File)
        const service = new FileService(repository, UserModule.build().repository, OccurrenceModule.build().repository)
        const controller = new FileController(service)
        return { repository, service, controller }
    }
}

export default FileModule