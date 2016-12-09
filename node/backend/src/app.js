const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('../config.js')
const querystring = require('querystring');

const log = function(args) {
    console.log(args);
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let server = app.listen(config.port, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log(`App is listening at http://${host}:${port}`);
});

app.get('/nytalk', function(req, res){
    let host = req.headers.host
    log(`nytalk url: ${req.url}`);
    let redirectUrl = `${host}/nytalkcallback`;
    let params = {
        client_id : config.clientid,
        response_type : 'code',
        scope : 'email',
        state : 'STATE',
        redirect_uri : redirectUrl
    }
    let authUrl = `${config.authPath}?${querystring.stringify(params)}`;
    res.redirect(authUrl);
});

app.get('/nytalkcallback', function(req, res) {
    log(`nytalkcallback url: ${req.url}`);
    res.send('welcome to nytalk');
});