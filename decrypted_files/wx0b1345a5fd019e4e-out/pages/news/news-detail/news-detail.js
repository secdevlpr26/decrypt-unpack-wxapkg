var t = getApp(), a = t.globalData.projectInfo, e = t.globalData.customizeTabId, o = t.globalData.md5, i = "", l = {}, n = "", c = 0, s = !0, d = !0;

Page({
    data: {
        detailInfo: {},
        collectStatus: "0"
    },
    onLoad: function(o) {
        a = t.globalData.projectInfo, e = t.globalData.customizeTabId, t.loginVzSystem();
        var l = this;
        c = o.type, i = o.tabContentId, l.newsDetailInfo(), l.getCollectStatus();
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
                (l = t.getJsonData(a.data)).detailDescription = t.filterSpecialSymbol(l.detailDescription), 
                e.setData({
                    detailInfo: l
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
                    var o = t.getJsonData(a.data);
                    e.setData({
                        collectStatus: o.isExisted
                    });
                },
                fail: function(a) {
                    t.hint();
                },
                complete: function() {
                    s = !0, d = !0;
                }
            });
        }
    },
    collect: function() {
        if (0 != s) {
            s = !1;
            var e = this;
            (n = t.getMemberId()) ? wx.request({
                url: t.globalData.comUrl + "tabs_addCollection.action",
                data: {
                    appId: a.appId,
                    type: c,
                    name: l.title,
                    objId: l.id,
                    memberId: n,
                    pic_url: l.picture1,
                    detailDescription: l.briefDescription
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
            }) : (s = !0, wx.navigateTo({
                url: "../../login/login"
            }));
        }
    },
    cancelCollect: function() {
        if (0 != d) {
            d = !1;
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
            }) : (d = !0, wx.switchTab({
                url: "../../self/self"
            }));
        }
    },
    onShareAppMessage: function() {
        var a = this;
        if (t.globalData.pointsSet && t.globalData.pointsSet.pointsSwitch) {
            var e = new Date().valueOf(), i = "action=ShareInfo&appId=" + t.globalData.projectInfo.appId + "&memberId=" + t.getMemberId() + "&time=" + e + "&key=DOTI#!81a335op77CYlo541f6eb5555m", l = o.hexMD5(i);
            wx.request({
                url: t.globalData.comUrl + "wallet_addMemberMPointRecord.action",
                data: {
                    action: "ShareInfo",
                    appId: t.globalData.projectInfo.appId,
                    memberId: t.getMemberId(),
                    time: e,
                    sign: l.toLocaleUpperCase()
                }
            });
        }
        return {
            title: a.data.detailInfo.title,
            path: "/pages/news/news-detail/news-detail?tabContentId=" + a.data.detailInfo.id,
            success: function(t) {},
            fail: function(t) {}
        };
    }
});