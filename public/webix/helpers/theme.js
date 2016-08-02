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
})