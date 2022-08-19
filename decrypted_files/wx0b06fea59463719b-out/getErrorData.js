function e() {
    return new Promise(function(e, t) {
        wx.getSystemInfo({
            success: function(t) {
                e(t);
            },
            fail: function() {
                t();
            }
        });
    });
}

var t = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
};

module.exports = {
    getError: function(r) {
        var n = {};
        e().then(function(e) {
            var o = getCurrentPages(), a = "未知";
            o && o[o.length - 1] && (a = o[o.length - 1].route), n = t({}, r, {
                brand: e.brand,
                model: e.model,
                language: e.language,
                version: e.version,
                system: e.system,
                platform: e.platform,
                appTitle: e.appTitle,
                SDKVersion: e.SDKVersion,
                page: a
            }), wx.request({
                url: n.siteBaseUrl + "/index.php?c=ErrorReport&a=report&InitSiteID=" + (n.siteId || 0),
                data: n,
                method: "POST"
            });
        });
    }
};