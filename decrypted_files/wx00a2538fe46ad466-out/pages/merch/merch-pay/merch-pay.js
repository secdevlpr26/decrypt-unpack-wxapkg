var t = getApp();

Page({
    data: {
        paydata: {},
        setting: {},
        order_num: ""
    },
    getList: function(a) {
        var e = this;
        wx.showLoading({
            title: "正在加载..."
        }), wx.request({
            url: t.globalData.url + t.globalData.parameter + "&do=pay_one&order_num=" + a,
            header: {
                Cookie: t.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                if (1 == t.data.status) {
                    var a = t.data.result.paydata, n = t.data.result.setting;
                    e.setData({
                        paydata: a,
                        setting: n
                    });
                } else wx.showToast({
                    title: t.data.result.message,
                    image: "/images/tongcheng/icon-failed.png"
                });
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    onLoad: function(t) {
        wx.setNavigationBarTitle({
            title: wx.getStorageSync("sysset") ? wx.getStorageSync("sysset").wxapp_name : "XT同城信息"
        }), this.getList(t.order_num);
    },
    towebchat: function() {
        var a = this;
        wx.request({
            url: t.globalData.url + t.globalData.parameter + "&do=pay",
            header: {
                Cookie: t.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: {
                type: "wechat",
                order_num: a.data.paydata.ordersn,
                title: a.data.paydata.title,
                fee: a.data.paydata.fee
            },
            success: function(t) {
                wx.requestPayment({
                    timeStamp: t.data.result.wechat.timeStamp,
                    nonceStr: t.data.result.wechat.nonceStr,
                    package: t.data.result.wechat.package,
                    signType: t.data.result.wechat.signType,
                    paySign: t.data.result.wechat.paySign,
                    success: function(t) {
                        wx.showToast({
                            title: "支付成功",
                            icon: "success"
                        }), setTimeout(function() {
                            wx.redirectTo({
                                url: "/pages/merch/merch-paysuccess/merch-paysuccess?order_num=" + a.data.paydata.ordersn
                            });
                        }, 2e3);
                    },
                    fail: function(t) {},
                    complete: function() {}
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