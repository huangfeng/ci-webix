define([
	"libs/webix-jet/core",
	"helpers/menu",
	"helpers/locale",
	"helpers/theme"
], function(core,menu,local,theme){

	//configuration
	var app = core.create({
		id:			"XY-Golden", //change this line!
		name:		"信研黄金",
		version:	"0.1.0",
		debug:		true,
		start:		"/app/dashboard"
	});

	return app.use(menu),app.use(local),app.use(theme),app;
});