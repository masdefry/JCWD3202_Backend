import { Request, Response } from "express";

export const findProducts = (req: Request, res: Response) => {
    try {
        res.status(200).json({
            success: true, 
            message: 'Get Products Success', 
            data: null
        })
    } catch (error) {
        console.log(error)
    }
}

export const createProduct = (req: Request, res: Response) => {
    try {
        res.status(201).json({
            success: true, 
            message: 'Create Product Success', 
            data: null
        })
    } catch (error) {
        console.log(error)        
    }
}