var t = getApp();

Page({
    data: {
        loadState: 0,
        distPerf: [ {
            title: "数据统计",
            list: [ {
                title: "推广人数",
                data: 0
            }, {
                title: "可领佣金",
                data: 0
            }, {
                title: "总共佣金",
                data: 0
            } ]
        }, {
            title: "新增推广人数",
            list: [ {
                title: "今天推广",
                data: 0
            }, {
                title: "3天推广",
                data: 0
            }, {
                title: "7天推广",
                data: 0
            } ]
        } ]
    },
    onLoad: function(a) {
        var e = this;
        wx.request({
            url: t.globalData.url + t.globalData.parameter + "&do=share",
            header: {
                Cookie: t.globalData.session_login_id
            },
            success: function(t) {
                if (1 == t.data.status) {
                    var a = e.data.distPerf;
                    a[0].list[0].data = t.data.result.one, a[0].list[1].data = t.data.result.two, a[0].list[2].data = t.data.result.three, 
                    a[1].list[0].data = t.data.result.four, a[1].list[1].data = t.data.result.five, 
                    a[1].list[2].data = t.data.result.six, e.setData({
                        distPerf: a,
                        loadState: 9
                    });
                } else e.setData({
                    loadState: 3
                }), wx.showModal({
                    title: "提示",
                    content: t.data.result.message
                });
            },
            fail: function() {
                e.setData({
                    loadState: 3
                }), wx.showModal({
                    title: "提示",
                    content: "网络链接失败,请稍后重试"
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});