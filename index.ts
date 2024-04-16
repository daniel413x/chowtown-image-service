import express from 'express';
import 'express-async-errors';
import 'dotenv/config';
import cors from 'cors';
import { v2 as cloudinary } from 'cloudinary';
import router from './routes';
import errorMiddleware from './middleware/logging/errorMiddleware';
import logger from './middleware/logging/logger';

const PORT = process.env.PORT || 5503;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  cloud_api_secret: process.env.CLOUDINARY_API_SECRET,
});
const app = express();
app.use(cors({
  origin: process.env.API_SVC_ADDRESS,
}));
app.use(express.json());
app.use('/api', router);
app.use(errorMiddleware);

const init = async () => {
  try {
    app.listen(PORT, () => logger(`server started on port ${PORT}`));
  } catch (e) {
    logger(e);
  }
};

// eslint-disable-next-line import/prefer-default-export
module.exports = app;

if (process.env.NODE_ENV !== 'test') {
  init();
}
