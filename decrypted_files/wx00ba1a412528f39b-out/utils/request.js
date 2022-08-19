function e(e, t, i) {
    return e + (e.indexOf("?") > -1 ? "&" : "?") + t + "=" + i;
}

function t(e) {
    for (var t = void 0; t = e.shift(); ) n(t);
}

function i(e) {
    f = {
        expire: e._sid_expire,
        sidTicket: e._sid_ticket,
        dataTicket: e._data_ticket
    }, wx.setStorageSync("app_session", f);
}

function n(n, o) {
    if (l >= 5) y.push(n); else {
        var s = getApp(), c = n.success, r = n.fail, p = n.complete, _ = n.url;
        /^http/.test(_) || (_ = s.hostname + _), _ = e(_ = e(_, "_sid_ticket", f.sidTicket || ""), "_data_ticket", f.dataTicket || ""), 
        l++, wx.request({
            url: _,
            data: n.data || {},
            header: n.header || {},
            method: (n.method || "GET").toUpperCase(),
            dataType: n.dataType || "json",
            success: function(e) {
                if (200 === e.statusCode) {
                    var t = e.data;
                    if (t.base.ret === u) i(t.base.session), "function" == typeof o && o(); else if (t.base.ret === d && (i({
                        _sid_expire: 0
                    }), n.retry >= 0)) return void a(n);
                    "function" == typeof c && c(t);
                } else "function" == typeof r && r();
            },
            fail: function() {
                "function" == typeof r && r();
            },
            complete: function() {
                "function" == typeof p && p(), l = Math.max(l - 1, 0), t(y);
            }
        });
    }
}

function o() {
    c = !0, r--, wx.login({
        success: function(i) {
            c = !1;
            var o = p.shift();
            o.url = e(o.url, "_code", i.code), n(o, function() {
                t(p);
            });
        },
        fail: function() {
            if (c = !1, r) o(); else for (var e = void 0; e = p.shift(); ) "function" == typeof e.fail && e.fail();
        }
    });
}

function s() {
    return !!(f.sidTicket && f.dataTicket && f.expire && f.expire > Date.now()) || (c || o(), 
    !1);
}

function a(e) {
    void 0 === e.retry && (e.retry = 1), e.retry < 0 || (e.retry--, s() ? n(e) : p.push(e));
}

var c = !1, r = 2, f = wx.getStorageSync("app_session") || {
    expire: 0,
    sidTicket: "",
    dataTicket: ""
}, u = 0, d = 200003, p = [], l = 0, y = [];

module.exports = a;