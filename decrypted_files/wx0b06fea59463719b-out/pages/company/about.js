var a = getApp(), e = require("../../utils/imgutil.js");

Page({
    bannerLoaded: !1,
    comImagesSize: {},
    data: {
        userInfo: {},
        companyshowImgShow: !0,
        companyimgpackup: "imgpackup",
        aboutUsShowText: "显示全部",
        pullDownRefreshFlag: !0,
        companyshowimg: !0,
        baseUrl: a.globalData.siteBaseUrl,
        imagerotate: "imageup",
        imagerotateimg: "imageup",
        textheightarr: [ "unfold" ],
        plugNavFlag: !0,
        hdimg: [],
        circular: !0,
        indicatorDots: !1,
        indicatorcolor: "#000",
        vertical: !1,
        autoplay: !1,
        duration: 100,
        imgheights: [],
        imgwidth: 750,
        current: 0
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
                var s = this.data.info.Images.length;
                this.data.info.Images.slice(0, s);
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
                        a.confirm || a.cancel;
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
            queryparams: e,
            TitleName: a.globalData.TitleName
        }), this.loadPageData(), this.bannerImgLoad();
    },
    onPullDownRefresh: function() {
        var e = this;
        e.data.pullDownRefreshFlag && (e.setData({
            pullDownRefreshFlag: !1
        }), e.data.pullDownRefreshFlag = !1, e.data.queryparams.refresh = !0, setTimeout(function() {
            a.baseInfoLoaded = !1, a.loadBaseInfo(function() {
                e.onLoad(e.data.queryparams);
            }), e.setData({
                pullDownRefreshFlag: !0
            }), wx.stopPullDownRefresh();
        }, 1500));
    },
    getLocationByAddress: function(e) {
        var t = this, i = {
            url: "/index.php?c=Front/WxApp/Amap&a=geo",
            data: {
                addr: t.data.info.addr
            },
            success: function(a) {
                a.success ? wx.openLocation({
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
        var t = this, i = Number(e.currentTarget.dataset.lat), s = Number(e.currentTarget.dataset.lng);
        i > 0 && s > 0 ? wx.openLocation({
            name: t.data.info.Name || a.globalData.appTitle,
            address: t.data.info.Address,
            longitude: Number(s),
            latitude: Number(i)
        }) : this.getLocationByAddress();
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
    imageLoad: function(a) {
        var e = 750 / (a.detail.width / (e = a.detail.height)), t = this.data.imgheights;
        t.push(e), this.setData({
            imgheights: t
        });
    },
    bindchange: function(a) {
        this.setData({
            current: a.detail.current
        });
    },
    bigImgShow: function(a) {
        var t = this, i = a.currentTarget.dataset.src, s = {};
        s = t.comImagesSize[i] ? t.comImagesSize[i] : e.imageUtil(a);
        var n = 0;
        if (t.data.info.Images.length) {
            for (var o = 0; o < t.data.info.Images.length; o++) if (t.data.info.Images[o] == a.currentTarget.dataset.src) {
                n = o;
                break;
            }
            t.setData({
                bigImgHeight: s.imageHeight,
                slideshow: !0,
                slideCurrent: n
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
        }), a.WxParse.wxParse("DetailInfo", "html", t.Intro, e, 5), t.Name && a.setGlobalData("appTitle", t.Name), 
        e.toBuried();
    },
    navBtnShowAndHide: function() {
        var e = !this.data.plugNavFlag;
        this.setData({
            plugNavFlag: e,
            TitleName: a.globalData.TitleName
        });
    },
    toBuried: function() {
        var e = void 0;
        e = wx.getStorageSync("businessCardInfo").admin ? {
            tbUserID: a.globalData.WebUserID,
            tbType: "21",
            tbTypeID: "",
            tbTypeName: "",
            tbTypeImg: "",
            tbBusinessCardID: wx.getStorageSync("otherMemberCardId") ? wx.getStorageSync("otherMemberCardId") : 0
        } : {
            tbUserID: a.globalData.WebUserID,
            tbType: "21",
            tbTypeID: "",
            tbTypeName: "",
            tbTypeImg: "",
            tbBusinessCardID: wx.getStorageSync("businessCardId") ? wx.getStorageSync("businessCardId") : 0
        }, a.buried(e, function(a) {});
    }
});