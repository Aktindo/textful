"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
exports.default = (function (type, str) {
    if (type === "info") {
        console.log(chalk_1.default.blueBright(">") + " " + str);
    }
    else if (type === "error") {
        console.log(chalk_1.default.redBright(">") + " " + str);
    }
});
