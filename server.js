var express = require('express'); // Require express

// Formats the request body from POST, PUT, PATCH and puts them on the 'req.body' property.
var bodyParser = require('body-parser');
// CORS allows for cross-origin requests, making our API available
// across multiple HTTP origins/hosts.

var cors = require('cors');

var app = express();   // Create an instance of express function


app.use(bodyParser());
app.use(cors());

app.use(express.static(__dirname + '/build'));
app.use(express.static(__dirname + '/public'));

// API routes go here

app.listen(8000); // Pass in a Port

//