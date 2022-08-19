var a = require("../../resource/js/htmlToWxml.js"), t = (require("../../resource/js/images.js"), 
getApp());

Page({
    data: {
        height: 0,
        imgwidth: 750,
        imgheight: 600,
        current: 0,
        images: {},
        autoplay: !0,
        interval: 3e3,
        duration: 1e3,
        title: "",
        address: "",
        lat: 0,
        lng: 0,
        id: 0,
        tel: "",
        showmsg: !0
    },
    doCall: function(a) {
        console.log(a.currentTarget);
        var t = a.currentTarget.dataset.tel;
        wx.makePhoneCall({
            phoneNumber: t,
            success: function() {
                console.log("拨打电话成功！");
            },
            fail: function() {
                console.log("拨打电话失败！");
            }
        });
    },
    onLoad: function(e) {
        wx.setNavigationBarTitle({
            title: wx.getStorageSync("companyinfo").name
        });
        var i = this;
        t.util.request({
            url: "entry/wxapp/getdetail",
            success: function(t) {
                if (!t.data.message.errno) {
                    var e = a.html2json(t.data.data.list.content);
                    i.data.address = t.data.data.list.address, i.data.lat = t.data.data.list.lat, i.data.lng = t.data.data.list.lng, 
                    i.data.tel = t.data.data.list.tel, i.data.piclist = t.data.data.piclist, i.setData({
                        data: t.data.data.list,
                        piclist: t.data.data.piclist,
                        content: e
                    });
                }
            },
            complete: function() {
                wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
            }
        });
    },
    goMap: function(a) {
        var t = this;
        wx.openLocation({
            latitude: t.data.lat,
            longitude: t.data.lng,
            scale: 18,
            name: t.data.title,
            address: t.data.address
        });
    },
    previewImage1: function(a) {
        var t = a.currentTarget.id;
        wx.previewImage({
            current: t,
            urls: this.data.piclist
        });
    },
    onShareAppMessage: function() {}
});