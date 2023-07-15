import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv"

import newError from "../../utils/ErrorHandler";
import TokenHandler from "../../utils/TokenHandler";
import newSuccess from "../../utils/SuccessHandler";

dotenv.config()

class AuthenticateMiddleware{
    static async checkToken(req: Request | any, res: Response, next: NextFunction) {
        const { headers : { authorization } } = req
        const secretKey = process.env.SECRET_KEY as string
        const currentToken = new TokenHandler(secretKey)
        
        if(!authorization){
            return res.status(401).json(newError('Not authorized.', 401, "!authorization"))
        }
        
        const [, token] = authorization.split(" ")
    
        try {
            req.user = await currentToken.verify(token)
        } catch (error) {
            return res.status(401).json(newError("Invalid token", 401, "AuthMiddle catch"))
        }
        next()
    }
}

export default AuthenticateMiddleware