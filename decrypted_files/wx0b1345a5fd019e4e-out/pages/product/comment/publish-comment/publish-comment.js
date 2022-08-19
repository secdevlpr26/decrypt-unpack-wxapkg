var t = getApp(), a = !0, e = t.globalData.md5;

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
                var e = a.tempFilePaths[0];
                t.setData({
                    imagePath: e
                });
            }
        });
    },
    submit: function() {
        if (0 != a) {
            a = !1;
            var e = this, o = "";
            "" != e.data.comment ? e.data.imagePath ? wx.uploadFile({
                url: t.globalData.comUrl + "tabs_uploadPicMina.action",
                filePath: e.data.imagePath,
                name: "file",
                success: function(t) {
                    var a = JSON.parse(t.data);
                    console.log(a), "1" == a.isSuccess && (o = a.path, e.addAppComment(o));
                },
                fail: function(e) {
                    t.hint("图片上传失败"), a = !0;
                }
            }) : e.addAppComment(o) : this.warn("\b内容不能为空!");
        }
    },
    addAppComment: function(e) {
        var o = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_addAppProductComment.action",
            data: {
                address: "",
                comment: o.data.comment,
                latitude: t.globalData.g_location.lat,
                longitude: t.globalData.g_location.lng,
                memberId: t.getMemberId(),
                pic: e,
                productOrderId: o.data.productOrderId,
                token: "browser"
            },
            success: function(e) {
                a = !0, wx.showToast({
                    title: "发布成功",
                    icon: "success",
                    duration: 2e3
                }), t.globalData.pointsSet && t.globalData.pointsSet.pointsSwitch && o.getPoint(), 
                setTimeout(function() {
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
    getPoint: function(a) {
        var o = new Date().valueOf(), n = "action=Comment&appId=" + t.globalData.projectInfo.appId + "&memberId=" + t.getMemberId() + "&time=" + o + "&key=DOTI#!81a335op77CYlo541f6eb5555m", i = e.hexMD5(n);
        wx.request({
            url: t.globalData.comUrl + "wallet_addMemberMPointRecord.action",
            data: {
                action: "Comment",
                appId: t.globalData.projectInfo.appId,
                memberId: t.getMemberId(),
                time: o,
                sign: i.toLocaleUpperCase()
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