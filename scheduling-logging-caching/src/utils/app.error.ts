    export const AppError = (message: string, statusCode: number) => {
        const error = new Error(message) as Error & { statusCode: number, isExpose: boolean };

        error.statusCode = statusCode;
        error.isExpose = true;

        return error;
    }