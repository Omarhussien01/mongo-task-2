const express = require('express')
const router = express.Router();
const {getAllUsers,createUser,updateUser,deleteUser,updateProducts} = require('../controllers/userController')

router.get('/',getAllUsers)

router.post('/',createUser)

router.put('/:id',updateUser)

//endpoint for purchased products
router.put('/buy/:id',updateProducts)


router.delete('/:id',deleteUser)

module.exports = router;