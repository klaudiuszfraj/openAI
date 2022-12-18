import express from 'express';
import { generateImage } from '../controllers/openaiController';

const router = express.Router();

router.post('/generateImage', generateImage);

export default router;
