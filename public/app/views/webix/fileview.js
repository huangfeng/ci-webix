define( function() {});

webix.type(webix.ui.dataview, {
    name: "fileView",
    css: "files",
    height: 80,
    width: 150,
    template: function(e) {
        var t = e.icon || "folder-o";
        return "<div class='" + (e.type || "folder") + "'><span class='webix_icon fa-" + t + "'></span></div>" + e.value
    }
})