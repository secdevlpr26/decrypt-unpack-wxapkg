var t = "", e = "", a = (getApp(), require("../../../utils/config.js"));

Page({
    data: {
        nodata: !1
    },
    toAdd: function() {
        wx.navigateTo({
            url: "add"
        });
    },
    toedit: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "edit?id=" + e
        });
    },
    onLoad: function(a) {
        var s = this;
        t = wx.getStorageSync("3rdsession"), e = wx.getStorageSync("schoolId"), s.loadAddress(t);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    loadAddress: function(t) {
        var s = this;
        wx.request({
            url: a.userAddress,
            data: {
                sessionKey: t,
                schoolId: e
            },
            success: function(t) {
                if (200 == t.data.type) if (console.log("--------获取用户地址----------"), console.log(t), 
                0 == t.data.content) {
                    s.setData({
                        addressList: t.data.date
                    });
                    var e = t.data.date;
                    null == e || 0 == e.length ? s.setData({
                        nodata: !0
                    }) : s.setData({
                        nodata: !1
                    });
                } else s.setData({
                    nodata: !0
                }); else wx.showToast({
                    title: t.data.content,
                    icon: "none"
                });
            },
            fail: function(t) {
                wx.showToast({
                    title: "网络异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    delItem: function(s) {
        var n = s.currentTarget.dataset.id, o = (s.currentTarget.dataset.index, this);
        wx.request({
            url: a.deleteAddress,
            data: {
                id: n,
                schoolId: e,
                sessionKey: t
            },
            success: function(e) {
                200 == e.data.type ? (o.setData({
                    addressList: e.data.date
                }), o.loadAddress(t)) : wx.showToast({
                    title: e.data.content,
                    icon: "none"
                });
            },
            fail: function(t) {
                wx.showToast({
                    title: "网络异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    chooseAddress: function(t) {
        var e = t.currentTarget.dataset.index, a = this.data.addressList, s = getCurrentPages();
        s[s.length - 2].setData({
            address: a[e],
            addressType: 2
        });
        var n = a[e].id, o = a[e].area + a[e].address;
        wx.redirectTo({
            url: "/pages/carts/buybookpay/buy?addressName=" + o + "&addressType=2&addressId=" + n
        });
    }
});