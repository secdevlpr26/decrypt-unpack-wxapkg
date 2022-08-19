var t = getApp(), a = require("../../common.js");

Page({
    isloading: !1,
    onShareAppMessage: function() {
        return t.shareAppMessage("/pages/company/productlist");
    },
    onLoad: function(s) {
        var i = this;
        wx.setNavigationBarTitle({
            title: t.globalData.TitleName[1].TitleName
        }), t.getPageUrl(this, s), t.registerGlobalFunctions(this), wx.getSystemInfo({
            success: function(a) {
                i.setData({
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
    data: {
        falgAjax: !0,
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
        imgWidth: 150
    },
    loadProduct: function(a) {
        var s = this;
        if (!s.isloading) {
            s.isloading = !0, a && (s.data.recordcount = 99, s.data.productlist = []);
            var i = s.data.recordcount, o = s.data.productlist.length;
            if (i > o && this.data.falgAjax) {
                this.setData({
                    falgAjax: !1
                });
                var e = Math.ceil(o / s.data.pagesize) + 1, l = s.data.queryparams.keyword ? s.data.queryparams.keyword : "", d = "";
                s.data.sortcol && (d = "&sortcol=" + s.data.sortcol + "&sort=" + s.data.sort), t.sendRequest({
                    url: "/index.php?c=Front/WxApp/JsonApi&a=getProductList&addcolumns=ProDesc&classid=" + s.data.classid + "&keyword=" + l + "&page=" + e + "&pagesize=" + s.data.pagesize + d,
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
    goProductdetail: function(t) {
        var a = t.currentTarget.dataset.productid;
        wx.navigateTo({
            url: "productdetail?id=" + a
        });
    },
    onProductListScroll: function(t) {
        this.loadProduct();
    },
    navBtnShowAndHide: function() {
        var t = !this.data.plugNavFlag;
        this.setData({
            plugNavFlag: t
        });
    }
});