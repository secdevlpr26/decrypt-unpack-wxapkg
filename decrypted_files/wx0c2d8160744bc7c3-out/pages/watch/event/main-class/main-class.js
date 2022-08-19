var a = getApp(), t = a.globalData.domain;

Page({
    data: {
        eventMainClassList: []
    },
    onLoad: function(a) {
        this.selectEventMainClassList();
    },
    selectEventMainClassList: function() {
        var e = this;
        wx.request({
            url: t + "/watch/selectEventType?user_id=" + a.globalData.userId,
            success: function(a) {
                for (var t = new Array(), s = 0; s < a.data.length; s++) t[s] = {
                    name: a.data[s].type_name,
                    mainClassId: a.data[s].event_type_id
                };
                e.setData({
                    eventMainClassList: t
                });
            },
            fail: function(a) {
                wx.showToast({
                    title: "抱歉，服务器异常，请稍候再试！",
                    icon: "none"
                });
            }
        });
    }
});