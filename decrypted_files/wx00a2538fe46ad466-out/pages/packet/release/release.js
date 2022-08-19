var t = require("../../template-cart/template-form/template-form.js"), e = getApp();

Page({
    data: {
        textArea: {
            content: "",
            maxLength: 200,
            current: 0
        },
        imglist: [],
        tablist: [ {
            title: "普通红包"
        }, {
            title: "拼手气红包"
        } ],
        currenttab: 0,
        quan_area: 3
    },
    totabbar: function(t) {
        var e = t.currentTarget.dataset.index;
        this.setData({
            currenttab: e
        });
    },
    textAreaInput: function(e) {
        t.textAreaCount(this, e.detail.value.length);
    },
    placeholder: function(e) {
        t.placeholder(this, e);
    },
    pictureInsert: function() {
        var t = this;
        wx.chooseImage({
            success: function(a) {
                for (var n = t.data.imglist, o = a.tempFiles, i = 0; i < o.length; i++) !function(a) {
                    wx.showLoading({
                        title: "上传中..."
                    }), wx.uploadFile({
                        url: e.globalData.url + "i=" + e.globalData.publicid + "&c=utility&a=file&do=upload&type=image",
                        filePath: o[a].path,
                        name: "file",
                        header: {
                            Cookie: e.globalData.session_login_id,
                            "content-type": "multipart/form-data"
                        },
                        success: function(e) {
                            if (200 == e.statusCode && "uploadFile:ok" == e.errMsg) {
                                var i = JSON.parse(e.data);
                                o[a].id = i.id, o[a].filename = i.filename, n.push(o[a]), t.setData({
                                    imglist: n
                                });
                            }
                        },
                        fail: function(t) {
                            wx.showToast({
                                title: "图片上传失败",
                                image: "/images/tongcheng/icon-failed.png",
                                duration: 1500,
                                mask: !0
                            });
                        },
                        complete: function() {
                            wx.hideLoading();
                        }
                    });
                }(i);
            }
        });
    },
    pictureDelete: function(t) {
        var a = this, n = t.currentTarget.dataset.id, o = t.currentTarget.dataset.index;
        wx.showModal({
            content: "是否删除该图片？",
            cancelText: "取消",
            confirmText: "删除",
            success: function(t) {
                t.confirm && wx.request({
                    url: e.globalData.url + "i=" + e.globalData.publicid + "&c=utility&a=file&do=delete&type=image&id=" + n,
                    header: {
                        Cookie: e.globalData.session_login_id,
                        "content-type": "multipart/form-data"
                    },
                    success: function(t) {
                        if (200 == t.statusCode && "request:ok" == t.errMsg) if ("0" == t.data.message.errno) {
                            for (var e = a.data.imglist, n = 0; n < e.length; n++) o == n && e.splice(n, 1);
                            a.setData({
                                imglist: e
                            });
                        } else wx.showToast({
                            title: t.data.message.message,
                            icon: "success",
                            duration: 1e3,
                            mask: !0
                        }); else wx.showToast({
                            title: "删除失败",
                            image: "/images/tongcheng/icon-failed.png",
                            duration: 1500,
                            mask: !0
                        });
                    }
                });
            }
        });
    },
    picturePreview: function(t) {
        for (var e = this.data.imglist, a = t.currentTarget.dataset.src, n = [], o = 0; o < e.length; o++) n.push(e[o].path);
        wx.previewImage({
            current: a,
            urls: n
        });
    },
    formSubmit: function(t) {
        for (var a = this, n = t.detail.value, o = n.quan_tel, i = a.data.quan_area, s = a.data.imglist, r = [], u = 0; u < s.length; u++) r.push(s[u].filename);
        var l = wx.getStorageSync("packetadd"), c = wx.getStorageSync("location");
        n.quan_content && n.quan_num && n.quan_tel && n.quan_money && n.quan_wechat && "" != r ? 11 == o.length && /^1[34578]\d{9}$/.test(o) ? 1 == a.data.currenttab && Number(n.quan_money) / Number(n.quan_num) < .01 || 0 == a.data.currenttab && Number(n.quan_money) < .01 ? wx.showModal({
            title: "提示",
            content: "单个金额不得低于0.01元",
            showCancel: !1
        }) : wx.request({
            url: e.globalData.url + e.globalData.parameter + "&do=quan_add",
            header: {
                Cookie: e.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: {
                quan_area: i,
                quan_content: n.quan_content,
                quan_num: n.quan_num,
                quan_tel: n.quan_tel,
                quan_money: n.quan_money,
                quan_wechat: n.quan_wechat,
                picture: r,
                type: a.data.currenttab + 1,
                lat: c.lat,
                lng: c.lng,
                quan_address: l
            },
            success: function(t) {
                if (1 == t.data.status) {
                    var e = t.data.result.order_num;
                    wx.showToast({
                        title: t.data.result.message,
                        image: "/images/tongcheng/icon-nomore.png",
                        duration: 1e3
                    }), setTimeout(function() {
                        wx.navigateTo({
                            url: "/pages/merch/merch-pay/merch-pay?order_num=" + e
                        });
                    }, 1e3);
                } else wx.showToast({
                    title: t.data.result.message,
                    image: "/images/tongcheng/icon-failed.png"
                });
            }
        }) : wx.showToast({
            title: "请正确填写号码",
            image: "/images/tongcheng/icon-failed.png",
            duration: 2e3
        }) : wx.showToast({
            title: "请填写完整信息",
            image: "/images/tongcheng/icon-nomore.png",
            duration: 2e3
        });
    },
    onLoad: function(a) {
        t.textAreaCount(this, 0);
        wx.request({
            url: e.globalData.url + e.globalData.parameter + "&do=quan_add",
            header: {
                Cookie: e.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {}
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});