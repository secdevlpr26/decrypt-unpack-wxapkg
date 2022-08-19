var t = getApp(), a = "", r = "", e = t.globalData.projectInfo, o = t.globalData.customizeTabId, c = 1, i = 1;

Page({
    data: {
        totalPrice: 0,
        cartData: [],
        cartList: [],
        cartNull: !1,
        projectType: t.globalData.projectInfo.projectType,
        isPerson: t.globalData.isPerson,
        proList: [],
        hiddenMerchant: !0,
        bottomHint: !1,
        actDistribution: {},
        productList: []
    },
    onLoad: function(a) {
        e = t.globalData.projectInfo, o = t.globalData.customizeTabId, r = a.from, "o2o-shop" == this.data.projectType ? this._productList1Init() : "tmall" == this.data.projectType && this._productList2Init();
    },
    onShow: function() {
        var a = this;
        if (a.data.totalPrice = 0, this.setData({
            cartData: wx.getStorageSync("cartData" + t.globalData.autoId) || []
        }), (wx.getStorageSync("cartData" + t.globalData.autoId) || []).length > 0) {
            var r = wx.getStorageSync("cartData" + t.globalData.autoId);
            a.splitArr(r);
        } else wx.removeStorageSync("cartData" + t.globalData.autoId), wx.removeStorageSync("cartDataList" + t.globalData.autoId), 
        a.setData({
            cartNull: !0
        });
    },
    splitArr: function(a) {
        for (var r = 0, e = function(t) {
            for (var a, e = [], o = {}, c = 0; null != (a = t[c]); c++) o[a.branchInfoId] || (e.push(a.branchInfoId), 
            o[a.branchInfoId] = !0), 1 == t[c].isSelected && (r += parseInt(t[c].count) * parseFloat(t[c].price));
            return e;
        }(a), o = [], c = 0; c < e.length; c++) for (var i = [], s = {}, d = 0; d < a.length; d++) a[d].branchInfoId == e[c] && (i.push(a[d]), 
        s.branchInfoId = a[d].branchInfoId, s.branchName = a[d].branchName, s.pro = i, 1 == a[d].isSelected && (s.isSelected = !0), 
        o[c] = s);
        wx.setStorageSync("cartDataList" + t.globalData.autoId, o), this.setData({
            totalPrice: r.toFixed(2),
            cartList: o,
            cartNull: !1
        });
    },
    arrowuptap: function(a) {
        var r = this;
        if (r.data.cartList[a.currentTarget.dataset.index].pro[a.currentTarget.dataset.proindex].count > 1) {
            r.data.cartList[a.currentTarget.dataset.index].pro[a.currentTarget.dataset.proindex].count = r.data.cartList[a.currentTarget.dataset.index].pro[a.currentTarget.dataset.proindex].count - 1;
            for (var e = 0; e < r.data.cartData.length; e++) r.data.cartData[e].moduleId == a.currentTarget.dataset.modleid && (r.data.cartData[e].count = r.data.cartData[e].count - 1);
            this.setData({
                cartList: r.data.cartList,
                cartData: r.data.cartData
            }), wx.setStorageSync("cartData" + t.globalData.autoId, r.data.cartData), r.splitArr(this.data.cartData);
        }
    },
    arrowdowntap: function(a) {
        var r = this;
        r.data.cartList[a.currentTarget.dataset.index].pro[a.currentTarget.dataset.proindex].count = r.data.cartList[a.currentTarget.dataset.index].pro[a.currentTarget.dataset.proindex].count + 1;
        for (var e = 0; e < r.data.cartData.length; e++) r.data.cartData[e].moduleId == a.currentTarget.dataset.modleid && (r.data.cartData[e].count = r.data.cartData[e].count + 1);
        this.setData({
            cartList: r.data.cartList,
            cartData: r.data.cartData
        }), wx.setStorageSync("cartData" + t.globalData.autoId, r.data.cartData), r.splitArr(r.data.cartData);
    },
    bindCountInput: function(a) {
        var r = this;
        parseInt(a.detail.value);
        if (parseInt(a.detail.value) >= 1) {
            r.data.cartList[a.currentTarget.dataset.index].pro[a.currentTarget.dataset.proindex].count = parseInt(a.detail.value);
            for (var e = 0; e < r.data.cartData.length; e++) r.data.cartData[e].moduleId == a.currentTarget.dataset.modleid && (r.data.cartData[e].count = parseInt(a.detail.value));
            return this.setData({
                cartList: r.data.cartList,
                cartData: r.data.cartData
            }), wx.setStorageSync("cartData" + t.globalData.autoId, r.data.cartData), r.splitArr(this.data.cartData), 
            parseInt(a.detail.value);
        }
        return 1;
    },
    delPro: function(a) {
        var r = this;
        wx.showModal({
            title: "确定删除该商品？",
            success: function(e) {
                if (e.confirm) {
                    for (var o = [], c = 0; c < r.data.cartData.length; c++) r.data.cartData[c].moduleId != a.currentTarget.dataset.modelid && o.push(r.data.cartData[c]);
                    r.setData({
                        cartData: o
                    }), wx.setStorageSync("cartData" + t.globalData.autoId, r.data.cartData), r.splitArr(r.data.cartData);
                } else e.cancel;
                r.data.cartData.length < 1 && r.setData({
                    cartNull: !0
                });
            }
        });
    },
    toClearing: function() {
        if ("" == (a = wx.getStorageSync("memberId" + t.globalData.autoId) || "")) wx.navigateTo({
            url: "../../login/login"
        }); else {
            for (var r = 0, e = 0; e < this.data.cartData.length; e++) this.data.cartData[e].isSelected && r++;
            if (0 == r) return void t.hint("请选择产品");
            var o = this;
            t.globalData.isPerson ? wx.redirectTo({
                url: "../../order/order?proPrice=" + o.data.totalPrice
            }) : wx.navigateTo({
                url: "../../order/order?proPrice=" + o.data.totalPrice
            });
        }
    },
    checkboxTap: function(a) {
        var r = this;
        console.log(a.currentTarget.dataset.proid);
        for (var e = 0; e < r.data.cartData.length; e++) a.currentTarget.dataset.proid == r.data.cartData[e].productId && (1 == r.data.cartData[e].isSelected ? r.data.cartData[e].isSelected = !1 : r.data.cartData[e].isSelected = !0);
        wx.setStorageSync("cartData" + t.globalData.autoId, r.data.cartData), r.splitArr(r.data.cartData);
    },
    toProList: function() {
        "enterprise" == this.data.projectType || this.data.isPerson ? wx.navigateTo({
            url: "../../product/product"
        }) : wx.switchTab({
            url: "../../product/product"
        });
    },
    toProDetail: function(t) {
        wx.navigateTo({
            url: "../../product/pro-detail/pro-detail?productId=" + t.currentTarget.dataset.pid
        });
    },
    preventBubbling: function() {},
    getProCategory1: function() {
        var a = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getAppProductByCity.action",
            data: {
                appId: e.appId,
                customizeTabId: o.LynxProductList,
                count: 4,
                current: c,
                jsoncallback: "",
                productName: "",
                sortName: "readTimes",
                sortType: "desc",
                isGroup: t.globalData.isGroup
            },
            success: function(t) {
                var r = t.data.substring(1).slice(0, -1), e = JSON.parse(r);
                i = e.pages, a.setData({
                    proList: a.data.proList.concat(e.pageList)
                });
            }
        });
    },
    onReachBottom: function() {
        c < i && (c++, "o2o-shop" == this.data.projectType ? this.getProCategory1() : "tmall" == this.data.projectType && this.getProductList());
    },
    _productList1Init: function() {
        var a = this;
        e = t.globalData.projectInfo, o = t.globalData.customizeTabId;
        var r = wx.getStorageSync("memberType" + t.globalData.autoId);
        this.setData({
            memberType: r
        }), t.globalData.actDistribution && this.setData({
            actDistribution: t.globalData.actDistribution
        }), a.getProCategory1();
    },
    _productList2Init: function() {
        var a = this;
        e = t.globalData.projectInfo, o = t.globalData.customizeTabId;
        var r = wx.getStorageSync("memberType" + t.globalData.autoId);
        this.setData({
            memberType: r
        }), t.globalData.actDistribution && this.setData({
            actDistribution: t.globalData.actDistribution
        }), a.getProCategory2();
    },
    getProCategory2: function() {
        var a = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getPhotoInfoTabCategory.action",
            data: {
                customizeTabId: o.LynxProductList
            },
            success: function(r) {
                var e = t.getJsonData(r.data);
                console.log(e), a.setData({
                    cateList: e
                }), a.titletap();
            }
        });
    },
    getProductList: function() {
        var a = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getZXProductListByCategory.action",
            data: {
                customizeTabId: o.LynxProductList,
                bigCateGoryCode: a.data.categoryCode,
                current: c,
                status: 2,
                recommand: 1,
                isBreif: 1,
                isGroup: t.globalData.isGroup
            },
            success: function(r) {
                var e = t.getJsonData(r.data);
                i = e.pages, a.setData({
                    productList: a.data.productList.concat(e.pageList)
                }), e.pageList.length > 0 ? a.setData({
                    hasPro: !0
                }) : a.setData({
                    hasPro: !1
                });
            }
        });
    },
    titletap: function(t) {
        c = 1;
        var a = this;
        this.setData({
            productList: []
        }), t && void 0 != t ? (a.setData({
            categoryCode: t.currentTarget.dataset.code,
            bottomHint: !0,
            hidden: !0,
            index: t.currentTarget.dataset.index
        }), a.getProductList(t.currentTarget.dataset.code)) : (a.setData({
            categoryCode: a.data.cateList[0].code,
            bottomHint: !0,
            hidden: !0
        }), a.getProductList());
    }
});