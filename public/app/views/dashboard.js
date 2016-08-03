define("views/dashboard", ["views/modules/dashline", "views/modules/visitors", "views/modules/orders", "views/modules/messages", "views/modules/revenue", "views/modules/tasks"], function(e, t, i, a, n, r) {
    var s = {
        type: "clean",
        rows: [e, {
            type: "space",
            rows: [{
                height: 220,
                type: "wide",
                cols: [t, i]
            }, {
                type: "wide",
                cols: [a, n]
            }, {
                type: "wide",
                cols: [r]
            }]
        }]
    };
    return {
        $ui: s
    }
})