var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/time',function(req, res){
	res.send('現在時間：'+ new Date().toString());
});


/* 範例用途 */
router.all('/user/:username',function(req,res,next){
	console.log('all methods captured');
	next();
});

router.get('/user/:username',function(req,res){
	res.send('使用者：'+req.params.username);
});

router.get('/list', function(req,res){
	res.render('list',{
		title:'List',
		items:[1989,'Larry','express','Node.JS']
	});
});

/*api*/
router.get('/u/:user', function(req, res) {
  
});

router.post('/post', function(req, res) {
  
});

router.get('/reg', function(req, res) {
  
});

router.post('/reg', function(req, res) {
  
});

router.get('/login', function(req, res) {
  
});

router.post('/login', function(req, res) {
  
});

router.get('/logout', function(req, res) {
  
});

module.exports = router;