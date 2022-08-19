var a = getApp();

Page({
    isloading: !1,
    url: !1,
    onShareAppMessage: function() {
        return a.shareAppMessage({
            url: this.url,
            title: this.data.newsInfo.Title
        });
    },
    onLoad: function(t) {
        var e = this;
        e.url = a.getPageUrl(e, t), a.registerGlobalFunctions(e), this.setData({
            queryparams: t
        }), this.loadNotice();
    },
    data: {
        baseUrl: a.globalData.siteBaseUrl,
        plugNavFlag: !0
    },
    loadNotice: function() {
        var t = this;
        if (!t.isloading) {
            t.isloading = !0;
            t.data.queryparams.id && t.data.queryparams.id, a.sendRequest({
                url: "/index.php?c=Front/WxApp/ServiceApi&a=getNotice",
                method: "GET",
                success: function(e) {
                    console.log(e), t.isloading = !1, e.success ? (wx.setNavigationBarTitle({
                        title: e.notice.Title
                    }), a.WxParse.wxParse("NoticeDetail", "html", e.notice.Detail, t, 5), t.setData({
                        notice: e.notice
                    })) : console.log("getNotice fail：" + e.msg);
                },
                fail: function(a) {
                    t.isloading = !1, console.log("getNotice fail");
                }
            });
        }
    },
    navBtnShowAndHide: function() {
        var a = !this.data.plugNavFlag;
        this.setData({
            plugNavFlag: a
        });
    }
});