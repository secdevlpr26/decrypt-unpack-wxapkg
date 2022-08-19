module.exports = {
    formatTime: function(e) {
        if ("number" != typeof e || e < 0) return e;
        var t = parseInt(e / 3600);
        return e %= 3600, [ t, parseInt(e / 60), e %= 60 ].map(function(e) {
            return (e = e.toString())[1] ? e : "0" + e;
        }).join(":");
    },
    formatDate: function(e) {
        return e.getYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate() + " " + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds();
    },
    getLocalTime: function(e) {
        return new Date(1e3 * parseInt(e)).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
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
    },
    isBlank: function(e) {
        return !e || /^\s*$/.test(e);
    },
    isPhoneNum: function(e) {
        return /^1[0-9]{10}$/.test(e);
    },
    isExist: function(e) {
        return void 0 !== e && e;
    },
    formatDate_imprecise: function(e) {
        var t = new Date(1e3 * parseInt(e));
        return t.getFullYear() + "-" + (t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) + "-" + (t.getDate() < 10 ? "0" + t.getDate() : t.getDate());
    },
    getHour: function(e) {
        var t = new Date(1e3 * parseInt(e));
        return (t.getHours() < 10 ? "0" + t.getHours() : t.getHours()) + ":" + (t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes()) + ":" + (t.getSeconds() < 10 ? "0" + t.getSeconds() : t.getSeconds());
    },
    isEmpty: function(e) {
        for (var t in e) return !1;
        return !0;
    },
    getTime_noSecond: function(e) {
        var t = new Date(1e3 * parseInt(e));
        return (t.getHours() < 10 ? "0" + t.getHours() : t.getHours()) + ":" + (t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes());
    }
};