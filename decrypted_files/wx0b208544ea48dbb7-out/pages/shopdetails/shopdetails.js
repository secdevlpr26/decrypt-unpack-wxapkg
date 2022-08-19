var a = getApp(), t = a.globalData.config.base;

Page({
    data: {},
    onShareAppMessage: function() {
        return {
            title: a.globalData.config.title,
            path: "/pages/index/index?upperuid=" + (wx.getStorageSync("myuid") || wx.getStorageSync("parentuid") || param.upperuid)
        };
    },
    onLoad: function(a) {
        var t = a.id;
        this.setData({
            shopId: t
        });
    },
    onReady: function() {},
    onShow: function() {
        var a = this;
        o.render(a);
    },
    onHide: function() {},
    onUnload: function() {},
    onmake: function() {
        wx.makePhoneCall({
            phoneNumber: this.data.detail.mobile
        });
    },
    toLocation: function(a) {
        var t = this.data.detail.shop_coordinates.replace("，", ",").split(",");
        console.log(t), wx.openLocation({
            latitude: t[0] / 1,
            longitude: t[1] / 1,
            scale: 16
        });
    }
});

var o = {
    render: function(a) {
        var o = a.data.shopId;
        wx.request({
            url: t + "/Mobile/Api/shopInfo",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                shop_id: o
            },
            success: function(t) {
                console.log("============="), console.log(t);
                var o = t.data.data;
                a.setData({
                    detail: o
                });
            }
        });
    }
};