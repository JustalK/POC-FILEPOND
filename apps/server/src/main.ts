/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express, { Request } from 'express';
import * as path from 'path';
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

interface MulterRequest extends Request {
  file: any;
}

const app = express();
const cors = require('cors');

app.use(
  cors({
    origin: '*',
  })
);

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.post('/api', upload.single('documents'), (req: Request, res) => {
  const files = (req as MulterRequest).file;
  console.log(files);
  res.send({ message: 'Welcome to server!' });
});

const port = process.env.PORT || 1338;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
