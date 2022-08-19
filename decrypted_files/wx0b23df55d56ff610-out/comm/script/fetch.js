function i(i, n, o, c, s, d, p) {
    var u = {}, l = e.jwtToken();
    if (u = l ? d ? {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-token": l
    } : {
        "Content-Type": "application/json,application/json",
        "Access-token": l
    } : d ? {
        "Content-Type": "application/x-www-form-urlencoded"
    } : {
        "Content-Type": "application/json,application/json"
    }, d && !a.isEmpty(n)) {
        n.clientType = t.clientType, n.version = t.version;
        var f = "";
        Object.keys(n).forEach(function(i, t, e) {
            f += "" + i + n[i];
        }), f = r.hexMD5(f);
        var v = r.hexMD5(f + t.recycleKey);
        n.sign = v;
    } else n.clientType = t.clientType, n.version = t.version;
    wx.request({
        url: i,
        data: n,
        method: o,
        header: u,
        success: function(i) {
            if (i.data.code == t.apiCode.success) p ? "function" == typeof c && c(i.data) : "function" == typeof c && c(i.data.data); else if (i.data.code == t.apiCode.unauthorized) "function" == typeof s && s(i.data.mes), 
            wx.navigateTo({
                url: "/pages/personal/login/login",
                success: function(i) {},
                fail: function() {},
                complete: function() {}
            }); else if ("function" == typeof s) {
                if (i.data.mes) return void s(i.data.mes);
                s(i.data.msg);
            }
        },
        fail: function(i) {
            "function" == typeof s && s(t.strings.requestFail);
        },
        complete: function() {}
    });
}

var t = require("./config.js"), e = require("../../util/jwt.js"), a = require("../../util/util"), r = require("../../util/md5");

module.exports = {
    request: i,
    getVerifyCode: function(e, a, r) {
        var n = {
            telephone: e
        };
        i(t.apiList.sendCode, n, "GET", a, r);
    },
    doLoginWithPhone: function(e, a, r, n) {
        var o = {
            name: e,
            password: a
        };
        i(t.apiList.doLogin, o, "GET", r, n);
    },
    getFaultComment: function(e, a, r, n, o) {
        var c = {
            faulty_id: e,
            type: a,
            p: r
        };
        i(t.apiList.faultComment, c, "GET", n, o);
    },
    getBrands: function(e, a, r) {
        var n = {
            fault_id: e,
            type: "1"
        };
        i(t.apiList.brandList, n, "GET", a, r);
    },
    getDevices: function(e, a, r, n) {
        var o = {
            fault_id: e,
            bid: a,
            type: 1
        };
        i(t.apiList.mouldList, o, "GET", r, n);
    },
    getColors: function(e, a, r, n) {
        var o = {
            fault_id: e,
            mould_id: a
        };
        i(t.apiList.getColors, o, "GET", r, n);
    },
    getWarrantyOption: function(e, a, r) {
        var n = {
            mid: e
        };
        i(t.apiList.warrantyOption, n, "GET", a, r);
    },
    getRepairMsg: function(e, a, r, n, o, c, s, d, p, u) {
        var l = {
            moudleid: e,
            faulttype: a,
            brandid: r,
            colorid: n,
            productid: o,
            type: c,
            name: s,
            repairprice_colorid: d
        };
        i(t.apiList.repairMsg, l, "GET", p, u);
    },
    getHwxDeviceInfo: function(e, a, r) {
        if (console.log(e), (e = e.replace(/\s+/g, "")).indexOf("<") >= 0) {
            var n = e.indexOf("<", 0);
            e = e.substring(0, n);
        }
        console.log(e);
        var o = {
            mouldName: e
        };
        i(t.apiList.deviceInfo, o, "GET", a, r);
    },
    getAllFaults: function(e, a) {
        var r = {
            type: "2x"
        };
        i(t.apiList.faultList, r, "GET", e, a);
    },
    getAddressList: function(e, a) {
        var r = {};
        i(t.apiList.addressList, r, "GET", e, a);
    },
    addAddress: function(e, a, r) {
        var n = {
            gender: e.selectedGenderId,
            city: e.cityID,
            district: e.districtID,
            address: e.address,
            contacts: e.contacts,
            lng: e.lng,
            lat: e.lat,
            address_desc: e.address_desc,
            address_name: e.address_name
        };
        i(t.apiList.addAddress, n, "GET", a, r);
    },
    getCityInfo: function(e, a, r, n, o) {
        var c = {
            province: e,
            city: a,
            area: r
        };
        i(t.apiList.cityInfo, c, "GET", n, o);
    },
    createOrder: function(e, a, r, n, o, c, s, d, p, u, l, f, v, L, g, m, y) {
        var T = {
            planid: e,
            moudleid: a,
            color: r,
            mobile: n,
            name: o,
            cityid: c,
            areaid: s,
            address: d,
            reservetime: p,
            reservetime2: u,
            remark: l,
            lng: f,
            lat: v,
            coupon_id: L,
            protect_flag: g
        };
        i(t.apiList.createOrder, T, "GET", m, y);
    },
    getOrderDetail: function(e, a, r) {
        var n = {
            id: e
        };
        i(t.apiList.orderDetail, n, "GET", a, r);
    },
    getWorkerLocation: function(e, a, r) {
        var n = {
            engineer_id: e
        };
        i(t.apiList.workerLocation, n, "GET", a, r);
    },
    getMyOrders: function(e, a, r, n, o) {
        var c = {
            p: e,
            search_type: a,
            is_show_shr: r
        };
        i(t.apiList.orderList, c, "GET", n, o, !1, !0);
    },
    editName: function(e, a, r) {
        var n = {
            real_name: e
        };
        i(t.apiList.editName, n, "GET", a, r);
    },
    editBirthday: function(e, a, r) {
        var n = {
            birthday_time: e
        };
        i(t.apiList.editBirthday, n, "GET", a, r);
    },
    logout: function(e, a) {
        var r = {};
        i(t.apiList.logout, r, "GET", e, a);
    },
    getVisitPairCityList: function(e, a) {
        var r = {};
        i(t.apiList.visitPairCityList, r, "GET", e, a);
    },
    getDistrictList: function(e, a, r) {
        var n = {
            city: e
        };
        i(t.apiList.districtList, n, "GET", a, r);
    },
    quickCreatOrder: function(e, a, r, n, o, c, s, d, p) {
        var u = {
            city: e,
            district: a,
            address: r,
            lat: n,
            lng: o,
            user_name: c,
            mobile: s
        };
        i(t.apiList.quickCreatOrder, u, "GET", d, p);
    },
    getBannerList: function(e, a) {
        var r = {};
        i(t.apiList.banner, r, "GET", e, a);
    },
    getHotFix: function(e, a) {
        var r = {};
        i(t.apiList.hotFix, r, "GET", e, a);
    },
    getfaultListByMouldId: function(e, a, r) {
        var n = {
            mould_id: e
        };
        i(t.apiList.faultListByMouldId, n, "GET", a, r);
    },
    getReserveTime: function(e, a, r, n) {
        var o = {
            cityId: e,
            district_id: a
        };
        i(t.apiList.reserveTime, o, "GET", r, n, !1, !0);
    },
    getMemoryPriceList: function(e, a) {
        var r = {};
        i(t.apiList.memoryPriceList, r, "GET", e, a);
    },
    getProvinceList: function(e, a) {
        var r = {};
        i(t.apiList.provinceList, r, "GET", e, a);
    },
    getCityListByProvince: function(e, a, r) {
        var n = {
            province: e
        };
        i(t.apiList.cityListByProvince, n, "GET", a, r);
    },
    memoryUpCreatOrder: function(e, a, r, n, o, c, s, d, p, u, l, f, v) {
        var L = {
            userName: e,
            phoneNumber: a,
            address: r,
            province: n,
            city: o,
            district: c,
            mid: s,
            fid: d,
            fdid: p,
            price: u,
            weixiuCenterId: l
        };
        i(t.apiList.memoryUpCreateOrder, L, "GET", f, v);
    },
    getNowtime: function(e, a) {
        var r = {};
        i(t.apiList.nowTime, r, "GET", e, a);
    },
    configList: function(e, a) {
        var r = {};
        i(t.apiList.configList, r, "GET", e, a);
    },
    getHotRecycle: function(e, a) {
        var r = {};
        i(t.apiList.getHotRecycle, r, "GET", e, a, !0);
    },
    getRecycleBrand: function(e, a, r) {
        var n = {
            pid: e
        };
        i(t.apiList.getRecycleBrand, n, "GET", a, r, !0);
    },
    getRecycleMould: function(e, a, r, n) {
        var o = {
            bid: e,
            pid: a
        };
        i(t.apiList.getRecycleMould, o, "GET", r, n, !0);
    },
    createRecycleOrder: function(e, a, r, n, o, c, s, d, p, u, l, f, v) {
        var L = {
            account: e,
            address: a,
            attrFault: r,
            contacts: n,
            district: o,
            payment: c,
            remark: s,
            reserved_at: d,
            sms_code: p,
            tel: u,
            platform: l
        };
        i(t.apiList.createRecycleOrder, L, "POST", f, v, !0);
    },
    getRecycleDetail: function(e, a, r) {
        var n = {
            id: e
        };
        i(t.apiList.getRecycleDetail, n, "GET", a, r, !0);
    },
    getRecycleCart: function(e, a) {
        var r = {};
        i(t.apiList.getRecycleCart, r, "GET", e, a, !0);
    },
    recycleCartDel: function(e, a, r) {
        var n = {
            cid: e
        };
        i(t.apiList.recycleCartDel, n, "GET", a, r, !0);
    },
    showCartDetail: function(e, a, r) {
        var n = {
            cid: e
        };
        i(t.apiList.showCartDetail, n, "GET", a, r, !0);
    },
    addToCart: function(e, a, r, n, o, c) {
        var s = {
            attr_fault_information: e,
            brand_id: a,
            expected_price: r,
            mould_id: n
        };
        i(t.apiList.addToCart, s, "POST", o, c, !0);
    },
    getCartNum: function(e, a) {
        var r = {};
        i(t.apiList.getCartNum, r, "GET", e, a, !0);
    },
    getRecycleFault: function(e, a, r) {
        var n = {
            mid: e
        };
        i(t.apiList.getRecycleFault, n, "GET", a, r, !0);
    },
    getAppraisePrice: function(e, a, r, n) {
        var o = {
            mould_id: e,
            attr_fault_info_id_real: a
        };
        i(t.apiList.getAppraisePrice, o, "GET", r, n, !0);
    },
    getRepairCoupon: function(e, a, r, n) {
        var o = {
            plan_id: e,
            city: a
        };
        i(t.apiList.getRepairCoupon, o, "GET", r, n);
    },
    addRepairCoupon: function(e, a, r) {
        var n = {
            code: e
        };
        i(t.apiList.addRepairCoupon, n, "GET", a, r);
    },
    myCouponList: function(e, a) {
        var r = {};
        i(t.apiList.myCouponList, r, "GET", e, a);
    },
    makeCall: function(e, a, r, n, o, c, s) {
        var d = {
            mobile: e,
            nickName: a,
            avatarUrl: r,
            code: n,
            price: o
        };
        i(t.apiList.makeCall, d, "POST", c, s, !0);
    },
    getActiveUserinfo: function(e, a, r, n) {
        var o = {
            mobile: e,
            access: a
        };
        i(t.apiList.getActiveUserinfo, o, "GET", r, n, !0);
    },
    immediateUseCoupon: function(e, a, r) {
        var n = {
            id: e
        };
        i(t.apiList.immediateUseCoupon, n, "GET", a, r, !0);
    },
    getStoreList: function(e, a) {
        var r = {};
        i(t.apiList.storeList, r, "GET", e, a);
    },
    getListBox: function(e, a) {
        var r = {};
        i(t.apiList.listBox, r, "GET", e, a);
    }
};