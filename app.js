var express = require('express');
var app     = express();
var fs      = require('fs');

var multer  = require('multer');
var upload  = multer({ dest: 'uploads/' });

app.set('view engine', 'pug');

// Submit file
app.post('/get-file-size', upload.single('file'), function(req, res){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('{"size":' + req.file.size + '}');

    fs.unlink(req.file.path);
});

// Display form
app.get('*', function(req, res){
    res.render('index');
});

// Start server
var port = process.env.PORT || 8080;
app.listen(port, function(){
    console.log('The server is running on port ' + port);
});