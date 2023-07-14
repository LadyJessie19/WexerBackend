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

        const isTheTokenValid = await currentToken.verify(token)
        
        if(isTheTokenValid){
            req.user = await currentToken.decode(token)
            return res.status(200).json(newSuccess("Auth completed.", 200, req.user))
            next()
        } else{
            return res.status(401).json(newError('The token isn`t valid.', 401, "isTheTokenValid"))
        }
    }
}

export default AuthenticateMiddleware