var a = getApp(), t = "", e = "", i = "", o = !0;

Page({
    data: {
        styleConfig: a.globalData.styleConfig,
        imagePath: "",
        storeName: "",
        name: "",
        phone: "",
        detail: "",
        branchId: ""
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
    onLoad: function(a) {
        a.branchId && this.setData({
            branchId: a.branchId
        });
    },
    formSubmit: function(n) {
        if (o) {
            o = !1;
            var l = this, s = /^1[3|4|5|8|7][0-9]\d{4,8}$/;
            if ("" == n.detail.value.storeName) return o = !0, void this.warn("店铺不能为空!");
            if ("" == n.detail.value.name) return o = !0, void this.warn("姓名不能为空!");
            if ("" == n.detail.value.phone) return o = !0, void this.warn("请输入电话号码!");
            if (!s.test(n.detail.value.phone)) return o = !0, void this.warn("请输入正确的电话号码");
            wx.showToast({
                title: "正在提交...",
                icon: "loading",
                duration: 1e4,
                mask: !0
            });
            var r = new Date();
            t = "店铺,姓名,电话,描述,附图说明", e = n.detail.value.storeName + "," + n.detail.value.name + "," + n.detail.value.phone + "," + n.detail.value.detail;
            var c = {
                storeName: n.detail.value.storeName,
                name: n.detail.value.name,
                phone: n.detail.value.phone,
                detail: n.detail.value.detail,
                imagePath: this.data.imagePath,
                date: r.toLocaleDateString()
            }, u = wx.getStorageSync("customArr" + a.globalData.autoId) || [];
            u.push(c), wx.setStorageSync("customArr" + a.globalData.autoId, u), l.data.imagePath ? wx.uploadFile({
                url: a.globalData.comUrl + "tabs_uploadPicMina.action",
                filePath: l.data.imagePath,
                name: "file",
                success: function(a) {
                    var t = JSON.parse(a.data);
                    console.log(t), "1" == t.isSuccess && (i = t.path);
                },
                fail: function(t) {
                    a.hint("图片上传失败");
                },
                complete: function() {
                    i ? e = e + "," + i : e += ",null", wx.request({
                        url: a.globalData.comUrl + "tabs_saveFlexiForm",
                        data: {
                            projectId: a.globalData.projectInfo.appId,
                            customizeTabId: a.globalData.customizeTabId["Flexi-Form"],
                            token: "html5",
                            branchId: l.data.branchId,
                            fieldKey: t,
                            fieldValue: e
                        },
                        success: function(a) {
                            l.setData({
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
                            o = !0;
                        }
                    });
                }
            }) : (e += ",null", wx.request({
                url: a.globalData.comUrl + "tabs_saveFlexiForm",
                data: {
                    projectId: a.globalData.projectInfo.appId,
                    customizeTabId: a.globalData.customizeTabId["Flexi-Form"],
                    branchId: l.data.branchId,
                    token: "html5",
                    fieldKey: t,
                    fieldValue: e
                },
                success: function(a) {
                    l.setData({
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
                    o = !0;
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