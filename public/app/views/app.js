define( ["views/menus/search", "views/menus/mail", "views/menus/message", "views/menus/profile", "views/menus/sidebar", "views/webix/icon", "views/webix/menutree"], function(e, t, i, a, n) {
    var r = {
        view: "toolbar",
        elements: [
        {
            view: "label",
            label: "<a href='"+BASE_URL+"'><img class='photo' src='public/images/logo.png' /></a>",
            width: 200
        }, 
        {
            height: 46,
            id: "person_template",
            css: "header_person",
            borderless: !0,
            width: 180,
            data: {
                id: 3,
                name: "Oliver Parr"
            },
            template: function(e) {
                var t = "<div style='height:100%;width:100%;' onclick='webix.$$(\"profilePopup\").show(this)'>";
                return t += "<img class='photo' src='public/images/photo/" + e.id + ".png' /><span class='name'>" + e.name + "</span>", t += "<span class='webix_icon fa-angle-down'></span></div>"
            }
        }, 
        {}, 
        {
            view: "icon",
            icon: "search",
            width: 45,
            popup: "searchPopup"
        }, 
        {
            view: "icon",
            icon: "envelope-o",
            value: 3,
            width: 45,
            popup: "mailPopup"
        }, 
        {
            view: "icon",
            icon: "comments-o",
            value: 5,
            width: 45,
            popup: "messagePopup"
        }]
    }, o = {
        rows: [{
            height: 49,
            id: "title",
            css: "title",
            template: "<div class='header'>#title#</div><div class='details'>( #details# )</div>",
            data: {
                text: "",
                title: ""
            }
        }, {
            view: "scrollview",
            scroll: "native-y",
            body: {
                cols: [{
                    $subview: !0
                }]
            }
        }]
    }, s = {
        rows: [r, {
            cols: [n, o]
        }]
    };
    return {
        $ui: s,
        $menu: "app:menu",
        $oninit: function(n, r) {
            r.ui(e.$ui), r.ui(t.$ui), r.ui(i.$ui), r.ui(a.$ui)
        }
    }
})