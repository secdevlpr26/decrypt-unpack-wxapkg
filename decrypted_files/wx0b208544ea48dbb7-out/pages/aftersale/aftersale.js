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
        a.getReturnGood(t, e);
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
        wx.request({
            url: t + "index.php/Mobile/UserApi/return_goods",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: a,
            success: function(e) {
                0 == e.data.error && "申请成功,客服第一时间会帮你处理" == e.data.data ? wx.showModal({
                    title: "退货申请",
                    content: "申请成功,客服第一时间会帮你处理",
                    success: function(e) {
                        e.confirm ? (console.log("用户点击确定"), setTimeout(function() {
                            wx.navigateBack();
                        }, 2e3)) : e.cancel && console.log("用户点击取消");
                    }
                }) : 1 == e.data.error && "已经提交过退货申请" == e.data.data && wx.showModal({
                    title: "退货申请",
                    content: "您已经提交过退货申请",
                    success: function(e) {
                        e.confirm ? (console.log("用户点击确定"), setTimeout(function() {
                            wx.navigateBack();
                        }, 2e3)) : e.cancel && console.log("用户点击取消");
                    }
                });
            }
        });
    },
    delImage: function(e) {
        var t = e.currentTarget.dataset.showimgurl, a = e.currentTarget.dataset.dataimgurl, o = this, n = o.data.imageList, i = o.data.uploadIng, s = [], r = [];
        for (var d in n) t !== n[d] && s.push(n[d]);
        for (var d in i) a !== i[d] && r.push(i[d]);
        o.setData({
            imageList: s
        }), o.setData({
            uploadIng: r
        });
    },
    chooseImage: function() {
        var e = this;
        console.log("chooseImage"), wx.chooseImage({
            count: 3,
            sizeType: [ "compressed" ],
            sourceType: [ "album" ],
            success: function(a) {
                var o = a.tempFilePaths, n = e.data.imageList || [];
                n.push(o[0]), e.setData({
                    imageList: n
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
    getReturnGood: function(a, o) {
        var n = t + "index.php/Mobile/UserApi/return_goods", i = {
            userkey: e.globalData.userKey,
            order_id: o.orderid,
            order_sn: o.ordersn,
            goods_id: o.goodid,
            spec_key: o.speckey
        };
        wx.request({
            url: n,
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: i,
            success: function(e) {
                var t = e.data;
                a.setData({
                    goods: t.goods,
                    param: i
                });
            }
        });
    }
};