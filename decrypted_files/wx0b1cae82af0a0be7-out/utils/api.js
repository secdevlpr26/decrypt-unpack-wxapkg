function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var u = t[n];
            u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), 
            Object.defineProperty(e, u.key, u);
        }
    }
    return function(t, n, u) {
        return n && e(t.prototype, n), u && e(t, u), t;
    };
}(), n = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("token")), u = "https://h5.jsqcdj.com/home-api", r = new (function() {
    function a() {
        e(this, a);
    }
    return t(a, [ {
        key: "buildURL",
        value: function(e, t) {
            if (!t) return e;
            var u = n.default.getAccessToken();
            return u ? e + (e.indexOf("?") >= 0 ? "&" : "?") + "access_token=" + u : (wx.switchTab({
                url: "/pages/index/index"
            }), !1);
        }
    }, {
        key: "get",
        value: function(e, t, n) {
            return (e = r.buildURL(e, n)) ? new Promise(function(n, r) {
                try {
                    wx.request({
                        url: u + e,
                        data: t,
                        success: function(e) {
                            "20002" == e.data.err_code || "20001" == e.data.err_code ? (wx.switchTab({
                                url: "/pages/index/index"
                            }), r(e)) : "0" == e.data.err_code || "2" == e.data.err_code ? n(e.data) : (wx.showToast({
                                title: e.data.err_msg,
                                image: "/images/tip2.png",
                                duration: 1300
                            }), r(e));
                        },
                        fail: function(e) {
                            r(e);
                        }
                    });
                } catch (e) {}
            }) : new Promise(function(e, t) {
                t();
            });
        }
    }, {
        key: "post",
        value: function(e, t, n) {
            return (e = r.buildURL(e, n)) ? new Promise(function(n, r) {
                try {
                    wx.request({
                        url: u + e,
                        method: "POST",
                        data: t,
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(e) {
                            "20002" == e.data.err_code || "20001" == e.data.err_code ? (wx.switchTab({
                                url: "/pages/index/index"
                            }), r(e)) : "0" == e.data.err_code || "2" == e.data.err_code ? n(e.data) : (wx.showToast({
                                title: e.data.err_msg,
                                image: "/images/tip2.png",
                                duration: 1300
                            }), r(e));
                        },
                        fail: function(e) {
                            r(e);
                        }
                    });
                } catch (e) {}
            }) : new Promise(function(e, t) {
                t();
            });
        }
    }, {
        key: "updataAvatar",
        value: function(e) {
            return e = r.buildURL(e, !0), new Promise(function(t, n) {
                wx.chooseImage({
                    count: 1,
                    success: function(n) {
                        var r = n.tempFilePaths;
                        wx.uploadFile({
                            url: u + e,
                            filePath: r[0],
                            name: "file",
                            success: function(e) {
                                e = JSON.parse(e.data), t(e);
                            },
                            fail: function() {
                                wx.showToast({
                                    title: "上传失败",
                                    image: "/images/fail.png",
                                    duration: 1500
                                });
                            }
                        });
                    }
                });
            });
        }
    }, {
        key: "getOpenid",
        value: function(e, t) {
            return r.get(e, t);
        }
    }, {
        key: "wechatLoginCheck",
        value: function(e, t) {
            return r.post(e, t);
        }
    }, {
        key: "wechatLogin",
        value: function(e, t) {
            return r.post(e, t);
        }
    }, {
        key: "sendCaptcha",
        value: function(e, t) {
            return r.post(e, t);
        }
    }, {
        key: "homeData",
        value: function(e, t) {
            return r.get(e, t, !0);
        }
    }, {
        key: "myShared",
        value: function(e, t) {
            return r.get(e, t, !0);
        }
    }, {
        key: "invitedEnter",
        value: function(e, t) {
            return r.post(e, t);
        }
    }, {
        key: "serveSearch",
        value: function(e, t) {
            return r.get(e, t, !0);
        }
    }, {
        key: "oneClickOrder",
        value: function(e, t) {
            return r.post(e, t, !0);
        }
    }, {
        key: "serveDetail",
        value: function(e, t) {
            return r.get(e, t, !0);
        }
    }, {
        key: "evaluatesList",
        value: function(e, t) {
            return r.get(e, t, !0);
        }
    }, {
        key: "appointmentData",
        value: function(e, t) {
            return r.get(e, t, !0);
        }
    }, {
        key: "serveOrderAdd",
        value: function(e, t) {
            return r.post(e, t, !0);
        }
    }, {
        key: "payReadyData",
        value: function(e, t) {
            return r.get(e, t, !0);
        }
    }, {
        key: "balancePay",
        value: function(e, t) {
            return r.post(e, t, !0);
        }
    }, {
        key: "mobilePay",
        value: function(e, t) {
            return r.post(e, t, !0);
        }
    }, {
        key: "rechargeMenus",
        value: function(e, t) {
            return r.get(e, t, !0);
        }
    }, {
        key: "serveMenusList",
        value: function(e, t) {
            return r.get(e, t, !0);
        }
    }, {
        key: "serveList",
        value: function(e, t) {
            return r.get(e, t, !0);
        }
    }, {
        key: "nearbyMenus",
        value: function(e, t) {
            return r.get(e, t, !0);
        }
    }, {
        key: "nearbyMenusList",
        value: function(e, t) {
            return r.get(e, t, !0);
        }
    }, {
        key: "addressList",
        value: function(e, t) {
            return r.get(e, t, !0);
        }
    }, {
        key: "updateDefaultAddr",
        value: function(e, t) {
            return r.get(e, t, !0);
        }
    }, {
        key: "deleteAddr",
        value: function(e, t) {
            return r.get(e, t, !0);
        }
    }, {
        key: "searchAddr",
        value: function(e, t) {
            return r.get(e, t, !0);
        }
    }, {
        key: "updateAddr",
        value: function(e, t) {
            return r.post(e, t, !0);
        }
    }, {
        key: "getDataAddr",
        value: function(e, t) {
            return r.get(e, t, !0);
        }
    }, {
        key: "commonUserInfo",
        value: function(e, t) {
            return r.get(e, t, !0);
        }
    }, {
        key: "changeRole",
        value: function(e, t) {
            return r.get(e, t, !0);
        }
    }, {
        key: "updateUserInfo",
        value: function(e, t) {
            return r.post(e, t, !0);
        }
    }, {
        key: "memberBill",
        value: function(e, t) {
            return r.get(e, t, !0);
        }
    }, {
        key: "newsList",
        value: function(e, t) {
            return r.get(e, t, !0);
        }
    }, {
        key: "orderList",
        value: function(e, t) {
            return r.get(e, t, !0);
        }
    }, {
        key: "orderDetail",
        value: function(e, t) {
            return r.get(e, t, !0);
        }
    }, {
        key: "orderBtn",
        value: function(e, t) {
            return r.post(e, t, !0);
        }
    }, {
        key: "wxPaySign",
        value: function(e, t) {
            return r.post(e, t, !0);
        }
    }, {
        key: "myCoupons",
        value: function(e, t) {
            return r.post(e, t);
        }
    } ]), a;
}())();

exports.default = r;