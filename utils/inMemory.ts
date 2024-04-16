import multer from 'multer';

const storage = multer.memoryStorage();
// use as middleare—store a file in memory, place in req object
const inMemory = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

export default inMemory;
