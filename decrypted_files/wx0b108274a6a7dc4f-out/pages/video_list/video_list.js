getApp();

var t = require("../../request/api.js");

Page({
    data: {
        imgurl: t.API_IMG
    },
    getList: function() {
        var o = this;
        0 == this.data.status ? wx.request({
            url: t.getVideoId(),
            success: function(t) {
                console.log("这是主打课视频列表", t), o.setData({
                    list: t.data.re
                });
            }
        }) : 1 == this.data.status ? wx.request({
            url: t.getFunctional(),
            success: function(t) {
                console.log("这是身临其境视频列表", t), o.setData({
                    list: t.data.re
                });
            }
        }) : console.log("请求失败！");
    },
    toDetail: function(t) {
        console.log("这是主打课详情", t), wx.navigateTo({
            url: "/pages/video_detail/video_detail?id=" + t.currentTarget.dataset.id
        });
    },
    toDetail2: function(t) {
        console.log("这是身临其境详情"), wx.navigateTo({
            url: "../slqj_detail/slqj_detail?id=" + t.currentTarget.dataset.id
        });
    },
    onLoad: function(t) {
        console.log(t), this.setData({
            status: t.status
        }), this.getList();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        var t = this;
        console.log("用户下拉刷新"), wx.showLoading({
            title: "努力加载中...",
            success: function() {
                t.getList(), setTimeout(function() {
                    wx.hideLoading(), wx.stopPullDownRefresh();
                }, 1500);
            }
        });
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});