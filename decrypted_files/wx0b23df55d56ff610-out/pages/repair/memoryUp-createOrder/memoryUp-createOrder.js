var t, e = require("../../../util/util"), i = require("../../../comm/script/fetch"), a = require("../../../component/message/message.js"), n = getApp(), o = require("../../../utils/server"), s = require("../../../comm/script/qqmap-wx-jssdk.js"), c = require("../../../util/util");

Page({
    data: {
        repairCenter: [],
        index: 0,
        totalPrice: "--元",
        getAuthCodeTextColor: "",
        hasLogin: !1,
        lat: "",
        lng: "",
        address: "",
        uname: "",
        province_id: "",
        city_id: "",
        district_id: "",
        disaled: !1,
        getSmsCode: "获取验证码",
        second: 60,
        cxfs_css: "",
        phoneNum: "",
        smsCode: "",
        provinceIndex: 0,
        cityIndex: 0,
        districtIndex: 0,
        cityArr: [],
        districtArr: [],
        provinceArr: [],
        mouldList: [],
        faultList: [],
        selectedMould: {},
        selectedFault: {}
    },
    onLoad: function(e) {
        this.getMemoryPrice(), t = new s({
            key: "ZMGBZ-XORRU-7L7VC-4PU2Q-3E652-R3F44"
        });
    },
    onShow: function() {},
    creatOrderRequest: function() {
        var t = this;
        i.memoryUpCreatOrder.call(t, t.data.uname, t.data.phoneNum, t.data.address, t.data.province_id, t.data.city_id, t.data.district_id, t.data.selectedMould.mould_id, 135, t.data.selectedFault.fdid, t.data.selectedFault.price, t.data.repairCenter[t.data.index].id, function(e) {
            t.setData({
                address: "",
                uname: "",
                smscode: "",
                disabled: !1
            }), a.show.call(t, {
                content: "下单成功,订单：" + e.oid,
                icon: "ok"
            }), wx.navigateTo({
                url: "../orderSubmitted/orderSubmitted?oid=" + e.oid + "&price=" + e.price
            });
        }, function(e) {
            a.show.call(t, {
                content: e,
                icon: "tip"
            });
        });
    },
    loginRequest: function(t) {
        var e = this;
        i.doLoginWithPhone.call(e, e.data.phoneNum, e.data.smsCode, function(t) {
            e.setData({
                hasLogin: !0,
                disabled: !1
            }), n.setHwxUserInfo(t), e.creatOrderRequest();
        }, function(t) {
            a.show.call(e, {
                content: t,
                icon: "tip"
            });
        });
    },
    smsCodeRequest: function(t) {
        var e = this;
        o.getJSON("/User/send_sms_reg_code", {
            mobile: e.data.phoneNum,
            user_id: getApp().globalData.userInfo.user_id
        }, function(t) {});
    },
    getProvinceList: function(t) {
        var e = this;
        i.getProvinceList.call(e, function(t) {
            e.setData({
                provinceArr: t,
                province_id: t[0].province_id
            }), e.getCityList(t[0].province_id);
        }, function(t) {
            a.show.call(e, {
                content: t,
                icon: "tip"
            });
        });
    },
    getCityList: function(t) {
        var e = this;
        i.getCityListByProvince.call(e, t, function(t) {
            e.setData({
                cityArr: t,
                city_id: t[0].city_id
            }), e.getDistrictList(t[0].city_id);
        }, function(t) {
            a.show.call(e, {
                content: t,
                icon: "tip"
            });
        });
    },
    getDistrictList: function(t) {
        var e = this;
        i.getDistrictList.call(e, t, function(t) {
            e.setData({
                districtArr: t,
                districtIndex: 0,
                district_id: t[0].district_id
            });
        }, function(t) {
            a.show.call(e, {
                content: t,
                icon: "tip"
            });
        });
    },
    getMemoryPrice: function(t) {
        e = this;
        return void o.getJSON("/Goods/getMemoryList", function(t) {
            e.setData({
                mouldList: t.data.mouldList
            }), e.setData({
                selectedMould: t.data.mouldList[0]
            }), e.setData({
                faultList: t.data.mouldList[0].faults.spec_item
            });
        });
        var e;
    },
    submit: function(t) {
        var e = this;
        if ("--元" != e.data.totalPrice) {
            var i = this.data.data, n = this.data, s = this.data.selectedAddress, d = getApp();
            if (c.isEmpty(s)) return a.show.call(e, {
                content: "请选择服务地址",
                icon: "tip"
            }), !1;
            if (!n.uname) return a.show.call(e, {
                content: "请输入姓名",
                icon: "tip"
            }), !1;
            if (!n.phoneNum) return a.show.call(e, {
                content: "请输入手机号码",
                icon: "tip"
            }), !1;
            if (!n.smsCode) return a.show.call(e, {
                content: "请输入验证码",
                icon: "tip"
            }), !1;
            this.data.time;
            console.log(i), wx.showToast({
                title: "提交预约中...",
                icon: "loading",
                duration: 1e4
            }), void 0 == n.remark && (n.remark = "");
            var r = 0, u = 0;
            n.coupon && (r = n.coupon.id, u = n.coupon.money), o.getJSON("/Cart/addOrder", {
                type: 0,
                mobile: n.phoneNum,
                consignee: n.uname,
                address: s.address_name,
                province: s.province,
                city: s.city,
                district: s.district,
                combTampArr: n.selectedFault,
                orderTime: "",
                modelID: n.selectedMould.id,
                repairWay: 72,
                total_amount: n.selectedFault.price,
                order_amount: n.selectedFault.price,
                desc: "",
                code: n.smsCode,
                coupon_price: u,
                couponID: r,
                user_id: d.globalData.userInfo.user_id
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
        } else a.show.call(e, {
            content: "请选择服务内容",
            icon: "tip"
        });
    },
    sendSmsCode: function(t) {
        var e = this;
        e.checkPhoneNum(e.data.phoneNum) && (e.data.disabled || e.data.disabled || (e.countdown(e), 
        a.show.call(e, {
            content: "已发送" + e.data.phoneNum,
            icon: "ok"
        }), e.smsCodeRequest()));
    },
    selectMould: function(t) {
        var e = this, i = t.currentTarget.dataset.idx, a = e.data.mouldList[i];
        e.setData({
            selectedMould: a,
            faultList: a.faults.spec_item,
            selectedFault: {},
            totalPrice: "--元"
        });
    },
    selectFault: function(t) {
        var e = this, i = t.currentTarget.dataset.idx, a = e.data.faultList[i];
        this.setData({
            selectedFault: a,
            totalPrice: a.price + "元"
        });
    },
    city: function() {
        this.chooseLocation();
    },
    chooseLocation: function() {
        var t = this;
        wx.getSetting({
            success: function(e) {
                e.authSetting["scope.userLocation"] ? t.wxchooseLocation() : wx.authorize({
                    scope: "scope.userLocation",
                    success: function() {
                        t.wxchooseLocation();
                    },
                    fail: function() {
                        wx.showModal({
                            title: "提醒",
                            content: "您拒绝盐城手机维修获取您的位置，这将导致不能正常下单，点击确定按钮，重新授权Hi维修",
                            success: function(t) {
                                t.confirm ? wx.openSetting() : t.cancel;
                            }
                        });
                    }
                });
            }
        });
    },
    wxchooseLocation: function() {
        var e = this, i = new Object();
        wx.chooseLocation({
            success: function(a) {
                var n = a.name, o = a.address;
                t.reverseGeocoder({
                    location: {
                        latitude: a.latitude,
                        longitude: a.longitude
                    },
                    success: function(t) {
                        var a = t.result;
                        i.address_name = n, i.address_desc = o, i.address = n + "" + o, i.districtID = a.ad_info.adcode, 
                        i.lng = a.location.lng, i.lat = a.location.lat, i.province = a.ad_info.province, 
                        i.city = a.ad_info.city, i.district = a.ad_info.district, e.setData({
                            selectedAddress: i
                        });
                    },
                    fail: function(t) {},
                    complete: function(t) {}
                });
            }
        });
    },
    inputUname: function(t) {
        this.setData({
            uname: t.detail.value
        });
    },
    inputPhoneNum: function(t) {
        this.setData({
            phoneNum: t.detail.value
        });
    },
    inputSmsCode: function(t) {
        this.setData({
            smsCode: t.detail.value
        });
    },
    inputAddress: function(t) {
        this.setData({
            address: t.detail.value
        });
    },
    bindProvinceChange: function(t) {
        var e = this;
        e.setData({
            provinceIndex: t.detail.value,
            province_id: e.data.provinceArr[t.detail.value].province_id
        }), e.getCityList(e.data.provinceArr[t.detail.value].province_id);
    },
    bindCityChange: function(t) {
        var e = this;
        e.setData({
            cityIndex: t.detail.value,
            city_id: e.data.cityArr[t.detail.value].city_id
        }), e.getDistrictList(e.data.cityArr[t.detail.value].city_id);
    },
    bindDistrictChange: function(t) {
        var e = this;
        e.setData({
            districtIndex: t.detail.value,
            district_id: e.data.districtArr[t.detail.value].district_id
        });
    },
    checkLoginStatus: function() {
        var t = this;
        e.isExist(n.globalData.hwxUserInfo) ? t.setData({
            phoneNum: n.globalData.hwxUserInfo.UserName,
            hasLogin: !0
        }) : t.setData({
            phoneNum: "",
            hasLogin: !1
        });
    },
    countdown: function(t) {
        var e = t.data.second;
        0 !== e ? setTimeout(function() {
            t.setData({
                second: e - 1,
                getSmsCode: "(" + e + ")重新发送",
                disabled: !0,
                getAuthCodeTextColor: "#CCC"
            }), t.countdown(t);
        }, 1e3) : t.setData({
            second: 60,
            getSmsCode: "获取验证码",
            disabled: !1,
            getAuthCodeTextColor: "#ff5000"
        });
    },
    checkUname: function(t) {
        var i = this, n = !e.isBlank(t);
        return n || a.show.call(i, {
            content: "请输入姓名",
            icon: "tip"
        }), n;
    },
    checkCityDistrict: function(t, i) {
        var n = this, o = !e.isBlank(t);
        o || a.show.call(n, {
            content: "请选择城市",
            icon: "tip"
        });
        var s = !e.isBlank(i);
        return s || a.show.call(n, {
            content: "请选择区",
            icon: "tip"
        }), o && s;
    },
    checkSmsCode: function(t) {
        var i = this;
        if (i.data.hasLogin) return !0;
        var n = !e.isBlank(t);
        return n || a.show.call(i, {
            content: "请输入验证码",
            icon: "tip"
        }), n;
    },
    checkPhoneNum: function(t) {
        var i = this, n = e.isPhoneNum(t);
        return n || a.show.call(i, {
            content: "手机号码格式不正确",
            icon: "tip"
        }), n;
    },
    checkAddress: function(t) {
        var i = this, n = !e.isBlank(t);
        return n || a.show.call(i, {
            content: "请输入详细地址",
            icon: "tip"
        }), n;
    },
    bindPickerChange: function(t) {
        this.setData({
            index: t.detail.value
        });
    },
    openMap: function(t) {
        var e = this, i = this.data.repairCenter[this.data.index].lat, a = this.data.repairCenter[this.data.index].lng;
        wx.openLocation({
            latitude: Number(i),
            longitude: Number(a),
            scale: 28,
            name: e.data.repairCenter[e.data.index].name,
            address: e.data.repairCenter[e.data.index].address
        });
    },
    stopTouchMove: function() {},
    stopTap: function() {}
});