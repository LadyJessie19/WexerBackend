import * as yup from "yup"

class AuthYupSchema {
    static login(){
        return yup.object().shape({
            email: yup.string().email().required(),
            password: yup.string().required()
        })
    }
}

export default AuthYupSchema