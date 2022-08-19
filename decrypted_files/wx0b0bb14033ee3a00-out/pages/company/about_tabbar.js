var a = getApp(), e = require("../../utils/imgutil.js");

Page({
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    },
    bannerLoaded: !1,
    comImagesSize: {},
    data: {
        userInfo: {},
        companyshowImgShow: !0,
        companyimgpackup: "imgpackup",
        aboutUsShowText: "显示全部",
        companyshowimg: !0,
        baseUrl: a.globalData.siteBaseUrl,
        imagerotate: "imageup",
        imagerotateimg: "imageup",
        textheightarr: [ "unfold" ],
        plugNavFlag: !0
    },
    onShareAppMessage: function() {
        return a.shareAppMessage();
    },
    showAndHiddenText: function(a) {
        if ("1" === a.currentTarget.dataset.showText) {
            var e = "", t = "";
            "显示全部" === this.data.aboutUsShowText ? (e = "收起", t = "imagedown") : (e = "显示全部", 
            t = "imageup"), this.setData({
                aboutUsShowText: e,
                imagerotate: t
            });
        } else if ("2" === a.currentTarget.dataset.showImg) {
            var i = this.data.companyshowimg;
            if (i) i = !i, this.data.info.Images.slice(0, this.data.info.Images.length); else {
                i = !i;
                var n = this.data.info.Images.length;
                this.data.info.Images.slice(0, n);
            }
            this.setData({
                comImages: this.data.info.Images,
                companyshowimg: i
            });
        }
    },
    callmeTap: function(a) {
        wx.makePhoneCall({
            phoneNumber: a.currentTarget.dataset.tel,
            success: function() {},
            fail: function() {
                wx.showModal({
                    title: "提示",
                    content: "您的微信版本不支持一键拨号，请拨打" + a.currentTarget.dataset.tel + "咨询",
                    success: function(a) {
                        a.confirm ? console.log("qued") : a.cancel && console.log("用户点击取消");
                    }
                });
            }
        });
    },
    onLoad: function(e) {
        a.getPageUrl(this, e), a.registerGlobalFunctions(this);
        var t = this;
        wx.setNavigationBarTitle({
            title: a.globalData.TitleName[2].TitleName
        }), t.setData({
            bannerHeight: 300,
            TitleName: a.globalData.TitleName
        }), this.loadPageData();
    },
    getLocationByAddress: function(e) {
        var t = this, i = {
            url: "/index.php?c=Front/WxApp/Amap&a=geo",
            data: {
                addr: t.data.info.addr
            },
            success: function(a) {
                console.log(a), a.success ? wx.openLocation({
                    name: t.data.info.title,
                    address: t.data.info.addr,
                    longitude: Number(a.info.longitude),
                    latitude: Number(a.info.latitude)
                }) : t.showModal({
                    content: "" + a.msg
                });
            }
        };
        a.sendRequest(i);
    },
    getLocation: function(e) {
        var t = this, i = Number(e.currentTarget.dataset.lat), n = Number(e.currentTarget.dataset.lng);
        i > 0 && n > 0 ? wx.openLocation({
            name: t.data.info.Name || a.globalData.appTitle,
            address: t.data.info.Address,
            longitude: Number(n),
            latitude: Number(i)
        }) : this.getLocationByAddress();
    },
    bannerImgLoad: function(a) {
        var t = this, i = e.imageUtil(a);
        0 == t.bannerLoaded && (t.setData({
            bannerHeight: i.imageHeight
        }), t.bannerLoaded = !0);
    },
    comImgLoad: function(a) {
        var t = this, i = e.imageUtil(a);
        t.comImagesSize[a.currentTarget.dataset.src] = i;
    },
    photoClick: function(a) {
        var e = a.currentTarget.dataset.src;
        wx.redirectTo({
            url: "/pages/index/imgview?src=" + e
        });
    },
    bigImgShow: function(a) {
        var t = this, i = a.currentTarget.dataset.src, n = {};
        n = t.comImagesSize[i] ? t.comImagesSize[i] : e.imageUtil(a);
        var s = 0;
        if (t.data.info.Images.length) {
            for (var o = 0; o < t.data.info.Images.length; o++) if (t.data.info.Images[o] == a.currentTarget.dataset.src) {
                s = o;
                break;
            }
            t.setData({
                bigImgHeight: n.imageHeight,
                slideshow: !0,
                slideCurrent: s
            });
        }
    },
    hideImgShow: function() {
        this.setData({
            slideshow: !1
        });
    },
    loadPageData: function() {
        var e = this, t = a.globalData.baseInfo;
        t.Name && wx.setNavigationBarTitle({
            title: a.globalData.TitleName[2].TitleName
        });
        t.Images.length > 4 || t.Images.length;
        t.Banners = a.replaceDomain(t.Banners), t.Images = a.replaceDomain(t.Images), t.Images.length < 4 && this.setData({
            companyshowImgShow: !1
        }), e.setData({
            info: t,
            comImages: t.Images,
            banners: t.Banners
        }), a.WxParse.wxParse("DetailInfo", "html", t.Intro, e, 5), t.Name && a.setGlobalData("appTitle", t.Name);
    },
    navBtnShowAndHide: function() {
        var e = !this.data.plugNavFlag;
        this.setData({
            plugNavFlag: e,
            TitleName: a.globalData.TitleName
        });
    }
});