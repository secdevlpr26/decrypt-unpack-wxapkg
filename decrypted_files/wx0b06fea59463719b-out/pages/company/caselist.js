var a = getApp(), t = require("../../common.js");

Page({
    isloading: !1,
    onShareAppMessage: function() {
        return a.shareAppMessage("/pages/company/caselist");
    },
    onLoad: function(e) {
        var s = this;
        wx.setNavigationBarTitle({
            title: a.globalData.TitleName[4].TitleName
        }), a.getPageUrl(this, e), a.registerGlobalFunctions(this), wx.getSystemInfo({
            success: function(a) {
                s.setData({
                    imgWidth: (a.windowWidth - 39) / 2
                }), a.windowWidth;
            }
        }), this.setData({
            queryparams: e,
            TitleName: a.globalData.TitleName
        }), this.loadCase(!0), t.setPopupFromShare();
    },
    onPullDownRefresh: function() {
        var a = this;
        a.data.pullDownRefreshFlag && (a.isloading = !1, a.setData({
            pullDownRefreshFlag: !1
        }), a.data.pullDownRefreshFlag = !1, a.data.queryparams.refresh = !0, setTimeout(function() {
            a.onLoad(a.data.queryparams), a.setData({
                pullDownRefreshFlag: !0
            }), wx.stopPullDownRefresh();
        }, 1500));
    },
    data: {
        pullDownRefreshFlag: !0,
        falgAjax: !0,
        classid: 0,
        pagesize: 10,
        recordcount: 99,
        caselist: [],
        sortcol: "",
        sort: "",
        hasproduct: !0,
        baseUrl: a.globalData.siteBaseUrl,
        animationData: {},
        plugNavFlag: !0,
        scrollHeight: a.windowHeight * a.pixelRatio,
        imgWidth: 0,
        total: 0
    },
    loadCase: function(t) {
        var e = this;
        if (!e.isloading) {
            e.isloading = !0;
            var s = e.data.total;
            t ? (e.data.recordcount = 99, e.setData({
                caselist: []
            }), e.data.caselist = []) : void 0 != s && (e.data.recordcount = s);
            var o = e.data.recordcount, i = e.data.caselist.length;
            if (o > i && this.data.falgAjax) {
                this.setData({
                    falgAjax: !1
                });
                var l = Math.ceil(i / e.data.pagesize) + 1, r = e.data.queryparams.keyword ? e.data.queryparams.keyword : "", n = "";
                e.data.sortcol && (n = "&sortcol=" + e.data.sortcol + "&sort=" + e.data.sort), a.sendRequest({
                    url: "/index.php?c=Front/WxApp/ServiceApi&a=getCaseList&keyword=" + r + "&page=" + l + "&pagesize=" + e.data.pagesize + n,
                    method: "GET",
                    success: function(a) {
                        if (e.isloading = !1, a.success) {
                            e.data.recordcount;
                            for (var t = a.caselist, s = 0; s < t.length; s++) e.data.caselist.push(a.caselist[s]);
                            e.setData({
                                caselist: e.data.caselist,
                                recordcount: a.recordcount,
                                hascase: a.caselist.length > 0,
                                falgAjax: !0,
                                total: a.recordcount
                            });
                        } else console.log("getcaselist fail：" + a.msg);
                    },
                    fail: function(a) {
                        e.isloading = !1, console.log("getcaselist fail");
                    }
                });
            }
        }
    },
    goProductdetail: function(a) {
        var t = a.currentTarget.dataset.caseid;
        wx.navigateTo({
            url: "casedetail?id=" + t
        });
    },
    onProductListScroll: function(a) {
        this.loadCase();
    },
    onReachBottom: function() {
        this.loadCase();
    },
    navBtnShowAndHide: function() {
        var a = !this.data.plugNavFlag;
        this.setData({
            plugNavFlag: a
        });
    }
});