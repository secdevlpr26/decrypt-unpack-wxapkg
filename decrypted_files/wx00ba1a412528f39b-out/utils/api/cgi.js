function e(e) {}

function t(e, t) {
    for (var n in t) e += -1 === e.indexOf("?") ? "?" + n + "=" + t[n] : "&" + n + "=" + t[n];
    return e;
}

function n(e) {
    wx.login({
        success: function(t) {
            t.code ? e(t.code) : (console.warn("login: no code"), r.loading(!1));
        },
        fail: function() {
            console.warn("login: fail"), r.loading(!1);
        }
    });
}

function o() {
    var e = c && u && l;
    return c && c.indexOf(" ") > -1 && (e = !1), e;
}

function a(e) {
    e.ts = +new Date(), wx.setStorageSync("_session", e), c = e._data_ticket, u = e._fake_id, 
    l = e._sid_ticket, f = e._sid_expire;
}

function i(s, p) {
    var _ = {}, g = s.success || r.noop, x = s.fail || r.noop, w = s.error || r.noop, y = s.complete || r.noop;
    if (_.success = function(t) {
        if (r.loading(!1), e(t), !t.data) return console.warn("request: no data[" + t.statusCode + "]"), 
        void x(t);
        t.data && t.data.base_resp && t.data.base_resp.session && a(t.data.base_resp.session);
        var o = 1 * t.data.ret;
        if (t.data.base_resp && (o = 1 * t.data.base_resp.ret), 0 !== o) return console.warn("request: ret = " + o), 
        void (200003 === o ? n(function(e) {
            return i(s, e);
        }) : x(t.data));
        g(t.data);
    }, _.fail = function(e) {
        r.loading(!1), console.warn("request: fail", e), w(e);
    }, _.complete = y, s.retryWxLogin = s.retryWxLogin || 5, s.retryWxLogin--, 0 == s.retryWxLogin && !o()) return _.fail(), 
    void _.complete();
    if (p || o() && !(+new Date() > 1e3 * f)) {
        if (!s.url) throw new Error("request: no url");
        _.url = s.url, _.data = s.data || {}, o() && (_.url = t(_.url, {
            _data_ticket: c,
            _fake_id: u,
            _sid_ticket: l
        })), p && (_.url = t(_.url, {
            _code: p
        })), d.openid && (_.url = t(_.url, {
            mallopenid: d.openid
        })), _.header = s.header, _.method = s.method, _.dataType = s.dataType || "json", 
        e(_), wx.request(_);
    } else n(function(e) {
        return i(s, e);
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.get = function(e) {
    e.method = "GET", e.header = {
        "content-type": "application/json"
    }, e.hideLoading || r.loading(!0, e.loadingText), i(e);
}, exports.post = function(e) {
    e.method = "POST", e.header = {
        "content-type": "application/x-www-form-urlencoded"
    }, e.hideLoading || r.loading(!0, e.loadingText), i(e);
};

getApp();

var r = require("../utils.js"), d = (require("../../config.js").config, wx.getExtConfigSync ? wx.getExtConfigSync() : {});

d && d.appid && d.openid || (d = {
    appid: "wx02afb2630b4d2959",
    openid: "ozaxYtxLXzUGOjAkMQrt3I49ZfXM"
}), console.debug("extJson:", d);

var s = wx.getStorageSync("_session") || {}, c = s._data_ticket, u = s._fake_id, l = s._sid_ticket, f = s._sid_expire;