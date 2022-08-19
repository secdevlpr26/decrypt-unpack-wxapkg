var e = getApp().globalData.domain;

Page({
    onLoad: function() {
        this.refresh();
    },
    refresh: function(t) {
        var a = this;
        wx.getStorage({
            key: "userId",
            success: function(t) {
                wx.request({
                    url: e + "/watch/selectEventOwn",
                    data: {
                        userId: t.data
                    },
                    success: function(e) {
                        var t = e.data;
                        a.setData({
                            feed: t
                        });
                    },
                    fail: function(e) {}
                });
            },
            fail: function(e) {}
        });
    },
    bindDetail: function(e) {
        var t = e.currentTarget.dataset.eventid;
        wx.navigateTo({
            url: "my-event-detail/my-event-detail?eventId=" + t
        });
    }
});