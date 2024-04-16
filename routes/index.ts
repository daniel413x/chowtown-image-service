import Router from 'express';
import imageRouter from './imageRouter';

const router = Router();

router.use('/image', imageRouter);

export default router;
