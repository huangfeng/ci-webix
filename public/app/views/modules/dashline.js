define([], function() {
    return {
        $ui: {
            height: 136,
            css: "tiles",
            template: function(e) {
                for (var t = null, i = e.items, a = "<div class='flex_tmp'>", n = 0; n < i.length; n++) t = i[n], a += "<div class='item " + t.css + "'>", a += "<div class='webix_icon icon fa-" + t.icon + "'></div>", a += "<div class='details'><div class='value'>" + t.value + "</div><div class='text'>" + t.text + "</div></div>", a += "<div class='footer'>View more <span class='webix_icon fa-angle-double-right'></span></div>", a += "</div>";
                return a += "</div>"
            },
            data: {
                items: [{
                    id: 1,
                    text: "New Orders",
                    value: 250,
                    icon: "check-square-o",
                    css: "orders"
                }, {
                    id: 2,
                    text: "New Users",
                    value: 300,
                    icon: "user",
                    css: "users"
                }, {
                    id: 4,
                    text: "New Feedbacks",
                    value: 40,
                    icon: "quote-right",
                    css: "feedbacks"
                }, {
                    id: 3,
                    text: "Profit",
                    value: "+25%",
                    icon: "line-chart",
                    css: "profit"
                }]
            }
        }
    }
})