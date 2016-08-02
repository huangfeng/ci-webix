define("views/menus/export", [], function() {
    return {
        $ui: {
            view: "submenu",
            id: "exportPopup",
            width: 200,
            padding: 0,
            data: [{
                id: 1,
                icon: "file-excel-o",
                value: "Export To Excel"
            }, {
                id: 2,
                icon: "file-pdf-o",
                value: "Export To PDF"
            }],
            on: {
                onItemClick: function(e) {
                    1 == e ? $$("orderData").exportToExcel() : 2 == e && $$("orderData").exportToPDF()
                }
            }
        }
    }
})