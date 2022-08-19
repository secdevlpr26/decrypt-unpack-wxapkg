var t = getApp(), a = t.globalData.projectInfo, e = t.globalData.customizeTabId, o = 1, n = 1;

Page({
    data: {
        styleConfig: t.globalData.styleConfig,
        supplyAndDemand: 2,
        pageList: [],
        notNull: !0,
        bottomHint: !0
    },
    onLoad: function() {
        a = t.globalData.projectInfo, e = t.globalData.customizeTabId, this.navtap();
    },
    toSearch: function() {
        wx.navigateTo({
            url: "../search/search"
        });
    },
    navtap: function(t) {
        o = 1, this.setData({
            notNull: !0,
            bottomHint: !0,
            pageList: []
        }), t && this.setData({
            supplyAndDemand: t.currentTarget.dataset.index
        }), this.getSupplyList(this.data.supplyAndDemand, o);
    },
    getSupplyList: function(o, s) {
        var i = this;
        wx.request({
            url: t.globalData.comUrl + "mctab_searchPhotoInfo.action",
            data: {
                appId: a.appId,
                customizeTabId: e.LynxPhoto_Info_Post_Tab,
                current: 1,
                supplyAndDemand: o
            },
            success: function(a) {
                var e = t.getJsonData(a.data);
                n = e.pages;
                for (var o = 0; o < e.pageList.length; o++) e.pageList[o].picture1 = t.modifyPicSize(e.pageList[o].picture1, "_r160x160p");
                i.setData({
                    pageList: e.pageList
                }), 0 == i.data.pageList.length ? i.setData({
                    notNull: !1
                }) : i.setData({
                    notNull: !0
                }), wx.hideToast(), wx.stopPullDownRefresh();
            },
            fail: function(a) {
                t.hint();
            }
        });
    },
    getMoreSupplyList: function(o, n) {
        var s = this;
        wx.request({
            url: t.globalData.comUrl + "mctab_searchPhotoInfo.action",
            data: {
                appId: a.appId,
                customizeTabId: e.LynxPhoto_Info_Post_Tab,
                current: n,
                supplyAndDemand: o
            },
            success: function(a) {
                for (var e = t.getJsonData(a.data), o = 0; o < e.pageList.length; o++) e.pageList[o].picture1 = t.modifyPicSize(e.pageList[o].picture1, "_r160x160p");
                s.setData({
                    pageList: s.data.pageList.concat(e.pageList)
                });
            },
            fail: function(a) {
                t.hint();
            }
        });
    },
    publishtap: function() {
        t.getMemberId() ? wx.navigateTo({
            url: "supply-publish/supply-publish"
        }) : wx.navigateTo({
            url: "../login/login"
        });
    },
    onReachBottom: function() {
        o < n ? (o++, this.getMoreSupplyList(this.data.supplyAndDemand, o)) : o > 1 && (this.data.pageList.length > 1 ? this.setData({
            bottomHint: !1
        }) : this.setData({
            bottomHint: !0
        }));
    },
    onPullDownRefresh: function() {
        this.setData({
            supplyAndDemand: 2,
            pageList: [],
            notNull: !0,
            bottomHint: !0
        }), o = 1, n = 1, this.onLoad();
    }
});