var t, e = require("../../../comm/script/qqmap-wx-jssdk.js"), s = require("../../../util/util"), a = require("../../../component/message/message.js");

Page({
    data: {
        message: {},
        addressList: [],
        keyword: ""
    },
    onLoad: function(s) {
        t = new e({
            key: "ZMGBZ-XORRU-7L7VC-4PU2Q-3E652-R3F44"
        });
    },
    searchAddress: function(e) {
        var i = this;
        wx.showLoading({
            title: "搜索中",
            mask: !0
        }), i.setData({
            addressList: ""
        }), t.getSuggestion({
            keyword: i.data.keyword,
            page_size: 20,
            success: function(t) {
                s.isEmpty(t.data) ? a.show.call(i, {
                    content: "搜索不到地址",
                    icon: "tip"
                }) : i.setData({
                    addressList: t.data
                });
            },
            fail: function(t) {},
            complete: function(t) {
                s.isEmpty(i.data.addressList) || wx.hideLoading();
            }
        });
    },
    setKeyword: function(t) {
        this.setData({
            keyword: t.detail.value
        });
    },
    selectAddress: function(t) {
        var e = t.currentTarget.dataset.idx, s = this.data.addressList[e], a = new Object();
        a.address_name = s.title, a.address_desc = s.address, a.address = s.title + "" + s.address, 
        a.districtID = s.adcode, a.lng = s.location.lng, a.lat = s.location.lat, a.province = s.province, 
        a.city = s.city, a.district = s.district;
        var i = getCurrentPages(), d = i[i.length - 2];
        "function" == typeof d.onChange && d.onChange(a), wx.navigateBack({
            delta: 1
        });
    },
    stopTouchMove: function() {},
    stopTap: function() {}
});