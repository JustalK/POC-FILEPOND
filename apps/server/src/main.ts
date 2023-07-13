/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import { NB_OF_POCS } from './utils/constants';

const app = express();
const cors = require('cors');

app.use(
  cors({
    origin: '*',
  })
);

app.use('/assets', express.static(path.join(__dirname, 'assets')));
for (let i = 1; i < NB_OF_POCS + 1; i++) {
  app.use(`/poc${i}`, require(`./pocs/poc${i}`));
}

const port = process.env.NX_SERVER_PORT || 1338;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
