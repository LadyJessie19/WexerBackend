"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const databaseConfig_1 = __importDefault(require("./configs/databaseConfig"));
const MainRouter_1 = __importDefault(require("./routes/MainRouter"));
dotenv_1.default.config();
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "..", 'uploads')));
app.use(express_1.default.static('uploads'));
app.use(MainRouter_1.default);
(() => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, databaseConfig_1.default)();
}))();
app.listen(port, () => {
    console.log(`Server started! Listening port: ${port}`);
});
