import express from 'express';
import helmet from 'helmet';
import openaiRoutes from './routes/openaiRoutes';
import loggerMiddleware from './middleware/loggerMiddleware';
import notFoundMiddleware from './middleware/notFoundMiddleware';
import errorMiddleware from './middleware/errorMiddleware';

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(loggerMiddleware);

app.use('/openai', openaiRoutes);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
