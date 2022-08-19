var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, e = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
    return void 0 === e ? "undefined" : t(e);
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : t(e);
}, o = require("jquery");

module.exports = {
    toQueryPair: function(t, e) {
        return void 0 === e ? t : t + "=" + encodeURIComponent(null === e ? "" : String(e));
    },
    getUrl: function(t, n, i) {
        t = t.replace(/\//gi, ".");
        var a = getApp().globalData.api + "&r=" + t;
        return n && ("object" == (void 0 === n ? "undefined" : e(n)) ? a += "&" + o.param(n) : "string" == typeof n && (a += "&" + n)), 
        a;
    },
    json: function(t, e, n, i, a, c) {
        var r = getApp(), u = r.getCache("userinfo"), s = r.getCache("usermid"), f = r.getCache("authkey");
        (e = e || {}).comefrom = "wxapp", u && (e.openid = "sns_wa_" + u.openid, "cacheset" != t && r.getSet()), 
        s && (e.mid = s.mid, e.merchid = s.merchid);
        var d = this;
        i && d.loading(), e && (e.authkey = f || "");
        var l = {
            url: (a ? this.getUrl(t) : this.getUrl(t, e)) + "&timestamp=" + +new Date(),
            method: a ? "POST" : "GET",
            header: {
                "Content-type": a ? "application/x-www-form-urlencoded" : "application/json",
                Cookie: "PHPSESSID=" + u.openid
            }
        };
        c || delete l.header.Cookie, a && (l.data = o.param(e)), n && (l.success = function(t) {
            i && d.hideLoading(), "request:ok" == t.errMsg && "function" == typeof n && (r.setCache("authkey", t.data.authkey || ""), 
            n(t.data));
        }), wx.request(l);
    },
    post: function(t, e, o, n, i) {
        this.json(t, e, o, n, !0, i);
    },
    get: function(t, e, o, n, i) {
        this.json(t, e, o, n, !1, i);
    },
    getDistanceByLnglat: function(t, e, o, n) {
        function i(t) {
            return t * Math.PI / 180;
        }
        var a = i(e), c = i(n), r = a - c, u = i(t) - i(o), s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(r / 2), 2) + Math.cos(a) * Math.cos(c) * Math.pow(Math.sin(u / 2), 2)));
        return s *= 6378137, s = Math.round(1e4 * s) / 1e7;
    },
    alert: function(t, o) {
        "object" === (void 0 === t ? "undefined" : e(t)) && (t = JSON.stringify(t)), wx.showModal({
            title: "提示",
            content: t,
            showCancel: !1,
            success: function(t) {
                t.confirm && "function" == typeof confirm && o();
            }
        });
    },
    confirm: function(t, o, n) {
        "object" === (void 0 === t ? "undefined" : e(t)) && (t = JSON.stringify(t)), wx.showModal({
            title: "提示",
            content: t,
            showCancel: !0,
            success: function(t) {
                t.confirm ? "function" == typeof o && o() : "function" == typeof n && n();
            }
        });
    },
    loading: function(t) {
        void 0 !== t && "" != t || (t = "加载中"), wx.showToast({
            title: t,
            icon: "loading",
            duration: 5e6
        });
    },
    hideLoading: function() {
        wx.hideToast();
    },
    toast: function(t, e) {
        e || (e = "success"), wx.showToast({
            title: t,
            icon: e,
            duration: 1e3
        });
    },
    success: function(t) {
        wx.showToast({
            title: t,
            icon: "success",
            duration: 1e3
        });
    },
    upload: function(t) {
        var e = this;
        wx.chooseImage({
            success: function(o) {
                e.loading("正在上传...");
                var n = e.getUrl("util/uploader/upload", {
                    file: "file"
                }), i = o.tempFilePaths;
                wx.uploadFile({
                    url: n,
                    filePath: i[0],
                    name: "file",
                    success: function(o) {
                        e.hideLoading();
                        var n = JSON.parse(o.data);
                        if (0 != n.error) e.alert("上传失败"); else if ("function" == typeof t) {
                            var i = n.files[0];
                            t(i);
                        }
                    }
                });
            }
        });
    },
    pdata: function(t) {
        return t.currentTarget.dataset;
    },
    data: function(t) {
        return t.target.dataset;
    },
    phone: function(t) {
        var e = this.pdata(t).phone;
        wx.makePhoneCall({
            phoneNumber: e
        });
    },
    pay: function(t, o, n) {
        return "object" == (void 0 === t ? "undefined" : e(t)) && "function" == typeof o && (t.success = o, 
        "function" == typeof n && (t.fail = n), void wx.requestPayment(t));
    },
    cartcount: function(t) {
        this.get("member/cart/count", {}, function(e) {
            t.setData({
                cartcount: e.cartcount
            });
        });
    },
    onShareAppMessage: function(t) {
        var e = getApp(), o = e.getCache("sysset"), n = o.share || {}, i = e.getCache("userinfo"), a = "", c = o.shopname || "", r = o.description || "";
        return n.title && (c = n.title), n.desc && (r = n.desc), i && (a = i.id), t = t || "/pages/index/index", 
        t = -1 != t.indexOf("?") ? t + "&" : t + "?", {
            title: c,
            desc: r,
            path: t + "mid=" + a
        };
    }
};