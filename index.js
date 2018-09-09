let express = require('express');

let app = express();

app.get('/api', function(req, res){
    console.log('GET request');
    res.send({uberTaxi: 'Mercedes'});
})

app.listen(process.env.port || 4000, function(){
    console.log(`you are litening to port 4000`);
} )