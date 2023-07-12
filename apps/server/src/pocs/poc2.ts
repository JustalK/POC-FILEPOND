var express = require('express');
var router = express.Router();

var multer = require('multer');

interface MulterRequest extends Request {
  file: any;
}

router.post(
  '/upload',
  multer({ dest: 'uploads/poc2' }).single('files'),
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
