var t = require("/config.js");

App({
    onLaunch: function(t) {
        wx.request({
            url: "https://+" + this.globalData.host + "/weixin/applet/api/Values/Ticket?strUser=10000&strPwd=c45c5d8f48ba28f23c5b0c6efb6bda36",
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                if (200 == t.statusCode) {
                    t.data;
                    wx.setStorage({
                        key: "Authorization",
                        data: t.data
                    });
                }
            },
            fail: function(t) {}
        });
    },
    getUserInfo: function(t, a) {
        var e = this;
        this.globalData.userInfo ? "function" == typeof t && t(this.globalData.userInfo) : wx.login({
            success: function(o) {
                wx.request({
                    url: "https://" + e.globalData.host + "/weixin/applet/api/Values/getSessonKey",
                    data: {
                        code: o.code,
                        appletId: e.globalData.appletId
                    },
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(o) {
                        var n = o.data.openid;
                        wx.getUserInfo({
                            success: function(a) {
                                a.userInfo.u_openid = n, e.globalData.userInfo = a.userInfo, e.login(e.globalData.userInfo), 
                                "function" == typeof t && t(a.userInfo);
                            },
                            fail: function(t) {
                                "function" == typeof a && a(), wx.showModal({
                                    title: "警告",
                                    content: "您点击了拒绝授权，无法使用此功能。",
                                    success: function(t) {
                                        t.confirm;
                                    }
                                });
                            }
                        });
                    },
                    fail: function(t) {
                        "function" == typeof a && a();
                    }
                });
            },
            fail: function(t) {
                "function" == typeof a && a();
            }
        });
    },
    login: function(t) {
        this.apiRequestPost({
            urlMethod: "api/Users/setUserPublicLogin",
            data: {
                openid: t.u_openid,
                avatarUrl: t.avatarUrl,
                city: t.city,
                country: t.country,
                gender: t.gender,
                language: t.language,
                nickName: t.nickName,
                province: t.province
            },
            success: function(t) {},
            fail: function(t) {}
        });
    },
    checkAuthorization: function(t, a) {
        try {
            var e = wx.getStorageSync("Authorization");
            e ? "function" == typeof t && t(e) : wx.request({
                url: "https://" + this.globalData.host + "/weixin/applet/api/Values/Ticket?strUser=10000&strPwd=c45c5d8f48ba28f23c5b0c6efb6bda36",
                header: {
                    "content-type": "application/json"
                },
                success: function(e) {
                    if (200 == e.statusCode) {
                        var o = e.data;
                        wx.setStorage({
                            key: "Authorization",
                            data: e.data
                        }), "function" == typeof t && t(o);
                    } else "function" == typeof a && a();
                },
                fail: function(t) {
                    "function" == typeof a && a();
                }
            });
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            "function" == typeof a && a();
        }
    },
    apiRequestGet: function(t) {
        var a = this;
        this.checkAuthorization(function(e) {
            var o = t.data;
            o.appletId = a.globalData.appletId, wx.request({
                url: "https://" + a.globalData.host + "/weixin/applet/" + t.urlMethod,
                data: o,
                header: {
                    "content-type": "application/json",
                    Authorization: "BasicAuth " + e
                },
                success: function(e) {
                    403 == e.statusCode || 401 == e.statusCode ? (wx.setStorage({
                        key: "Authorization",
                        data: null
                    }), a.apiRequestGet(t)) : 200 == e.statusCode ? t.success && "function" == typeof t.success && t.success(e) : "function" == typeof t.fail && t.fail(e);
                },
                fail: function(a) {
                    t.fail && "function" == typeof t.fail && t.fail(a);
                }
            });
        }, function(a) {
            t.fail && "function" == typeof t.fail && t.fail(a);
        });
    },
    apiRequestPost: function(t) {
        var a = this;
        this.checkAuthorization(function(e) {
            var o = t.data;
            o.appletId = a.globalData.appletId, wx.request({
                url: "https://" + a.globalData.host + "/weixin/applet/" + t.urlMethod + "?appletId=" + a.globalData.appletId,
                data: o,
                header: {
                    "content-type": "application/json",
                    Authorization: "BasicAuth " + e
                },
                method: "POST",
                success: function(e) {
                    403 == e.statusCode || 401 == e.statusCode ? (wx.setStorage({
                        key: "Authorization",
                        data: null
                    }), a.apiRequestPost(t)) : 200 == e.statusCode ? t.success && "function" == typeof t.success && t.success(e) : "function" == typeof t.fail && t.fail(e);
                },
                fail: function(a) {
                    t.fail && "function" == typeof t.fail && t.fail(a);
                }
            });
        }, function(a) {
            t.fail && "function" == typeof t.fail && t.fail(a);
        });
    },
    apiUploadFile: function(t) {
        var a = this;
        wx.uploadFile({
            url: "https://" + a.globalData.host + "/weixin/applet/" + t.urlMethod + "?appletId=" + a.globalData.appletId,
            filePath: t.filePath,
            name: t.name,
            formData: t.formData,
            header: {
                "Content-Type": "multipart/form-data"
            },
            success: function(a) {
                200 == a.statusCode ? "function" == typeof t.success && t.success(a) : "function" == typeof t.fail && t.fail(a);
            },
            fail: function(a) {
                "function" == typeof t.fail && t.fail(a);
            }
        });
    },
    globalData: {
        host: t.host,
        userInfo: null,
        token: "",
        code: "",
        lawyerId: t.lawyerId,
        appletId: t.appletId,
        source: 1,
        views: 0,
        haveFreeConsult: t.haveFreeConsult,
        appSecret: t.appSecret,
        otherTel: "",
        info: {
            tel: "",
            name: "",
            officeName: ""
        }
    }
});