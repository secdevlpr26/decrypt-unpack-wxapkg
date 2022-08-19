var e = getApp(), t = "";

Page({
    data: {
        rechargeList: [],
        rule: "",
        rechargeMoney: ""
    },
    onShow: function() {},
    onLoad: function() {
        t = e.globalData.projectInfo, wx.showLoading({
            title: "加载中..."
        });
        var a = this;
        wx.request({
            url: e.globalData.comUrl + "mctab_getPreExisting.action",
            data: {
                appId: t.appId,
                webApp: 1
            },
            success: function(t) {
                wx.hideLoading();
                var n = e.getJsonData(t.data);
                a.setData({
                    rechargeList: n.preMoneys,
                    rule: n.preMoneyRule
                });
            },
            fail: function() {
                wx.hideLoading(), e.hint();
            }
        });
    },
    radioChange: function(e) {
        this.setData({
            rechargeMoney: e.detail.value
        });
    },
    recharge: function() {
        var a = this, n = this.getNowFormatDate();
        console.log(n), wx.login({
            success: function(o) {
                o.code && wx.request({
                    url: e.globalData.paymentUrl + "/WechatAlipay/MiniPayService2?jsoncallback=?",
                    data: {
                        projectId: t.appId,
                        nonce_str: "lfksf" + Math.round(1e5 * Math.random()),
                        body: "在线充值",
                        attach: e.getMemberId() + "_" + t.appId + "_1",
                        out_trade_no: n,
                        total_fee: (100 * a.data.rechargeMoney).toFixed(0),
                        trade_type: "JSAPI",
                        device_info: "888",
                        code: o.code,
                        payType: "1"
                    },
                    success: function(e) {
                        if (wx.hideToast(), "" != e.data) {
                            var t = a.getJsonData(e.data);
                            wx.requestPayment({
                                timeStamp: t.timeStamp,
                                nonceStr: t.nonceStr,
                                package: "prepay_id=" + t.prepay_id,
                                signType: "MD5",
                                paySign: t.sign,
                                success: function(e) {
                                    wx.showToast({
                                        title: "支付成功",
                                        icon: "success",
                                        duration: 2e3,
                                        mask: !0
                                    }), setTimeout(function() {
                                        wx.navigateBack({
                                            delta: 1
                                        });
                                    }, 2e3);
                                },
                                fail: function(e) {
                                    wx.showModal({
                                        title: "支付失败",
                                        showCancel: !1
                                    });
                                }
                            });
                        } else wx.showModal({
                            title: "支付失败",
                            showCancel: !1
                        });
                    }
                });
            }
        });
    },
    getJsonData: function(e) {
        return JSON.parse(e.substring(1, e.length - 1));
    },
    getNowFormatDate: function() {
        var e = new Date(), t = e.getMonth() + 1, a = e.getDate();
        return t >= 1 && t <= 9 && (t = "0" + t), a >= 0 && a <= 9 && (a = "0" + a), e.getFullYear() + "" + t + a + e.getHours() + e.getMinutes() + e.getSeconds();
    }
});