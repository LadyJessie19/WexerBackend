import { Router } from "express";
import AuthModule from "../app/Auth/AuthModule";

const AuthRoutes = Router()
const authController = AuthModule.build()

AuthRoutes.post('/auth', authController.authCon.bind(authController))

export default AuthRoutes