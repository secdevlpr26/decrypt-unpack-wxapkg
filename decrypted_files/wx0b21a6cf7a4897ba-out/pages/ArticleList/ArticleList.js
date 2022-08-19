var t = getApp();

require("../../utils/util.js");

Page({
    data: {
        winHeight: "",
        winWidth: 750,
        currentTab: 0,
        scrollLeft: 0,
        categoryList: [],
        dataArray: [],
        size: 10,
        leftPageHover: !1,
        rightPageHover: !1,
        info: ""
    },
    switchTab: function(t) {
        this.setData({
            currentTab: t.detail.current
        });
    },
    swichNav: function(t) {
        var a = t.target.dataset.current;
        if (this.data.currentTaB == a) return !1;
        this.setData({
            currentTab: a
        }), this.checkCor(t);
    },
    checkCor: function(t) {
        var a = t.currentTarget.offsetLeft - 20;
        this.setData({
            scrollLeft: a + 50 - this.data.winWidth / 2
        }), this.getArticleList();
    },
    onLoad: function() {
        var a = this;
        a.setData({
            info: t.globalData.info
        }), wx.getSystemInfo({
            success: function(t) {
                var e = t.windowHeight - 50;
                a.setData({
                    winHeight: e,
                    winWidth: t.windowWidth
                });
            }
        }), this.getCategoryList();
    },
    getCategoryList: function() {
        var a = this;
        t.apiRequestGet({
            urlMethod: "api/Article/getCategoryList",
            data: {},
            success: function(t) {
                if (null != t.data) {
                    for (var e in t.data) t.data[e].list = [], t.data[e].pageindex = 0, t.data[e].leftPageHover = !1, 
                    t.data[e].rightPageHover = !1;
                    a.setData({
                        categoryList: t.data
                    }), a.getArticleList();
                }
            },
            fail: function(t) {}
        });
    },
    getArticleList: function() {
        if (null != this.data.categoryList && 0 != this.data.categoryList.length) {
            var a = this, e = this.data.categoryList[this.data.currentTab], i = this.data.dataArray[this.data.currentTab];
            t.apiRequestGet({
                urlMethod: "api/Article/getArticleList",
                data: {
                    cateId: e.categoryId,
                    page: i ? i.page : 0,
                    size: 10
                },
                success: function(t) {
                    if (null != t.data) {
                        var e = a.data.dataArray, i = t.data;
                        i.leftPageHover = i.page > 0, i.rightPageHover = i.page + 1 < i.pageCount, e[a.data.currentTab] = i, 
                        a.setData({
                            dataArray: e
                        });
                    }
                },
                fail: function(t) {}
            });
        } else this.getCategoryList();
    },
    leftPageTap: function() {
        var t = this.data.dataArray, a = t[this.data.currentTab];
        a.leftPageHover && (a.page--, this.setData({
            dataArray: t
        }), this.getArticleList());
    },
    rightPageTap: function() {
        var t = this.data.dataArray, a = t[this.data.currentTab];
        a.rightPageHover && (a.page++, this.setData({
            dataArray: t
        }), this.getArticleList());
    },
    backToHome: function() {
        wx.switchTab({
            url: "../Home/Home"
        });
    }
});