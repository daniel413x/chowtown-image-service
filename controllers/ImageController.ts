import { Request, Response } from 'express';
import { v2 } from 'cloudinary';
import ApiError from '../error/ApiError';

const upload = async (req: Request) => {
  const image = req.file;
  if (!image) {
    throw new ApiError(400, 'Image was missing');
  }
  const base64Image = Buffer.from(image?.buffer).toString('base64');
  const dataURI = `data:${image.mimetype};base64,${base64Image}`;
  const uploadRes = await v2.uploader.upload(dataURI, {
    folder: 'chowtown',
  });
  return uploadRes.url;
};

class ImageController {
  async post(req: Request, res: Response) {
    const url = await upload(req);
    return res.json({ url });
  }
}

export default new ImageController();
