var a = getApp(), o = require("../../../wxParse/wxParse.js");

Page({
    data: {
        delBtnWidth: 120,
        imgurl: a.globalData.imgurl,
        kefu: "客  服：",
        dizhi: "地  址：",
        people: "联系人："
    },
    address: function() {
        var a = this;
        wx.openLocation({
            latitude: Number(a.data.shop.lat),
            longitude: Number(a.data.shop.lng),
            scale: 18,
            name: a.data.shop.address
        });
    },
    onLoad: function(e) {
        var t = this;
        wx.request({
            url: a.globalData.url + a.globalData.parameter + "&do=sysset",
            header: {
                Cookie: a.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                t.setData({
                    shop: a.data.result.sysset
                });
                var e = a.data.result.sysset.districty;
                o.wxParse("article", "html", e, t, 5);
            }
        });
    },
    calling: function() {
        var a = this;
        wx.makePhoneCall({
            phoneNumber: a.data.shop.phone,
            success: function() {
                console.log("拨打电话成功！");
            },
            fail: function() {
                console.log("拨打电话失败！");
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});