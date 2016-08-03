define([], function() {
    var e = {
        rows: [{
            template: "<span class='webix_icon fa-tasks'></span>Pending Tasks",
            type: "header",
            css: "sub_title",
            height: 50
        }, {
            view: "list",
            css: "tasks_list",
            autoheight: !0,
            type: {
                marker: function(e) {
                    return "<span class='webix_icon_btn fa-bell-o marker " + e.type + "' style='max-width:32px;' ></span>"
                },
                check: webix.template('<span class="webix_icon_btn fa-{obj.$check?check-:}square-o list_icon" style="max-width:32px;"></span>'),
                template: function(e, t) {
                    return "<div class='" + (e.$check ? "done" : "") + "'>" + t.check(e, t) + "<span class='list_text'>" + e.text + "</span><span class='marker " + e.type + "'>" + (e.type || "") + "</span></div>"
                }
            },
            data: [{
                id: "1",
                text: "Prepare finance report"
            }, {
                id: "2",
                text: "Solex project strategy  meeting",
                type: "projects"
            }, {
                id: "3",
                text: "WestEurope partners call"
            }, {
                id: "4",
                text: "Prepare presentation for summer conference",
                type: "company"
            }, {
                id: "5",
                text: "Market research analysis"
            }, {
                id: "6",
                text: "Check messages"
            }, {
                id: "7",
                text: "Discussing new theme for website",
                type: "company"
            }],
            on: {
                onItemClick: function(e) {
                    var t = this.getItem(e);
                    t.$check = !t.$check, this.refresh(e)
                }
            }
        }, {
            css: "show_all bg",
            template: "Show all tasks <span class='webix_icon fa-angle-double-right'></span>",
            height: 40
        }]
    };
    return {
        $ui: e
    }
})