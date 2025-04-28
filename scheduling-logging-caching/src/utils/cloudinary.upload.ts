import {
  v2 as cloudinary,
  UploadApiResponse,
  UploadApiErrorResponse,
} from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// If Upload Storage using Memory Storage (Recomended to Production using Vercel)
export const cloudinaryUpload = async (file: Buffer) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        { folder: 'images' },
        (
          error: UploadApiErrorResponse | null | undefined,
          result?: UploadApiResponse
        ) => {
          if (error) {
            return reject(error);
          }
          resolve({ res: result?.secure_url });
        }
      )
      .end(file);
  });
};
