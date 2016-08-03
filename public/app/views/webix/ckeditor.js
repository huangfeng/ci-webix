define(function() {});

webix.protoUI({name: "ckeditor",
    $init: function() {
        this.$view.className += " webix_selectable"
    },
    defaults: {
        borderless: !0,
        toolbar: [
            ["Bold", "Italic", "-", "NumberedList", "BulletedList", "-", "Link", "Unlink"],
            ["FontSize", "TextColor", "BGColor"]
        ]
    },
    _init_ckeditor_once: function() {
        var e = this.config.textAreaID = "t" + webix.uid();
        this.$view.innerHTML = "<textarea id='" + e + "'>" + this.config.value + "</textarea>", window.CKEDITOR_BASEPATH = webix.codebase + "ckeditor/";
        var t = {
            toolbar: this.config.toolbar,
            width: this.$width - 2,
            height: this.$height - 44
        };
        webix.extend(t, this.config.editor || {}), webix.require("ckeditor/ckeditor.js", function() {
            this._3rd_editor = CKEDITOR.replace(this.config.textAreaID, t)
        }, this)
    },
    _set_inner_size: function(e, t) {
        this._3rd_editor && this._3rd_editor.container && this.$width && this._3rd_editor.resize(e, t)
    },
    $setSize: function(e, t) {
        webix.ui.view.prototype.$setSize.call(this, e, t) && (this._init_ckeditor_once(), this._set_inner_size(e, t))
    },
    setValue: function(e) {
        this.config.value = e, this._3rd_editor ? this._3rd_editor.setData(e) : webix.delay(function() {
            this.setValue(e)
        }, this, [], 100)
    },
    getValue: function() {
        return this._3rd_editor ? this._3rd_editor.getData() : this.config.value
    },
    focus: function() {
        this._focus_await = !0, this._3rd_editor && this._3rd_editor.focus()
    },
    getEditor: function() {
        return this._3rd_editor.getData()
    }
}, webix.ui.view)