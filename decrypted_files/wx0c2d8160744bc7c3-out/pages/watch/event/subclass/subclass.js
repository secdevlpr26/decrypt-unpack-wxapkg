var t = getApp(), n = t.globalData.domain;

Page({
    data: {
        eventSubclassList: []
    },
    onLoad: function(t) {
        this.selectSubclassList(t.mainClassId);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    selectSubclassList: function(e) {
        var a = this;
        wx.request({
            url: n + "/watch/selectEventType",
            data: {
                upper_type_id: e,
                user_id: t.globalData.userId
            },
            success: function(t) {
                for (var n = new Array(), e = 0; e < t.data.length; e++) n[e] = {
                    name: t.data[e].type_name,
                    subclassId: t.data[e].event_type_id
                };
                a.setData({
                    eventSubclassList: n
                }), console.log(n), n.length < 1 && wx.showToast({
                    title: "没有事件小类，请联系管理员添加!",
                    icon: "none",
                    duration: 2e3
                });
            },
            fail: function(t) {
                wx.showToast({
                    title: "抱歉，服务器异常，请稍候再试！",
                    icon: "none"
                });
            }
        });
    }
});