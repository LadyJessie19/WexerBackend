import * as yup from "yup"
import { Types } from "mongoose"

class PatientYupSchema {
    static create(){
        return yup.object().shape({
            name: yup.string().required(),
            birthdate: yup.date().required(),
            contact: yup.string().required(),
            demands: yup.string().required(),
            personalAnnotations: yup.string().required(),
            userId: yup.mixed().test('is-valid-objectId', 'The ID is not valid', (value:any) => Types.ObjectId.isValid(value))
        })
    }
    static update(){
        return yup.object().shape({
            id: yup
            .mixed()
            .test('is-valid-objectId', 'The ID is not valid', (value:any) => Types.ObjectId.isValid(value)),
            body: yup
            .object()
            .test('is-valid-key', 'The object key is not valid', (value:any, context:any) => {
                const { path, createError } = context;

                const allowedKeys = ['name', 'birthdate', 'contact', 'demands', 'personalAnnotations'];
                const isValidKey = Object.keys(value).every(key => allowedKeys.includes(key));

                if (!isValidKey) {
                return createError({ path, message: 'The object key is not valid'})}
                
                return true;
            })
            .test('is-not-empty', 'The body is empty', (value:any) => {
                return value ? Object.keys(value).length > 0 : false;
            }).required('The body is required')
        })
    }
    static delete(){
        return yup.object().shape({
            id: yup
            .mixed()
            .test('is-valid-objectId', 'The ID is not valid', (value:any) => Types.ObjectId.isValid(value))
        })
    }
}

export default PatientYupSchema