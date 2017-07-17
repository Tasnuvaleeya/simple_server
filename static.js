const express = require('express');
const http = require('http');

const app = express();
app.use('/downloads', express.static('/home/tasnu/Downloads'));
http .createServer(app).listen(8086, function(){
console.log('i am starting');
});
