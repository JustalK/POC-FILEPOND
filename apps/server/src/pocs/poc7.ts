const express = require('express');
export const router = express.Router();
import { addDelete } from '../interfaces/router';
import { multer, MulterRequest } from '../interfaces/multer';
import { RESPONSE_200 } from '../messages/response';

function limiteImageSize(req, file, cb) {
  const { mimetype } = file;
  if (mimetype === 'image/png') {
    cb(null, true);
  } else if (mimetype) {
    req.fileValidationError = 'Wrong type';
    cb(null, false, req.fileValidationError);
  } else {
    cb(new Error("I don't have a clue!"));
  }
}

router.post(
  '/upload',
  multer({ dest: 'uploads/poc7', limits: { fileSize: 10 } }).single('files'),
  (req: MulterRequest & { fileValidationError: Error }, res) => {
    console.log(res);
    if (req.fileValidationError) {
      return res.status(500).send({
        message: req.fileValidationError,
      });
    }
    const files = (req as MulterRequest).file;
    res.send({ ...RESPONSE_200, files });
  }
);
addDelete(router);

module.exports = router;
