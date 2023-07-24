import * as yup from "yup"
import { Types } from "mongoose"

class TimelineYupSchema {
    static create(){
        return yup.object().shape({
            name: yup.string().required()
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

export default TimelineYupSchema