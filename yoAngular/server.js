var express = require('express');
var app = express();
var path = require('path');
var db = require('./app/scripts/models/db');
var mongoose = require('mongoose');
var workflow = require('./app/scripts/models/workflowSchema');
var workflowModel = mongoose.model('Workflow');
var bodyParser = require('body-parser');


var port  =process.env.PORT || 4000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}))
app.use(express.static(path.join(__dirname, '/app')));
// app.use(function (req,res) {
//   res.sendFile(path.join(__dirname, './app/index.html'));
// });
app.get('/api/queryScenario/',function (req,res) {
  var data = [{value:'1', text:'教育'},
    {value:'2', text:'电商'},
    {value:'3', text:'艺术'},
    {value:'4', text:'音乐'},
    {value:'5', text:'家教'},
    {value:'6', text:'餐饮'},
    {value:'7', text:'咖啡'}];
  var query = req.query.query;
  console.log('query: '+query);
  var result = {};
  for(var i=0 ;i<data.length;i++) {
    if(query == data[i].text) {
      result = data[i];
      break;
    }
  }
  res.json({data:[result]});
})

app.post('/api/saveWorkflow', function(req, res) {

  console.log('req'+req.body);
  var workflow = new workflowModel(req.body);
  //   title : req.body.title,
  //   bizType : req.body.bizType,
  //   nodes : req.body.nodes,
  //   lines : req.body.lines
  // });
  workflow.save(function(err){
    if(err) {
      return res.status(400);
    } else {
      res.json({success: true});
    }

  })
});
app.post('/api/updateWorkflow', function (req, res) {
  workflowModel.update({_id:req.body._id},
    {$set:
    {
      title:req.body.title,
      bizType:req.body.bizType,
      nodes:req.body.nodes,
      lines:req.body.lines
    }},function (err) {
      if(err) {
        return res.status(400);
      } else {
        res.json({success:true});
      }
    })
})
app.get('/api/scenarioList', function (req, res) {
  workflowModel.find().exec(function(err, results) {
    res.json({data:results});
  })
})
app.get('/api/scenario', function (req, res) {
  workflowModel.findById(req.query.query,function (err, result) {
    res.json(result._doc);
  })
})
 app.listen(port, function () {
  console.log('listening to port '+port);
})
app.get('/api/remove', function (req, res) {
  workflowModel.remove({_id:req.query.query}, function (err) {
    if(err) {
      return res.status(400);
    } else {
      res.json({success:true});
    }
  })
})
