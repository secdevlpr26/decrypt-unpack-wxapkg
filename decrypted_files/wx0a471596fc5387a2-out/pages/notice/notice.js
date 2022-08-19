var t = getApp();

Page({
    data: {
        indicatorDots: !0,
        autoplay: !0,
        interval: 5e3,
        duration: 1e3,
        list: [],
        page: 0,
        winHeight: "",
        currentTab: 0,
        scrollLeft: 0,
        isGet: !0,
        hidden: !0
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {
        var t = this;
        wx.getSystemInfo({
            success: function(i) {
                var e = i.windowHeight * (750 / i.windowWidth) - 180;
                t.setData({
                    winHeight: e,
                    scrollHeight: i.windowHeight,
                    page: 0,
                    list: []
                });
            }
        }), this.getList();
    },
    getList: function() {
        var i = this, e = i.data.page + 1;
        this.setData({
            hidden: !1,
            isGet: !1
        }), wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getArticlePage",
                classId: 93,
                page: e,
                size: 12
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                if (t.data) {
                    var a = i.data.list, n = t.data.rows;
                    if (n.length > 0) {
                        for (var s in n) a.push(n[s]);
                        i.setData({
                            list: a,
                            isGet: !0,
                            hidden: !0,
                            page: e
                        });
                    }
                } else i.setData({
                    isGet: !1,
                    hidden: !0
                });
            }
        });
    },
    bindDownLoad: function() {
        this.data.isGet && this.getList();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        this.getList();
    },
    onShareAppMessage: function() {}
});