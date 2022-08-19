var t = getApp();

Page({
    data: {
        baseUrl: t.globalData.siteBaseUrl,
        ismember: !0,
        admin_id: 0,
        store_id: 0,
        money: "",
        moneyTip: "0.00",
        canInput: !0,
        successFlag: !1,
        markShow: !1,
        couponinfoFlag: !1,
        couponList: [],
        useCouponID: ""
    },
    onLoad: function(e) {
        this.setData({
            admin_id: e.a || 0,
            store_id: e.s || 0,
            money: e.m || "",
            moneyTip: e.m || "0.00",
            canInput: e.m > 0
        }), t.doAfterUserInfoAuth({
            success: this.loginSuccessCallback
        });
    },
    getUserInfo: function(t) {
        console.log(t);
    },
    moneyInput: function(t) {
        var e = this, a = {
            ItemID: -1,
            Title: ""
        };
        this.setData({
            couponTitleText: a,
            useCouponID: ""
        });
        var o = t.detail.value;
        o > 1e7 ? e.setData({
            money: "" + t.detail.value.slice(0, 7),
            moneyTip: "" + t.detail.value.slice(0, 7)
        }) : o.split(".")[1] ? o.split(".")[1].length > 2 ? "." == o.split("")[0] ? e.setData({
            money: "0." + o.split(".")[1].slice(0, 2),
            moneyTip: "0." + o.split(".")[1].slice(0, 2)
        }) : e.setData({
            money: o.split(".")[0] + "." + o.split(".")[1].slice(0, 2),
            moneyTip: o.split(".")[0] + "." + o.split(".")[1].slice(0, 2)
        }) : "." == o.split("")[0] ? e.setData({
            money: "0." + o.split(".")[1].slice(0, 2),
            moneyTip: "0." + o.split(".")[1].slice(0, 2)
        }) : e.setData({
            money: o,
            moneyTip: o
        }) : "." === o.split("")[0] ? e.setData({
            money: "0.",
            moneyTip: "0."
        }) : e.setData({
            money: "" + o.slice(0, 7),
            moneyTip: "" + o.slice(0, 7)
        }), "" === o && e.setData({
            moneyTip: "0.00"
        });
    },
    changeNum: function(t) {
        return /^0+/.test(t) && (t = t.replace(/^0+/, "")), /\./.test(t) || (t += ".00"), 
        /\./.test(t) && (t += "00"), /^\./.test(t) && (t = "0" + t, t = (t += "00").match(/\d+\.\d{2}/)[0]), 
        /\.\d/.test(t) && (t = (t += "0").match(/\d+\.\d{2}/)[0]), t;
    },
    pay: function() {
        var e = this, a = e.data.money, o = /^\d*[.]?\d{0,2}$/;
        if ("" !== a) if (o.test(a)) if (a <= 0) t.showModal({
            title: "提示",
            content: "限输入大于零的金额！"
        }); else {
            var n = e.changeNum(e.data.money.replace(/[^0-9|\.]/g, "")), s = e.changeNum(e.data.moneyTip.replace(/[^0-9|\.]/g, ""));
            e.setData({
                money: n,
                moneyTip: s
            }), t.sendRequest({
                url: "/index.php?c=Front/WxApp/BaseApi&a=wxPayCode",
                method: "POST",
                data: {
                    admin_id: this.data.admin_id,
                    store_id: this.data.store_id,
                    money: n,
                    coupon_item_id: this.data.useCouponID
                },
                success: function(a) {
                    if (a.success) {
                        var o = a.data.config, n = a.data.order_no;
                        wx.requestPayment({
                            timeStamp: o.timeStamp,
                            nonceStr: o.nonceStr,
                            package: o.package,
                            signType: "MD5",
                            paySign: o.paySign,
                            success: function(a) {
                                var o = {
                                    order_no: n
                                };
                                t.sendRequest({
                                    url: "/index.php?c=Front/WxApp/BaseApi&a=saveWxPayCode",
                                    data: o,
                                    method: "POST",
                                    success: function(a) {
                                        a.success ? (t.showToast({
                                            title: "支付成功",
                                            icon: "success"
                                        }), e.setData({
                                            pay_amount: a.data.pay_amount,
                                            store_name: a.data.store_name,
                                            pay_date: a.data.pay_date,
                                            successFlag: !0
                                        }), setTimeout(function() {
                                            e.setData({
                                                markShow: !0
                                            });
                                        }, 500)) : t.showModal({
                                            title: "提示",
                                            content: "" + a.msg
                                        });
                                    }
                                });
                            }
                        });
                    } else t.showModal({
                        title: "提示",
                        content: "" + a.msg
                    });
                },
                fail: function() {}
            });
        } else t.showModal({
            title: "提示",
            content: "限输入两位小数或整数！"
        }); else t.showModal({
            title: "提示",
            content: "请输入金额"
        });
    },
    toIndex: function() {
        wx.switchTab({
            url: "/pages/shop/index"
        });
    },
    loginSuccessCallback: function() {
        this.scanWxPayCode();
    },
    showCouponinfoPlug: function() {
        this.setData({
            couponinfoFlag: !this.data.couponinfoFlag
        });
    },
    getCouponsList: function() {
        var e = this;
        if ("" === this.data.money) return t.showModal({
            title: "提示",
            content: "请输入金额！"
        }), !1;
        t.sendRequest({
            url: "/index.php?c=Front/WxApp/BaseApi&a=getWxPayCodeCoupons",
            method: "POST",
            data: {
                money: this.data.money
            },
            success: function(t) {
                if (e.setData({
                    couponinfoFlag: !0
                }), t.success) {
                    var a = t.data.match_list;
                    0 === a.length ? e.setData({
                        canNoChooseToast: !0
                    }) : e.setData({
                        canNoChooseToast: !1
                    });
                    var o = t.data.no_match_list, n = a.concat(o);
                    n.forEach(function(t) {
                        0 == t.Type ? t.Amount = (t.Amount / 10).toString().replace(/([\.[1-9])0+$/, "$1").replace(/\.$/, "") : t.Amount = t.Amount.replace(/([\.[1-9])0+$/, "$1").replace(/\.$/, ""), 
                        t.OrderMoney = t.OrderMoney.replace(/([\.[1-9])0+$/, "$1").replace(/\.$/, ""), t.ExTime = t.ExTime.split(" ")[0], 
                        e.data.money < parseFloat(t.OrderMoney) ? t.canUse = !1 : t.canUse = !0;
                    }), e.setData({
                        couponList: n
                    });
                } else console.log("getCouponList fail" + t.msg);
            }
        });
    },
    onCouponChange: function(e) {
        var a = this, o = e.currentTarget.dataset.type, n = e.currentTarget.dataset.itemid, s = e.currentTarget.dataset.amount, i = e.currentTarget.dataset.idx, c = {};
        if (i > -1) {
            var d = this.data.couponList[i];
            if (a.data.money < parseFloat(d.OrderMoney)) return void t.showModal({
                title: "提示",
                content: "请重新选择优惠券！"
            });
            c = {
                ItemID: d.ItemID,
                Title: "0" === d.Type ? d.Amount / 10 + "折" : "消费满" + d.OrderMoney + "元减" + d.Amount + "元"
            };
        } else c = {
            ItemID: -1,
            Title: "不使用优惠券"
        };
        this.setData({
            couponTitleText: c,
            couponinfoFlag: !this.data.couponinfoFlag,
            useCouponID: -1 !== c.ItemID ? c.ItemID : ""
        }), this.setData({
            UseCouponInfo: {
                Type: o,
                ItemID: n,
                Amount: s
            }
        }), this.calWxPayCodeMoney();
    },
    canNoChoose: function() {
        this.data.canNoChooseToast ? t.showToast({
            title: "暂无优惠券可以使用哦~",
            icon: "none"
        }) : t.showToast({
            title: "此优惠券不可用",
            icon: "none"
        });
    },
    calWxPayCodeMoney: function() {
        var e = this;
        if (0 === this.data.money) return !1;
        t.sendRequest({
            url: "/index.php?c=Front/WxApp/BaseApi&a=calWxPayCodeMoney",
            method: "POST",
            data: {
                money: this.data.money,
                coupon_item_id: e.data.useCouponID
            },
            success: function(t) {
                if (t.success) {
                    var a = parseFloat(t.data.payMoney).toFixed(2);
                    e.setData({
                        moneyTip: a
                    });
                } else console.log("calFail" + t.msg);
            }
        });
    },
    scanWxPayCode: function() {
        if (0 === this.data.admin_id) return !1;
        t.sendRequest({
            url: "/index.php?c=Front/WxApp/BaseApi&a=scanWxPayCode",
            method: "POST",
            data: {
                admin_id: this.data.admin_id,
                store_id: this.data.store_id,
                money: this.data.money
            },
            success: function(t) {}
        });
    }
});