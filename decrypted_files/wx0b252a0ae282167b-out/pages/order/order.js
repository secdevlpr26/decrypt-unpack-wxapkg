function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a, e, d = getApp();

Page((a = {
    data: {
        showModal: !1,
        list_data_0: "",
        list_data_1: "",
        openid: "",
        list_data_2: "",
        tabArr: [ {
            curHdIndex: 0,
            curBdIndex: 0
        } ]
    },
    tabFun: function(t) {
        var a = t.target.dataset.id, e = {};
        e.curHdIndex = a, e.curBdIndex = a, this.setData({
            tabArr: e
        });
    },
    onLoad: function(t) {
        e = this, d.isOpenId();
        var a = {};
        a.curHdIndex = 1, a.curBdIndex = 1, this.setData({
            tabArr: a,
            openid: wx.getStorageSync("openid")
        }), wx.request({
            url: d.data.lost + "/index/orderList2",
            method: "GET",
            dataType: "html",
            data: {
                openid: e.data.openid,
                v: 1
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                var a = JSON.parse(t.data);
                e.setData({
                    list_data_1: a
                });
            }
        }), wx.request({
            url: d.data.lost + "/index/orderList2",
            method: "GET",
            dataType: "html",
            data: {
                openid: e.data.openid,
                v: 2
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                var a = JSON.parse(t.data);
                e.setData({
                    list_data_2: a
                });
            }
        }), wx.request({
            url: d.data.lost + "/index/orderList2",
            method: "GET",
            dataType: "html",
            data: {
                openid: e.data.openid,
                v: 0
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                var a = JSON.parse(t.data);
                e.setData({
                    list_data_0: a
                });
            }
        });
    },
    onShow: function() {
        this.onLoad();
    },
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading();
        var t = {};
        t.curHdIndex = 1, t.curBdIndex = 1, this.setData({
            tabArr: t,
            openid: wx.getStorageSync("openid")
        }), wx.request({
            url: d.data.lost + "/index/orderList2",
            method: "GET",
            dataType: "html",
            data: {
                openid: e.data.openid,
                v: 1
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                var a = JSON.parse(t.data);
                e.setData({
                    list_data_1: a
                });
            }
        }), wx.request({
            url: d.data.lost + "/index/orderList2",
            method: "GET",
            dataType: "html",
            data: {
                openid: e.data.openid,
                v: 2
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                var a = JSON.parse(t.data);
                e.setData({
                    list_data_2: a
                });
            }
        }), wx.request({
            url: d.data.lost + "/index/orderList2",
            method: "GET",
            dataType: "html",
            data: {
                openid: e.data.openid,
                v: 0
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                var a = JSON.parse(t.data);
                e.setData({
                    list_data_0: a
                }), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
            }
        });
    }
}, t(a, "onShow", function() {
    this.onLoad();
}), t(a, "actionSheetTap", function(t) {
    var a = t.currentTarget.id;
    wx.showActionSheet({
        itemList: [ "订单详情", "费用详情" ],
        success: function(t) {
            0 == t.tapIndex ? wx.navigateTo({
                url: "../orderIntro/orderIntro?id=" + a
            }) : 1 == t.tapIndex && wx.navigateTo({
                url: "../orderMoneyIntro/orderMoneyIntro?id=" + a
            });
        }
    });
}), a));