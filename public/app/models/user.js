define([], function() {
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
})