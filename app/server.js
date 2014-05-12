var express = require('express');
var app = express();

app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');

    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());

    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function () {
    app.use(express.errorHandler({dumpExceptions: true, showStack: true }));
});

app.configure('production', function () {
    app.use(express.errorHandler());
});

app.all('/', function(req, res){

    var fb = req.query['fb'];
    console.log('fb: '+fb);
    res.render('index', { fb: fb });
});

app.listen(app.get('port'), function onListen(){
    console.log("Express server listening on port " + app.get('port'));
});