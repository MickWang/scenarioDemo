var express = require('express');
var app = express();
var path = require('path');

var port  =process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/app')));
app.use(function (req,res) {
  res.sendFile(path.join(__dirname, './app/index.html'));
});

var server = app.listen(port, function () {
  console.log('listening to port '+port);
})
