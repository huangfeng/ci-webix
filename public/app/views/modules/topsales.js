define(["models/topsales"], function(e) {
    var t = {
        view: "chart",
        borderless: !0,
        type: "bar",
        height: 130,
        id: "productsBar",
        barWidth: 60,
        radius: 0,
        alpha: .9,
        color: function(e) {
            var t = "#a693eb";
            return 2 == e.productId ? t = "#63b4ea" : 3 == e.productId ? t = "#f19b60" : 4 == e.productId && (t = "#49cd81"), t
        },
        yAxis: {
            template: function(e) {
                return parseInt(e, 10)
            }
        },
        xAxis: {
            template: "#name#"
        },
        on: {
            onAfterLoad: function() {
                $$("topSelling").setValue("month")
            }
        },
        padding: {
            top: 0,
            left: 50,
            right: 10,
            bottom: 20
        },
        data: e.getAll
    }, i = {
        type: "form",
        cols: [{
            view: "radio",
            id: "topSelling",
            label: "",
            labelWidth: 0,
            vertical: !0,
            on: {
                onChange: function() {
                    $$("productsBar").filter(function(e) {
                        return e.selection == $$("topSelling").getValue()
                    })
                }
            },
            options: [{
                id: "month",
                value: "Last month"
            }, {
                id: "month3",
                value: "Last 3 months"
            }]
        }]
    }, a = {
        rows: [{
            view: "toolbar",
            paddingX: 5,
            paddingY: 5,
            height: 40,
            css: "highlighted_header header3",
            elements: [{
                template: "<span class='webix_icon fa-bar-chart'></span>Top selling products",
                borderless: !0,
                css: "sub_title2"
            }]
        },
            i, t
        ]
    };
    return {
        $ui: a
    }
})