var e = require("../../util/common.js"), t = getApp(), n = t.globalData.domain;

Page({
    data: {
        wgy: !1
    },
    onLoad: function() {
        var e = this;
        wx.getStorage({
            key: "unitCode",
            success: function(t) {
                t.data.length > 26 ? e.setData({
                    wgy: !1
                }) : e.setData({
                    wgy: !0
                });
            }
        });
    },
    saveEvent: function() {
        if (!t.globalData.auth) return e.needRegister(), !1;
        wx.request({
            url: n + "/applet/getUserLevel",
            data: {
                userId: t.globalData.userId
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                1 != t.data.code || 5 != t.data.level && 6 != t.data.level ? 1 == t.data.code && 5 != t.data.level ? e.waitCheck() : wx.showModal({
                    title: "温馨提示",
                    content: t.data.msg
                }) : wx.navigateTo({
                    url: "event/main-class/main-class"
                });
            }
        });
    },
    queryEvent: function(t) {
        wx.getStorage({
            key: "userId",
            success: function(e) {
                wx.navigateTo({
                    url: "event/select/select"
                });
            },
            fail: function() {
                e.needRegister();
            }
        });
    },
    queryPoint: function(t) {
        wx.getStorage({
            key: "userId",
            success: function(e) {
                wx.navigateTo({
                    url: "event/my-point/myPoint"
                });
            },
            fail: function() {
                e.needRegister();
            }
        });
    },
    queryMyEvent: function(t) {
        wx.getStorage({
            key: "userId",
            success: function(e) {
                wx.navigateTo({
                    url: "event/my-event/my-event"
                });
            },
            fail: function() {
                e.needRegister();
            }
        });
    },
    queryFree: function() {
        wx.navigateTo({
            url: "event/Free/Free"
        });
    },
    querysm: function() {
        wx.navigateTo({
            url: "event/Sm/Sm"
        });
    },
    queryjfgz: function() {
        wx.navigateTo({
            url: "event/jfgz/jfgz"
        });
    }
});