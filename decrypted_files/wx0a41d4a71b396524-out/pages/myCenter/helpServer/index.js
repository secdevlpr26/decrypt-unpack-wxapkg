var t = getApp(), e = require("../../../utils/config.js");

Page({
    data: {
        selectedFlag: [ !1, !1, !1, !1 ]
    },
    changeToggle: function(t) {
        var e = t.currentTarget.dataset.index;
        this.data.selectedFlag[e] ? this.data.selectedFlag[e] = !1 : this.data.selectedFlag[e] = !0, 
        this.setData({
            selectedFlag: this.data.selectedFlag
        });
    },
    onLoad: function() {
        console.log("iiii");
        var e = this;
        e.setData({
            telPhone: t.globalData.telPhone
        }), e.getBrLimit();
    },
    getBrLimit: function() {
        var t = this;
        wx.request({
            url: e.getBrLimit,
            data: {},
            success: function(e) {
                if (200 == e.data.type) {
                    var a = e.data.date;
                    t.setData({
                        normalLimit: a.normalLimit,
                        superLimit: a.superLimit,
                        normalDays: a.normalDays,
                        superDays: a.superDays,
                        money: a.money
                    });
                }
            },
            fail: function(t) {}
        });
    },
    toTel: function(t) {
        wx.makePhoneCall({
            phoneNumber: t.currentTarget.dataset.phone
        });
    }
});