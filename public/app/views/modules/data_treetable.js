define(["models/data_arrays"], function(e) {
    var t = {
        view: "toolbar",
        css: "highlighted_header header3",
        paddingX: 5,
        paddingY: 5,
        height: 40,
        cols: [{
            template: "<span class='webix_icon fa-folder-o'></span>Treetable",
            css: "sub_title2",
            borderless: !0
        }, {
            view: "button",
            type: "iconButton",
            icon: "external-link",
            label: "Export",
            width: 100
        }]
    }, i = {
        view: "treetable",
        columns: [{
            id: "id",
            header: "",
            width: 35
        }, {
            id: "name",
            header: "Product",
            fillspace: 4,
            template: "{common.treetable()} #name#"
        }, {
            id: "code",
            header: "Code",
            sort: "int",
            fillspace: 2
        }, {
            id: "sales",
            header: "Sales",
            sort: "int",
            fillspace: 2
        }],
        select: !0,
        data: e.treetable,
        type: {
            icon: function(e) {
                return e.$count ? e.open ? "<span class='webix_icon fa-angle-down'></span>" : "<div class='webix_icon fa-angle-right'></div>" : "<div class='webix_tree_none'></div>"
            },
            folder: function(e) {
                return e.$count ? e.open ? "<span class='webix_icon fa-folder-open-o'></span>" : "<span class='webix_icon fa-folder-o'></span>" : "<div class='webix_icon fa-file-o'></div>"
            }
        },
        onClick: {
            "fa-angle-down": function(e, t) {
                this.close(t)
            },
            "fa-angle-right": function(e, t) {
                this.open(t)
            }
        },
        on: {
            onAfterLoad: function() {
                this.select(12)
            }
        }
    }, a = {
        type: "clean",
        rows: [t, i]
    };
    return {
        $ui: a
    }
})