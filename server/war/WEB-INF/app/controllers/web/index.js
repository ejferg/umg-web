var {Application} = require("stick");

export('app');

var app = new Application();
app.configure("route", "render", "params");

app.render.base = module.resolve("../../views");
app.render.master = "layout.html";

exports.render = app.render;

app.get("/", function(req){

	var context = {title: "Ullisen Media Group"};
	return app.render("index.html", context);
});

