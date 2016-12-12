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
    if (!req.query.code) {
        let host = req.headers.host;
        log(`nytalk url: ${req.url}`);
        log(`nytalk host: ${host}`);
        let redirectUrl = `http://${host}/nytalk`;
        let params = {
            response_type : 'code',
            redirect_uri : redirectUrl,
            scope : 'email',
            state : 'haha',
            client_id : config.clientid
        }
        let authUrl = `${config.authPath}?${querystring.stringify(params)}`;
        log(`redirect url ${redirectUrl}`)
        res.redirect(authUrl);
    } else {
        res.send('welcome to nytalk');    
    } 

});