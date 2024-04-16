import Router from 'express';
import ImageController from '../controllers/ImageController';
import inMemory from '../utils/inMemory';
import isAuthedMiddleware from '../middleware/auth/isAuthedMiddleware';

const router = Router();

router.post(
  '',
  isAuthedMiddleware,
  inMemory.single('image'),
  (req, res) => ImageController.post(req, res),
);

export default router;
