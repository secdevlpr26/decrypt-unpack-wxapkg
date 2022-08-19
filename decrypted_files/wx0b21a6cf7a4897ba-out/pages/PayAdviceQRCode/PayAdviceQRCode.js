var t = getApp();

Page({
    data: {
        money: 0,
        url: "",
        id: 0,
        ucall: "",
        tel: "",
        askContent: "",
        images: []
    },
    onLoad: function(t) {
        var a = JSON.parse(t.data);
        this.setData({
            money: a.payMoney,
            ucall: a.ucall,
            tel: a.tel,
            askContent: a.askContent,
            images: a.images,
            id: a.id
        }), this.getAppreciateUrl();
    },
    getAppreciateUrl: function() {
        var a = this;
        t.apiRequestGet({
            urlMethod: "api/Users/getAppreciateUrl",
            data: {},
            success: function(t) {
                null != t.data && a.setData({
                    url: t.data.url
                });
            },
            fail: function(t) {}
        });
    },
    getScanCode: function() {
        wx.previewImage({
            urls: this.data.url.split(",")
        });
    },
    toZan: function() {
        this.getScanCode();
    },
    didPayAction: function() {
        var t = this;
        wx.showModal({
            title: "提示",
            content: "是否确认已支付?",
            confirmText: "确认",
            confirmColor: "#facb31",
            success: function(a) {
                a.confirm && (t.data.id > 0 ? t.payOrder() : t.submitOrder());
            }
        });
    },
    payOrder: function() {
        wx.showToast({
            title: "",
            icon: "loading",
            mask: !0,
            duration: 1e4
        });
        var a = this;
        t.apiRequestPost({
            urlMethod: "api/Users/appreciateQuestion",
            data: {
                openid: t.globalData.userInfo.u_openid,
                id: a.data.id
            },
            success: function(t) {
                wx.hideToast(), 0 == t.data.status ? wx.navigateBack({
                    delta: 1
                }) : wx.showToast({
                    title: t.data.msg
                });
            },
            fail: function(t) {
                wx.hideToast();
            }
        });
    },
    submitOrder: function() {
        wx.showToast({
            title: "",
            icon: "loading",
            mask: !0,
            duration: 1e4
        });
        t.apiRequestPost({
            urlMethod: "api/Users/appreciateQuestion",
            data: {
                openid: t.globalData.userInfo.u_openid,
                payMoney: this.data.money,
                ucall: this.data.ucall,
                tel: this.data.tel,
                askContent: this.data.askContent,
                images: this.data.images
            },
            success: function(t) {
                wx.hideToast(), 0 == t.data.status ? wx.redirectTo({
                    url: "../MyPaidAdvice/MyPaidAdvice"
                }) : wx.showToast({
                    title: t.data.msg
                });
            },
            fail: function(t) {
                wx.hideToast();
            }
        });
    }
});