define("views/files", ["models/files", "views/modules/edittree", "views/webix/fileview"], function(e, t) {
    var i = {
        type: "space",
        rows: [{
            view: "form",
            paddingX: 5,
            paddingY: 5,
            cols: [{
                view: "button",
                type: "icon",
                icon: "folder-o",
                label: "New folder",
                width: 120,
                click: function() {
                    $$("fileTree").add({
                        value: "New folder"
                    }, 0, $$("fileTree").getSelectedId())
                }
            }, {
                view: "button",
                type: "icon",
                icon: "pencil-square-o",
                label: "Rename",
                width: 100,
                click: function() {
                    $$("fileTree").edit($$("fileTree").getSelectedId())
                }
            }, {
                view: "button",
                type: "icon",
                icon: "refresh",
                label: "Refresh",
                width: 100
            }, {
                view: "button",
                type: "icon",
                icon: "times",
                label: "Delete",
                width: 95
            }, {}, {
                view: "button",
                type: "icon",
                icon: "plus",
                label: "Upload",
                width: 100,
                click: function() {
                    $$("fileUploadAPI").fileDialog({})
                }
            }]
        }, {
            type: "wide",
            cols: [{
                width: 330,
                rows: [t, {
                    view: "form",
                    css: "highlighted_header header6",
                    paddingX: 5,
                    paddingY: 5,
                    height: 40,
                    elements: [{
                        view: "text",
                        label: "Path:",
                        labelAlign: "right",
                        labelWidth: 60,
                        id: "path"
                    }]
                }]
            }, {
                view: "resizer"
            }, {
                view: "dataview",
                edit: !0,
                select: !0,
                id: "filesView",
                type: "fileView",
                drag: !0,
                onDblClick: {
                    webix_dataview_item: function(e, t) {
                        $$("fileTree").exists(t) && $$("fileTree").select(t)
                    }
                }
            }]
        }]
    };
    return {
        $ui: i,
        $oninit: function() {
            $$("filesView").parse(e.files), $$("fileTree").select("files"), webix.ui({
                id: "fileUploadAPI",
                view: "uploader",
                upload: "server/upload.php",
                on: {
                    onFileUploadError: function() {
                        webix.alert("Error during file upload")
                    }
                },
                apiOnly: !0
            }), $$("filesView").attachEvent("onDestruct", function() {
                $$("fileUploadAPI").destructor()
            })
        }
    }
})