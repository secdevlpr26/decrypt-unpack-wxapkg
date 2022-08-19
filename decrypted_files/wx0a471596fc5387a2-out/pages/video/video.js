var t = getApp();

Page({
    data: {
        videoPlay: null,
        hostUrl: t.globalData.hostUrl,
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
    videoPlay: function(e) {
        var a = this, i = wx.getStorageSync("userId");
        null != i && i > 0 && "" != i ? wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getUser",
                userId: i
            },
            header: {
                "content-type": "application/json"
            },
            success: function(n) {
                if ("" == n.data || null != n.data.rows[0].SHOPCODE) {
                    var o = e.currentTarget.id;
                    wx.request({
                        url: t.globalData.apiUrl,
                        data: {
                            opt: "addvideo",
                            userId: i,
                            title: e.currentTarget.dataset.title,
                            vvid: e.currentTarget.dataset.vvid
                        },
                        header: {
                            "content-type": "application/json"
                        },
                        success: function(t) {}
                    }), a.setData({
                        _index: o
                    }), wx.createVideoContext(a.data._index).stop(), setTimeout(function() {
                        wx.createVideoContext(o).play();
                    }, 500);
                } else wx.showToast({
                    title: "您不是学员!",
                    icon: "loading",
                    duration: 1500
                });
            }
        }) : wx.showModal({
            title: "温馨提示",
            content: "请先登录",
            success: function(t) {
                t.confirm ? wx.navigateTo({
                    url: "/pages/user/user"
                }) : t.cancel;
            }
        });
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {
        var t = this;
        wx.getSystemInfo({
            success: function(e) {
                var a = e.windowHeight * (750 / e.windowWidth) - 180;
                t.setData({
                    winHeight: a,
                    scrollHeight: e.windowHeight,
                    page: 0,
                    list: []
                });
            }
        }), this.getList();
    },
    getList: function() {
        var e = this, a = wx.getStorageSync("userId"), i = e.data.page + 1;
        this.setData({
            hidden: !1,
            isGet: !1
        }), wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getArticlePage",
                classId: 4,
                page: i,
                size: 3,
                userId: a
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                if (t.data) {
                    var a = e.data.list, n = t.data.rows;
                    if (n.length > 0) {
                        for (var o in n) a.push(n[o]);
                        e.setData({
                            list: a,
                            isGet: !0,
                            hidden: !0,
                            page: i
                        });
                    }
                } else e.setData({
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