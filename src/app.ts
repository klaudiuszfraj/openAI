import dotenv from "dotenv";
dotenv.config()

import express from "express";
import logger from "./utils/logger";
import openaiRoutes from './routes/openaiRoutes';
import loggerMiddleware from "./middleware/loggerMiddleware";

const app = express();
const port = process.env.PORT || 8080;

// todo:: add express helmet?
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(loggerMiddleware)

app.use('/openai', openaiRoutes)

app.listen(port, () => {
  logger.info(`Server listening at port ${port}`);
});
