var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../common/we-cropper/dist/weCropper.js")), o = wx.getSystemInfoSync(), e = o.windowWidth + 2, r = o.windowHeight + 100;

Page({
    data: {
        cropperOpt: {
            id: "cropper",
            targetId: "targetCropper",
            pixelRatio: o.pixelRatio,
            width: e,
            height: r,
            scale: 2.5,
            zoom: 8,
            cut: {
                x: (e - 300) / 2,
                y: (r - 300 - 48 - 50) / 2,
                width: 300,
                height: 300
            }
        }
    },
    onLoad: function(o) {
        var e = this.data.cropperOpt, r = o.src;
        r && (Object.assign(e, {
            src: r
        }), this.setData({
            optionsobj: o
        })), this.cropper = new t.default(e).on("ready", function(t) {}).on("beforeImageLoad", function(t) {
            wx.showToast({
                title: "上传中",
                icon: "loading",
                duration: 2e4
            });
        }).on("imageLoad", function(t) {
            wx.hideToast();
        });
    },
    touchStart: function(t) {
        this.cropper.touchStart(t);
    },
    touchMove: function(t) {
        this.cropper.touchMove(t);
    },
    touchEnd: function(t) {
        this.cropper.touchEnd(t);
    },
    getCropperImage: function(t) {
        this.cropper.getCropperImage(function(t) {
            t ? wx.setStorage({
                key: "mydata",
                data: {
                    avatar: t
                },
                success: function() {
                    wx.navigateBack({});
                }
            }) : console.log("获取图片失败，请稍后重试");
        });
    },
    uploadTap: function() {
        var t = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(o) {
                var e = o.tempFilePaths[0];
                t.cropper.pushOrign(e);
            }
        });
    }
});