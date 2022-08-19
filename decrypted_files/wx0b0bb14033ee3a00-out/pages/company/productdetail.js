var a = getApp(), t = require("../../utils/imgutil.js"), e = require("../../common.js");

Page({
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    },
    isloading: !1,
    bannerLoaded: !1,
    url: !1,
    onShareAppMessage: function() {
        return a.shareAppMessage({
            url: this.url,
            title: this.data.productInfo.Name
        });
    },
    onLoad: function(t) {
        var o = this;
        o.url = a.getPageUrl(o, t), a.registerGlobalFunctions(o), e.initCommonModules(), 
        this.setData({
            queryparams: t
        }), this.loadProduct();
    },
    onPageScroll: function() {},
    data: {
        currentTab: 0,
        bannerHeight: 150,
        hasPrice: !0,
        productImgs: [],
        plugNavFlag: !0,
        videoshow: !1
    },
    loadProduct: function() {
        var t = this;
        if (!t.isloading) {
            t.isloading = !0;
            var e = 0;
            t.data.queryparams.id && (e = t.data.queryparams.id), a.sendRequest({
                url: "/index.php?c=Front/WxApp/JsonApi&a=getProductInfo&id=" + e + "&updateHits=1",
                method: "GET",
                success: function(e) {
                    if (t.isloading = !1, e.success) {
                        for (var o = e.info.BigImages.split(","), i = 0; i < o.length; i++) o[i] = a.globalData.cdnBaseUrl + "/comdata/" + e.info.SiteID + "/product/" + o[i];
                        0 == parseFloat(e.info.Price) && (e.info.Price = "面议", t.setData({
                            hasPrice: !1
                        })), wx.setNavigationBarTitle({
                            title: e.info.Name
                        }), 0 == parseFloat(e.info.FreightMoney) && (e.info.FreightMoney = "包邮"), a.WxParse.wxParse("DetailInfo", "html", e.info.Content, t, 5), 
                        t.setData({
                            productInfo: e.info,
                            productImgs: o
                        });
                    } else console.log("getProductInfo fail：" + e.msg);
                },
                fail: function(a) {
                    t.isloading = !1, console.log("getProductInfo fail");
                }
            });
        }
    },
    onBannerImgLoad: function(a) {
        var e = this, o = t.imageUtil(a);
        0 == e.bannerLoaded && (e.setData({
            bannerHeight: o.imageHeight
        }), e.bannerLoaded = !0);
    },
    videobofang: function() {
        this.setData({
            videoshow: !0
        });
    },
    videoguanbi: function() {
        this.setData({
            videoshow: !1
        });
    },
    navBtnShowAndHide: function() {
        var a = !this.data.plugNavFlag;
        this.setData({
            plugNavFlag: a
        });
    }
});