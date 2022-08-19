var t = getApp(), a = 1, e = 1, o = !1, i = void 0, s = void 0, r = void 0, c = void 0, n = void 0, d = void 0, u = t.globalData.projectInfo;

Page({
    data: {
        productList: [],
        hasPro: !0,
        bottomHint: !0,
        listStyle: !1,
        isGroup: t.globalData.isGroup,
        actDistribution: {},
        hideComboBox: !0,
        showVal: "综合",
        hiddenTo: !0,
        styleConfig: t.globalData.styleConfig,
        back: !1,
        MinMoneyVal: "",
        MaxMoneyVal: "",
        sort: "comprehensive",
        ThePrice: "",
        merchantId: "",
        trademark: "",
        carryOut: !1,
        currentIdx: "0"
    },
    onLoad: function(a) {
        r = a, c = a.flag, d = a.name, this.getProductList(r), t.globalData.actDistribution && this.setData({
            actDistribution: t.globalData.actDistribution
        });
        var e = wx.getStorageSync("memberType" + t.globalData.autoId);
        this.setData({
            memberType: e
        }), a.title && wx.setNavigationBarTitle({
            title: a.title
        });
    },
    navtap: function(t) {
        var a = t.currentTarget.dataset.idx;
        "0" == a ? this.setData({
            hideComboBox: !this.data.hideComboBox,
            currentIdx: a
        }) : "1" == a ? (this.setData({
            productList: [],
            sort: "buyCount",
            ThePrice: "desc",
            currentIdx: a
        }), this.getProductList(r)) : this.setData({
            hiddenTo: !this.data.hiddenTo,
            currentIdx: a
        });
    },
    blanktap: function() {
        this.setData({
            hideComboBox: !0
        });
    },
    navItemtap: function(t) {
        console.log(t);
        var a = "";
        0 == t.currentTarget.dataset.idx ? (a = "综合", this.setData({
            sort: "comprehensive",
            ThePrice: "asc"
        })) : 1 == t.currentTarget.dataset.idx ? (a = "新品", this.setData({
            sort: "createDate",
            ThePrice: "desc"
        })) : 2 == t.currentTarget.dataset.idx ? (a = "价格降序", this.setData({
            sort: "price",
            ThePrice: "desc"
        })) : (a = "价格升序", this.setData({
            sort: "price",
            ThePrice: "asc"
        })), this.setData({
            productList: [],
            showVal: a,
            onHover: !0
        }), this.getProductList(r);
    },
    hiddenTo: function() {
        this.setData({
            hiddenTo: !0
        });
    },
    onselect: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.idx;
        this.setData({
            back: !0,
            active: a
        }), console.log(this.data.active, this.data.back), this.setData({
            merchantId: t.currentTarget.dataset.bid
        });
    },
    MinMoney: function(t) {
        this.setData({
            MinMoneyVal: t.detail.value
        });
    },
    MaxMoney: function(t) {
        this.setData({
            MaxMoneyVal: t.detail.value
        });
    },
    moneyWay: function() {
        this.data.MinMoneyVal > this.data.MaxMoneyVal && this.setData({
            MinMoneyVal: this.data.MaxMoneyVal,
            MaxMoneyVal: this.data.MinMoneyVal
        });
    },
    reset: function() {
        this.setData({
            productList: [],
            merchantId: "",
            MinMoneyVal: "",
            MaxMoneyVal: "",
            back: !1
        }), this.getProductList(r);
    },
    confirm: function() {
        this.moneyWay(), this.setData({
            productList: [],
            hiddenTo: !0
        }), this.getProductList(r);
    },
    encapsulation: function() {
        var t = this.data.productList;
        console.log(t);
        var a = [], e = {};
        t.forEach(function(t) {
            if (!e[t.branchName]) {
                var o = {
                    branchName: t.branchName,
                    branchInfoId: t.branchInfoId
                };
                a.push(o), e[t.branchName] = 1;
            }
        }), this.setData({
            trademark: a
        });
    },
    packaging: function(a) {
        var o = t.getJsonData(a.data);
        e = o.pages, o.pageList.forEach(function(a) {
            if (void 0 != a.productImageVOList && a.productImageVOList.length > 0) {
                var e = a.productImageVOList[0].imageURL;
                a.productImageVOList[0].imageURL = t.modifyPicSize(e, "_r220x220p");
            } else if (void 0 != a.productImageList && a.productImageList.length > 0) {
                var o = a.productImageList[0].imageURL;
                a.productImageList[0].imageURL = t.modifyPicSize(o, "_r220x220p");
            }
        }), this.setData({
            productList: this.data.productList.concat(o.pageList)
        }), this.setData({
            hasPro: !!this.data.productList.length
        }), this.encapsulation();
    },
    getProductList: function(r) {
        console.log(r), a = 1, e = 1;
        var l = this, h = {
            customizeTabId: t.globalData.customizeTabId.LynxProductList,
            sortName: l.data.sort,
            sortType: l.data.ThePrice,
            current: a,
            status: 2,
            isGroup: t.globalData.isGroup,
            branchInfoId: l.data.merchantId,
            minimumPrice: l.data.MinMoneyVal,
            maximumPrice: l.data.MaxMoneyVal
        };
        null != l.data.merchantId && "" != l.data.merchantId || delete h.branchInfoId, n = h, 
        r.bigCateCode ? (console.log(r), console.log(2), o = !0, i = r.bigCateCode, void 0 == n.bigCateGoryCode && (n.bigCateGoryCode = i), 
        d && (delete n.bigCateGoryCode, n.appId = u.appId, n.productName = d), wx.request({
            url: t.globalData.comUrl + "tabs_getZXProductListByCategory.action",
            data: n,
            success: function(t) {
                l.packaging(t);
            }
        })) : (s = r.categoryCode, c ? h.categoryCode = r.categoryCode : h.subdivideCategoryCode = r.categoryCode, 
        wx.request({
            url: t.globalData.comUrl + "tabs_getProductListByAttribute.action",
            data: h,
            success: function(t) {
                l.packaging(t);
            }
        }));
    },
    changeclum: function() {
        this.setData({
            listStyle: !this.data.listStyle,
            bottomHint: !0
        });
    },
    toSearch: function(t) {
        wx.navigateTo({
            url: "../../search/search?type=0&ids=0"
        });
    },
    toProDetail: function(t) {
        wx.navigateTo({
            url: "../pro-detail/pro-detail?productId=" + t.currentTarget.dataset.pid
        });
    },
    onReachBottom: function() {
        var i = this, r = n;
        if (console.log(r), r.current < e) if (r.current++, o) wx.request({
            url: t.globalData.comUrl + "tabs_getZXProductListByCategory.action",
            data: r,
            success: function(t) {
                i.setData({
                    carryOut: !0
                }), i.packaging(t);
            }
        }); else {
            var d = {
                customizeTabId: t.globalData.customizeTabId.LynxProductList,
                current: a,
                status: 2
            };
            c ? (console.log(c), console.log(d), d.categoryCode = s) : d.subdivideCategoryCode = s, 
            wx.request({
                url: t.globalData.comUrl + "tabs_getProductListByAttribute.action",
                data: d,
                success: function(t) {
                    i.setData({
                        carryOut: !0
                    }), i.packaging(t);
                }
            });
        } else i.setData({
            bottomHint: !1
        });
    },
    onPullDownRefresh: function() {
        a = 1, this.setData({
            productList: [],
            hasPro: !0,
            bottomHint: !0
        }), o = !1, this.getProductList(r);
    }
});