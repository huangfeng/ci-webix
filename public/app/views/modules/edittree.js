define("views/modules/edittree", ["models/files", "views/webix/editable", "views/webix/filetree"], function(e) {
    var t = {
        id: "fileTree",
        view: "edittree",
        editable: !0,
        editor: "text",
        editaction: "",
        editValue: "value",
        select: !0,
        drag: !0,
        data: e.folders,
        type: "fileTree",
        on: {
            onAfterSelect: function(e) {
                this.getItem(e).value;
                $$("filesView").filter("#pId#", e);
                for (var t = []; e;) t.push(this.getItem(e).value + "/"), e = this.getParentId(e);
                t.reverse(), $$("path").setValue(t.join(""))
            }
        }
    };
    return {
        $ui: t
    }
})