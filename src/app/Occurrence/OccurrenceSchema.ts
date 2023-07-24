import * as yup from "yup"
import { Types } from "mongoose"

class OccurrenceYupSchema {
    static create(){
        return yup.object().shape({
            title: yup.string().required(),
            content: yup.string().required(),
            kind: yup.string().oneOf(['session', 'relevant-fact'], 'The kind must be "session" or "relevant-fact"').required(),
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

export default OccurrenceYupSchema