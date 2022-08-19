function t(t) {}

function e() {}

var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, o = require("../utils/constants.js"), r = require("../utils/util.js"), u = require("./crypto-js.js"), i = function() {}, c = function() {
    function t(t, e) {
        Error.call(this, e), this.type = t, this.message = e;
    }
    return t.prototype = new Error(), t.prototype.constructor = t, t;
}(), l = function(t) {
    var e = {};
    t = t || {};
    var n = "";
    Object.keys(t).sort().forEach(function(e) {
        n += e, n += t[e];
    });
    var r = new Date().getTime();
    n = u.MD5(n).toString(), n = n.toUpperCase(), n = r + n, n += o.APP_SECRET;
    var i = u.MD5(n).toString();
    n = i.toUpperCase(), e.appId = o.APP_ID, e.timestamp = r, e.sign = n, e["Content-Type"] = "application/x-www-form-urlencoded", 
    e.aid = o.MIN_AID;
    var c = getApp();
    return e.cid = c.user.cid, e;
}, a = function() {
    return {};
}, s = function(t) {
    return !0;
};

e.prototype.request = function(e) {
    if ("object" !== (void 0 === e ? "undefined" : n(e))) {
        var u = "请求传参应为 object 类型，但实际传了 " + (void 0 === e ? "undefined" : n(e)) + " 类型";
        throw new c(constants.ERR_INVALID_PARAMS, u);
    }
    e.url = o.API_URL + e.url;
    var p = e.success || i, f = e.fail || i, y = e.complete || i, d = e.header || {}, m = e.data || {}, v = function() {
        s.apply(null, arguments);
        p.apply(null, arguments), y.apply(null, arguments);
    }, b = function(e) {
        t.call(null, e), f.call(null, e), y.call(null, e);
    };
    !function() {
        var t = a(), n = r.extend({}, m, t), o = l(n);
        wx.request(r.extend({}, e, {
            header: r.extend({}, d, o),
            data: r.extend({}, m, t),
            success: function(t) {
                t.data, v.apply(null, arguments);
            },
            fail: b,
            complete: i
        }));
    }();
}, e.prototype.post = function(t, e, n, o) {
    "function" == typeof e && (o = n, n = e, e = null);
    var r = {
        url: t,
        method: "POST",
        data: e,
        success: n,
        fail: o
    };
    this.request(r);
}, e.prototype.ajax = function(t) {
    this.request(t);
}, module.exports = new e();