var t = getApp(), a = t.globalData.projectInfo, e = t.globalData.customizeTabId, i = "", o = {}, n = "", l = 0, c = !0, s = !0;

Page({
    data: {
        detailInfo: {},
        collectStatus: "0"
    },
    onLoad: function(o) {
        a = t.globalData.projectInfo, e = t.globalData.customizeTabId, t.loginVzSystem();
        var n = this;
        l = o.type, i = o.tabContentId, n.newsDetailInfo(), n.getCollectStatus();
    },
    newsDetailInfo: function() {
        var e = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getPhotoInfoTab.action",
            data: {
                appId: a.appId,
                tabContentId: i
            },
            success: function(a) {
                (o = t.getJsonData(a.data)).detailDescription = t.filterSpecialSymbol(o.detailDescription), 
                e.setData({
                    detailInfo: o
                }), wx.hideToast();
            },
            fail: function(a) {
                t.hint();
            }
        });
    },
    getCollectStatus: function() {
        if (n = t.getMemberId()) {
            var e = this;
            wx.request({
                url: t.globalData.comUrl + "tabs_checkCollection.action",
                data: {
                    appId: a.appId,
                    memberId: n,
                    id: i
                },
                success: function(a) {
                    var i = t.getJsonData(a.data);
                    e.setData({
                        collectStatus: i.isExisted
                    });
                },
                fail: function(a) {
                    t.hint();
                },
                complete: function() {
                    c = !0, s = !0;
                }
            });
        }
    },
    collect: function() {
        if (0 != c) {
            c = !1;
            var e = this;
            (n = t.getMemberId()) ? wx.request({
                url: t.globalData.comUrl + "tabs_addCollection.action",
                data: {
                    appId: a.appId,
                    type: l,
                    name: o.title,
                    objId: o.id,
                    memberId: n,
                    pic_url: o.picture1,
                    detailDescription: o.briefDescription
                },
                success: function(t) {
                    wx.showToast({
                        title: "收藏成功",
                        icon: "success",
                        duration: 2e3
                    }), e.getCollectStatus();
                },
                fail: function(a) {
                    t.hint("收藏失败");
                }
            }) : (c = !0, wx.navigateTo({
                url: "../../login/login"
            }));
        }
    },
    cancelCollect: function() {
        if (0 != s) {
            s = !1;
            var a = this;
            (n = t.getMemberId()) ? wx.request({
                url: t.globalData.comUrl + "tabs_delCollectionByObjId.action",
                data: {
                    id: i,
                    memberId: n
                },
                success: function(t) {
                    wx.showToast({
                        title: "已取消收藏",
                        icon: "success",
                        duration: 2e3
                    }), a.getCollectStatus();
                },
                fail: function(a) {
                    t.hint("取消收藏失败");
                }
            }) : (s = !0, wx.switchTab({
                url: "../../self/self"
            }));
        }
    },
    onShareAppMessage: function() {
        var t = this;
        return {
            title: t.data.detailInfo.title,
            path: "/pages/news/news-detail/news-detail?tabContentId=" + t.data.detailInfo.id,
            success: function(t) {},
            fail: function(t) {}
        };
    }
});