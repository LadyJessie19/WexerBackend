import UserRepository from "../User/UserRepository";
import { LoginDTO } from "./AuthDTO";
import dotenv from "dotenv"

import DataEncrypt from "../../utils/DataEncrypt";
import TokenHandler from "../../utils/TokenHandler";

import newError from "../../utils/ErrorHandler";
import serverError from "../../utils/ServerError";
import newSuccess from "../../utils/SuccessHandler";

dotenv.config()

class AuthService{
    constructor(private repository: UserRepository){}

    async authSer(body:LoginDTO){
        const { email, password } = body
        const secretKey = process.env.SECRET_KEY as string
        const currentToken = new TokenHandler(secretKey)

        try {
            const user = await this.repository.findByEmail(email)
            if (!user) {
                return newError("Not valid email/password.", 403, "!user")
            }
            
            const isThePasswordValid = DataEncrypt.compare(password, user.password);
            if (!isThePasswordValid) {
                return newError("Not valid email/password.", 403, "!isThePasswordValid")
            }

            const payload = {
            userId: user._id,
            name: user.name,
            email: user.email
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