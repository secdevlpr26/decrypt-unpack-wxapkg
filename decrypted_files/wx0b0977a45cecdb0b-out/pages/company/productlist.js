var t = getApp(), a = require("../../common.js");

Page({
    isloading: !1,
    onShareAppMessage: function() {
        return t.shareAppMessage("/pages/company/productlist");
    },
    onLoad: function(s) {
        t.getPageUrl(this, s), t.registerGlobalFunctions(this), this.setData({
            queryparams: s
        }), this.data.queryparams.classid && this.setData({
            classid: this.data.queryparams.classid
        }), this.loadClassList(), this.loadProduct(!0), a.setPopupFromShare();
    },
    data: {
        pagesize: 10,
        recordcount: 99,
        productlist: [],
        classid: 0,
        sortcol: "",
        sort: "",
        protop: 0,
        offsetDis: 0,
        hasproduct: !0,
        baseUrl: t.globalData.siteBaseUrl,
        animationData: {},
        searchLoadingComplete: !1,
        plugNavFlag: !0,
        scrollHeight: t.windowHeight * t.pixelRatio - 94 * t.pixelRatio
    },
    loadProduct: function(a) {
        var s = this;
        if (!s.isloading) {
            s.isloading = !0, a && (s.data.recordcount = 99, s.data.productlist = []);
            var o = s.data.recordcount, e = s.data.productlist.length;
            if (o > e) {
                var i = Math.ceil(e / s.data.pagesize) + 1, r = s.data.queryparams.keyword ? s.data.queryparams.keyword : "", d = "";
                s.data.sortcol && (d = "&sortcol=" + s.data.sortcol + "&sort=" + s.data.sort), t.sendRequest({
                    url: "/index.php?c=Front/WxApp/JsonApi&a=getProductList&addcolumns=ProDesc&classid=" + s.data.classid + "&keyword=" + r + "&page=" + i + "&pagesize=" + s.data.pagesize + d,
                    method: "GET",
                    success: function(t) {
                        if (s.isloading = !1, t.success) {
                            for (var a = 0; a < t.productlist.length; a++) /(\.00)$/.test(t.productlist[a].Price) && (t.productlist[a].Price = parseInt(t.productlist[a].Price)), 
                            s.data.productlist.push(t.productlist[a]);
                            s.setData({
                                productlist: s.data.productlist,
                                recordcount: t.recordcount,
                                hasproduct: s.data.productlist.length > 0
                            });
                        } else console.log("getProductList fail：" + t.msg);
                    },
                    fail: function(t) {
                        s.isloading = !1, console.log("getProductList fail");
                    }
                });
            } else s.setData({
                searchLoadingComplete: !0
            });
        }
    },
    goProductDetail: function(t) {
        var a = t.currentTarget.dataset.productid;
        wx.navigateTo({
            url: "productdetail?id=" + a
        });
    },
    goReserve: function(t) {
        var a = t.currentTarget.dataset.productid;
        wx.navigateTo({
            url: "reserve-by-product?productid=" + a
        });
    },
    onProductListScroll: function(t) {
        this.loadProduct();
    },
    loadClassList: function(a) {
        var s = this;
        t.sendRequest({
            url: "/index.php?c=Front/WxApp/JsonApi&a=getProductClassList",
            method: "GET",
            success: function(t) {
                t.success ? (t.list.unshift({
                    ClassID: 0,
                    Name: "全部分类"
                }), s.setData({
                    classlist: t.list
                })) : console.log("getProductClassList fail：" + t.msg);
            },
            fail: function(t) {
                console.log("getProductClassList fail");
            }
        });
    },
    onClassChange: function(t) {
        var a = this, s = t.currentTarget.dataset.index;
        if (this.data.classid == t.currentTarget.dataset.classid) return !1;
        a.setData({
            classid: t.currentTarget.dataset.classid,
            protop: 0
        }), a.isloading = !1, a.loadProduct(!0);
        var o;
        o = s >= 3 ? 170 * (s - 2) / 2 + 30 : 0, a.setData({
            offsetDis: o
        });
    },
    navBtnShowAndHide: function() {
        var t = !this.data.plugNavFlag;
        this.setData({
            plugNavFlag: t
        });
    }
});