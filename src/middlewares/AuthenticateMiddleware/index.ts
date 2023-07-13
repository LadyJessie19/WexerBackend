import { NextFunction, Request, Response } from "express";
import TokenHandler from "../../utils/TokenHandler";
import newError from "../../utils/ErrorHandler";
import dotenv from "dotenv"
dotenv.config()

class AuthenticateMiddleware{
    static async checkToken(req: Request, res: Response, next: NextFunction) {
        const { headers : { authorization } } = req
        
        if(!authorization){
            /* return res.status(401).json({error: 'Auth token is inaccessible'}) */
            return res.status(401).json(newError('Auth token is inaccessible', 401))
        }
        
        const [bear, token] = authorization.split(" ")

        const currentToken = new TokenHandler(process.env.SECRET_KEY as string)

        try{
            currentToken.verify(token)
            next()
        }catch{
            return res.status(401).json(newError('Not Authenticated', 401))
        }
    }
}

export default AuthenticateMiddleware