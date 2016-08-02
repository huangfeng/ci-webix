define("views/modules/data_progress", ["models/data_arrays"], function(e) {
    var t = {
        view: "toolbar",
        css: "highlighted_header header4",
        paddingX: 5,
        paddingY: 5,
        height: 40,
        cols: [{
            template: "<span class='webix_icon fa-adjust'></span>Progress",
            css: "sub_title2",
            borderless: !0
        }, {
            view: "button",
            type: "iconButton",
            icon: "sliders",
            label: "Update",
            width: 100
        }]
    }, i = {
        view: "datatable",
        columns: [{
            id: "id",
            header: "",
            width: 35,
            sort: "int"
        }, {
            id: "name",
            header: "Task",
            fillspace: 4,
            sort: "string"
        }, {
            id: "progress",
            header: "Progress",
            sort: "int",
            fillspace: 2.5,
            template: function(e) {
                var t = "<div class='progress_bar_element'>",
                    i = "progress_result " + (e.type || "");
                return t += "<div title='" + (parseInt(100 * e.progress, 10) + "%") + "' class='" + i + "' style='width:" + (100 * e.progress + "%") + "'></div>", t + "</div>"
            }
        }, {
            id: "num",
            header: "Num, %",
            sort: function(e, t) {
                return e = e.progress, t = t.progress, e > t ? 1 : t > e ? -1 : 0
            },
            fillspace: 1.5,
            template: function(e) {
                return parseInt(100 * e.progress, 10) + "%"
            }
        }],
        autoheight: !0,
        data: e.progress
    }, a = {
        type: "clean",
        rows: [t, i]
    };
    return {
        $ui: a
    }
})