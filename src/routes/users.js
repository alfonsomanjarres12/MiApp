const {Router}= require('express')
const router =Router()
	
router.get('/test', function(req, res){
    res.send('hola mundo')
})

module.exports = router