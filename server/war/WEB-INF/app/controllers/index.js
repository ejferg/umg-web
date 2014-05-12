var {Application} = require("stick");

exports.init = function(parent) {

	parent.mount("/", require("./web"));
};