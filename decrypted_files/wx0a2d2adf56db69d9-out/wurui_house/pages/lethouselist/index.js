var t = getApp();

Page({
    data: {
        city: wx.getStorageSync("companyinfo").city,
        isCars: !0,
        isSort: !0,
        isPrice: !0,
        isType: !0,
        isSelect: !0,
        loadMore: "",
        list: [],
        house_list: [],
        housetypelist: [],
        houseareaid: 0,
        housepriceid: 0,
        housetype: 0,
        letway: 0,
        page: 1,
        title: ""
    },
    onLoad: function(e) {
        var a = this, i = [ {
            name: "住宅",
            id: 1
        }, {
            name: "别墅",
            id: 2
        }, {
            name: "公寓",
            id: 3
        }, {
            name: "商铺",
            id: 4
        }, {
            name: "写字楼",
            id: 5
        }, {
            name: "酒店",
            id: 6
        }, {
            name: "厂房",
            id: 7
        } ], s = [ {
            name: "整租",
            id: 1
        }, {
            name: "合租",
            id: 2
        } ];
        this.setData({
            housetypelist: i,
            carid: 0,
            priceid: 0,
            typeid: 0,
            selectid: 0,
            housewaylist: s
        }), wx.setNavigationBarTitle({
            title: "房屋出租"
        }), t.util.request({
            url: "entry/wxapp/getinitletinfo",
            success: function(t) {
                t.data.message.errno || a.setData({
                    city: wx.getStorageSync("companyinfo").city,
                    arealist: t.data.data.arealist,
                    housepricelist: t.data.data.housepricelist,
                    title: "",
                    price: "",
                    typetitle: "",
                    selecttitle: ""
                });
            },
            complete: function() {}
        }), t.util.request({
            url: "entry/wxapp/getlethouselist",
            data: {
                houseareaid: a.data.houseareaid,
                housepriceid: a.data.housepriceid,
                housetype: a.data.housetype,
                letway: a.data.letway
            },
            success: function(t) {
                t.data.message.errno || (console.log(t.data.data), a.setData({
                    houselist: t.data.data
                }));
            },
            complete: function() {
                wx.hideNavigationBarLoading(), wx.stopPullDownRefresh(), a.setData({
                    loadMore: ""
                });
            }
        });
    },
    toHouseDetail: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/wurui_house/pages/lethousedetail/index?id=" + e
        });
    },
    toSearch: function(t) {
        wx.navigateTo({
            url: "/wurui_house/pages/search/index"
        });
    },
    gethouselist: function(e) {
        var a = this;
        t.util.request({
            url: "entry/wxapp/getlethouselist",
            data: {
                page: a.data.page,
                houseareaid: a.data.houseareaid,
                housepriceid: a.data.housepriceid,
                housetype: a.data.housetype,
                letway: a.data.letway
            },
            success: function(t) {
                t.data.message.errno || (console.log(t.data.data), a.setData({
                    houselist: t.data.data
                }));
            },
            complete: function() {
                a.setData({
                    loadMore: ""
                });
            }
        });
    },
    selectcarsitem: function(t) {
        var e = t.currentTarget.id, a = t.currentTarget.dataset.title;
        this.setData({
            carid: e,
            isCars: !0,
            title: a
        }), this.data.houseareaid = e, this.gethouselist();
    },
    selectpriceitem: function(t) {
        console.log(t.currentTarget.id);
        var e = t.currentTarget.id, a = t.currentTarget.dataset.title;
        this.setData({
            priceid: e,
            isPrice: !0,
            price: a
        }), this.data.housepriceid = e, this.gethouselist();
    },
    selecttypeitem: function(t) {
        var e = t.currentTarget.id, a = t.currentTarget.dataset.title;
        console.log(t.currentTarget), this.setData({
            typeid: e,
            isType: !0,
            typetitle: a
        }), this.data.housetype = e, this.gethouselist();
    },
    selectwayitem: function(t) {
        console.log(t.currentTarget.id);
        var e = t.currentTarget.id, a = t.currentTarget.dataset.title;
        console.log(t.currentTarget), this.setData({
            selectid: e,
            isSelect: !0,
            selecttitle: a
        }), this.data.letway = e, this.gethouselist();
    },
    onReachBottom: function(t) {
        this.setData({
            loadMore: "正在加载中..."
        }), this.data.page = this.data.page + 1, this.gethouselist();
    },
    clickSearch: function(t) {
        wx.switchTab({
            url: "/pages/search/search"
        });
    },
    clickList: function() {
        wx.navigateTo({
            url: "../cars/cars"
        });
    },
    selectCars: function(t) {
        var e = this;
        e.setData({
            isSort: !0,
            isPrice: !0,
            isType: !0,
            isSelect: !0,
            isCars: !e.data.isCars
        });
    },
    selectPrice: function() {
        var t = this;
        console.log("aaa"), t.setData({
            isSort: !0,
            isCars: !0,
            isType: !0,
            isSelect: !0,
            isPrice: !t.data.isPrice
        });
    },
    selectType: function() {
        var t = this;
        t.setData({
            isSort: !0,
            isCars: !0,
            isPrice: !0,
            isSelect: !0,
            isType: !t.data.isType
        });
    },
    selectWay: function() {
        var t = this;
        t.setData({
            isSort: !0,
            isCars: !0,
            isPrice: !0,
            isType: !0,
            isSelect: !t.data.isSelect
        });
    },
    selectSort: function() {
        var t = this;
        t.setData({
            isCars: !0,
            isPrice: !0,
            isType: !0,
            isSort: !t.data.isSort
        });
    },
    selectBrand: function() {
        wx.navigateTo({
            url: "../brand/brand"
        });
    },
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading(), this.onLoad();
    },
    onShareAppMessage: function() {
        return {
            title: "房屋出租-" + wx.getStorageSync("companyinfo").name,
            path: "/wurui_house/pages/lethouselist/index"
        };
    }
});