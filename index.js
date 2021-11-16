const express = require('express');
const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: false}));
app.use('/api/users', require('./routes/api/users-controller'));

// Set 'port' value to either an environment value PORT or 3000
app.set('port', process.env.PORT || 3000);


// app.listen(3000, () => console.log("server started"));

app.listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
    console.log("You application is running. You should be able to connect to it on http://localhost:" + app.get('port') + '/api/users');
});