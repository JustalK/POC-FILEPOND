import { router, addDelete } from '../interfaces/router';
import { multer, MulterRequest } from '../interfaces/multer';
import { RESPONSE_200 } from '../messages/response';

function checkPngImage(req, file, cb) {
  const { mimetype } = file;
  if (mimetype === 'image/png') {
    cb(null, true);
    console.log('good');
  } else if (mimetype) {
    req.fileValidationError = 'Wrong type';
    cb(null, false, req.fileValidationError);
  } else {
    cb(new Error("I don't have a clue!"));
  }
}

router.post(
  '/upload',
  multer({ dest: 'uploads/poc4', fileFilter: checkPngImage }).single('files'),
  (req: MulterRequest & { fileValidationError: Error }, res) => {
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
