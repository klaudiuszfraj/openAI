"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./utils/logger"));
const openaiRoutes_1 = __importDefault(require("./routes/openaiRoutes"));
const loggerMiddleware_1 = __importDefault(require("./middleware/loggerMiddleware"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
// todo:: add express helmet?
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(loggerMiddleware_1.default);
app.use('/openai', openaiRoutes_1.default);
app.listen(port, () => {
    logger_1.default.info(`Server listening at port ${port}`, { fff: 'ff' });
});
