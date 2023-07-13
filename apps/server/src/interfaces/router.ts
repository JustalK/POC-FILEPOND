import { multer, MulterRequest } from './multer';
import { RESPONSE_200 } from '../messages/response';

export const addPost = (r, poc: string) => {
  r.post(
    '/upload',
    multer({ dest: `uploads/${poc}` }).single('files'),
    (req: Request, res) => {
      const files = (req as MulterRequest).file;
      res.send({ ...RESPONSE_200, files, poc });
    }
  );
};

export const addDelete = (r) => {
  r.delete('/upload', (req: Request, res) => {
    res.send(RESPONSE_200);
  });
};
