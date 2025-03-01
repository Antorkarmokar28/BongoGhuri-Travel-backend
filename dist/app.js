"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 5000;
// if server is running on rout then this function exicuted
app.get("/", (req, res) => {
    res.send({
        success: true,
        message: "BongoGhuri server is running now",
    });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
