define( function() {})

webix.protoUI({name: "icon",
    $skin: function() {
        this.defaults.height = webix.skin.$active.inputHeight
    },
    defaults: {
        template: function(e) {
            var t = "<button style='height:100%;width:100%;line-height:" + e.aheight + "px' class='webix_icon_button'>";
            return t += "<span class='webix_icon fa-" + e.icon + "'></span>", e.value && (t += "<span class='webix_icon_count'>" + e.value + "</span>"), t += "</button>"
        },
        width: 33
    },
    _set_inner_size: function() {}
}, webix.ui.button)