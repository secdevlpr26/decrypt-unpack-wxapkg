function o(o, e, t) {
    return e in o ? Object.defineProperty(o, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : o[e] = t, o;
}

var e, t = getApp(), n = "", a = require("../../../utils/config.js");

Page((e = {
    data: {
        imgRootPath: a.imgRootPath,
        noCover: "../../../images/no_cover.png"
    },
    toTel: function(o) {
        wx.makePhoneCall({
            phoneNumber: o.currentTarget.dataset.phone
        });
    },
    imgError: function(e) {
        e.currentTarget.dataset.index;
        this.setData(o({}, "book.pic1", "no_cover"));
    },
    onLoad: function(o) {
        var e = o.id;
        n = wx.getStorageSync("3rdsession");
        var a = this;
        a.setData({
            telPhone: t.globalData.telPhone
        }), a.getOrderBookDetails(e);
    },
    getOrderBookDetails: function(o) {
        var e = this;
        wx.request({
            url: a.getOrderBookDetails,
            data: {
                sessionKey: n,
                id: o,
                schoolId: t.globalData.schoolId
            },
            success: function(o) {
                if (200 == o.data.type) {
                    var t = o.data.date;
                    e.setData({
                        book: t.book,
                        appo: t.app
                    });
                } else wx.showToast({
                    title: o.data.content,
                    icon: "none"
                });
            },
            fail: function(o) {
                wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    }
}, o(e, "toTel", function(o) {
    wx.makePhoneCall({
        phoneNumber: o.currentTarget.dataset.phone
    });
}), o(e, "onReady", function() {}), o(e, "onShow", function() {}), o(e, "onHide", function() {}), 
o(e, "onUnload", function() {}), o(e, "onPullDownRefresh", function() {}), o(e, "onReachBottom", function() {}), 
o(e, "onShareAppMessage", function() {}), e));