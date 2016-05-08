var express = require('express');
var router = express.Router();

var sensors = [{
  "type" : "thermometer",
  "id" : "thermometer1",
  "switch" : "off"
},
{
  "type" : "thermometer",
  "id" : "thermometer2",
  "switch" : "on"
}];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('api/sensors', function(req,res,next){
  res.writeHead(200, {"Content-Type" : "application/json"});
  res.end(JSON.stringify(sensors));
});

router.get('/api/sensors/:id', function(req,res){
  try{
    var id = req.params.id;
    console.log('ID: %d', id);
    var sensorObj = sensors[id];
    if(sensorObj === null){
      throw new Error('404');
    }
    res.writeHead(200, {"Content-Type" : "application/json"});
    res.end(JSON.stringify(sensors[id]));
  }catch(err){
    res.sendStatus(err.message);
  }
});

router.post('/api/sensors/:id', function(req,res){
  res.send('Got a POST request');
});

router.put('/api/sensors/:id', function(req,res){
  res.send('Got a PUT request at /api/sensors/:id');
});

router.post('/api/sensors/:id', function(req,res){
  res.send('Got a DELETE request at /api/sensors/:id');
});
module.exports = router;
