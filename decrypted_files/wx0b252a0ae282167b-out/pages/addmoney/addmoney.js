var e, t = getApp();

Page({
    data: {
        tempFilePaths: [],
        objectArray: [],
        objectIndex: 0,
        moneyText: "",
        order_code: "",
        orderid: ""
    },
    onLoad: function(a) {
        (e = this).setData({
            orderid: a.id
        }), wx.request({
            url: t.data.lost + "/index/orderInfo",
            method: "GET",
            dataType: "html",
            data: {
                orderid: e.data.orderid
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                var a = JSON.parse(t.data);
                e.setData({
                    order_code: a.order_code
                });
            }
        }), wx.request({
            url: t.data.lost + "/index/addmoney2",
            method: "GET",
            dataType: "html",
            data: {
                openid: wx.getStorageSync("openid")
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                var a = JSON.parse(t.data);
                e.setData({
                    objectArray: a.result
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
                });
            }
        });
    },
    formSubmit: function(a) {
        var o = e.data.objectArray[e.data.objectIndex].id, r = e.data.moneyText, d = e.data.tempFilePaths[0], n = a.detail.value.remark;
        return d ? wx.uploadFile({
            url: t.data.lost + "/index/addmoneyform2",
            filePath: d,
            name: "file",
            formData: {
                order_code: e.data.order_code,
                item_id: o,
                ap_amount_car: r,
                remark: n,
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
            url: t.data.lost + "/index/addmoneyform2",
            method: "POST",
            dataType: "html",
            data: {
                order_code: e.data.order_code,
                item_id: o,
                ap_amount_car: r,
                remark: n,
                ap_amount_car_voucher: d,
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
    moneyText: function(t) {
        e.setData({
            moneyText: t.detail.value
        });
    },
    bindPickerChange: function(t) {
        e.setData({
            objectIndex: t.detail.value
        });
    }
});