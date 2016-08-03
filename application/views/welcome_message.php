<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>信研黄金-线下交易平台</title>
	<!-- Webix Library -->
	<link type="text/css" rel="stylesheet" href="public/app/libs/webix/codebase/webix.css">
	<script type="text/javascript" src="public/app/libs/webix/codebase/webix.js"></script>

	<script type="text/javascript" src="public/app/components/sidebar/sidebar.js"></script>
	<link rel="stylesheet" type="text/css" href="public/app/components/sidebar/sidebar.css">

	<script type="text/javascript">
		var Worker = {};
		var BASE_URL = '<?php echo base_url();?>';
var menu_data = [
		{id: "dashboard", icon: "dashboard", value: "Dashboards",  data:[
			{ id: "dashboard1", value: "Dashboard 1"},
			{ id: "dashboard2", value: "Dashboard 2"}
		]},
		{id: "layouts", icon: "columns", value:"Layouts", data:[
			{ id: "accrodions", value: "Accordions"},
			{ id: "portlets", value: "Portlets"}
		]},
		{id: "tables", icon: "table", value:"Data Tables", data:[
			{ id: "tables1", value: "Datatable"},
			{ id: "tables2", value: "TreeTable"},
			{ id: "tables3", value: "Pivot"}
		]},
		{id: "uis", icon: "puzzle-piece", value:"UI Components", data:[
			{ id: "dataview", value: "DataView"},
			{ id: "list", value: "List"},
			{ id: "menu", value: "Menu"},
			{ id: "tree", value: "Tree"}
		]},
		{id: "tools", icon: "calendar-o", value:"Tools", data:[
			{ id: "kanban", value: "Kanban Board"},
			{ id: "pivot", value: "Pivot Chart"},
			{ id: "scheduler", value: "Calendar"}
		]},
		{id: "forms", icon: "pencil-square-o", value:"Forms",  data:[
			{ id: "buttons", value: "Buttons"},
			{ id: "selects", value: "Select boxes"},
			{ id: "inputs", value: "Inputs"}
		]},
		{id: "demo", icon: "book", value:"Documentation"}
	];
	webix.ready(function(){
		webix.ui({
			rows: [
				{   view: "toolbar", padding:3, elements: [
					{
						view: "button", type: "icon", icon: "bars",
						width: 37, align: "left", css: "app_button", click: function(){
							$$("$sidebar1").toggle()
						}
					},
					{ 
						view: "label", 
						label: "<a href='"+BASE_URL+"'><img class='photo' src='public/images/logo.png' /></a>"
					},
					{},
					{ view: "button", type: "icon", width: 45, css: "app_button", icon: "envelope-o",  badge:4},
					{ view: "button", type: "icon", width: 45, css: "app_button", icon: "bell-o",  badge:10}
				]
				},
				{
					cols:[
						{
							view: "sidebar",
							data: menu_data,
							on:{
								onAfterSelect: function(id){
									webix.message("Selected: "+this.getItem(id).value)
								}
							}
						},
						{
							template: ""
						}
					]
				}
			]
		});
});
	</script>
	<style>
		.app_button button{
			padding:0;
			text-align: center;
		}

	</style>
</head>
<body></body>
</html>


