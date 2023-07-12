import * as yup from "yup"

class OccurrenceYupSchema {
    static create(){
        return yup.object().shape({
            title: yup.string().required(),
            content: yup.string().required(),
            kind: yup.string().oneOf(['session', 'relevant-fact'], 'The kind must be "session" or "relevant-fact"').required(),
        })
    }
}

export default OccurrenceYupSchema