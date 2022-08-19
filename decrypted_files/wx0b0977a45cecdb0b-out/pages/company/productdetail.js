var a = getApp(), t = require("../../components/utils/imgutil.js"), e = require("../../common.js");

Page({
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
        var e = this;
        e.url = a.getPageUrl(e, t), a.registerGlobalFunctions(e), e.setData({
            queryparams: t
        });
    },
    onShow: function() {
        a.doAfterUserInfoAuth({
            success: this.initData,
            fail: this.initData
        });
    },
    initData: function() {
        var a = this;
        e.initCommonModules(), a.loadProduct();
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
                        for (var i = e.info.BigImages.split(","), o = 0; o < i.length; o++) i[o] = a.globalData.siteBaseUrl + "/comdata/" + e.info.SiteID + "/product/" + i[o];
                        0 == parseFloat(e.info.Price) && (e.info.Price = "面议", t.setData({
                            hasPrice: !1
                        })), wx.setNavigationBarTitle({
                            title: e.info.Name
                        }), 0 == parseFloat(e.info.FreightMoney) && (e.info.FreightMoney = "包邮"), a.WxParse.wxParse("DetailInfo", "html", e.info.Content, t, 5);
                        var n = a.globalData.subscribeFormData;
                        null != n && (n.SubmitText = "立即预约"), t.setData({
                            productInfo: e.info,
                            productImgs: i,
                            subscribeFormData: n
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
        var e = this, i = t.imageUtil(a);
        0 == e.bannerLoaded && (e.setData({
            bannerHeight: i.imageHeight
        }), e.bannerLoaded = !0);
    },
    goReserve: function(a) {
        var t = a.currentTarget.dataset.productid;
        wx.redirectTo({
            url: "reserve-by-product?productid=" + t
        });
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