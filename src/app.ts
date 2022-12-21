import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import helmet from "helmet";
import logger from './utils/logger';
import openaiRoutes from './routes/openaiRoutes';
import loggerMiddleware from './middleware/loggerMiddleware';
import notFoundMiddleware from './middleware/notFoundMiddleware';
import errorMiddleware from './middleware/errorMiddleware';

const app = express();
const port = process.env.PORT || 8080;

app.use(helmet())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(loggerMiddleware);

app.use('/openai', openaiRoutes);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(port, () => {
  logger.info(`Server listening at port ${port}`);
});
