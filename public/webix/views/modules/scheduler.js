define("views/modules/scheduler", ["views/webix/scheduler", "models/events"], function(e, t) {
    var i = function() {
        scheduler.parse(t.data, "json")
    };
    return {
        $ui: {
            minWidth: 500,
            gravity: 2,
            rows: [{
                type: "wide",
                cols: [{
                    width: 240,
                    rows: [{
                        view: "calendar",
                        on: {
                            onDateSelect: function(e) {
                                scheduler.updateView(e, "week")
                            }
                        }
                    }, {
                        view: "form",
                        rows: [{
                            view: "list",
                            id: "calendarList",
                            borderless: !0,
                            css: "calendar_list",
                            autoheight: !0,
                            template: "<div><span class='calendar_icon #id#'></span>#name#</div>",
                            data: [{
                                id: "my",
                                name: "My Calendar",
                                active: !0
                            }, {
                                id: "company",
                                name: "Webix Project",
                                active: !0
                            }],
                            on: {
                                onItemClick: function(e) {
                                    var t = this.getItem(e);
                                    t.active = !t.active, t.$css = t.active ? "" : "disabled", this.refresh(e), scheduler.updateView()
                                }
                            }
                        }, {
                            view: "button",
                            label: "Add new calendar",
                            align: "left"
                        }, {}]
                    }]
                }, {
                    view: "dhx-scheduler",
                    date: new Date,
                    mode: "month",
                    tabs: ["day", "week", "month"],
                    init: function() {
                        scheduler.config.xml_date = "%Y-%m-%d %H:%i", scheduler.config.first_hour = 7, scheduler.config.last_hour = 24, scheduler.config.multi_day = !0, scheduler.templates.event_class = function(e, t, i) {
                            return i.calendar ? "other" : ""
                        };
                        var e = scheduler.date.date_to_str,
                            t = e("%d"),
                            i = e("%d %M %y");
                        scheduler.filter_day = scheduler.filter_week = scheduler.filter_month = function(e, t) {
                            var i = t.calendar;
                            return i ? $$("calendarList").getItem(i).active : $$("calendarList").getItem("my").active
                        }, scheduler.templates.week_scale_date = e("%D, %W/%j"), scheduler.templates.week_date = function(e, a) {
                            return t(e) + " &ndash; " + i(scheduler.date.add(a, -1, "day"))
                        }
                    },
                    ready: function() {
                        i && (i(), i = null)
                    }
                }]
            }]
        }
    }
})