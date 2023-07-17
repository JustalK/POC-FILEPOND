import sharp from 'sharp';
import fs from 'fs';
const express = require('express');
export const router = express.Router();
import { addDelete } from '../interfaces/router';
import { multer, MulterRequest } from '../interfaces/multer';
import { RESPONSE_200 } from '../messages/response';

const DESTINATION = 'uploads/poc8';

router.post(
  '/upload',
  multer({ dest: DESTINATION }).single('files'),
  async (req: MulterRequest & { fileValidationError: Error }, res) => {
    const { filename } = req.file;
    const image = sharp(req.file.path);
    const metadata = await image.metadata();
    const resizedImage =
      metadata.width < 200 ? image : image.resize({ width: 200 });
    const bufferImage = await resizedImage.toBuffer();
    fs.writeFile(`${DESTINATION}/${filename}`, bufferImage, 'binary', (err) => {
      if (!err) console.log(`${filename} created successfully!`);
    });
    const files = (req as MulterRequest).file;
    res.send({ ...RESPONSE_200, files });
  }
);
addDelete(router);

module.exports = router;
