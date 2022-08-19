var t = getApp();

Page({
    data: {
        windowHeight: 0,
        leftDis: 0,
        bg_src: [],
        userInfo: {},
        userID: "",
        btnFlag: !0
    },
    onLoad: function(t) {
        this.setData({
            userID: t.userID
        }), this.getWindowInfo(), this.getQrcode();
    },
    getWindowInfo: function() {
        this.setData({
            windowHeight: wx.getSystemInfoSync().windowHeight,
            leftDis: (wx.getSystemInfoSync().windowWidth - 320) / 2
        });
    },
    getQrcode: function() {
        var e = this, o = {
            url: "/index.php?c=Front/WxApp/BaseApi&a=getWxAppQrCode",
            data: {
                userID: e.data.userID
            },
            success: function(o) {
                o.success && (e.setData({
                    bg_src: t.globalData.siteBaseUrl + o.info.bg_img_url + "?v=" + Math.random()
                }), wx.downloadFile({
                    url: e.data.bg_src,
                    success: function(t) {
                        e.setData({
                            shareImage: t.tempFilePath
                        });
                    },
                    fail: function() {
                        console.log("fail");
                    }
                }));
            }
        };
        t.sendRequest(o);
    },
    downloadWxAppQrCode: function() {
        var t = this;
        wx.downloadFile({
            url: t.data.bg_src,
            success: function(e) {
                console.log(e), t.setData({
                    shareImage: e.tempFilePath
                }), wx.saveImageToPhotosAlbum({
                    filePath: e.tempFilePath,
                    success: function(t) {
                        console.log(t);
                    },
                    fail: function(t) {
                        console.log(t), console.log("fail");
                    }
                });
            },
            fail: function() {
                console.log("fail");
            }
        });
    },
    clickImage: function(t) {
        console.log(t);
        var e = t.target.dataset.src;
        console.log(e), wx.previewImage({
            current: e,
            urls: [ e ],
            fail: function() {
                console.log("fail");
            },
            complete: function() {
                console.info("点击图片了");
            }
        });
    },
    saveImageToPhotosAlbum: function() {
        wx.showLoading({
            title: "保存中...",
            mask: !0
        });
        var t = this;
        t.data.btnFlag && (t.setData({
            btnFlag: !1
        }), wx.saveImageToPhotosAlbum({
            filePath: t.data.shareImage,
            success: function(e) {
                wx.hideLoading(), wx.showToast({
                    title: "已保存到相册",
                    icon: "success"
                }), t.setData({
                    btnFlag: !0
                });
            },
            fail: function(e) {
                wx.hideLoading(), e.errMsg.indexOf("auth deny") > -1 && wx.openSetting({
                    success: function(t) {}
                }), t.setData({
                    btnFlag: !0
                });
            }
        }));
    }
});