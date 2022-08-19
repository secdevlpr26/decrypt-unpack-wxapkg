var e = getApp();

Page({
    data: {
        QRCodeImage: "",
        hideBox: !0
    },
    onLoad: function(t) {
        var o = this;
        e.loginVzSystem().then(function() {
            o.getQRCode();
        });
    },
    getQRCode: function() {
        var t = this;
        wx.request({
            url: e.globalData.paymentUrl + "/WechatAlipay/getWXAcode",
            data: {
                memberId: e.getMemberId(),
                page: "pages/index/index",
                projectId: e.globalData.projectInfo.appId,
                width: "200px",
                scene: e.getMemberId()
            },
            success: function(e) {
                console.log(e.data), t.setData({
                    QRCodeImage: e.data.content.miniQRCode
                });
            },
            fail: function() {
                e.hint();
            }
        });
    },
    showBox: function() {
        this.setData({
            hideBox: !this.data.hideBox
        });
    },
    previewImage: function(e) {
        var t = this;
        this.setData({
            hideBox: !this.data.hideBox
        }), wx.previewImage({
            urls: [ t.data.QRCodeImage ]
        });
    },
    saveImgToPhotosAlbumTap: function() {
        this.setData({
            hideBox: !this.data.hideBox
        });
        var t = this;
        wx.downloadFile({
            url: t.data.QRCodeImage,
            success: function(t) {
                console.log(t), wx.saveImageToPhotosAlbum({
                    filePath: t.tempFilePath,
                    success: function(t) {
                        e.hint("下载成功");
                    },
                    fail: function(e) {
                        console.log(e), console.log("fail");
                    }
                });
            },
            fail: function() {
                console.log("fail");
            }
        });
    },
    onShareAppMessage: function(t) {
        return "button" === t.from && console.log(t.target), {
            title: "推广二维码",
            path: "pages/distribute/distribute-qrcode/distribute-qrcode?parentId=" + e.getMemberId()
        };
    }
});