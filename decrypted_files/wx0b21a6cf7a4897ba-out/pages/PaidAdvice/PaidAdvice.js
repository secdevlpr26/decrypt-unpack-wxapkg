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
        errorMsg: "",
        money: "0.01",
        name: "",
        phone: "",
        sex: 1,
        content: ""
    },
    onLoad: function(e) {
        this.getPrice();
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
    onPullDownRefresh: function() {
        this.getPrice();
    },
    getPrice: function() {
        wx.showNavigationBarLoading();
        var t = this;
        e.apiRequestGet({
            urlMethod: "api/Question/getPrice",
            data: {},
            success: function(e) {
                t.setData({
                    money: e.data.price
                }), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh(), wx.hideLoading();
            },
            fail: function(e) {
                wx.hideNavigationBarLoading(), wx.stopPullDownRefresh(), wx.hideLoading(), t.setData({
                    errorMsg: "获取价格失败，下拉重新获取"
                }), setTimeout(function() {
                    t.setData({
                        errorMsg: ""
                    });
                }, 1e3);
            }
        });
    },
    textareaInput: function(e) {
        this.setData({
            content: e.detail.value
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
        return 0 == this.data.content.replace(/(^s*)|(s*$)/g, "").length ? (t.setData({
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
        var e = {
            payMoney: this.data.money,
            ucall: this.data.name + ("1" == this.data.sex ? "先生" : "女士"),
            tel: this.data.phone,
            askContent: this.data.content,
            images: this.data.didUploadImages
        };
        wx.redirectTo({
            url: "../PayAdviceQRCode/PayAdviceQRCode?data=" + JSON.stringify(e)
        });
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
                    var n = a.data.didUploadImages;
                    n.push({
                        askType: 4,
                        askImage: e.data.replace(/"/g, "")
                    }), a.setData({
                        didUploadImages: n
                    }), i == s.length && (wx.hideToast(), "function" == typeof t.success && t.success());
                },
                fail: function(e) {
                    wx.hideToast(), "function" == typeof t.fail && t.fail();
                }
            });
        } else "function" == typeof t.success && t.success();
    }
});