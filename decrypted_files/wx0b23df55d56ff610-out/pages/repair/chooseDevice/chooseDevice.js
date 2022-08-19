var t = require("../../../comm/script/fetch"), a = (require("../../../comm/script/config"), 
require("../../../util/util"), require("../../../component/message/message.js")), e = (getApp(), 
require("../../../utils/server"));

Page({
    data: {
        isShow: !1,
        scrollTop: 0,
        windowHeight: 0,
        rate: 0,
        onlyPhone: !1,
        scrollHeight: 0,
        myMouldInfo: {},
        type: 1,
        brandList: [],
        phoneList: [],
        padList: [],
        selectedBrand: {},
        segIndex: 0,
        faultInfo: [],
        animate: !1
    },
    imgLoad: function() {
        this.setData({
            animate: !0
        });
    },
    onLoad: function(t) {
        var a = this, o = getApp().globalData.wxDeviceInfo.model;
        a.setData({
            model: o
        }), console.log(o);
        var i = t.faultInfo;
        this.setData({
            faultInfo: i
        });
        var s = this;
        this.setData({
            type: t.id
        }), e.getJSON("/Goods/goodsCategoryList", {
            faultInfo: i,
            type: t.id
        }, function(t) {
            var a = t.data.result;
            s.setData({
                categorys: a
            }), s.setData({
                selectedBrand: a[0],
                myMouldInfo: getApp().globalData.hwxDeviceInfo
            }), s.loadMouldList();
        }), "true" == t.toPad && this.setData({
            segIndex: 1
        }), wx.getSystemInfo({
            success: function(t) {
                var e = t.windowWidth / 750, o = t.windowHeight - 210 * e;
                a.setData({
                    windowHeight: t.windowHeight,
                    rate: e,
                    scrollHeight: o + "px",
                    scrollHeight1: o + 50 + "px"
                });
            }
        });
    },
    loadBrandList: function() {
        var e = this;
        wx.showLoading({
            title: "加载中",
            mask: !0
        }), e.setData({
            maskHidden: !1
        }), t.getBrands.call(e, e.data.faultInfo.faultid, function(t) {
            e.setData({
                brandList: t
            }), e.data.brandList.length;
        }, function(t) {
            wx.hideLoading(), a.show.call(e, {
                icon: "tip",
                content: t
            });
        });
    },
    loadMouldList: function() {
        var t = this, a = this.data.faultInfo, o = this;
        e.getJSON("/Goods/getGoods", {
            cid: t.data.selectedBrand.id,
            faultInfo: a
        }, function(a) {
            wx.hideLoading();
            var e = a.data.result;
            if (o.setData({
                goods: e,
                count: a.data.count,
                isShow: !0,
                maskHidden: !0
            }), 0 == a.data.count) {
                var i = t.data.windowHeight - 88 * t.data.rate;
                t.setData({
                    scrollHeight: i + "px"
                });
            } else {
                var s = t.data.windowHeight - 210 * t.data.rate;
                t.setData({
                    scrollHeight: s + "px"
                });
            }
        });
    },
    showPhoneList: function(t) {
        this.setData({
            segIndex: 0
        });
    },
    showPadList: function(t) {
        this.setData({
            segIndex: 1
        });
    },
    selectBrand: function(t) {
        var a = this, e = t.currentTarget.dataset.idx;
        if (t.currentTarget.dataset.id != a.data.selectedBrand.Id) {
            var o = a.data.categorys[e];
            a.setData({
                selectedBrand: o,
                segIndex: 0,
                animate: !1
            }), a.loadMouldList();
        }
    },
    selectPhone: function(t) {
        var a = this.data.faultInfo, e = t.currentTarget.dataset.id;
        wx.redirectTo({
            url: "../faultDetail/faultDetail?faultInfo=" + a + "&phone=" + e + "&type=" + this.data.type
        });
    },
    selectMyDevice: function(t) {
        var a = this.data.faultInfo, e = getApp().globalData.wxDeviceInfo.model;
        wx.redirectTo({
            url: "../faultDetail/faultDetail?faultInfo=" + a + "&model=" + e
        });
    },
    stopTouchMove: function() {},
    stopTap: function() {}
});