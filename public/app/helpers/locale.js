define("helpers/locale", ["libs/polyglot/lib/polyglot", "models/user"], function(e, t) {
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
})