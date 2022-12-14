const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');  // include routes

const path = require('path');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', routesHandler);
// so server can parse through incoming json & limit amount per request
app.use(express.json({limit: '1mb'}));  

const PORT = process.env.PORT || 4000; // backend routing port

// if (process.env.NODE_ENV == "production") {
//     app.use(express.static('build'));
// }

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});