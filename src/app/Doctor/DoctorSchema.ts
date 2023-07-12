import * as yup from "yup"

class DoctorYupSchema {
    static create(){
        return yup.object().shape({
            name: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().required()
        })
    }
}

export default DoctorYupSchema