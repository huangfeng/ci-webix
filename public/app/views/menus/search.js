define([], function() {
    return {
        $ui: {
            view: "popup",
            id: "searchPopup",
            width: 300,
            body: {
                rows: [{
                    view: "search"
                }, {
                    borderless: !0,
                    css: "extended_search",
                    template: "<span>Extended search</span>",
                    height: 40
                }]
            }
        }
    }
})