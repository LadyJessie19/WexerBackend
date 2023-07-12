import * as yup from "yup"

class TimelineYupSchema {
    static create(){
        return yup.object().shape({
            name: yup.string().required()
        })
    }
}

export default TimelineYupSchema