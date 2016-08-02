define("models/data_arrays", [], function() {
    var e = [{
            id: 1,
            code: "NWTB-1",
            name: "Webix Chai",
            rating: 5,
            rank: 1
        }, {
            id: 2,
            code: "NWTCO-3",
            name: "Webix Syrup",
            rating: 1,
            rank: 2
        }, {
            id: 3,
            code: "NWTCO-4",
            name: "Webix Cajun Seasoning",
            rating: 2,
            rank: 3
        }, {
            id: 4,
            code: "NWTO-5",
            name: "Webix Olive Oil",
            rating: 3,
            rank: 4
        }, {
            id: 5,
            code: "NWTJP-6",
            name: "Webix Boysenberry Spread",
            rating: 1,
            rank: 5
        }],
        t = [{
            id: 1,
            name: "USA",
            open: 1,
            data: [{
                id: 11,
                code: "NWTB-1",
                name: "Webix Chai",
                sales: 2e5
            }, {
                id: 12,
                code: "NWTCO-3",
                name: "Webix Syrup",
                sales: 18e4
            }, {
                id: 13,
                code: "NWTCO-4",
                name: "Webix Cajun Seasoning",
                sales: 15e4
            }]
        }, {
            id: 2,
            name: "Europe",
            data: [{
                id: 21,
                code: "NWTB-1",
                name: "Webix Chai",
                sales: 23e4
            }, {
                id: 22,
                code: "NWTCO-3",
                name: "Webix Syrup",
                sales: 21e4
            }, {
                id: 23,
                code: "NWTO-5",
                name: "Webix Olive Oil",
                sales: 18e4
            }]
        }, {
            id: 3,
            name: "Asia",
            open: 1,
            data: [{
                id: 31,
                code: "NWTCO-4",
                name: "Webix Cajun Seasoning",
                sales: 31e4
            }, {
                id: 32,
                code: "NWTO-5",
                name: "Webix Olive Oil",
                sales: 25e4
            }, {
                id: 33,
                code: "NWTJP-6",
                name: "Webix Boysenberry Spread",
                sales: 21e4
            }]
        }],
        i = {
            data: [{
                id: 11,
                code: "NWTB-1",
                name: "Webix Chai",
                sales: 2e5,
                region: "USA"
            }, {
                id: 12,
                code: "NWTCO-3",
                name: "Webix Syrup",
                sales: 18e4,
                region: "USA"
            }, {
                id: 13,
                code: "NWTCO-4",
                name: "Webix Cajun Seasoning",
                sales: 15e4,
                region: "USA"
            }, {
                id: "sub1",
                $css: "highlight_row",
                region: "Top Sales",
                sales: 2e5
            }, {
                id: 21,
                code: "NWTB-1",
                name: "Webix Chai",
                sales: 23e4,
                region: "Europe"
            }, {
                id: 22,
                code: "NWTO-5",
                name: "Webix Olive Oil",
                sales: 18e4,
                region: "Europe"
            }, {
                id: "sub2",
                $css: "highlight_row",
                region: "Top Sales",
                sales: 23e4
            }],
            spans: [
                [11, "region", 1, 3],
                [21, "region", 1, 3],
                ["sub1", "region", 3, 1, null, "highlight_row"],
                ["sub2", "region", 3, 1, "", "highlight_row"]
            ]
        }, a = [{
            id: "1",
            name: "Prepare finance report",
            progress: .55,
            type: "inner"
        }, {
            id: "2",
            name: "Solex project strategy  meeting",
            progress: .2
        }, {
            id: "3",
            name: "WestEurope partners call",
            progress: .7
        }, {
            id: "4",
            name: "Market research analysis",
            progress: .3,
            type: "inner"
        }, {
            id: "5",
            name: "Prepare presentation",
            progress: .6,
            type: "company"
        }];
    return {
        rating: e,
        treetable: t,
        progress: a,
        colspans: i
    }
})