/**
 * Created by Administrator on 2016/8/2 0002.
 */
var requirejs, require, define;
! function(e) {
    function t(e, t) {
        return v.call(e, t)
    }

    function i(e, t) {
        var i, a, n, r, o, s, l, d, c, u, p, h = t && t.split("/"),
            m = f.map,
            g = m && m["*"] || {};
        if (e && "." === e.charAt(0))
            if (t) {
                for (h = h.slice(0, h.length - 1), e = e.split("/"), o = e.length - 1, f.nodeIdCompat && y.test(e[o]) && (e[o] = e[o].replace(y, "")), e = h.concat(e), c = 0; c < e.length; c += 1)
                    if (p = e[c], "." === p) e.splice(c, 1), c -= 1;
                    else if (".." === p) {
                        if (1 === c && (".." === e[2] || ".." === e[0])) break;
                        c > 0 && (e.splice(c - 1, 2), c -= 2)
                    }
                e = e.join("/")
            } else 0 === e.indexOf("./") && (e = e.substring(2));
        if ((h || g) && m) {
            for (i = e.split("/"), c = i.length; c > 0; c -= 1) {
                if (a = i.slice(0, c).join("/"), h)
                    for (u = h.length; u > 0; u -= 1)
                        if (n = m[h.slice(0, u).join("/")], n && (n = n[a])) {
                            r = n, s = c;
                            break
                        }
                if (r) break;
                !l && g && g[a] && (l = g[a], d = c)
            }!r && l && (r = l, s = d), r && (i.splice(0, s, r), e = i.join("/"))
        }
        return e
    }

    function a(t, i) {
        return function() {
            return c.apply(e, w.call(arguments, 0).concat([t, i]))
        }
    }

    function n(e) {
        return function(t) {
            return i(t, e)
        }
    }

    function r(e) {
        return function(t) {
            h[e] = t
        }
    }

    function o(i) {
        if (t(m, i)) {
            var a = m[i];
            delete m[i], g[i] = !0, d.apply(e, a)
        }
        if (!t(h, i) && !t(g, i)) throw new Error("No " + i);
        return h[i]
    }

    function s(e) {
        var t, i = e ? e.indexOf("!") : -1;
        return i > -1 && (t = e.substring(0, i), e = e.substring(i + 1, e.length)), [t, e]
    }

    function l(e) {
        return function() {
            return f && f.config && f.config[e] || {}
        }
    }
    var d, c, u, p, h = {}, m = {}, f = {}, g = {}, v = Object.prototype.hasOwnProperty,
        w = [].slice,
        y = /\.js$/;
    u = function(e, t) {
        var a, r = s(e),
            l = r[0];
        return e = r[1], l && (l = i(l, t), a = o(l)), l ? e = a && a.normalize ? a.normalize(e, n(t)) : i(e, t) : (e = i(e, t), r = s(e), l = r[0], e = r[1], l && (a = o(l))), {
            f: l ? l + "!" + e : e,
            n: e,
            pr: l,
            p: a
        }
    }, p = {
        require: function(e) {
            return a(e)
        },
        exports: function(e) {
            var t = h[e];
            return "undefined" != typeof t ? t : h[e] = {}
        },
        module: function(e) {
            return {
                id: e,
                uri: "",
                exports: h[e],
                config: l(e)
            }
        }
    }, d = function(i, n, s, l) {
        var d, c, f, v, w, y, b = [],
            x = typeof s;
        if (l = l || i, "undefined" === x || "function" === x) {
            for (n = !n.length && s.length ? ["require", "exports", "module"] : n, w = 0; w < n.length; w += 1)
                if (v = u(n[w], l), c = v.f, "require" === c) b[w] = p.require(i);
                else if ("exports" === c) b[w] = p.exports(i), y = !0;
                else if ("module" === c) d = b[w] = p.module(i);
                else if (t(h, c) || t(m, c) || t(g, c)) b[w] = o(c);
                else {
                    if (!v.p) throw new Error(i + " missing " + c);
                    v.p.load(v.n, a(l, !0), r(c), {}), b[w] = h[c]
                }
            f = s ? s.apply(h[i], b) : void 0, i && (d && d.exports !== e && d.exports !== h[i] ? h[i] = d.exports : f === e && y || (h[i] = f))
        } else i && (h[i] = s)
    }, requirejs = require = c = function(t, i, a, n, r) {
        if ("string" == typeof t) return p[t] ? p[t](i) : o(u(t, i).f);
        if (!t.splice) {
            if (f = t, f.deps && c(f.deps, f.callback), !i) return;
            i.splice ? (t = i, i = a, a = null) : t = e
        }
        return i = i || function() {}, "function" == typeof a && (a = n, n = r), n ? d(e, t, i, a) : setTimeout(function() {
            d(e, t, i, a)
        }, 4), c
    }, c.config = function(e) {
        return c(e)
    }, requirejs._defined = h, define = function(e, i, a) {
        i.splice || (a = i, i = []), t(h, e) || t(m, e) || (m[e] = [e, i, a])
    }, define.amd = {
        jQuery: !0
    }
}(), 

function(e) {
    var t = [],
        i = {}, a = "routie",
        n = e[a],
        r = function(e, t) {
            this.name = t, this.path = e, this.keys = [], this.fns = [], this.params = {}, this.regex = o(this.path, this.keys, !1, !1)
        };
    r.prototype.addHandler = function(e) {
        this.fns.push(e)
    }, r.prototype.removeHandler = function(e) {
        for (var t = 0, i = this.fns.length; i > t; t++) {
            var a = this.fns[t];
            if (e == a) return this.fns.splice(t, 1), void 0
        }
    }, r.prototype.run = function(e) {
        for (var t = 0, i = this.fns.length; i > t; t++) this.fns[t].apply(this, e)
    }, r.prototype.match = function(e, t) {
        var i = this.regex.exec(e);
        if (!i) return !1;
        for (var a = 1, n = i.length; n > a; ++a) {
            var r = this.keys[a - 1],
                o = "string" == typeof i[a] ? decodeURIComponent(i[a]) : i[a];
            r && (this.params[r.name] = o), t.push(o)
        }
        return !0
    }, r.prototype.toURL = function(e) {
        var t = this.path;
        for (var i in e) t = t.replace("/:" + i, "/" + e[i]);
        if (t = t.replace(/\/:.*\?/g, "/").replace(/\?/g, ""), -1 != t.indexOf(":")) throw Error("missing parameters for url: " + t);
        return t
    };
    var o = function(e, t, i, a) {
        return e instanceof RegExp ? e : (e instanceof Array && (e = "(" + e.join("|") + ")"), e = e.concat(a ? "" : "/?").replace(/\/\(/g, "(?:/").replace(/\+/g, "__plus__").replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?/g, function(e, i, a, n, r, o) {
            return t.push({
                name: n,
                optional: !! o
            }), i = i || "", "" + (o ? "" : i) + "(?:" + (o ? i : "") + (a || "") + (r || a && "([^/.]+?)" || "([^/]+?)") + ")" + (o || "")
        }).replace(/([\/.])/g, "\\$1").replace(/__plus__/g, "(.+)").replace(/\*/g, "(.*)"), RegExp("^" + e + "$", i ? "" : "i"))
    }, s = function(e, a) {
        var n = e.split(" "),
            o = 2 == n.length ? n[0] : null;
        e = 2 == n.length ? n[1] : n[0], i[e] || (i[e] = new r(e, o), t.push(i[e])), i[e].addHandler(a)
    }, l = function(e, t) {
        if ("function" == typeof t) s(e, t), l.reload();
        else if ("object" == typeof e) {
            for (var i in e) s(i, e[i]);
            l.reload()
        } else void 0 === t && l.navigate(e)
    };
    l.lookup = function(e, i) {
        for (var a = 0, n = t.length; n > a; a++) {
            var r = t[a];
            if (r.name == e) return r.toURL(i)
        }
    }, l.remove = function(e, t) {
        var a = i[e];
        a && a.removeHandler(t)
    }, l.removeAll = function() {
        i = {}, t = []
    }, l.navigate = function(e, t) {
        t = t || {};
        var i = t.silent || !1;
        i && h(), setTimeout(function() {
            window.location.hash = e, i && setTimeout(function() {
                p()
            }, 1)
        }, 1)
    }, l.noConflict = function() {
        return e[a] = n, l
    };
    var d = function() {
        return window.location.hash.substring(1)
    }, c = function(e, t) {
        var i = [];
        return t.match(e, i) ? (t.run(i), !0) : !1
    }, u = l.reload = function() {
        for (var e = d(), i = 0, a = t.length; a > i; i++) {
            var n = t[i];
            if (c(e, n)) return
        }
    }, p = function() {
        e.addEventListener ? e.addEventListener("hashchange", u, !1) : e.attachEvent("onhashchange", u)
    }, h = function() {
        e.removeEventListener ? e.removeEventListener("hashchange", u) : e.detachEvent("onhashchange", u)
    };
    p(), e[a] = l
}(window), 

define("libs/routie", function() {}), 

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
}),

define("helpers/menu", [], function() {
    function e(e, t) {
        var i = $$(e);
        i.setValue ? i.setValue(t) : i.select && i.exists(t) && i.select(t)
    }

    function t(e) {
        return e.parent ? e.parent.module.$menu || t(e.parent) : void 0
    }
    return {
        $onurlchange: function(i, a, n, r) {
            if (i.$menuid) {
                var o = i.$menuid.call ? i.$menuid.call(i, i, a, n) : i.$menuid,
                    s = t(r);
                s && o && e(s, o)
            }
        },
        $onui: function(t, i, a) {
            t.$menu && a.length && e(t.$menu, a[0].page)
        }
    }
}), 

! function(e) {
    function t(e) {
        e = e || {}, this.phrases = {}, this.extend(e.phrases || {}), this.currentLocale = e.locale || "en", this.allowMissing = !! e.allowMissing, this.warn = e.warn || l
    }

    function i(e) {
        var t, i, a, n = {};
        for (t in e)
            if (e.hasOwnProperty(t)) {
                i = e[t];
                for (a in i) n[i[a]] = t
            }
        return n
    }

    function a(e) {
        var t = /^\s+|\s+$/g;
        return e.replace(t, "")
    }

    function n(e, t, i) {
        var n, r, s;
        return null != i && e ? (r = e.split(c), s = r[o(t, i)] || r[0], n = a(s)) : n = e, n
    }

    function r(e) {
        var t = i(p);
        return t[e] || t.en
    }

    function o(e, t) {
        return u[r(e)](t)
    }

    function s(e, t) {
        for (var i in t) "_" !== i && t.hasOwnProperty(i) && (e = e.replace(new RegExp("%\\{" + i + "\\}", "g"), t[i]));
        return e
    }

    function l(t) {
        e.console && e.console.warn && e.console.warn("WARNING: " + t)
    }

    function d(e) {
        var t = {};
        for (var i in e) t[i] = e[i];
        return t
    }
    t.VERSION = "0.4.1", t.prototype.locale = function(e) {
        return e && (this.currentLocale = e), this.currentLocale
    }, t.prototype.extend = function(e, t) {
        var i;
        for (var a in e) e.hasOwnProperty(a) && (i = e[a], t && (a = t + "." + a), "object" == typeof i ? this.extend(i, a) : this.phrases[a] = i)
    }, t.prototype.clear = function() {
        this.phrases = {}
    }, t.prototype.replace = function(e) {
        this.clear(), this.extend(e)
    }, t.prototype.t = function(e, t) {
        var i;
        t = null == t ? {} : t, "number" == typeof t && (t = {
            smart_count: t
        });
        var a = this.phrases[e] || t._ || (this.allowMissing ? e : "");
        return "" === a ? (this.warn('Missing translation for key: "' + e + '"'), i = e) : (t = d(t), i = n(a, this.currentLocale, t.smart_count), i = s(i, t)), i
    };
    var c = "||||",
        u = {
            chinese: function() {
                return 0
            },
            german: function(e) {
                return 1 !== e ? 1 : 0
            },
            french: function(e) {
                return e > 1 ? 1 : 0
            },
            russian: function(e) {
                return e % 10 === 1 && e % 100 !== 11 ? 0 : e % 10 >= 2 && 4 >= e % 10 && (10 > e % 100 || e % 100 >= 20) ? 1 : 2
            },
            czech: function(e) {
                return 1 === e ? 0 : e >= 2 && 4 >= e ? 1 : 2
            },
            polish: function(e) {
                return 1 === e ? 0 : e % 10 >= 2 && 4 >= e % 10 && (10 > e % 100 || e % 100 >= 20) ? 1 : 2
            },
            icelandic: function(e) {
                return e % 10 !== 1 || e % 100 === 11 ? 1 : 0
            }
        }, p = {
            chinese: ["fa", "id", "ja", "ko", "lo", "ms", "th", "tr", "zh"],
            german: ["da", "de", "en", "es", "fi", "el", "he", "hu", "it", "nl", "no", "pt", "sv"],
            french: ["fr", "tl", "pt-br"],
            russian: ["hr", "ru", "be"],
            czech: ["cs"],
            polish: ["pl"],
            icelandic: ["is"]
        };
    "undefined" != typeof module && module.exports ? module.exports = t : e.Polyglot = t
}(this), 

define("libs/polyglot", function() {}), 
define("models/user", [], function() {
    function e(e, t) {
        if (!e) return session.logout().then(function() {
            a = null, document.location.reload()
        }), void 0;
        if (a && a != e) return document.location.reload(), void 0;
        a = e;
        var i = a.settings && "string" == typeof a.settings;
        a.settings = i ? JSON.parse(a.settings) : {}, webix.extend(a.settings, {
            language: "en",
            theme: "siberia:webix",
            notifications: 0
        }), require(["helpers/locale", "helpers/theme"], function(e, i) {
            t && (e.isNow(a.settings.language) && i.isNow(a.settings.theme) || document.location.reload()), e.setLang(a.settings.language, t), i.setTheme(a.settings.theme, t)
        })
    }

    function t() {
        return a
    }

    function i(e, t, i) {
        if (a) {
            var n = (a.id, a.settings);
            n[e] && t == n[e] || i && document.location.reload()
        }
    }
    webix.remote.$user = {
        id: 1
    };
    var a = webix.remote.$user || null;
    return a && e(a), {
        saveSetting: i,
        getCurrentUser: t,
        setCurrentUser: e
    }
}), 

define("helpers/locale", ["libs/polyglot", "models/user"], function(e, t) {
    function i() {
        return t.getCurrentUser() ? t.getCurrentUser().settings.language : webix.storage.local.get(o) || r
    }

    function a(e) {
        webix.storage.local.put(o, e), t.getCurrentUser() ? t.saveSetting("language", e, e != s) : document.location.reload()
    }

    function n(e) {
        s = e, define("locale", ["locales/" + e], function(t) {
            var i = new Polyglot({
                phrases: t
            });
            i.locale(e);
            var a = webix.bind(i.t, i);
            return a.template = function(e) {
                return e.replace(/%([a-zA-Z0-9.]+)%/g, function(e, t) {
                    return i.t(t)
                })
            }, a
        })
    }
    var r = "en",
        o = "--:app:lang",
        s = "";
    return {
        $oninit: function(e) {
            o = (e.config.id || "") + o;
            var t = i();
            n(t)
        },
        setLang: a,
        getLang: i,
        isNow: function(e) {
            return e == s
        }
    }
}), 

define("helpers/theme", ["models/user"], function(e) {
    function t() {
        return e.getCurrentUser() ? e.getCurrentUser().settings.theme : n
    }

    function i(t) {
        webix.storage.local.put(a, t), e.getCurrentUser() ? e.saveSetting("theme", t, t != n) : document.location.reload(), n = t
    }
    var a = "--:app:theme",
        n = webix.storage.local.get(a) || "siberia:webix";
    return {
        setTheme: i,
        getTheme: t,
        isNow: function(e) {
            return e == n
        }
    }
}), 

define("libs/rollbar", ["require", "exports", "module"], function(require, exports, module) {
    function _isUndefined(e) {
        return "undefined" == typeof e
    }

    function computeStackTraceWrapper(e) {
        function t(e) {
            if (!y) return "";
            try {
                var t = function() {
                    try {
                        return new window.XMLHttpRequest
                    } catch (e) {
                        return new window.ActiveXObject("Microsoft.XMLHTTP")
                    }
                }, i = t();
                return i.open("GET", e, !1), i.send(""), i.responseText
            } catch (a) {
                return ""
            }
        }

        function i(e) {
            if (!w.hasOwnProperty(e)) {
                var i = ""; - 1 !== e.indexOf(document.domain) && (i = t(e)), w[e] = i ? i.split("\n") : []
            }
            return w[e]
        }

        function a(e, t) {
            var a, n = /function ([^(]*)\(([^)]*)\)/,
                r = /['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,
                o = "",
                s = 10,
                l = i(e);
            if (!l.length) return UNKNOWN_FUNCTION;
            for (var d = 0; s > d; ++d)
                if (o = l[t - d] + o, !_isUndefined(o)) {
                    if (a = r.exec(o)) return a[1];
                    if (a = n.exec(o)) return a[1]
                }
            return UNKNOWN_FUNCTION
        }

        function n(e, t) {
            var a = i(e);
            if (!a.length) return null;
            var n = [],
                r = Math.floor(b / 2),
                o = r + b % 2,
                s = Math.max(0, t - r - 1),
                l = Math.min(a.length, t + o - 1);
            t -= 1;
            for (var d = s; l > d; ++d) _isUndefined(a[d]) || n.push(a[d]);
            return n.length > 0 ? n : null
        }

        function r(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g, "\\$&")
        }

        function o(e) {
            return r(e).replace("<", "(?:<|&lt;)").replace(">", "(?:>|&gt;)").replace("&", "(?:&|&amp;)").replace('"', '(?:"|&quot;)').replace(/\s+/g, "\\s+")
        }

        function s(e, t) {
            for (var a, n, r = 0, o = t.length; o > r; ++r)
                if ((a = i(t[r])).length && (a = a.join("\n"), n = e.exec(a))) return {
                    url: t[r],
                    line: a.substring(0, n.index).split("\n").length,
                    column: n.index - a.lastIndexOf("\n", n.index) - 1
                };
            return null
        }

        function l(e, t, a) {
            var n, o = i(t),
                s = new RegExp("\\b" + r(e) + "\\b");
            return a -= 1, o && o.length > a && (n = s.exec(o[a])) ? n.index : null
        }

        function d(e) {
            for (var t, i, a, n, l = [window.location.href], d = document.getElementsByTagName("script"), c = "" + e, u = /^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/, p = /^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/, h = 0; h < d.length; ++h) {
                var m = d[h];
                m.src && l.push(m.src)
            }
            if (a = u.exec(c)) {
                var f = a[1] ? "\\s+" + a[1] : "",
                    g = a[2].split(",").join("\\s*,\\s*");
                t = r(a[3]).replace(/;$/, ";?"), i = new RegExp("function" + f + "\\s*\\(\\s*" + g + "\\s*\\)\\s*{\\s*" + t + "\\s*}")
            } else i = new RegExp(r(c).replace(/\s+/g, "\\s+")); if (n = s(i, l)) return n;
            if (a = p.exec(c)) {
                var v = a[1];
                if (t = o(a[2]), i = new RegExp("on" + v + "=[\\'\"]\\s*" + t + "\\s*[\\'\"]", "i"), n = s(i, l[0])) return n;
                if (i = new RegExp(t), n = s(i, l)) return n
            }
            return null
        }

        function c(e) {
            if (!e.stack) return null;
            for (var t, i, r = /^\s*at (?:((?:\[object object\])?\S+(?: \[as \S+\])?) )?\(?((?:file|http|https):.*?):(\d+)(?::(\d+))?\)?\s*$/i, o = /^\s*(\S*)(?:\((.*?)\))?@((?:file|http|https).*?):(\d+)(?::(\d+))?\s*$/i, s = e.stack.split("\n"), d = [], c = /^(.*) is undefined$/.exec(e.message), u = 0, p = s.length; p > u; ++u) {
                if (t = o.exec(s[u])) i = {
                    url: t[3],
                    func: t[1] || UNKNOWN_FUNCTION,
                    args: t[2] ? t[2].split(",") : "",
                    line: +t[4],
                    column: t[5] ? +t[5] : null
                };
                else {
                    if (!(t = r.exec(s[u]))) continue;
                    i = {
                        url: t[2],
                        func: t[1] || UNKNOWN_FUNCTION,
                        line: +t[3],
                        column: t[4] ? +t[4] : null
                    }
                }!i.func && i.line && (i.func = a(i.url, i.line)), i.line && (i.context = n(i.url, i.line)), d.push(i)
            }
            return d[0] && d[0].line && !d[0].column && c && (d[0].column = l(c[1], d[0].url, d[0].line)), d.length ? {
                mode: "stack",
                name: e.name,
                message: e.message,
                url: document.location.href,
                stack: d,
                useragent: navigator.userAgent
            } : null
        }

        function u(e) {
            for (var t, i = e.stacktrace, r = / line (\d+), column (\d+) in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\) in (.*):\s*$/i, o = i.split("\n"), s = [], l = 0, d = o.length; d > l; l += 2)
                if (t = r.exec(o[l])) {
                    var c = {
                        line: +t[1],
                        column: +t[2],
                        func: t[3] || t[4],
                        args: t[5] ? t[5].split(",") : [],
                        url: t[6]
                    };
                    if (!c.func && c.line && (c.func = a(c.url, c.line)), c.line) try {
                        c.context = n(c.url, c.line)
                    } catch (u) {}
                    c.context || (c.context = [o[l + 1]]), s.push(c)
                }
            return s.length ? {
                mode: "stacktrace",
                name: e.name,
                message: e.message,
                url: document.location.href,
                stack: s,
                useragent: navigator.userAgent
            } : null
        }

        function p(e) {
            var t = e.message.split("\n");
            if (t.length < 4) return null;
            var r, l, d, c, u = /^\s*Line (\d+) of linked script ((?:file|http|https)\S+)(?:: in function (\S+))?\s*$/i,
                p = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|http|https)\S+)(?:: in function (\S+))?\s*$/i,
                h = /^\s*Line (\d+) of function script\s*$/i,
                m = [],
                f = document.getElementsByTagName("script"),
                g = [];
            for (l in f) f.hasOwnProperty(l) && !f[l].src && g.push(f[l]);
            for (l = 2, d = t.length; d > l; l += 2) {
                var v = null;
                if (r = u.exec(t[l])) v = {
                    url: r[2],
                    func: r[3],
                    line: +r[1]
                };
                else if (r = p.exec(t[l])) {
                    v = {
                        url: r[3],
                        func: r[4]
                    };
                    var w = +r[1],
                        y = g[r[2] - 1];
                    if (y && (c = i(v.url))) {
                        c = c.join("\n");
                        var b = c.indexOf(y.innerText);
                        b >= 0 && (v.line = w + c.substring(0, b).split("\n").length)
                    }
                } else if (r = h.exec(t[l])) {
                    var x = window.location.href.replace(/#.*$/, ""),
                        _ = r[1],
                        S = new RegExp(o(t[l + 1]));
                    c = s(S, [x]), v = {
                        url: x,
                        line: c ? c.line : _,
                        func: ""
                    }
                }
                if (v) {
                    v.func || (v.func = a(v.url, v.line));
                    var C = n(v.url, v.line),
                        $ = C ? C[Math.floor(C.length / 2)] : null;
                    v.context = C && $.replace(/^\s*/, "") === t[l + 1].replace(/^\s*/, "") ? C : [t[l + 1]], m.push(v)
                }
            }
            return m.length ? {
                mode: "multiline",
                name: e.name,
                message: t[0],
                url: document.location.href,
                stack: m,
                useragent: navigator.userAgent
            } : null
        }

        function h(e, t, i, r) {
            var o = {
                url: t,
                line: i
            };
            if (o.url && o.line) {
                e.incomplete = !1, o.func || (o.func = a(o.url, o.line)), o.context || (o.context = n(o.url, o.line));
                var s = / '([^']+)' /.exec(r);
                if (s && (o.column = l(s[1], o.url, o.line)), e.stack.length > 0 && e.stack[0].url === o.url) {
                    if (e.stack[0].line === o.line) return !1;
                    if (!e.stack[0].line && e.stack[0].func === o.func) return e.stack[0].line = o.line, e.stack[0].context = o.context, !1
                }
                return e.stack.unshift(o), e.partial = !0, !0
            }
            return e.incomplete = !0, !1
        }

        function m(e, t) {
            for (var i, n, r, o = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, s = [], c = {}, u = !1, p = m.caller; p && !u; p = p.caller)
                if (p !== f && p !== x) {
                    if (n = {
                            url: null,
                            func: UNKNOWN_FUNCTION,
                            line: null,
                            column: null
                        }, p.name ? n.func = p.name : (i = o.exec(p.toString())) && (n.func = i[1]), r = d(p)) {
                        n.url = r.url, n.line = r.line, n.func === UNKNOWN_FUNCTION && (n.func = a(n.url, n.line));
                        var g = / '([^']+)' /.exec(e.message || e.description);
                        g && (n.column = l(g[1], r.url, r.line))
                    }
                    c["" + p] ? u = !0 : c["" + p] = !0, s.push(n)
                }
            t && s.splice(0, t);
            var v = {
                mode: "callers",
                name: e.name,
                message: e.message,
                url: document.location.href,
                stack: s,
                useragent: navigator.userAgent
            };
            return h(v, e.sourceURL || e.fileName, e.line || e.lineNumber, e.message || e.description), v
        }

        function f(e, t) {
            var i = null;
            t = null == t ? 0 : +t;
            try {
                if (i = u(e)) return i
            } catch (a) {
                if (v) throw a
            }
            try {
                if (i = c(e)) return i
            } catch (a) {
                if (v) throw a
            }
            try {
                if (i = p(e)) return i
            } catch (a) {
                if (v) throw a
            }
            try {
                if (i = m(e, t + 1)) return i
            } catch (a) {
                if (v) throw a
            }
            return {
                mode: "failed"
            }
        }

        function g(e) {
            e = (null == e ? 0 : +e) + 1;
            try {
                throw new Error
            } catch (t) {
                return f(t, e + 1)
            }
        }
        var v = !1,
            w = {}, y = e.remoteFetching,
            b = e.linesOfContext,
            x = e.tracekitReport;
        return f.augmentStackTraceWithInitialElement = h, f.guessFunctionName = a, f.gatherContext = n, f.ofCaller = g, f
    }

    function Notifier(e) {
        _topLevelNotifier = _topLevelNotifier || this;
        var t = window.location.protocol;
        0 !== t.indexOf("http") && (t = "https:");
        var i = t + "//" + Notifier.DEFAULT_ENDPOINT;
        this.options = {
            enabled: !0,
            endpoint: i,
            environment: "production",
            scrubFields: Util.copy(Notifier.DEFAULT_SCRUB_FIELDS),
            checkIgnore: null,
            logLevel: Notifier.DEFAULT_LOG_LEVEL,
            reportLevel: Notifier.DEFAULT_REPORT_LEVEL,
            uncaughtErrorLevel: Notifier.DEFAULT_UNCAUGHT_ERROR_LEVEL,
            payload: {}
        }, this.lastError = null, this.plugins = {}, this.parentNotifier = e, this.logger = function() {
            if (window.console && "function" == typeof window.console.log) {
                var e = ["Rollbar:"].concat(Array.prototype.slice.call(arguments, 0));
                window.console.log(e)
            }
        }, e && (e.hasOwnProperty("shimId") ? e.notifier = this : (this.logger = e.logger, this.configure(e.options)))
    }

    function _wrapNotifierFn(e, t) {
        return function() {
            var i = t || this;
            try {
                return e.apply(i, arguments)
            } catch (a) {
                i && i.logger(a)
            }
        }
    }

    function _guessErrorClass(e) {
        if (!e) return ["Unknown error. There was no error message to display.", ""];
        var t = e.match(ERR_CLASS_REGEXP),
            i = "(unknown)";
        return t && (i = t[t.length - 1], e = e.replace((t[t.length - 2] || "") + i + ":", ""), e = e.replace(/(^[\s]+|[\s]+$)/g, "")), [i, e]
    }

    function _payloadProcessorTimer(e) {
        for (var t; t = window._rollbarPayloadQueue.shift();) _processPayload(t.endpointUrl, t.accessToken, t.payload, t.callback);
        e || (payloadProcessorTimeout = setTimeout(_payloadProcessorTimer, 1e3))
    }

    function _processPayload(e, t, i, a) {
        a = a || function() {};
        var n = (new Date).getTime();
        n - rateLimitStartTime >= 6e4 && (rateLimitStartTime = n, rateLimitPerMinCounter = 0);
        var r = window._globalRollbarOptions.maxItems,
            o = window._globalRollbarOptions.itemsPerMinute,
            s = function() {
                return !i.ignoreRateLimit && r >= 1 && rateLimitCounter >= r
            }, l = function() {
                return !i.ignoreRateLimit && o >= 1 && rateLimitPerMinCounter >= o
            };
        return s() ? (a(new Error(r + " max items reached")), void 0) : l() ? (a(new Error(o + " items per minute reached")), void 0) : (rateLimitCounter++, rateLimitPerMinCounter++, s() && _topLevelNotifier._log(_topLevelNotifier.options.uncaughtErrorLevel, "maxItems has been hit. Ignoring errors for the remainder of the current page load.", null, {
            maxItems: r
        }, null, !1, !0), i.ignoreRateLimit && delete i.ignoreRateLimit, XHR.post(e, t, i, function(e, t) {
            return e ? a(e) : a(null, t)
        }), void 0)
    }

    function _rollbarWindowOnError(e, t, i) {
        !i[4] && window._rollbarWrappedError && (i[4] = window._rollbarWrappedError, window._rollbarWrappedError = null), globalNotifier.uncaughtError.apply(globalNotifier, i), t && t.apply(window, i)
    }

    function _extendListenerPrototype(e, t) {
        if (t.hasOwnProperty && t.hasOwnProperty("addEventListener")) {
            var i = t.addEventListener;
            t.addEventListener = function(t, a, n) {
                i.call(this, t, e.wrap(a), n)
            };
            var a = t.removeEventListener;
            t.removeEventListener = function(e, t, i) {
                a.call(this, e, t._wrapped || t, i)
            }
        }
    }
    var setupCustomJSON = function(JSON) {
            function f(e) {
                return 10 > e ? "0" + e : e
            }

            function quote(e) {
                return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function(e) {
                    var t = meta[e];
                    return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + e + '"'
            }

            function str(e, t) {
                var i, a, n, r, o, s = gap,
                    l = t[e];
                switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(e)), "function" == typeof rep && (l = rep.call(t, e, l)), typeof l) {
                    case "string":
                        return quote(l);
                    case "number":
                        return isFinite(l) ? String(l) : "null";
                    case "boolean":
                    case "null":
                        return String(l);
                    case "object":
                        if (!l) return "null";
                        if (gap += indent, o = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                            for (r = l.length, i = 0; r > i; i += 1) o[i] = str(i, l) || "null";
                            return n = 0 === o.length ? "[]" : gap ? "[\n" + gap + o.join(",\n" + gap) + "\n" + s + "]" : "[" + o.join(",") + "]", gap = s, n
                        }
                        if (rep && "object" == typeof rep)
                            for (r = rep.length, i = 0; r > i; i += 1) "string" == typeof rep[i] && (a = rep[i], n = str(a, l), n && o.push(quote(a) + (gap ? ": " : ":") + n));
                        else
                            for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (n = str(a, l), n && o.push(quote(a) + (gap ? ": " : ":") + n));
                        return n = 0 === o.length ? "{}" : gap ? "{\n" + gap + o.join(",\n" + gap) + "\n" + s + "}" : "{" + o.join(",") + "}", gap = s, n
                }
            }
            "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
                return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
            }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
                return this.valueOf()
            });
            var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                gap, indent, meta = {
                    "\b": "\\b",
                    "	": "\\t",
                    "\n": "\\n",
                    "\f": "\\f",
                    "\r": "\\r",
                    '"': '\\"',
                    "\\": "\\\\"
                }, rep;
            "function" != typeof JSON.stringify && (JSON.stringify = function(e, t, i) {
                var a;
                if (gap = "", indent = "", "number" == typeof i)
                    for (a = 0; i > a; a += 1) indent += " ";
                else "string" == typeof i && (indent = i); if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
                return str("", {
                    "": e
                })
            }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
                function walk(e, t) {
                    var i, a, n = e[t];
                    if (n && "object" == typeof n)
                        for (i in n) Object.prototype.hasOwnProperty.call(n, i) && (a = walk(n, i), void 0 !== a ? n[i] = a : delete n[i]);
                    return reviver.call(e, t, n)
                }
                var j;
                if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
                        return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                    })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                    "": j
                }, "") : j;
                throw new SyntaxError("JSON.parse")
            })
        }, UNKNOWN_FUNCTION = "?",
        Util = {
            merge: function() {
                var e, t, i, a, n, r, o = arguments[0] || {}, s = 1,
                    l = arguments.length,
                    d = !0;
                for ("object" != typeof o && "function" != typeof o && (o = {}); l > s; s++)
                    if (null !== (e = arguments[s]))
                        for (t in e) e.hasOwnProperty(t) && (i = o[t], a = e[t], o !== a && (d && a && (a.constructor == Object || (n = a.constructor == Array)) ? (n ? (n = !1, r = []) : r = i && i.constructor == Object ? i : {}, o[t] = Util.merge(r, a)) : void 0 !== a && (o[t] = a)));
                return o
            },
            copy: function(e) {
                var t;
                return "object" == typeof e && (e.constructor == Object ? t = {} : e.constructor == Array && (t = [])), Util.merge(t, e), t
            },
            parseUriOptions: {
                strictMode: !1,
                key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                q: {
                    name: "queryKey",
                    parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                },
                parser: {
                    strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                    loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                }
            },
            parseUri: function(e) {
                if (!e || "string" != typeof e && !(e instanceof String)) throw new Error("Util.parseUri() received invalid input");
                for (var t = Util.parseUriOptions, i = t.parser[t.strictMode ? "strict" : "loose"].exec(e), a = {}, n = 14; n--;) a[t.key[n]] = i[n] || "";
                return a[t.q.name] = {}, a[t.key[12]].replace(t.q.parser, function(e, i, n) {
                    i && (a[t.q.name][i] = n)
                }), a
            },
            sanitizeUrl: function(e) {
                if (!e || "string" != typeof e && !(e instanceof String)) throw new Error("Util.sanitizeUrl() received invalid input");
                var t = Util.parseUri(e);
                return "" === t.anchor && (t.source = t.source.replace("#", "")), e = t.source.replace("?" + t.query, "")
            },
            traverse: function(e, t) {
                var i, a, n, r = "object" == typeof e,
                    o = [];
                if (r)
                    if (e.constructor === Object)
                        for (i in e) e.hasOwnProperty(i) && o.push(i);
                    else if (e.constructor === Array)
                        for (n = 0; n < e.length; ++n) o.push(n);
                for (n = 0; n < o.length; ++n) i = o[n], a = e[i], r = "object" == typeof a, e[i] = r ? null === a ? t(i, a) : a.constructor === Object ? Util.traverse(a, t) : a.constructor === Array ? Util.traverse(a, t) : t(i, a) : t(i, a);
                return e
            },
            redact: function(e) {
                return e = String(e), new Array(e.length + 1).join("*")
            },
            uuid4: function() {
                var e = (new Date).getTime(),
                    t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                        var i = (e + 16 * Math.random()) % 16 | 0;
                        return e = Math.floor(e / 16), ("x" == t ? i : 7 & i | 8).toString(16)
                    });
                return t
            }
        }, RollbarJSON = {};
    setupCustomJSON(RollbarJSON);
    var XHR = {
        XMLHttpFactories: [
            function() {
                return new XMLHttpRequest
            },
            function() {
                return new ActiveXObject("Msxml2.XMLHTTP")
            },
            function() {
                return new ActiveXObject("Msxml3.XMLHTTP")
            },
            function() {
                return new ActiveXObject("Microsoft.XMLHTTP")
            }
        ],
        createXMLHTTPObject: function() {
            var e, t = !1,
                i = XHR.XMLHttpFactories,
                a = i.length;
            for (e = 0; a > e; e++) try {
                t = i[e]();
                break
            } catch (n) {}
            return t
        },
        post: function(e, t, i, a) {
            if ("object" != typeof i) throw new Error("Expected an object to POST");
            i = RollbarJSON.stringify(i), a = a || function() {};
            var n = XHR.createXMLHTTPObject();
            if (n) try {
                try {
                    var r = function() {
                        try {
                            r && 4 === n.readyState && (r = void 0, 200 === n.status ? a(null, RollbarJSON.parse(n.responseText)) : "number" == typeof n.status && n.status >= 400 && n.status < 600 ? a(new Error(n.status.toString())) : a(new Error))
                        } catch (e) {
                            var t;
                            t = "object" == typeof e && e.stack ? e : new Error(e), a(t)
                        }
                    };
                    n.open("POST", e, !0), n.setRequestHeader && (n.setRequestHeader("Content-Type", "application/json"), n.setRequestHeader("X-Rollbar-Access-Token", t)), n.onreadystatechange = r, n.send(i)
                } catch (o) {
                    if ("undefined" != typeof XDomainRequest) {
                        var s = function() {
                            a(new Error)
                        }, l = function() {
                            a(new Error)
                        }, d = function() {
                            a(null, RollbarJSON.parse(n.responseText))
                        };
                        n = new XDomainRequest, n.onprogress = function() {}, n.ontimeout = s, n.onerror = l, n.onload = d, n.open("POST", e, !0), n.send(i)
                    }
                }
            } catch (c) {
                a(c)
            }
        }
    };
    Notifier.NOTIFIER_VERSION = "1.1.9", Notifier.DEFAULT_ENDPOINT = "api.rollbar.com/api/1/", Notifier.DEFAULT_SCRUB_FIELDS = ["passwd", "password", "secret", "confirm_password", "password_confirmation"], Notifier.DEFAULT_LOG_LEVEL = "debug", Notifier.DEFAULT_REPORT_LEVEL = "debug", Notifier.DEFAULT_UNCAUGHT_ERROR_LEVEL = "warning", Notifier.DEFAULT_ITEMS_PER_MIN = 60, Notifier.DEFAULT_MAX_ITEMS = 0, Notifier.LEVELS = {
        debug: 0,
        info: 1,
        warning: 2,
        error: 3,
        critical: 4
    }, window._rollbarPayloadQueue = [], window._globalRollbarOptions = {
        startTime: (new Date).getTime(),
        maxItems: Notifier.DEFAULT_MAX_ITEMS,
        itemsPerMinute: Notifier.DEFAULT_ITEMS_PER_MIN
    };
    var TK = computeStackTraceWrapper({
            remoteFetching: !1,
            linesOfContext: 3
        }),
        _topLevelNotifier;
    Notifier._generateLogFn = function(e) {
        return _wrapNotifierFn(function() {
            var t = this._getLogArgs(arguments);
            return this._log(e || t.level || this.options.logLevel || Notifier.DEFAULT_LOG_LEVEL, t.message, t.err, t.custom, t.callback)
        })
    }, Notifier.prototype._getLogArgs = function(e) {
        for (var t, i, a, n, r, o, s, l = this.options.logLevel || Notifier.DEFAULT_LOG_LEVEL, d = 0; d < e.length; ++d) s = e[d], o = typeof s, "string" === o ? i = s : "function" === o ? r = _wrapNotifierFn(s, this) : s && "object" === o && ("Date" === s.constructor.name ? t = s : s instanceof Error || s.prototype === Error.prototype || s.hasOwnProperty("stack") ? a = s : n = s);
        return {
            level: l,
            message: i,
            err: a,
            custom: n,
            callback: r
        }
    }, Notifier.prototype._route = function(e) {
        var t = this.options.endpoint,
            i = /\/$/.test(t),
            a = /^\//.test(e);
        return i && a ? e = e.substring(1) : i || a || (e = "/" + e), t + e
    }, Notifier.prototype._processShimQueue = function(e) {
        for (var t, i, a, n, r, o, s, l = {}; i = e.shift();) t = i.shim, a = i.method, n = i.args, r = t.parentShim, s = l[t.shimId], s || (r ? (o = l[r.shimId], s = new Notifier(o)) : s = this, l[t.shimId] = s), s[a] && "function" == typeof s[a] && s[a].apply(s, n)
    }, Notifier.prototype._buildPayload = function(e, t, i, a, n) {
        var r = this.options.accessToken,
            o = this.options.environment,
            s = Util.copy(this.options.payload),
            l = Util.uuid4();
        if (void 0 === Notifier.LEVELS[t]) throw new Error("Invalid level");
        if (!i && !a && !n) throw new Error("No message, stack info or custom data");
        var d = {
            environment: o,
            endpoint: this.options.endpoint,
            uuid: l,
            level: t,
            platform: "browser",
            framework: "browser-js",
            language: "javascript",
            body: this._buildBody(i, a, n),
            request: {
                url: window.location.href,
                query_string: window.location.search,
                user_ip: "$remote_ip"
            },
            client: {
                runtime_ms: e.getTime() - window._globalRollbarOptions.startTime,
                timestamp: Math.round(e.getTime() / 1e3),
                javascript: {
                    browser: window.navigator.userAgent,
                    language: window.navigator.language,
                    cookie_enabled: window.navigator.cookieEnabled,
                    screen: {
                        width: window.screen.width,
                        height: window.screen.height
                    },
                    plugins: this._getBrowserPlugins()
                }
            },
            server: {},
            notifier: {
                name: "rollbar-browser-js",
                version: Notifier.NOTIFIER_VERSION
            }
        };
        s.body && delete s.body;
        var c = {
            access_token: r,
            data: Util.merge(d, s)
        };
        return this._scrub(c.data), c
    }, Notifier.prototype._buildBody = function(e, t, i) {
        var a;
        return a = t && "failed" !== t.mode ? this._buildPayloadBodyTrace(e, t, i) : this._buildPayloadBodyMessage(e, i)
    }, Notifier.prototype._buildPayloadBodyMessage = function(e, t) {
        e || (e = t ? RollbarJSON.stringify(t) : "");
        var i = {
            body: e
        };
        return t && (i.extra = Util.copy(t)), {
            message: i
        }
    }, Notifier.prototype._buildPayloadBodyTrace = function(e, t, i) {
        var a = _guessErrorClass(t.message),
            n = t.name || a[0],
            r = a[1],
            o = {
                exception: {
                    "class": n,
                    message: r
                }
            };
        if (e && (o.exception.description = e || "uncaught exception"), t.stack) {
            var s, l, d, c, u, p, h, m;
            for (o.frames = [], h = 0; h < t.stack.length; ++h) s = t.stack[h], l = {
                filename: s.url ? Util.sanitizeUrl(s.url) : "(unknown)",
                lineno: s.line || null,
                method: s.func && "?" !== s.func ? s.func : "[anonymous]",
                colno: s.column
            }, d = c = u = null, p = s.context ? s.context.length : 0, p && (m = Math.floor(p / 2), c = s.context.slice(0, m), d = s.context[m], u = s.context.slice(m)), d && (l.code = d), (c || u) && (l.context = {}, c && c.length && (l.context.pre = c), u && u.length && (l.context.post = u)), s.args && (l.args = s.args), o.frames.push(l);
            return i && (o.extra = Util.copy(i)), {
                trace: o
            }
        }
        return this._buildPayloadBodyMessage(n + ": " + r, i)
    }, Notifier.prototype._getBrowserPlugins = function() {
        if (!this._browserPlugins) {
            var e, t, i = window.navigator.plugins || [],
                a = i.length,
                n = [];
            for (t = 0; a > t; ++t) e = i[t], n.push({
                name: e.name,
                description: e.description
            });
            this._browserPlugins = n
        }
        return this._browserPlugins
    }, Notifier.prototype._scrub = function(e) {
        function t(e, t, i, a, n, r) {
            return t + Util.redact(r)
        }

        function i(e) {
            var i;
            if ("string" == typeof e)
                for (i = 0; i < s.length; ++i) e = e.replace(s[i], t);
            return e
        }

        function a(e, t) {
            var i;
            for (i = 0; i < o.length; ++i)
                if (o[i].test(e)) {
                    t = Util.redact(t);
                    break
                }
            return t
        }

        function n(e, t) {
            var n = a(e, t);
            return n === t ? i(n) : n
        }
        var r = this.options.scrubFields,
            o = this._getScrubFieldRegexs(r),
            s = this._getScrubQueryParamRegexs(r);
        return Util.traverse(e, n), e
    }, Notifier.prototype._getScrubFieldRegexs = function(e) {
        for (var t, i = [], a = 0; a < e.length; ++a) t = "\\[?(%5[bB])?" + e[a] + "\\[?(%5[bB])?\\]?(%5[dD])?", i.push(new RegExp(t, "i"));
        return i
    }, Notifier.prototype._getScrubQueryParamRegexs = function(e) {
        for (var t, i = [], a = 0; a < e.length; ++a) t = "\\[?(%5[bB])?" + e[a] + "\\[?(%5[bB])?\\]?(%5[dD])?", i.push(new RegExp("(" + t + "=)([^&\\n]+)", "igm"));
        return i
    }, Notifier.prototype._urlIsWhitelisted = function(e) {
        var t, i, a, n, r, o, s, l, d, c;
        try {
            if (t = this.options.hostWhiteList, i = e.data.body.trace, !t || 0 === t.length) return !0;
            if (!i) return !0;
            for (s = t.length, r = i.frames.length, d = 0; r > d; d++) {
                if (a = i.frames[d], n = a.filename, "string" != typeof n) return !0;
                for (c = 0; s > c; c++)
                    if (o = t[c], l = new RegExp(o), l.test(n)) return !0
            }
        } catch (u) {
            return this.configure({
                hostWhiteList: null
            }), this.error("Error while reading your configuration's hostWhiteList option. Removing custom hostWhiteList.", u), !0
        }
        return !1
    }, Notifier.prototype._messageIsIgnored = function(e) {
        var t, i, a, n, r, o, s;
        try {
            if (r = !1, a = this.options.ignoredMessages, s = e.data.body.trace, !a || 0 === a.length) return !1;
            if (!s) return !1;
            for (t = s.exception.message, n = a.length, i = 0; n > i && (o = new RegExp(a[i], "gi"), !(r = o.test(t))); i++);
        } catch (l) {
            this.configure({
                ignoredMessages: null
            }), this.error("Error while reading your configuration's ignoredMessages option. Removing custom ignoredMessages.")
        }
        return r
    }, Notifier.prototype._enqueuePayload = function(e, t, i, a) {
        var n = {
            callback: a,
            accessToken: this.options.accessToken,
            endpointUrl: this._route("item/"),
            payload: e
        }, r = function() {
            if (a) {
                var e = "This item was not sent to Rollbar because it was ignored. This can happen if a custom checkIgnore() function was used or if the item's level was less than the notifier' reportLevel. See https://rollbar.com/docs/notifier/rollbar.js/configuration for more details.";
                a(null, {
                    err: 0,
                    result: {
                        id: null,
                        uuid: null,
                        message: e
                    }
                })
            }
        };
        if (this._internalCheckIgnore(t, i, e)) return r(), void 0;
        try {
            if (this.options.checkIgnore && "function" == typeof this.options.checkIgnore && this.options.checkIgnore(t, i, e)) return r(), void 0
        } catch (o) {
            this.configure({
                checkIgnore: null
            }), this.error("Error while calling custom checkIgnore() function. Removing custom checkIgnore().", o)
        }
        if (this._urlIsWhitelisted(e) && !this._messageIsIgnored(e)) {
            if (this.options.verbose) {
                if (e.data && e.data.body && e.data.body.trace) {
                    var s = e.data.body.trace,
                        l = s.exception.message;
                    this.logger(l)
                }
                this.logger("Sending payload -", n)
            }
            "function" == typeof this.options.logFunction && this.options.logFunction(n);
            try {
                "function" == typeof this.options.transform && this.options.transform(e)
            } catch (o) {
                this.configure({
                    transform: null
                }), this.error("Error while calling custom transform() function. Removing custom transform().", o)
            }
            this.options.enabled && window._rollbarPayloadQueue.push(n)
        }
    }, Notifier.prototype._internalCheckIgnore = function(e, t, i) {
        var a = t[0],
            n = Notifier.LEVELS[a] || 0,
            r = Notifier.LEVELS[this.options.reportLevel] || 0;
        if (r > n) return !0;
        var o = this.options ? this.options.plugins : {};
        return o && o.jquery && o.jquery.ignoreAjaxErrors && i.body.message ? i.body.messagejquery_ajax_error : !1
    }, Notifier.prototype._log = function(e, t, i, a, n, r, o) {
        var s = null;
        if (i) {
            if (s = i._tkStackTrace ? i._tkStackTrace : TK(i), i === this.lastError) return;
            this.lastError = i
        }
        var l = this._buildPayload(new Date, e, t, s, a);
        o && (l.ignoreRateLimit = !0), this._enqueuePayload(l, r ? !0 : !1, [e, t, i, a], n)
    }, Notifier.prototype.log = Notifier._generateLogFn(), Notifier.prototype.debug = Notifier._generateLogFn("debug"), Notifier.prototype.info = Notifier._generateLogFn("info"), Notifier.prototype.warn = Notifier._generateLogFn("warning"), Notifier.prototype.warning = Notifier._generateLogFn("warning"), Notifier.prototype.error = Notifier._generateLogFn("error"), Notifier.prototype.critical = Notifier._generateLogFn("critical"), Notifier.prototype.uncaughtError = _wrapNotifierFn(function(e, t, i, a, n, r) {
        if (r = r || null, n && n.stack) return this._log(this.options.uncaughtErrorLevel, e, n, r, null, !0), void 0;
        if (t && t.stack) return this._log(this.options.uncaughtErrorLevel, e, t, r, null, !0), void 0;
        var o = {
            url: t || "",
            line: i
        };
        o.func = TK.guessFunctionName(o.url, o.line), o.context = TK.gatherContext(o.url, o.line);
        var s = {
            mode: "onerror",
            message: e || "uncaught exception",
            url: document.location.href,
            stack: [o],
            useragent: navigator.userAgent
        };
        n && (s = n._tkStackTrace || TK(n));
        var l = this._buildPayload(new Date, this.options.uncaughtErrorLevel, e, s);
        this._enqueuePayload(l, !0, [this.options.uncaughtErrorLevel, e, t, i, a, n])
    }), Notifier.prototype.global = _wrapNotifierFn(function(e) {
        e = e || {}, Util.merge(window._globalRollbarOptions, e), void 0 !== e.maxItems && (rateLimitCounter = 0), void 0 !== e.itemsPerMinute && (rateLimitPerMinCounter = 0)
    }), Notifier.prototype.configure = _wrapNotifierFn(function(e) {
        Util.merge(this.options, e)
    }), Notifier.prototype.scope = _wrapNotifierFn(function(e) {
        var t = new Notifier(this);
        return Util.merge(t.options.payload, e), t
    }), Notifier.prototype.wrap = function(e, t) {
        var i;
        if (i = "function" == typeof t ? t : function() {
                return t || {}
            }, "function" != typeof e) return e;
        if (e._isWrap) return e;
        if (!e._wrapped) {
            e._wrapped = function() {
                try {
                    e.apply(this, arguments)
                } catch (t) {
                    throw t.stack || (t._tkStackTrace = TK(t)), t._rollbarContext = i(), t._rollbarContext._wrappedSource = e.toString(), window._rollbarWrappedError = t, t
                }
            }, e._wrapped._isWrap = !0;
            for (var a in e) e.hasOwnProperty(a) && (e._wrapped[a] = e[a])
        }
        return e._wrapped
    };
    var ERR_CLASS_REGEXP = new RegExp("^(([a-zA-Z0-9-_$ ]*): *)?(Uncaught )?([a-zA-Z0-9-_$ ]*): "),
        payloadProcessorTimeout;
    Notifier.processPayloads = function(e) {
        (!payloadProcessorTimeout || e) && _payloadProcessorTimer(e)
    };
    var rateLimitStartTime = (new Date).getTime(),
        rateLimitCounter = 0,
        rateLimitPerMinCounter = 0,
        globalNotifier = new Notifier;
    window._rollbarWrappedError = null, globalNotifier.init = function(e) {
        if (this.configure(e), e.captureUncaught) {
            var t = window.onerror;
            window.onerror = function() {
                var e = Array.prototype.slice.call(arguments, 0);
                _rollbarWindowOnError(globalNotifier, t, e)
            };
            var i, a, n = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
            for (i = 0; i < n.length; ++i) a = n[i], window[a] && window[a].prototype && _extendListenerPrototype(this, window[a].prototype)
        }
        Notifier.processPayloads()
    }, module.exports = globalNotifier
}), 

define("app", ["libs/core", "helpers/menu", "helpers/locale", "helpers/theme", "libs/rollbar"], function(e, t, i, a, n) {
    webix.codebase = document.location.href.split("#")[0].replace("index.html", "") + "libs/webix/", !webix.env.touch && webix.ui.scrollSize && webix.CustomScroll && webix.CustomScroll.init(), webix.production && n.init({
        accessToken: "650b007d5d794bb68d056584451a57a8",
        captureUncaught: !0,
        source_map_enabled: !0,
        code_version: "0.8.0",
        payload: {
            environment: "production"
        }
    });
    var r = e.create({
        id: "admin-demo",
        name: "Webix Admin",
        version: "0.1",
        debug: !0,
        start: "/app/dashboard"
    });
    return r.use(t), r.use(i), r.use(a), r
}), 

define("views/menus/search", [], function() {
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
}), 

define("views/menus/mail", [], function() {
    return {
        $ui: {
            view: "popup",
            id: "mailPopup",
            width: 300,
            padding: 0,
            css: "list_popup",
            body: {
                type: "clean",
                borderless: !0,
                rows: [{
                    view: "list",
                    autoheight: !0,
                    data: [{
                        id: 1,
                        name: "Sofia Lee",
                        text: "Lorem ipsum dolor sit amet.",
                        personId: 2
                    }, {
                        id: 2,
                        name: "Jeremy O'Neal",
                        text: "Morbi eget facilisis risus.",
                        personId: 1
                    }, {
                        id: 3,
                        name: "Paul Jackson",
                        text: "Cras lacinia bibendum arcu.",
                        personId: 1
                    }],
                    type: {
                        height: 45,
                        template: "<img class='photo' src='public/images/photo/#personId#.png' /><span class='text'>#text#</span><span class='name'>#name#</span>"
                    }
                }, {
                    css: "show_all",
                    template: "Show all emails <span class='webix_icon fa-angle-double-right'></span>",
                    height: 40
                }]
            }
        }
    }
}), 

define("views/menus/message", [], function() {
    return {
        $ui: {
            view: "popup",
            id: "messagePopup",
            width: 300,
            padding: 0,
            css: "list_popup",
            body: {
                type: "clean",
                borderless: !0,
                rows: [{
                    view: "list",
                    autoheight: !0,
                    data: [{
                        id: 1,
                        name: "Mario Douglas",
                        text: "Lorem ipsum dolor sit amet",
                        personId: 1
                    }, {
                        id: 2,
                        name: "Sofia Lee",
                        text: "Praesent luctus nulla enim, pellentesque condimentum ",
                        personId: 2
                    }, {
                        id: 3,
                        name: "Kim Alley",
                        text: "Lorem ipsum dolor sit amet",
                        personId: 2
                    }, {
                        id: 4,
                        name: "Jeremy O'Neal",
                        text: "Morbi eget facilisis risus",
                        personId: 1
                    }, {
                        id: 5,
                        name: "Paul Jackson",
                        text: "Cras lacinia bibendum arcu",
                        personId: 1
                    }],
                    type: {
                        height: 45,
                        template: "	<img class='photo' src='public/images/photo/#personId#.png' /><span class='text'>#text#</span><span class='name'>#name#</span>"
                    }
                }, {
                    css: "show_all",
                    template: "Show all messages <span class='webix_icon fa-angle-double-right'></span>",
                    height: 40
                }]
            }
        }
    }
}), 

define("views/menus/profile", [], function() {
    return {
        $ui: {
            view: "submenu",
            id: "profilePopup",
            width: 200,
            padding: 0,
            data: [{
                id: 1,
                icon: "user",
                value: "My Profile"
            }, {
                id: 2,
                icon: "cog",
                value: "My Account"
            }, {
                id: 3,
                icon: "calendar",
                value: "My Calendar"
            }, {
                id: 5,
                icon: "tasks",
                value: "My Tasks"
            }, {
                $template: "Separator"
            }, {
                id: 4,
                icon: "sign-out",
                value: "Logout"
            }],
            type: {
                template: function(e) {
                    return e.type ? "<div class='separator'></div>" : "<span class='webix_icon alerts fa-" + e.icon + "'></span><span>" + e.value + "</span>"
                }
            }
        }
    }
}), 

define("views/menus/sidebar", [], function() {
    return {
        $ui: {
            width: 200,
            rows: [{
                view: "tree",
                id: "app:menu",
                type: "menuTree2",
                css: "menu",
                activeTitle: !0,
                select: !0,
                tooltip: {
                    template: function(e) {
                        return e.$count ? "" : e.details
                    }
                },
                on: {
                    onBeforeSelect: function(e) {
                        return this.getItem(e).$count ? !1 : void 0
                    },
                    onAfterSelect: function(e) {
                        this.$scope.show("./" + e);
                        var t = this.getItem(e);
                        webix.$$("title").parse({
                            title: t.value,
                            details: t.details
                        })
                    }
                },
                data: [{
                    id: "main",
                    value: "Main",
                    open: !0,
                    data: [{
                        id: "dashboard",
                        value: "Dashboard",
                        icon: "home",
                        $css: "dashboard",
                        details: "reports and statistics"
                    }, {
                        id: "orders",
                        value: "Orders",
                        icon: "check-square-o",
                        $css: "orders",
                        details: "order reports and editing"
                    }, {
                        id: "products",
                        value: "Products",
                        icon: "cube",
                        $css: "products",
                        details: "all products"
                    }, {
                        id: "product_edit",
                        value: "Product Edit",
                        icon: "pencil-square-o",
                        details: "changing product data"
                    }]
                }, {
                    id: "components",
                    open: !0,
                    value: "Components",
                    data: [{
                        id: "datatables",
                        value: "Datatables",
                        icon: "table",
                        details: "datatable examples"
                    }, {
                        id: "charts",
                        value: "Charts",
                        icon: "bar-chart-o",
                        details: "charts examples"
                    }, {
                        id: "forms",
                        value: "Forms",
                        icon: "list-alt",
                        details: "forms examples"
                    }]
                }, {
                    id: "uis",
                    value: "UI Examples",
                    open: 1,
                    data: [{
                        id: "calendar",
                        value: "My Calendar",
                        icon: "calendar",
                        details: "calendar example"
                    }, {
                        id: "files",
                        value: "File Manager",
                        icon: "folder-open-o",
                        details: "file manager example"
                    }]
                }]
            }]
        }
    }
}), 

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
}, webix.ui.button), 

define("views/webix/icon", function() {}), 

webix.type(webix.ui.tree, {
    name: "menuTree",
    height: 40,
    icon: function() {
        var e = "";
        return e
    },
    folder: function(e) {
        return e.icon ? "<span class='webix_icon icon fa-" + e.icon + "'></span>" : ""
    }
}), 

webix.type(webix.ui.tree, {
    name: "menuTree2",
    height: 40,
    icon: function(e) {
        for (var t = "", i = "", a = 1; a <= e.$level; a++)
            if (a == e.$level && e.$count) {
                var n = e.open ? "down" : "right";
                t += "<span class='" + i + " webix_icon fa-angle-" + n + "'></span>"
            }
        return t
    },
    folder: function(e) {
        return e.icon ? "<span class='webix_icon icon fa-" + e.icon + "'></span>" : ""
    }
}), 

define("views/webix/menutree", function() {}), 

define("views/app", ["views/menus/search", "views/menus/mail", "views/menus/message", "views/menus/profile", "views/menus/sidebar", "views/webix/icon", "views/webix/menutree"], function(e, t, i, a, n) {
    var r = {
        view: "toolbar",
        elements: [{
            view: "label",
            label: "<a href='http://webix.com'><img class='photo' src='public/images/logo.png' /></a>",
            width: 200
        }, {
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
        }, {}, {
            view: "icon",
            icon: "search",
            width: 45,
            popup: "searchPopup"
        }, {
            view: "icon",
            icon: "envelope-o",
            value: 3,
            width: 45,
            popup: "mailPopup"
        }, {
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
}), 

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
}, webix.ui.view), 

define("views/webix/scheduler", function() {}), 

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
}), 

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
}), 

define("views/calendar", ["views/modules/scheduler"], function(e) {
    var t = {
        type: "space",
        cols: [e]
    };
    return {
        $ui: t
    }
}), 

define("views/modules/dashline", [], function() {
    return {
        $ui: {
            height: 136,
            css: "tiles",
            template: function(e) {
                for (var t = null, i = e.items, a = "<div class='flex_tmp'>", n = 0; n < i.length; n++) t = i[n], a += "<div class='item " + t.css + "'>", a += "<div class='webix_icon icon fa-" + t.icon + "'></div>", a += "<div class='details'><div class='value'>" + t.value + "</div><div class='text'>" + t.text + "</div></div>", a += "<div class='footer'>View more <span class='webix_icon fa-angle-double-right'></span></div>", a += "</div>";
                return a += "</div>"
            },
            data: {
                items: [{
                    id: 1,
                    text: "New Orders",
                    value: 250,
                    icon: "check-square-o",
                    css: "orders"
                }, {
                    id: 2,
                    text: "New Users",
                    value: 300,
                    icon: "user",
                    css: "users"
                }, {
                    id: 4,
                    text: "New Feedbacks",
                    value: 40,
                    icon: "quote-right",
                    css: "feedbacks"
                }, {
                    id: 3,
                    text: "Profit",
                    value: "+25%",
                    icon: "line-chart",
                    css: "profit"
                }]
            }
        }
    }
}), 

define("models/visitors", [], function() {
    var e = [{
        id: 1,
        month: "Jun",
        newv: 300,
        rec: 600
    }, {
        id: 2,
        month: "Jul",
        newv: 100,
        rec: 400
    }, {
        id: 3,
        month: "Aug",
        newv: 400,
        rec: 700
    }, {
        id: 4,
        month: "Sep",
        newv: 600,
        rec: 900
    }, {
        id: 5,
        month: "Oct",
        newv: 400,
        rec: 400
    }];
    return {
        getAll: e
    }
}), 

define("views/modules/visitors", ["models/visitors"], function(e) {
    return {
        $ui: {
            type: "clean",
            rows: [{
                template: "<span class='webix_icon fa-sign-in'></span>Visitor statistics",
                css: "sub_title",
                height: 30
            }, {
                view: "chart",
                type: "stackedArea",
                legend: {
                    layout: "x",
                    align: "right",
                    values: [{
                        text: "New visitors",
                        color: "#61b5ee"
                    }, {
                        text: "Recurrent",
                        color: "#a4b4bf"
                    }]
                },
                offset: 0,
                alpha: .8,
                xAxis: {
                    template: "#month#"
                },
                radius: 0,
                yAxis: {
                    start: 0,
                    end: 2e3,
                    step: 500
                },
                series: [{
                    value: "#rec#",
                    color: "#a4b4bf"
                }, {
                    value: "#newv#",
                    color: "#61b5ee"
                }],
                padding: {
                    top: 25
                },
                data: e.getAll
            }]
        }
    }
}), 

define("views/modules/orders", [], function() {
    return {
        $ui: {
            type: "clean",
            rows: [{
                template: "<span class='webix_icon fa-bar-chart'></span>Orders",
                css: "sub_title",
                height: 30
            }, {
                view: "chart",
                type: "bar",
                xAxis: {
                    template: "#month#"
                },
                yAxis: {
                    start: 0,
                    end: 500,
                    step: 100
                },
                barWidth: 60,
                alpha: .85,
                radius: 0,
                series: [{
                    value: "#number#",
                    color: "#9e89eb",
                    item: {
                        borderColor: "#fff",
                        color: "#49cd81",
                        radius: 3
                    },
                    line: {
                        color: "#b07be5",
                        width: 2
                    }
                }],
                padding: {
                    top: 25
                },
                data: [{
                    id: 1,
                    month: "Jun",
                    number: 100
                }, {
                    id: 2,
                    month: "Jul",
                    number: 250
                }, {
                    id: 3,
                    month: "Aug",
                    number: 200
                }, {
                    id: 4,
                    month: "Sep",
                    number: 350
                }, {
                    id: 5,
                    month: "Oct",
                    number: 300
                }]
            }]
        }
    }
}), 

define("views/modules/chart_diff", [], function() {
    function e(e, t) {
        for (var i = 0, a = 0; a < t.length; a++) i += parseFloat(t[a].sales) || 0, i += parseFloat(t[a].sales2) || 0;
        return t.length ? i / (2 * t.length) : 0
    }
    var t = [{
            sales: 4.1,
            sales2: 8,
            year: "08"
        }, {
            sales: 4.3,
            sales2: 9,
            year: "09"
        }, {
            sales: 7.6,
            sales2: 11,
            year: "10"
        }, {
            sales: 7.8,
            sales2: 13,
            year: "11"
        }, {
            sales: 7.2,
            sales2: 10,
            year: "12"
        }, {
            sales: 5.3,
            sales2: 14,
            year: "13"
        }, {
            sales: 4.8,
            sales2: 12,
            year: "14"
        }],
        i = {
            view: "chart",
            type: "bar",
            barWidth: 40,
            padding: {
                left: 30,
                bottom: 60
            },
            radius: 0,
            yAxis: {},
            xAxis: {
                lines: !0,
                title: "Sales per year<br/>&nbsp;",
                template: "'#id#"
            },
            legend: {
                layout: "y",
                width: 100,
                align: "right",
                valign: "middle",
                values: [{
                    text: "Asia",
                    color: "#61b5ee"
                }, {
                    text: "Europe",
                    color: "#e9df40"
                }, {
                    text: "Average",
                    toggle: !0,
                    markerType: "item"
                }]
            },
            scheme: {
                $group: {
                    by: "year",
                    map: {
                        salesA: ["sales2", "any"],
                        salesB: ["sales", "any"],
                        salesAverage: ["sales", e]
                    }
                }
            },
            series: [{
                value: "#salesA#",
                color: "#61b5ee",
                gradient: "falling",
                alpha: .8
            }, {
                type: "area",
                alpha: .4,
                value: "#salesB#",
                color: "#e9df40"
            }, {
                type: "line",
                value: "#salesAverage#",
                item: {
                    radius: 2,
                    borderColor: "#27ae60"
                },
                line: {
                    color: "#27ae60",
                    width: 2
                }
            }],
            data: t
        };
    return {
        $ui: i
    }
}), 

define("views/modules/revenue", [], function() {
    var e = {
        view: "chart",
        type: "line",
        xAxis: {
            template: "#month#"
        },
        tooltip: {
            template: "#number#M $"
        },
        minHeight: 140,
        yAxis: {
            start: 0,
            end: 450,
            step: 150
        },
        offset: !1,
        series: [{
            value: "#number#",
            item: {
                borderColor: "#fff",
                color: "#61b5ee",
                radius: 4
            },
            line: {
                color: "#61b5ee",
                width: 1
            }
        }],
        padding: {
            top: 25
        },
        data: [{
            id: 1,
            month: "Jun",
            number: 90
        }, {
            id: 2,
            month: "Jul",
            number: 220
        }, {
            id: 3,
            month: "Aug",
            number: 180
        }, {
            id: 4,
            month: "Sep",
            number: 405
        }, {
            id: 5,
            month: "Oct",
            number: 275
        }]
    }, t = {
        view: "chart",
        css: "donut_result",
        type: "donut",
        shadow: !1,
        color: "#color#",
        pieInnerText: function(e) {
            return e.result ? "<div class='donut_result'>" + e.value + "</div>" : ""
        },
        padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10
        },
        data: [{
            value: 30,
            color: "#61b5ee",
            result: 1
        }, {
            value: 70,
            color: "#eee"
        }]
    }, i = {
        view: "chart",
        type: "donut",
        shadow: !1,
        css: "donut_result",
        color: "#color#",
        padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10
        },
        pieInnerText: function(e) {
            return e.result ? "<div class='donut_result'>" + e.value + "</div>" : ""
        },
        data: [{
            value: 25,
            color: "#61b5ee",
            result: 1
        }, {
            value: 75,
            color: "#eee"
        }]
    }, a = {
        view: "chart",
        type: "donut",
        css: "donut_result",
        shadow: !1,
        color: "#color#",
        pieInnerText: function(e) {
            return e.result ? "<div class='donut_result'>" + e.value + "</div>" : ""
        },
        padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10
        },
        data: [{
            value: 45,
            color: "#61b5ee",
            result: 1
        }, {
            value: 55,
            color: "#eee"
        }]
    }, n = {
        type: "clean",
        rows: [e, {
            height: 90,
            type: "clean",
            cols: [t, i, a]
        }, {
            height: 40,
            type: "clean",
            css: "donut_titles",
            cols: [{
                template: "Europe"
            }, {
                template: "Asia"
            }, {
                template: "Northern America"
            }]
        }]
    };
    return {
        $ui: n
    }
}), 

define("views/modules/taskschart", [], function() {
    var e = {
        view: "chart",
        type: "barH",
        value: "#progress#",
        minHeight: 230,
        color: "#color#",
        barWidth: 30,
        radius: 2,
        tooltip: {
            template: "#progress# %"
        },
        yAxis: {
            template: "#name#"
        },
        xAxis: {
            start: 0,
            end: 100,
            step: 10,
            template: function(e) {
                return e % 20 ? "" : e
            }
        },
        padding: {
            left: 120
        },
        data: [{
            id: "1",
            name: "Report",
            progress: 55,
            color: "#49cd81"
        }, {
            id: "2",
            name: "Strategy  meeting",
            progress: 20,
            color: "#a693eb"
        }, {
            id: "3",
            name: "Partners meeting",
            progress: 70,
            color: "#49cd81"
        }, {
            id: "4",
            name: "Research analysis",
            progress: 30,
            color: "#a693eb"
        }, {
            id: "5",
            name: "Presentation",
            progress: 60,
            color: "#f19b60"
        }],
        legend: {
            align: "center",
            layout: "x",
            valign: "bottom",
            template: "#region#",
            values: [{
                text: "Company",
                color: "#49cd81"
            }, {
                text: "Inner tasks",
                color: "#f19b60"
            }, {
                text: "Projects",
                color: "#a693eb"
            }]
        }
    };
    return {
        $ui: e
    }
}), 

define("views/modules/diffchart", [], function() {
    var e = {
        gravity: 3,
        type: "clean",
        rows: [{
            template: "<span class='webix_icon fa-pie-chart'></span>Pie chart",
            css: "sub_title",
            height: 30
        }, {
            view: "chart",
            type: "pie3D",
            color: "#color#",
            shadow: !1,
            tooltip: {
                template: "#value#%"
            },
            minHeight: 200,
            padding: {
                left: 15,
                right: 15,
                bottom: 10,
                top: 10
            },
            legend: {
                layout: "y",
                width: 100,
                align: "right",
                valign: "middle",
                template: "#region#"
            },
            data: [{
                color: "#61b5ee",
                region: "Asia",
                value: 35
            }, {
                color: "#27ae60",
                region: "Europe",
                value: 30
            }, {
                color: "#9e89eb",
                region: "USA",
                value: 25
            }, {
                color: "#f19b60",
                region: "Australia",
                value: 10
            }]
        }]
    };
    return {
        $ui: e
    }
}), 

define("views/charts", ["views/modules/dashline", "views/modules/visitors", "views/modules/orders", "views/modules/chart_diff", "views/modules/revenue", "views/modules/taskschart", "views/modules/diffchart"], function(e, t, i, a, n, r, o) {
    var s = {
        type: "clean",
        rows: [{
            type: "space",
            rows: [{
                type: "wide",
                minHeight: 250,
                cols: [{
                    gravity: 4,
                    type: "clean",
                    rows: [{
                        template: "<span class='webix_icon fa-area-chart'></span>Different charts in one",
                        css: "sub_title",
                        height: 30
                    },
                        a
                    ]
                },
                    o
                ]
            }, {
                type: "wide",
                cols: [{
                    type: "clean",
                    rows: [{
                        template: "<span class='webix_icon fa-line-chart'></span>Sales",
                        css: "sub_title",
                        height: 30
                    },
                        n
                    ]
                }, {
                    type: "clean",
                    rows: [{
                        template: "<span class='webix_icon fa-tasks'></span>Tasks",
                        css: "sub_title",
                        height: 30
                    },
                        r, {
                            template: " "
                        }
                    ]
                }]
            }, {
                height: 220,
                type: "wide",
                cols: [i, t]
            }]
        }]
    };
    return {
        $ui: s
    }
}), 

define("views/modules/messages", [], function() {
    var e = {
        template: "<span class='webix_icon fa-comments-o'></span>Messages",
        css: "sub_title",
        height: 50
    }, t = {
        view: "list",
        css: "chat_list",
        maxHeight: 300,
        minHeight: 250,
        type: {
            height: "auto",
            template: function(e) {
                var t = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae. ",
                    i = "<img class='photo' src='public/images/photo/" + e.personId + ".png' />";
                return i += "<div class='text'><div class='name'>" + e.name + "<div class='time'>" + e.time + "</div></div>", i += t + "</div>"
            }
        },
        data: [{
            id: 1,
            personId: 1,
            time: "Just now",
            name: "Peter Johnson"
        }, {
            id: 2,
            personId: 2,
            time: "Just now",
            name: "Vera Liu"
        }, {
            id: 3,
            personId: 1,
            time: "11:40",
            name: "Peter Johnson"
        }, {
            id: 4,
            personId: 2,
            time: "11:30",
            name: "Vera Liu"
        }, {
            id: 5,
            personId: 1,
            time: "10:10",
            name: "Peter Johnson"
        }, {
            id: 6,
            personId: 2,
            time: "9:50",
            name: "Vera Liu"
        }]
    }, i = {
        view: "form",
        css: "show_all",
        paddingX: 10,
        paddingY: 2,
        cols: [{
            view: "text",
            placeholder: "Type a message here",
            height: 36
        }, {
            view: "icon",
            icon: "search",
            height: 36
        }]
    };
    return {
        $ui: {
            type: "clean",
            rows: [e, {
                rows: [t, i]
            }]
        }
    }
}), 

define("views/modules/tasks", [], function() {
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
}), 

webix.protoUI({ name: "google-map",
    $init: function() {
        this.$view.innerHTML = "<div class='webix_map_content' style='width:100%;height:100%'></div>", this._contentobj = this.$view.firstChild, this.map = null, this.$ready.push(this.render)
    },
    render: function() {
        if ("undefined" == typeof google || "undefined" == typeof google.maps) {
            var e = "webix_callback_" + webix.uid();
            window[e] = webix.bind(function() {
                this._initMap.call(this, !0)
            }, this);
            var t = document.createElement("script");
            t.type = "text/javascript", t.src = "//maps.google.com/maps/api/js?sensor=false&callback=" + e, document.getElementsByTagName("head")[0].appendChild(t)
        } else this._initMap()
    },
    _initMap: function() {
        var e = this.config;
        this.map = new google.maps.Map(this._contentobj, {
            zoom: e.zoom,
            center: new google.maps.LatLng(e.center[0], e.center[1]),
            mapTypeId: google.maps.MapTypeId[e.mapType]
        }), webix._ldGMap = null
    },
    center_setter: function(e) {
        return this.map && this.map.setCenter(new google.maps.LatLng(e[0], e[1])), e
    },
    mapType_setter: function(e) {
        return this.map && this.map.setMapTypeId(google.maps.MapTypeId[e]), e
    },
    zoom_setter: function(e) {
        return this.map && this.map.setZoom(e), e
    },
    defaults: {
        zoom: 5,
        center: [39.5, -98.5],
        mapType: "ROADMAP"
    },
    $setSize: function() {
        webix.ui.view.prototype.$setSize.apply(this, arguments), this.map && google.maps.event.trigger(this.map, "resize")
    }
}, webix.ui.view), 

 

define("views/modules/map", ["views/webix/googlemap"], function() {
    var e = {
        rows: [{
            template: "<span class='webix_icon fa-map-marker'></span>Events Map",
            type: "header",
            css: "sub_title",
            height: 50
        }, {
            view: "google-map",
            id: "map",
            zoom: 3,
            center: [48.724, 8.215]
        }]
    };
    return {
        $ui: e
    }
}), 

define("views/dashboard", ["views/modules/dashline", "views/modules/visitors", "views/modules/orders", "views/modules/messages", "views/modules/revenue", "views/modules/tasks", "views/modules/map"], function(e, t, i, a, n, r, o) {
    var s = {
        type: "clean",
        rows: [e, {
            type: "space",
            rows: [{
                height: 220,
                type: "wide",
                cols: [t, i]
            }, {
                type: "wide",
                cols: [a, n]
            }, {
                type: "wide",
                cols: [r, o]
            }]
        }]
    };
    return {
        $ui: s
    }
}), 

define("models/data_arrays", [], function() {
    var e = [{
            id: 1,
            code: "NWTB-1",
            name: "Webix Chai",
            rating: 5,
            rank: 1
        }, {
            id: 2,
            code: "NWTCO-3",
            name: "Webix Syrup",
            rating: 1,
            rank: 2
        }, {
            id: 3,
            code: "NWTCO-4",
            name: "Webix Cajun Seasoning",
            rating: 2,
            rank: 3
        }, {
            id: 4,
            code: "NWTO-5",
            name: "Webix Olive Oil",
            rating: 3,
            rank: 4
        }, {
            id: 5,
            code: "NWTJP-6",
            name: "Webix Boysenberry Spread",
            rating: 1,
            rank: 5
        }],
        t = [{
            id: 1,
            name: "USA",
            open: 1,
            data: [{
                id: 11,
                code: "NWTB-1",
                name: "Webix Chai",
                sales: 2e5
            }, {
                id: 12,
                code: "NWTCO-3",
                name: "Webix Syrup",
                sales: 18e4
            }, {
                id: 13,
                code: "NWTCO-4",
                name: "Webix Cajun Seasoning",
                sales: 15e4
            }]
        }, {
            id: 2,
            name: "Europe",
            data: [{
                id: 21,
                code: "NWTB-1",
                name: "Webix Chai",
                sales: 23e4
            }, {
                id: 22,
                code: "NWTCO-3",
                name: "Webix Syrup",
                sales: 21e4
            }, {
                id: 23,
                code: "NWTO-5",
                name: "Webix Olive Oil",
                sales: 18e4
            }]
        }, {
            id: 3,
            name: "Asia",
            open: 1,
            data: [{
                id: 31,
                code: "NWTCO-4",
                name: "Webix Cajun Seasoning",
                sales: 31e4
            }, {
                id: 32,
                code: "NWTO-5",
                name: "Webix Olive Oil",
                sales: 25e4
            }, {
                id: 33,
                code: "NWTJP-6",
                name: "Webix Boysenberry Spread",
                sales: 21e4
            }]
        }],
        i = {
            data: [{
                id: 11,
                code: "NWTB-1",
                name: "Webix Chai",
                sales: 2e5,
                region: "USA"
            }, {
                id: 12,
                code: "NWTCO-3",
                name: "Webix Syrup",
                sales: 18e4,
                region: "USA"
            }, {
                id: 13,
                code: "NWTCO-4",
                name: "Webix Cajun Seasoning",
                sales: 15e4,
                region: "USA"
            }, {
                id: "sub1",
                $css: "highlight_row",
                region: "Top Sales",
                sales: 2e5
            }, {
                id: 21,
                code: "NWTB-1",
                name: "Webix Chai",
                sales: 23e4,
                region: "Europe"
            }, {
                id: 22,
                code: "NWTO-5",
                name: "Webix Olive Oil",
                sales: 18e4,
                region: "Europe"
            }, {
                id: "sub2",
                $css: "highlight_row",
                region: "Top Sales",
                sales: 23e4
            }],
            spans: [
                [11, "region", 1, 3],
                [21, "region", 1, 3],
                ["sub1", "region", 3, 1, null, "highlight_row"],
                ["sub2", "region", 3, 1, "", "highlight_row"]
            ]
        }, a = [{
            id: "1",
            name: "Prepare finance report",
            progress: .55,
            type: "inner"
        }, {
            id: "2",
            name: "Solex project strategy  meeting",
            progress: .2
        }, {
            id: "3",
            name: "WestEurope partners call",
            progress: .7
        }, {
            id: "4",
            name: "Market research analysis",
            progress: .3,
            type: "inner"
        }, {
            id: "5",
            name: "Prepare presentation",
            progress: .6,
            type: "company"
        }];
    return {
        rating: e,
        treetable: t,
        progress: a,
        colspans: i
    }
}), 

define("views/modules/data_rating", ["models/data_arrays"], function(e) {
    var t = {
        view: "toolbar",
        css: "highlighted_header header1",
        paddingX: 5,
        paddingY: 5,
        height: 40,
        cols: [{
            template: "<span class='webix_icon fa-star-o'></span>Rating",
            css: "sub_title2",
            borderless: !0
        }, {
            view: "button",
            type: "iconButton",
            icon: "refresh",
            width: 100,
            label: "Refresh"
        }]
    }, i = {
        view: "datatable",
        columns: [{
            id: "id",
            header: "",
            sort: "int",
            width: 35
        }, {
            id: "name",
            header: "Procut",
            fillspace: 4,
            sort: "string"
        }, {
            id: "code",
            header: "Code",
            sort: "string",
            fillspace: 2
        }, {
            id: "rating",
            header: "Rating",
            sort: "int",
            fillspace: 2,
            minWidth: 80,
            template: function(e) {
                for (var t = "<div class='rating_bar_element star" + e.rating + "'>", i = 1; 6 > i; i++) t += "<div title='" + i + "' class='rating_star star" + i + "' style='left:" + (16 * i - 16) + "px'></div>";
                return t + "</div>"
            }
        }],
        onClick: {
            rating_star: function(e, t) {
                this.getItem(t.row)[t.column] = (e.target || e.srcElement).getAttribute("title"), this.updateItem(t.row)
            }
        },
        autoheight: !0,
        scheme: {
            $init: function(e) {
                e.index = this.count()
            }
        },
        data: e.rating
    }, a = {
        type: "clean",
        rows: [t, i]
    };
    return {
        $ui: a
    }
}), 

define("views/modules/data_treetable", ["models/data_arrays"], function(e) {
    var t = {
        view: "toolbar",
        css: "highlighted_header header3",
        paddingX: 5,
        paddingY: 5,
        height: 40,
        cols: [{
            template: "<span class='webix_icon fa-folder-o'></span>Treetable",
            css: "sub_title2",
            borderless: !0
        }, {
            view: "button",
            type: "iconButton",
            icon: "external-link",
            label: "Export",
            width: 100
        }]
    }, i = {
        view: "treetable",
        columns: [{
            id: "id",
            header: "",
            width: 35
        }, {
            id: "name",
            header: "Product",
            fillspace: 4,
            template: "{common.treetable()} #name#"
        }, {
            id: "code",
            header: "Code",
            sort: "int",
            fillspace: 2
        }, {
            id: "sales",
            header: "Sales",
            sort: "int",
            fillspace: 2
        }],
        select: !0,
        data: e.treetable,
        type: {
            icon: function(e) {
                return e.$count ? e.open ? "<span class='webix_icon fa-angle-down'></span>" : "<div class='webix_icon fa-angle-right'></div>" : "<div class='webix_tree_none'></div>"
            },
            folder: function(e) {
                return e.$count ? e.open ? "<span class='webix_icon fa-folder-open-o'></span>" : "<span class='webix_icon fa-folder-o'></span>" : "<div class='webix_icon fa-file-o'></div>"
            }
        },
        onClick: {
            "fa-angle-down": function(e, t) {
                this.close(t)
            },
            "fa-angle-right": function(e, t) {
                this.open(t)
            }
        },
        on: {
            onAfterLoad: function() {
                this.select(12)
            }
        }
    }, a = {
        type: "clean",
        rows: [t, i]
    };
    return {
        $ui: a
    }
}), 

define("views/modules/data_progress", ["models/data_arrays"], function(e) {
    var t = {
        view: "toolbar",
        css: "highlighted_header header4",
        paddingX: 5,
        paddingY: 5,
        height: 40,
        cols: [{
            template: "<span class='webix_icon fa-adjust'></span>Progress",
            css: "sub_title2",
            borderless: !0
        }, {
            view: "button",
            type: "iconButton",
            icon: "sliders",
            label: "Update",
            width: 100
        }]
    }, i = {
        view: "datatable",
        columns: [{
            id: "id",
            header: "",
            width: 35,
            sort: "int"
        }, {
            id: "name",
            header: "Task",
            fillspace: 4,
            sort: "string"
        }, {
            id: "progress",
            header: "Progress",
            sort: "int",
            fillspace: 2.5,
            template: function(e) {
                var t = "<div class='progress_bar_element'>",
                    i = "progress_result " + (e.type || "");
                return t += "<div title='" + (parseInt(100 * e.progress, 10) + "%") + "' class='" + i + "' style='width:" + (100 * e.progress + "%") + "'></div>", t + "</div>"
            }
        }, {
            id: "num",
            header: "Num, %",
            sort: function(e, t) {
                return e = e.progress, t = t.progress, e > t ? 1 : t > e ? -1 : 0
            },
            fillspace: 1.5,
            template: function(e) {
                return parseInt(100 * e.progress, 10) + "%"
            }
        }],
        autoheight: !0,
        data: e.progress
    }, a = {
        type: "clean",
        rows: [t, i]
    };
    return {
        $ui: a
    }
}), 

define("views/modules/data_spans", ["models/data_arrays"], function(e) {
    var t = {
        view: "toolbar",
        css: "highlighted_header header2",
        paddingX: 5,
        paddingY: 5,
        height: 40,
        cols: [{
            template: "<span class='webix_icon fa-arrows-v'></span>Spans",
            css: "sub_title2",
            borderless: !0
        }, {
            view: "icon",
            icon: "refresh",
            width: 40
        }]
    }, i = {
        view: "datatable",
        columns: [{
            id: "region",
            header: "Region",
            fillspace: 1
        }, {
            id: "name",
            header: "Product",
            fillspace: 2
        }, {
            id: "code",
            header: "Code",
            fillspace: 1,
            tooltip: "",
            editor: "text"
        }, {
            id: "sales",
            header: "Sales",
            fillspace: 1
        }],
        spans: !0,
        autoheight: !0,
        select: "cell",
        data: e.colspans
    }, a = {
        type: "clean",
        rows: [t, i]
    };
    return {
        $ui: a
    }
}), 

define("models/orders", [], function() {
    var e = [{
        id: 1,
        date: "2014-03-20",
        employee: "Ray M. Parra",
        customer: "Sabrina N. Hermann",
        status: "new",
        fee: 12.5,
        taxes: 23.028,
        total: 323.378,
        shipping_company: "Shipping A",
        payment_method: "Credit card"
    }, {
        id: 2,
        date: "2014-03-20",
        employee: "Lane E. Dion",
        customer: "Bradly N. Mauro",
        status: "new",
        fee: 12,
        taxes: 6.528,
        total: 100.128,
        shipping_company: "Shipping C",
        payment_method: "Wire transer"
    }, {
        id: 3,
        date: "2014-03-20",
        employee: "Ray M. Parra",
        customer: "Stepanie P. Lilley",
        status: "ready",
        fee: 25,
        taxes: 54,
        total: 1429,
        shipping_company: "Shipping A",
        payment_method: "Credit card"
    }, {
        id: 4,
        date: "2014-03-20",
        employee: "Sudie V. Goldsmith",
        customer: "Jettie P. Whelan",
        status: "cancelled",
        fee: 10,
        taxes: 41.25,
        total: 1082.5,
        shipping_company: "Shipping A",
        payment_method: "Credit card"
    }, {
        id: 5,
        date: "2014-03-20",
        employee: "Romaine B. Alley",
        customer: "Amee A. Marshall",
        status: "new",
        fee: 12,
        taxes: 9.1257,
        total: 203.6397,
        shipping_company: "Shipping A",
        payment_method: "Wire transer"
    }, {
        id: 6,
        date: "2014-03-20",
        employee: "Jolie P. Sparks",
        customer: "Roxanna C. Cass",
        status: "completed",
        fee: 10,
        taxes: 2.671875,
        total: 119.546875,
        shipping_company: "Shipping B",
        payment_method: "Wire transer"
    }, {
        id: 7,
        date: "2014-03-20",
        employee: "Sherley D. Berryman",
        customer: "Ashleigh G. Denham",
        status: "completed",
        fee: 26,
        taxes: 149.2638,
        total: 1419.1288,
        shipping_company: "Shipping B",
        payment_method: "Credit card"
    }, {
        id: 8,
        date: "2014-05-15",
        employee: "Lane E. Dion",
        customer: "Reba H. Casteel",
        status: "new",
        fee: 33,
        taxes: 54.23,
        total: 1522.63,
        shipping_company: "Shipping B",
        payment_method: "Cash"
    }, {
        id: 9,
        date: "2014-05-16",
        employee: "Ray M. Parra",
        customer: "Stepanie P. Lilley",
        status: "ready",
        fee: 56.2,
        taxes: 22.1,
        total: 854.3,
        shipping_company: "Shipping D",
        payment_method: "Cash"
    }, {
        id: 10,
        date: "2014-05-16",
        employee: "Sudie V. Goldsmith",
        customer: "Bradly N. Mauro",
        status: "new",
        fee: 10,
        taxes: 12,
        total: 454,
        shipping_company: "Shipping E",
        payment_method: "Credit Card"
    }, {
        id: 11,
        date: "2014-05-16",
        employee: "Romaine B. Alley",
        customer: "Sabrina N. Hermann",
        status: "cancelled",
        fee: 85,
        taxes: 42,
        total: 987,
        shipping_company: "Shipping A",
        payment_method: "Wire Transfer"
    }, {
        id: 12,
        date: "2014-05-16",
        employee: "Ray M. Parra",
        customer: "Roxanna C. Cass",
        status: "completed",
        fee: 20,
        taxes: 8,
        total: 456,
        shipping_company: "Shipping G",
        payment_method: "Credit Card"
    }, {
        id: 13,
        date: "2014-08-11",
        employee: "Jolie P. Sparks",
        customer: "Bradly N. Mauro",
        status: "new",
        fee: 13,
        taxes: 1,
        total: 255,
        shipping_company: "Shipping A",
        payment_method: "Cash"
    }, {
        id: 14,
        date: "2014-08-11",
        employee: "Sudie V. Goldsmith",
        customer: "Stephen H. Peachey",
        status: "new",
        fee: 63,
        taxes: 12,
        total: 1522,
        shipping_company: "Shipping B",
        payment_method: "Wire Transfer"
    }, {
        id: 15,
        date: "2014-08-11",
        employee: "Sherley D. Berryman",
        customer: "Sabrina N. Hermann",
        status: "ready",
        fee: 78,
        taxes: 45,
        total: 1788,
        shipping_company: "Shipping A",
        payment_method: "Wire Transfer"
    }, {
        id: 16,
        date: "2014-08-11",
        employee: "Ray M. Parra",
        customer: "Regine H.Field",
        status: "ready",
        fee: 14,
        taxes: 4,
        total: 988,
        shipping_company: "Shipping A",
        payment_method: "Cash"
    }, {
        id: 17,
        date: "2014-08-11",
        employee: "Romaine B. Alley",
        customer: "Stephane A. Chandler",
        status: "completed",
        fee: 0,
        taxes: 0,
        total: 0,
        shipping_company: "Shipping C",
        payment_method: "Credit Card"
    }, {
        id: 18,
        date: "2014-08-11",
        employee: "Jamila N. Mccallister",
        customer: "Olimpia C. Whelan",
        status: "new",
        fee: 55,
        taxes: 13,
        total: 2100,
        shipping_company: "Shipping E",
        payment_method: "Credit Card"
    }, {
        id: 19,
        date: "2014-08-11",
        employee: "Romaine B. Alley",
        customer: "Jettie P. Whelan",
        status: "ready",
        fee: 18,
        taxes: 8,
        total: 956,
        shipping_company: "Shipping A",
        payment_method: "Wire Transfer"
    }, {
        id: 20,
        date: "2014-08-11",
        employee: "Lane E. Dion",
        customer: "Stepanie P. Lilley",
        status: "completed",
        fee: 133,
        taxes: 33,
        total: 754,
        shipping_company: "Shipping D",
        payment_method: "Cash"
    }, {
        id: 111,
        date: "2014-03-20",
        employee: "Ray M. Parra",
        customer: "Sabrina N. Hermann",
        status: "new",
        fee: 12.5,
        taxes: 23.028,
        total: 323.378,
        shipping_company: "Shipping A",
        payment_method: "Credit card"
    }, {
        id: 112,
        date: "2014-03-20",
        employee: "Lane E. Dion",
        customer: "Bradly N. Mauro",
        status: "new",
        fee: 12,
        taxes: 6.528,
        total: 100.128,
        shipping_company: "Shipping C",
        payment_method: "Wire transer"
    }, {
        id: 113,
        date: "2014-03-20",
        employee: "Ray M. Parra",
        customer: "Stepanie P. Lilley",
        status: "ready",
        fee: 25,
        taxes: 54,
        total: 1429,
        shipping_company: "Shipping A",
        payment_method: "Credit card"
    }, {
        id: 114,
        date: "2014-03-20",
        employee: "Sudie V. Goldsmith",
        customer: "Jettie P. Whelan",
        status: "cancelled",
        fee: 10,
        taxes: 41.25,
        total: 1082.5,
        shipping_company: "Shipping A",
        payment_method: "Credit card"
    }, {
        id: 115,
        date: "2014-03-20",
        employee: "Romaine B. Alley",
        customer: "Amee A. Marshall",
        status: "new",
        fee: 12,
        taxes: 9.1257,
        total: 203.6397,
        shipping_company: "Shipping A",
        payment_method: "Wire transer"
    }, {
        id: 116,
        date: "2014-03-20",
        employee: "Jolie P. Sparks",
        customer: "Roxanna C. Cass",
        status: "completed",
        fee: 10,
        taxes: 2.671875,
        total: 119.546875,
        shipping_company: "Shipping B",
        payment_method: "Wire transer"
    }, {
        id: 117,
        date: "2014-03-20",
        employee: "Sherley D. Berryman",
        customer: "Ashleigh G. Denham",
        status: "completed",
        fee: 26,
        taxes: 149.2638,
        total: 1419.1288,
        shipping_company: "Shipping B",
        payment_method: "Credit card"
    }, {
        id: 118,
        date: "2014-05-15",
        employee: "Lane E. Dion",
        customer: "Reba H. Casteel",
        status: "new",
        fee: 33,
        taxes: 54.23,
        total: 1522.63,
        shipping_company: "Shipping B",
        payment_method: "Cash"
    }, {
        id: 119,
        date: "2014-05-16",
        employee: "Ray M. Parra",
        customer: "Stepanie P. Lilley",
        status: "ready",
        fee: 56.2,
        taxes: 22.1,
        total: 854.3,
        shipping_company: "Shipping D",
        payment_method: "Cash"
    }, {
        id: 1110,
        date: "2014-05-16",
        employee: "Sudie V. Goldsmith",
        customer: "Bradly N. Mauro",
        status: "new",
        fee: 10,
        taxes: 12,
        total: 454,
        shipping_company: "Shipping E",
        payment_method: "Credit Card"
    }, {
        id: 1111,
        date: "2014-05-16",
        employee: "Romaine B. Alley",
        customer: "Sabrina N. Hermann",
        status: "cancelled",
        fee: 85,
        taxes: 42,
        total: 987,
        shipping_company: "Shipping A",
        payment_method: "Wire Transfer"
    }, {
        id: 1112,
        date: "2014-05-16",
        employee: "Ray M. Parra",
        customer: "Roxanna C. Cass",
        status: "completed",
        fee: 20,
        taxes: 8,
        total: 456,
        shipping_company: "Shipping G",
        payment_method: "Credit Card"
    }, {
        id: 1113,
        date: "2014-08-11",
        employee: "Jolie P. Sparks",
        customer: "Bradly N. Mauro",
        status: "new",
        fee: 13,
        taxes: 1,
        total: 255,
        shipping_company: "Shipping A",
        payment_method: "Cash"
    }, {
        id: 1114,
        date: "2014-08-11",
        employee: "Sudie V. Goldsmith",
        customer: "Stephen H. Peachey",
        status: "new",
        fee: 63,
        taxes: 12,
        total: 1522,
        shipping_company: "Shipping B",
        payment_method: "Wire Transfer"
    }, {
        id: 1115,
        date: "2014-08-11",
        employee: "Sherley D. Berryman",
        customer: "Sabrina N. Hermann",
        status: "ready",
        fee: 78,
        taxes: 45,
        total: 1788,
        shipping_company: "Shipping A",
        payment_method: "Wire Transfer"
    }, {
        id: 1116,
        date: "2014-08-11",
        employee: "Ray M. Parra",
        customer: "Regine H.Field",
        status: "ready",
        fee: 14,
        taxes: 4,
        total: 988,
        shipping_company: "Shipping A",
        payment_method: "Cash"
    }, {
        id: 1117,
        date: "2014-08-11",
        employee: "Romaine B. Alley",
        customer: "Stephane A. Chandler",
        status: "completed",
        fee: 0,
        taxes: 0,
        total: 0,
        shipping_company: "Shipping C",
        payment_method: "Credit Card"
    }, {
        id: 1118,
        date: "2014-08-11",
        employee: "Jamila N. Mccallister",
        customer: "Olimpia C. Whelan",
        status: "new",
        fee: 55,
        taxes: 13,
        total: 2100,
        shipping_company: "Shipping E",
        payment_method: "Credit Card"
    }, {
        id: 1119,
        date: "2014-08-11",
        employee: "Romaine B. Alley",
        customer: "Jettie P. Whelan",
        status: "ready",
        fee: 18,
        taxes: 8,
        total: 956,
        shipping_company: "Shipping A",
        payment_method: "Wire Transfer"
    }, {
        id: 1120,
        date: "2014-08-11",
        employee: "Lane E. Dion",
        customer: "Stepanie P. Lilley",
        status: "completed",
        fee: 133,
        taxes: 33,
        total: 754,
        shipping_company: "Shipping D",
        payment_method: "Cash"
    }, {
        id: 127,
        date: "2014-03-20",
        employee: "Sherley D. Berryman",
        customer: "Ashleigh G. Denham",
        status: "new",
        fee: 26,
        taxes: 149.2638,
        total: 1419.1288,
        shipping_company: "Shipping B",
        payment_method: "Credit card"
    }, {
        id: 128,
        date: "2014-05-15",
        employee: "Lane E. Dion",
        customer: "Reba H. Casteel",
        status: "new",
        fee: 33,
        taxes: 54.23,
        total: 1522.63,
        shipping_company: "Shipping B",
        payment_method: "Cash"
    }, {
        id: 129,
        date: "2014-05-16",
        employee: "Ray M. Parra",
        customer: "Stepanie P. Lilley",
        status: "new",
        fee: 56.2,
        taxes: 22.1,
        total: 854.3,
        shipping_company: "Shipping D",
        payment_method: "Cash"
    }, {
        id: 21,
        date: "2014-03-21",
        employee: "Ray M. Parra",
        customer: "Sabrina N. Hermann",
        status: "new",
        fee: 12.5,
        taxes: 23.028,
        total: 323.378,
        shipping_company: "Shipping A",
        payment_method: "Credit card"
    }, {
        id: 22,
        date: "2014-03-21",
        employee: "Lane E. Dion",
        customer: "Bradly N. Mauro",
        status: "new",
        fee: 12,
        taxes: 6.528,
        total: 100.128,
        shipping_company: "Shipping C",
        payment_method: "Wire transer"
    }, {
        id: 23,
        date: "2014-03-21",
        employee: "Ray M. Parra",
        customer: "Stepanie P. Lilley",
        status: "ready",
        fee: 25,
        taxes: 54,
        total: 1429,
        shipping_company: "Shipping A",
        payment_method: "Credit card"
    }, {
        id: 24,
        date: "2014-03-21",
        employee: "Sudie V. Goldsmith",
        customer: "Jettie P. Whelan",
        status: "cancelled",
        fee: 10,
        taxes: 41.25,
        total: 1082.5,
        shipping_company: "Shipping A",
        payment_method: "Credit card"
    }, {
        id: 25,
        date: "2014-03-21",
        employee: "Romaine B. Alley",
        customer: "Amee A. Marshall",
        status: "new",
        fee: 12,
        taxes: 9.1257,
        total: 203.6397,
        shipping_company: "Shipping A",
        payment_method: "Wire transer"
    }, {
        id: 26,
        date: "2014-03-21",
        employee: "Jolie P. Sparks",
        customer: "Roxanna C. Cass",
        status: "completed",
        fee: 10,
        taxes: 2.671875,
        total: 119.546875,
        shipping_company: "Shipping B",
        payment_method: "Wire transer"
    }, {
        id: 27,
        date: "2014-03-21",
        employee: "Sherley D. Berryman",
        customer: "Ashleigh G. Denham",
        status: "completed",
        fee: 26,
        taxes: 149.2638,
        total: 1419.1288,
        shipping_company: "Shipping B",
        payment_method: "Credit card"
    }, {
        id: 28,
        date: "2014-05-22",
        employee: "Lane E. Dion",
        customer: "Reba H. Casteel",
        status: "new",
        fee: 33,
        taxes: 54.23,
        total: 1522.63,
        shipping_company: "Shipping B",
        payment_method: "Cash"
    }, {
        id: 29,
        date: "2014-05-22",
        employee: "Ray M. Parra",
        customer: "Stepanie P. Lilley",
        status: "ready",
        fee: 56.2,
        taxes: 22.1,
        total: 854.3,
        shipping_company: "Shipping D",
        payment_method: "Cash"
    }, {
        id: 30,
        date: "2014-05-22",
        employee: "Sudie V. Goldsmith",
        customer: "Bradly N. Mauro",
        status: "new",
        fee: 10,
        taxes: 12,
        total: 454,
        shipping_company: "Shipping E",
        payment_method: "Credit Card"
    }, {
        id: 31,
        date: "2014-05-22",
        employee: "Romaine B. Alley",
        customer: "Sabrina N. Hermann",
        status: "cancelled",
        fee: 85,
        taxes: 42,
        total: 987,
        shipping_company: "Shipping A",
        payment_method: "Wire Transfer"
    }, {
        id: 32,
        date: "2014-05-22",
        employee: "Ray M. Parra",
        customer: "Roxanna C. Cass",
        status: "completed",
        fee: 20,
        taxes: 8,
        total: 456,
        shipping_company: "Shipping G",
        payment_method: "Credit Card"
    }, {
        id: 33,
        date: "2014-08-26",
        employee: "Jolie P. Sparks",
        customer: "Bradly N. Mauro",
        status: "new",
        fee: 13,
        taxes: 1,
        total: 255,
        shipping_company: "Shipping A",
        payment_method: "Cash"
    }, {
        id: 34,
        date: "2014-08-26",
        employee: "Sudie V. Goldsmith",
        customer: "Stephen H. Peachey",
        status: "new",
        fee: 63,
        taxes: 12,
        total: 1522,
        shipping_company: "Shipping B",
        payment_method: "Wire Transfer"
    }, {
        id: 35,
        date: "2014-08-26",
        employee: "Sherley D. Berryman",
        customer: "Sabrina N. Hermann",
        status: "ready",
        fee: 78,
        taxes: 45,
        total: 1788,
        shipping_company: "Shipping A",
        payment_method: "Wire Transfer"
    }, {
        id: 36,
        date: "2014-08-26",
        employee: "Ray M. Parra",
        customer: "Regine H.Field",
        status: "ready",
        fee: 14,
        taxes: 4,
        total: 988,
        shipping_company: "Shipping A",
        payment_method: "Cash"
    }, {
        id: 37,
        date: "2014-08-26",
        employee: "Romaine B. Alley",
        customer: "Stephane A. Chandler",
        status: "completed",
        fee: 0,
        taxes: 0,
        total: 0,
        shipping_company: "Shipping C",
        payment_method: "Credit Card"
    }, {
        id: 38,
        date: "2014-08-26",
        employee: "Jamila N. Mccallister",
        customer: "Olimpia C. Whelan",
        status: "new",
        fee: 55,
        taxes: 13,
        total: 2100,
        shipping_company: "Shipping E",
        payment_method: "Credit Card"
    }, {
        id: 39,
        date: "2014-08-26",
        employee: "Romaine B. Alley",
        customer: "Jettie P. Whelan",
        status: "ready",
        fee: 18,
        taxes: 8,
        total: 956,
        shipping_company: "Shipping A",
        payment_method: "Wire Transfer"
    }, {
        id: 40,
        date: "2014-08-26",
        employee: "Lane E. Dion",
        customer: "Stepanie P. Lilley",
        status: "completed",
        fee: 133,
        taxes: 33,
        total: 754,
        shipping_company: "Shipping D",
        payment_method: "Cash"
    }];
    return {
        getAll: e
    }
}), 

define("views/modules/data_pager", ["models/orders"], function(e) {
    var t = {
        view: "toolbar",
        css: "highlighted_header header5",
        paddingX: 5,
        paddingY: 5,
        height: 40,
        cols: [{
            template: "<span class='webix_icon fa-file-text-o'></span>Pager",
            css: "sub_title2",
            borderless: !0
        }, {
            view: "button",
            type: "iconButton",
            icon: "external-link",
            label: "Export",
            width: 100
        }, {
            view: "button",
            type: "iconButton",
            icon: "pencil-square-o",
            label: "Edit",
            width: 80
        }]
    }, i = {
        margin: 10,
        rows: [{
            id: "orderData",
            view: "datatable",
            select: !0,
            columns: [{
                id: "id",
                header: "#",
                width: 50
            }, {
                id: "employee",
                header: ["Employee", {
                    content: "selectFilter"
                }],
                sort: "string",
                minWidth: 150,
                fillspace: 1
            }, {
                id: "customer",
                header: ["Customer", {
                    content: "selectFilter"
                }],
                sort: "string",
                minWidth: 150,
                fillspace: 1
            }, {
                id: "status",
                header: "Status",
                sort: "string",
                width: 90
            }, {
                id: "fee",
                header: "Fee",
                width: 90,
                sort: "string",
                format: webix.i18n.priceFormat
            }, {
                id: "taxes",
                header: "Taxes",
                width: 90,
                sort: "string",
                format: webix.i18n.priceFormat
            }, {
                id: "total",
                header: "Total",
                width: 90,
                sort: "string",
                format: webix.i18n.priceFormat
            }, {
                id: "shipping_company",
                header: "Shipping Company",
                sort: "string"
            }, {
                id: "payment_method",
                header: "Payment method",
                width: 130,
                sort: "string"
            }, {
                id: "date",
                header: "Date",
                sort: "string",
                width: 100
            }, {
                id: "trash",
                header: "&nbsp;",
                width: 35,
                template: "<span  style='color:#777777; cursor:pointer;' class='webix_icon fa-trash-o'></span>"
            }],
            "export": !0,
            on: {
                onAfterLoad: function() {
                    this.select(4)
                }
            },
            onClick: {
                webix_icon: function(e, t) {
                    webix.confirm({
                        text: "Are you sure sdfds",
                        ok: "Yes",
                        cancel: "Cancel",
                        callback: function(e) {
                            e && webix.$$("orderData").remove(t)
                        }
                    })
                }
            },
            autoheight: !0,
            data: e.getAll,
            pager: "pagerA"
        }, {
            view: "pager",
            id: "pagerA",
            size: 5,
            height: 35,
            group: 5
        }]
    }, a = {
        type: "clean",
        rows: [t, i]
    };
    return {
        $ui: a
    }
}), 

define("views/datatables", ["views/modules/data_rating", "views/modules/data_treetable", "views/modules/data_progress", "views/modules/data_spans", "views/modules/data_pager"], function(e, t, i, a, n) {
    var r = {
        type: "space",
        rows: [{
            type: "wide",
            cols: [{
                type: "wide",
                rows: [e, t]
            }, {
                type: "wide",
                gravity: .8,
                rows: [i, a]
            }]
        },
            n
        ]
    };
    return {
        $ui: r
    }
}), 

define("models/files", [], function() {
    var e = [{
        id: "files",
        value: "Files",
        open: !0,
        data: [{
            id: "documents",
            value: "Documents",
            open: !0,
            data: [{
                id: "presentations",
                value: "Presentations"
            }, {
                id: "reports",
                value: "Reports",
                open: !0,
                data: [{
                    id: "usa",
                    value: "USA"
                }, {
                    id: "europe",
                    value: "Europe"
                }, {
                    id: "asia",
                    value: "Asia"
                }]
            }]
        }, {
            id: "images",
            value: "Images",
            open: !0,
            data: [{
                id: "thumbnails",
                value: "Thumbnails"
            }, {
                id: "base",
                value: "Base images"
            }]
        }, {
            id: "video",
            value: "Video"
        }]
    }];
    files = [{
        id: "documents",
        value: "Documents",
        pId: "files"
    }, {
        id: "presentations",
        value: "Presentations",
        pId: "documents"
    }, {
        id: "reports",
        value: "Reports",
        pId: "documents"
    }, {
        id: "usa",
        value: "USA",
        pId: "reports"
    }, {
        id: "europe",
        value: "Europe",
        pId: "reports"
    }, {
        id: "asia",
        value: "Asia",
        pId: "reports"
    }, {
        id: "images",
        value: "Images",
        pId: "files"
    }, {
        id: "thumbnails",
        value: "Thumbnails",
        pId: "images"
    }, {
        id: "base",
        value: "Base images",
        pId: "images"
    }, {
        id: "video",
        value: "Video",
        pId: "files"
    }, {
        id: "video1",
        value: "New Year 2013.avi",
        icon: "file-video-o",
        type: "video",
        date: "2014-01-01 16:01",
        size: "25.83 MB",
        pId: "video"
    }, {
        id: "video2",
        value: "Presentation.avi",
        icon: "file-video-o",
        type: "video",
        date: "2014-10-04 12:05",
        size: "110.72 MB",
        pId: "video"
    }, {
        id: "pres1",
        value: "October 2014.ppt",
        icon: "file-powerpoint-o",
        type: "pp",
        date: "2014-03-10 16:01",
        size: "12.83 KB",
        pId: "presentations"
    }, {
        id: "pres2",
        value: "June 2014.ppt",
        icon: "file-powerpoint-o",
        type: "pp",
        date: "2014-03-10 16:03",
        size: "20.10 KB",
        pId: "presentations"
    }, {
        id: "pres3",
        value: "April 2014.ppt",
        icon: "file-powerpoint-o",
        type: "pp",
        date: "2014-03-10 16:04",
        size: "15.75 KB",
        pId: "presentations"
    }, {
        id: "pres4",
        value: "November 2013.ppt",
        icon: "file-powerpoint-o",
        type: "pp",
        date: "2014-03-10 16:05",
        size: "13.13 KB",
        pId: "presentations"
    }, {
        id: "salesUS",
        value: "Sales USA.ppt",
        icon: "file-excel-o",
        type: "ex",
        date: "2014-03-10 16:01",
        size: "12.83 KB",
        pId: "usa"
    }, {
        id: "overviewUS",
        value: "Overview USA.doc",
        icon: "file-text-o",
        type: "doc",
        date: "2014-03-10 16:01",
        size: "15.03 KB",
        pId: "usa"
    }, {
        id: "pricesUS",
        value: "Prices USA.ppt",
        icon: "file-excel-o",
        type: "ex",
        date: "2014-03-10 16:01",
        size: "15.83 KB",
        pId: "usa"
    }, {
        id: "productsUS",
        value: "Products USA.ppt",
        icon: "file-excel-o",
        type: "ex",
        date: "2014-03-10 16:01",
        size: "20.83 KB",
        pId: "usa"
    }, {
        id: "salesEurope",
        value: "Sales Europe.ppt",
        icon: "file-excel-o",
        type: "ex",
        date: "2014-03-10 16:01",
        size: "12.83 KB",
        pId: "europe"
    }, {
        id: "pricesEurope",
        value: "Prices Europe.ppt",
        icon: "file-excel-o",
        type: "ex",
        date: "2014-03-10 16:01",
        size: "15.83 KB",
        pId: "europe"
    }, {
        id: "productsEurope",
        value: "Products Europe.ppt",
        icon: "file-excel-o",
        type: "ex",
        date: "2014-03-10 16:01",
        size: "20.83 KB",
        pId: "europe"
    }, {
        id: "overviewEurope",
        value: "Overview Europe.doc",
        icon: "file-text-o",
        type: "doc",
        date: "2014-03-10 16:01",
        size: "15.03 KB",
        pId: "europe"
    }, {
        id: "salesAsia",
        value: "Sales Asia.ppt",
        icon: "file-excel-o",
        type: "ex",
        date: "2014-03-10 16:01",
        size: "12.83 KB",
        pId: "asia"
    }, {
        id: "pricesAsia",
        value: "Prices Asia.ppt",
        icon: "file-excel-o",
        type: "ex",
        date: "2014-03-10 16:01",
        size: "15.83 KB",
        pId: "asia"
    }, {
        id: "overviewAsia",
        value: "Overview Asia.doc",
        icon: "file-text-o",
        type: "doc",
        date: "2014-03-10 16:01",
        size: "15.03 KB",
        pId: "asia"
    }, {
        id: "productsAsia",
        value: "Products Asia.ppt",
        icon: "file-excel-o",
        type: "ex",
        date: "2014-03-10 16:01",
        size: "20.83 KB",
        pId: "asia"
    }, {
        id: "thumbnails1",
        value: "Product 1-th.jpg",
        icon: "file-image-o",
        type: "img",
        date: "2014-03-10 16:01",
        size: "34.83 KB",
        pId: "thumbnails"
    }, {
        id: "thumbnails2",
        value: "Product 2-th.jpg",
        icon: "file-image-o",
        type: "img",
        date: "2014-03-10 16:03",
        size: "40.10 KB",
        pId: "thumbnails"
    }, {
        id: "thumbnails3",
        value: "Product 3-th.jpg",
        icon: "file-image-o",
        type: "img",
        date: "2014-03-10 16:04",
        size: "33.75 KB",
        pId: "thumbnails"
    }, {
        id: "thumbnails4",
        value: "Product 4-th.jpg",
        icon: "file-image-o",
        type: "img",
        date: "2014-03-10 16:05",
        size: "35.13 KB",
        pId: "thumbnails"
    }, {
        id: "thumbnails5",
        value: "Product 5-th.jpg",
        icon: "file-image-o",
        type: "img",
        date: "2014-03-10 16:06",
        size: "34.72  KB",
        pId: "thumbnails"
    }, {
        id: "thumbnails6",
        value: "Product 6-th.jpg",
        icon: "file-image-o",
        type: "img",
        date: "2014-03-10 16:08",
        size: "37.06  KB",
        pId: "thumbnails"
    }, {
        id: "base1",
        value: "Product 1.jpg",
        icon: "file-image-o",
        type: "img",
        date: "2014-03-10 16:01",
        size: "74.83 KB",
        pId: "base"
    }, {
        id: "base2",
        value: "Product 2.jpg",
        icon: "file-image-o",
        type: "img",
        date: "2014-03-10 16:03",
        size: "80.10 KB",
        pId: "base"
    }, {
        id: "base3",
        value: "Product 3.jpg",
        icon: "file-image-o",
        type: "img",
        date: "2014-03-10 16:04",
        size: "73.75 KB",
        pId: "base"
    }, {
        id: "base4",
        value: "Product 4.jpg",
        icon: "file-image-o",
        type: "img",
        date: "2014-03-10 16:05",
        size: "75.13 KB",
        pId: "base"
    }, {
        id: "base5",
        value: "Product 5.jpg",
        icon: "file-image-o",
        type: "img",
        date: "2014-03-10 16:06",
        size: "74.72 KB",
        pId: "base"
    }, {
        id: "base6",
        value: "Product 6.jpg",
        icon: "file-image-o",
        type: "img",
        date: "2014-03-10 16:08",
        size: "77.06 KB",
        pId: "base"
    }, {
        id: "video1",
        value: "New Year 2013.avi",
        icon: "file-video-o",
        type: "video",
        date: "2014-01-01 16:01",
        size: "25.83 MB",
        pId: "video"
    }, {
        id: "video2",
        value: "Presentation.avi",
        icon: "file-video-o",
        type: "video",
        date: "2014-10-04 12:05",
        size: "110.72 MB",
        pId: "video"
    }, {
        id: "video3",
        value: "Conference.avi",
        icon: "file-video-o",
        type: "video",
        date: "2014-11-03 18:05",
        size: "312.56 MB",
        pId: "video"
    }];
    for (var t = 1; 100 > t; t++) files.push({
        pId: "files",
        value: "backup." + (10 > t ? "00" : "0") + t + ".zip",
        icon: "file-zip-o",
        type: "zip",
        size: "500 MB"
    });
    return {
        folders: e,
        files: files
    }
}), 

webix.protoUI({name: "edittree"
}, webix.EditAbility, webix.ui.tree), 

define("views/webix/editable", function() {}), 

webix.type(webix.ui.tree, {
    name: "fileTree",
    css: "file",
    height: 40,
    templateCommon: webix.template("{common.icon()} <div class='folder_title'>{common.folder()} #value#</div>"),
    folder: function(e) {
        return "<span class='webix_icon icon fa-folder" + (e.open ? "-open" : e.$level > 3 ? "-o" : "") + "'></span>"
    }
}), 

define("views/webix/filetree", function() {}), 

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
}), 

webix.type(webix.ui.dataview, {
    name: "fileView",
    css: "files",
    height: 80,
    width: 150,
    template: function(e) {
        var t = e.icon || "folder-o";
        return "<div class='" + (e.type || "folder") + "'><span class='webix_icon fa-" + t + "'></span></div>" + e.value
    }
}), 

define("views/webix/fileview", function() {}), 

define("views/files", ["models/files", "views/modules/edittree", "views/webix/fileview"], function(e, t) {
    var i = {
        type: "space",
        rows: [{
            view: "form",
            paddingX: 5,
            paddingY: 5,
            cols: [{
                view: "button",
                type: "icon",
                icon: "folder-o",
                label: "New folder",
                width: 120,
                click: function() {
                    $$("fileTree").add({
                        value: "New folder"
                    }, 0, $$("fileTree").getSelectedId())
                }
            }, {
                view: "button",
                type: "icon",
                icon: "pencil-square-o",
                label: "Rename",
                width: 100,
                click: function() {
                    $$("fileTree").edit($$("fileTree").getSelectedId())
                }
            }, {
                view: "button",
                type: "icon",
                icon: "refresh",
                label: "Refresh",
                width: 100
            }, {
                view: "button",
                type: "icon",
                icon: "times",
                label: "Delete",
                width: 95
            }, {}, {
                view: "button",
                type: "icon",
                icon: "plus",
                label: "Upload",
                width: 100,
                click: function() {
                    $$("fileUploadAPI").fileDialog({})
                }
            }]
        }, {
            type: "wide",
            cols: [{
                width: 330,
                rows: [t, {
                    view: "form",
                    css: "highlighted_header header6",
                    paddingX: 5,
                    paddingY: 5,
                    height: 40,
                    elements: [{
                        view: "text",
                        label: "Path:",
                        labelAlign: "right",
                        labelWidth: 60,
                        id: "path"
                    }]
                }]
            }, {
                view: "resizer"
            }, {
                view: "dataview",
                edit: !0,
                select: !0,
                id: "filesView",
                type: "fileView",
                drag: !0,
                onDblClick: {
                    webix_dataview_item: function(e, t) {
                        $$("fileTree").exists(t) && $$("fileTree").select(t)
                    }
                }
            }]
        }]
    };
    return {
        $ui: i,
        $oninit: function() {
            $$("filesView").parse(e.files), $$("fileTree").select("files"), webix.ui({
                id: "fileUploadAPI",
                view: "uploader",
                upload: "server/upload.php",
                on: {
                    onFileUploadError: function() {
                        webix.alert("Error during file upload")
                    }
                },
                apiOnly: !0
            }), $$("filesView").attachEvent("onDestruct", function() {
                $$("fileUploadAPI").destructor()
            })
        }
    }
}), 

define("views/modules/form_user", [], function() {
    var e = {
        type: "clean",
        rows: [{
            view: "toolbar",
            css: "highlighted_header header1",
            paddingX: 5,
            paddingY: 5,
            height: 40,
            cols: [{
                template: "<span class='webix_icon fa-male'></span>User",
                css: "sub_title2",
                borderless: !0
            }, {
                view: "button",
                label: "Close",
                width: 80
            }]
        }, {
            view: "form",
            id: "userForm",
            elementsConfig: {
                labelWidth: 120
            },
            elements: [{
                view: "text",
                label: "First Name",
                name: "name1"
            }, {
                view: "text",
                label: "Last Name",
                name: "name2"
            }, {
                view: "datepicker",
                label: "Date of Birth",
                name: "date"
            }, {
                view: "text",
                label: "Phone Number"
            }, {
                margin: 10,
                paddingX: 2,
                borderless: !0,
                cols: [{}, {
                    view: "button",
                    label: "Reset",
                    align: "right"
                }, {
                    view: "button",
                    label: "Save",
                    type: "form",
                    align: "right"
                }]
            }]
        }]
    };
    return {
        $ui: e
    }
}), 

define("views/modules/form_project", [], function() {
    var e = {
        type: "clean",
        rows: [{
            view: "toolbar",
            css: "highlighted_header header2",
            paddingX: 5,
            paddingY: 5,
            height: 40,
            cols: [{
                template: "<span class='webix_icon fa-sliders'></span>Project",
                css: "sub_title2",
                borderless: !0
            }, {
                view: "richselect",
                value: "Webix",
                options: ["Webix", "Kanban", "Pivot"],
                width: 105
            }]
        }, {
            view: "form",
            id: "projectForm",
            elementsConfig: {
                labelWidth: 100
            },
            elements: [{
                view: "slider",
                css: "slider3",
                label: "Task 1",
                value: "80",
                step: 1,
                name: "s1",
                title: webix.template("#value#%")
            }, {
                view: "slider",
                css: "slider2",
                label: "Task 2",
                value: "20",
                step: 1,
                name: "s2",
                title: webix.template("#value#%")
            }, {
                view: "slider",
                css: "slider1",
                label: "Task 3",
                value: "60",
                step: 1,
                name: "s3",
                title: webix.template("#value#%")
            }, {
                margin: 10,
                paddingX: 2,
                borderless: !0,
                cols: [{}, {
                    view: "button",
                    label: "Next",
                    type: "form",
                    align: "right",
                    width: 80
                }]
            }]
        }]
    };
    return {
        $ui: e
    }
}), 

define("views/modules/form_event", [], function() {
    var e = {
        type: "clean",
        rows: [{
            view: "toolbar",
            css: "highlighted_header header3",
            paddingX: 5,
            paddingY: 5,
            height: 40,
            cols: [{
                template: "<span class='webix_icon fa-star-o'></span>Event",
                css: "sub_title2",
                borderless: !0
            }, {
                view: "button",
                label: "Close",
                width: 80
            }]
        }, {
            view: "form",
            elementsConfig: {
                labelWidth: 100
            },
            elements: [{
                view: "text",
                label: "Event Name"
            }, {
                view: "datepicker",
                label: "Start Date",
                value: new Date,
                timepicker: !0,
                format: "%H:%i %D, %d %M"
            }, {
                view: "datepicker",
                label: "End Date",
                value: webix.Date.add(new Date, 1, "hour"),
                format: "%H:%i %D, %d %M",
                timepicker: !0
            }, {
                view: "checkbox",
                label: "All-day"
            }, {
                view: "richselect",
                label: "Calendar",
                value: "1",
                options: [{
                    id: 1,
                    value: "My Calendar"
                }, {
                    id: 2,
                    value: "Webix project"
                }, {
                    id: 3,
                    value: "Other"
                }]
            }, {
                view: "textarea",
                label: "Details",
                height: 80
            }, {
                margin: 10,
                paddingX: 2,
                borderless: !0,
                cols: [{}, {
                    view: "button",
                    label: "Reset",
                    align: "right"
                }, {
                    view: "button",
                    label: "Save",
                    type: "form",
                    align: "right"
                }]
            }]
        }]
    };
    return {
        $ui: e
    }
}), 

define("views/modules/form_style", [], function() {
    var e = {
        type: "clean",
        rows: [{
            view: "toolbar",
            css: "highlighted_header header4",
            paddingX: 5,
            paddingY: 5,
            height: 40,
            cols: [{
                template: "<span class='webix_icon fa-paint-brush'></span>Style",
                css: "sub_title2",
                borderless: !0
            }, {
                view: "segmented",
                options: ["Header", "Content", "Buttons"],
                width: 210
            }]
        }, {
            view: "form",
            elementsConfig: {
                labelWidth: 100,
                labelPosition: "top"
            },
            elements: [{
                view: "combo",
                label: "Font Family",
                value: "Arial",
                options: ["Arial", "Tahoma", "Verdana"]
            }, {
                view: "radio",
                name: "fontWeigth",
                label: "Font Weigth",
                value: "400",
                options: ["400", "500", "700"]
            }, {
                view: "colorpicker",
                label: "Background",
                value: "#a693eb"
            }, {
                view: "colorpicker",
                label: "Font Color",
                value: "#a4b4bf"
            }, {
                view: "text",
                label: "Font Size (px)",
                value: "14"
            }, {
                margin: 10,
                paddingX: 2,
                borderless: !0,
                cols: [{}, {
                    view: "button",
                    type: "iconButton",
                    icon: "angle-left",
                    label: "Back",
                    align: "right",
                    width: 90
                }, {
                    view: "button",
                    type: "form",
                    label: "Done",
                    align: "right",
                    width: 90
                }]
            }]
        }]
    };
    return {
        $ui: e
    }
}), 

define("views/forms", ["views/modules/form_user", "views/modules/form_project", "views/modules/form_event", "views/modules/form_style"], function(e, t, i, a) {
    var n = {
        type: "space",
        cols: [{
            type: "wide",
            rows: [e, i]
        }, {
            type: "wide",
            rows: [a, t]
        }]
    };
    return {
        $ui: n
    }
}), 

define("views/forms/order", [], function() {
    return {
        $ui: {
            view: "window",
            modal: !0,
            id: "order-win",
            position: "center",
            head: "Add new order",
            body: {
                paddingY: 20,
                paddingX: 30,
                elementsConfig: {
                    labelWidth: 140
                },
                view: "form",
                id: "order-form",
                elements: [{
                    view: "combo",
                    name: "customer",
                    label: "Customer",
                    id: "order-customer",
                    options: [{
                        id: "1",
                        value: "Virgen C. Holcombe"
                    }, {
                        id: "2",
                        value: "Tory H. Ventura"
                    }, {
                        id: "3",
                        value: "Jacquline A. Coats"
                    }, {
                        id: "4",
                        value: "Jamila N. Mccallister"
                    }, {
                        id: "5",
                        value: "Sabrina N. Hermann"
                    }, {
                        id: "6",
                        value: "Bradly N. Mauro"
                    }, {
                        id: "7",
                        value: "Ashleigh G. Denham"
                    }, {
                        id: "8",
                        value: "Stephen H. Peachey"
                    }, {
                        id: "9",
                        value: "Amado T. Cano"
                    }, {
                        id: "10",
                        value: "Olimpia C. Whelan"
                    }, {
                        id: "11",
                        value: "Regine H. Field"
                    }, {
                        id: "12",
                        value: "Roxanna C. Cass"
                    }, {
                        id: "13",
                        value: "Reba H. Casteel"
                    }, {
                        id: "14",
                        value: "Jettie P. Whelan"
                    }, {
                        id: "15",
                        value: "Sherry G. Richards"
                    }, {
                        id: "16",
                        value: "Stephane A. Chandler"
                    }, {
                        id: "17",
                        value: "Amee A. Marshall"
                    }],
                    width: 350
                }, {
                    view: "combo",
                    name: "employee",
                    label: "Salesperson",
                    id: "order-sales",
                    options: [{
                        id: "1",
                        value: "Ray M. Parra"
                    }, {
                        id: "2",
                        value: "Suellen G. Ritter"
                    }, {
                        id: "3",
                        value: "Janelle P. Blunt"
                    }, {
                        id: "4",
                        value: "Cristopher B. Acker"
                    }, {
                        id: "5",
                        value: "Lane E. Dion"
                    }, {
                        id: "6",
                        value: "Rossana M. Mcknight"
                    }, {
                        id: "7",
                        value: "Becki P. Perryman"
                    }, {
                        id: "8",
                        value: "Jolie P. Sparks"
                    }, {
                        id: "9",
                        value: "Shirley M. Mattingly"
                    }, {
                        id: "10",
                        value: "Rosario H. Mccracken"
                    }, {
                        id: "11",
                        value: "Sudie M. Goldsmith"
                    }, {
                        id: "12",
                        value: "Sherley D. Berryman"
                    }, {
                        id: "13",
                        value: "Romaine B. Alley"
                    }, {
                        id: "14",
                        value: "Giovanni B. Weston"
                    }]
                }, {
                    view: "combo",
                    name: "product",
                    label: "Product",
                    id: "order-product",
                    options: [{
                        id: 1,
                        value: "Webix Chai"
                    }, {
                        id: 2,
                        value: "Webix Syrup"
                    }, {
                        id: 3,
                        value: "Webix Cajun Seasoning"
                    }, {
                        id: 4,
                        value: "Webix Olive Oil"
                    }, {
                        id: 5,
                        value: "Webix Boysenberry Spread"
                    }, {
                        id: 6,
                        value: "Webix Dried Pears"
                    }, {
                        id: 7,
                        value: "Webix Curry Sauce"
                    }, {
                        id: 8,
                        value: "Webix Walnuts"
                    }, {
                        id: 9,
                        value: "Webix Fruit Cocktail"
                    }, {
                        id: 10,
                        value: "Webix Chocolate Biscuits Mix"
                    }, {
                        id: 11,
                        value: "Webix Marmalade"
                    }, {
                        id: 12,
                        value: "Webix Scones"
                    }, {
                        id: 13,
                        value: "Webix Beer"
                    }, {
                        id: 14,
                        value: "Webix Crab Meat"
                    }, {
                        id: 15,
                        value: "Webix Clam Chowder"
                    }, {
                        id: 16,
                        value: "Webix Coffee"
                    }, {
                        id: 17,
                        value: "Webix Chocolate"
                    }]
                }, {
                    view: "combo",
                    name: "shipment",
                    label: "Shipping Company",
                    id: "shipping_company",
                    options: ["Shipping A", "Shipping B", "Shipping C", "Shipping D", "Shipping E", "Shipping F", "Shipping G"]
                }, {
                    view: "datepicker",
                    label: "Order Date",
                    value: new Date,
                    format: "%d  %M %Y"
                }, {
                    margin: 10,
                    cols: [{}, {
                        view: "button",
                        label: "Add",
                        type: "form",
                        align: "center",
                        width: 120,
                        click: function() {
                            webix.$$("order-win").close()
                        }
                    }, {
                        view: "button",
                        label: "Cancel",
                        align: "center",
                        width: 120,
                        click: function() {
                            webix.$$("order-win").close()
                        }
                    }]
                }]
            }
        }
    }
}), 

define("views/menus/export", [], function() {
    return {
        $ui: {
            view: "submenu",
            id: "exportPopup",
            width: 200,
            padding: 0,
            data: [{
                id: 1,
                icon: "file-excel-o",
                value: "Export To Excel"
            }, {
                id: 2,
                icon: "file-pdf-o",
                value: "Export To PDF"
            }],
            on: {
                onItemClick: function(e) {
                    1 == e ? $$("orderData").exportToExcel() : 2 == e && $$("orderData").exportToPDF()
                }
            }
        }
    }
}), 

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
}, webix.ui.view), 

define("views/webix/ckeditor", function() {}), 

define("views/modules/editor", ["views/webix/ckeditor"], function() {
    var e = {
        view: "form",
        id: "mainView",
        elementsConfig: {
            labelWidth: 130
        },
        scroll: !0,
        elements: [{
            view: "text",
            name: "code",
            label: "Code"
        }, {
            view: "text",
            name: "name",
            label: "Name"
        }, {
            view: "text",
            name: "price",
            label: "Price"
        }, {
            view: "richselect",
            name: "category",
            label: "Category",
            vertical: !0,
            options: [{
                id: 2,
                value: "Home furniture"
            }, {
                id: 3,
                value: "Office furniture"
            }, {
                id: 1,
                value: "Wood furniture"
            }]
        }, {
            view: "richselect",
            name: "status",
            value: "all",
            label: "Status",
            options: [{
                id: "1",
                value: "Published"
            }, {
                id: "2",
                value: "Not published"
            }, {
                id: "0",
                value: "Deleted"
            }]
        }, {
            view: "checkbox",
            name: "in_stock",
            label: "In stock",
            value: 1
        }, {
            view: "label",
            label: "Full description",
            height: 30
        }, {
            id: "editor",
            view: "ckeditor",
            value: "",
            editor: {
                language: "en"
            },
            minHeight: 220
        }, {}]
    }, t = e;
    return {
        $ui: t
    }
}), 

define("views/modules/product_meta", [], function() {
    return {
        $ui: {
            view: "form",
            id: "metaView",
            elementsConfig: {
                labelWidth: 130
            },
            elements: [{
                view: "text",
                name: "meta_title",
                label: "Title"
            }, {
                view: "textarea",
                label: "Meta Keywords",
                gravity: 1,
                minHeight: 80
            }, {
                view: "textarea",
                label: "Meta Description",
                gravity: 1.5,
                minHeight: 80
            }, {}]
        }
    }
}), 

define("models/products", [], function() {
    for (var e = 150, t = [], i = 201, a = 0; e > a; a++) {
        var n = Math.floor(4 * Math.random()),
            r = Math.floor(1001 * Math.random()) + 499,
            o = Math.floor(397 * Math.random()) + 3,
            s = Math.floor(9 * Math.random()),
            l = r > 1100 ? 1 : r > 800 ? 2 : 3;
        t.push({
            id: a + 1,
            code: "WBX" + i,
            name: "Test product " + (a + 1),
            category: l,
            categoryName: 1 == l ? "Wood furniture" : 2 == l ? "Home furniture" : "Office furniture",
            price: r,
            statusName: n > 1 ? "Published" : 1 == n ? "Not published" : "Deleted",
            status: n > 1 ? "1" : 1 == n ? "2" : "0",
            quantity: o,
            in_stock: s > 1
        }), i++
    }
    return {
        getAll: t
    }
}), 

define("views/modules/product_search", ["models/products"], function(e) {
    return {
        $ui: {
            rows: [{
                view: "form",
                paddingX: 5,
                paddingY: 5,
                margin: 2,
                rows: [{
                    view: "label",
                    label: "Find product:"
                }, {
                    view: "search"
                }]
            }, {
                view: "list",
                id: "list",
                select: !0,
                template: "<div class='marker status#status#'></div>#code# / #name#",
                data: e.getAll
            }]
        }
    }
}), 

define("views/modules/product_upload", [], function() {
    return {
        $ui: {
            id: "imagesView",
            padding: 10,
            margin: 10,
            rows: [{
                cols: [{}, {
                    view: "button",
                    type: "iconButton",
                    icon: "plus-circle",
                    label: "Add image record",
                    width: 170
                }]
            }, {
                view: "datatable",
                editable: !0,
                columns: [{
                    id: "photo",
                    header: "Image",
                    template: "<span class='product_image webix_icon fa-#icon#'></span>",
                    fillspace: 1
                }, {
                    id: "title",
                    editor: "text",
                    header: "Title",
                    fillspace: 1.7
                }, {
                    id: "usage",
                    editor: "select",
                    options: ["Main image", "Thumbnail"],
                    header: "Usage",
                    fillspace: 1.2
                }, {
                    id: "upload",
                    header: "Upload",
                    template: "<div title='Click to upload' class='product_image_action'><span class='webix_icon fa-download'></span>Upload</div>",
                    fillspace: 1
                }, {
                    id: "delete",
                    header: "Delete",
                    template: "<div title='Click to delete' class='product_image_action'><span class='webix_icon fa-times'></span>Delete</div>",
                    fillspace: 1
                }],
                autoheight: !0,
                rowHeight: 80,
                data: [{
                    id: 1,
                    title: "Product image 1",
                    usage: "Main image",
                    icon: "camera"
                }, {
                    id: 2,
                    title: "Product image 2",
                    usage: "Thumbnail",
                    icon: "camera"
                }],
                on: {
                    onAfterLoad: function() {
                        webix.ui({
                            id: "uploadAPI",
                            view: "uploader",
                            upload: "server/upload.php",
                            on: {
                                onFileUploadError: function() {
                                    webix.alert("Error during file upload")
                                }
                            },
                            apiOnly: !0
                        })
                    },
                    onItemClick: function(e) {
                        "upload" == e.column && $$("uploadAPI").fileDialog({
                            rowid: e.row
                        })
                    },
                    onDestruct: function() {
                        $$("uploadAPI").destructor()
                    }
                }
            }, {}]
        }
    }
}), 

define("models/topsales", [], function() {
    var e = [{
        productId: 1,
        value: 15e3,
        selection: "month",
        name: "Chai"
    }, {
        productId: 1,
        value: 35e3,
        selection: "month3",
        name: "Chocolate"
    }, {
        productId: 1,
        value: 13e4,
        selection: "year",
        name: "Chai"
    }, {
        productId: 2,
        value: 2e4,
        selection: "month",
        name: "Olive Oil"
    }, {
        productId: 2,
        value: 5e4,
        selection: "month3",
        name: "Olive Oil"
    }, {
        productId: 2,
        value: 14e4,
        selection: "year",
        name: "Olive Oil"
    }, {
        productId: 3,
        value: 17e3,
        selection: "month",
        name: "Coffee"
    }, {
        productId: 3,
        value: 4e4,
        selection: "month3",
        name: "Coffee"
    }, {
        productId: 3,
        value: 12e4,
        selection: "year",
        name: "Coffee"
    }, {
        productId: 4,
        value: 9e3,
        selection: "month",
        name: "Syrup"
    }, {
        productId: 4,
        value: 45e3,
        selection: "month3",
        name: "Marmalade"
    }, {
        productId: 4,
        value: 100500,
        selection: "year",
        name: "Syrup"
    }];
    return {
        getAll: e
    }
}), 

define("views/modules/topsales", ["models/topsales"], function(e) {
    var t = {
        view: "chart",
        borderless: !0,
        type: "bar",
        height: 130,
        id: "productsBar",
        barWidth: 60,
        radius: 0,
        alpha: .9,
        color: function(e) {
            var t = "#a693eb";
            return 2 == e.productId ? t = "#63b4ea" : 3 == e.productId ? t = "#f19b60" : 4 == e.productId && (t = "#49cd81"), t
        },
        yAxis: {
            template: function(e) {
                return parseInt(e, 10)
            }
        },
        xAxis: {
            template: "#name#"
        },
        on: {
            onAfterLoad: function() {
                $$("topSelling").setValue("month")
            }
        },
        padding: {
            top: 0,
            left: 50,
            right: 10,
            bottom: 20
        },
        data: e.getAll
    }, i = {
        type: "form",
        cols: [{
            view: "radio",
            id: "topSelling",
            label: "",
            labelWidth: 0,
            vertical: !0,
            on: {
                onChange: function() {
                    $$("productsBar").filter(function(e) {
                        return e.selection == $$("topSelling").getValue()
                    })
                }
            },
            options: [{
                id: "month",
                value: "Last month"
            }, {
                id: "month3",
                value: "Last 3 months"
            }]
        }]
    }, a = {
        rows: [{
            view: "toolbar",
            paddingX: 5,
            paddingY: 5,
            height: 40,
            css: "highlighted_header header3",
            elements: [{
                template: "<span class='webix_icon fa-bar-chart'></span>Top selling products",
                borderless: !0,
                css: "sub_title2"
            }]
        },
            i, t
        ]
    };
    return {
        $ui: a
    }
}), 

define("views/orders", ["views/forms/order", "views/menus/export", "models/orders"], function(e, t, i) {
    var a = [{
            view: "button",
            type: "iconButton",
            icon: "plus",
            label: "Add order",
            width: 130,
            click: function() {
                this.$scope.ui(e.$ui).show()
            }
        }, {
            view: "button",
            type: "iconButton",
            icon: "external-link",
            label: "Export",
            width: 120,
            popup: t
        }, {}, {
            view: "richselect",
            id: "order_filter",
            value: "all",
            maxWidth: 400,
            minWidth: 250,
            vertical: !0,
            labelWidth: 100,
            options: [{
                id: "all",
                value: "All"
            }, {
                id: "new",
                value: "Need Invoicing"
            }, {
                id: "ready",
                value: "Ready to Ship"
            }, {
                id: "completed",
                value: "Completed"
            }, {
                id: "cancelled",
                value: "Cancelled"
            }],
            label: "Filter orders",
            on: {
                onChange: function() {
                    var e = this.getValue();
                    "all" == e ? $$("orderData").filter("#status#", "") : $$("orderData").filter("#status#", e)
                }
            }
        }],
        n = {
            margin: 10,
            rows: [{
                id: "orderData",
                view: "datatable",
                select: !0,
                columns: [{
                    id: "id",
                    header: "#",
                    width: 50
                }, {
                    id: "employee",
                    header: ["Employee", {
                        content: "selectFilter"
                    }],
                    sort: "string",
                    minWidth: 150,
                    fillspace: 1
                }, {
                    id: "customer",
                    header: ["Customer", {
                        content: "selectFilter"
                    }],
                    sort: "string",
                    minWidth: 150,
                    fillspace: 1
                }, {
                    id: "status",
                    header: "Status",
                    sort: "string",
                    width: 90
                }, {
                    id: "fee",
                    header: "Fee",
                    width: 90,
                    sort: "string",
                    format: webix.i18n.priceFormat
                }, {
                    id: "taxes",
                    header: "Taxes",
                    width: 90,
                    sort: "string",
                    format: webix.i18n.priceFormat
                }, {
                    id: "total",
                    header: "Total",
                    width: 90,
                    sort: "string",
                    format: webix.i18n.priceFormat
                }, {
                    id: "shipping_company",
                    header: "Shipping Company",
                    sort: "string"
                }, {
                    id: "payment_method",
                    header: "Payment method",
                    width: 130,
                    sort: "string"
                }, {
                    id: "date",
                    header: "Date",
                    sort: "string",
                    width: 100
                }, {
                    id: "trash",
                    header: "&nbsp;",
                    width: 35,
                    template: "<span  style='color:#777777; cursor:pointer;' class='webix_icon fa-trash-o'></span>"
                }],
                "export": !0,
                on: {
                    onAfterLoad: function() {
                        this.select(4)
                    }
                },
                pager: "pagerA",
                data: i.getAll,
                onClick: {
                    webix_icon: function(e, t) {
                        webix.confirm({
                            text: "The order will be deleted.<br/> Are you sure?",
                            ok: "Yes",
                            cancel: "Cancel",
                            callback: function(e) {
                                e && webix.$$("orderData").remove(t)
                            }
                        })
                    }
                }
            }]
        }, r = {
            type: "space",
            rows: [{
                height: 40,
                cols: a
            }, {
                rows: [n, {
                    view: "toolbar",
                    css: "highlighted_header header6",
                    paddingX: 5,
                    paddingY: 5,
                    height: 40,
                    cols: [{
                        view: "pager",
                        id: "pagerA",
                        template: "{common.first()}{common.prev()}&nbsp; {common.pages()}&nbsp; {common.next()}{common.last()}",
                        autosize: !0,
                        height: 35,
                        group: 5
                    }]
                }]
            }]
        };
    return {
        $ui: r
    }
}), 

define("views/product_edit", ["views/modules/product_search", "views/modules/editor", "views/modules/product_upload", "views/modules/product_meta"], function(e, t, i, a) {
    var n = {
        type: "space",
        rows: [{
            type: "wide",
            cols: [e, {
                gravity: 2.2,
                rows: [{
                    view: "tabbar",
                    multiview: !0,
                    optionWidth: 130,
                    options: [{
                        id: "mainView",
                        value: "Main"
                    }, {
                        id: "imagesView",
                        value: "Images"
                    }, {
                        id: "metaView",
                        value: "Meta"
                    }]
                }, {
                    cells: [t, i, a]
                }, {
                    view: "form",
                    css: "highlighted_header header6",
                    paddingX: 5,
                    paddingY: 5,
                    height: 40,
                    cols: [{
                        view: "button",
                        type: "form",
                        icon: "plus",
                        label: "Save",
                        width: 90
                    }, {
                        view: "button",
                        css: "button2",
                        icon: "angle-left",
                        label: "Reset",
                        width: 90
                    }, {}, {
                        view: "button",
                        css: "button0",
                        icon: "times",
                        label: "Delete",
                        width: 90
                    }]
                }]
            }]
        }]
    };
    return {
        $ui: n,
        $oninit: function() {
            $$("mainView").bind($$("list"))
        }
    }
}), 

define("views/products", ["views/modules/editor", "views/modules/topsales", "models/products"], function(e, t, i) {
    var a = {
        id: "productsData",
        view: "datatable",
        select: !0,
        editable: !0,
        editaction: "dblclick",
        columns: [{
            id: "id",
            header: "#",
            width: 50
        }, {
            id: "code",
            header: ["Code", {
                content: "textFilter"
            }],
            sort: "string",
            minWidth: 80,
            fillspace: 1
        }, {
            id: "name",
            header: ["Name", {
                content: "textFilter"
            }],
            sort: "string",
            minWidth: 120,
            fillspace: 2,
            editor: "text"
        }, {
            id: "categoryName",
            header: ["Category", {
                content: "selectFilter"
            }],
            sort: "string",
            minWidth: 120,
            fillspace: 2,
            editor: "select",
            template: "<div class='category#category#'>#categoryName#</div>"
        }, {
            id: "price",
            header: ["Price"],
            sort: "int",
            minWidth: 80,
            fillspace: 1,
            format: webix.i18n.priceFormat
        }, {
            id: "quantity",
            header: ["Quantity"],
            sort: "int",
            minWidth: 60,
            fillspace: 1
        }, {
            id: "statusName",
            header: ["Status"],
            minWidth: 75,
            sort: "string",
            minWidth: 70,
            fillspace: 1,
            template: "<span class='status status#status#'>#statusName#</span>"
        }, {
            id: "edit",
            header: "&nbsp;",
            width: 35,
            template: "<span  style=' cursor:pointer;' class='webix_icon fa-pencil'></span>"
        }, {
            id: "delete",
            header: "&nbsp;",
            width: 35,
            template: "<span  style='cursor:pointer;' class='webix_icon fa-trash-o'></span>"
        }],
        pager: "pagerA",
        "export": !0,
        data: i.getAll,
        onClick: {
            "fa-trash-o": function(e, t) {
                webix.confirm({
                    text: "The product will be deleted. <br/> Are you sure?",
                    ok: "Yes",
                    cancel: "Cancel",
                    callback: function(e) {
                        if (e) {
                            var i = webix.$$("productsData").getItem(t);
                            i.status = "0", i.statusName = "Deleted", webix.$$("productsData").refresh(t)
                        }
                    }
                })
            }
        },
        ready: function() {
            webix.extend(this, webix.ProgressBar)
        }
    }, n = {
        type: "space",
        rows: [{
            height: 40,
            cols: [{
                view: "button",
                type: "iconButton",
                icon: "file-excel-o",
                width: 150,
                label: "Export To Excel",
                click: function() {
                    $$("productsData").exportToExcel()
                }
            }, {
                view: "button",
                type: "iconButton",
                icon: "refresh",
                width: 100,
                label: "Refresh",
                click: function() {
                    var e = $$("productsData");
                    e.clearAll(), e.showProgress(), webix.delay(function() {
                        e.parse(i.getAll), e.hideProgress()
                    }, null, null, 300)
                }
            }, {}, {
                view: "richselect",
                id: "order_filter",
                value: "all",
                maxWidth: 300,
                minWidth: 250,
                vertical: !0,
                labelWidth: 110,
                options: [{
                    id: "all",
                    value: "All"
                }, {
                    id: "1",
                    value: "Published"
                }, {
                    id: "2",
                    value: "Not published"
                }, {
                    id: "0",
                    value: "Deleted"
                }],
                label: "Filter products",
                on: {
                    onChange: function() {
                        var e = this.getValue();
                        "all" == e ? $$("productsData").filter("#status#", "") : $$("productsData").filter("#status#", e)
                    }
                }
            }]
        }, {
            rows: [a, {
                view: "toolbar",
                css: "highlighted_header header6",
                paddingX: 5,
                paddingY: 5,
                height: 40,
                cols: [{
                    view: "pager",
                    id: "pagerA",
                    template: "{common.first()}{common.prev()}&nbsp; {common.pages()}&nbsp; {common.next()}{common.last()}",
                    autosize: !0,
                    height: 35,
                    group: 5
                }]
            }]
        }]
    };
    return {
        $ui: n
    }
}), 

require(["app"]);
//# sourceMappingURL=app.js.map