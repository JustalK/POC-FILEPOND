/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';

const app = express();
const cors = require('cors');

app.use(
  cors({
    origin: '*',
  })
);

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/poc4', require('./pocs/poc4'));
app.use('/poc1', require('./pocs/poc1'));
app.use('/poc2', require('./pocs/poc2'));
app.use('/poc3', require('./pocs/poc3'));

const port = process.env.NX_SERVER_PORT || 1338;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
