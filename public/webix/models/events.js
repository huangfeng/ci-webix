define("models/events", [], function() {
    var e = webix.Date.weekStart(new Date),
        t = webix.Date.monthStart(new Date),
        i = webix.Date.dayStart(new Date),
        a = webix.Date.add(webix.Date.copy(i), 1, "month", !0),
        n = (webix.Date.add(webix.Date.copy(t), -1, "month", !0), webix.Date.add(webix.Date.copy(t), 1, "month", !0)),
        r = webix.Date.add(webix.Date.copy(e), 1, "month", !0),
        o = webix.Date.add(webix.Date.copy(e), -1, "month", !0),
        s = [{
            id: 1,
            start_date: webix.Date.copy(e),
            end_date: webix.Date.add(webix.Date.copy(e), 3, "day", !0),
            text: "Conference",
            calendar: "company"
        }, {
            id: 2,
            start_date: webix.Date.copy(t),
            end_date: webix.Date.add(webix.Date.copy(t), 2, "day", !0),
            text: "Partners meeting",
            calendar: "company"
        }, {
            id: 3,
            start_date: webix.Date.add(webix.Date.copy(t), 15, "day", !0),
            end_date: webix.Date.add(webix.Date.copy(t), 17, "day", !0),
            text: "Webix project",
            calendar: "company"
        }, {
            id: 4,
            start_date: webix.Date.add(webix.Date.copy(t), 18, "day", !0),
            end_date: webix.Date.add(webix.Date.copy(t), 22, "day", !0),
            text: "Conference"
        }, {
            id: 5,
            start_date: webix.Date.add(i, 9, "hour", !0),
            end_date: webix.Date.add(i, 11, "hour", !0),
            text: "Meeting",
            calendar: "company"
        }, {
            id: 6,
            start_date: webix.Date.add(e, 18, "hour", !0),
            end_date: webix.Date.add(e, 23, "hour", !0),
            text: "Birthday party"
        }, {
            id: 7,
            start_date: webix.Date.add(webix.Date.copy(t), -2, "day", !0),
            end_date: webix.Date.add(webix.Date.copy(t), 3, "day", !0),
            text: "Football championship"
        }, {
            id: 8,
            start_date: webix.Date.add(o, 19, "hour", !0),
            end_date: webix.Date.add(o, 23, "hour", !0),
            text: "Birthday party"
        }, {
            id: 9,
            start_date: webix.Date.add(a, 9, "hour", !0),
            end_date: webix.Date.add(a, 11, "hour", !0),
            text: "Meeting",
            calendar: "company"
        }, {
            id: 10,
            start_date: webix.Date.add(r, 20, "hour", !0),
            end_date: webix.Date.add(r, 23, "hour", !0),
            text: "Birthday party"
        }, {
            id: 11,
            start_date: webix.Date.add(webix.Date.copy(n), 24, "day", !0),
            end_date: webix.Date.add(webix.Date.copy(n), 28, "day", !0),
            text: "Conference",
            calendar: "company"
        }, {
            id: 12,
            start_date: webix.Date.add(webix.Date.copy(t), 26, "day", !0),
            end_date: webix.Date.add(webix.Date.copy(t), 28, "day", !0),
            text: "Football championship"
        }];
    return {
        data: s
    }
})