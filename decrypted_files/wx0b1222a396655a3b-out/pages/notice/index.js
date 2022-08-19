var t = getApp();

Page({
    data: {
        list: [],
        page: 1,
        pagesize: 8
    },
    onLoad: function() {
        getApp().editTabBar();
        var a = this;
        wx.request({
            url: "https://open.flames-tech.cn/plugin/notice-api/notice-list",
            data: {
                page: 1,
                pagesize: a.data.pagesize
            },
            header: {
                token: t.globalData.token
            },
            success: function(t) {
                console.log(t), 1 == t.data.state && t.data.list && t.data.list.length > 0 && a.setData({
                    list: t.data.list
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    }
});