define(["models/orders"], function(e) {
    var t = {
        view: "toolbar",
        css: "highlighted_header header5",
        paddingX: 5,
        paddingY: 5,
        height: 40,
        cols: [{
            template: "<span class='webix_icon fa-file-text-o'></span>Pager",
            css: "sub_title2",
            borderless: !0
        }, {
            view: "button",
            type: "iconButton",
            icon: "external-link",
            label: "Export",
            width: 100
        }, {
            view: "button",
            type: "iconButton",
            icon: "pencil-square-o",
            label: "Edit",
            width: 80
        }]
    }, i = {
        margin: 10,
        rows: [{
            id: "orderData",
            view: "datatable",
            select: !0,
            columns: [{
                id: "id",
                header: "#",
                width: 50
            }, {
                id: "employee",
                header: ["Employee", {
                    content: "selectFilter"
                }],
                sort: "string",
                minWidth: 150,
                fillspace: 1
            }, {
                id: "customer",
                header: ["Customer", {
                    content: "selectFilter"
                }],
                sort: "string",
                minWidth: 150,
                fillspace: 1
            }, {
                id: "status",
                header: "Status",
                sort: "string",
                width: 90
            }, {
                id: "fee",
                header: "Fee",
                width: 90,
                sort: "string",
                format: webix.i18n.priceFormat
            }, {
                id: "taxes",
                header: "Taxes",
                width: 90,
                sort: "string",
                format: webix.i18n.priceFormat
            }, {
                id: "total",
                header: "Total",
                width: 90,
                sort: "string",
                format: webix.i18n.priceFormat
            }, {
                id: "shipping_company",
                header: "Shipping Company",
                sort: "string"
            }, {
                id: "payment_method",
                header: "Payment method",
                width: 130,
                sort: "string"
            }, {
                id: "date",
                header: "Date",
                sort: "string",
                width: 100
            }, {
                id: "trash",
                header: "&nbsp;",
                width: 35,
                template: "<span  style='color:#777777; cursor:pointer;' class='webix_icon fa-trash-o'></span>"
            }],
            "export": !0,
            on: {
                onAfterLoad: function() {
                    this.select(4)
                }
            },
            onClick: {
                webix_icon: function(e, t) {
                    webix.confirm({
                        text: "Are you sure sdfds",
                        ok: "Yes",
                        cancel: "Cancel",
                        callback: function(e) {
                            e && webix.$$("orderData").remove(t)
                        }
                    })
                }
            },
            autoheight: !0,
            data: e.getAll,
            pager: "pagerA"
        }, {
            view: "pager",
            id: "pagerA",
            size: 5,
            height: 35,
            group: 5
        }]
    }, a = {
        type: "clean",
        rows: [t, i]
    };
    return {
        $ui: a
    }
})