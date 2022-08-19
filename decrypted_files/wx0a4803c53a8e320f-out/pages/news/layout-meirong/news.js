var t = getApp(), a = t.globalData.projectInfo, e = t.globalData.customizeTabId, i = 1, s = 1, o = "";

Page({
    data: {
        titles: [],
        pageList: [],
        adList: [],
        categoryId: "",
        news_type: 3,
        titleLeft: 0,
        titleKey: 1,
        hidden: !0,
        bottomHint: !0,
        leftHidden: !0,
        rightHidden: !0,
        scrolltop: 0
    },
    onLoad: function(i) {
        a = t.globalData.projectInfo, e = t.globalData.customizeTabId;
        var s = this;
        "LynxPhoto_H_Info_Tab_Level2" == (o = i.sysTabName ? i.sysTabName : "LynxPhoto_H_Info_Tab_Level2") ? (s.getAdList(), 
        s.setData({
            news_type: 3
        })) : s.setData({
            news_type: 4
        }), i.title && wx.setNavigationBarTitle({
            title: i.title
        }), s.newsTitleInfo().then(function(t) {
            s.titletap();
        });
    },
    newsTitleInfo: function() {
        var i = this;
        return new Promise(function(s, n) {
            wx.request({
                url: t.globalData.comUrl + "tabs_getPhotoInfoTabCategory.action",
                data: {
                    appId: a.appId,
                    customizeTabId: e[o]
                },
                success: function(a) {
                    var e = t.getJsonData(a.data);
                    i.setData({
                        titles: e
                    }), e.length > 3 && i.setData({
                        rightHidden: !1
                    }), s(i.titles);
                },
                fail: function() {
                    t.hint();
                }
            });
        });
    },
    getNewsInfo: function() {
        var i = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getPhotoInfoTabFromL2ToL1.action",
            data: {
                appId: a.appId,
                customizeTabId: e[o],
                categoryId: i.data.categoryId,
                current: 1
            },
            success: function(a) {
                var e = t.getJsonData(a.data);
                s = e.pages;
                for (var o = 0; o < e.pageList.length; o++) e.pageList[o].picture1 = t.modifyPicSize(e.pageList[o].picture1, "_r160x160p");
                i.setData({
                    pageList: e.pageList
                }), i.data.pageList.length < 1 && i.setData({
                    hidden: !1
                }), wx.hideToast(), wx.stopPullDownRefresh();
            },
            fail: function() {
                t.hint();
            }
        });
    },
    getMoreNewsInfo: function() {
        var n = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getPhotoInfoTabFromL2ToL1.action",
            data: {
                appId: a.appId,
                customizeTabId: e[o],
                categoryId: n.data.categoryId,
                current: i
            },
            success: function(a) {
                var e = t.getJsonData(a.data);
                s = e.pages;
                for (var i = 0; i < e.pageList.length; i++) e.pageList[i].picture1 = t.modifyPicSize(e.pageList[i].picture1, "_r160x160p");
                n.data.pageList = n.data.pageList.concat(e.pageList), n.setData({
                    pageList: n.data.pageList
                });
            },
            fail: function() {
                t.hint();
            }
        });
    },
    getAdList: function() {
        var i = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getPhotoInfoTabFromL2ToL1.action",
            data: {
                appId: a.appId,
                customizeTabId: e.LynxAdvertisingH_Photo_Info_Tab_Level1,
                current: 1
            },
            success: function(a) {
                var e = t.getJsonData(a.data);
                i.setData({
                    adList: e.pageList
                });
            },
            fail: function() {
                t.hint();
            }
        });
    },
    toNewsList: function(t) {
        wx.navigateTo({
            url: "news-list/news-list?categoryId=" + t.currentTarget.dataset.code + "&title=" + t.currentTarget.dataset.title
        });
    },
    titletap: function(t) {
        var a = this;
        this.setData({
            pageList: []
        }), t ? a.setData({
            categoryId: t.currentTarget.dataset.code,
            bottomHint: !0,
            hidden: !0
        }) : a.setData({
            categoryId: a.data.titles[0].code,
            bottomHint: !0,
            hidden: !0
        }), i = 1, this.getNewsInfo();
    },
    onReachBottom: function() {
        i < s ? (i++, this.getMoreNewsInfo()) : i > 1 && (this.data.pageList.length > 1 ? this.setData({
            bottomHint: !1
        }) : this.setData({
            bottomHint: !0
        }));
    },
    onPullDownRefresh: function() {
        i = 1, this.setData({
            pageList: []
        }), wx.showToast({
            title: "加载中...",
            icon: "loading",
            duration: 1e4,
            mask: !0
        }), this.getNewsInfo();
    },
    turnLeft: function() {
        console.log(this.data.titleKey), this.data.titleKey > 1 && (this.setData({
            titleLeft: this.data.titleLeft + 200,
            titleKey: this.data.titleKey - 1
        }), 1 == this.data.titleKey && this.setData({
            leftHidden: !0,
            rightHidden: !1
        }));
    },
    turnRight: function() {
        console.log(this.data.titleKey), this.data.titleKey < this.data.titles.length - 2 && (this.setData({
            titleLeft: this.data.titleLeft - 200,
            titleKey: this.data.titleKey + 1
        }), this.data.titleKey == this.data.titles.length - 2 && this.setData({
            rightHidden: !0,
            leftHidden: !1
        }));
    }
});