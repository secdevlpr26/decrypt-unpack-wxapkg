var e = getApp(), a = (require("../../utils/imgutil.js"), require("../../common.js"));

Page({
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    },
    isloading: !1,
    bannerLoaded: !1,
    url: !1,
    onShareAppMessage: function() {
        return e.shareAppMessage({
            url: this.url,
            title: this.data.newsInfo.Title
        });
    },
    onLoad: function(t) {
        var i = this;
        i.url = e.getPageUrl(i, t), e.registerGlobalFunctions(i), this.setData({
            queryparams: t
        }), this.loadNews(), a.setPopupFromShare();
    },
    data: {
        baseUrl: e.globalData.siteBaseUrl,
        plugNavFlag: !0
    },
    goNewsDetails: function(e) {
        var a = e.currentTarget.dataset.newsid;
        wx.redirectTo({
            url: "newsdetail?id=" + a
        });
    },
    loadNews: function() {
        var a = this;
        if (!a.isloading) {
            a.isloading = !0;
            var t = 0;
            a.data.queryparams.id && (t = a.data.queryparams.id), e.sendRequest({
                url: "/index.php?c=Front/WxApp/JsonApi&a=getNewsInfo&id=" + t + "&prevnext=1&updateHits=1",
                method: "GET",
                success: function(t) {
                    a.isloading = !1, t.success ? (wx.setNavigationBarTitle({
                        title: t.info.Title
                    }), t.info.PublishTime = t.info.PublishTime.split(" ")[0], e.WxParse.wxParse("DetailInfo", "html", t.info.Content, a, 5), 
                    a.setData({
                        newsInfo: t.info,
                        prevnext: t.prevnext
                    })) : console.log("getNewsInfo fail：" + t.msg);
                },
                fail: function(e) {
                    a.isloading = !1, console.log("getNewsInfo fail");
                }
            });
        }
    },
    navBtnShowAndHide: function() {
        var e = !this.data.plugNavFlag;
        this.setData({
            plugNavFlag: e
        });
    }
});