var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.get('/header', function (req, res) {
    
    var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
     
     var lang = req.headers["accept-language"].split(',')[0];
     
     var soft = req.headers['user-agent'].split(') ')[0].split(' (')[1];
    
    
  
      res.json(
        {
        ipaddress: ip, 
        language: lang,
        software: soft
        }
        
        )
  
  
  
  
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
