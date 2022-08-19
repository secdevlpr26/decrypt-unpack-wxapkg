var t = getApp(), a = require("../../utils/config.js");

Page({
    data: {
        isTake: !1,
        tempImagePath: "",
        imageBase: ""
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {},
    takePicture: function() {
        var t = this;
        wx.showLoading({
            title: "图片生成中...",
            mask: !0
        }), wx.createCameraContext().takePhoto({
            quality: "normal",
            success: function(a) {
                t.setData({
                    isTake: !0,
                    tempImagePath: a.tempImagePath
                }, function() {
                    wx.hideLoading();
                });
            },
            fail: function() {
                wx.hideLoading();
            }
        });
    },
    uploadImage: function() {
        var e = this;
        wx.showLoading({
            title: "上传中",
            mask: !0
        }), wx.uploadFile({
            url: a.fcRegister,
            filePath: e.data.tempImagePath,
            name: "file",
            formData: {
                sessionKey: t.globalData.sessionKey,
                schoolId: t.globalData.schoolId
            },
            timeout: 1e4,
            success: function(t) {
                wx.hideLoading();
                var a = JSON.parse(t.data);
                200 == a.type ? (wx.showToast({
                    title: a.content ? a.content : "注册成功",
                    mask: !0
                }), setTimeout(function() {
                    wx.navigateBack();
                }, 2e3)) : wx.showToast({
                    title: a.content ? a.content : "注册失败，系统异常",
                    icon: "none"
                });
            },
            fail: function(t) {
                console.log(t), wx.hideLoading(), wx.showToast({
                    title: "上传失败，网络异常！",
                    icon: "none"
                });
            }
        });
    },
    takeAgain: function() {
        this.setData({
            isTake: !1,
            tempImagePath: "",
            imageBase: ""
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});