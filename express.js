var express = require('express');
var app     = express();

var multer  = require('multer');
var upload  = multer({ storage: multer.memoryStorage() });
var router  = express.Router();

app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');
app.set('views', process.cwd());

// Submit file
router.post('/get-file-size', upload.single('file'), function(req, res){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('{"size":' + req.file.size + '}');
});

// Display form
router.get('/*', function(req, res){
    res.render('index');
});

app.use(router);

module.exports = app;