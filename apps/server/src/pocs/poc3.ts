const express = require('express');
export const router = express.Router();
import { addDelete, addPost } from '../interfaces/router';

addPost(router, 'poc3');
addDelete(router);

module.exports = router;
