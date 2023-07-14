import { multer, MulterRequest } from './multer';
import { RESPONSE_200 } from '../messages/response';
const express = require('express');
export const router = express.Router();

export const addPost = (r, poc: string) => {
  r.post(
    '/upload',
    multer({ dest: `uploads/${poc}` }).single('files'),
    (req: Request, res) => {
      const files = (req as MulterRequest).file;
      res.send({ ...RESPONSE_200, files });
    }
  );
};

export const addDelete = (r) => {
  r.delete('/upload', (req: Request, res) => {
    res.send(RESPONSE_200);
  });
};
