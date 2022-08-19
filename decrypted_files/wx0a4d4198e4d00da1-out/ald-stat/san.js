var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

!function() {
    function t(t) {
        var a = "";
        try {
            a = wx.getStorageSync("aldstat_uuid");
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            a = "uuid_getstoragesync";
        }
        if (!a) {
            a = "" + Date.now() + Math.floor(1e7 * Math.random());
            try {
                wx.setStorageSync("aldstat_uuid", a), wx.setStorageSync("ald_ifo", !0);
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                wx.setStorageSync("aldstat_uuid", "uuid_getstoragesync");
            }
            t.aldstat_is_first_open = !0;
        }
        return a;
    }
    function a() {
        wx.request({
            url: "https://" + i + ".aldwx.com/config/app.json",
            header: {
                AldStat: "MiniApp-Stat"
            },
            method: "GET",
            success: function(t) {
                if (200 === t.statusCode) for (var a in t.data) wx.setStorageSync(a, t.data[a]);
            }
        });
    }
    function e(t, a, e) {
        if (t[a]) {
            var s = t[a];
            t[a] = function(t) {
                e.call(this, t, a), s.call(this, t);
            };
        } else t[a] = function(t) {
            e.call(this, t, a);
        };
    }
    function s(t, a, e) {
        if (t[a]) {
            var s = t[a];
            t[a] = function(t) {
                var n = s.call(this, t);
                return e.call(this, [ t, n ], a), n;
            };
        } else t[a] = function(t) {
            e.call(this, t, a);
        };
    }
    function n(t) {
        this.app = t;
    }
    function o(t) {
        for (var a in t) return !1;
        return !0;
    }
    function r(t) {
        return "string" == typeof t && !/[~`!@\/#+=\$%\^()&\*]+/g.test(t.replace(/\s+/g, "_"));
    }
    var _ = "6.1.1", i = "log", l = {}, d = 0, c = 0, u = 0, p = 0, h = {}, g = function(t) {
        wx.getSetting && wx.getSetting({
            success: function(a) {
                a.authSetting["scope.userInfo"] && wx.getUserInfo({
                    withCredentials: !1,
                    success: function(a) {
                        t(a);
                    }
                });
            }
        });
    }, f = function(t, a, e) {
        void 0 === arguments[1] && (a = "GET"), void 0 === arguments[2] && (e = "d.html");
        var s = 0;
        !function n() {
            d += 1, t.rq_c = d, wx.request({
                url: "https://" + i + ".aldwx.com/" + e,
                data: t,
                header: {
                    AldStat: "MiniApp-Stat"
                },
                method: a,
                success: function() {},
                fail: function() {
                    s < 2 && (s++, t.retryTimes = s, n());
                }
            });
        }();
    }, w = function(a, e, s, n) {
        if (void 0 == l) var o = ""; else o = l.app_key;
        var r = {
            ak: o.replace(/(^\s*)|(\s*$)/g, ""),
            uu: t(a),
            at: a.aldstat_access_token,
            st: Date.now(),
            tp: s,
            ev: e,
            v: _
        };
        n && (r.ct = n), a.aldstat_qr && (r.qr = a.aldstat_qr), f(r, "GET", "d.html");
    }, v = function(a, e, s, n) {
        if (void 0 === a.aldstat_showoption && (a.aldstat_showoption = {}), void 0 == l) var o = ""; else o = l.app_key;
        var r = {
            ak: o.replace(/(^\s*)|(\s*$)/g, ""),
            wsr: a.aldstat_showoption,
            uu: t(a),
            at: a.aldstat_access_token,
            st: Date.now(),
            tp: s,
            ev: e,
            nt: a.aldstat_network_type,
            pm: a.aldstat_phone_model,
            pr: a.aldstat_pixel_ratio,
            ww: a.aldstat_window_width,
            wh: a.aldstat_window_height,
            lang: a.aldstat_language,
            wv: a.aldstat_wechat_version,
            lat: a.aldstat_lat,
            lng: a.aldstat_lng,
            spd: a.aldstat_speed,
            v: _
        };
        n && (r.ct = n), a.aldstat_location_name && (r.ln = a.aldstat_location_name), a.aldstat_src && (r.sr = a.aldstat_src), 
        a.aldstat_qr && (r.qr = a.aldstat_qr), f(r, "GET", "d.html");
    };
    n.prototype.debug = function(t) {
        v(this.app, "debug", 0, t);
    }, n.prototype.warn = function(t) {
        v(this.app, "debug", 1, t);
    }, n.prototype.error = function(t) {
        w(this.app, "debug", 2, t);
    }, n.prototype.sendEvent = function(t, a) {
        if (!r(t)) return !1;
        if (t.length >= 255) return !1;
        if ("object" === (void 0 === a ? "undefined" : _typeof(a))) {
            for (var e in a) {
                if (!r(e)) return !1;
                if ("object" == _typeof(a[e])) return !1;
                if (!r(a[e])) return !1;
            }
            v(this.app, "event", t, JSON.stringify(a));
        } else if ("string" == typeof a && a.length <= 255) {
            if (r(a)) {
                var s = String(a), n = new Object();
                n[s] = a, v(this.app, "event", t, a);
            }
        } else v(this.app, "event", t, !1);
    };
    var y = function() {
        var t = this;
        t.aldstat_duration += Date.now() - t.aldstat_showtime, k(t, "app", "unLaunch");
    }, S = function(t, a, e) {
        void 0 !== wx.getShareInfo ? wx.getShareInfo({
            shareTicket: a,
            success: function(a) {
                v(t, "event", "ald_share_" + e, JSON.stringify(a));
            },
            fail: function() {
                v(t, "event", "ald_share_" + e, "1");
            }
        }) : v(t, "event", "ald_share_" + e, "1");
    }, m = function(e) {
        a();
        var s = wx.getExtConfigSync ? wx.getExtConfigSync() : 0;
        l = s.ald_config, this.aldstat = new n(this);
        var o = "";
        try {
            o = wx.getStorageSync("aldstat_src");
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            o = "uuid_getstoragesync";
        }
        o && (this.aldstat_src = o);
        var r = t(this);
        this.aldstat_uuid = r, this.aldstat_timestamp = Date.now(), this.aldstat_showtime = Date.now(), 
        this.aldstat_duration = 0;
        var _ = this;
        _.aldstat_error_count = 0, _.aldstat_page_count = 1, _.aldstat_first_page = 0, this.aldstat_showoption = void 0 !== e ? e : {};
        var i = function() {
            wx.getSystemInfo({
                success: function(t) {
                    _.aldstat_vsdk_version = void 0 === t.SDKVersion ? "1.0.0" : t.SDKVersion, _.aldstat_phone_model = t.model, 
                    _.aldstat_pixel_ratio = t.pixelRatio, _.aldstat_window_width = t.windowWidth, _.aldstat_window_height = t.windowHeight, 
                    _.aldstat_language = t.language, _.aldstat_wechat_version = t.version, _.aldstat_sv = t.system, 
                    _.aldstat_wvv = t.platform;
                },
                complete: function() {
                    var t = "";
                    t = void 0 == l ? "" : l.getLocation, t && c(), d();
                }
            });
        }, d = function() {
            g(function(t) {
                var a = "";
                try {
                    a = wx.getStorageSync("aldstat_uuid");
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    a = "uuid_getstoragesync";
                }
                t.userInfo.uu = a, h = t, f(t.userInfo, "GET", "u.html");
            });
        }, c = function() {
            wx.getLocation({
                type: "wgs84",
                success: function(t) {
                    _.aldstat_lat = t.latitude, _.aldstat_lng = t.longitude, _.aldstat_speed = t.speed;
                }
            });
        };
        !function() {
            wx.getNetworkType({
                success: function(t) {
                    _.aldstat_network_type = t.networkType;
                },
                complete: i
            });
        }();
        var u = "";
        try {
            u = wx.getStorageSync("app_session_key_create_launch_upload");
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            u = "";
        }
        u ? u > 0 && "number" == typeof u && (_.aldstat_access_token = "" + Date.now() + Math.floor(1e7 * Math.random())) : _.aldstat_access_token = "" + Date.now() + Math.floor(1e7 * Math.random()), 
        k(_, "app", "launch");
    }, x = function(t, a) {
        var e = this;
        void 0 === this.aldstat_error_count ? this.aldstat_error_count = 1 : this.aldstat_error_count++, 
        v(e, "event", "ald_error_message", JSON.stringify(t));
    }, k = function(a, e, s) {
        var n = "";
        try {
            n = wx.getStorageSync("app_" + s + "_upload");
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            n = "";
        }
        if ((n || "launch" === s) && !(n < 1 && "number" == typeof n)) {
            void 0 === a.aldstat_timestamp && (a.aldstat_timestamp = Date.now());
            var o = !1;
            if ("app" == e && "hide" == s && Boolean(wx.getStorageSync("ald_ifo")) && (o = !0, 
            wx.setStorageSync("ald_ifo", !1)), void 0 == l) var r = ""; else r = l.app_key;
            var i = {
                ak: r.replace(/(^\s*)|(\s*$)/g, ""),
                ev: e,
                life: s,
                waid: l.appid,
                wst: l.appsecret,
                uu: t(a),
                at: a.aldstat_access_token,
                wsr: a.aldstat_showoption,
                st: a.aldstat_timestamp,
                dr: a.aldstat_duration,
                et: Date.now(),
                pc: a.aldstat_page_count,
                fp: a.aldstat_first_page,
                lp: a.aldstat_last_page,
                ec: a.aldstat_error_count,
                nt: a.aldstat_network_type,
                pm: a.aldstat_phone_model,
                wsdk: a.aldstat_vsdk_version,
                pr: a.aldstat_pixel_ratio,
                ww: a.aldstat_window_width,
                wh: a.aldstat_window_height,
                lang: a.aldstat_language,
                wv: a.aldstat_wechat_version,
                lat: a.aldstat_lat,
                lng: a.aldstat_lng,
                spd: a.aldstat_speed,
                v: _,
                sv: a.aldstat_sv,
                wvv: a.aldstat_wvv
            };
            "launch" === s ? c += 1 : "show" === s ? u += 1 : p += 1, i.la_c = c, i.as_c = u, 
            i.ah_c = p, Boolean(o) && (i.ifo = o), a.page_share_count && "number" == typeof a.page_share_count && (i.sc = a.page_share_count), 
            a.aldstat_location_name && (i.ln = a.aldstat_location_name), a.aldstat_src && (i.sr = a.aldstat_src), 
            a.aldstat_qr && (i.qr = a.aldstat_qr), a.ald_share_src && (i.usr = a.ald_share_src), 
            f(i, "GET", "d.html");
        }
    }, b = function(t) {
        wx.showShareMenu({
            withShareTicket: !0
        }), this.aldstat_showtime = Date.now(), this.aldstat_showoption = void 0 !== t ? t : {};
        var a = "";
        try {
            a = wx.getStorageSync("app_session_key_create_show_upload");
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            a = "";
        }
        a && a > 0 && "number" == typeof a && (this.aldstat_access_token = "" + Date.now() + Math.floor(1e7 * Math.random())), 
        k(this, "app", "show"), void 0 !== t && (console.log(t), void 0 !== t.shareTicket ? S(this, t.shareTicket, "click") : void 0 !== t.query && void 0 !== t.query.ald_share_src && S(this, "0", "click"));
    }, q = function(t, a) {
        var e = this;
        e.aldstat_duration = Date.now() - e.aldstat_showtime, k(e, "app", "hide");
    }, D = function(t, a) {
        var e = getApp();
        M(e, this, "hide");
    }, T = function(t, a) {
        var e = getApp();
        M(e, this, "unload");
    }, A = function(t, a) {
        var e = "";
        try {
            e = wx.getStorageSync("aldstat_src");
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            e = "";
        }
        var s = getApp();
        if (wx.showShareMenu, e && (s.aldstat_src = e), !o(t)) {
            if (void 0 !== t.aldsrc) if (e) s.aldstat_qr = t.aldsrc; else {
                try {
                    wx.setStorageSync("aldstat_src", t.aldsrc);
                } catch (t) {}
                s.aldstat_src = t.aldsrc, s.aldstat_qr = t.aldsrc;
            }
            void 0 !== t.ald_share_src && (s.ald_share_src = t.ald_share_src), this.aldstat_page_args = JSON.stringify(t);
        }
        M(s, this, "load");
    }, M = function(a, e, s) {
        var n = "";
        try {
            n = wx.getStorageSync("page_" + s + "_upload");
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            n = "";
        }
        if ((n || "show" === s) && !(n < 1 && "number" == typeof n)) {
            if (e.aldstat_start_time = Date.now(), e.aldstat_error_count = 0, a.aldstat_page_count ? a.aldstat_page_count++ : a.aldstat_page_count = 1, 
            a.aldstat_first_page || (a.aldstat_first_page = e.__route__, e.aldstat_is_first_page = !0), 
            a.aldstat_last_page = e.__route__, void 0 == l) var o = ""; else o = l.app_key;
            var r = {
                uu: t(a),
                at: a.aldstat_access_token,
                wsr: a.aldstat_showoption,
                ak: o.replace(/(^\s*)|(\s*$)/g, ""),
                ev: "page",
                st: e.aldstat_start_time,
                dr: Date.now() - e.aldstat_start_time,
                pp: e.__route__,
                life: s,
                sc: e.page_share_count,
                ec: e.aldstat_error_count,
                nt: a.aldstat_network_type,
                pm: a.aldstat_phone_model,
                pr: a.aldstat_pixel_ratio,
                ww: a.aldstat_window_width,
                wh: a.aldstat_window_height,
                lang: a.aldstat_language,
                wv: a.aldstat_wechat_version,
                lat: a.aldstat_lat,
                lng: a.aldstat_lng,
                spd: a.aldstat_speed,
                v: _,
                wsdk: a.aldstat_vsdk_version,
                sv: a.aldstat_sv,
                wvv: a.aldstat_wvv
            };
            e.aldstat_is_first_page && (r.ifp = "true"), a.aldstat_page_last_page && (r.lp = a.aldstat_page_last_page), 
            a.aldstat_location_name && (r.ln = a.aldstat_location_name), e.aldstat_page_args && (r.ag = e.aldstat_page_args), 
            a.aldstat_src && (r.sr = a.aldstat_src), a.aldstat_qr && (r.qr = a.aldstat_qr), 
            a.ald_share_src && (r.usr = a.ald_share_src), a.aldstat_page_last_page = e.__route__, 
            f(r, "GET", "d.html");
        }
    }, E = function(t, a) {
        var e = getApp();
        M(e, this, "show");
    }, I = function(t, a) {
        var e = getApp();
        v(e, "event", "ald_pulldownrefresh", 1);
    }, G = function(t, a) {
        var e = getApp();
        v(e, "event", "ald_reachbottom", 1);
    }, O = function(t, a) {
        var e = this, s = getApp();
        if (void 0 !== t && void 0 !== t[1]) {
            var n = "";
            try {
                n = wx.getStorageSync("aldstat_uuid");
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                n = "uuid_getstoragesync";
            }
            var o = "";
            try {
                o = wx.getStorageSync(n);
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                o = "p_share_count_getst";
            }
            var r = "";
            if ("undefined" !== s.ald_share_src && s.ald_share_src) {
                r = s.ald_share_src;
                for (var _ = r.split(","), i = !0, d = 0, c = _.length; d < c; d++) {
                    if (_[d].replace('"', "") == n) {
                        i = !1;
                        break;
                    }
                }
                _.length >= 3 && (i && _.shift(), r = _.toString()), "" !== r && i && (r = r + "," + n);
            } else try {
                r = wx.getStorageSync("aldstat_uuid");
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                r = "ald_share_src_getst";
            }
            if (t[1].path && "undefined" !== t[1].path || (l.defaultPath ? t[1].path = l.defaultPath : t[1].path = e.__route__), 
            -1 != t[1].path.indexOf("?") ? t[1].path += "&ald_share_src=" + r : t[1].path += "?ald_share_src=" + r, 
            v(s, "event", "ald_share_chain", {
                path: s.aldstat_last_page,
                chain: r
            }), "" === o || void 0 === o) {
                try {
                    wx.setStorageSync(n, 1);
                } catch (t) {}
                o = 1, s.page_share_count = o;
            } else {
                o = parseInt(wx.getStorageSync(n)) + 1, s.page_share_count = o;
                try {
                    wx.setStorageSync(n, o);
                } catch (t) {}
            }
            g(function(t) {
                var a = "";
                try {
                    a = wx.getStorageSync("aldstat_uuid");
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    a = "uuid_getstoragesync";
                }
                t.userInfo.uu = a, f(t.userInfo, "GET", "u.html");
            });
            t[1];
            void 0 === t[1].success && (t[1].success = function(t) {}), void 0 === t[1].fail && (t[1].fail = function(t) {});
            var u = t[1].fail, p = t[1].success;
            return t[1].success = function(t) {
                new Array();
                if ("object" === _typeof(t.shareTickets)) for (var a = 0; a < t.shareTickets.length; a++) S(s, t.shareTickets[a], "user");
                v(s, "event", "ald_share_status", JSON.stringify(t)), p(t);
            }, t[1].fail = function(t) {
                v(s, "event", "ald_share_status", "fail"), u(t);
            }, t[1];
        }
    }, N = App;
    App = function(t) {
        e(t, "onLaunch", m), e(t, "onUnlaunch", y), e(t, "onShow", b), e(t, "onHide", q), 
        e(t, "onError", x), N(t);
    };
    var j = Page;
    Page = function(t) {
        e(t, "onLoad", A), e(t, "onUnload", T), e(t, "onShow", E), e(t, "onHide", D), e(t, "onReachBottom", G), 
        e(t, "onPullDownRefresh", I), void 0 !== t.onShareAppMessage && s(t, "onShareAppMessage", O), 
        j(t);
    };
}();