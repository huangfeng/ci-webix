define("views/webix/menutree", function() {});

webix.type(webix.ui.tree, {
    name: "menuTree",
    height: 40,
    icon: function() {
        var e = "";
        return e
    },
    folder: function(e) {
        return e.icon ? "<span class='webix_icon icon fa-" + e.icon + "'></span>" : ""
    }
});

webix.type(webix.ui.tree, {
    name: "menuTree2",
    height: 40,
    icon: function(e) {
        for (var t = "", i = "", a = 1; a <= e.$level; a++)
            if (a == e.$level && e.$count) {
                var n = e.open ? "down" : "right";
                t += "<span class='" + i + " webix_icon fa-angle-" + n + "'></span>"
            }
        return t
    },
    folder: function(e) {
        return e.icon ? "<span class='webix_icon icon fa-" + e.icon + "'></span>" : ""
    }
});