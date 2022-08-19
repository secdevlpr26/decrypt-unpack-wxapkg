function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../../utils/api")), a = e(require("../../utils/wxParse/wxParse.js"));

getApp();

Page({
    data: {
        serveData: {},
        evaluatesPercent: 0,
        evaluatesList: []
    },
    onLoad: function(e) {
        var i = this;
        this.data.serviceId = e.id, wx.showLoading({
            title: "加载中",
            mask: !0
        }), t.default.serveDetail("/service/detail", {
            serviceId: this.data.serviceId
        }).then(function(e) {
            setTimeout(function() {
                wx.hideLoading();
            }, 200), wx.setNavigationBarTitle({
                title: e.result.serviceData.title
            }), wx.setStorageSync("serveIntro", e.result.serviceData.introduction), i.data.appointmentData = {
                title: e.result.serviceData.title,
                price: e.result.serviceData.price,
                picture: e.result.serviceData.picture,
                type: e.result.serviceData.orderType,
                priceType: e.result.serviceData.priceType
            }, i.setData({
                serviceId: i.data.serviceId,
                serveData: e.result.serviceData,
                evaluatesPercent: e.result.evaluates.percent,
                evaluatesList: e.result.evaluates.list.slice(0, 1),
                evaluatesTotal: e.result.evaluates.evaluteTotal || 0
            });
            var t = e.result.serviceData.attention || "", s = e.result.serviceData.content || "";
            a.default.wxParse("attention", "html", t, i, 20), a.default.wxParse("content", "html", s, i, 20);
        }, function(e) {
            setTimeout(function() {
                wx.hideLoading();
            }, 200);
        });
    },
    submit: function() {
        wx.setStorageSync("appointmentData", this.data.appointmentData), wx.navigateTo({
            url: "../appointment/index?id=" + this.data.serviceId
        });
    }
});