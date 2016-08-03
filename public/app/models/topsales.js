define("models/topsales", [], function() {
    var e = [{
        productId: 1,
        value: 15e3,
        selection: "month",
        name: "Chai"
    }, {
        productId: 1,
        value: 35e3,
        selection: "month3",
        name: "Chocolate"
    }, {
        productId: 1,
        value: 13e4,
        selection: "year",
        name: "Chai"
    }, {
        productId: 2,
        value: 2e4,
        selection: "month",
        name: "Olive Oil"
    }, {
        productId: 2,
        value: 5e4,
        selection: "month3",
        name: "Olive Oil"
    }, {
        productId: 2,
        value: 14e4,
        selection: "year",
        name: "Olive Oil"
    }, {
        productId: 3,
        value: 17e3,
        selection: "month",
        name: "Coffee"
    }, {
        productId: 3,
        value: 4e4,
        selection: "month3",
        name: "Coffee"
    }, {
        productId: 3,
        value: 12e4,
        selection: "year",
        name: "Coffee"
    }, {
        productId: 4,
        value: 9e3,
        selection: "month",
        name: "Syrup"
    }, {
        productId: 4,
        value: 45e3,
        selection: "month3",
        name: "Marmalade"
    }, {
        productId: 4,
        value: 100500,
        selection: "year",
        name: "Syrup"
    }];
    return {
        getAll: e
    }
})