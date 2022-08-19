var a = getApp(), t = a.globalData.config.base;

Page({
    onShow: function() {
        var a = this;
        s.getcashlist(a), wx.getSystemInfo({
            success: function(t) {
                var s = t.windowHeight - 100;
                a.setData({
                    listHeight: s
                });
            }
        });
    },
    loadMore: function() {
        var a = this, t = a.data.page;
        1 !== a.data.listStatus && (a.setData({
            page: t++
        }), s.getcashlist(a));
    }
});

var s = {
    getcashlist: function(e) {
        wx.showLoading({
            title: "加载中"
        });
        var i = a.globalData.userKey, n = e.data.page || 1;
        wx.request({
            url: t + "/Mobile/UserApi/cashbalancelist",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                userkey: i,
                page: n
            },
            success: function(a) {
                wx.hideLoading(), s.renderCashList(e, a.data), e.setData({
                    listStatus: a.data.status
                });
            }
        });
    },
    renderCashList: function(a, t) {
        var s = a.data.cashlist || [], e = t.data, i = s.concat(e);
        a.setData({
            cashlist: i
        });
    }
};