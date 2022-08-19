var a = getApp(), t = {};

Page({
    data: {
        reasons: [ {
            value: "退运费"
        }, {
            value: "大小/尺寸与商品描述不符"
        }, {
            value: "颜色/图案/款式与商品描述不符"
        }, {
            value: "做工粗糙/有瑕疵"
        }, {
            value: "褪色/掉色/缩水/填充物少"
        }, {
            value: "材质/面料与商品描述不符"
        }, {
            value: "少件/漏发"
        }, {
            value: "包装/商品破损/污渍/变形"
        }, {
            value: "假冒品牌"
        }, {
            value: "未按约定时间发货"
        }, {
            value: "发票问题"
        }, {
            value: "卖家发错货"
        }, {
            value: "其它原因"
        } ],
        isHideReason: !0,
        isHideGoodsStatus: !0,
        refundReason: "",
        goodsStatus: "",
        images: [],
        imageUrls: [],
        productList: [],
        money: "",
        refundMoney: "",
        remarks: "",
        transportCost: ""
    },
    onLoad: function(e) {
        t = wx.getStorageSync("orderDetail" + a.globalData.autoId), console.log(t), this.setData({
            productList: t.productOrderVOList,
            money: t.totalMoney + t.transportCost,
            transportCost: t.transportCost,
            refundMoney: t.totalMoney + t.transportCost
        });
    },
    onShow: function() {},
    reasonChange: function(a) {
        this.setData({
            refundReason: a.detail.value,
            isHideReason: !this.data.isHideReason
        });
    },
    statusChange: function(a) {
        this.setData({
            goodsStatus: 0 == a.detail.value ? "未收到货" : "已收到货",
            isHideGoodsStatus: !this.data.isHideGoodsStatus
        });
    },
    hideReasonFrame: function() {
        this.setData({
            isHideReason: !this.data.isHideReason
        });
    },
    hideGoodsStatus: function() {
        this.setData({
            isHideGoodsStatus: !this.data.isHideGoodsStatus
        });
    },
    chooseImage: function() {
        var t = this;
        wx.chooseImage({
            count: 1,
            success: function(e) {
                console.log(e);
                var s = t.data.images.length + e.tempFilePaths.length;
                t.setData({
                    images: t.data.images.concat(e.tempFilePaths)
                }), s > 3 ? a.showToast("最多传3张") : wx.uploadFile({
                    url: a.globalData.comUrl + "tabs_uploadPicMina.action",
                    filePath: e.tempFilePaths[0],
                    name: "file",
                    success: function(a) {
                        var e = JSON.parse(a.data);
                        "1" == e.isSuccess && (t.data.imageUrls.push(e.path), t.setData({
                            imageUrls: t.data.imageUrls
                        }));
                    }
                });
            }
        });
    },
    moneyInput: function(a) {
        var t = this, e = a.detail.value;
        return t.setData({
            refundMoney: e > t.data.money ? t.data.money : e
        }), {
            value: e > t.data.money ? t.data.money : e
        };
    },
    remarksInput: function(a) {
        this.setData({
            remarks: a.detail.value
        });
    },
    delPic: function(a) {
        var t = a.currentTarget.dataset.idx;
        this.data.images.splice(t, 1), this.data.imageUrls.splice(t, 1), this.setData({
            images: this.data.images,
            imageUrls: this.data.imageUrls
        });
    },
    submit: function() {
        var e = this;
        if ("" != e.data.goodsStatus) if ("" != e.data.refundReason) if (e.data.refundMoney <= 0) a.showToast("退款金额必须大于0"); else {
            for (var s = "", o = 0; o < e.data.imageUrls.length; o++) 0 == o ? s += e.data.imageUrls[o] : s = s + "," + e.data.imageUrls[o];
            wx.request({
                url: a.globalData.comUrl + "tabs_applyRefund",
                data: {
                    orderId: t.id,
                    billreason: e.data.refundReason,
                    refundMoney: e.data.refundMoney,
                    isReceive: "未收到货" == e.data.goodsStatus ? 0 : 1,
                    refundDesc: e.data.remarks,
                    refundProofImage: s
                },
                success: function(a) {
                    console.log(a), 1 == a.data ? (wx.showLoading({
                        title: "提交成功",
                        icon: "success",
                        duration: 1500
                    }), setTimeout(function() {
                        wx.navigateBack({
                            deta: 1
                        });
                    }, 1500)) : wx.showLoading({
                        title: "提交失败",
                        icon: "success",
                        duration: 1500
                    });
                }
            });
        } else a.showToast("请选择退款原因"); else a.showToast("请选择货物状态");
    },
    onUnload: function() {}
});