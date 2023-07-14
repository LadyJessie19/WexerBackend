import DoctorRepository from "../Doctor/DoctorRepository";
import { LoginDTO } from "./AuthDTO";
import dotenv from "dotenv"

import DataEncrypt from "../../utils/DataEncrypt";
import TokenHandler from "../../utils/TokenHandler";

import newError from "../../utils/ErrorHandler";
import serverError from "../../utils/ServerError";
import newSuccess from "../../utils/SuccessHandler";

dotenv.config()

class AuthService{
    constructor(private repository: DoctorRepository){}

    async authSer(body:LoginDTO){
        const { email, password } = body
        const secretKey = process.env.SECRET_KEY as string
        const currentToken = new TokenHandler(secretKey)

        try {
            const doctor = await this.repository.findByEmail(email)
            if (!doctor) {
                return newError("Not valid email/password.", 403, "!doctor")
            }
            
            const isThePasswordValid = DataEncrypt.compare(password, doctor.password);
            if (!isThePasswordValid) {
                return newError("Not valid email/password.", 403, "!isThePasswordValid")
            }

            const payload = {
            userId: doctor._id,
            name: doctor.name,
            email: doctor.email
            };
        
            const options = {
            expiresIn: "7d",
            };
        
            const token = await currentToken.sign(payload, options)
            return newSuccess("Login was successfully. Token created.", 200, undefined, token)

        } catch (error: any) {
            return serverError(error, "Auth service catch")
        }
    }
}

export default AuthService