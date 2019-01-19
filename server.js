var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8080;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


require('./app/routing/apiRoutes')(app); 
require('./app/routing/htmlRoutes')(app);



app.listen(process.env.PORT || 8080, function(){
	console.log('App listening on PORT ' + PORT);
});