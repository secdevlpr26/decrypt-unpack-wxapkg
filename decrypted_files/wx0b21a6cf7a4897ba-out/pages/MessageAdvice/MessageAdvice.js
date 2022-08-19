var e = getApp(), t = require("../../utils/util.js");

Page({
    data: {
        iconimg: {
            orderphone: "../../images/order_phone@2x.png",
            order_name: "../../images/order_name@2x.png",
            select: "../../images/Select@2x.png",
            selected: "../../images/Selected@2x.png",
            addicon: "../../images/add@2x.png",
            deleteIcon: "../../images/delete@2x.png"
        },
        selectedImagePaths: [],
        didUploadImages: [],
        maxImgNum: 3,
        imgW: 78,
        loading: !1,
        errorMsg: "",
        askContent: "",
        phone: "",
        name: "",
        sex: 1
    },
    onLoad: function(e) {
        var t = this;
        wx.getSystemInfo({
            success: function(e) {
                var a = e.windowWidth;
                t.setData({
                    imgW: (a - 60) / 4
                });
            }
        });
    },
    textareaInput: function(e) {
        this.setData({
            askContent: e.detail.value
        });
    },
    showPadAdvicePage: function(e) {
        wx.redirectTo({
            url: "../PaidAdvice/PaidAdvice"
        });
    },
    inputPhone: function(e) {
        this.setData({
            phone: e.detail.value
        });
    },
    inputName: function(e) {
        this.setData({
            name: e.detail.value
        });
    },
    changeSex: function(e) {
        this.setData({
            sex: e.currentTarget.dataset.sex
        });
    },
    submit: function(e) {
        var t = this;
        return 0 == this.data.askContent.replace(/(^s*)|(s*$)/g, "").length ? (t.setData({
            errorMsg: "问题内容不能为空"
        }), void setTimeout(function() {
            t.setData({
                errorMsg: ""
            });
        }, 1e3)) : /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/.test(this.data.phone) ? void this.uploadImages({
            success: function() {
                t.submitOrder();
            },
            fail: function() {
                wx.showModal({
                    title: "错误提示",
                    content: "上传图片失败,请重试",
                    showCancel: !1,
                    success: function(e) {}
                });
            }
        }) : (t.setData({
            errorMsg: "请输入正确的电话号码"
        }), void setTimeout(function() {
            t.setData({
                errorMsg: ""
            });
        }, 1e3));
    },
    submitOrder: function() {
        if (!this.data.loading) {
            this.setData({
                loading: !0
            });
            var t = this;
            e.apiRequestPost({
                urlMethod: "api/Users/askQuestion",
                data: {
                    openid: e.globalData.userInfo.u_openid,
                    call: this.data.name + ("1" == this.data.sex ? "先生" : "女士"),
                    tel: this.data.phone,
                    askContent: this.data.askContent,
                    images: this.data.didUploadImages
                },
                success: function(e) {
                    t.setData({
                        loading: !1
                    }), 0 == e.data.status ? wx.showToast({
                        title: "留言成功",
                        icon: "success",
                        duration: 1e3,
                        complete: function() {
                            setTimeout(function() {
                                wx.redirectTo({
                                    url: "../MyFreeAdvice/MyFreeAdvice"
                                });
                            }, 1e3);
                        }
                    }) : (t.setData({
                        errorMsg: e.data.msg
                    }), setTimeout(function() {
                        t.setData({
                            errorMsg: ""
                        });
                    }, 1e3), t.setData({
                        loading: !1
                    }));
                },
                fail: function(e) {
                    t.setData({
                        errorMsg: e.errMsg
                    }), setTimeout(function() {
                        t.setData({
                            errorMsg: ""
                        });
                    }, 1e3), t.setData({
                        loading: !1
                    });
                }
            });
        }
    },
    addImagesAction: function() {
        var e = this;
        wx.chooseImage({
            count: e.data.maxImgNum - e.data.selectedImagePaths.length,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                var s = a.tempFilePaths;
                e.setData({
                    selectedImagePaths: t.merge([ e.data.selectedImagePaths, s ])
                });
            }
        });
    },
    deleteImageAction: function(e) {
        var t = e.currentTarget.dataset.imageindex, a = this.data.selectedImagePaths;
        a.splice(t, 1), this.setData({
            selectedImagePaths: a
        });
    },
    uploadImages: function(t) {
        var a = this, s = this.data.selectedImagePaths;
        if (this.setData({
            didUploadImages: []
        }), 0 != s.length) {
            wx.showToast({
                title: "正在上传...",
                icon: "loading",
                mask: !0,
                duration: 1e4
            });
            for (var i = 0, n = 0, o = s.length; n < o; n++) e.apiUploadFile({
                urlMethod: "api/Values/UploadFileNew",
                filePath: s[n],
                name: "uploadfile_ant",
                formData: {
                    imgIndex: n
                },
                success: function(e) {
                    i++;
                    var n = a.data.didUploadImages, o = e.data;
                    o = o.replace(/"/g, ""), n.push({
                        askType: 2,
                        askImage: o
                    }), a.setData({
                        didUploadImages: n
                    }), i == s.length && (wx.hideToast(), "function" == typeof t.success && t.success());
                },
                fail: function(e) {
                    console.log(e), wx.hideToast(), "function" == typeof t.fail && t.fail();
                }
            });
        } else "function" == typeof t.success && t.success();
    }
});