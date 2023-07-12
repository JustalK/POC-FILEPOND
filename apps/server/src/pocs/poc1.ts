import { router, addDelete, addPost } from '../interfaces/router';

addPost(router, 'poc1');
addDelete(router);

module.exports = router;
