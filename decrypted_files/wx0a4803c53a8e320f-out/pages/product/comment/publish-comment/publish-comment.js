var t = getApp(), a = !0;

Page({
    data: {
        discussList: [],
        comment: "",
        imagePath: "",
        productOrderId: ""
    },
    onLoad: function(t) {
        this.setData({
            productOrderId: t.productOrderId
        }), wx.getLocation({
            type: "wgs84",
            success: function(t) {}
        });
    },
    takephoto: function() {
        var t = this;
        wx.chooseImage({
            count: 1,
            success: function(a) {
                var o = a.tempFilePaths[0];
                t.setData({
                    imagePath: o
                });
            }
        });
    },
    submit: function() {
        if (0 != a) {
            a = !1;
            var o = this, n = "";
            "" != o.data.comment ? o.data.imagePath ? wx.uploadFile({
                url: t.globalData.comUrl + "tabs_uploadPicMina.action",
                filePath: o.data.imagePath,
                name: "file",
                success: function(t) {
                    var a = JSON.parse(t.data);
                    console.log(a), "1" == a.isSuccess && (n = a.path, o.addAppComment(n));
                },
                fail: function(o) {
                    t.hint("图片上传失败"), a = !0;
                }
            }) : o.addAppComment(n) : this.warn("\b内容不能为空!");
        }
    },
    addAppComment: function(o) {
        var n = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_addAppProductComment.action",
            data: {
                address: "",
                comment: n.data.comment,
                latitude: t.globalData.g_location.lat,
                longitude: t.globalData.g_location.lng,
                memberId: t.getMemberId(),
                pic: o,
                productOrderId: n.data.productOrderId,
                token: "browser"
            },
            success: function(t) {
                a = !0, wx.showToast({
                    title: "发布成功",
                    icon: "success",
                    duration: 2e3
                }), setTimeout(function() {
                    wx.navigateBack({
                        delta: 1
                    });
                }, 2e3);
            },
            fail: function() {
                t.hint("提交失败"), a = !0;
            }
        });
    },
    deleteImage: function() {
        this.setData({
            imagePath: ""
        });
    },
    bindInput: function(t) {
        this.setData({
            comment: t.detail.value
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    warn: function(t) {
        wx.showToast({
            title: t,
            image: "../../../../img/warn.png",
            duration: 2e3
        });
    }
});