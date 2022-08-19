var t = getApp(), a = t.globalData.customizeTabId;

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
                customizetabId: a["About-Merchant"]
            },
            success: function(a) {
                var e = t.getJsonData(a.data);
                e.detailDescription = t.filterSpecialSymbol(e.detailDescription);
                for (var d = [ e.pic1, e.pic2, e.pic3, e.pic4, e.pic5 ], o = [], n = 0; n < d.length; n++) d[n] && o.push(d[n]);
                i.setData({
                    auInfo: e,
                    longitude: e.gdLongitude,
                    latitude: e.gdLatitude,
                    imageArr: o,
                    markers: [ {
                        id: 0,
                        latitude: e.gdLatitude,
                        longitude: e.gdLongitude,
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