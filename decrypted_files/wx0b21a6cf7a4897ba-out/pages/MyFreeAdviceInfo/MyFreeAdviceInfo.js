var i = getApp();

require("../../utils/util.js");

Page({
    data: {
        iconimg: {
            answer: "../../images/answer@2x.png",
            qustion: "../../images/qustion@2x.png"
        },
        imgW: 78,
        id: "",
        info: {}
    },
    onLoad: function(i) {
        this.setData({
            id: i.id
        }), this.getAskInfo();
        var t = this;
        wx.getSystemInfo({
            success: function(i) {
                var a = i.windowWidth;
                t.setData({
                    imgW: (a - 60) / 4
                });
            }
        });
    },
    onPullDownRefresh: function() {
        this.getAskInfo();
    },
    getAskInfo: function() {
        var t = this;
        wx.showNavigationBarLoading(), wx.showLoading({
            title: "加载中"
        }), i.apiRequestGet({
            urlMethod: "api/Question/getAskInfo/" + this.data.id,
            data: {},
            success: function(i) {
                var a = i.data;
                a && t.setData({
                    info: a
                }), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh(), wx.hideLoading();
            },
            fail: function(i) {
                wx.hideNavigationBarLoading(), wx.stopPullDownRefresh(), wx.hideLoading();
            }
        });
    },
    previewImg: function(i) {
        for (var t = [], a = 0; a < this.data.info.askimage.length; a++) {
            var n = this.data.info.askimage[a];
            t.push(n.askimage);
        }
        wx.previewImage({
            current: i.currentTarget.dataset.url,
            urls: t
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