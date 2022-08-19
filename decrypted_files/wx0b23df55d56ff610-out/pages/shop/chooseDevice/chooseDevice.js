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
        var a = this, i = t.id;
        this.setData({
            id: i
        });
        var s = this;
        e.getJSON("/Goods/goodsCategoryList", {
            id: i
        }, function(t) {
            var a = t.data.result, e = a[0];
            s.setData({
                categorys: a
            }), s.setData({
                selectedBrand: e,
                myMouldInfo: getApp().globalData.hwxDeviceInfo
            }), (e = s.data.selectedBrand).id = i, s.setData({
                selectedBrand: e
            }), s.loadMouldList(i);
        }), "true" == t.toPad && this.setData({
            segIndex: 1
        }), wx.getSystemInfo({
            success: function(t) {
                var e = t.windowWidth / 750, i = t.windowHeight;
                a.setData({
                    windowHeight: t.windowHeight,
                    rate: e,
                    scrollHeight: i + "px"
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
    loadMouldList: function(t) {
        var a = this, i = (this.data.faultInfo, this);
        e.getJSON("/Goods/sgetGoods", {
            id: t
        }, function(t) {
            wx.hideLoading();
            var e = t.data.result;
            if (i.setData({
                goods: e,
                count: t.data.count,
                isShow: !0,
                maskHidden: !0
            }), 0 == t.data.count) {
                var s = a.data.windowHeight;
                a.setData({
                    scrollHeight: s + "px"
                });
            } else {
                var o = a.data.windowHeight;
                a.setData({
                    scrollHeight: o + "px"
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
            var i = a.data.categorys[e];
            a.setData({
                selectedBrand: i,
                segIndex: 0,
                animate: !1
            }), a.loadMouldList(t.currentTarget.dataset.id);
        }
    },
    selectPhone: function(t) {
        this.data.faultInfo;
        var a = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../details/details?objectId=" + a
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