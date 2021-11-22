const {Router}=require('express');
const router = Router();
const {userGet,userPost,userPut,userDelete} = require('../controllers/users')

router.get('/',userGet);

router.post('/:id',userPost);

router.put('/:id', userPut);

router.delete('/:id',userDelete);

module.exports = router;