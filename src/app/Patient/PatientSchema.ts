import * as yup from "yup"
import { Types } from "mongoose"

const dateNow = Date.now()

class PatientYupSchema {
    static create(){
        return yup.object().shape({
            name: yup.string().required(),
            birthdate: yup.date().default(dateNow as any),
            contact: yup.string().required(),
            demands: yup.string().required(),
            personalAnnotations: yup.string().required()
        })
    }
    static update(){
        return yup.object().shape({
            id: yup
            .mixed()
            .test('is-valid-objectId', 'The ID is not valid', value => Types.ObjectId.isValid(value as any)),
            body: yup.object().required("The body is empty")
        })
    }
    static delete(){
        return yup.object().shape({
            id: yup
            .mixed()
            .test('is-valid-objectId', 'The ID is not valid', value => Types.ObjectId.isValid(value as any))
        })
    }
}

export default PatientYupSchema