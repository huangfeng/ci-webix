define(["views/modules/form_user", "views/modules/form_project", "views/modules/form_event", "views/modules/form_style"], function(e, t, i, a) {
    var n = {
        type: "space",
        cols: [{
            type: "wide",
            rows: [e, i]
        }, {
            type: "wide",
            rows: [a, t]
        }]
    };
    return {
        $ui: n
    }
})