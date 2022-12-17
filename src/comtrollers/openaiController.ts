import { Request, Response } from "express"
import { Configuration, OpenAIApi } from "openai"
import { type } from "os"

type SizeType = 'small' | 'medium' | 'large'
interface AlowedSizes {
    small: '256x256',
    medium: '512x512',
    large: '1024x1024',
}
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

export const generateImage = async (req: Request, res: Response) => {
    try {
        const { prompt, size }: {prompt:string, size:SizeType} = req.body
        // todo:: sanitize inputs
        const allowedSizes:AlowedSizes = {
            small: '256x256',
            medium: '512x512',
            large: '1024x1024',
        }
        const response = await openai.createImage({
            prompt,
            n: 1,
            size: allowedSizes[size] || '512x512'
        })
        const imageUrl = response.data.data[0].url
        res.json({
            success: true,
            data: imageUrl
        })
    } catch (error) {
        // todo:: error handler
        res.status(400).json({
            success: false,
            message: 'The image could not be generated'
        })
    }
}
