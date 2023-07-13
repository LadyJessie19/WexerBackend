import { Router } from "express";
import { AuthModule } from "../app/Auth/AuthModule";

const AuthRoutes = Router()
const authController = AuthModule.build().controller

AuthRoutes.post('/auth', authController.something.bind(authController))

export default AuthRoutes