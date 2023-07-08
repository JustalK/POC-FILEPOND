const express = require('express');
const router = express.Router();

const multer = require('multer');

interface MulterRequest extends Request {
  file: any;
}

router.post(
  '/upload',
  multer({ dest: 'uploads/poc1' }).single('files'),
  (req: Request, res) => {
    const files = (req as MulterRequest).file;
    console.log(files);
    res.send({ message: 'Welcome to server!' });
  }
);

router.delete('/upload', (req: Request, res) => {
  console.log(req);
  res.send({ message: 'Welcome to server!' });
});

module.exports = router;
