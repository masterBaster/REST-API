let express = require('express');
let app = express();
let routes = require('./routes/api');

app.use('/api', routes);

app.listen(process.env.port || 4000, function(){
    console.log(`you are litening to port 4000`);
});