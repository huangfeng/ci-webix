define([], function() {
    for (var e = 150, t = [], i = 201, a = 0; e > a; a++) {
        var n = Math.floor(4 * Math.random()),
            r = Math.floor(1001 * Math.random()) + 499,
            o = Math.floor(397 * Math.random()) + 3,
            s = Math.floor(9 * Math.random()),
            l = r > 1100 ? 1 : r > 800 ? 2 : 3;
        t.push({
            id: a + 1,
            code: "WBX" + i,
            name: "Test product " + (a + 1),
            category: l,
            categoryName: 1 == l ? "Wood furniture" : 2 == l ? "Home furniture" : "Office furniture",
            price: r,
            statusName: n > 1 ? "Published" : 1 == n ? "Not published" : "Deleted",
            status: n > 1 ? "1" : 1 == n ? "2" : "0",
            quantity: o,
            in_stock: s > 1
        }), i++
    }
    return {
        getAll: t
    }
})