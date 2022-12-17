import express from "express";
import dotenv from "dotenv";
dotenv.config() 

import openaiRoutes from './routes/openaiRoutes';
const app = express();
const port = process.env.PORT || 8080;

// todo:: add express helmet?
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use('/openai', openaiRoutes)

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
