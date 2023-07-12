import * as yup from "yup"

class FileYupSchema {
    static create(){
        return yup.object().shape({
            filename: yup.string().required(),
            mimetype: yup.string().required()
        })
    }
}

export default FileYupSchema