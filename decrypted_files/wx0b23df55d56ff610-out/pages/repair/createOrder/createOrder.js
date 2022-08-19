var e = require("../../../component/XYReserveTimeView/XYReserveTimeView"), t = require("../../../comm/script/fetch"), a = require("../../../comm/script/config"), o = require("../../../util/util"), i = getApp(), s = require("../../../component/message/message.js"), d = require("../../../utils/server");

Page({
    timeView: void 0,
    data: {
        types: "请选择服务类型",
        typesv: -1,
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
        code: "",
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
        var e = this;
        wx.showActionSheet({
            itemList: [ "上门维修", "到店维修", "邮寄维修" ],
            success: function(t) {
                0 == t.tapIndex ? e.setData({
                    types: "上门维修",
                    typesv: 0
                }) : 1 == t.tapIndex ? e.setData({
                    types: "到店维修",
                    typesv: 1
                }) : e.setData({
                    types: "邮寄维修",
                    typesv: 2
                });
            }
        });
    },
    selectStore: function() {
        wx.navigateTo({
            url: "../../storeAddress/storeAddress?back=1&type=" + this.data.phone1.ptype
        });
    },
    onTapTime: function() {
        var e = this;
        e.timeView.setViewData(e.data.dateList), e.timeView.show();
    },
    onLoad: function(t) {
        var s = this;
        this.setData({
            yy: getApp().globalData.userInfo.yy
        }), getApp().globalData.store = void 0, s.setData({
            price: t.price
        }), s.setData({
            color_id: t.color_id
        }), s.setData({
            model_id: t.model_id
        }), s.setData({
            spec_id: t.spec_id
        }), s.setData({
            spec_item_id: t.spec_item_id
        }), s.setData({
            tprice: t.price
        }), wx.getStorage({
            key: "address",
            success: function(e) {
                s.setData({
                    selectedAddress: e.data,
                    isShowPlaceHold: !1
                });
            }
        });
        var r = this;
        d.getJSON("/Goods/phone", {
            model_id: t.model_id
        }, function(e) {
            var t = e.data.data;
            r.setData({
                phone1: t
            });
        });
        var n = JSON.parse(t.spec_item_id);
        this.setData({
            sp: n
        }), s.timeView = new e.XYReserveTimeView(), s.timeView.init("phone", {
            onChange: function(e, t, a, o) {
                var i = "" + t, d = "" + a, r = "（含夜间费" + o + "元）";
                s.setData({
                    time: e,
                    start_reservetime: i,
                    next_reservetime: d,
                    night_fee: o,
                    nightFeeTitle: r
                });
            }
        });
        var c = JSON.parse(t.selectedPlan);
        s.setData({
            mouldId: t.mouldId,
            mouldName: t.mouldName,
            colorId: t.color,
            plan: c,
            totalPrice: Number(c.Price) + Number(c.brand_home_visit_fee) + Number(c.brand_manual_fee) + Number(s.data.night_fee),
            getAuthCodeTextColor: "#ff5000",
            hudHidden: !1
        }), o.isEmpty(i.globalData.hwxUserInfo) && wx.removeStorage({
            key: a.storageKeys.selectedAddress,
            success: function(e) {}
        });
    },
    pay2: function() {
        var e = this.data.info.order_id, t = this.data.info.order_amount;
        wx.navigateTo({
            url: "../../pay/pay?orderid=" + e + "&order_amount=" + t + "&type=" + this.data.typesv
        });
    },
    onShow: function() {
        var e = this;
        e.getReserveTime(), getApp().globalData.store ? this.setData({
            isstore: !0,
            store: getApp().globalData.store
        }) : this.setData({
            isstore: !1
        }), wx.getStorage({
            key: "coupon",
            success: function(t) {
                var a = t.data;
                if (a) {
                    e.setData({
                        coupon: a
                    });
                    var o = parseFloat(e.data.tprice) - parseFloat(a.money);
                    e.setData({
                        price: o
                    });
                }
            }
        }), console.log("onShow"), wx.getStorage({
            key: "address",
            success: function(t) {
                console.log(t), o.isExist(t.data) ? (e.setData({
                    selectedAddress: t.data,
                    isShowPlaceHold: !1
                }), e.getReserveTime()) : e.setData({
                    isShowPlaceHold: !0
                });
            }
        }), this.loadUserData();
    },
    getReserveTime: function() {
        var e = this;
        d.getJSON("/User/getreservetime", function(t) {
            if (t = t.data, o.isExist(t.data)) {
                var a = t.data, i = t.notice;
                a[0].notice = i, e.setData({
                    dateList: a
                });
            }
        });
    },
    getCityId: function() {
        var e = this, o = wx.getStorageSync(a.storageKeys.selectedAddress);
        t.getCityInfo.call(e, o.province, o.city, o.district, function(t) {
            o.cityID = t.city_id, e.setData({
                selectedAddress: o
            }), wx.setStorage({
                key: a.storageKeys.selectedAddress,
                data: o
            }), e.getReserveTime();
        }, function(e) {});
    },
    countdown: function(e) {
        var t = e.data.second;
        0 !== t ? setTimeout(function() {
            e.setData({
                second: t - 1,
                getSmsCode: "(" + t + ")重新发送",
                getAuthCodeTextColor: "#CCC",
                disabled: !0
            }), e.countdown(e);
        }, 1e3) : e.setData({
            second: 60,
            getSmsCode: "获取验证码",
            getAuthCodeTextColor: "#ff5000",
            disabled: !1
        });
    },
    loadUserData: function() {
        var e = this;
        o.isExist(i.globalData.hwxUserInfo) ? e.setData({
            hasLogin: !0
        }) : e.setData({
            hasLogin: !1
        });
    },
    inputPhone: function(e) {
        this.setData({
            phone: e.detail.value
        });
    },
    inputName: function(e) {
        this.setData({
            name: e.detail.value
        });
    },
    inputCode: function(e) {
        this.setData({
            code: e.detail.value
        });
    },
    bindDateChange: function(e) {
        this.setData({
            date: e.detail.value
        });
    },
    bindTimeChange: function(e) {
        this.setData({
            time_point: e.detail.value
        });
    },
    inputDetail: function(e) {
        this.setData({
            remark: e.detail.value
        });
    },
    selectAddress: function(e) {
        wx.navigateTo({
            url: "../../personal/addAddress/addAddress?selectedAddress=" + JSON.stringify(this.data.selectedAddress) + "&type=" + this.data.typesv
        });
    },
    goToOrderDetail: function(e) {
        wx.redirectTo({
            url: "../orderDetail/orderDetail?id=" + e
        });
    },
    sendCode: function(e) {
        var t = this;
        0 !== t.data.phone.length ? t.checkPhoneNum(t.data.phone) ? t.data.disabled || (t.countdown(t), 
        s.show.call(t, {
            content: "已发送" + t.data.phone,
            icon: "ok"
        }), d.getJSON("/User/send_sms_reg_code", {
            mobile: t.data.phone,
            user_id: getApp().globalData.userInfo.user_id
        }, function(e) {
            s.show.call(t, {
                content: "获取成功",
                icon: "ok"
            }), t.setData({
                disabled: !0
            });
        })) : s.show.call(t, {
            content: "请输入正确的手机号码",
            icon: "tip"
        }) : s.show.call(t, {
            content: "手机号码不能为空",
            icon: "tip"
        });
    },
    checkPhoneNum: function(e) {
        var t = this, a = o.isPhoneNum(e);
        return a || s.show.call(t, {
            content: "手机号码格式不正确",
            icon: "tip"
        }), a;
    },
    checkSmsCode: function(e) {
        var t = this;
        if (t.data.hasLogin) return !0;
        var a = !o.isBlank(e);
        return a || s.show.call(t, {
            content: "请输入验证码",
            icon: "tip"
        }), a;
    },
    pay: function(e) {
        var t = getApp().globalData.wxdata.wdata, a = t.timeStamp + "", o = t.nonceStr + "", i = t.package, s = t.sign;
        wx.requestPayment({
            nonceStr: o,
            package: i,
            signType: "MD5",
            timeStamp: a,
            paySign: s,
            success: function(t) {
                console.log(t), wx.redirectTo({
                    url: "../orderDetail/orderDetail?id=" + e
                });
            },
            fail: function(e) {
                console.log(e), wx.showToast({
                    title: "支付失败",
                    icon: "success",
                    duration: 2e3
                }), setTimeout(function() {
                    wx.navigateBack({
                        delta: 1,
                        success: function(e) {},
                        fail: function() {},
                        complete: function() {}
                    });
                }, 2e3);
            }
        });
    },
    submit: function(e) {
        var t = this;
        if (-1 == this.data.typesv) return s.show.call(t, {
            content: "请选择服务类型",
            icon: "tip"
        }), !1;
        var a = this.data.data, i = 0, r = this, n = this.data, c = this.data.selectedAddress, l = getApp();
        if (o.isEmpty(c) && (0 == this.data.typesv || 2 == this.data.typesv)) return s.show.call(t, {
            content: "请选择服务地址",
            icon: "tip"
        }), !1;
        var u = this.data.isstore;
        if (!u && 1 == this.data.typesv) return s.show.call(t, {
            content: "请选择门店地址",
            icon: "tip"
        }), !1;
        if (u && (i = this.data.store.article_id), !n.phone) return s.show.call(t, {
            content: "请输入手机号码",
            icon: "tip"
        }), !1;
        if (!n.code) return s.show.call(t, {
            content: "请输入验证码",
            icon: "tip"
        }), !1;
        if (!n.time && 2 != this.data.typesv) return s.show.call(t, {
            content: "选择上门时间",
            icon: "tip"
        }), !1;
        this.data.time;
        console.log(a), wx.showToast({
            title: "提交预约中...",
            icon: "loading",
            duration: 1e4
        }), void 0 == n.remark && (n.remark = "");
        var p = 0, m = 0;
        if (n.coupon && (p = n.coupon.id, m = n.coupon.money), 0 == n.typesv) d.getJSON("/Cart/addOrder", {
            type: n.typesv,
            mobile: n.phone,
            yy: n.yy,
            consignee: c.contacts,
            address: c.address,
            province: c.province,
            city: c.city,
            district: c.district,
            combTampArr: n.spec_item_id,
            orderTime: n.time,
            modelID: n.model_id,
            repairWay: 72,
            total_amount: n.tprice,
            order_amount: n.price,
            desc: n.remark,
            code: n.code,
            coupon_price: m,
            couponID: p,
            la: c.lat,
            lo: c.lng,
            user_id: l.globalData.userInfo.user_id,
            colorID: n.color_id
        }, function(e) {
            if (n.yy > 0) return getApp().globalData.wxdata = e.data.result, void r.pay(e.data.order_id);
            if (1 == e.data.status) {
                wx.showToast({
                    title: e.data.msg
                });
                var t = e.data.id;
                wx.redirectTo({
                    url: "../orderDetail/orderDetail?id=" + t
                });
            } else wx.showToast({
                title: e.data.msg
            });
        }); else if (1 == n.typesv) {
            if (void 0 == this.data.name) return s.show.call(t, {
                content: "请输入姓名",
                icon: "tip"
            }), !1;
            d.getJSON("/Cart/addOrder", {
                type: n.typesv,
                yy: n.yy,
                mobile: n.phone,
                consignee: this.data.name,
                address: "",
                province: "",
                city: "",
                district: "",
                combTampArr: n.spec_item_id,
                orderTime: n.time,
                modelID: n.model_id,
                repairWay: 72,
                code: n.code,
                total_amount: n.tprice,
                order_amount: n.price,
                desc: n.remark,
                store_id: i,
                coupon_price: m,
                couponID: p,
                user_id: l.globalData.userInfo.user_id,
                colorID: n.color_id
            }, function(e) {
                if (n.yy > 0) return getApp().globalData.wxdata = e.data.result, void r.pay(e.data.order_id);
                if (1 == e.data.status) {
                    wx.showToast({
                        title: e.data.msg
                    });
                    var t = e.data.id;
                    wx.redirectTo({
                        url: "../orderDetail/orderDetail?id=" + t
                    });
                } else wx.showToast({
                    title: e.data.msg
                });
            });
        } else d.getJSON("/Cart/addOrder", {
            type: n.typesv,
            yy: n.yy,
            mobile: n.phone,
            consignee: c.contacts,
            address: c.address,
            province: c.province,
            city: c.city,
            district: c.district,
            combTampArr: n.spec_item_id,
            orderTime: "",
            code: n.code,
            modelID: n.model_id,
            repairWay: 72,
            total_amount: n.tprice,
            order_amount: n.price,
            desc: n.remark,
            coupon_price: m,
            couponID: p,
            user_id: l.globalData.userInfo.user_id,
            colorID: n.color_id
        }, function(e) {
            if (n.yy > 0) return getApp().globalData.wxdata = e.data.result, void r.pay(e.data.order_id);
            if (1 == e.data.status) {
                wx.showToast({
                    title: e.data.msg
                });
                var t = e.data.id;
                e.data.order_amount;
                wx.redirectTo({
                    url: "../orderDetail/orderDetail?id=" + t
                });
            } else wx.showToast({
                title: e.data.msg
            });
        });
    },
    createOrder: function() {
        var e = this;
        o.isEmpty(e.data.selectedAddress) ? s.show.call(e, {
            content: "请先选择地址",
            icon: "tip"
        }) : o.isEmpty(e.data.next_reservetime) ? s.show.call(e, {
            content: "请选择预约时间",
            icon: "tip"
        }) : (wx.showLoading({
            title: "正在下单中",
            mask: !0
        }), t.createOrder.call(e, e.data.plan.Id, e.data.mouldId, e.data.colorId, e.data.phone, e.data.selectedAddress.contacts, e.data.selectedAddress.cityID, e.data.selectedAddress.districtID, e.data.selectedAddress.address, e.data.start_reservetime, e.data.next_reservetime, e.data.remark, e.data.selectedAddress.lng, e.data.selectedAddress.lat, e.data.couponId, e.data.protectFlag, function(t) {
            wx.hideLoading(), e.goToOrderDetail(t);
        }, function(t) {
            wx.hideLoading(), s.show.call(e, {
                content: t
            });
        }));
    },
    chooseTicket: function() {
        wx.navigateTo({
            url: "../../personal/selectTicket/selectTicket"
        });
    },
    toTicketPage: function() {
        var e = this.data.couponId, t = this.data.plan.Id, a = this.data.selectedAddress.cityID;
        wx.navigateTo({
            url: "../../personal/selectTicket/selectTicket?planId=" + t + "&cityId=" + a + "&couponId=" + e
        });
    },
    setTicket: function(e) {
        var t = this, a = 0, o = "", i = this.data.plan, s = Number(i.Price) + Number(i.brand_home_visit_fee) + Number(i.brand_manual_fee) + Number(t.data.night_fee);
        1 == e.type ? (o = e.coupon_project + "折", a = (Number(t.data.totalPrice) * (10 - Number(e.coupon_project)) / 10).toFixed(2)) : o = "减" + (a = Number(e.coupon_project.split("|").pop().split(",").pop()).toFixed(2)) + "元", 
        s = (Number(s) - Number(a)).toFixed(2), this.setData({
            discountNum: a,
            ticketTxt: o,
            totalPrice: s,
            couponId: e.id
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