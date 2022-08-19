var t = getApp(), a = !0;

Page({
    data: {
        styleConfig: t.globalData.styleConfig,
        imagePath: "",
        navIndex: 2,
        title: "",
        phone: "",
        describe: ""
    },
    onLoad: function() {},
    navtap: function(t) {
        this.setData({
            navIndex: t.currentTarget.dataset.index
        });
    },
    takephoto: function() {
        var a = this;
        wx.chooseImage({
            count: 1,
            success: function(t) {
                var e = t.tempFilePaths[0];
                a.setData({
                    imagePath: e
                });
            },
            fail: function(a) {
                t.hint("上传失败");
            }
        });
    },
    formSubmit: function(e) {
        if (a) {
            a = !1;
            var i = this, o = t.getMemberId(), n = /^1[3|4|5|8|7][0-9]\d{4,8}$/;
            if (!e.detail.value.title) return a = !0, void this.warn("标题不能为空!");
            if (!e.detail.value.phone) return a = !0, void this.warn("请输入电话号码!");
            if (!n.test(e.detail.value.phone)) return a = !0, void this.warn("请输入正确的电话号码");
            if (!e.detail.value.describe) return a = !0, void this.warn("请输入描述内容!");
            var l = wx.getStorageSync("merchantId" + t.globalData.comUrl);
            i.data.imagePath ? wx.uploadFile({
                url: t.globalData.comUrl + "mctab_addPhotoInfoTabWeb.action",
                filePath: i.data.imagePath,
                name: "file",
                formData: {
                    appId: t.globalData.projectInfo.appId,
                    title: e.detail.value.title,
                    phone: e.detail.value.phone,
                    detailDescription: e.detail.value.describe,
                    memberId: o,
                    merchantId: l,
                    customizeTabId: t.globalData.customizeTabId.LynxPhoto_Info_Post_Tab,
                    type: i.data.navIndex,
                    mina: "true"
                },
                success: function(t) {
                    i.setData({
                        imagePath: "",
                        title: "",
                        phone: "",
                        describe: ""
                    }), wx.showToast({
                        title: "提交成功",
                        icon: "success",
                        duration: 2e3
                    });
                },
                fail: function(a) {
                    t.hint("提交失败");
                },
                complete: function() {
                    a = !0;
                }
            }) : wx.request({
                url: t.globalData.comUrl + "mctab_addPhotoInfoTabWeb.action",
                data: {
                    appId: t.globalData.projectInfo.appId,
                    title: e.detail.value.title,
                    phone: e.detail.value.phone,
                    detailDescription: e.detail.value.describe,
                    memberId: o,
                    merchantId: l,
                    customizeTabId: t.globalData.customizeTabId.LynxPhoto_Info_Post_Tab,
                    type: i.data.navIndex,
                    mina: "true"
                },
                success: function(t) {
                    i.setData({
                        imagePath: "",
                        title: "",
                        phone: "",
                        describe: ""
                    }), wx.showToast({
                        title: "提交成功",
                        icon: "success",
                        duration: 2e3
                    });
                },
                fail: function(a) {
                    console.log(a), t.hint();
                },
                complete: function() {
                    a = !0;
                }
            });
        }
    },
    formReset: function() {
        this.setData({
            imagePath: ""
        });
    },
    warn: function(t) {
        wx.showToast({
            title: t,
            image: "../../../img/warn.png",
            duration: 2e3
        });
    }
});