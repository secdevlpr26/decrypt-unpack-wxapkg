var t = require("../../../component/XYReserveTimeView-bak/XYReserveTimeView"), e = require("../../../comm/script/fetch"), a = require("../../../comm/script/config"), s = require("../../../util/util"), i = getApp(), o = require("../../../component/message/message.js");

require("../../../util/md5"), require("../../../util/jwt.js");

var n = require("../../../utils/server"), d = require("../../../util/util");

Page({
    timeView: void 0,
    data: {
        types: "请选择服务类型",
        typesv: -1,
        payWayList: [ {
            content: "微信",
            icon: "wx",
            input: !0
        }, {
            content: "支付宝",
            icon: "zfb",
            input: !0
        }, {
            content: "当面现金支付",
            icon: "xj",
            input: !1
        } ],
        isShowPlaceHold: !0,
        hasLogin: !1,
        phone: "",
        code: "",
        selectedAddress: {},
        time: "",
        remark: "",
        second: 60,
        getAuthCodeTextColor: "",
        disabled: !1,
        getSmsCode: "获取验证码",
        dateList: [],
        start_reservetime: "",
        next_reservetime: "",
        payment: "",
        account: "",
        mid: "",
        mname: "",
        mpic: "",
        bname: "",
        price: "",
        attr_fault_data: "",
        selectMouldList: []
    },
    inputName: function(t) {
        this.setData({
            name: t.detail.value
        });
    },
    selecttype: function() {
        var t = this;
        wx.showActionSheet({
            itemList: [ "上门回收", "邮寄回收" ],
            success: function(e) {
                0 == e.tapIndex ? t.setData({
                    types: "上门回收",
                    typesv: 0
                }) : t.setData({
                    types: "邮寄回收",
                    typesv: 1
                });
            }
        });
    },
    onTapTime: function() {
        var t = this;
        d.isEmpty(t.data.selectedAddress) ? o.show.call(t, {
            content: "请先选择地址",
            icon: "tip"
        }) : (t.timeView.setViewData(t.data.dateList), t.timeView.show());
    },
    onLoad: function(e) {
        o = this;
        n.getJSON("/Goods/goodsInfo", {
            id: e.goods_id
        }, function(t) {
            o.setData({
                goods: t.data.result.goods
            }), o.setData({
                spec: t.data.result.goods.goods_spec_list
            }), o.setData({
                info: t.data.result.goods.goods_spec_list
            }), o.setData({
                other: t.data.result.goods.other
            }), o.setData({
                price: t.data.result.spec_goods_price
            }), o.setData({
                editId: t.data.result.goods.goods_spec_list[0].id
            }), o.setData({
                progressRate: 100 / t.data.result.goods.goods_spec_list.length
            });
            var a = parseFloat(e.price);
            o.setData({
                shop_price: a
            }), t.data.result.goods.other.count;
        });
        var a = JSON.parse(e.otherFaultList), s = JSON.parse(e.faultList);
        this.setData({
            otherFaultList: a
        }), this.setData({
            faultList: s
        }), wx.getStorage({
            key: "address",
            success: function(t) {
                o.setData({
                    selectedAddress: t.data,
                    isShowPlaceHold: !1
                });
            }
        });
        var i = this;
        return i.timeView = new t.XYReserveTimeView(), i.timeView.init("phone", {
            onChange: function(t, e, a, s) {
                var o = "" + e, n = "" + a, d = "（含夜间费" + s + "元）";
                i.setData({
                    time: t,
                    start_reservetime: o,
                    next_reservetime: n,
                    night_fee: s,
                    nightFeeTitle: d
                });
            }
        }), void this.setData({
            userInfo: getApp().globalData.userInfo
        });
        var o;
    },
    onShow: function() {
        var t = this;
        t.getReserveTime(), console.log("onShow"), wx.getStorage({
            key: "address",
            success: function(e) {
                console.log(e), d.isExist(e.data) ? (t.setData({
                    selectedAddress: e.data,
                    isShowPlaceHold: !1
                }), t.getReserveTime()) : t.setData({
                    isShowPlaceHold: !0
                });
            }
        });
    },
    getReserveTime: function() {
        var t = this;
        n.getJSON("/User/getreservetime", function(e) {
            if (e = e.data, d.isExist(e.data)) {
                var a = e.data, s = e.notice;
                a[0].notice = s, t.setData({
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
        s.isExist(i.globalData.hwxUserInfo) ? t.setData({
            phone: i.globalData.hwxUserInfo.UserName,
            hasLogin: !0
        }) : (t.setData({
            phone: "",
            hasLogin: !1
        }), wx.removeStorage({
            key: a.storageKeys.selectedAddress,
            success: function(t) {}
        }));
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
        o.show.call(e, {
            content: "已发送" + e.data.phone,
            icon: "ok"
        }), n.getJSON("/User/send_sms_reg_code", {
            mobile: e.data.phone,
            user_id: getApp().globalData.userInfo.user_id
        }, function(t) {
            o.show.call(e, {
                content: "获取成功",
                icon: "ok"
            }), e.setData({
                disabled: !0
            });
        })) : o.show.call(e, {
            content: "请输入正确的手机号码",
            icon: "tip"
        }) : o.show.call(e, {
            content: "手机号码不能为空",
            icon: "tip"
        });
    },
    checkPhoneNum: function(t) {
        var e = this, a = s.isPhoneNum(t);
        return a || o.show.call(e, {
            content: "手机号码格式不正确",
            icon: "tip"
        }), a;
    },
    checkSmsCode: function(t) {
        var e = this;
        if (!e.data.hasLogin) {
            var a = !s.isBlank(t);
            return a || o.show.call(e, {
                content: "请输入验证码",
                icon: "tip"
            }), a;
        }
    },
    payWayTap: function(t) {
        var e = t.currentTarget.dataset.index;
        e !== this.data.payment ? this.setData({
            payment: e
        }) : this.setData({
            payment: ""
        });
    },
    payWayVal: function(t) {
        var e = t.detail.value;
        this.setData({
            account: e
        });
    },
    submit: function(t) {
        var e = this.data.data, a = this, s = this.data, i = this.data.selectedAddress, r = getApp(), c = this.data.payment, l = this.data.account, u = this.data.goods, h = this.data.shop_price, p = this.data.otherFaultList, g = this.data.faultList;
        if (-1 == this.data.typesv) return o.show.call(a, {
            content: "请选择服务方式",
            icon: "tip"
        }), !1;
        if (d.isEmpty(this.data.selectedAddress) && 0 == this.data.typesv) return o.show.call(a, {
            content: "请选择服务地址",
            icon: "tip"
        }), !1;
        if (!s.phone) return o.show.call(a, {
            content: "请输入手机号码",
            icon: "tip"
        }), !1;
        if (!s.code) return o.show.call(a, {
            content: "请输入验证码",
            icon: "tip"
        }), !1;
        if (!s.time && 0 == this.data.typesv) return o.show.call(a, {
            content: "选择上门时间",
            icon: "tip"
        }), !1;
        if (!c && 0 != c) return o.show.call(a, {
            content: "选择支付方式",
            icon: "tip"
        }), !1;
        if (c < 2 && !l) return o.show.call(a, {
            content: "请输入账户",
            icon: "tip"
        }), !1;
        this.data.time;
        console.log(e), wx.showToast({
            title: "提交预约中...",
            icon: "loading",
            duration: 1e4
        }), void 0 == s.remark && (s.remark = "");
        s.coupon && (s.coupon.id, s.coupon.money), 0 == this.data.typesv ? n.getJSON("/Cart/addROrder", {
            type: s.typesv,
            mobile: s.phone,
            consignee: i.contacts,
            address: i.address,
            province: i.province,
            city: i.city,
            district: i.district,
            payment: c,
            account: l,
            orderTime: s.time,
            modelID: u.goods_id,
            repairWay: 72,
            otherFaultList: JSON.stringify(p),
            faultList: JSON.stringify(g),
            order_amount: h,
            desc: s.remark,
            goods_id: u.goods_id,
            user_id: r.globalData.userInfo.user_id
        }, function(t) {
            if (1 == t.data.status) {
                wx.showToast({
                    title: t.data.msg
                });
                var e = t.data.id;
                wx.redirectTo({
                    url: "../orderDetail/orderDetail?id=" + e
                });
            } else wx.showToast({
                title: t.data.msg
            });
        }) : n.getJSON("/Cart/addROrder", {
            type: s.typesv,
            mobile: s.phone,
            consignee: s.name,
            address: "",
            province: "",
            city: "",
            district: "",
            payment: c,
            account: l,
            orderTime: "",
            modelID: u.goods_id,
            repairWay: 72,
            otherFaultList: JSON.stringify(p),
            faultList: JSON.stringify(g),
            order_amount: h,
            desc: s.remark,
            goods_id: u.goods_id,
            user_id: r.globalData.userInfo.user_id
        }, function(t) {
            if (1 == t.data.status) {
                wx.showToast({
                    title: t.data.msg
                });
                var e = t.data.id;
                wx.redirectTo({
                    url: "../orderDetail/orderDetail?id=" + e
                });
            } else wx.showToast({
                title: t.data.msg
            });
        });
    },
    createOrder: function() {
        var t = this;
        if (s.isEmpty(t.data.selectedAddress)) o.show.call(t, {
            content: "请先选择地址",
            icon: "tip"
        }); else if (s.isEmpty(t.data.next_reservetime)) o.show.call(t, {
            content: "请选择预约时间",
            icon: "tip"
        }); else if ("" !== t.data.payment) if ("" !== t.data.account || 2 == t.data.payment) {
            wx.showLoading({
                title: "正在下单中",
                mask: !0
            });
            var a = encodeURI(this.data.account), i = this.data.start_reservetime, n = this.data.code, d = encodeURI(this.data.selectedAddress.contacts), r = this.data.phone, c = this.data.selectedAddress.districtID, l = encodeURI(this.data.selectedAddress.address), u = this.data.payment, h = encodeURI(this.data.remark), p = "", g = "";
            this.data.selectMouldList.forEach(function(t, e, a) {
                p += t.attrFault, e != a.length - 1 && (p += ",");
            }), g = "[" + p + "]", e.createRecycleOrder(a, l, g, d, c, u, h, i, n, r, 10, function(e) {
                if (wx.hideLoading(), e.length > 1) return o.show.call(t, {
                    content: "下单成功，请在我的订单内查看",
                    icon: "tip"
                }), void setTimeout(function() {
                    wx.redirectTo({
                        url: "../../personal/myOrder/myOrder"
                    });
                }, 1500);
                t.toOrderDetail(e[0].order_num);
            }, function(e) {
                wx.hideLoading(), o.show.call(t, {
                    icon: "tip",
                    content: e
                });
            });
        } else o.show.call(t, {
            content: "请填写收款账号",
            icon: "tip"
        }); else o.show.call(t, {
            content: "请选择支付方式",
            icon: "tip"
        });
    },
    toOrderDetail: function(t) {
        var e = t;
        wx.redirectTo({
            url: "../orderDetail/orderDetail?id=" + e
        });
    },
    toUserAgreement: function() {
        wx.navigateTo({
            url: "../../repair/userAgreement/userAgreement"
        });
    },
    stopTouchMove: function() {},
    stopTap: function() {}
});