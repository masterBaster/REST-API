let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser')


let app = express();

mongoose.connect('mongodb://localhost/drivergo');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use('/api', require('./routes/api'));

app.listen(process.env.port || 4000, function(){
    console.log(`you are litening to port 4000`);
});