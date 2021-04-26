const Route = require('express')
const router = Route()
const postController = require('../controllers/post.controller')

router.post('/post', postController.createPost)
router.get('/post', postController.getPostByUserId)

module.exports = router