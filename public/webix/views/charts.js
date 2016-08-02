define("views/charts", ["views/modules/dashline", "views/modules/visitors", "views/modules/orders", "views/modules/chart_diff", "views/modules/revenue", "views/modules/taskschart", "views/modules/diffchart"], function(e, t, i, a, n, r, o) {
    var s = {
        type: "clean",
        rows: [{
            type: "space",
            rows: [{
                type: "wide",
                minHeight: 250,
                cols: [{
                    gravity: 4,
                    type: "clean",
                    rows: [{
                        template: "<span class='webix_icon fa-area-chart'></span>Different charts in one",
                        css: "sub_title",
                        height: 30
                    },
                        a
                    ]
                },
                    o
                ]
            }, {
                type: "wide",
                cols: [{
                    type: "clean",
                    rows: [{
                        template: "<span class='webix_icon fa-line-chart'></span>Sales",
                        css: "sub_title",
                        height: 30
                    },
                        n
                    ]
                }, {
                    type: "clean",
                    rows: [{
                        template: "<span class='webix_icon fa-tasks'></span>Tasks",
                        css: "sub_title",
                        height: 30
                    },
                        r, {
                            template: " "
                        }
                    ]
                }]
            }, {
                height: 220,
                type: "wide",
                cols: [i, t]
            }]
        }]
    };
    return {
        $ui: s
    }
})