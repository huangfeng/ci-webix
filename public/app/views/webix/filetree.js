define( function() {});

webix.type(webix.ui.tree, {
    name: "fileTree",
    css: "file",
    height: 40,
    templateCommon: webix.template("{common.icon()} <div class='folder_title'>{common.folder()} #value#</div>"),
    folder: function(e) {
        return "<span class='webix_icon icon fa-folder" + (e.open ? "-open" : e.$level > 3 ? "-o" : "") + "'></span>"
    }
})