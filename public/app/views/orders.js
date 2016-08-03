define(["views/forms/order", "views/menus/export", "models/orders"], function(e, t, i) {
    var a = [{
            view: "button",
            type: "iconButton",
            icon: "plus",
            label: "Add order",
            width: 130,
            click: function() {
                this.$scope.ui(e.$ui).show()
            }
        }, {
            view: "button",
            type: "iconButton",
            icon: "external-link",
            label: "Export",
            width: 120,
            popup: t
        }, {}, {
            view: "richselect",
            id: "order_filter",
            value: "all",
            maxWidth: 400,
            minWidth: 250,
            vertical: !0,
            labelWidth: 100,
            options: [{
                id: "all",
                value: "All"
            }, {
                id: "new",
                value: "Need Invoicing"
            }, {
                id: "ready",
                value: "Ready to Ship"
            }, {
                id: "completed",
                value: "Completed"
            }, {
                id: "cancelled",
                value: "Cancelled"
            }],
            label: "Filter orders",
            on: {
                onChange: function() {
                    var e = this.getValue();
                    "all" == e ? $$("orderData").filter("#status#", "") : $$("orderData").filter("#status#", e)
                }
            }
        }],
        n = {
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
                pager: "pagerA",
                data: i.getAll,
                onClick: {
                    webix_icon: function(e, t) {
                        webix.confirm({
                            text: "The order will be deleted.<br/> Are you sure?",
                            ok: "Yes",
                            cancel: "Cancel",
                            callback: function(e) {
                                e && webix.$$("orderData").remove(t)
                            }
                        })
                    }
                }
            }]
        }, r = {
            type: "space",
            rows: [{
                height: 40,
                cols: a
            }, {
                rows: [n, {
                    view: "toolbar",
                    css: "highlighted_header header6",
                    paddingX: 5,
                    paddingY: 5,
                    height: 40,
                    cols: [{
                        view: "pager",
                        id: "pagerA",
                        template: "{common.first()}{common.prev()}&nbsp; {common.pages()}&nbsp; {common.next()}{common.last()}",
                        autosize: !0,
                        height: 35,
                        group: 5
                    }]
                }]
            }]
        };
    return {
        $ui: r
    }
})