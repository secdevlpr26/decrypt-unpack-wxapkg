var i = getApp();

require("../../utils/util.js");

Page({
    data: {
        iconimg: {
            answer: "../../images/answer@2x.png",
            qustion: "../../images/qustion@2x.png"
        },
        id: "",
        info: {}
    },
    onLoad: function(i) {
        this.setData({
            id: i.id
        }), this.getPayInfo();
        var a = this;
        wx.getSystemInfo({
            success: function(i) {
                var t = i.windowWidth;
                a.setData({
                    imgW: (t - 60) / 4
                });
            }
        });
    },
    onPullDownRefresh: function() {
        this.getPayInfo();
    },
    getPayInfo: function() {
        var a = this;
        wx.showNavigationBarLoading(), wx.showLoading({
            title: "加载中"
        }), i.apiRequestGet({
            urlMethod: "api/Question/getAppreciateInfo/" + this.data.id,
            data: {},
            success: function(i) {
                var t = i.data;
                t && a.setData({
                    info: t
                }), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh(), wx.hideLoading();
            },
            fail: function(i) {
                wx.hideNavigationBarLoading(), wx.stopPullDownRefresh(), wx.hideLoading();
            }
        });
    },
    previewImg: function(i) {
        for (var a = [], t = 0; t < this.data.info.askimage.length; t++) {
            var n = this.data.info.askimage[t];
            a.push(n.askimage);
        }
        wx.previewImage({
            current: i.currentTarget.dataset.url,
            urls: a
        });
    },
    shangAction: function() {
        wx.navigateTo({
            url: "../Admire/Admire"
        });
    },
    popToConsult: function() {
        wx.switchTab({
            url: "../Consult/Consult"
        });
    }
});