import { NextFunction, Request, Response } from "express";

import dotenv from "dotenv"

import newError from "../../utils/ErrorHandler";
import TokenHandler from "../../utils/TokenHandler";
dotenv.config()

class AuthenticateMiddleware{
    static async checkToken(req: Request, res: Response, next: NextFunction) {
        const { headers: { authorization = null} } = req
        const secretKey = process.env.SECRET_KEY as string
        const currentToken = new TokenHandler(secretKey)
        
        if(!authorization){
            return res.status(401).json(newError('Not authorized.', 401, "!authorization"))
        }
        
        const [, token] = authorization.split(" ")

        try {
            await currentToken.verify(token)
            req.user = await currentToken.decode(token) as { userId:string, name:string, email:string }
        } catch (error) {
            return res.status(401).json(newError("Invalid token", 401, "AuthMiddle catch"))
        }
        next()
    }
}

export default AuthenticateMiddleware