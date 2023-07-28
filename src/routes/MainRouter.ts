import { Router } from "express";

import AuthRoutes from "./AuthRoutes";
import UserRoutes from "./UserRoutes";
import FileRoutes from "./FileRoutes";
import OccurrenceRoutes from "./OccurrenceRoutes";
import PatientRoutes from "./PatientRoutes";
import TimelineRoutes from "./TimelineRoutes";

import AuthenticateMiddleware from "../middlewares/AuthenticateMiddleware"

declare global {
    namespace Express {
    interface Request {
        user?: {
        userId?: string;
        name?: string;
        email?: string;
        }
    }
}
}

const MainRouter = Router()

/* Public Routes */
MainRouter.use(AuthRoutes)
MainRouter.use(UserRoutes)
MainRouter.use(FileRoutes)

/* Private Routes */
MainRouter.use(AuthenticateMiddleware.checkToken)
MainRouter.use(OccurrenceRoutes)
MainRouter.use(PatientRoutes)
MainRouter.use(TimelineRoutes)

export default MainRouter