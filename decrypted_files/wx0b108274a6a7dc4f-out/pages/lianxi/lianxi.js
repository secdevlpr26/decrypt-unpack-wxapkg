var e = require("../../request/api.js");

getApp();

Page({
    data: {
        isSele: !0,
        imgUrl: e.API_IMG
    },
    onLoad: function(t) {
        var o = this;
        wx.request({
            url: e.getAddress(),
            success: function(e) {
                console.log(e), o.setData({
                    userInfo: e.data.re,
                    latitude: e.data.re.jingweidu.split(",")[0],
                    longitude: e.data.re.jingweidu.split(",")[1]
                });
            }
        });
    },
    phone: function() {
        this.setData({
            isSele: !0
        }), wx.makePhoneCall({
            phoneNumber: this.data.userInfo.phone
        });
    },
    daohang: function() {
        console.log(parseFloat(this.data.latitude), this.data.longitude), this.setData({
            isSele: !1
        }), wx.openLocation({
            latitude: parseFloat(this.data.userInfo.jingweidu.split(",")[0]),
            longitude: parseFloat(this.data.userInfo.jingweidu.split(",")[1]),
            name: this.data.userInfo.school_name,
            address: this.data.userInfo.address
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        console.log("下拉刷新");
    },
    onReachBottom: function() {
        console.log("上滑加载");
    },
    onShareAppMessage: function() {}
});