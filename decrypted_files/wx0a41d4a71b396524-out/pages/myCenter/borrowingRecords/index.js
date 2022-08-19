function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e = getApp(), a = "", o = require("../../../utils/config.js");

Page({
    data: {
        tabs: [ "未还书籍", "历史借阅" ],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        imgRootPath: o.imgRootPath,
        noCover: "../../../images/no_cover.png"
    },
    onLoad: function() {
        var t = this;
        wx.getSystemInfo({
            success: function(e) {
                t.setData({
                    sliderLeft: (e.windowWidth / t.data.tabs.length - 96) / 2,
                    sliderOffset: e.windowWidth / t.data.tabs.length * t.data.activeIndex
                });
            }
        }), t.setData({
            telPhone: e.globalData.telPhone
        }), a = wx.getStorageSync("3rdsession"), t.getBorrowBooks();
    },
    notImgError: function(e) {
        var a = "nots[" + e.currentTarget.dataset.index + "].pic1";
        this.setData(t({}, a, "no_cover"));
    },
    hisImgError: function(e) {
        var a = "hiss[" + e.currentTarget.dataset.index + "].pic1";
        this.setData(t({}, a, "no_cover"));
    },
    getBorrowBooks: function() {
        var t = this;
        wx.request({
            url: o.getBorrowBooks,
            data: {
                sessionKey: a,
                schoolId: e.globalData.schoolId
            },
            success: function(e) {
                console.log("获得记录返回值", e);
                var a = e.data.date;
                200 == e.data.type ? t.setData({
                    hiss: a.hiss,
                    nots: a.nots
                }) : wx.showToast({
                    title: e.data.content,
                    icon: "none"
                });
            },
            fail: function(t) {
                wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    tabClick: function(t) {
        this.setData({
            sliderOffset: t.currentTarget.offsetLeft,
            activeIndex: t.currentTarget.id
        });
    },
    toTel: function(t) {
        wx.makePhoneCall({
            phoneNumber: t.currentTarget.dataset.phone
        });
    },
    toDeatil: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "details?id=" + e
        });
    }
});