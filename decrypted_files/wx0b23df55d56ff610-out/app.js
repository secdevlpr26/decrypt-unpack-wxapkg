function e(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

var t, n = require("comm/script/config"), o = require("util/util"), i = require("./utils/server"), a = require("./utils/config.js");

App((t = {
    globalData: {
        wxUserInfo: null,
        wxDeviceInfo: null,
        hwxUserInfo: null,
        hwxDeviceInfo: null,
        timeDifference: "0",
        configLists: {}
    },
    onLaunch: function() {
        this.initStorage(), this.getWxDeviceInfo();
    },
    getWxDeviceInfo: function(e) {
        try {
            var t = wx.getSystemInfoSync();
            this.globalData.wxDeviceInfo = t, this.globalData.winRate = t.windowWidth / 750, 
            "function" == typeof e && e(this.globalData.wxDeviceInfo);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            console.log(JSON.stringify(e));
        }
    },
    setHwxUserInfo: function(e) {
        this.globalData.hwxUserInfo = e, wx.setStorage({
            key: n.storageKeys.currentUser,
            data: e
        });
    },
    setHiDeviceInfo: function(e) {
        console.log("机型机型机型机型机型机型机型机型机型"), this.globalData.hwxDeviceInfo = e, wx.setStorage({
            key: n.storageKeys.currentDevice,
            data: e
        });
    },
    setTimeDifference: function(e) {
        this.globalData.timeDifference = e, wx.setStorage({
            key: n.storageKeys.timeDifference,
            data: e
        });
    },
    getUserInfo: function(e) {
        var t = this;
        wx.login({
            success: function() {
                wx.getUserInfo({
                    success: function(n) {
                        t.globalData.wxUserInfo = n.userInfo, console.log(n.userInfo), "function" == typeof e && e(this.globalData.userInfo);
                    }
                });
            }
        });
    },
    getCity: function(e) {
        wx.getLocation({
            type: "gcj02",
            success: function(t) {
                t.latitude, t.longitude, "function" == typeof e && e(t);
            }
        });
    },
    initStorage: function() {
        var e = this;
        wx.getStorage({
            key: n.storageKeys.currentDevice,
            success: function(t) {
                e.globalData.hwxDeviceInfo = t.data;
            }
        });
        try {
            var t = wx.getStorageSync(n.storageKeys.currentUser);
            o.isExist(t) ? e.globalData.hwxUserInfo = t : e.globalData.hwxUserInfo = null;
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            console.log(JSON.stringify(e));
        }
        try {
            var i = wx.getStorageSync(n.storageKeys.timeDifference);
            o.isBlank(i) ? e.globalData.timeDifference = i : e.globalData.timeDifference = 0;
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            console.log(JSON.stringify(e));
        }
    },
    setConfigLists: function(e) {
        this.globalData.configLists = e;
    },
    getOpenId: function(e) {
        wx.login({
            success: function(t) {
                t.code && i.getJSON("/User/getOpenid", {
                    url: "https://api.weixin.qq.com/sns/jscode2session?appid=" + a.appid + "&secret=" + a.secret + "&js_code=" + t.code + "&grant_type=authorization_code&code=" + t.code
                }, function(t) {
                    var n = t.data.openid;
                    getApp().globalData.openid = n, "function" == typeof e && e();
                });
            }
        });
    },
    register: function(e) {
        var t = this;
        this.getUserInfo(function() {
            var n = t.globalData.openid, o = (t.globalData.userInfo, getApp().globalData.fid);
            i.getJSON("/User/register?open_id=" + n + "&country=&gender=&nick_name=&province=&city=&head_pic=&user_id=" + o, function(n) {
                t.globalData.userInfo = n.data.res, "function" == typeof e && e();
            });
        });
    },
    register1: function(e) {
        var t = this;
        this.getUserInfo1(function() {
            var n = t.globalData.openid, o = t.globalData.user, a = o.country, s = o.city, r = o.gender, c = o.nickName, f = o.province, g = o.avatarUrl;
            i.getJSON("/User/register?open_id=" + n + "&country=" + a + "&gender=" + r + "&nick_name=" + c + "&province=" + f + "&city=" + s + "&head_pic=" + g + "&user_id=0", function(n) {
                t.globalData.userInfo = n.data.res, "function" == typeof e && e();
            });
        });
    }
}, e(t, "getUserInfo", function(e) {
    return void e(this.globalData.userInfo);
}), e(t, "getUserInfo1", function(e) {
    var t = this;
    wx.login({
        success: function() {
            wx.getUserInfo({
                success: function(n) {
                    t.globalData.user = n.userInfo, "function" == typeof e && e(t.globalData.user);
                }
            });
        }
    });
}), t));