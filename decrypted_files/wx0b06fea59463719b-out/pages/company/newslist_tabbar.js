var s = getApp(), a = (require("../../utils/imgutil.js"), require("../../utils/util.js")), t = require("../../common.js");

Page({
    isloading: !1,
    onShareAppMessage: function() {
        return s.shareAppMessage("/pages/company/newslist");
    },
    onLoad: function(a) {
        s.getPageUrl(this, a), wx.setNavigationBarTitle({
            title: s.globalData.TitleName[0].TitleName
        }), s.registerGlobalFunctions(this), this.setData({
            queryparams: a,
            classid: a.classid ? a.classid : 0
        }), this.loadClassList(), this.loadNewsList(!0), t.setPopupFromShare();
    },
    getPhoneNumber: function(a) {
        var t = this;
        if (a.detail.errMsg.indexOf("getPhoneNumber:fail") > -1) 2 == t.data.readArticles ? t.setData({
            allowspopup: !0
        }) : wx.navigateTo({
            url: "newsdetail?id=" + t.data.newsid
        }); else {
            var e = s.globalData.appId, i = s.globalData.session_key, l = new wxb(e, i).decryptData(a.detail.encryptedData, a.detail.iv);
            s.loadphoneInfo(l.phoneNumber), wx.navigateTo({
                url: "newsdetail?id=" + t.data.newsid
            });
        }
    },
    abolish: function() {
        this.setData({
            allowspopup: !1
        });
    },
    turnOff: function() {
        s.turnOff();
    },
    onPullDownRefresh: function() {
        var s = this;
        s.data.pullDownRefreshFlag && (s.isloading = !1, s.setData({
            pullDownRefreshFlag: !1
        }), s.data.pullDownRefreshFlag = !1, s.data.queryparams.refresh = !0, setTimeout(function() {
            s.onLoad(s.data.queryparams), s.setData({
                pullDownRefreshFlag: !0
            }), wx.stopPullDownRefresh();
        }, 1500));
    },
    data: {
        pullDownRefreshFlag: !0,
        pagesize: 10,
        recordcount: 99,
        newslist: [],
        sortcol: "",
        sort: "",
        hasnews: !0,
        scrollHeight: s.windowHeight * s.pixelRatio - 80,
        baseUrl: s.globalData.siteBaseUrl,
        plugNavFlag: !0,
        reminder: "授权提示",
        matter: "授权失败，请重新授权",
        abrogate: "暂时先不",
        permission: "允许"
    },
    loadNewsList: function(a) {
        var t = this;
        if (!t.isloading) {
            t.isloading = !0, a && (t.data.recordcount = 99, t.data.newslist = []);
            var e = t.data.recordcount, i = t.data.newslist.length;
            if (console.log(e, i), e > i) {
                var l = Math.ceil(i / t.data.pagesize) + 1, o = t.data.queryparams.keyword ? t.data.queryparams.keyword : "", n = "";
                t.data.sortcol && (n = "&sortcol=" + t.data.sortcol + "&sort=" + t.data.sort), s.sendRequest({
                    url: "/index.php?c=Front/WxApp/JsonApi&a=getnewslist&keyword=" + o + "&page=" + l + "&pagesize=" + t.data.pagesize + n + "&classid=" + t.data.classid,
                    method: "GET",
                    success: function(s) {
                        if (t.isloading = !1, s.success) {
                            for (var a = 0; a < s.newslist.length; a++) s.newslist[a].PublishTime = s.newslist[a].PublishTime.split(" ")[0], 
                            s.newslist[a].PublishYear = s.newslist[a].PublishTime.split("-")[0], s.newslist[a].PublishDate = s.newslist[a].PublishTime.split("-")[1] + "/" + s.newslist[a].PublishTime.split("-")[2], 
                            t.data.newslist.push(s.newslist[a]);
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
    loadClassList: function() {
        var a = this;
        s.sendRequest({
            url: "/index.php?c=Front/WxApp/JsonApi&a=getNewsClassList",
            method: "GET",
            success: function(t) {
                t.success ? (null == t.list ? a.setData({
                    showClassNav: !1
                }) : a.setData({
                    showClassNav: !0
                }), t.list.unshift({
                    ClassID: 0,
                    Name: "全部分类"
                }), t.list.forEach(function(s) {
                    if (s.ClassID == a.data.classid && s.ClassID > 0) return !1;
                }), t.list.length || a.setData({
                    scrollHeight: s.windowHeight * s.pixelRatio
                }), a.setData({
                    classlist: t.list
                })) : console.log("getNewsClassList fail：" + t.msg);
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
    onSearchSubmit: function(t) {
        var e = a.trim(t.detail.value.keyword);
        e ? wx.redirectTo({
            url: "newslist?keyword=" + e
        }) : s.showModal({
            title: "提示",
            content: "请输入关键词"
        });
    },
    onKeywordChange: function(t) {
        var e = a.trim(t.detail.value);
        e ? e && wx.redirectTo({
            url: "newslist?keyword=" + e
        }) : s.showModal({
            title: "提示",
            content: "请输入关键词"
        });
    },
    goNewsDetail: function(a) {
        var t = this;
        this.setData({
            newsid: a.currentTarget.dataset.newsid
        });
        var e = s.globalData.getMobileNode ? s.globalData.getMobileNode.enterTicketCenter : 0, i = wx.getStorageSync("hasMobile") || 0;
        0 === s.globalData.hasMobile && 0 === i && 0 !== t.data.readArticles && 0 !== e ? this.setData({
            phonelicense: !0
        }) : wx.navigateTo({
            url: "newsdetail?id=" + t.data.newsid
        });
    },
    onNewsListScroll: function(s) {
        this.loadNewsList();
    },
    onReachBottom: function() {
        this.loadNewsList();
    },
    navBtnShowAndHide: function() {
        var a = !this.data.plugNavFlag;
        this.setData({
            plugNavFlag: a,
            TitleName: s.globalData.TitleName
        });
    }
});