var e = getApp();

Page({
    data: {
        message: "",
        containerhidden: !1,
        order_num: ""
    },
    tohome: function() {
        wx.switchTab({
            url: "/pages/index/index"
        });
    },
    toorder: function() {
        wx.redirectTo({
            url: "/pages/mine/order/order"
        });
    },
    onLoad: function(n) {
        var o = this;
        wx.setNavigationBarTitle({
            title: wx.getStorageSync("sysset") ? wx.getStorageSync("sysset").wxapp_name : "XT同城信息"
        }), wx.showLoading({
            title: "正在加载..."
        }), wx.request({
            url: e.globalData.url + e.globalData.parameter + "&do=payconfirm&order_num=" + n.order_num,
            header: {
                Cookie: e.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                var t = e.data.result.message;
                o.setData({
                    message: t,
                    order_num: n.order_num
                });
            },
            complete: function(e) {
                wx.hideLoading(), o.setData({
                    containerhidden: !0
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
    onShareAppMessage: function() {}
});