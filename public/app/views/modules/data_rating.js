define("views/modules/data_rating", ["models/data_arrays"], function(e) {
    var t = {
        view: "toolbar",
        css: "highlighted_header header1",
        paddingX: 5,
        paddingY: 5,
        height: 40,
        cols: [{
            template: "<span class='webix_icon fa-star-o'></span>Rating",
            css: "sub_title2",
            borderless: !0
        }, {
            view: "button",
            type: "iconButton",
            icon: "refresh",
            width: 100,
            label: "Refresh"
        }]
    }, i = {
        view: "datatable",
        columns: [{
            id: "id",
            header: "",
            sort: "int",
            width: 35
        }, {
            id: "name",
            header: "Procut",
            fillspace: 4,
            sort: "string"
        }, {
            id: "code",
            header: "Code",
            sort: "string",
            fillspace: 2
        }, {
            id: "rating",
            header: "Rating",
            sort: "int",
            fillspace: 2,
            minWidth: 80,
            template: function(e) {
                for (var t = "<div class='rating_bar_element star" + e.rating + "'>", i = 1; 6 > i; i++) t += "<div title='" + i + "' class='rating_star star" + i + "' style='left:" + (16 * i - 16) + "px'></div>";
                return t + "</div>"
            }
        }],
        onClick: {
            rating_star: function(e, t) {
                this.getItem(t.row)[t.column] = (e.target || e.srcElement).getAttribute("title"), this.updateItem(t.row)
            }
        },
        autoheight: !0,
        scheme: {
            $init: function(e) {
                e.index = this.count()
            }
        },
        data: e.rating
    }, a = {
        type: "clean",
        rows: [t, i]
    };
    return {
        $ui: a
    }
})