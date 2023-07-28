import { Types } from "mongoose"
import * as yup from "yup"

class FileYupSchema {
    static create(){
        return yup.object().shape({
            filename: yup.string().required(),
            mimetype: yup.string().required()
        })
    }
    static delete(){
        return yup.object().shape({
            id: yup
            .mixed()
            .test('is-valid-objectId', 'The Id is not valid', (value:any) => Types.ObjectId.isValid(value))
        })
    }
}

export default FileYupSchema