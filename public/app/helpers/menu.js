define([], function() {
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
})