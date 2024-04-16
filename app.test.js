import ImageController from './controllers/ImageController';
import ApiError from './error/ApiError';

// Mock cloudinary uploader
jest.mock('cloudinary', () => ({
  v2: {
    uploader: {
      upload: jest.fn(),
    },
  },
}));

describe('ImageController', () => {
  describe('post', () => {
    // it('should upload an image and return the URL', async () => {
    //   const mockUrl = 'http://example.com/image.jpg';
    //   (cloudinary.uploader.upload).mockResolvedValue({ url: mockUrl });

    //   const mockReq = {
    //     file: {
    //       buffer: Buffer.from('test image data'),
    //       mimetype: 'image/jpeg',
    //     },
    //   };

    //   const mockRes = {
    //     json: jest.fn(),
    //   };

    //   // Execute
    //   await ImageController.post(mockReq, mockRes);

    //   // Assert
    //   expect(cloudinary.uploader.upload).toHaveBeenCalled();
    //   expect(mockRes.json).toHaveBeenCalledWith({ url: mockUrl });
    // });

    it('should throw an ApiError if no image is provided', async () => {
      const mockReq = { file: undefined };
      const mockRes = {};

      // Execute & Assert
      await expect(ImageController.post(mockReq, mockRes))
        .rejects
        .toThrow(ApiError);
    });
  });
});
