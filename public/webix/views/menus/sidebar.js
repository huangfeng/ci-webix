define("views/menus/sidebar", [], function() {
    return {
        $ui: {
            width: 200,
            rows: [{
                view: "tree",
                id: "app:menu",
                type: "menuTree2",
                css: "menu",
                activeTitle: !0,
                select: !0,
                tooltip: {
                    template: function(e) {
                        return e.$count ? "" : e.details
                    }
                },
                on: {
                    onBeforeSelect: function(e) {
                        return this.getItem(e).$count ? !1 : void 0
                    },
                    onAfterSelect: function(e) {
                        this.$scope.show("./" + e);
                        var t = this.getItem(e);
                        webix.$$("title").parse({
                            title: t.value,
                            details: t.details
                        })
                    }
                },
                data: [{
                    id: "main",
                    value: "Main",
                    open: !0,
                    data: [{
                        id: "dashboard",
                        value: "Dashboard",
                        icon: "home",
                        $css: "dashboard",
                        details: "reports and statistics"
                    }, {
                        id: "orders",
                        value: "Orders",
                        icon: "check-square-o",
                        $css: "orders",
                        details: "order reports and editing"
                    }, {
                        id: "products",
                        value: "Products",
                        icon: "cube",
                        $css: "products",
                        details: "all products"
                    }, {
                        id: "product_edit",
                        value: "Product Edit",
                        icon: "pencil-square-o",
                        details: "changing product data"
                    }]
                }, {
                    id: "components",
                    open: !0,
                    value: "Components",
                    data: [{
                        id: "datatables",
                        value: "Datatables",
                        icon: "table",
                        details: "datatable examples"
                    }, {
                        id: "charts",
                        value: "Charts",
                        icon: "bar-chart-o",
                        details: "charts examples"
                    }, {
                        id: "forms",
                        value: "Forms",
                        icon: "list-alt",
                        details: "forms examples"
                    }]
                }, {
                    id: "uis",
                    value: "UI Examples",
                    open: 1,
                    data: [{
                        id: "calendar",
                        value: "My Calendar",
                        icon: "calendar",
                        details: "calendar example"
                    }, {
                        id: "files",
                        value: "File Manager",
                        icon: "folder-open-o",
                        details: "file manager example"
                    }]
                }]
            }]
        }
    }
})