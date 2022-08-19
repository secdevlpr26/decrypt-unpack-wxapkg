var t = getApp(), a = t.globalData.config.base;

Page({
    onShow: function() {
        var t = this;
        e.getConsumeList(t), wx.getSystemInfo({
            success: function(a) {
                var e = a.windowHeight - 100;
                t.setData({
                    listHeight: e
                });
            }
        });
    },
    loadMore: function() {
        var t = this, a = t.data.page;
        1 !== t.data.listStatus && (t.setData({
            page: a++
        }), e.getConsumeList(t));
    }
});

var e = {
    getConsumeList: function(s) {
        wx.showLoading({
            title: "加载中"
        });
        var n = t.globalData.userKey, i = s.data.page || 1;
        wx.request({
            url: a + "/Mobile/UserApi/changebalance",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                userkey: n,
                page: i
            },
            success: function(t) {
                wx.hideLoading(), e.renderConsumList(s, t.data), s.setData({
                    listStatus: t.data.status
                });
            }
        });
    },
    renderConsumList: function(t, a) {
        var e = t.data.consumeList || [], s = a.data, n = e.concat(s);
        t.setData({
            consumeList: n
        });
    }
};