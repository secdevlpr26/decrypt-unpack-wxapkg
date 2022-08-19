var t = getApp(), a = t.globalData.projectInfo, e = t.globalData.customizeTabId, o = "", l = "", i = {}, c = !0, n = !0;

Page({
    data: {
        supplyDetail: {},
        collectStatus: "0",
        content: ""
    },
    onLoad: function(l) {
        a = t.globalData.projectInfo, e = t.globalData.customizeTabId;
        var i = this;
        o = l.tabContentId, i.getSupplyDetail(), i.getCollectStatus();
    },
    getSupplyDetail: function() {
        var l = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getPhotoInfoTab",
            data: {
                appId: a.appId,
                tabContentId: o,
                customizetabId: e.LynxPhoto_Info_Post_Tab
            },
            success: function(a) {
                (i = t.getJsonData(a.data)).detailDescription = t.filterSpecialSymbol(i.detailDescription), 
                l.setData({
                    supplyDetail: i
                }), wx.hideToast();
            },
            fail: function() {
                t.hint();
            }
        });
    },
    getCollectStatus: function() {
        var e = this;
        (l = t.getMemberId()) && wx.request({
            url: t.globalData.comUrl + "tabs_checkCollection.action",
            data: {
                appId: a.appId,
                memberId: l,
                id: o
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
                c = !0, n = !0;
            }
        });
    },
    collect: function() {
        if (0 != c) {
            c = !1;
            var e = this;
            (l = t.getMemberId()) ? wx.request({
                url: t.globalData.comUrl + "tabs_addCollection.action",
                data: {
                    appId: a.appId,
                    type: 5,
                    name: e.data.supplyDetail.title,
                    objId: e.data.supplyDetail.id,
                    memberId: l,
                    pic_url: e.data.supplyDetail.picture1,
                    detailDescription: e.data.supplyDetail.briefDescription
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
        if (0 != n) {
            n = !1;
            var a = this;
            (l = t.getMemberId()) ? wx.request({
                url: t.globalData.comUrl + "tabs_delCollectionByObjId.action",
                data: {
                    id: o,
                    memberId: l
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
            }) : (n = !0, wx.navigateTo({
                url: "../../login/login"
            }));
        }
    }
});