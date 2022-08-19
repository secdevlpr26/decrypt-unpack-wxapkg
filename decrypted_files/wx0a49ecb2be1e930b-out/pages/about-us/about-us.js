var t = getApp(), a = require("../../utils/wxParse/wxParse.js"), e = t.globalData.customizeTabId;

Page({
    data: {
        styleConfig: t.globalData.styleConfig,
        longitude: "",
        latitude: "",
        markers: [ {
            id: 0,
            latitude: "",
            longitude: "",
            width: 20,
            height: 20
        } ],
        auInfo: {},
        imageArr: []
    },
    onLoad: function() {
        var i = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getAboutMerchant.action",
            data: {
                customizetabId: e["About-Merchant"]
            },
            success: function(e) {
                var d = t.getJsonData(e.data);
                a.wxParse("detailDescription", "html", d.detailDescription, i, 10);
                for (var o = [ d.pic1, d.pic2, d.pic3, d.pic4, d.pic5 ], u = [], n = 0; n < o.length; n++) o[n] && u.push(o[n]);
                i.setData({
                    auInfo: d,
                    longitude: d.gdLongitude,
                    latitude: d.gdLatitude,
                    imageArr: u,
                    markers: [ {
                        id: 0,
                        latitude: d.gdLatitude,
                        longitude: d.gdLongitude,
                        width: 20,
                        height: 30
                    } ]
                });
            },
            fail: function() {
                t.hint();
            }
        });
    },
    toPosition: function() {
        var t = this;
        wx.openLocation({
            latitude: Number(t.data.latitude),
            longitude: Number(t.data.longitude),
            name: t.data.auInfo.name,
            address: t.data.auInfo.address,
            scale: 28
        });
    }
});