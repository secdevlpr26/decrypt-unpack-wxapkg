function e(e, a, t) {
    return a in e ? Object.defineProperty(e, a, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[a] = t, e;
}

var a, t = getApp(), o = require("../../utils/imgutil.js"), i = require("../../common.js");

require("../../components/wxb.js");

Page((a = {
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    },
    isloading: !1,
    bannerLoaded: !1,
    url: !1,
    onShareAppMessage: function() {
        return t.shareAppMessage({
            url: this.url,
            title: this.data.productInfo.Name
        });
    },
    data: {
        reminder: "授权提示",
        matter: "授权失败，请重新授权",
        abrogate: "暂时先不",
        permission: "允许"
    },
    onLoad: function(e) {
        var a = this;
        if (e.scene) {
            var o = {};
            decodeURIComponent(e.scene).split("&").map(function(e, a) {
                if (-1 !== e.indexOf("=")) {
                    var t = e.split("=");
                    o[t[0]] = t[1];
                }
            }), e = o;
        }
        a.url = t.getPageUrl(a, e), t.registerGlobalFunctions(a), i.initCommonModules(), 
        this.setData({
            queryparams: e
        }), this.loadProduct();
        var n = t.globalData.WebUserID || 0, r = t.globalData.getMobileNode ? t.globalData.getMobileNode.checkGoodsDetails : 0, s = getCurrentPages(), l = s[s.length - 1];
        a.data.nobileNodeStatus && 0 === t.globalData.hasMobile && 0 !== n && "1" === a.data.queryparams.fromShare && 0 !== r && setTimeout(function() {
            wx.redirectTo({
                url: "/pages/phoneauthorization/index?getMobileNode=" + t.globalData.getMobileNode.checkGoodsDetails + "&pageroute=" + l.route
            });
        }, 2e3);
    },
    onPageScroll: function() {}
}, e(a, "data", {
    currentTab: 0,
    bannerHeight: 150,
    hasPrice: !0,
    productImgs: [],
    plugNavFlag: !0,
    videoshow: !1
}), e(a, "loadProduct", function() {
    var e = this;
    if (!e.isloading) {
        e.isloading = !0;
        var a = 0;
        e.data.queryparams.id && (a = e.data.queryparams.id), t.sendRequest({
            url: "/index.php?c=Front/WxApp/JsonApi&a=getProductInfo&id=" + a + "&updateHits=1",
            method: "GET",
            success: function(a) {
                if (e.isloading = !1, a.success) {
                    var o = wx.getStorageSync("businessCardInfo"), i = a.info.BigImages.split(",")[0];
                    if (o.admin) if (wx.getStorageSync("otherMemberCardId")) {
                        var n = {
                            tbUserID: t.globalData.WebUserID,
                            tbType: "18",
                            tbTypeID: a.info.ProductID,
                            tbTypeName: a.info.Name,
                            tbTypeImg: i,
                            tbBusinessCardID: wx.getStorageSync("otherMemberCardId")
                        };
                        t.buried(n, function(e) {});
                    } else {
                        var r = {
                            tbUserID: t.globalData.WebUserID,
                            tbType: "18",
                            tbTypeID: a.info.ProductID,
                            tbTypeName: a.info.Name,
                            tbTypeImg: i,
                            tbBusinessCardID: 0
                        };
                        t.buried(r, function(e) {});
                    } else {
                        var s = {
                            tbUserID: t.globalData.WebUserID,
                            tbType: "18",
                            tbTypeID: a.info.ProductID,
                            tbTypeName: a.info.Name,
                            tbTypeImg: i,
                            tbBusinessCardID: wx.getStorageSync("businessCardId") ? wx.getStorageSync("businessCardId") : 0
                        };
                        t.buried(s, function(e) {});
                    }
                    for (var l = a.info.BigImages.split(","), d = 0; d < l.length; d++) l[d] = t.globalData.siteBaseUrl + "/comdata/" + a.info.SiteID + "/product/" + l[d];
                    0 == parseFloat(a.info.Price) && (a.info.Price = "面议", e.setData({
                        hasPrice: !1
                    })), wx.setNavigationBarTitle({
                        title: a.info.Name
                    }), 0 == parseFloat(a.info.FreightMoney) && (a.info.FreightMoney = "包邮"), t.WxParse.wxParse("DetailInfo", "html", a.info.Content, e, 5), 
                    e.setData({
                        productInfo: a.info,
                        productImgs: l
                    });
                } else console.log("getProductInfo fail：" + a.msg);
            },
            fail: function(a) {
                e.isloading = !1, console.log("getProductInfo fail");
            }
        });
    }
}), e(a, "onBannerImgLoad", function(e) {
    var a = this, t = o.imageUtil(e);
    0 == a.bannerLoaded && (a.setData({
        bannerHeight: t.imageHeight
    }), a.bannerLoaded = !0);
}), e(a, "videobofang", function() {
    this.setData({
        videoshow: !0
    });
}), e(a, "videoguanbi", function() {
    this.setData({
        videoshow: !1
    });
}), e(a, "navBtnShowAndHide", function() {
    var e = !this.data.plugNavFlag;
    this.setData({
        plugNavFlag: e
    });
}), a));