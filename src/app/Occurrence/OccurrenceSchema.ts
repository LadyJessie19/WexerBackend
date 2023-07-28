import * as yup from "yup"
import { Types } from "mongoose"

class OccurrenceYupSchema {
    static create(){
        return yup.object().shape({
            title: yup.string().required(),
            content: yup.string().required(),
            kind: yup.string().oneOf(['session', 'relevant-fact'], 'The kind must be "session" or "relevant-fact"').required(),
            timelineId: yup.mixed().test('is-valid-objectId', 'The ID is not valid', (value:any) => Types.ObjectId.isValid(value)),
        })
    }
    static update(){
        return yup.object().shape({
            id: yup
            .mixed()
            .test('is-valid-objectId', 'The ID is not valid', (value:any) => Types.ObjectId.isValid(value)),
            body: yup
            .object()
            .shape({
                title: yup.string(),
                content: yup.string(),
                kind: yup.string().oneOf(['session', 'relevant-fact'], "Invalid kind value. It must be set as 'session' or 'relevant-fact'"),
            })
            .test('is-valid-key', 'The object key is not valid', (value:any, context:any) => {
                const { path, createError } = context;

                const allowedKeys = ['title', 'content', 'kind'];
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

export default OccurrenceYupSchema