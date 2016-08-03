define("views/webix/scheduler", function() {});

webix.protoUI({name: "dhx-scheduler",
    defaults: {
        tabs: ["day", "week", "month"]
    },
    getScheduler: function() {
        return this._scheduler
    },
    $init: function() {
        this.$ready.push(function() {
            var e = this.config.tabs,
                t = ["<div class='dhx_cal_container' style='width:100%; height:100%;'><div class='dhx_cal_navline'><div class='dhx_cal_prev_button'>&nbsp;</div><div class='dhx_cal_next_button'>&nbsp;</div><div class='dhx_cal_today_button'></div><div class='dhx_cal_date'></div>"];
            if (e)
                for (var i = 0; i < e.length; i++) t.push("<div class='dhx_cal_tab" + (0 === i ? " dhx_cal_tab_first" : "") + (i == e.length - 1 ? " dhx_cal_tab_last" : "") + "' name='" + e[i] + "_tab' ></div>");
            t.push("</div><div class='dhx_cal_header'></div><div class='dhx_cal_data'></div></div>"), this.$view.innerHTML = t.join(""), webix.delay(webix.bind(this._render_once, this))
        })
    },
    _render_once: function() {
        webix.require("scheduler/dhtmlxscheduler.css"), webix.require(["scheduler/dhtmlxscheduler.js"], function() {
            var e = this._scheduler = window.Scheduler ? Scheduler.getSchedulerInstance() : window.scheduler;
            this.config.init && this.config.init.call(this), e.init(this.$view.firstChild, this.config.date || new Date, this.config.mode || "week"), this.config.ready && this.config.ready.call(this)
        }, this)
    }
}, webix.ui.view)