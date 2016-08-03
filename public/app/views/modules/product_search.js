define(["models/products"], function(e) {
    return {
        $ui: {
            rows: [{
                view: "form",
                paddingX: 5,
                paddingY: 5,
                margin: 2,
                rows: [{
                    view: "label",
                    label: "Find product:"
                }, {
                    view: "search"
                }]
            }, {
                view: "list",
                id: "list",
                select: !0,
                template: "<div class='marker status#status#'></div>#code# / #name#",
                data: e.getAll
            }]
        }
    }
})