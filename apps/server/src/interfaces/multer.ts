export const multer = require('multer');

export interface MulterRequest extends Request {
  file: any;
}
