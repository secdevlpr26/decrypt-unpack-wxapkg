var e = getApp(), t = e.globalData.config.base;

Page({
    data: {
        imageList: [],
        uploadIng: [],
        comment: "",
        isComplete: !0,
        typelist: [ "退款", "换货" ],
        province: [ {
            id: 0,
            name: "请选择省份",
            level: 1,
            parent_id: 0
        } ],
        type: 0
    },
    onShareAppMessage: function() {
        return {
            title: e.globalData.config.title,
            path: "/pages/index/index?upperuid=" + (wx.getStorageSync("myuid") || wx.getStorageSync("parentuid") || param.upperuid)
        };
    },
    onLoad: function(e) {
        var t = this;
        a.getAftersaleDetail(t, e);
    },
    onReady: function() {},
    onShow: function() {
        this.getAftersale();
    },
    onHide: function() {},
    onUnload: function() {},
    getAftersale: function() {
        var e = this;
        wx.request({
            url: t + "Mobile/Api/AfterSaleList",
            method: "GET",
            header: {
                "content-type": "application"
            },
            success: function(t) {
                console.log(t), e.setData({
                    explain: t.data
                });
            }
        });
    },
    editComment: function(e) {
        var t = e.detail.value;
        this.setData({
            comment: t
        });
    },
    changeType: function(e) {
        var t = e.detail.value / 1;
        this.setData({
            type: t
        });
    },
    submit: function() {
        var a = {
            subtype: "submit_return",
            userkey: e.globalData.userKey,
            order_id: this.data.param.order_id,
            order_sn: this.data.param.order_sn,
            goods_id: this.data.param.goods_id,
            img: this.data.uploadIng.join(","),
            type: this.data.type,
            reason: this.data.comment,
            spec_key: this.data.param.spec_key
        };
        console.log(a), wx.request({
            url: t + "index.php/Mobile/UserApi/return_goods",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: a,
            success: function(e) {
                console.log(e);
            }
        });
    },
    chooseImage: function() {
        var e = this;
        console.log("chooseImage"), wx.chooseImage({
            count: 3,
            sizeType: [ "compressed" ],
            sourceType: [ "album" ],
            success: function(a) {
                var o = a.tempFilePaths, i = e.data.imageList || [];
                i.push(o), e.setData({
                    imageList: i
                }), o.forEach(function(a, o) {
                    e.setData({
                        isComplete: !1
                    }), wx.uploadFile({
                        url: t + "Mobile/Api/uploadfile",
                        filePath: a,
                        name: "file",
                        formData: {
                            act: "comment"
                        },
                        success: function(t) {
                            var a = t.data, o = e.data.uploadIng;
                            o.push(a), e.setData({
                                uploadIng: o,
                                isComplete: !0
                            });
                        }
                    });
                });
            }
        });
    }
});

var a = {
    getAftersaleDetail: function(a, o) {
        var i = t + "index.php/Mobile/UserApi/return_info", s = {
            userkey: e.globalData.userKey,
            id: o.id
        };
        wx.request({
            url: i,
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: s,
            success: function(e) {
                var t = e.data;
                a.setData({
                    detail: t.data
                });
            }
        });
    },
    getReturnGood: function(a, o) {
        var i = t + "index.php/Mobile/UserApi/return_goods", s = {
            userkey: e.globalData.userKey,
            order_id: o.orderid,
            order_sn: o.ordersn,
            goods_id: o.goodid,
            spec_key: o.speckey
        };
        wx.request({
            url: i,
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: s,
            success: function(e) {
                var t = e.data;
                a.setData({
                    goods: t.goods,
                    param: s
                });
            }
        });
    }
};