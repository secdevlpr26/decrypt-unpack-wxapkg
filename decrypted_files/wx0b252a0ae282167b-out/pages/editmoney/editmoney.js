var e, t = getApp();

Page({
    data: {
        tempFilePaths: [],
        objectArray: [],
        objectIndex: 0,
        moneyText: "",
        minfo: "",
        mid: "",
        orderid: "",
        flg: 0
    },
    onLoad: function(a) {
        (e = this).setData({
            mid: a.id
        }), wx.request({
            url: t.data.lost + "/index/editMoney",
            method: "GET",
            dataType: "html",
            data: {
                id: e.data.mid,
                openid: wx.getStorageSync("openid")
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                var a = JSON.parse(t.data), o = new Array();
                o[0] = a.minfo.src, e.setData({
                    tempFilePaths: o
                }), e.setData({
                    orderid: a.orderid
                }), e.setData({
                    minfo: a.minfo
                }), e.setData({
                    objectArray: a.result
                });
                for (var i in a.result) a.result[i].id == a.minfo.fn_id && e.setData({
                    objectIndex: i
                });
            }
        });
    },
    upload: function() {
        wx.chooseImage({
            count: 9,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                wx.showToast({
                    title: "正在上传...",
                    icon: "loading",
                    mask: !0,
                    duration: 1e3
                });
                var a = t.tempFilePaths;
                e.setData({
                    tempFilePaths: a
                }), e.setData({
                    flg: 1
                });
            }
        });
    },
    formSubmit: function(a) {
        var o = e.data.objectArray[e.data.objectIndex].id, i = a.detail.value.money, n = e.data.tempFilePaths[0], d = a.detail.value.remark;
        return 1 == e.data.flg ? wx.uploadFile({
            url: t.data.lost + "/index/editMoneyForm",
            filePath: n,
            name: "file",
            formData: {
                item_id: o,
                ap_amount_car: i,
                remark: d,
                id: e.data.mid,
                flg: e.data.flg,
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                wx.showToast({
                    title: "提交成功",
                    icon: "success",
                    duration: 2e3
                }), setTimeout(function() {
                    wx.navigateTo({
                        url: "../orderMoneyIntro/orderMoneyIntro?id=" + e.data.orderid
                    });
                }, 2e3);
            }
        }) : wx.request({
            url: t.data.lost + "/index/editMoneyForm",
            method: "POST",
            dataType: "html",
            data: {
                item_id: o,
                ap_amount_car: i,
                remark: d,
                flg: e.data.flg,
                id: e.data.mid,
                openid: wx.getStorageSync("openid")
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                wx.showToast({
                    title: "提交成功",
                    icon: "success",
                    duration: 2e3
                }), setTimeout(function() {
                    wx.navigateTo({
                        url: "../orderMoneyIntro/orderMoneyIntro?id=" + e.data.orderid
                    });
                }, 2e3);
            }
        }), !1;
    },
    listenerButtonPreviewImage: function(t) {
        var a = t.target.dataset.index;
        wx.previewImage({
            current: e.data.tempFilePaths[a],
            urls: e.data.tempFilePaths,
            success: function(e) {},
            fail: function() {}
        });
    },
    bindPickerChange: function(t) {
        e.setData({
            objectIndex: t.detail.value
        });
    }
});