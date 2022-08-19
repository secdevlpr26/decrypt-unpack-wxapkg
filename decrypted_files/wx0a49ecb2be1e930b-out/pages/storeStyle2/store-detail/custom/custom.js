var a = getApp(), t = "", e = "", o = "", i = !0;

Page({
    data: {
        styleConfig: a.globalData.styleConfig,
        imagePath: "",
        storeName: "",
        name: "",
        phone: "",
        detail: ""
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
            },
            fail: function(t) {
                a.hint("上传失败");
            }
        });
    },
    onLoad: function() {},
    formSubmit: function(l) {
        if (i) {
            i = !1;
            var n = this, s = /^1[3|4|5|8|7][0-9]\d{4,8}$/;
            if ("" == l.detail.value.storeName) return i = !0, void this.warn("店铺不能为空!");
            if ("" == l.detail.value.name) return i = !0, void this.warn("姓名不能为空!");
            if ("" == l.detail.value.phone) return i = !0, void this.warn("请输入电话号码!");
            if (!s.test(l.detail.value.phone)) return i = !0, void this.warn("请输入正确的电话号码");
            wx.showToast({
                title: "正在提交...",
                icon: "loading",
                duration: 1e4,
                mask: !0
            });
            var u = new Date();
            t = "店铺,姓名,电话,描述,附图说明", e = l.detail.value.storeName + "," + l.detail.value.name + "," + l.detail.value.phone + "," + l.detail.value.detail;
            var r = {
                storeName: l.detail.value.storeName,
                name: l.detail.value.name,
                phone: l.detail.value.phone,
                detail: l.detail.value.detail,
                imagePath: this.data.imagePath,
                date: u.toLocaleDateString()
            }, c = wx.getStorageSync("customArr" + a.globalData.autoId) || [];
            c.push(r), wx.setStorageSync("customArr" + a.globalData.autoId, c), n.data.imagePath ? wx.uploadFile({
                url: a.globalData.comUrl + "tabs_uploadPicMina.action",
                filePath: n.data.imagePath,
                name: "file",
                success: function(a) {
                    var t = JSON.parse(a.data);
                    console.log(t), "1" == t.isSuccess && (o = t.path);
                },
                fail: function(t) {
                    a.hint("图片上传失败");
                },
                complete: function() {
                    o ? e = e + "," + o : e += ",null", wx.request({
                        url: a.globalData.comUrl + "tabs_saveFlexiForm",
                        data: {
                            projectId: a.globalData.projectInfo.appId,
                            customizeTabId: a.globalData.customizeTabId["Flexi-Form"],
                            token: "html5",
                            fieldKey: t,
                            fieldValue: e
                        },
                        success: function(a) {
                            n.setData({
                                imagePath: "",
                                storeName: "",
                                name: "",
                                phone: "",
                                detail: ""
                            }), wx.showToast({
                                title: "提交成功",
                                icon: "success",
                                duration: 2e3
                            });
                        },
                        fail: function(t) {
                            a.hint("提交失败"), wx.hideToast();
                        },
                        complete: function() {
                            i = !0;
                        }
                    });
                }
            }) : (e += ",null", wx.request({
                url: a.globalData.comUrl + "tabs_saveFlexiForm",
                data: {
                    projectId: a.globalData.projectInfo.appId,
                    customizeTabId: a.globalData.customizeTabId["Flexi-Form"],
                    token: "html5",
                    fieldKey: t,
                    fieldValue: e
                },
                success: function(a) {
                    n.setData({
                        imagePath: "",
                        storeName: "",
                        name: "",
                        phone: "",
                        detail: ""
                    }), wx.showToast({
                        title: "提交成功",
                        icon: "success",
                        duration: 2e3
                    });
                },
                fail: function(t) {
                    a.hint("提交失败"), wx.hideToast();
                },
                complete: function() {
                    i = !0;
                }
            }));
        }
    },
    formReset: function() {
        this.setData({
            imagePath: ""
        });
    },
    warn: function(a) {
        wx.showToast({
            title: a,
            image: "../../../../img/warn.png",
            duration: 2e3
        });
    }
});