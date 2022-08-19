function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var t = getApp(), a = require("../../utils/config.js"), o = "", n = "../bind/register", i = "";

Page({
    data: {
        index: 0,
        array: [],
        objs: [],
        imgRootPath: a.imgRootPath,
        noCover: "../../images/no_cover.png",
        noBanner: "../../images/home_banner.png",
        reqNum: 0,
        address: "正在定位",
        bannerBool: !1,
        motto: "Hello World",
        userInfo: {},
        hasUserInfo: !1,
        imgUrls: [ "../../images/home_banner.png", "../../images/home_banner.png", "../../images/home_banner.png" ],
        newBook: [],
        hot: [],
        indicatorDots: !0,
        autoplay: !0,
        interval: 5e3,
        duration: 1e3,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        tenant: "重庆市",
        scanSchoolId: ""
    },
    onLoad: function(e) {
        var a = this, n = decodeURIComponent(e.scene);
        if ("undefined" != n) {
            wx.showLoading({
                title: "授权中.....",
                mask: !0
            });
            var i = setInterval(function() {
                var e = t.globalData.sessionKey;
                null != e && "" != e && (o = e, a.jumpPage(n), clearInterval(i));
            }, 1e3);
        } else {
            wx.showLoading({
                title: "加载中.....",
                mask: !0
            });
            var s = setInterval(function() {
                var e = t.globalData.sessionKey;
                console.log("val0", e), console.log("schoolId", t.globalData.schoolId), null != e && "" != e && (o = e, 
                a.getUserMsg(), clearInterval(s));
            }, 1500);
        }
    },
    onShow: function() {
        if (0 == t.globalData.readerType) return !1;
        1 == t.globalData.bind && (t.globalData.bind = 2), this.showPageMsg();
    },
    bindViewTap: function() {
        wx.navigateTo({
            url: "../logs/logs"
        });
    },
    onReady: function() {},
    scanCode: function() {
        var e = this;
        wx.scanCode({
            success: function(t) {
                var a = t.path;
                if (a) {
                    var o = a.indexOf("scene="), n = o >= 0 ? a.substr(o + "scene=".length) : "";
                    n = (n = decodeURIComponent(n)).indexOf("schoolId_") > -1 ? n.substr(0, n.indexOf("schoolId_") - 1) : n, 
                    wx.showLoading({
                        title: "授权中...",
                        mask: !0
                    }), n && e.jumpPage(n);
                }
            }
        });
    },
    switchTeam: function() {
        wx.navigateTo({
            url: "/pages/choose/index"
        });
    },
    showDialog: function() {
        this.dialog.showDialog();
    },
    confirmEvent: function() {
        this.dialog.hideDialog();
    },
    showPageMsg: function() {
        var e = this;
        e.getBanner(), e.getNewBookShelves(), e.getRecommendBook(), e.isBuyMember();
    },
    getUserMsg: function() {
        var e = this, n = wx.getStorageSync("schoolId");
        wx.request({
            url: a.getUserMsg,
            data: {
                sessionKey: o,
                schoolId: n
            },
            success: function(a) {
                if (wx.hideLoading(), 200 == a.data.type) {
                    var o = a.data.content;
                    if (e.data.reqNum = 1, 0 == o) return e.readerStatusHandler(), !1;
                    if (1 == o) {
                        t.globalData.readerType = 1, t.globalData.schoolId = a.data.date.schoolId, t.globalData.username = a.data.date.name;
                        var n = a.data.date.schools;
                        wx.setStorageSync("schoolId", a.data.date.schoolId), e.showPageMsg(), e.getPromptMsg(), 
                        e.setData({
                            team: n[0].schoolName
                        });
                    }
                } else wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            },
            fail: function(e) {
                wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    getPhoneNumber: function(e) {
        var t = this;
        if ("getPhoneNumber:ok" == e.detail.detail.errMsg) {
            var a = e.detail.detail.encryptedData, o = e.detail.detail.iv;
            wx.showLoading({
                title: "获取手机号.....",
                mask: !0
            }), t.getPhone(a, o);
        } else t.dialog = t.selectComponent("#dialog"), t.dialog.showDialog();
    },
    getPhone: function(e, t) {
        var n = this;
        wx.showLoading({
            title: "注册中...",
            mask: !0
        }), wx.request({
            method: "GET",
            url: a.getPhone,
            data: {
                encrypdata: e,
                ivdata: t,
                sessionKey: o
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                if (200 == e.data.type) {
                    var t = e.data.date;
                    n.phoneRegister(t);
                } else wx.hideLoading(), wx.showToast({
                    title: e.data.content,
                    icon: "success"
                });
            },
            fail: function(e) {
                wx.hideLoading(), wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    phoneRegister: function(e) {
        var n = this;
        wx.request({
            url: a.registerReader,
            data: {
                sessionKey: o,
                name: "游客",
                phone: e,
                scId: n.data.scanSchoolId
            },
            success: function(e) {
                wx.hideLoading(), 200 == e.data.type ? (t.globalData.readerType = 1, t.globalData.bind = 1, 
                t.globalData.schoolId = n.data.scanSchoolId, wx.showToast({
                    title: "注册成功",
                    mask: !0
                }), wx.setStorageSync("schoolId", n.data.scanSchoolId), setTimeout(function() {
                    var e = "/pages/index/index";
                    i && (e = e + "?scene=" + encodeURIComponent(i)), wx.reLaunch({
                        url: e
                    });
                }, 1500)) : wx.showToast({
                    title: e.data.content,
                    icon: "none"
                });
            },
            fail: function(e) {
                wx.hideLoading(), wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    readerStatusHandler: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        e ? e.freeFlag ? (n = "../bind/index?id=" + e.id, wx.navigateTo({
            url: n
        })) : (this.setData({
            scanSchoolId: e.id
        }), this.dialog = this.selectComponent("#dialog"), this.dialog.showDialog()) : wx.navigateTo({
            url: "../bind/register"
        });
    },
    jumpPage: function(e) {
        var o = this;
        if (e.indexOf("&") >= 0) {
            var n = e.split("&"), s = e.substring(e.indexOf("&") + 1);
            i = e, wx.login({
                success: function(e) {
                    e.code ? wx.request({
                        url: a.code,
                        data: {
                            code: e.code,
                            state: s
                        },
                        success: function(e) {
                            var a = e.data.statu, i = e.data.result;
                            if (0 == a) wx.hideLoading(), o.data.reqNum = 1, o.readerStatusHandler(i); else if (1 == a) {
                                var s = e.data.result;
                                wx.setStorageSync("schoolId", s), t.globalData.schoolId = s, wx.hideLoading(), wx.showToast({
                                    title: "微信小程序授权成功",
                                    duration: 2e3,
                                    mask: !0,
                                    complete: function() {
                                        setTimeout(function() {
                                            o.getUserMsg(), o.scanCodeJump(n);
                                        }, 2e3);
                                    }
                                });
                            } else 3 == a && (wx.hideLoading(), wx.showToast({
                                title: "二维码已失效无法授权",
                                icon: "none",
                                duration: 2e3,
                                mask: !0,
                                complete: function() {
                                    setTimeout(function() {
                                        o.getUserMsg();
                                    }, 1400);
                                }
                            }));
                        }
                    }) : wx.hideLoading();
                }
            });
        } else {
            var r = e;
            if (0 == r) return wx.navigateTo({
                url: "../myCenter/fine/index"
            }), wx.hideLoading(), !1;
            if (1 == r) return wx.navigateTo({
                url: "../myCenter/fine/index"
            }), wx.hideLoading(), !1;
            if (2 == r) wx.hideLoading(); else if (3 == r) return wx.showToast({
                title: "您有超期未还书籍，请尽快归还",
                icon: "none"
            }), wx.hideLoading(), !1;
        }
    },
    scanCodeJump: function(e) {
        var t = e[0];
        if ("8" == t) {
            if ("8" == t && void 0 != e[2]) {
                var a = e[1], o = e[2], n = e[3];
                wx.navigateTo({
                    url: "../scanBuy/index?clientId=" + a + "&barcode=" + o + "&gridNo=" + n
                });
            }
        } else if ("9" == t) {
            var i = e[1], s = e[2];
            wx.navigateTo({
                url: "../shoppingMall/index?type=9&clientId=" + i + "&orderNumber=" + s
            });
        }
    },
    getPromptMsg: function() {
        var e = this;
        wx.request({
            url: a.getPromptMsg,
            data: {
                sessionKey: o,
                schoolId: t.globalData.schoolId
            },
            success: function(t) {
                if (wx.hideLoading(), 200 == t.data.type) {
                    var a = t.data.content;
                    if (0 == a) return !1;
                    if (1 == a) {
                        var o = t.data.date;
                        if (o.success) return !1;
                        var n = o.type;
                        if (0 == n) return wx.showModal({
                            title: "借阅超期",
                            content: "您有超期书籍滞纳金未缴纳",
                            showCancel: !1,
                            success: function(e) {
                                e.confirm ? wx.navigateTo({
                                    url: "../myCenter/fine/index"
                                }) : e.cancel;
                            }
                        }), !1;
                        if (1 == n) return wx.showModal({
                            title: "损坏赔偿",
                            content: "您有书籍损坏赔偿未缴纳",
                            showCancel: !1,
                            success: function(e) {
                                e.confirm ? wx.navigateTo({
                                    url: "../myCenter/fine/index"
                                }) : e.cancel;
                            }
                        }), !1;
                        if (2 == n) return !1;
                        if (3 == n) return wx.showToast({
                            title: "您有超期未还书籍，请尽快归还",
                            icon: "none"
                        }), !1;
                        if (5 == n) e.getRechargeMsg(); else if (6 == n) return wx.showModal({
                            title: "借阅费用",
                            content: "您有书籍借阅费用未缴纳",
                            showCancel: !1,
                            success: function(e) {
                                e.confirm ? wx.navigateTo({
                                    url: "../pay/index"
                                }) : e.cancel;
                            }
                        }), !1;
                    }
                }
            },
            fail: function(e) {}
        });
    },
    getBanner: function() {
        var e = this;
        wx.request({
            url: a.getIndexBanner,
            data: {
                schoolId: t.globalData.schoolId
            },
            success: function(t) {
                200 == t.data.type && e.setData({
                    imgUrls: t.data.date,
                    bannerBool: !0
                });
            },
            fail: function(e) {}
        });
    },
    bannerImgError: function(t) {
        var a = "imgUrls[" + t.currentTarget.dataset.index + "]";
        this.setData(e({}, a, "no_cover"));
    },
    newImgError: function(t) {
        var a = "newBook[" + t.currentTarget.dataset.index + "].pic1";
        this.setData(e({}, a, "no_cover"));
    },
    hotImgError: function(t) {
        var a = "hot[" + t.currentTarget.dataset.index + "].pic1";
        this.setData(e({}, a, "no_cover"));
    },
    getNewBookShelves: function() {
        var e = this;
        wx.request({
            url: a.getNewBookShelves,
            data: {
                schoolId: t.globalData.schoolId
            },
            success: function(t) {
                200 == t.data.type && e.setData({
                    newBook: t.data.date
                });
            },
            fail: function(e) {}
        });
    },
    getRecommendBook: function() {
        var e = this;
        wx.request({
            url: a.getHotBook,
            data: {
                schoolId: t.globalData.schoolId
            },
            success: function(t) {
                200 == t.data.type && e.setData({
                    hot: t.data.date
                });
            },
            fail: function(e) {}
        });
    },
    getUserInfo: function(e) {
        t.globalData.userInfo = e.detail.userInfo, this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: !0
        });
    },
    toMoreNew: function() {
        wx.navigateTo({
            url: "../book/new"
        });
    },
    toMoreHot: function() {
        wx.navigateTo({
            url: "../book/hot"
        });
    },
    gotoSearch: function(e) {
        wx.navigateTo({
            url: "../search/index"
        });
    },
    toArticle: function(e) {
        wx.navigateTo({
            url: "../article/index?id=" + e.currentTarget.dataset.id
        });
    },
    todiscount: function(e) {
        var t = e.currentTarget.dataset.money;
        wx.navigateTo({
            url: "../discount/discount?money=" + t
        });
    },
    isBuyMember: function() {
        var e = wx.getStorageSync("schoolId");
        wx.request({
            url: a.isBuyMember,
            data: {
                sessionKey: o,
                schoolId: e
            },
            success: function(e) {
                if (200 == e.data.type) {
                    var t = e.data.date;
                    wx.setStorageSync("buyMemberInfo", t);
                    wx.getStorageSync("buyMemberInfo");
                }
            },
            fail: function(e) {
                wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    }
});