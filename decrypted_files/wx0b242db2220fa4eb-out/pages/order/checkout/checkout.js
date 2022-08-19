var t, a = require("../../../utils/server"), e = null;

Page({
    data: {
        amount: 0,
        carts: [],
        addressList: [],
        addressIndex: 0,
        height: 0
    },
    addressObjects: [],
    doHandler: function() {
        app.globalData.login && wx.switchTab({
            url: "/pages/member/index/index"
        });
    },
    onShow: function() {
        t && wx.navigateBack({
            delta: 1,
            success: function(t) {},
            fail: function() {},
            complete: function() {}
        });
    },
    onLoad: function(s) {
        t = !1;
        var n = this, i = getApp(), r = s.cartIds, o = s.amount;
        i.globalData.cartIds = r, i.globalData.amount = o, this.setData({
            cartIds: r,
            amount: o
        }), e = setTimeout(function() {
            if (i.globalData.login) {
                var e = i.globalData.userInfo.user_id;
                a.getJSON("/User/getAddressList/user_id/" + e, function(a) {
                    var e = a.data;
                    t = !0, "没有数据" == e.msg ? wx.navigateTo({
                        url: "../../../../../../address/add/add?returnTo=1"
                    }) : wx.navigateTo({
                        url: "../ordersubmit/index"
                    });
                });
            } else t = !0, wx.switchTab({
                url: "/pages/member/index/index"
            });
        }, 4e3), wx.getSystemInfo({
            success: function(t) {
                n.setData({
                    height: t.windowHeight
                });
            }
        });
    },
    readCarts: function(t) {
        var a = parseInt(t.amount);
        this.setData({
            amount: a
        });
        for (var e = t.cartIds.split(","), s = [], n = 0; n < e.length; n++) {
            var i = new AV.Query("Cart");
            i.include("goods"), i.get(e[n]).then(function(t) {
                s.push(t);
            }, function(t) {});
        }
        this.setData({
            carts: s
        });
    }
});