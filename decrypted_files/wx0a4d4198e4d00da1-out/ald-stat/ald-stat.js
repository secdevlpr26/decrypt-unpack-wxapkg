var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

!function(t, n) {
    "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : t.Ald = n();
}(void 0, function() {
    function t() {
        this.concurrency = 4, this.queue = [], this.tasks = [], this.activeCount = 0;
        var t = this;
        this.push = function(n) {
            this.tasks.push(new Promise(function(e, o) {
                var r = function() {
                    t.activeCount++, n().then(function(t) {
                        e(t);
                    }).then(function() {
                        t.next();
                    });
                };
                t.activeCount < t.concurrency ? r() : t.queue.push(r);
            }));
        }, this.all = function() {
            return Promise.all(this.tasks);
        }, this.next = function() {
            t.activeCount--, t.queue.length > 0 && t.queue.shift()();
        };
    }
    function n() {
        this.request = [], this.updata = !1, this.push = function(t) {
            this.request.length >= 8 && !this.updata && (this.updata = !0, e()), this.request.length >= 10 ? (this.request.shift(), 
            this.request.push(t)) : this.request.push(t);
        }, this.concat = function() {
            this.request.map(function(t) {
                wx.Queue.push(t);
            }), this.request = [];
        };
    }
    function e() {
        "function" == typeof wt && "" === G && wt().then(function(t) {
            28 === t.length && (G = t, wx.setStorageSync("aldstat_op", t));
        });
    }
    function o(t) {
        this.app = t;
    }
    function r(t) {
        T = S(), W = t, ht = t.scene, this.aldstat = new o(this);
    }
    function i(t) {
        e();
        var n;
        n = t.scene != ht, ht = t.scene, V = 0, W = t, F = t.query.ald_share_src, X = t.query.aldsrc || "", 
        Y = t.query.ald_share_src, ct || ($ = !1), ct = !1, (0 !== Q && Date.now() - Q > 3e4 || n) && (ft || (B = S(), 
        N = Date.now(), dt = 0)), 0 !== Q && Date.now() - Q < 3e4 && (rt = !0), t.query.ald_share_src && "1044" == t.scene && t.shareTicket ? wx.getShareInfo({
            shareTicket: t.shareTicket,
            success: function(t) {
                tt = t, A("event", "ald_share_click", JSON.stringify(t));
            }
        }) : t.query.ald_share_src && A("event", "ald_share_click", 1), "" === nt && wx.getSetting({
            withCredentials: !0,
            success: function(t) {
                t.authSetting["scope.userInfo"] && wx.getUserInfo({
                    withCredentials: !0,
                    success: function(t) {
                        var n = v();
                        nt = t, n.ufo = m(t), K = y(t.userInfo.avatarUrl.split("/")), g(n);
                    }
                });
            }
        }), q("app", "show");
    }
    function s() {
        e(), Q = Date.now(), "" === nt && wx.getSetting({
            success: function(t) {
                t.authSetting["scope.userInfo"] && wx.getUserInfo({
                    withCredentials: !0,
                    success: function(t) {
                        nt = t, K = y(t.userInfo.avatarUrl.split("/"));
                        var n = v();
                        n.ufo = m(t), g(n);
                    }
                });
            }
        }), q("app", "hide");
    }
    function a(t) {
        Z++, A("event", "ald_error_message", t);
    }
    function u(t) {
        at = t;
    }
    function c() {
        pt = Date.now(), it = j ? this.$mp.page.route : this.route, D("page", "show"), rt = !1;
    }
    function f() {
        st = it, dt = Date.now() - pt;
    }
    function h() {
        st = it, dt = Date.now() - pt;
    }
    function l() {
        A("event", "ald_pulldownrefresh", 1);
    }
    function p() {
        A("event", "ald_reachbottom", 1);
    }
    function d(t) {
        ft = !0;
        var n = _(t.path), e = {};
        for (var o in W.query) "ald_share_src" === o && (e[o] = W.query[o]);
        var r = "";
        if (r = -1 == t.path.indexOf("?") ? t.path + "?" : t.path.substr(0, t.path.indexOf("?")) + "?", 
        "" !== n) for (var o in n) e[o] = n[o];
        e.ald_share_src ? -1 == e.ald_share_src.indexOf(z) && e.ald_share_src.length < 200 && (e.ald_share_src = e.ald_share_src + "," + z) : e.ald_share_src = z;
        for (var i in e) -1 == i.indexOf("ald") && (r += i + "=" + e[i] + "&");
        return t.path = r + "ald_share_src=" + e.ald_share_src, A("event", "ald_share_status", t), 
        t;
    }
    function w() {
        function t() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
        }
        return t() + t() + t() + t() + t() + t() + t() + t();
    }
    function g(t) {
        function n() {
            return new Promise(function(n, e) {
                var o = {
                    AldStat: "MiniApp-Stat",
                    se: J || "",
                    op: G || "",
                    img: K
                };
                "" === E || (o.ai = E), wx.request({
                    url: "https://" + C + ".aldwx.com/d.html",
                    data: t,
                    header: o,
                    method: "GET",
                    success: function(t) {
                        n(200 == t.statusCode ? "" : "status error");
                    },
                    fail: function() {
                        n("fail");
                    }
                });
            });
        }
        V++, t.at = B, t.uu = z, t.v = H, t.ak = k.app_key.replace(/(\t)|(\s)/g, ""), t.wsr = W, 
        t.ifo = $, t.rq_c = V, t.ls = T, t.te = U, t.et = Date.now(), t.st = Date.now(), 
        k.useOpen ? "" === G ? lt.push(n) : (wx.Queue.push(n), lt.concat()) : wx.Queue.push(n);
    }
    function v() {
        var t = {};
        for (var n in et) t[n] = et[n];
        return t;
    }
    function y(t) {
        for (var n = "", e = 0; e < t.length; e++) t[e].length > n.length && (n = t[e]);
        return n;
    }
    function S() {
        return "" + Date.now() + Math.floor(1e7 * Math.random());
    }
    function m(t) {
        var n = {};
        for (var e in t) "rawData" != e && "errMsg" != e && (n[e] = t[e]);
        return n;
    }
    function _(t) {
        if (-1 == t.indexOf("?")) return "";
        var n = {};
        return t.split("?")[1].split("&").forEach(function(t) {
            var e = t.split("=")[1];
            n[t.split("=")[0]] = e;
        }), n;
    }
    function x(t) {
        for (var n in t) if ("object" == _typeof(t[n]) && null !== t[n]) return !0;
        return !1;
    }
    function q(t, n) {
        var e = v();
        e.ev = t, e.life = n, e.ec = Z, e.dr = Date.now() - N, X && (e.qr = X, e.sr = X), 
        F && (e.usr = F), g(e);
    }
    function D(t, n) {
        var e = v();
        e.ev = t, e.life = n, e.pp = it, e.pc = st, e.dr = Date.now() - N, ft && (e.so = 1), 
        ft = !1, at && "{}" != JSON.stringify(at) && (e.ag = at), X && (e.qr = X, e.sr = X), 
        F && (e.usr = F), rt && (e.ps = 1), ot ? e.pdr = dt : (ut = it, ot = !0, e.ifp = ot, 
        e.fp = it, e.pdr = 0), g(e);
    }
    function A(t, n, e) {
        var o = v();
        o.ev = t, o.tp = n, o.dr = Date.now() - N, e && (o.ct = e), g(o);
    }
    function b(t, n, e) {
        if (t[n]) {
            var o = t[n];
            t[n] = function(t) {
                e.call(this, t, n), o.call(this, t);
            };
        } else t[n] = function(t) {
            e.call(this, t, n);
        };
    }
    function M(t) {
        var n = {};
        for (var e in t) "onLaunch" !== e && "onShow" !== e && "onHide" !== e && "onError" !== e && (n[e] = t[e]);
        return n.onLaunch = function(n) {
            r.call(this, n), "function" == typeof t.onLaunch && t.onLaunch.call(this, n);
        }, n.onShow = function(n) {
            i.call(this, n), t.onShow && "function" == typeof t.onShow && t.onShow.call(this, n);
        }, n.onHide = function() {
            s.call(this), t.onHide && "function" == typeof t.onHide && t.onHide.call(this);
        }, n.onError = function(n) {
            a.call(this, n), t.onError && "function" == typeof t.onError && t.onError.call(this, n);
        }, n;
    }
    function I(t) {
        var n = {};
        for (var e in t) "onLoad" !== e && "onShow" !== e && "onHide" !== e && "onUnload" !== e && "onPullDownRefresh" !== e && "onReachBottom" !== e && "onShareAppMessage" !== e && (n[e] = t[e]);
        return n.onLoad = function(n) {
            u.call(this, n), "function" == typeof t.onLoad && t.onLoad.call(this, n);
        }, n.onShow = function(n) {
            c.call(this), "function" == typeof t.onShow && t.onShow.call(this, n);
        }, n.onHide = function(n) {
            f.call(this), "function" == typeof t.onHide && t.onHide.call(this, n);
        }, n.onUnload = function(n) {
            h.call(this), "function" == typeof t.onUnload && t.onUnload.call(this, n);
        }, n.onReachBottom = function(n) {
            p(), t.onReachBottom && "function" == typeof t.onReachBottom && t.onReachBottom.call(this, n);
        }, n.onPullDownRefresh = function(n) {
            l(), t.onPullDownRefresh && "function" == typeof t.onPullDownRefresh && t.onPullDownRefresh.call(this, n);
        }, t.onShareAppMessage && "function" == typeof t.onShareAppMessage && (n.onShareAppMessage = function(n) {
            var e = t.onShareAppMessage.call(this, n);
            return void 0 === e ? (e = {}, e.path = this.route) : void 0 === e.path && (e.path = this.route), 
            d.call(this, e);
        }), n;
    }
    function P(t) {
        return App(M(t));
    }
    function L(t) {
        return Page(I(t));
    }
    function O(t) {
        return j = !0, M(t);
    }
    function R(t) {
        return I(t);
    }
    var k = require("./ald-stat-conf.js");
    void 0 === wx.Queue && (wx.Queue = new t(), wx.Queue.all()), k.useOpen && console.warn("提示：开启了useOpen配置后，如果不上传用户opendId则不会上报数据。");
    var H = "7.3.2", C = "log", U = "wx", E = function() {
        return void 0 === wx.getAccountInfoSync ? "" : wx.getAccountInfoSync().miniProgram.appId.split("").map(function(t) {
            return t.charCodeAt(0) + 9;
        }).join("-");
    }(), j = !1, B = S(), T = "", N = Date.now(), Q = 0, J = "", G = function() {
        var t = "";
        try {
            t = wx.getStorageSync("aldstat_op");
        } catch (t) {}
        return t;
    }(), K = "", V = 0, W = "", $ = "", z = function() {
        var t = "";
        try {
            t = wx.getStorageSync("aldstat_uuid");
        } catch (n) {
            n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
            t = "uuid_getstoragesync";
        }
        if (t) $ = !1; else {
            t = w();
            try {
                wx.setStorageSync("aldstat_uuid", t), $ = !0;
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                wx.setStorageSync("aldstat_uuid", "uuid_getstoragesync");
            }
        }
        return t;
    }(), F = "", X = "", Y = "", Z = 0, tt = "", nt = "", et = {}, ot = !1, rt = !1, it = "", st = "", at = "", ut = "", ct = !0, ft = !1, ht = "", lt = new n(), pt = 0, dt = 0, wt = "";
    !function() {
        wx.request({
            url: "https://" + C + ".aldwx.com/config/app.json",
            header: {
                AldStat: "MiniApp-Stat"
            },
            method: "GET",
            success: function(t) {
                200 === t.statusCode && (H < t.data.version && console.warn("您的SDK不是最新版本，请尽快升级！"), 
                t.data.warn && console.warn(t.data.warn), t.data.error && console.error(t.data.error));
            }
        });
    }(), wx.aldstat = new o("");
    try {
        var gt = wx.getSystemInfoSync();
        et.br = gt.brand, et.pm = gt.model, et.pr = gt.pixelRatio, et.ww = gt.windowWidth, 
        et.wh = gt.windowHeight, et.lang = gt.language, et.wv = gt.version, et.wvv = gt.platform, 
        et.wsdk = gt.SDKVersion, et.sv = gt.system;
    } catch (t) {}
    return wx.getNetworkType({
        success: function(t) {
            et.nt = t.networkType;
        }
    }), wx.getSetting({
        success: function(t) {
            t.authSetting["scope.userLocation"] ? wx.getLocation({
                type: "wgs84",
                success: function(t) {
                    et.lat = t.latitude, et.lng = t.longitude, et.spd = t.speed;
                }
            }) : k.getLocation && wx.getLocation({
                type: "wgs84",
                success: function(t) {
                    et.lat = t.latitude, et.lng = t.longitude, et.spd = t.speed;
                }
            });
        }
    }), o.prototype.sendEvent = function(t, n) {
        if ("" !== t && "string" == typeof t && t.length <= 255) if ("string" == typeof n && n.length <= 255) A("event", t, n); else if ("object" == (void 0 === n ? "undefined" : _typeof(n))) {
            if (JSON.stringify(n).length >= 255) return void console.error("自定义事件参数不能超过255个字符");
            if (x(n)) return void console.error("事件参数，参数内部只支持Number,String等类型，请参考接入文档");
            for (var e in n) "number" == typeof n[e] && (n[e] = n[e] + "s##");
            A("event", t, JSON.stringify(n));
        } else void 0 === n ? A("event", t, !1) : console.error("事件参数必须为String,Object类型,且参数长度不能超过255个字符"); else console.error("事件名称必须为String类型且不能超过255个字符");
    }, o.prototype.sendSession = function(t) {
        if ("" === t || !t) return void console.error("请传入从后台获取的session_key");
        J = t;
        var n = v();
        n.tp = "session", n.ct = "session", n.ev = "event", "" === nt ? wx.getSetting({
            success: function(t) {
                t.authSetting["scope.userInfo"] ? wx.getUserInfo({
                    success: function(t) {
                        n.ufo = m(t), K = y(t.userInfo.avatarUrl.split("/")), "" !== tt && (n.gid = tt), 
                        g(n);
                    }
                }) : "" !== tt && (n.gid = tt, g(n));
            }
        }) : (n.ufo = nt, "" !== tt && (n.gid = tt), g(n));
    }, o.prototype.sendOpenid = function(t) {
        if ("" === t || !t || 28 !== t.length) return void console.error("openID不能为空");
        G = t, wx.setStorageSync("aldstat_op", t);
        var n = v();
        n.tp = "openid", n.ev = "event", n.ct = "openid", g(n);
    }, o.prototype.setOpenid = function(t) {
        "function" == typeof t && (wt = t, e());
    }, k.plugin ? {
        App: P,
        Page: L,
        MpvueApp: O,
        MpvuePage: R
    } : function(t) {
        !function() {
            var t = App, n = Page, e = Component;
            App = function(n) {
                b(n, "onLaunch", r), b(n, "onShow", i), b(n, "onHide", s), b(n, "onError", a), t(n);
            }, Page = function(t) {
                var e = t.onShareAppMessage;
                b(t, "onLoad", u), b(t, "onUnload", h), b(t, "onShow", c), b(t, "onHide", f), b(t, "onReachBottom", p), 
                b(t, "onPullDownRefresh", l), void 0 !== e && null !== e && (t.onShareAppMessage = function(t) {
                    if (void 0 !== e) {
                        var n = e.call(this, t);
                        return void 0 === n ? (n = {}, n.path = it) : void 0 === n.path && (n.path = it), 
                        d(n);
                    }
                }), n(t);
            }, Component = function(t) {
                try {
                    var n = t.methods.onShareAppMessage;
                    b(t.methods, "onLoad", u), b(t.methods, "onUnload", h), b(t.methods, "onShow", c), 
                    b(t.methods, "onHide", f), b(t.methods, "onReachBottom", p), b(t.methods, "onPullDownRefresh", l), 
                    void 0 !== n && null !== n && (t.methods.onShareAppMessage = function(t) {
                        if (void 0 !== n) {
                            var e = n.call(this, t);
                            return void 0 === e ? (e = {}, e.path = it) : void 0 === e.path && (e.path = it), 
                            d(e);
                        }
                    }), e(t);
                } catch (n) {
                    n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                    e(t);
                }
            };
        }();
    }();
});