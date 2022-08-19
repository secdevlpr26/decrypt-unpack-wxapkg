var a = getApp(), e = require("../../utils/imgutil.js"), t = require("../../common.js");

Page({
    isloading: !1,
    bannerLoaded: !1,
    url: !1,
    onShareAppMessage: function() {
        return a.shareAppMessage({
            url: this.url,
            title: this.data.caseInfo.Name
        });
    },
    onLoad: function(e) {
        var i = this;
        i.url = a.getPageUrl(i, e), a.registerGlobalFunctions(i), this.setData({
            queryparams: e
        }), this.loadCase(), t.setPopupFromShare();
    },
    data: {
        currentTab: 0,
        bannerHeight: 150,
        hasPrice: !0,
        productImgs: [],
        plugNavFlag: !0,
        baseUrl: a.globalData.siteBaseUrl
    },
    loadCase: function() {
        var e = this;
        if (!e.isloading) {
            e.isloading = !0;
            var t = 0;
            e.data.queryparams.id && (t = e.data.queryparams.id), a.sendRequest({
                url: "/index.php?c=Front/WxApp/ServiceApi&a=getCaseInfo&id=" + t,
                method: "GET",
                success: function(t) {
                    e.isloading = !1, t.success ? (wx.setNavigationBarTitle({
                        title: t.info.Name
                    }), a.WxParse.wxParse("DetailInfo", "html", t.info.Detail, e, 5), e.setData({
                        caseInfo: t.info
                    })) : console.log("getProductInfo fail：" + t.msg);
                },
                fail: function(a) {
                    e.isloading = !1, console.log("getProductInfo fail");
                }
            });
        }
    },
    onBannerImgLoad: function(a) {
        var t = this, i = e.imageUtil(a);
        0 == t.bannerLoaded && (t.setData({
            bannerHeight: i.imageHeight
        }), t.bannerLoaded = !0);
    },
    navbarTap: function(a) {
        this.setData({
            currentTab: a.currentTarget.dataset.idx
        });
    },
    navBtnShowAndHide: function() {
        var a = !this.data.plugNavFlag;
        this.setData({
            plugNavFlag: a
        });
    }
});