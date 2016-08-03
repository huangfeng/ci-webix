define(["models/data_arrays"], function(e) {
    var t = {
        view: "toolbar",
        css: "highlighted_header header2",
        paddingX: 5,
        paddingY: 5,
        height: 40,
        cols: [{
            template: "<span class='webix_icon fa-arrows-v'></span>Spans",
            css: "sub_title2",
            borderless: !0
        }, {
            view: "icon",
            icon: "refresh",
            width: 40
        }]
    }, i = {
        view: "datatable",
        columns: [{
            id: "region",
            header: "Region",
            fillspace: 1
        }, {
            id: "name",
            header: "Product",
            fillspace: 2
        }, {
            id: "code",
            header: "Code",
            fillspace: 1,
            tooltip: "",
            editor: "text"
        }, {
            id: "sales",
            header: "Sales",
            fillspace: 1
        }],
        spans: !0,
        autoheight: !0,
        select: "cell",
        data: e.colspans
    }, a = {
        type: "clean",
        rows: [t, i]
    };
    return {
        $ui: a
    }
})