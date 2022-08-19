var t = require("../../../comm/script/fetch"), a = (require("../../../comm/script/config"), 
require("../../../util/util"), require("../../../util/md5"), require("../../../component/message/message.js")), e = require("../../../utils/server");

getApp(), Page({
    data: {
        isShow: !1,
        myMouldInfo: {},
        type: 1,
        brandList: [],
        phoneList: [],
        padList: [],
        curBid: "24",
        curBrandItemIndex: "0",
        curPid: "15",
        curTabBarIndex: "0",
        brandData: {},
        mouldData: {},
        animate: !1
    },
    onLoad: function(t) {
        var a = this;
        wx.getSystemInfo({
            success: function(t) {
                var e = t.windowWidth / 750, i = t.windowHeight - 90 * e, d = "ios" == t.platform ? i + "px" : "100%";
                a.setData({
                    scrollHeight: d
                });
            }
        }), t.pid ? (this.setData({
            curPid: t.pid
        }), "16" == t.pid && this.setData({
            curTabBarIndex: "1"
        })) : this.setData({
            curPid: "15"
        });
        var i = getApp().globalData.wxDeviceInfo.model;
        a.setData({
            model: i
        }), console.log(i);
        var d = this;
        e.getJSON("/Goods/goodsCategoryList", {}, function(t) {
            var a = t.data.result;
            d.setData({
                categorys: a
            }), d.setData({
                selectedBrand: a[0]
            }), d.loadMouldList();
        });
    },
    loadMouldList: function() {
        var t = this, a = this;
        e.getJSON("/Goods/getGoods1", {
            cid: t.data.selectedBrand.id,
            tab: this.data.curTabBarIndex
        }, function(t) {
            wx.hideLoading();
            var e = t.data.result;
            a.setData({
                goods: e
            });
        });
    },
    getBrandListByPid: function(a) {
        var e = this, i = this.data.brandData;
        t.getRecycleBrand(a, function(t) {
            e.setData({
                brandList: t,
                curBid: t[0].Id
            }), i["key" + a] = t, e.setData({
                brandData: i
            });
        }, function(t) {});
    },
    getMouldListByBidPid: function(e, i) {
        wx.showLoading({
            title: "获取数据中",
            mask: !0
        });
        var d = this, s = this.data.mouldData;
        t.getRecycleMould(e, i, function(t) {
            t.map(function(t, a, e) {
                e[a].avg_price = Number(t.avg_price);
            }), d.setData({
                mouldList: t
            }), s["key" + e + i] = t, d.setData({
                mouldData: s,
                isShow: !0
            }), wx.hideLoading();
        }, function(t) {
            wx.hideLoading(), a.show.call(d, {
                icon: "tip",
                content: "获取数据失败"
            });
        });
    },
    brandTap: function(t) {
        var a = t.currentTarget.dataset, e = this;
        this.setData({
            curBrandItemIndex: a.index,
            curBid: a.id
        }), this.resetScrollTop();
        var i = a.index;
        e.setData({
            selectedBrand: this.data.categorys[i]
        }), e.loadMouldList();
    },
    tabBarTap: function(t) {
        var a = t.currentTarget.dataset;
        return this.setData({
            selectedBrand: this.data.categorys[0]
        }), this.setData({
            curTabBarIndex: a.index,
            curBrandItemIndex: 0,
            curPid: a.pid
        }), void this.loadMouldList();
    },
    setMouldList: function() {
        var t = this.data.curBid, a = this.data.curPid, e = "key" + t + a;
        this.data.mouldData[e] ? this.setData({
            mouldList: this.data.mouldData[e]
        }) : this.getMouldListByBidPid(t, a);
    },
    resetScrollTop: function() {
        this.setData({
            scrollTop: 0
        });
    },
    itemTap: function(t) {
        var a = t.currentTarget.dataset.bid;
        wx.redirectTo({
            url: "../selectInfo/selectInfo?goods_id=" + a
        });
    },
    stopTouchMove: function() {},
    stopTap: function() {}
});