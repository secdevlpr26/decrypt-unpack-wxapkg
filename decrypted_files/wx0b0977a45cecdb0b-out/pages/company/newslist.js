var s = getApp(), e = (require("../../components/utils/imgutil.js"), require("../../components/utils/util.js")), t = require("../../common.js");

Page({
    isloading: !1,
    onShareAppMessage: function() {
        return s.shareAppMessage("/pages/company/newslist");
    },
    onLoad: function(e) {
        s.getPageUrl(this, e), s.registerGlobalFunctions(this), this.setData({
            queryparams: e
        }), this.loadNewsList(!0), t.setPopupFromShare();
    },
    data: {
        pagesize: 5,
        recordcount: 99,
        newslist: [],
        sortcol: "",
        sort: "",
        hasnews: !0,
        scrollHeight: s.windowHeight * s.pixelRatio - 47 * s.pixelRatio,
        baseUrl: s.globalData.siteBaseUrl,
        plugNavFlag: !0
    },
    loadNewsList: function(e) {
        var t = this;
        if (!t.isloading) {
            t.isloading = !0, e && (t.data.recordcount = 99, t.data.newslist = []);
            var a = t.data.recordcount, i = t.data.newslist.length;
            if (a > i) {
                var l = Math.ceil(i / t.data.pagesize) + 1, o = t.data.queryparams.keyword ? t.data.queryparams.keyword : "", n = "";
                t.data.sortcol && (n = "&sortcol=" + t.data.sortcol + "&sort=" + t.data.sort), s.sendRequest({
                    url: "/index.php?c=Front/WxApp/JsonApi&a=getnewslist&keyword=" + o + "&page=" + l + "&pagesize=" + t.data.pagesize + n,
                    method: "GET",
                    success: function(s) {
                        if (t.isloading = !1, s.success) {
                            for (var e = 0; e < s.newslist.length; e++) s.newslist[e].PublishTime = s.newslist[e].PublishTime.split(" ")[0], 
                            s.newslist[e].PublishYear = s.newslist[e].PublishTime.split("-")[0], s.newslist[e].PublishDate = s.newslist[e].PublishTime.split("-")[1] + "/" + s.newslist[e].PublishTime.split("-")[2], 
                            t.data.newslist.push(s.newslist[e]);
                            t.setData({
                                newslist: t.data.newslist,
                                recordcount: s.recordcount,
                                hasnews: t.data.newslist.length > 0
                            });
                        } else console.log("loadNewsList fail：" + s.msg);
                    },
                    fail: function(s) {
                        t.isloading = !1, console.log("loadNewsList fail");
                    }
                });
            }
        }
    },
    onSearchSubmit: function(t) {
        var a = e.trim(t.detail.value.keyword);
        a ? wx.redirectTo({
            url: "newslist?keyword=" + a
        }) : s.showModal({
            title: "提示",
            content: "请输入关键词"
        });
    },
    onKeywordChange: function(t) {
        var a = e.trim(t.detail.value);
        a ? a && wx.redirectTo({
            url: "newslist?keyword=" + a
        }) : s.showModal({
            title: "提示",
            content: "请输入关键词"
        });
    },
    goNewsDetail: function(s) {
        var e = s.currentTarget.dataset.newsid;
        wx.navigateTo({
            url: "newsdetail?id=" + e
        });
    },
    onNewsListScroll: function(s) {
        this.loadNewsList();
    },
    navBtnShowAndHide: function() {
        var s = !this.data.plugNavFlag;
        this.setData({
            plugNavFlag: s
        });
    }
});