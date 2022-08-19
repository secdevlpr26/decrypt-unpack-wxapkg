var t = require("../../../utils/server");

Page({
    data: {},
    formSubmit: function(a) {
        var e = this.data.storename, i = this.data.name, s = this.data.mobile, n = this.data.mail, o = this.data.city, r = getApp().globalData.userInfo.user_id, u = this;
        t.postJSON("/User/addApply/user_id/" + r, {
            user_id: r,
            name: i,
            mobile: s,
            mail: n,
            city: o,
            storename: e
        }, function(t) {
            1 == t.data.status && (wx.showToast({
                title: "保存成功",
                icon: "success",
                duration: 3e3
            }), 1 == u.data.returnTo ? setTimeout(function() {
                wx.navigateTo({
                    url: "../../member/index/index"
                });
            }, 1e3) : wx.navigateBack());
        });
    },
    storeName: function(t) {
        var a = t.detail.value;
        this.setData({
            storename: a
        });
    },
    sName: function(t) {
        var a = t.detail.value;
        this.setData({
            name: a
        });
    },
    storeMobile: function(t) {
        var a = t.detail.value;
        this.setData({
            mobile: a
        });
    },
    storeMail: function(t) {
        var a = t.detail.value;
        this.setData({
            mail: a
        });
    },
    storeCity: function(t) {
        var a = t.detail.value;
        this.setData({
            city: a
        });
    },
    onLoad: function(t) {}
});