var a = getApp(), e = require("../../common.js");

Page({
    data: {
        pullDownRefreshFlag: !0
    },
    onPullDownRefresh: function() {
        var a = this;
        a.data.pullDownRefreshFlag && (a.setData({
            pullDownRefreshFlag: !1
        }), a.data.pullDownRefreshFlag = !1, a.data.optionsData.refresh = !0, setTimeout(function() {
            a.onLoad(a.data.optionsData), a.setData({
                pullDownRefreshFlag: !0
            }), wx.stopPullDownRefresh();
        }, 1500));
    },
    yijiandaohhang: function(a) {
        for (var e, t, o = a.currentTarget.dataset.hi, n = o[0].Latitude, r = o[0].Longitude, l = 0; l < o.length; l++) 1 == o[l].Type && (e = o[l].Text, 
        t = o[l].Title);
        wx.openLocation({
            name: t,
            address: e,
            longitude: Number(r),
            latitude: Number(n)
        });
    },
    yijianbohao: function(a) {
        var e = a.currentTarget.dataset.iphone;
        wx.makePhoneCall({
            phoneNumber: e
        });
    },
    onLoad: function(a) {
        this.setData({
            optionsData: a
        }), a.page = "CustomPage_" + a.id, e.registerGlobalFunc(), e.loadPageModules(a);
    },
    onPageScroll: function() {},
    onShareAppMessage: function() {
        return a.shareAppMessage({
            url: this.data.url,
            title: this.data.pageTitle
        });
    }
});