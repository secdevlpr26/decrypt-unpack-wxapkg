var t = getApp(), a = "", e = "", i = 1, o = 1, s = "";

Page({
    data: {
        titles: [],
        cateList: [],
        productList: [],
        index: 0,
        categoryCode: "",
        news_type: 3,
        titleLeft: 0,
        titleKey: 1,
        hidden: !0,
        bottomHint: !0,
        leftHidden: !0,
        rightHidden: !0,
        scrolltop: 0
    },
    onLoad: function(i) {
        a = t.globalData.projectInfo, e = t.globalData.customizeTabId;
        var o = this;
        o.getProCategory(), "LynxPhoto_H_Info_Tab_Level2" == (s = i.sysTabName) ? (o.getAdList(), 
        o.setData({
            news_type: 3
        })) : o.setData({
            news_type: 4
        });
    },
    getProCategory: function() {
        var a = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getPhotoInfoTabCategory.action",
            data: {
                customizeTabId: e.LynxProductList
            },
            success: function(e) {
                var i = t.getJsonData(e.data);
                console.log(i), a.setData({
                    cateList: i
                }), a.titletap();
            }
        });
    },
    getProductList: function() {
        var a = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getZXProductListByCategory.action",
            data: {
                customizeTabId: e.LynxProductList,
                bigCateGoryCode: a.data.categoryCode,
                current: i,
                status: 2,
                recommand: 1,
                isBreif: 1,
                isGroup: t.globalData.isGroup
            },
            success: function(e) {
                var i = t.getJsonData(e.data);
                o = i.pages, a.setData({
                    productList: a.data.productList.concat(i.pageList)
                }), i.pageList.length > 0 ? a.setData({
                    hasPro: !0
                }) : a.setData({
                    hasPro: !1
                });
            }
        });
    },
    titletap: function(t) {
        i = 1;
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
    },
    onReachBottom: function() {
        i < o ? (i++, this.getProductList()) : i > 1 && (this.data.pageList.length > 1 ? this.setData({
            bottomHint: !1
        }) : this.setData({
            bottomHint: !0
        }));
    },
    onPullDownRefresh: function() {
        i = 1, this.setData({
            productList: []
        }), wx.showToast({
            title: "加载中...",
            icon: "loading",
            duration: 1e4,
            mask: !0
        }), this.getProductList();
    },
    turnLeft: function() {
        console.log(this.data.titleKey), this.data.titleKey > 1 && (this.setData({
            titleLeft: this.data.titleLeft + 200,
            titleKey: this.data.titleKey - 1
        }), 1 == this.data.titleKey && this.setData({
            leftHidden: !0,
            rightHidden: !1
        }));
    },
    turnRight: function() {
        console.log(this.data.titleKey), this.data.titleKey < this.data.titles.length - 2 && (this.setData({
            titleLeft: this.data.titleLeft - 200,
            titleKey: this.data.titleKey + 1
        }), this.data.titleKey == this.data.titles.length - 2 && this.setData({
            rightHidden: !0,
            leftHidden: !1
        }));
    },
    toProductDetail: function(t) {
        wx.navigateTo({
            url: "../product/pro-detail/pro-detail?productId=" + t.currentTarget.dataset.pid
        });
    }
});