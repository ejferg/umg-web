// Set up application
var {Application} = require("stick")
	, appController = require('./controllers');

// Core server stick configurations
var app = exports.app = Application();

app.configure("notfound", "error", "static", "session", "params", "mount");
app.static(module.resolve("public"));

appController.init(app);

// Script to run app from command line
if (require.main === module) {
	require("ringo/httpserver").main(module.directory);
}