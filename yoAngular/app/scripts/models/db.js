var mongoose = require('mongoose');
var dbUri = 'mongodb://localhost/workflowDemo';

mongoose.connect(dbUri);
mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbUri);
});
mongoose.connection.on('error', function (err) {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});
