var t = getApp(), a = require("../../../utils/server"), e = null, s = -1;

Page({
    data: {
        tab: 0,
        name: "",
        phone: "",
        address: "",
        provinces: [],
        province: "北京",
        citys: [],
        city: "北京市",
        countys: [],
        county: "东城区",
        value: [ 0, 0, 0 ],
        values: [ 0, 0, 0 ],
        condition: !1,
        time: "获取验证码",
        data: {
            brand: "",
            model: "",
            brandID: "",
            modelID: "",
            colorID: "",
            combTampArr: [],
            imgArr: [],
            userUploadImgs: [],
            price: "",
            addressID: "",
            serverAddress: "",
            timeStr: "",
            couponID: "",
            couponName: "",
            couponPrice: "",
            payPrice: "",
            userID: t.globalData.userid,
            repairWay: 72,
            orderTime: "",
            desc: ""
        },
        timeShadeFlag: !0,
        dateArr: [],
        timeArr: []
    },
    initCityData: function() {
        for (var t = this, a = t.data.cityData, e = [], s = [], i = [], n = 0; n < a.length; n++) e.push(a[n].name);
        console.log("省份完成");
        for (var o = 0; o < a[0].sub.length; o++) s.push(a[0].sub[o].name);
        console.log("city完成");
        for (var r = 0; r < a[0].sub[0].sub.length; r++) i.push(a[0].sub[0].sub[r].name);
        t.setData({
            provinces: e,
            citys: s,
            countys: i,
            province: e[0],
            city: s[0],
            county: i[0]
        });
    },
    onLoad: function(t) {
        console.log("onLoad");
        var e = this;
        a.getJSON("/User/getArea", function(t) {
            var a = t.data.result;
            e.setData({
                cityData: a
            }), e.initCityData();
        }), console.log(t);
    },
    openwin: function(t) {
        console.log(t);
        var a = t.target.dataset.url;
        wx.navigateTo({
            url: "../" + a + "/" + a
        });
    },
    tab1: function(t) {
        this.setData({
            tab: 0
        });
    },
    tab2: function(t) {
        this.setData({
            tab: 1
        }), wx.navigateTo({
            url: "../store/index",
            success: function(t) {},
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    tab3: function(t) {
        this.setData({
            tab: 2
        });
    },
    confirm: function() {
        var e = this.data.data, s = this.data;
        return s.name ? s.phone ? s.address ? (wx.showToast({
            title: "提交中...",
            icon: "loading",
            duration: 1e4
        }), void 0 == e.desc && (e.desc = ""), void a.getJSON("/Cart/addOrders", {
            code: s.code,
            content: s.content,
            mobile: s.phone,
            consignee: s.name,
            address: s.address,
            province: s.province,
            city: s.city,
            district: s.county,
            user_id: t.globalData.userInfo.user_id
        }, function(t) {
            1 == t.data.status ? (wx.showToast({
                title: t.data.msg
            }), setTimeout(function(t) {
                wx.navigateBack({});
            }, 1e3)) : wx.showToast({
                title: t.data.msg
            });
        })) : (wx.showToast({
            title: "请输入详情地址",
            duration: 2e3
        }), !1) : (wx.showToast({
            title: "请输入手机号",
            duration: 2e3
        }), !1) : (wx.showToast({
            title: "请输入姓名",
            icon: "12",
            duration: 2e3
        }), !1);
    },
    inputMark: function(t) {
        this.data.data.desc = t.detail.value, this.setData({
            data: this.data.data
        });
    },
    blurMark: function() {
        try {
            wx.setStorageSync("order_data", this.data.data);
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            console.log(t);
        }
    },
    selectConTime: function() {
        this.setData({
            timeShadeFlag: !this.data.timeShadeFlag
        });
    },
    cancle: function() {
        this.setData({
            timeShadeFlag: !this.data.timeShadeFlag
        });
    },
    selectDate: function(t) {
        for (var a = t.target.dataset.index, e = this.data.dateArr, s = 0; s < e.length; s++) e[s].class = !1;
        e[a].class = !0, this.setData({
            dateArr: e
        }), 0 == a ? this.showTimeDetaile(!0) : this.showTimeDetaile(!1);
    },
    selectTime: function(t) {
        for (var a = t.target.dataset.text, e = this.data.dateArr, e = this.data.dateArr, s = "", i = 0; i < e.length; i++) e[i].class && (s = e[i].text);
        s += a, this.data.data.timeStr = s, this.setData({
            data: this.data.data,
            timeShadeFlag: !this.data.timeShadeFlag
        });
        try {
            wx.setStorageSync("order_data", this.data.data);
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            console.log(t);
        }
    },
    showTime: function(t) {
        if (this.isLeapYear(i)) a = [ "31", "29", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31" ]; else var a = [ "31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31" ];
        var e = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六"), s = new Date(), i = s.getFullYear(), n = s.getMonth(), o = s.getDate() - 1, r = s.getDay() - 1;
        s.getHours(), s.getMinutes(), s.getSeconds();
        n < 10 && (n = "0" + n);
        for (var c = n = parseInt(n) + 1, u = "", l = [], d = 0; d < t; d++) {
            var h = r + 1;
            h >= 7 && (h -= 7), r = h, (u = o + 1) > a[c - 1] && (u -= a[c - 1], (c += 1) > 12 && (c -= 12)), 
            o = u, this.checkoutWeek(e[h]) ? 0 == d ? l.push({
                text: "今天" + c + "月" + u + "日",
                class: !0
            }) : 1 == d ? l.push({
                text: "明天" + c + "月" + u + "日",
                class: !1
            }) : l.push({
                text: c + "月" + u + "日",
                class: !1
            }) : t++;
        }
        console.log(l), this.setData({
            dateArr: l
        });
    },
    showTimeDetaile: function(t) {
        var a = this.data.time_list, e = this.data.time_interval_str, s = parseInt(e.sm_star_hour), i = parseInt(e.sm_star_minute), n = parseInt(e.sm_end_hour), o = parseInt(e.sm_end_minute), r = parseInt(a.seg_time_periods), c = 60 * s + i, u = 60 * n + o, l = c;
        l += r;
        for (var d = []; l <= u + r; ) t ? c >= 60 * new Date().getHours() + new Date().getMinutes() + parseInt(a.reservation_time) && d.push({
            text: this.transformTime(c),
            class: !1
        }) : d.push({
            text: this.transformTime(c),
            class: !1
        }), c = l, l += r;
        this.setData({
            timeArr: d
        });
    },
    transformTime: function(t) {
        var a = parseInt(t / 60), e = t % 60;
        return a < 10 && (a = "0" + a), e < 10 && (e = "0" + e), a + ":" + e;
    },
    checkoutWeek: function(t) {
        for (var a = this.data.time_list_weekArr, e = 0; e < a.length; e++) if (a[e] == t) return !0;
        return !1;
    },
    isLeapYear: function(t) {
        var a = t % 100 != 0, e = t % 400 == 0;
        return !!(t % 4 == 0 && a || e);
    },
    onReady: function() {},
    onShow: function() {
        var a = this;
        try {
            var e = wx.getStorageSync("order_data");
            if (e) {
                var s = parseFloat(e.price) - parseFloat(e.couponPrice);
                s < 0 && (s = 0), e.payPrice = s, a.setData({
                    data: e
                });
            }
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            console.log("fillout_order页面的获取本地数据catch"), console.log(t);
        }
        wx.request({
            url: t.globalData.serverUrl + "getOrderTime",
            data: {},
            method: "GET",
            success: function(t) {
                console.log(t);
                var e = t.data.data.time, s = JSON.parse(e.time_interval_str.trim()), i = s.weekArr;
                a.setData({
                    time_list: e,
                    time_interval_str: s,
                    time_list_weekArr: i
                }), console.log(e.longest_appointment), a.showTime(parseInt(e.longest_appointment)), 
                a.showTimeDetaile(!0);
            },
            fail: function() {},
            complete: function() {}
        });
    },
    onHide: function() {},
    onUnload: function() {},
    open: function() {
        this.setData({
            condition: !this.data.condition
        });
    },
    bindChange: function(t) {
        var a = t.detail.value, e = this.data.values, s = this.data.cityData;
        if (a[0] == e[0]) if (a[1] == e[1]) {
            if (a[2] != e[2]) return console.log("county no"), void this.setData({
                county: this.data.countys[a[2]],
                values: a
            });
        } else {
            console.log("city no");
            for (var i = [], n = 0; n < s[a[0]].sub[a[1]].sub.length; n++) i.push(s[a[0]].sub[a[1]].sub[n].name);
            this.setData({
                city: this.data.citys[a[1]],
                county: s[a[0]].sub[a[1]].sub[0].name,
                countys: i,
                values: a,
                value: [ a[0], a[1], 0 ]
            });
        } else {
            console.log("province no ");
            for (var o = [], r = [], c = 0; c < s[a[0]].sub.length; c++) o.push(s[a[0]].sub[c].name);
            for (var u = 0; u < s[a[0]].sub[0].sub.length; u++) r.push(s[a[0]].sub[0].sub[u].name);
            this.setData({
                province: this.data.provinces[a[0]],
                city: s[a[0]].sub[0].name,
                citys: o,
                county: s[a[0]].sub[0].sub[0].name,
                countys: r,
                values: a,
                value: [ a[0], 0, 0 ]
            });
        }
    },
    input: function(t) {
        var a = t.target.dataset.type;
        "name" == a ? this.setData({
            name: t.detail.value
        }) : "phone" == a ? this.setData({
            phone: t.detail.value
        }) : "address" == a ? this.setData({
            address: t.detail.value
        }) : "code" == a ? this.setData({
            code: t.detail.value
        }) : "content" == a && this.setData({
            content: t.detail.value
        }), console.log(t.detail.value);
    },
    getnum: function(t) {
        var e = this;
        11 != parseInt(e.data.phone).toString().length ? wx.showToast({
            title: "请输入正确的手机号",
            icon: "loading"
        }) : a.getJSON("/User/send_sms_reg_code", {
            mobile: e.data.phone,
            user_id: getApp().globalData.userInfo.user_id
        }, function(t) {
            var a = t.data;
            1 == a.status ? e.reSendPhoneNum() : wx.showToast({
                title: a.msg
            });
        });
    },
    reSendPhoneNum: function() {
        if (s < 0) {
            var t = this;
            s = 60, e = setInterval(function() {
                s--, t.setData({
                    time: s + "s"
                }), s <= 0 && (s = -1, clearInterval(e), t.setData({
                    time: "获取验证码"
                }));
            }, 1e3);
        } else wx.showToast({
            title: "短信已发到您的手机，请稍后重试!",
            icon: "loading",
            duration: 700
        });
    }
});