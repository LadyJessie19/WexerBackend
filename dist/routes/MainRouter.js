"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthRoutes_1 = __importDefault(require("./AuthRoutes"));
const UserRoutes_1 = __importDefault(require("./UserRoutes"));
const FileRoutes_1 = __importDefault(require("./FileRoutes"));
const OccurrenceRoutes_1 = __importDefault(require("./OccurrenceRoutes"));
const PatientRoutes_1 = __importDefault(require("./PatientRoutes"));
const TimelineRoutes_1 = __importDefault(require("./TimelineRoutes"));
const AuthenticateMiddleware_1 = __importDefault(require("../middlewares/AuthenticateMiddleware"));
const MainRouter = (0, express_1.Router)();
/* Public Routes */
MainRouter.use(AuthRoutes_1.default);
MainRouter.use(UserRoutes_1.default);
/* Private Routes */
MainRouter.use(FileRoutes_1.default);
MainRouter.use(AuthenticateMiddleware_1.default.checkToken);
MainRouter.use(OccurrenceRoutes_1.default);
MainRouter.use(PatientRoutes_1.default);
MainRouter.use(TimelineRoutes_1.default);
exports.default = MainRouter;
