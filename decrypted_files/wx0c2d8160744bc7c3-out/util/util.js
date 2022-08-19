function e(e, n) {
    return n = n || {}, new t.default(function(t, r) {
        "function" != typeof e && r(), n.success = t, n.fail = r, e(n);
    });
}

var t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("bluebird"));

module.exports = {
    Promise: e,
    formatTime: function(e) {
        if ("number" != typeof e || e < 0) return e;
        var t = parseInt(e / 3600);
        return e %= 3600, [ t, parseInt(e / 60), e %= 60 ].map(function(e) {
            return (e = e.toString())[1] ? e : "0" + e;
        }).join(":");
    },
    getDate: function() {
        var e = new Date(), t = e.getFullYear(), n = e.getMonth();
        n = n < 10 ? "0" + n : n;
        var r = e.getDay();
        return r = r < 10 ? "0" + r : r, [ t, n, r ].join("-");
    },
    getTime: function() {
        var e = new Date(), t = e.getHours();
        t = t < 10 ? "0" + t : t;
        var n = e.getMinutes();
        n = n < 10 ? "0" + n : n;
        var r = e.getSeconds();
        return r = r < 10 ? "0" + r : r, [ t, n, r ].join(":");
    }
};