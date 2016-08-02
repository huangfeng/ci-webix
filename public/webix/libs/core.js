define("libs/core", ["libs/routie"], function() {
    function e(e, a) {
        if (-1 == a) return s(this, e);
        if (this._subs[e]) return s(this._subs[e], a);
        var n = t(this),
            o = this.index;
        if ("string" == typeof e) {
            var o = o;
            0 === e.indexOf("./") && (o++, e = e.substr(2));
            var l = r(e);
            n.path = n.path.slice(0, o).concat(l)
        } else webix.extend(n.path[o].params, e, !0);
        n.show(i(n.path), -1)
    }

    function t(e) {
        for (; e;) {
            if (e.app) return e;
            e = e.parent
        }
        return b
    }

    function i(e) {
        for (var t = [], i = b.config.layout ? 1 : 0; i < e.length; i++) {
            t.push("/" + e[i].page);
            var n = a(e[i].params);
            n && t.push(":" + n)
        }
        return t.join("")
    }

    function a(e) {
        var t = [];
        for (var i in e) t.length && t.push(":"), t.push(i + "=" + e[i]);
        return t.join("")
    }

    function n(t, i, a) {
        if (d(w, t, i, a, this) !== !1) {
            if (i.page != this.name) {
                this.name = i.page, this.ui = u, this.on = c, this.show = e, this.module = t, h.call(this), this._init = [], this._destroy = [], this._subs = {}, this.$layout = !1;
                var r = o(t, null, this);
                r.$scope = this, f.call(this, r), this.$layout && (this.$layout = {
                    root: (this._ui.$$ || webix.$$)(this.name + ":subview"),
                    sub: n,
                    parent: this,
                    index: this.index + 1
                })
            }
            return d(v, t, i, a, this), t.$onurlchange && t.$onurlchange.call(t, i.params, a, this) === !1 ? void 0 : this.$layout
        }
    }

    function r(e) {
        var t = e.split("/");
        t[0] || (b.config.layout ? t[0] = b.config.layout : t.shift());
        for (var i = 0; i < t.length; i++) {
            var a = t[i],
                n = [],
                r = a.indexOf(":");
            if (-1 !== r) {
                var o = a.substr(r + 1).split(":"),
                    s = -1 !== o[0].indexOf("=");
                if (s) {
                    n = {};
                    for (var l = 0; l < o.length; l++) {
                        var d = o[l].split("=");
                        n[d[0]] = d[1]
                    }
                } else n = o
            }
            t[i] = {
                page: r > -1 ? a.substr(0, r) : a,
                params: n
            }
        }
        return t
    }

    function o(e, t, i) {
        if (e.$oninit && i._init.push(e.$oninit), e.$ondestroy && i._destroy.push(e.$ondestroy), e.$subview)
            if ("string" == typeof e.$subview) {
                {
                    var a = i.name + ":subview:" + e.$subview;
                    i._subs[e.$subview] = {
                        parent: this,
                        root: a,
                        sub: n,
                        index: 0,
                        app: !0
                    }
                }
                e.id = a
            } else e = {
                id: i.name + ":subview"
            }, i.$layout = !0;
        if (e.$ui && (e = e.$ui), e.$init) return e;
        t = t || (webix.isArray(e) ? [] : {});
        for (var r in e) t[r] = e[r] && "object" == typeof e[r] && !webix.isDate(e[r]) ? o(e[r], webix.isArray(e[r]) ? [] : {}, i) : e[r];
        return t
    }

    function s(e, t) {
        e.root && (e.root = webix.$$(e.root));
        var i = r(t);
        e.path = [].concat(i), l(e, i)
    }

    function l(e, t) {
        var i = t[0];
        if (i) {
            var a = i.page,
                n = 0 === a.indexOf(".");
            if (n && (a = (e.fullname || "") + a), a = a.replace(/\./g, "/"), d(y, a, i, t, e) === !1) return;
            require(["views/" + a], function(a) {
                t.shift();
                var r = e.sub(a, i, t);
                r ? (r.fullname = (n ? e.fullname || "" : "") + i.page, l(r, t)) : (webix.ui.$freeze = !1, webix.ui.resize())
            })
        } else webix.ui.$freeze = !1, webix.ui.resize()
    }

    function d(e, t, i, a, n) {
        for (var r = 0; r < e.length; r++)
            if (e[r](t, i, a, n) === !1) return !1;
        return !0
    }

    function c(e, t, i) {
        var a = e.attachEvent(t, i);
        return this._handlers.push({
            obj: e,
            id: a
        }), a
    }

    function u(e, t) {
        var i, a = {
            _init: [],
            _destroy: []
        }, n = o(e, null, a);
        return n.$scope = this, n.id && (i = $$(n.id)), i || (i = webix.ui(n, t), this._uis.push(i), p(a._init, i, this)), i
    }

    function p(e, t, i) {
        if (e)
            for (var a = 0; a < e.length; a++) e[a](t, i)
    }

    function h() {
        if (this._ui) {
            this.$layout && h.call(this.$layout);
            for (var e = this._handlers, t = e.length - 1; t >= 0; t--) e[t].obj.detachEvent(e[t].id);
            this._handlers = [];
            for (var i = this._uis, t = i.length - 1; t >= 0; t--) i[t] && i[t].destructor && i[t].destructor();
            this._uis = [], p(this._destroy, this._ui, this), !this.parent && this._ui && this._ui.destructor()
        }
    }

    function m(e) {
        delete webix.ui.views[e.config.id], e.config.id = "";
        for (var t = e.getChildViews(), i = t.length - 1; i >= 0; i--) m(t[i])
    }

    function f(e) {
        this._uis = [], this._handlers = [], this.root && this.root.config && m(this.root), this._ui = webix.ui(e, this.root), this.parent && (this.root = this._ui), p(this._init, this._ui, this)
    }

    function g(e) {
        if (b.debug && console.log(e.stack), !e.requireModules) throw e;
        b.debug && webix.message({
            type: "error",
            expire: 5e3,
            text: "Can't load " + e.requireModules.join(", ")
        }), b.show(b.config.start)
    }
    var v = [],
        w = [],
        y = [],
        b = {
            create: function(e) {
                b.config = webix.extend({
                    name: "App",
                    version: "1.0",
                    container: document.body,
                    start: "/home"
                }, e, !0), b.debug = e.debug, b.$layout = {
                    sub: n,
                    root: b.config.container,
                    index: 0,
                    add: !0
                }, webix.extend(b, webix.EventSystem), setTimeout(function() {
                    webix.ready(function() {
                        b.start()
                    })
                }, 1);
                var t = b.config.container;
                return webix.html.addCss(t, "webixappstart"), setTimeout(function() {
                    webix.html.removeCss(t, "webixappstart"), webix.html.addCss(t, "webixapp")
                }, 10), b
            },
            ui: u,
            router: function(e) {
                var t = r(e);
                b.path = [].concat(t), l(b.$layout, t)
            },
            show: function(e, t) {
                routie.navigate("!" + e, t)
            },
            start: function() {
                routie("!*", b.router), window.location.hash ? (webix.ui.$freeze = !1, webix.ui.resize()) : b.show(b.config.start)
            },
            use: function(e, t) {
                e.$oninit && e.$oninit(this, t || {}), e.$onurlchange && w.push(e.$onurlchange), e.$onurl && y.push(e.$onurl), e.$onui && v.push(e.$onui)
            },
            trigger: function(e) {
                b.apply(e, [].splice.call(arguments, 1))
            },
            apply: function(e, t) {
                b.callEvent(e, t)
            },
            action: function(e) {
                return function() {
                    b.apply(e, arguments)
                }
            },
            on: function(e, t) {
                this.attachEvent(e, t)
            },
            _uis: [],
            _handlers: []
        };
    return requirejs.onError = g, b
})