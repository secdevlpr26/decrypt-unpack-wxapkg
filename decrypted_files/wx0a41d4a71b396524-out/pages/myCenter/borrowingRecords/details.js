function o(o, e, t) {
    return e in o ? Object.defineProperty(o, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : o[e] = t, o;
}

var e = getApp(), t = "", n = require("../../../utils/config.js");

Page({
    data: {
        imgRootPath: n.imgRootPath,
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
        t = wx.getStorageSync("3rdsession"), this.getBorrowBookDetails(e);
    },
    getBorrowBookDetails: function(o) {
        var a = this;
        wx.request({
            url: n.getBorrowBookDetails,
            data: {
                sessionKey: t,
                id: o,
                schoolId: e.globalData.schoolId
            },
            success: function(o) {
                if (200 == o.data.type) {
                    var e = o.data.date;
                    a.setData({
                        book: e.book,
                        record: e.record,
                        telPhone: e.telPhone
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
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    orderBook: function(o) {
        var e = wx.getStorageSync("buyMemberInfo");
        if (e) if (1 == e.success) wx.navigateTo({
            url: "../../member/index"
        }); else {
            var t = o.currentTarget.dataset.id;
            wx.navigateTo({
                url: "../../carts/buybookpay/buy?bookId=" + t + "&type=6"
            });
        } else {
            var n = o.currentTarget.dataset.id;
            wx.navigateTo({
                url: "../../carts/buybookpay/buy?bookId=" + n + "&type=6"
            });
        }
    }
});