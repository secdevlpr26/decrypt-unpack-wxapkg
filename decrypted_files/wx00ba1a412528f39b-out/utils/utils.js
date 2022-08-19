function e() {}

function t(t, o) {
    var n = t;
    t ? "string" == typeof t && (n = {
        content: t
    }, o && (n.success = o)) : n = {}, wx.showModal({
        title: n.title || "温馨提示",
        content: n.content || "系统错误，请稍后重试",
        showCancel: !1,
        confirmText: n.confirmText || "确定",
        confirmColor: n.confirmColor || "#3CC51F",
        success: n.success || e,
        fail: n.fail || e,
        complete: n.complete || e
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

exports.noop = e, exports.weekStr = function(e) {
    return r[e] || "";
}, exports.formatPrice = function(e) {
    var t = e + "";
    return (e < 100 ? "0" : "") + t.substr(0, t.length - 2) + "." + t.substr(t.length - 2);
}, exports.deepClone = function(e) {
    var t = {};
    try {
        t = JSON.parse(JSON.stringify(e));
    } catch (e) {}
    return t;
}, exports.decodeURI = function(e) {
    try {
        return decodeURIComponent(e || "");
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return "";
    }
}, exports.hasArray = function(e, t) {
    var o = !0, n = !1, r = void 0;
    try {
        for (var c, i = t[Symbol.iterator](); !(o = (c = i.next()).done); o = !0) {
            var a = c.value;
            if (-1 == e.indexOf(a)) return !1;
        }
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        n = !0, r = e;
    } finally {
        try {
            !o && i.return && i.return();
        } finally {
            if (n) throw r;
        }
    }
    return !0;
}, exports.getArrayCombination = function(e) {
    var t = [];
    if (e && 0 != e.length) {
        for (var o = e.length, n = 1 << o, r = 1; r < n; r++) {
            for (var c = [], i = 0; i < o; i++) r & 1 << i && c.push(e[i]);
            t.push(c);
        }
        return t = t.sort(function(e, t) {
            return e.length - t.length;
        });
    }
}, exports.formatTime = function(e, t) {
    function o(e) {
        var t = e.toString();
        return e < 10 ? "0" + t : t;
    }
    if ("number" == typeof e && "string" == typeof t) {
        var n = new Date(e), r = n.getFullYear(), c = n.getMonth() + 1, i = n.getDate(), a = n.getHours(), l = n.getMinutes(), s = n.getSeconds();
        return t.replace(/YYYY/g, r).replace(/YY/g, r % 100).replace(/MM/g, o(c)).replace(/M/g, c).replace(/DD/g, o(i)).replace(/D/g, n).replace(/hh/g, o(a)).replace(/h/g, a).replace(/mm/g, o(l)).replace(/m/g, l).replace(/ss/g, o(s)).replace(/s/g, s);
    }
}, exports.loading = function(e, t) {
    e ? wx.showLoading ? wx.showLoading({
        title: t || "加载中",
        mask: !0
    }) : wx.showToast({
        title: t || "加载中",
        icon: "loading",
        duration: 1e4,
        mask: !0
    }) : wx.hideLoading ? wx.hideLoading() : wx.hideToast();
}, exports.success = function(t, o) {
    var n = t;
    t ? "string" == typeof t && (n = {
        title: t
    }) : n = {
        title: "已完成"
    }, wx.hideToast(), setTimeout(function() {
        wx.showToast({
            title: n.title,
            icon: "success",
            duration: n.duration || 750,
            mask: void 0 === n.mask || n.mask,
            success: n.success || e,
            fail: n.fail || e,
            complete: n.complete || e
        });
    }, 10), o && setTimeout(function() {
        o();
    }, n.duration || 750);
}, exports.alert = t, exports.dialog = function(t, o, n) {
    var r = t;
    t ? "string" == typeof t && (r = {
        content: t
    }, o && (r.confirmCallback = o), n && (r.cancelCallback = n)) : r = {}, wx.showModal({
        title: r.title || "温馨提示",
        content: r.content || "确定吗？",
        showCancel: !0,
        cancelText: r.cancelText || "取消",
        cancelColor: r.cancelColor || "#000000",
        confirmText: r.confirmText || "确定",
        confirmColor: r.confirmColor || "#3CC51F",
        success: function(e) {
            e.confirm ? r.confirmCallback && r.confirmCallback() : r.cancelCallback && r.cancelCallback();
        },
        fail: r.fail || e,
        complete: r.complete || e
    });
}, exports.err = function(e, o) {
    t(errMap[e] || "系统错误，请稍后重试", o);
}, exports.debug = function(e) {
    n.LOG_LEVEL <= 1 && console.debug(e);
}, exports.log = function(e) {
    n.LOG_LEVEL <= 2 && console.log(e);
}, exports.info = function(e) {
    n.LOG_LEVEL <= 3 && console.info(e);
}, exports.warn = function(e) {
    n.LOG_LEVEL <= 4 && console.warn(e);
}, exports.error = function(e) {
    n.LOG_LEVEL <= 5 && console.error(e);
}, exports.checkValidIdcard = function(e) {
    function t(e) {
        var t = 0;
        "x" == e[17].toLowerCase() && (e[17] = 10);
        for (var o = 0; o < 17; o++) t += r[o] * e[o];
        return n = t % 11, e[17] == c[n];
    }
    function o(e) {
        return function(e, t, o) {
            var n = new Date(), r = n.getFullYear(), c = n.getMonth() + 1, i = n.getDate();
            if (e > r || e < 1900) return !1;
            if (e == r) {
                if (t > c) return !1;
                if (t == c && o > i) return !1;
            }
            var a = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
            return (e % 400 == 0 || e % 100 != 0 && e % 4 == 0) && (a[1] = 29), !(t < 1 || t > 12) && o > 0 && o <= a[t - 1];
        }(parseFloat(e.substring(6, 10)), parseFloat(e.substring(10, 12)), parseFloat(e.substring(12, 14)));
    }
    var n, r = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1 ], c = [ 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ];
    return function(e) {
        if (15 == (e = e.replace(/ /g, "")).length) return !1;
        if (18 == e.length) {
            var n = e.split("");
            return !(!o(e) || !t(n));
        }
        return !1;
    }(e);
};

var n = require("../config.js").config, r = [ "日", "一", "二", "三", "四", "五", "六" ];

exports.go = function(e, t, n, r, c) {
    var i = "";
    if ("object" === (void 0 === t ? "undefined" : o(t))) {
        for (var a in t) i += i ? "&" : "", i += a + "=" + encodeURIComponent(t[a]);
        t = i;
    }
    var l = e.split("/");
    wx.navigateTo({
        url: "/pages/" + e + "/" + l[l.length - 1] + (t ? "?" + t : ""),
        success: function() {
            n && n();
        },
        fail: function() {
            r && r();
        },
        complete: function() {
            c && c();
        }
    });
};