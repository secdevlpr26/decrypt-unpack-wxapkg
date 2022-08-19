var a = getApp().globalData.httpUrl;

Page({
    data: {
        saddress: "",
        longitude: "",
        latitude: "",
        addressName: "",
        coordinate: "",
        word: "",
        addName: ""
    },
    onLoad: function(a) {
        var e = this;
        wx.getStorage({
            key: "saddress",
            success: function(a) {
                var t = a.data;
                e.setData({
                    saddress: t
                });
            }
        }), wx.getStorage({
            key: "re",
            success: function(a) {
                var t = a.data.lng, d = a.data.lat;
                e.setData({
                    longitude: t,
                    latitude: d
                }), "" != t && e.scope();
            }
        });
    },
    scope: function() {
        console.log("===jinlaimei");
        var e = this, t = e.data.longitude, d = e.data.latitude;
        wx.request({
            url: a + "skordermodel/getNearbyAddress",
            data: {
                lng: t,
                lat: d
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                e.setData({
                    addressName: a.data.addressName,
                    coordinate: a.data.coordinate
                });
            }
        });
    },
    sraddres: function(a) {
        var e = this;
        console.log("=====输入===="), this.setData({
            word: a.detail.value
        }), e.seAddres();
    },
    seAddres: function() {
        var e = this, t = e.data.saddress, d = e.data.word;
        wx.request({
            url: a + "skordermodel/getKeywordAddress",
            data: {
                city: t,
                keyword: d
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                e.setData({
                    addressName: a.data.addressName,
                    coordinate: a.data.coordinate
                });
            }
        });
    },
    xzAddress: function(a) {
        var e = this, t = a.currentTarget.dataset.add, d = a.currentTarget.dataset.x;
        e.setData({
            addName: t
        }), wx.setStorage({
            key: "addName",
            data: t
        }), wx.setStorage({
            key: "addJw",
            data: d
        }), setTimeout(function() {
            wx.navigateBack({});
        }, 500);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});