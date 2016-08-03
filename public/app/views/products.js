define("views/products", ["views/modules/editor", "views/modules/topsales", "models/products"], function(e, t, i) {
    var a = {
        id: "productsData",
        view: "datatable",
        select: !0,
        editable: !0,
        editaction: "dblclick",
        columns: [{
            id: "id",
            header: "#",
            width: 50
        }, {
            id: "code",
            header: ["Code", {
                content: "textFilter"
            }],
            sort: "string",
            minWidth: 80,
            fillspace: 1
        }, {
            id: "name",
            header: ["Name", {
                content: "textFilter"
            }],
            sort: "string",
            minWidth: 120,
            fillspace: 2,
            editor: "text"
        }, {
            id: "categoryName",
            header: ["Category", {
                content: "selectFilter"
            }],
            sort: "string",
            minWidth: 120,
            fillspace: 2,
            editor: "select",
            template: "<div class='category#category#'>#categoryName#</div>"
        }, {
            id: "price",
            header: ["Price"],
            sort: "int",
            minWidth: 80,
            fillspace: 1,
            format: webix.i18n.priceFormat
        }, {
            id: "quantity",
            header: ["Quantity"],
            sort: "int",
            minWidth: 60,
            fillspace: 1
        }, {
            id: "statusName",
            header: ["Status"],
            minWidth: 75,
            sort: "string",
            minWidth: 70,
            fillspace: 1,
            template: "<span class='status status#status#'>#statusName#</span>"
        }, {
            id: "edit",
            header: "&nbsp;",
            width: 35,
            template: "<span  style=' cursor:pointer;' class='webix_icon fa-pencil'></span>"
        }, {
            id: "delete",
            header: "&nbsp;",
            width: 35,
            template: "<span  style='cursor:pointer;' class='webix_icon fa-trash-o'></span>"
        }],
        pager: "pagerA",
        "export": !0,
        data: i.getAll,
        onClick: {
            "fa-trash-o": function(e, t) {
                webix.confirm({
                    text: "The product will be deleted. <br/> Are you sure?",
                    ok: "Yes",
                    cancel: "Cancel",
                    callback: function(e) {
                        if (e) {
                            var i = webix.$$("productsData").getItem(t);
                            i.status = "0", i.statusName = "Deleted", webix.$$("productsData").refresh(t)
                        }
                    }
                })
            }
        },
        ready: function() {
            webix.extend(this, webix.ProgressBar)
        }
    }, n = {
        type: "space",
        rows: [{
            height: 40,
            cols: [{
                view: "button",
                type: "iconButton",
                icon: "file-excel-o",
                width: 150,
                label: "Export To Excel",
                click: function() {
                    $$("productsData").exportToExcel()
                }
            }, {
                view: "button",
                type: "iconButton",
                icon: "refresh",
                width: 100,
                label: "Refresh",
                click: function() {
                    var e = $$("productsData");
                    e.clearAll(), e.showProgress(), webix.delay(function() {
                        e.parse(i.getAll), e.hideProgress()
                    }, null, null, 300)
                }
            }, {}, {
                view: "richselect",
                id: "order_filter",
                value: "all",
                maxWidth: 300,
                minWidth: 250,
                vertical: !0,
                labelWidth: 110,
                options: [{
                    id: "all",
                    value: "All"
                }, {
                    id: "1",
                    value: "Published"
                }, {
                    id: "2",
                    value: "Not published"
                }, {
                    id: "0",
                    value: "Deleted"
                }],
                label: "Filter products",
                on: {
                    onChange: function() {
                        var e = this.getValue();
                        "all" == e ? $$("productsData").filter("#status#", "") : $$("productsData").filter("#status#", e)
                    }
                }
            }]
        }, {
            rows: [a, {
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
        $ui: n
    }
})