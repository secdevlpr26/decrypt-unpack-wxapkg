var a = getApp();

Page({
    data: {
        autoplay: !0,
        interval: 3e3,
        duration: 1e3
    },
    onLoad: function(t) {
        wx.setNavigationBarTitle({
            title: "房产资讯"
        });
        var e = this;
        a.util.request({
            url: "entry/wxapp/getbanner",
            success: function(a) {
                a.data.message.errno || e.setData({
                    banners: a.data.data
                });
            }
        }), a.util.request({
            url: "entry/wxapp/getarticle",
            data: {},
            success: function(a) {
                a.data.message.errno || (console.log("res.data.data.article" + a.data.data.article), 
                e.setData({
                    category: a.data.data.category,
                    article: a.data.data.article,
                    activeCategoryId: a.data.data.activeCategoryId
                }));
            },
            complete: function() {
                wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
            }
        });
    },
    tabClick: function(t) {
        var e = t.currentTarget.id, n = this;
        a.util.request({
            url: "entry/wxapp/getsecondlist",
            data: {
                pid: e
            },
            success: function(a) {
                a.data.message.errno || n.setData({
                    article: a.data.data,
                    activeCategoryId: e
                });
            }
        });
    },
    toNewsDetail: function(a) {
        var t = a.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/wurui_house/pages/newsdetail/index?id=" + t
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading(), this.onLoad();
    },
    onReachBottom: function() {
        wx.showNavigationBarLoading(), this.onLoad();
    },
    onShareAppMessage: function() {
        return {
            title: "房产资讯-" + wx.getStorageSync("companyinfo").name,
            path: "/wurui_house/pages/article/index"
        };
    }
});