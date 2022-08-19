var t = getApp().globalData.domain;

Page({
    data: {
        navTab: [ "收入", "支出" ],
        currentNavtab: "0",
        totalPoint: 0
    },
    onLoad: function(t) {
        this.selectMyPoint();
        var a = t.currentNavtab;
        void 0 !== a && this.setData({
            currentNavtab: a
        }), this.selectWechatPointRecord(0 == this.data.currentNavtab ? 1 : 0), this.setData({
            totalPoint: getApp().globalData.totalPoint
        });
    },
    selectMyPoint: function() {
        var t = this;
        wx.getStorage({
            key: "userId",
            success: function(a) {
                wx.request({
                    url: getApp().globalData.domain + "/watch/selectWechatPoint",
                    data: {
                        userId: a.data
                    },
                    success: function(a) {
                        var e = a.data;
                        "" != e && (getApp().globalData.totalPoint = e[0].totall_point, t.setData({
                            totalPoint: e[0].totall_point
                        }));
                    },
                    fail: function(t) {}
                });
            },
            fail: function(t) {}
        });
    },
    selectWechatPointRecord: function(a) {
        var e = this;
        wx.getStorage({
            key: "userId",
            success: function(n) {
                wx.request({
                    url: t + "/watch/selectWechatPointRecord",
                    data: {
                        userId: n.data,
                        type: a
                    },
                    success: function(t) {
                        for (var a = t.data, n = new Array(), o = 0; o < a.length; o++) {
                            var i = {};
                            i.reason = a[o].reason, i.state = a[o].is_add ? 1 : 0, i.time = a[o].create_time, 
                            i.count = a[o].point, n[n.length] = i;
                        }
                        e.setData({
                            messages: n
                        });
                    },
                    fail: function(t) {}
                });
            },
            fail: function(t) {}
        });
    },
    switchTab: function(t) {
        this.setData({
            currentNavtab: t.currentTarget.dataset.idx
        }), this.selectWechatPointRecord(0 == this.data.currentNavtab ? 1 : 0);
    },
    upper: function() {
        wx.showNavigationBarLoading(), this.refresh(), setTimeout(function() {
            wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
        }, 2e3);
    },
    lower: function(t) {
        wx.showNavigationBarLoading();
        var a = this;
        setTimeout(function() {
            wx.hideNavigationBarLoading(), a.nextLoad();
        }, 1e3);
    }
});