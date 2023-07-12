import { router, addDelete, addPost } from '../interfaces/router';

addPost(router, 'poc2');
addDelete(router);

module.exports = router;
