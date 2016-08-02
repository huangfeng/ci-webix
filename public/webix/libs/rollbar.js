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
})