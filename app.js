const express = require("express");
const app = express();

app.set( 'view engine', 'pug'); // set engine
app.set( 'views', 'views'); // set views
const shopRoutes = require("./routes/shop.js");

const bodyParser = require("body-parser");
const path = require("path");
const http = require("http");

app.use( bodyParser.urlencoded({extended: false})); // middleware for body
app.use( express.static( path.join(__dirname, 'public')));
app.use( shopRoutes);

// app.use( ( req, res, next ) => {
app.get('*', function(req, res){
    // res.status(404).send("<h2> Request not found </h2>")
    //;
    res.render('notFound',
        {
            from: ' '
        });
})

let port = 3009;
const server = http.createServer(app);
server.listen( port );
console.log( `Listening on http://localhost:${port}`);
