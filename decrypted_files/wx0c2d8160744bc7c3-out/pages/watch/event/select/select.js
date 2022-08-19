var a = getApp().globalData.domain;

Page({
    data: {
        navTab: [ "待处理", "已处理", "已归档" ],
        currentNavtab: 0,
        feed: [],
        feed_length: 0
    },
    onLoad: function() {
        var a = this.data.navTab[this.data.currentNavtab];
        this.refresh(a);
    },
    switchTab: function(a) {
        this.setData({
            currentNavtab: a.currentTarget.dataset.idx
        }), this.refresh(this.data.navTab[this.data.currentNavtab]);
    },
    refresh: function(t) {
        var e = this;
        wx.getStorage({
            key: "userId",
            success: function(n) {
                wx.request({
                    url: a + "/watch/selectEventByUserId",
                    data: {
                        handleState: t,
                        userId: n.data,
                        numb: 10
                    },
                    success: function(a) {
                        var t = a.data;
                        e.setData({
                            feed: t
                        });
                    },
                    fail: function(a) {}
                });
            },
            fail: function(a) {}
        });
    },
    bindDetail: function(a) {
        var t = a.currentTarget.dataset.eventid, e = !1;
        "待处理" == this.data.navTab[this.data.currentNavtab] && (e = !0), wx.navigateTo({
            url: "event-detail/eventDetail?eventId=" + t + "&handle=" + e
        });
    }
});