var t = getApp(), a = t.globalData.projectInfo, e = "", o = "", r = "";

Page({
    data: {
        orderDetail: {},
        payStatus: "",
        payStatusStr: "",
        payType: "",
        orderNO: "",
        createDate: "",
        expressNO: "",
        showStatus: !1,
        isGroupOrder: !1,
        tel: "",
        isShowPrePay: !1,
        cardNo: "",
        memberId: "",
        preMoney: "",
        isWeb: t.globalData.isWeb
    },
    onLoad: function(s) {
        var n = this;
        a = t.globalData.projectInfo, r = t.globalData.customizeTabId;
        var i = n.isShowPay();
        i && n.getUserInfo(), console.log(s), e = s.orderNO, o = s.id, n.setData({
            orderNO: e,
            isShowPrePay: i
        });
    },
    onShow: function() {
        this.getOrderDetail();
    },
    getOrderDetail: function() {
        var a = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getZXOrderDetail.action",
            data: {
                appId: t.globalData.projectInfo.appId,
                orderId: o
            },
            success: function(e) {
                var o = t.getJsonData(e.data);
                console.log(o);
                var r = new Date(o.createDate.time);
                if (a.getStoreInfo(o.branchInfoId), wx.setStorageSync("orderDetail" + t.globalData.autoId, o), 
                3 == o.payType) a.setData({
                    showStatus: !1
                }); else if (a.setData({
                    showStatus: !0
                }), 1 == o.payStatus) switch (o.status) {
                  case 1:
                    a.data.payStatusStr = "待发货";
                    break;

                  case 2:
                    a.data.payStatusStr = "\b处理中";
                    break;

                  case 3:
                    a.data.payStatusStr = "\b已发货";
                    break;

                  case 4:
                    a.data.payStatusStr = "\b待评价";
                    break;

                  case 5:
                    a.data.payStatusStr = "\b已取消";
                    break;

                  case 6:
                    a.data.payStatusStr = "申请退款中...";
                    break;

                  case 7:
                    a.data.payStatusStr = "退款被拒绝";
                    break;

                  case 8:
                    a.data.payStatusStr = "\b退款成功";
                    break;

                  case 9:
                    a.data.payStatusStr = "\b交易成功";
                } else "5" == o.status ? a.data.payStatusStr = "\b已取消" : a.data.payStatusStr = "未支付";
                a.setData({
                    orderDetail: o,
                    status: o.status,
                    payType: o.payType,
                    payStatusStr: a.data.payStatusStr,
                    payStatus: o.payStatus,
                    expressNO: o.expressNO,
                    createDate: r.getFullYear() + "-" + (r.getMonth() + 1) + "-" + r.getDate(),
                    isGroupOrder: void 0 != r.groupOrderNo
                }), wx.hideToast();
            },
            fail: function() {
                t.hint();
            }
        });
    },
    isShowPay: function() {
        for (var a = t.globalData.moduleList, e = 0; e < a.length; e++) if (a[e].tabTitle && "电子会员卡" === a[e].tabTitle) return !0;
        return !1;
    },
    getUserInfo: function() {
        var a = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getMember.action",
            data: {
                memberId: t.getMemberId(),
                customizetabId: r.LynxApplyFor_About_Merchant,
                checkBranch: 1
            },
            success: function(e) {
                var o = t.getJsonData(e.data);
                console.log(o), a.setData({
                    cardNo: o.cardNo,
                    preMoney: o.preMoney
                });
            },
            fail: function() {
                t.hint();
            }
        });
    },
    getStoreInfo: function(e) {
        var o = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getSingleBranchInfo.action",
            data: {
                appId: a.appId,
                tabContentId: e
            },
            success: function(a) {
                var e = t.getJsonData(a.data);
                console.log(e), o.setData({
                    tel: "" == e.tel ? e.phone : e.tel
                });
            },
            fail: function(a) {
                t.hint();
            }
        });
    },
    cancelOrder: function() {
        var a = this;
        wx.showModal({
            title: "是否确认取消订单？",
            success: function(e) {
                e.confirm && wx.request({
                    url: t.globalData.comUrl + "tabs_updateZXOrderStatus.action",
                    data: {
                        appId: t.globalData.projectInfo.appId,
                        orderId: a.data.orderDetail.id,
                        status: 5
                    },
                    success: function() {
                        wx.showToast({
                            title: "订单已取消",
                            icon: "success",
                            duration: 2e3
                        }), setTimeout(function() {
                            wx.navigateBack({
                                delta: 1
                            });
                        }, 2e3);
                    },
                    fail: function() {
                        t.hint();
                    }
                });
            }
        });
    },
    toPay: function(e) {
        var o = this, r = e.currentTarget.dataset;
        "" != o.data.orderDetail.activityIds && void 0 != o.data.orderDetail.activityIds ? wx.request({
            url: t.globalData.comUrl + "activityProduct_checkActivityStatus.action",
            data: {
                appId: a.appId,
                productId: o.data.orderDetail.productOrderVOList[0].productId,
                activityId: o.data.orderDetail.activityIds
            },
            success: function(a) {
                0 == a.data.code ? (isSubmit = !0, t.hint("活动已经结束")) : 2 == a.data.code ? (isSubmit = !0, 
                t.hint("产品已经退出该活动")) : "1" == r.type ? o.startPay() : o.prePay();
            }
        }) : "1" == r.type ? o.startPay() : o.prePay();
    },
    refund: function() {
        wx.navigateTo({
            url: "../refund/refund"
        });
    },
    prePay: function() {
        var e = this;
        e.data.preMoney < e.data.orderDetail.totalMoney ? wx.showToast({
            title: "余额不足！",
            icon: "none",
            duration: 2e3,
            mask: !0
        }) : (wx.showToast({
            title: "加载中...",
            icon: "loading",
            duration: 1e4,
            mask: !0
        }), wx.request({
            url: t.globalData.paymentUrl + "/WechatAlipay/PrePayNotifcation",
            data: {
                memberId: t.getMemberId(),
                projectId: a.appId,
                nonce_str: "lfksf" + Math.round(1e5 * Math.random()),
                body: e.data.orderDetail.productOrderVOList[0].productName,
                attach: e.data.orderDetail.orderNO + "_" + e.data.orderDetail.id + "%2B",
                out_trade_no: e.data.orderDetail.orderNO + new Date().valueOf(),
                total_fee: (100 * e.data.orderDetail.totalMoney).toFixed(0),
                trade_type: "",
                device_info: "156151"
            },
            success: function(t) {
                console.log(t.data), wx.hideToast(), "success" == t.data ? wx.showToast({
                    title: "支付成功",
                    icon: "success",
                    duration: 2e3,
                    mask: !0
                }) : wx.showModal({
                    title: "支付失败",
                    showCancel: !1,
                    success: function(t) {
                        t.confirm && e.onShow();
                    }
                });
            }
        }));
    },
    startPay: function() {
        var r = this;
        wx.showToast({
            title: "加载中...",
            icon: "loading",
            duration: 1e4,
            mask: !0
        }), wx.request({
            url: t.globalData.comUrl + "tabs_getZXOrderDetail.action",
            data: {
                appId: t.globalData.projectInfo.appId,
                orderId: o
            },
            success: function(o) {
                "9" == t.getJsonData(o.data).status ? t.hint("该产品已下架") : r.data.isWeb ? r.onLinePay({
                    orderNO: e
                }) : wx.login({
                    success: function(o) {
                        o.code ? wx.request({
                            url: t.globalData.paymentUrl + "/WechatAlipay/MiniPayService2?jsoncallback=?",
                            data: {
                                projectId: a.appId,
                                nonce_str: "lfksf" + Math.round(1e5 * Math.random()),
                                body: r.data.orderDetail.productOrderVOList[0].productName,
                                attach: e + "_" + r.data.orderDetail.id + "%2B",
                                out_trade_no: e + new Date().valueOf(),
                                total_fee: (100 * r.data.orderDetail.totalMoney).toFixed(0),
                                trade_type: "JSAPI",
                                device_info: "838792",
                                code: o.code
                            },
                            success: function(t) {
                                wx.hideToast();
                                var a = r.getJsonData(t.data);
                                wx.requestPayment({
                                    timeStamp: a.timeStamp,
                                    nonceStr: a.nonceStr,
                                    package: "prepay_id=" + a.prepay_id,
                                    signType: "MD5",
                                    paySign: a.sign,
                                    success: function(t) {
                                        wx.showToast({
                                            title: "支付成功",
                                            icon: "success",
                                            duration: 2e3,
                                            mask: !0
                                        }), setTimeout(function() {
                                            r.onShow();
                                        }, 2e3);
                                    },
                                    fail: function(t) {
                                        wx.showModal({
                                            title: "支付失败",
                                            showCancel: !1,
                                            success: function(t) {
                                                t.confirm && r.onShow();
                                            }
                                        });
                                    }
                                });
                            }
                        }) : t.hint("获取用户登录态失败！" + o.errMsg);
                    }
                });
            },
            fail: function() {
                t.hint();
            }
        });
    },
    goComment: function(t) {
        console.log(t.currentTarget.dataset.id), wx.navigateTo({
            url: "../../../product/comment/publish-comment/publish-comment?productOrderId=" + t.currentTarget.dataset.id
        });
    },
    sureReceive: function() {
        var a = this;
        wx.showModal({
            title: "提示",
            content: "是否确认收货",
            success: function(e) {
                e.confirm && wx.request({
                    url: t.globalData.comUrl + "tabs_signForOrder.action",
                    data: {
                        orderId: a.data.orderDetail.id
                    },
                    success: function(e) {
                        console.log(e), 1 == e.data ? a.onShow() : t.hint("收货失败");
                    }
                });
            }
        });
    },
    gotoLogistics: function() {
        this.data.orderDetail.expressNO ? wx.navigateTo({
            url: "logistics/logistics?appOrderId=" + this.data.orderDetail.id
        }) : t.hint("商家暂未填写物流单号");
    },
    getJsonData: function(t) {
        return JSON.parse(t.substring(1, t.length - 1));
    },
    makePhoneCall: function() {
        var t = this;
        wx.makePhoneCall({
            phoneNumber: t.data.tel
        });
    },
    onLinePay: function(e) {
        var o = this, r = {
            myOrderInfo: e,
            projectInfo: a,
            productNames: o.data.orderDetail.productOrderVOList[0].productName,
            totalPrice: o.data.orderDetail.totalMoney,
            paymentUrl: t.globalData.paymentUrl
        };
        window.localStorage.setItem("payInfos", JSON.stringify(r));
        var s = -1 != window.navigator.userAgent.toLowerCase().indexOf("micromessenger"), n = window.location.href.split("#")[0] + "paymament.html";
        s && (n = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + t.globalData.wxAppId + "&redirect_uri=" + encodeURIComponent(n) + "&response_type=code&scope=snsapi_userinfo&state=12345#wechat_redirect"), 
        window.location.href = n;
    }
});