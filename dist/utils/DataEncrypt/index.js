"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
class DataEncrypt {
    /**
     * Encryptates the data that has been provided.
     * @param data
     * @param iterations
     * @returns
     */
    static hash(data, iterations) {
        return bcrypt_1.default.hashSync(data, iterations);
    }
    /**
     * Compares if the both information has any similarities.
     * @param normalData not encryptated.
     * @param encryptedData encryptated. Got it?!
     * @returns
     */
    static compare(normalData, encryptedData) {
        return bcrypt_1.default.compareSync(normalData, encryptedData);
    }
}
exports.default = DataEncrypt;
