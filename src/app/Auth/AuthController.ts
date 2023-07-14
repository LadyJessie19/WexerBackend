import { Request, Response } from "express";
import AuthService from "./AuthService";
import AuthSchema from "./AuthSchema";
import newError from "../../utils/ErrorHandler";

class AuthController{
    constructor(private service: AuthService){}

    async authCon(req: Request, res: Response){
        const { body } = req

        try {
            await AuthSchema.login().validate(body)
        } catch(err: any) {
            return res.status(400).json(newError(err.errors, 400, "Yup Schema"))
        }

        const result = await this.service.authSer(body)
        return res.status(result.statusCode).json(result)
    }
}

export default AuthController