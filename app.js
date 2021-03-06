/*jshint node:true*/
//------------------------------------------------------------------------------
// My Simple Express Generated Project (Customized for Bluemix)
//------------------------------------------------------------------------------
// This application uses express as it's web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var routes = require('./routes');

// Database Config
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nbcu-hack');

var app = express();
// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Get Routes
app.get('/', routes.index);
app.get('/admin', routes.admin);
app.get('/admin/show/edit/:show_id', routes.editShow);
app.get('/admin/load-samples', routes.loadSampleData);
app.get('/admin/test-watson', routes.testWatson);
app.get('/user', routes.oneUser);
app.get('/show/delete/:show_id', routes.deleteShow);
app.get('/user/delete/:user_id', routes.deleteUser);

//Post Routes
app.post('/show/create', routes.createShow);
app.post('/show/edit/:show_id', routes.updateShow);
app.post('/user/create', routes.createUser);
app.post('/user/to-watch/:show_id', routes.addToWatch);
app.post('/user/have-watched/:show_id', routes.addHaveWatched);
app.post('/user/suggested/:show_id', routes.addSuggested); //probably not needed, might use for ingesting shows
app.post('/show/rate/:rating/:show_id', routes.rateShow);
app.post('/show', routes.findShow); //find show by name

//Remove this later
app.get('/tonetest', routes.tonetest);
app.get('/tweet',routes.twitter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

// start server on the specified port and binding host
app.listen(appEnv.port, appEnv.bind, function() {

    // print a message when the server starts listening
    console.log("server starting on " + appEnv.url);
});

module.exports = app;
