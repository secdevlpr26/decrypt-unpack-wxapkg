function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../utils/api")), a = t(require("../../common/toast/toast"));

getApp();

Page({
    data: {
        page: 1,
        page_size: 6,
        orderList: [],
        finishReach: !1,
        evaluate: !0,
        evaluateText: "",
        star: 0,
        currOperateData: {},
        firstEnter: !0
    },
    onLoad: function() {
        this.getData();
    },
    onHide: function() {
        this.data.firstEnter = !1;
    },
    onShow: function() {
        if (!this.data.firstEnter) {
            var t = wx.getStorageSync("orderDelete");
            this.getData(!0), t && wx.setStorageSync("orderDelete", !1);
        }
    },
    getData: function(t) {
        var a = this;
        t && (a.data.page = 1, a.data.orderList = [], a.data.finishReach = !1, wx.pageScrollTo({
            scrollTop: 0
        })), wx.showLoading({
            title: "加载中"
        }), e.default.orderList("/serviceOrder/list", {
            page: this.data.page,
            page_size: this.data.page_size
        }).then(function(e) {
            setTimeout(function() {
                wx.hideLoading();
            }, 300), t && (wx.stopPullDownRefresh(), wx.pageScrollTo({
                scrollTop: 0
            })), e.result.page >= e.result.total_pages || 0 == e.result.total_pages ? a.data.finishReach = !0 : a.data.page++, 
            a.data.orderList = a.data.orderList.concat(e.result.list), a.setData({
                orderList: a.data.orderList
            });
        }, function(t) {
            setTimeout(function() {
                wx.hideLoading();
            }, 300);
        });
    },
    onPullDownRefresh: function() {
        this.getData(!0);
    },
    onReachBottom: function() {
        this.data.finishReach || this.getData();
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
                        duration: 1e3
                    }), a.getData(!0);
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
        var t = this, r = this;
        this.data.star < 1 ? a.default.show({
            type: "text",
            timer: 1e3,
            text: "请输入您的评分"
        }) : this.data.evaluateText.trim() ? (e.default.orderBtn("/serviceOrder/updateOrderStatus", {
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
            }), r.getData(!0), t.setData({
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