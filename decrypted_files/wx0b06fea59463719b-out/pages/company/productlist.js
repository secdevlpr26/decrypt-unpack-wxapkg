var t = getApp(), a = require("../../common.js"), s = require("../../components/wxb.js");

Page({
    isloading: !1,
    onShareAppMessage: function() {
        return t.shareAppMessage("/pages/company/productlist");
    },
    onLoad: function(s) {
        var o = this;
        wx.setNavigationBarTitle({
            title: t.globalData.TitleName[1] ? t.globalData.TitleName[1].TitleName : "产品展示"
        }), t.getPageUrl(this, s), t.registerGlobalFunctions(this), wx.getSystemInfo({
            success: function(a) {
                o.setData({
                    imgWidth: (a.windowWidth - 39) / 2,
                    scrollHeight: t.windowHeight * a.pixelRatio
                });
            }
        }), this.setData({
            queryparams: s,
            productflag: s.productflag ? s.productflag : 0,
            classid: s.classid ? s.classid : 0
        }), this.loadProduct(!0), this.loadClassList(), a.setPopupFromShare();
    },
    onPullDownRefresh: function() {
        var t = this;
        t.data.pullDownRefreshFlag && (t.isloading = !1, t.setData({
            pullDownRefreshFlag: !1
        }), t.data.pullDownRefreshFlag = !1, t.data.queryparams.refresh = !0, setTimeout(function() {
            t.onLoad(t.data.queryparams), t.setData({
                pullDownRefreshFlag: !0
            }), wx.stopPullDownRefresh();
        }, 1500));
    },
    data: {
        falgAjax: !0,
        pullDownRefreshFlag: !0,
        classid: 0,
        pagesize: 10,
        recordcount: 99,
        productlist: [],
        productflag: 0,
        sortcol: "",
        sort: "",
        hasproduct: !1,
        baseUrl: t.globalData.siteBaseUrl,
        animationData: {},
        plugNavFlag: !0,
        scrollHeight: t.windowHeight * t.pixelRatio,
        imgWidth: 150,
        reminder: "授权提示",
        matter: "授权失败，请重新授权",
        abrogate: "暂时先不",
        permission: "允许"
    },
    loadProduct: function(a) {
        var s = this;
        if (!s.isloading) {
            s.isloading = !0, a && (s.data.recordcount = 99, s.data.productlist = []);
            var o = s.data.recordcount, e = s.data.productlist.length;
            if (o > e && this.data.falgAjax) {
                this.setData({
                    falgAjax: !1
                });
                var i = Math.ceil(e / s.data.pagesize) + 1, l = s.data.queryparams.keyword ? s.data.queryparams.keyword : "", r = "";
                s.data.sortcol && (r = "&sortcol=" + s.data.sortcol + "&sort=" + s.data.sort), t.sendRequest({
                    url: "/index.php?c=Front/WxApp/JsonApi&a=getProductList&addcolumns=ProDesc&classid=" + s.data.classid + "&keyword=" + l + "&page=" + i + "&pagesize=" + s.data.pagesize + r,
                    method: "GET",
                    success: function(t) {
                        if (s.isloading = !1, t.success) {
                            console.log(t.productlist);
                            for (var a = 0; a < t.productlist.length; a++) s.data.productlist.push(t.productlist[a]);
                            s.setData({
                                productlist: s.data.productlist,
                                recordcount: t.recordcount,
                                hasproduct: s.data.productlist.length > 0,
                                falgAjax: !0
                            });
                        } else console.log("getProductList fail：" + t.msg);
                    },
                    fail: function(t) {
                        s.isloading = !1, console.log("getProductList fail");
                    }
                });
            }
        }
    },
    loadClassList: function() {
        var a = this;
        t.sendRequest({
            url: "/index.php?c=Front/WxApp/JsonApi&a=getProductClassList",
            method: "GET",
            success: function(s) {
                s.success ? (s.list.length ? s.list.unshift({
                    ClassID: 0,
                    Name: "全部分类"
                }) : a.setData({
                    scrollHeight: t.windowHeight * s.pixelRatio
                }), s.list.forEach(function(t) {
                    if (t.ClassID == a.data.classid) return a.setData({
                        productTitleText: t.Name
                    }), !1;
                }), a.setData({
                    classlist: s.list
                })) : console.log("getProductClassList fail：" + s.msg);
            },
            fail: function(t) {
                console.log("getProductClassList fail");
            }
        });
    },
    onClassChange: function(t) {
        if (this.data.classid == t.currentTarget.dataset.classid) return !1;
        this.setData({
            classid: t.currentTarget.dataset.classid
        }), this.isloading = !1, this.loadProduct(!0);
    },
    goProductdetail: function(a) {
        var s = this, o = t.globalData.getMobileNode ? t.globalData.getMobileNode.checkGoodsDetails : 0;
        s.setData({
            productid: a.currentTarget.dataset.productid
        });
        var e = wx.getStorageSync("hasMobile") || 0;
        0 === t.globalData.hasMobile && 0 === e && 0 !== o ? s.setData({
            phonelicense: !0
        }) : s.toProductDetail();
    },
    toProductDetail: function() {
        var t = this;
        wx.navigateTo({
            url: "productdetail?id=" + t.data.productid
        });
    },
    getPhoneNumber: function(a) {
        var o = this;
        t.globalData.getMobileNode;
        if (a.detail.errMsg.indexOf("getPhoneNumber:fail") > -1) 2 === o.data.checkGoodsDetails ? o.setData({
            allowspopup: !0
        }) : o.toProductDetail(); else {
            var e = t.globalData.appId, i = t.globalData.session_key, l = new s(e, i).decryptData(a.detail.encryptedData, a.detail.iv);
            t.loadphoneInfo(l.phoneNumber), o.toProductDetail();
        }
    },
    turnOff: function() {
        t.turnOff();
    },
    abolish: function() {
        this.setData({
            allowspopup: !1
        });
    },
    onProductListScroll: function(t) {
        this.loadProduct();
    },
    onReachBottom: function() {
        this.loadProduct();
    },
    navBtnShowAndHide: function() {
        var t = !this.data.plugNavFlag;
        this.setData({
            plugNavFlag: t
        });
    }
});