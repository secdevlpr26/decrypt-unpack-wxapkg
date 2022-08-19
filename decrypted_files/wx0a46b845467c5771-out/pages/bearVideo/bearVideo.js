require("../../utils/util.js"), require("../../config.js"), getApp();

Page({
    data: {
        source: "",
        videoContext: null,
        appFlag: !1,
        queit: !1,
        showInfoModel: !1,
        title: "",
        momentId: "",
        videoFlag: !0,
        windowHeight: 0,
        currentFlag: 0,
        id: ""
    },
    onLoad: function(o) {
        var e = this;
        console.log("***Video onLoad***", o, "bearvideo-啦啦啦", o.source), this.setData({
            source: o.source
        }), wx.getSystemInfo({
            success: function(o) {
                "ios" == o.platform && e.setData({
                    currentFlag: -1,
                    appFlag: !0
                }), e.setData({
                    windowHeight: o.windowWidth
                }), console.log("可视区宽度", o.windowWidth), console.log("可视区高度", o.windowHeight);
            }
        });
    },
    onShow: function(o) {
        console.log("***video.js-onShow***"), this.videoContext = wx.createVideoContext("myVideo"), 
        wx.hideShareMenu();
    },
    onUnload: function() {
        console.log("***video.js-onUnload***");
    },
    goback: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    play: function(o) {
        var e = this;
        setTimeout(function() {
            e.videoContext.requestFullScreen(90);
        }, 500);
    },
    queitFull: function(o) {
        o.detail.fullScreen ? (this.setData({
            queit: !1
        }), console.log("进入全屏", this.data.queit)) : (this.setData({
            queit: !0
        }), console.log("退出全屏", this.data.queit));
    },
    onReady: function() {},
    onHide: function() {}
});