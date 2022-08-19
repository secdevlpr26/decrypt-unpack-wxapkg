require("../../../component/XYReserveTimeView/XYReserveTimeView");

var t, e = require("../../../comm/script/fetch"), a = require("../../../comm/script/config"), s = require("../../../util/util"), o = getApp(), i = require("../../../component/message/message.js"), d = require("../../../utils/server");

Page({
    timeView: void 0,
    data: {
        types: "邮寄",
        typesv: 0,
        discountNum: 0,
        curTicket: "",
        ticketTxt: "选择优惠券",
        message: {},
        isShowPlaceHold: !0,
        city_id: "",
        mouldId: "",
        mouldName: "",
        colorId: "",
        plan: {},
        hasLogin: !1,
        phone: "",
        code: "1111",
        selectedAddress: {},
        time: "",
        totalPrice: 0,
        remark: "",
        couponId: "",
        protectFlag: "",
        second: 60,
        getAuthCodeTextColor: "",
        disabled: !1,
        getSmsCode: "获取验证码",
        dateList: [],
        start_reservetime: "",
        next_reservetime: "",
        night_fee: 0,
        nightFeeTitle: ""
    },
    selecttype: function() {
        var t = this;
        wx.showActionSheet({
            itemList: [ "邮寄", "自提" ],
            success: function(e) {
                0 == e.tapIndex ? t.setData({
                    types: "邮寄",
                    typesv: 0
                }) : 1 == e.tapIndex && t.setData({
                    types: "自提",
                    typesv: 1
                }), t.sum();
            }
        });
    },
    selectStore: function() {
        wx.navigateTo({
            url: "../../storeAddress/storeAddress?back=1"
        });
    },
    onTapTime: function() {
        var t = this;
        t.timeView.setViewData(t.data.dateList), t.timeView.show();
    },
    onLoad: function(t) {
        var e = this;
        getApp().globalData.store = void 0, e.setData({
            price: t.price
        }), e.setData({
            model_id: t.model_id
        }), e.setData({
            spec_id: t.spec_id
        }), e.setData({
            spec_item_id: t.spec_item_id
        }), e.setData({
            tprice: t.price
        }), wx.getStorage({
            key: "address",
            success: function(t) {
                e.setData({
                    selectedAddress: t.data,
                    isShowPlaceHold: !1
                });
            }
        });
    },
    sum: function() {
        var t, e = this, a = e.data.totalPrice, s = e.data.coupon, o = e.data.typesv, i = parseFloat(e.data.shipper), d = parseFloat(a.goods_price);
        t = s ? parseFloat(d) - parseFloat(s.money) : parseFloat(d), 0 == o && (t += i), 
        e.setData({
            price: t
        }), e.setData({
            price: t
        });
    },
    onShow: function() {
        var e = getApp().globalData.userInfo.user_id, a = this, o = getApp(), i = a;
        getApp().globalData.store ? this.setData({
            isstore: !0,
            store: getApp().globalData.store
        }) : this.setData({
            isstore: !1
        }), console.log("onShow"), wx.getStorage({
            key: "address",
            success: function(t) {
                console.log(t), s.isExist(t.data) ? i.setData({
                    selectedAddress: t.data,
                    isShowPlaceHold: !1
                }) : i.setData({
                    isShowPlaceHold: !0
                });
            }
        }), d.getJSON("/Cart/cart2/user_id/" + e, function(e) {
            if (-2 != e.data.status) {
                var s = o.globalData.userInfo;
                s.user_money = e.data.result.userInfo.user_money, s.pay_points = e.data.result.userInfo.pay_points, 
                o.globalData.userInfo = s;
                var i = e.data.result.shipper, d = e.data.result.addressList, n = e.data.result.cartList, r = e.data.result.userInfo, c = e.data.result.totalPrice;
                t = c.total_fee, a.setData({
                    address: d,
                    cartList: n,
                    userInfo: r,
                    totalPrice: c,
                    shipper: i
                });
                var l = c.total_fee;
                a.setData({
                    price: l
                }), a.sum(), wx.getStorage({
                    key: "coupon",
                    success: function(t) {
                        var e = t.data;
                        a.setData({
                            coupon: e
                        }), a.sum();
                    }
                });
            } else wx.navigateBack({
                delta: 1,
                success: function(t) {},
                fail: function(t) {},
                complete: function(t) {}
            });
        });
    },
    getReserveTime: function() {
        var t = this;
        d.getJSON("/User/getreservetime", function(e) {
            if (e = e.data, s.isExist(e.data)) {
                var a = e.data, o = e.notice;
                a[0].notice = o, t.setData({
                    dateList: a
                });
            }
        });
    },
    getCityId: function() {
        var t = this, s = wx.getStorageSync(a.storageKeys.selectedAddress);
        e.getCityInfo.call(t, s.province, s.city, s.district, function(e) {
            s.cityID = e.city_id, t.setData({
                selectedAddress: s
            }), wx.setStorage({
                key: a.storageKeys.selectedAddress,
                data: s
            }), t.getReserveTime();
        }, function(t) {});
    },
    countdown: function(t) {
        var e = t.data.second;
        0 !== e ? setTimeout(function() {
            t.setData({
                second: e - 1,
                getSmsCode: "(" + e + ")重新发送",
                getAuthCodeTextColor: "#CCC",
                disabled: !0
            }), t.countdown(t);
        }, 1e3) : t.setData({
            second: 60,
            getSmsCode: "获取验证码",
            getAuthCodeTextColor: "#ff5000",
            disabled: !1
        });
    },
    loadUserData: function() {
        var t = this;
        s.isExist(o.globalData.hwxUserInfo) ? t.setData({
            hasLogin: !0
        }) : t.setData({
            hasLogin: !1
        });
    },
    inputPhone: function(t) {
        this.setData({
            phone: t.detail.value
        });
    },
    inputCode: function(t) {
        this.setData({
            code: t.detail.value
        });
    },
    bindDateChange: function(t) {
        this.setData({
            date: t.detail.value
        });
    },
    bindTimeChange: function(t) {
        this.setData({
            time_point: t.detail.value
        });
    },
    inputDetail: function(t) {
        this.setData({
            remark: t.detail.value
        });
    },
    selectAddress: function(t) {
        wx.navigateTo({
            url: "../../personal/addAddress/addAddress?selectedAddress=" + JSON.stringify(this.data.selectedAddress)
        });
    },
    goToOrderDetail: function(t) {
        wx.redirectTo({
            url: "../orderDetail/orderDetail?id=" + t
        });
    },
    sendCode: function(t) {
        var e = this;
        0 !== e.data.phone.length ? e.checkPhoneNum(e.data.phone) ? e.data.disabled || (e.countdown(e), 
        i.show.call(e, {
            content: "已发送" + e.data.phone,
            icon: "ok"
        }), d.getJSON("/User/send_sms_reg_code", {
            mobile: e.data.phone,
            user_id: getApp().globalData.userInfo.user_id
        }, function(t) {
            i.show.call(e, {
                content: "获取成功",
                icon: "ok"
            }), e.setData({
                disabled: !0
            });
        })) : i.show.call(e, {
            content: "请输入正确的手机号码",
            icon: "tip"
        }) : i.show.call(e, {
            content: "手机号码不能为空",
            icon: "tip"
        });
    },
    checkPhoneNum: function(t) {
        var e = this, a = s.isPhoneNum(t);
        return a || i.show.call(e, {
            content: "手机号码格式不正确",
            icon: "tip"
        }), a;
    },
    checkSmsCode: function(t) {
        var e = this;
        if (e.data.hasLogin) return !0;
        var a = !s.isBlank(t);
        return a || i.show.call(e, {
            content: "请输入验证码",
            icon: "tip"
        }), a;
    },
    submit: function(t) {
        console.log(s);
        var e = this.data, a = this.data.selectedAddress, s = this;
        if (0 == this.data.typesv && (!a || void 0 == a.address_name)) return i.show.call(s, {
            content: "请选择服务地址",
            icon: "tip"
        }), !1;
        wx.showToast({
            title: "提交支付中...",
            icon: "loading",
            duration: 1e4
        }), void 0 == e.remark && (e.remark = "");
        var o = 0, n = this.data.typesv;
        this.data.coupon && (o = this.data.coupon.id);
        getApp().globalData.userInfo.user_id;
        var r = this, c = getApp(), l = 0;
        if (1 == this.data.typesv) {
            if (!this.data.store) return void wx.showToast({
                title: "请选择自提点"
            });
            l = this.data.store.article_id;
        }
        this.data.couponCode;
        d.getJSON("/Cart/cart3/act/submit_order", {
            mobile: e.phone,
            consignee: a.contacts,
            address: a.address,
            province: a.province,
            city: a.city,
            district: a.district,
            desc: e.remark,
            coupon_price: 0,
            coupon_id: o,
            type: n,
            store_id: l,
            user_id: c.globalData.userInfo.user_id
        }, function(t) {
            try {
                wx.removeStorageSync("coupon");
            } catch (t) {}
            if (1 == t.data.status) {
                t.data.result;
                if (c.globalData.wxdata = t.data.data, c.globalData.order = t.data.order, 1 == t.data.status) {
                    wx.showToast({
                        title: "提交成功",
                        duration: 2e3
                    });
                    var e = c.globalData.order, a = c.globalData.wxdata;
                    r.setData({
                        order: e,
                        wxdata: a
                    });
                    var s = e.order_id;
                    r.pay(s);
                }
            } else wx.showToast({
                title: t.data.msg,
                duration: 2e3
            });
        });
    },
    pay: function(t) {
        var e = getApp().globalData.wxdata.wdata, a = e.timeStamp + "", s = e.nonceStr + "", o = e.package, i = e.sign;
        wx.requestPayment({
            nonceStr: s,
            package: o,
            signType: "MD5",
            timeStamp: a,
            paySign: i,
            success: function(t) {
                wx.showToast({
                    title: "支付成功",
                    icon: "success",
                    duration: 2e3
                }), setTimeout(function() {
                    wx.navigateBack({
                        delta: 2
                    });
                }, 2e3);
            },
            fail: function(t) {
                wx.showToast({
                    title: "支付失败",
                    icon: "success",
                    duration: 2e3
                }), setTimeout(function() {
                    wx.navigateBack({
                        delta: 2
                    });
                }, 2e3);
            }
        });
    },
    createOrder: function() {
        var t = this;
        s.isEmpty(t.data.selectedAddress) ? i.show.call(t, {
            content: "请先选择地址",
            icon: "tip"
        }) : s.isEmpty(t.data.next_reservetime) ? i.show.call(t, {
            content: "请选择预约时间",
            icon: "tip"
        }) : (wx.showLoading({
            title: "正在下单中",
            mask: !0
        }), e.createOrder.call(t, t.data.plan.Id, t.data.mouldId, t.data.colorId, t.data.phone, t.data.selectedAddress.contacts, t.data.selectedAddress.cityID, t.data.selectedAddress.districtID, t.data.selectedAddress.address, t.data.start_reservetime, t.data.next_reservetime, t.data.remark, t.data.selectedAddress.lng, t.data.selectedAddress.lat, t.data.couponId, t.data.protectFlag, function(e) {
            wx.hideLoading(), t.goToOrderDetail(e);
        }, function(e) {
            wx.hideLoading(), i.show.call(t, {
                content: e
            });
        }));
    },
    chooseTicket: function() {
        wx.navigateTo({
            url: "../../personal/selectTicket/selectTicket?price=" + this.data.price
        });
    },
    toTicketPage: function() {
        var t = this.data.couponId, e = this.data.plan.Id, a = this.data.selectedAddress.cityID;
        wx.navigateTo({
            url: "../../personal/selectTicket/selectTicket?planId=" + e + "&cityId=" + a + "&couponId=" + t
        });
    },
    setTicket: function(t) {
        var e = this, a = 0, s = "", o = this.data.plan, i = Number(o.Price) + Number(o.brand_home_visit_fee) + Number(o.brand_manual_fee) + Number(e.data.night_fee);
        1 == t.type ? (s = t.coupon_project + "折", a = (Number(e.data.totalPrice) * (10 - Number(t.coupon_project)) / 10).toFixed(2)) : s = "减" + (a = Number(t.coupon_project.split("|").pop().split(",").pop()).toFixed(2)) + "元", 
        i = (Number(i) - Number(a)).toFixed(2), this.setData({
            discountNum: a,
            ticketTxt: s,
            totalPrice: i,
            couponId: t.id
        });
    },
    toUserAgreement: function() {
        wx.navigateTo({
            url: "../userAgreement/userAgreement"
        });
    },
    stopTouchMove: function() {},
    stopTap: function() {}
});