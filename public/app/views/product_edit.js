define( ["views/modules/product_search", "views/modules/editor", "views/modules/product_upload", "views/modules/product_meta"], function(e, t, i, a) {
    var n = {
        type: "space",
        rows: [{
            type: "wide",
            cols: [e, {
                gravity: 2.2,
                rows: [{
                    view: "tabbar",
                    multiview: !0,
                    optionWidth: 130,
                    options: [{
                        id: "mainView",
                        value: "Main"
                    }, {
                        id: "imagesView",
                        value: "Images"
                    }, {
                        id: "metaView",
                        value: "Meta"
                    }]
                }, {
                    cells: [t, i, a]
                }, {
                    view: "form",
                    css: "highlighted_header header6",
                    paddingX: 5,
                    paddingY: 5,
                    height: 40,
                    cols: [{
                        view: "button",
                        type: "form",
                        icon: "plus",
                        label: "Save",
                        width: 90
                    }, {
                        view: "button",
                        css: "button2",
                        icon: "angle-left",
                        label: "Reset",
                        width: 90
                    }, {}, {
                        view: "button",
                        css: "button0",
                        icon: "times",
                        label: "Delete",
                        width: 90
                    }]
                }]
            }]
        }]
    };
    return {
        $ui: n,
        $oninit: function() {
            $$("mainView").bind($$("list"))
        }
    }
})