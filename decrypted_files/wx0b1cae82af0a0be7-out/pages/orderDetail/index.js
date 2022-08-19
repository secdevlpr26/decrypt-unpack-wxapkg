function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../utils/api")), a = t(require("../../common/toast/toast"));

getApp();

Page({
    data: {
        orderDetail: {},
        evaluate: !0,
        evaluateText: "",
        star: 0,
        currOperateData: {}
    },
    getData: function() {
        var t = this;
        e.default.orderDetail("/serviceOrder/detail", {
            orderNo: this.data.orderNo
        }).then(function(e) {
            t.setData({
                orderDetail: e.result
            });
        });
    },
    onLoad: function(t) {
        this.data.orderNo = t.orderNo, this.getData();
    },
    orderOperate: function(t) {
        var a = this, r = t.currentTarget.dataset;
        1 == r.operationtype ? wx.showModal({
            title: "提示",
            content: "确定" + r.event + "？",
            confirmColor: "#26a2ff",
            success: function(t) {
                t.confirm && e.default.orderBtn("/serviceOrder/updateOrderStatus", {
                    flag: r.flag,
                    orderNo: r.orderno,
                    type: r.type
                }).then(function(t) {
                    wx.showToast({
                        title: "操作成功",
                        icon: "success",
                        duration: 500
                    }), wx.setStorageSync("orderDelete", !0), -1 == r.flag ? setTimeout(function() {
                        wx.navigateBack();
                    }, 500) : a.getData();
                });
            }
        }) : 4 == r.operationtype ? wx.navigateTo({
            url: "../paySubmit/index?orderSn=" + r.orderno
        }) : 5 == r.operationtype && (this.data.currOperateData = {
            flag: r.flag,
            type: r.type,
            orderNo: r.orderno
        }, this.setData({
            evaluate: !1
        }));
    },
    cancelEvaluste: function() {
        this.setData({
            evaluate: !0,
            evaluateText: "",
            star: 0
        });
    },
    confirmEvaluste: function() {
        var t = this;
        this.data.evaluateText.trim() ? (e.default.orderBtn("/serviceOrder/updateOrderStatus", {
            evaluateContent: this.data.evaluateText,
            starLevel: this.data.star,
            flag: this.data.currOperateData.flag,
            orderNo: this.data.currOperateData.orderNo,
            type: this.data.currOperateData.type
        }).then(function(e) {
            wx.showToast({
                title: "评价成功",
                icon: "success",
                duration: 1e3
            }), wx.setStorageSync("orderDelete", !0), that.getData(), t.setData({
                evaluateText: "",
                star: 0
            });
        }, function(e) {
            t.setData({
                evaluateText: "",
                star: 0
            });
        }), this.setData({
            evaluate: !0
        })) : a.default.show({
            type: "text",
            timer: 1e3,
            text: "请输入您的评价"
        });
    },
    editEvaluste: function(t) {
        this.data.evaluateText = t.detail.value;
    },
    changeStar: function(t) {
        var e = t.currentTarget.dataset;
        e.status && this.data.star == e.index ? this.data.star-- : this.data.star = e.index, 
        this.setData({
            star: this.data.star
        });
    },
    callPhone: function(t) {
        wx.makePhoneCall({
            phoneNumber: t.currentTarget.dataset.phone
        });
    }
});