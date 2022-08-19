var t = require("../../../utils/wxParse/wxParse.js"), a = getApp(), e = a.globalData.projectInfo, o = a.globalData.customizeTabId, l = "", i = "", s = {}, n = !0, c = !0;

Page({
    data: {
        supplyDetail: {},
        collectStatus: "0",
        content: ""
    },
    onLoad: function(t) {
        e = a.globalData.projectInfo, o = a.globalData.customizeTabId;
        var i = this;
        l = t.tabContentId, i.getSupplyDetail(), i.getCollectStatus();
    },
    getSupplyDetail: function() {
        var i = this;
        wx.request({
            url: a.globalData.comUrl + "tabs_getPhotoInfoTab",
            data: {
                appId: e.appId,
                tabContentId: l,
                customizetabId: o.LynxPhoto_Info_Post_Tab
            },
            success: function(e) {
                s = a.getJsonData(e.data), i.setData({
                    supplyDetail: s
                }), t.wxParse("detailDescription", "html", s.detailDescription, i, 5), wx.hideToast();
            },
            fail: function() {
                a.hint();
            }
        });
    },
    getCollectStatus: function() {
        var t = this;
        (i = a.getMemberId()) && wx.request({
            url: a.globalData.comUrl + "tabs_checkCollection.action",
            data: {
                appId: e.appId,
                memberId: i,
                id: l
            },
            success: function(e) {
                var o = a.getJsonData(e.data);
                t.setData({
                    collectStatus: o.isExisted
                });
            },
            fail: function(t) {
                a.hint();
            },
            complete: function() {
                n = !0, c = !0;
            }
        });
    },
    collect: function() {
        if (0 != n) {
            n = !1;
            var t = this;
            (i = a.getMemberId()) ? wx.request({
                url: a.globalData.comUrl + "tabs_addCollection.action",
                data: {
                    appId: e.appId,
                    type: 5,
                    name: t.data.supplyDetail.title,
                    objId: t.data.supplyDetail.id,
                    memberId: i,
                    pic_url: t.data.supplyDetail.picture1,
                    detailDescription: t.data.supplyDetail.briefDescription
                },
                success: function(a) {
                    wx.showToast({
                        title: "收藏成功",
                        icon: "success",
                        duration: 2e3
                    }), t.getCollectStatus();
                },
                fail: function(t) {
                    a.hint("收藏失败");
                }
            }) : (n = !0, wx.navigateTo({
                url: "../../login/login"
            }));
        }
    },
    cancelCollect: function() {
        if (0 != c) {
            c = !1;
            var t = this;
            (i = a.getMemberId()) ? wx.request({
                url: a.globalData.comUrl + "tabs_delCollectionByObjId.action",
                data: {
                    id: l,
                    memberId: i
                },
                success: function(a) {
                    wx.showToast({
                        title: "已取消收藏",
                        icon: "success",
                        duration: 2e3
                    }), t.getCollectStatus();
                },
                fail: function(t) {
                    a.hint("取消收藏失败");
                }
            }) : (c = !0, wx.navigateTo({
                url: "../../login/login"
            }));
        }
    }
});