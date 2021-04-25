const Router = require('express')
const router = new Router()
const userController = require('../controllers/user.controller.js')

router.get('/user', userController.getAll)
router.get('/user/:id', userController.getOne)
router.post('/user', userController.createUser)
router.put('/user', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)


module.exports = router 