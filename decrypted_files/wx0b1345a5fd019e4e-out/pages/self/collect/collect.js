var t = getApp(), a = "", e = 1, n = 0, o = 1, s = "";

Page({
    data: {
        currentIdx: 1,
        pageList: [],
        collectNull: !0,
        bottomHint: !0,
        times: 0,
        hideInfoTabs: !1,
        navArr: [ {
            navName: "\b产品",
            navIdx: 1,
            isShow: !0
        }, {
            navName: "今日看点",
            navIdx: 3,
            isShow: !1
        }, {
            navName: "\b商家",
            navIdx: 2,
            isShow: !1
        }, {
            navName: "\b资讯动态",
            navIdx: 4,
            isShow: !1
        }, {
            navName: "\b供求",
            navIdx: 5,
            isShow: !1
        } ]
    },
    onLoad: function() {
        s = t.globalData.projectInfo;
        var a = this;
        a.getCollectPage(), a.setData({
            hideInfoTabs: t.globalData.projectInfo.hideInfoTabs
        }), a.getCustomizeTabList();
    },
    onShow: function() {
        var t = this.data.times + 1;
        e = 1, this.setData({
            times: t
        }), 1 != this.data.times && (this.setData({
            pageList: [],
            collectNull: !0,
            bottomHint: !0
        }), this.onLoad());
    },
    getCustomizeTabList: function() {
        var a = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getCustomizeTabList.action",
            data: {
                appId: s.appId
            },
            success: function(e) {
                for (var n = t.getJsonData(e.data), o = 0; o < n.length; o++) {
                    var s = n[o];
                    switch (n[o].sysTabNameTag ? n[o].sysTabNameTag : n[o].sysTabName) {
                      case "LynxAbout_Merchant":
                        a.data.navArr[2] = {
                            navName: s.tabTitle,
                            navIdx: 2,
                            isShow: !0
                        };
                        break;

                      case "LynxPhoto_Info_Post_Tab":
                        a.data.navArr[4] = {
                            navName: s.tabTitle,
                            navIdx: 5,
                            isShow: !0
                        };
                        break;

                      case "LynxPhoto_H_Info_Tab_Level2":
                        a.data.navArr[1] = {
                            navName: s.tabTitle,
                            navIdx: 3,
                            isShow: !0
                        };
                        break;

                      case "Photo-Info-Tab-Level2":
                        a.data.navArr[3] = {
                            navName: s.tabTitle,
                            navIdx: 4,
                            isShow: !0
                        };
                    }
                }
                a.setData({
                    navArr: a.data.navArr
                });
            }
        });
    },
    getCollectPage: function() {
        var e = this;
        a = t.getMemberId(), wx.request({
            url: t.globalData.comUrl + "tabs_getCollectionPage.action",
            data: {
                appId: t.globalData.projectInfo.appId,
                current: 1,
                type: e.data.currentIdx,
                memberId: a
            },
            success: function(a) {
                var o = t.getJsonData(a.data);
                n = o.pages, o.pageList.length ? e.setData({
                    pageList: o.pageList,
                    collectNull: !0
                }) : e.setData({
                    collectNull: !1
                });
            },
            fail: function(a) {
                t.hint();
            }
        });
    },
    getMoreCollectPage: function() {
        var o = this;
        a = t.getMemberId(), wx.request({
            url: t.globalData.comUrl + "tabs_getCollectionPage.action",
            data: {
                appId: t.globalData.projectInfo.appId,
                current: e,
                type: o.data.currentIdx,
                memberId: a
            },
            success: function(a) {
                var e = t.getJsonData(a.data);
                n = e.pages, console.log(e), e.pageList.length ? o.setData({
                    pageList: o.data.pageList.concat(e.pageList),
                    collectNull: !0
                }) : o.setData({
                    collectNull: !1
                });
            },
            fail: function(a) {
                t.hint();
            }
        });
    },
    navtap: function(t) {
        switch (t.currentTarget.dataset.index) {
          case 3:
            o = 3;
            break;

          case 4:
            o = 4;
            break;

          case 2:
            o = 2;
            break;

          case 1:
            o = 1;
            break;

          case 5:
            o = 5;
        }
        e = 1, this.setData({
            currentIdx: o,
            collectNull: !0,
            bottomHint: !0,
            pageList: []
        }), this.getCollectPage();
    },
    toNewsDetail: function(a) {
        var e = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getPhotoInfoTab.action",
            data: {
                appId: t.globalData.projectInfo.appId,
                tabContentId: a.currentTarget.dataset.tabid
            },
            success: function(n) {
                t.getJsonData(n.data).id ? wx.navigateTo({
                    url: "/pages/news/news-detail/news-detail?tabContentId=" + a.currentTarget.dataset.tabid
                }) : e.warn("该资讯已删除！");
            },
            fail: function() {
                t.hint();
            }
        });
    },
    toStoreDetail: function(a) {
        var e = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getSingleBranchInfo.action",
            data: {
                appId: t.globalData.projectInfo.appId,
                tabContentId: a.currentTarget.dataset.tabid
            },
            success: function(n) {
                t.getJsonData(n.data).id ? wx.navigateTo({
                    url: "../../store/store-detail/store-detail?tabContentId=" + a.currentTarget.dataset.tabid
                }) : e.warn("该商铺已下架！");
            },
            fail: function() {
                t.hint();
            }
        });
    },
    toNewsCenter: function(a) {
        var e = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getPhotoInfoTab.action",
            data: {
                appId: t.globalData.projectInfo.appId,
                tabContentId: a.currentTarget.dataset.tabid
            },
            success: function(n) {
                t.getJsonData(n.data).id ? wx.navigateTo({
                    url: "/pages/news/news-detail/news-detail?tabContentId=" + a.currentTarget.dataset.tabid
                }) : e.warn("该资讯已删除！");
            },
            fail: function() {
                t.hint();
            }
        });
    },
    toProDetail: function(a) {
        var e = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getZXProductDetail.action",
            data: {
                appId: t.globalData.projectInfo.appId,
                productId: a.currentTarget.dataset.tabid
            },
            success: function(n) {
                2 != t.getJsonData(n.data).status ? e.warn("该商品不存在或已下架！") : wx.navigateTo({
                    url: "../../product/pro-detail/pro-detail?productId=" + a.currentTarget.dataset.tabid
                });
            },
            fail: function() {
                t.hint();
            }
        });
    },
    toSupplyDetail: function(a) {
        var e = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getPhotoInfoTab.action",
            data: {
                appId: t.globalData.projectInfo.appId,
                tabContentId: a.currentTarget.dataset.tabid,
                customizetabId: t.globalData.customizeTabId.LynxPhoto_Info_Post_Tab
            },
            success: function(n) {
                t.getJsonData(n.data).id ? wx.navigateTo({
                    url: "../../supply/supply-detail/supply-detail?tabContentId=" + a.currentTarget.dataset.tabid
                }) : e.warn("该资讯已删除！");
            },
            fail: function() {
                t.hint();
            }
        });
    },
    onReachBottom: function() {
        e < n ? (e++, this.getMoreCollectPage()) : e > 1 && (this.data.pageList.length > 1 ? this.setData({
            bottomHint: !1
        }) : this.setData({
            bottomHint: !0
        }));
    },
    warn: function(t) {
        wx.showToast({
            title: t,
            image: "../../../img/warn.png",
            duration: 2e3
        });
    }
});