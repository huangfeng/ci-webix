define("views/datatables", ["views/modules/data_rating", "views/modules/data_treetable", "views/modules/data_progress", "views/modules/data_spans", "views/modules/data_pager"], function(e, t, i, a, n) {
    var r = {
        type: "space",
        rows: [{
            type: "wide",
            cols: [{
                type: "wide",
                rows: [e, t]
            }, {
                type: "wide",
                gravity: .8,
                rows: [i, a]
            }]
        },
            n
        ]
    };
    return {
        $ui: r
    }
})