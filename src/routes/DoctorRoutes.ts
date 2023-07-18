import { Router } from "express";
import UserModule from "../app/User/UserModule";
import AuthenticateMiddleware from "../middlewares/AuthenticateMiddleware";

const UserRoutes = Router()
const userController = UserModule.build().controller

const commonPath = '/users';
const pathWithId = '/users/:id';

//Create
UserRoutes.post(commonPath, userController.createCon.bind(userController))
//Read
UserRoutes.get(commonPath, AuthenticateMiddleware.checkToken, userController.getAllCon.bind(userController))
UserRoutes.get(pathWithId, AuthenticateMiddleware.checkToken, userController.getOneCon.bind(userController))
//Update
UserRoutes.patch(pathWithId, AuthenticateMiddleware.checkToken, userController.updateCon.bind(userController))
//Delete
UserRoutes.delete(pathWithId, AuthenticateMiddleware.checkToken, userController.deleteCon.bind(userController))

export default UserRoutes