require("../../../utils/wxParse/wxParse.js");

var t = getApp(), e = "", a = "", i = "", o = {}, l = "", n = 0, s = !0, c = !0;

Page({
    data: {
        detailInfo: {},
        collectStatus: "0"
    },
    onLoad: function(o) {
        e = t.globalData.projectInfo, a = t.globalData.customizeTabId;
        var l = this;
        t.loginVzSystem(), n = o.type, i = o.tabContentId, l.newsDetailInfo(), l.getCollectStatus();
    },
    newsDetailInfo: function() {
        var a = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getPhotoInfoTab.action",
            data: {
                appId: e.appId,
                tabContentId: i
            },
            success: function(e) {
                (o = t.getJsonData(e.data)).detailDescription = o.detailDescription.replace(/&ldquo;/g, "“"), 
                o.detailDescription = o.detailDescription.replace(/&rdquo;/g, "”"), o.detailDescription = o.detailDescription.replace(/&mdash;/g, "—"), 
                o.detailDescription = o.detailDescription.replace(/&middot;/g, "·"), o.detailDescription = o.detailDescription.replace(/&hellip;/g, "…"), 
                a.setData({
                    detailInfo: o
                }), wx.hideToast();
            },
            fail: function(e) {
                t.hint();
            }
        });
    },
    getCollectStatus: function() {
        if (l = t.getMemberId()) {
            var a = this;
            wx.request({
                url: t.globalData.comUrl + "tabs_checkCollection.action",
                data: {
                    appId: e.appId,
                    memberId: l,
                    id: i
                },
                success: function(e) {
                    var i = t.getJsonData(e.data);
                    a.setData({
                        collectStatus: i.isExisted
                    });
                },
                fail: function(e) {
                    t.hint();
                },
                complete: function() {
                    s = !0, c = !0;
                }
            });
        }
    },
    collect: function() {
        if (0 != s) {
            s = !1;
            var a = this;
            (l = t.getMemberId()) ? wx.request({
                url: t.globalData.comUrl + "tabs_addCollection.action",
                data: {
                    appId: e.appId,
                    type: n,
                    name: o.title,
                    objId: o.id,
                    memberId: l,
                    pic_url: o.picture1,
                    detailDescription: o.briefDescription
                },
                success: function(t) {
                    wx.showToast({
                        title: "收藏成功",
                        icon: "success",
                        duration: 2e3
                    }), a.getCollectStatus();
                },
                fail: function(e) {
                    t.hint("收藏失败");
                }
            }) : (s = !0, wx.navigateTo({
                url: "../../login/login"
            }));
        }
    },
    cancelCollect: function() {
        if (0 != c) {
            c = !1;
            var e = this;
            (l = t.getMemberId()) ? wx.request({
                url: t.globalData.comUrl + "tabs_delCollectionByObjId.action",
                data: {
                    id: i,
                    memberId: l
                },
                success: function(t) {
                    wx.showToast({
                        title: "已取消收藏",
                        icon: "success",
                        duration: 2e3
                    }), e.getCollectStatus();
                },
                fail: function(e) {
                    t.hint("取消收藏失败");
                }
            }) : (c = !0, wx.switchTab({
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