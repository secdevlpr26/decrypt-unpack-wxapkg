var t = getApp(), e = t.globalData.config.base;

Page({
    data: {
        scorllId: "C"
    },
    onLoad: function(t) {
        this.getCity();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onShareAppMessage: function() {
        return {
            title: t.globalData.config.title,
            path: "/pages/index/index?upperuid=" + (wx.getStorageSync("myuid") || wx.getStorageSync("parentuid") || param.upperuid)
        };
    },
    getCity: function() {
        var t = this;
        wx.request({
            url: e + "Mobile/Api/codeCity",
            method: "GET",
            header: {
                "content-type": "application"
            },
            success: function(e) {
                console.log(e), t.setData({
                    city: {
                        all: t.processCity(e.data.all),
                        hot: e.data.hot
                    }
                });
            }
        });
    },
    processCity: function(t) {
        var e = [];
        for (var n in t) {
            var a = {
                letter: n,
                city: t[n]
            };
            e.push(a);
        }
        return e;
    },
    scrollIntoCity: function(t) {
        var e = t.currentTarget.dataset.id;
        console.log(e), this.setData({
            scorllId: "" + e
        });
    },
    getCityId: function(t) {
        t.currentTarget.dataset.id;
    },
    setCity: function(e) {
        var n = e.currentTarget.dataset.city, a = {
            name: n.name,
            id: n.id
        };
        wx.setStorageSync("city", a), t.refreshHome = !0, wx.switchTab({
            url: "../index/index"
        });
    },
    setCityTwo: function(e) {
        var n = {
            name: e.currentTarget.dataset.name,
            id: e.currentTarget.dataset.id
        };
        wx.setStorageSync("city", n), t.refreshHome = !0, wx.switchTab({
            url: "../index/index"
        });
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    }
});