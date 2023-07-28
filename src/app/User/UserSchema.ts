import { Types } from "mongoose"
import * as yup from "yup"

class UserYupSchema {
    static create(){
        return yup.object().shape({
            name: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().required()
        })
    }
    static update(){
        return yup.object().shape({
            id: yup
            .mixed()
            .test('is-valid-objectId', 'The ID is not valid', value => Types.ObjectId.isValid(value as any)),
            body: yup
            .object()
            .test('is-valid-key', 'The object key is not valid', (value, context) => {
                const { path, createError } = context;

                const allowedKeys = ['name', 'email', 'password'];
                const isValidKey = Object.keys(value).every(key => allowedKeys.includes(key));

                if (!isValidKey) {
                return createError({ path, message: 'The object key is not valid'})}
                
                return true;
            })
            .test('is-not-empty', 'The body is empty', value => {
                return value ? Object.keys(value).length > 0 : false;
            }).required('The body is required')
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
export default UserYupSchema