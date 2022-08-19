var e, t = getApp();

Page({
    data: {
        rst: ""
    },
    onLoad: function(t) {
        e = this;
        var a = wx.getStorageSync("jy_user_id");
        e.setData({
            jy_user_id: a
        });
    },
    chooseImageTap: function() {
        var e = this;
        wx.showActionSheet({
            itemList: [ "从相册中选择", "拍照" ],
            itemColor: "#666666",
            success: function(t) {
                t.cancel || (0 == t.tapIndex ? e.chooseWxImage("album") : 1 == t.tapIndex && e.chooseWxImage("camera"));
            }
        });
    },
    chooseWxImage: function(e) {
        var t = this;
        wx.chooseImage({
            sizeType: [ "original", "compressed" ],
            sourceType: [ e ],
            success: function(e) {
                t.setData({
                    logo: e.tempFilePaths[0]
                });
            }
        });
    },
    onReady: function() {
        wx.request({
            url: t.data.lost + "/index/yuluList",
            method: "POST",
            dataType: "html",
            data: {
                jy_user_id: e.data.jy_user_id
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                var a = JSON.parse(t.data);
                e.setData({
                    rst: a
                });
            }
        });
    },
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading(), wx.request({
            url: t.data.lost + "/index/yuluList",
            method: "POST",
            dataType: "html",
            data: {
                jy_user_id: e.data.jy_user_id
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                var a = JSON.parse(t.data);
                e.setData({
                    rst: a
                }), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
            }
        });
    },
    send: function(a) {
        e.data.logo ? wx.uploadFile({
            url: t.data.lost + "/index/sendYulu",
            filePath: e.data.logo,
            name: "file",
            formData: {
                jy_user_id: e.data.jy_user_id
            },
            success: function(t) {
                "预录成功" == t.data ? (wx.showToast({
                    title: "预录成功",
                    icon: "success",
                    duration: 2e3
                }), setTimeout(function() {
                    e.setData({
                        logo: ""
                    }), e.onReady();
                }, 2e3)) : wx.showToast({
                    title: t.data,
                    icon: "none",
                    duration: 2e3
                });
            }
        }) : wx.showToast({
            title: "请上传装箱单",
            icon: "none",
            duration: 2e3
        });
    }
});