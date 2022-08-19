function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a, e = getApp(), i = e.globalData.projectInfo, o = e.globalData.customizeTabId, n = 1, s = 0, r = "", c = !0;

Page({
    data: (a = {
        bottomHint: !0,
        hidden: !0,
        search_type: "0",
        noSearch: !0,
        pageList: [],
        hideComboBox: !0
    }, t(a, "hideComboBox", !0), t(a, "showVal", "综合"), t(a, "hiddenTo", !0), t(a, "styleConfig", e.globalData.styleConfig), 
    t(a, "back", !1), t(a, "MinMoneyVal", ""), t(a, "MaxMoneyVal", ""), t(a, "sort", "comprehensive"), 
    t(a, "ThePrice", "asc"), t(a, "merchantId", ""), t(a, "trademark", ""), t(a, "carryOut", !1), 
    t(a, "currentIdx", "0"), t(a, "isPerson", e.globalData.isPerson), a),
    onLoad: function(t) {
        console.log(t), t.keyword && (r = t.keyword, this.setData({
            inputVal: t.keyword
        })), i = e.globalData.projectInfo, o = e.globalData.customizeTabId, t.type && this.setData({
            search_type: t.type
        }), "1" == t.type ? this.getStoreInfo() : this.getProductInfo();
    },
    proNavTap: function(t) {
        var a = t.currentTarget.dataset.idx;
        "0" == a ? this.setData({
            pageList: [],
            hideComboBox: !this.data.hideComboBox,
            currentIdx: a
        }) : "1" == a ? (n = 1, this.setData({
            sort: "buyCount",
            ThePrice: "desc",
            pageList: [],
            currentIdx: a
        }), this.getProductInfo()) : this.setData({
            hiddenTo: !this.data.hiddenTo,
            currentIdx: a
        });
    },
    itemSelect: function(t) {
        n = 1;
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
            showVal: a,
            pageList: [],
            hideComboBox: !0
        }), this.getProductInfo();
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
        }), this.setData({
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
        n = 1, this.setData({
            pageList: [],
            merchantId: "",
            MinMoneyVal: "",
            MaxMoneyVal: "",
            back: !1
        }), this.getProductInfo();
    },
    confirm: function() {
        n = 1, this.moneyWay(), this.setData({
            pageList: [],
            hiddenTo: !0
        }), this.getProductInfo();
    },
    encapsulation: function() {
        var t = this.data.pageList;
        console.log(t);
        var a = [], e = {};
        t.forEach(function(t) {
            if (!e[t.branchName]) {
                var i = {
                    branchName: t.branchName,
                    branchInfoId: t.branchInfoId
                };
                a.push(i), e[t.branchName] = 1;
            }
        }), this.setData({
            trademark: a
        });
    },
    getNewsInfo: function() {
        var t = this;
        c && (c = !1, wx.request({
            url: e.globalData.comUrl + "tabs_getPhotoInfoTabFromL2ToL1.action",
            data: {
                appId: i.appId,
                customizeTabId: o.LynxPhoto_H_Info_Tab_Level2,
                current: n,
                searchKey: r
            },
            success: function(a) {
                var i = e.getJsonData(a.data);
                s = i.pages, t.setData({
                    pageList: t.data.pageList.concat(i.pageList)
                });
                var o = !!t.data.pageList.length;
                t.setData({
                    noSearch: o
                }), c = !0;
            },
            fail: function() {
                e.hint(), c = !0;
            }
        }));
    },
    getStoreInfo: function() {
        var t = this;
        c && (c = !1, wx.request({
            url: e.globalData.comUrl + "mctab_searchBranchInfo.action",
            data: {
                appId: i.appId,
                customizeTabId: o.LynxAbout_Merchant,
                advertisement: 1,
                current: n,
                level: 0,
                provinceId: "",
                cityId: "",
                categoryId: "",
                branchName: r
            },
            success: function(a) {
                var i = e.getJsonData(a.data);
                s = i.pages, t.setData({
                    pageList: t.data.pageList.concat(i.pageList)
                });
                var o = !!t.data.pageList.length;
                t.setData({
                    noSearch: o
                }), c = !0;
            },
            fail: function() {
                e.hint(), c = !0;
            }
        }));
    },
    getProductInfo: function() {
        var t = this, a = {
            appId: i.appId,
            customizeTabId: o.LynxProductList,
            current: n,
            status: 2,
            productName: r,
            sortName: t.data.sort,
            sortType: t.data.ThePrice,
            isGroup: 1,
            branchInfoId: t.data.merchantId,
            minimumPrice: t.data.MinMoneyVal,
            maximumPrice: t.data.MaxMoneyVal
        };
        c && (c = !1, wx.request({
            url: e.globalData.comUrl + "tabs_getZXProductListByCategory.action",
            data: a,
            success: function(a) {
                var i = e.getJsonData(a.data);
                s = i.pages, i.pageList.forEach(function(t) {
                    if (void 0 != t.productImageVOList && t.productImageVOList.length > 0) {
                        var a = t.productImageVOList[0].imageURL;
                        t.productImageVOList[0].imageURL = a ? e.modifyPicSize(a, "_r220x220p") : "/img/img-default.png";
                    }
                }), t.setData({
                    pageList: t.data.pageList.concat(i.pageList)
                });
                var o = !!t.data.pageList.length;
                t.setData({
                    noSearch: o
                }), t.encapsulation(), c = !0;
            },
            fail: function() {
                e.hint(), c = !0;
            }
        }));
    },
    toProDetail: function(t) {
        wx.navigateTo({
            url: "../product/pro-detail/pro-detail?productId=" + t.currentTarget.dataset.pid
        });
    },
    toStoreDetail: function(t) {
        wx.navigateTo({
            url: "../store/store-detail/store-detail?tabContentId=" + t.currentTarget.dataset.id
        });
    },
    toNewsDetail: function(t) {
        wx.navigateTo({
            url: "../news/news-detail/news-detail?tabContentId=" + t.currentTarget.dataset.id + "&type=3"
        });
    },
    navtap: function() {
        this.setData({
            hidden: !this.data.hidden
        });
    },
    navItemtap: function(t) {
        "0" == t.currentTarget.dataset.idx ? this.setData({
            search_type: "0"
        }) : "1" == t.currentTarget.dataset.idx ? this.setData({
            search_type: "1"
        }) : this.setData({
            search_type: "2"
        }), this.search(), this.setData({
            hidden: !1
        });
    },
    search: function() {
        this.setData({
            pageList: [],
            bottomHint: !0,
            hidden: !0,
            noSearch: !0
        }), n = 1, "0" == this.data.search_type ? this.getProductInfo() : "1" == this.data.search_type ? this.getStoreInfo() : this.getNewsInfo();
    },
    searchInput: function(t) {
        r = t.detail.value;
    },
    blanktap: function() {
        this.setData({
            hidden: !0
        });
    },
    scrolltolower: function() {
        n < s ? (n++, 0 == this.data.search_type ? this.getProductInfo() : 1 == this.data.search_type ? this.getStoreInfo() : this.getNewsInfo()) : n > 1 && (this.data.pageList.length > 1 ? this.setData({
            bottomHint: !1
        }) : this.setData({
            bottomHint: !0
        }));
    }
});