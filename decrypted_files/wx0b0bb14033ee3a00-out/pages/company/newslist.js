var s = getApp(), t = (require("../../utils/imgutil.js"), require("../../utils/util.js")), a = require("../../common.js");

Page({
    isloading: !1,
    onShareAppMessage: function() {
        return s.shareAppMessage("/pages/company/newslist");
    },
    onLoad: function(t) {
        s.getPageUrl(this, t), wx.setNavigationBarTitle({
            title: s.globalData.TitleName[0].TitleName
        }), s.registerGlobalFunctions(this), this.setData({
            queryparams: t,
            classid: t.classid ? t.classid : 0
        }), this.loadClassList(), this.loadNewsList(!0), a.setPopupFromShare();
    },
    data: {
        pagesize: 10,
        recordcount: 99,
        newslist: [],
        sortcol: "",
        sort: "",
        hasnews: !0,
        scrollHeight: s.windowHeight * s.pixelRatio - 80,
        baseUrl: s.globalData.siteBaseUrl,
        plugNavFlag: !0
    },
    loadNewsList: function(t) {
        var a = this;
        if (!a.isloading) {
            a.isloading = !0, t && (a.data.recordcount = 99, a.data.newslist = []);
            var e = a.data.recordcount, i = a.data.newslist.length;
            if (console.log(e, i), e > i) {
                var l = Math.ceil(i / a.data.pagesize) + 1, o = a.data.queryparams.keyword ? a.data.queryparams.keyword : "", n = "";
                a.data.sortcol && (n = "&sortcol=" + a.data.sortcol + "&sort=" + a.data.sort), s.sendRequest({
                    url: "/index.php?c=Front/WxApp/JsonApi&a=getnewslist&keyword=" + o + "&page=" + l + "&pagesize=" + a.data.pagesize + n + "&classid=" + a.data.classid,
                    method: "GET",
                    success: function(s) {
                        if (a.isloading = !1, s.success) {
                            for (var t = 0; t < s.newslist.length; t++) s.newslist[t].PublishTime = s.newslist[t].PublishTime.split(" ")[0], 
                            s.newslist[t].PublishYear = s.newslist[t].PublishTime.split("-")[0], s.newslist[t].PublishDate = s.newslist[t].PublishTime.split("-")[1] + "/" + s.newslist[t].PublishTime.split("-")[2], 
                            a.data.newslist.push(s.newslist[t]);
                            a.setData({
                                newslist: a.data.newslist,
                                recordcount: s.recordcount,
                                hasnews: a.data.newslist.length > 0
                            });
                        } else console.log("loadNewsList fail：" + s.msg);
                    },
                    fail: function(s) {
                        a.isloading = !1, console.log("loadNewsList fail");
                    }
                });
            }
        }
    },
    loadClassList: function() {
        var t = this;
        s.sendRequest({
            url: "/index.php?c=Front/WxApp/JsonApi&a=getNewsClassList",
            method: "GET",
            success: function(a) {
                a.success ? (null == a.list ? t.setData({
                    showClassNav: !1
                }) : t.setData({
                    showClassNav: !0
                }), a.list.unshift({
                    ClassID: 0,
                    Name: "全部分类"
                }), a.list.forEach(function(s) {
                    if (s.ClassID == t.data.classid && s.ClassID > 0) return !1;
                }), a.list.length || t.setData({
                    scrollHeight: s.windowHeight * s.pixelRatio
                }), t.setData({
                    classlist: a.list
                })) : console.log("getNewsClassList fail：" + a.msg);
            },
            fail: function(s) {
                console.log("getNewsClassList fail");
            }
        });
    },
    onClassChange: function(s) {
        if (this.data.classid == s.currentTarget.dataset.classid) return !1;
        this.setData({
            classid: s.currentTarget.dataset.classid
        }), this.isloading = !1, this.loadNewsList(!0);
    },
    onSearchSubmit: function(a) {
        var e = t.trim(a.detail.value.keyword);
        e ? wx.redirectTo({
            url: "newslist?keyword=" + e
        }) : s.showModal({
            title: "提示",
            content: "请输入关键词"
        });
    },
    onKeywordChange: function(a) {
        var e = t.trim(a.detail.value);
        e ? e && wx.redirectTo({
            url: "newslist?keyword=" + e
        }) : s.showModal({
            title: "提示",
            content: "请输入关键词"
        });
    },
    goNewsDetail: function(s) {
        var t = s.currentTarget.dataset.newsid;
        wx.navigateTo({
            url: "newsdetail?id=" + t
        });
    },
    onNewsListScroll: function(s) {
        this.loadNewsList();
    },
    navBtnShowAndHide: function() {
        var t = !this.data.plugNavFlag;
        this.setData({
            plugNavFlag: t,
            TitleName: s.globalData.TitleName
        });
    }
});