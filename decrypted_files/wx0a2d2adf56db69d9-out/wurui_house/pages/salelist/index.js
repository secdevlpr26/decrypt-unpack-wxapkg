var t = getApp();

Page({
    data: {
        city: wx.getStorageSync("companyinfo").city,
        isCars: !0,
        isSort: !0,
        isPrice: !0,
        isType: !0,
        loadMore: "",
        list: [],
        house_list: [],
        housetypelist: [],
        houseareaid: 0,
        housepriceid: 0,
        housetype: 0,
        page: 1
    },
    onLoad: function(e) {
        var a = this, i = [ {
            name: "出售",
            id: 1
        }, {
            name: "出租",
            id: 2
        }, {
            name: "求购",
            id: 3
        }, {
            name: "求租",
            id: 4
        } ];
        this.setData({
            housetypelist: i,
            typeid: 0,
            carid: 0,
            priceid: 0
        }), wx.setNavigationBarTitle({
            title: "房屋买卖-" + wx.getStorageSync("companyinfo").name
        }), t.util.request({
            url: "entry/wxapp/getinitinfo",
            success: function(t) {
                t.data.message.errno || a.setData({
                    city: wx.getStorageSync("companyinfo").city,
                    arealist: t.data.data.arealist,
                    housepricelist: t.data.data.housepricelist,
                    title: "",
                    price: "",
                    typetitle: ""
                });
            }
        }), t.util.request({
            url: "entry/wxapp/getsalelist",
            data: {
                page: a.data.page,
                houseareaid: a.data.houseareaid,
                housepriceid: a.data.housepriceid,
                housetype: a.data.housetype
            },
            success: function(t) {
                t.data.message.errno || a.setData({
                    salelist: t.data.data.salelist,
                    topsalelist: t.data.data.topsalelist
                });
            },
            complete: function() {
                wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
            }
        });
    },
    gethouselist: function(e) {
        var a = this;
        t.util.request({
            url: "entry/wxapp/getsalelist",
            data: {
                page: a.data.page,
                houseareaid: a.data.houseareaid,
                housepriceid: a.data.housepriceid,
                housetype: a.data.housetype
            },
            success: function(t) {
                t.data.message.errno || a.setData({
                    salelist: t.data.data.salelist,
                    topsalelist: t.data.data.topsalelist
                });
            },
            complete: function() {
                a.setData({
                    loadMore: ""
                });
            }
        });
    },
    doCall: function(t) {
        console.log(t.currentTarget);
        var e = t.currentTarget.dataset.tel;
        wx.makePhoneCall({
            phoneNumber: e,
            success: function() {
                console.log("拨打电话成功！");
            },
            fail: function() {
                console.log("拨打电话失败！");
            }
        });
    },
    toHouseDetail: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/wurui_house/pages/saledetail/index?id=" + e
        });
    },
    toSearch: function(t) {
        wx.navigateTo({
            url: "/wurui_house/pages/search/index"
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
        var e = t.currentTarget.id, a = t.currentTarget.dataset.title;
        this.setData({
            priceid: e,
            isPrice: !0,
            price: a
        }), this.data.housepriceid = e, this.gethouselist();
    },
    selecttypeitem: function(t) {
        var e = t.currentTarget.id, a = t.currentTarget.dataset.title;
        this.setData({
            typeid: e,
            isType: !0,
            typetitle: a
        }), this.data.housetype = e, this.gethouselist();
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
            isCars: !e.data.isCars
        });
    },
    selectPrice: function() {
        var t = this;
        t.setData({
            isSort: !0,
            isCars: !0,
            isType: !0,
            isPrice: !t.data.isPrice
        });
    },
    selectType: function() {
        var t = this;
        t.setData({
            isSort: !0,
            isCars: !0,
            isPrice: !0,
            isType: !t.data.isType
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
            title: "新楼盘-" + wx.getStorageSync("companyinfo").name,
            path: "/wurui_house/pages/newhouselist/index"
        };
    }
});