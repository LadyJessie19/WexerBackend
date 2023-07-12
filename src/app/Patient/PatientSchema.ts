import * as yup from "yup"

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
}

export default PatientYupSchema