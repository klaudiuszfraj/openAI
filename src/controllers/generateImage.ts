import {NextFunction, Request, Response} from 'express';
import axios from "axios";
import openApiInstance from '../utils/openApiInstance';
import {AdvancedError} from "../utils/errors";
import {
    GenerateImageResponse,
    GenerateImageBody,
    AlowedSizes,
} from '../../types/generateImage.types';

export const generateImage = async (
    req: Request,
    res: Response<GenerateImageResponse>,
    next: NextFunction
) => {
    try {
        const {prompt, size} = req.body as GenerateImageBody;
        // todo:: sanitize inputs
        const allowedSizes: AlowedSizes = {
            small: '256x256',
            medium: '512x512',
            large: '1024x1024',
        };
        const response = await openApiInstance.createImage({
            prompt,
            n: 1,
            size: allowedSizes[size] || '512x512',
        });
        const imageUrl = response.data.data[0].url;
        res.json({
            success: true,
            data: imageUrl || '',
        });
    } catch (error) {
        // todo:: error handler
        if (axios.isAxiosError(error)) {
            req.logger.error(`generateImage failed: ${error.message}`)
            next(new AdvancedError({
                message: error.message || 'The image could not be generated',
                methodName: error.response?.config.method,
                httpCode: error.response?.status || 500,
                originalHttpCode: error.response?.status || 500,
                isOperational: false
            }))
        }
    }
};
