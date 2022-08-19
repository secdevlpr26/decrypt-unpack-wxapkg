function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../utils/api")), a = t(require("../../common/toast/toast"));

getApp();

Page({
    data: {
        serveData: {},
        servePrice: 0,
        serveTimePicker: [ [], [] ],
        serveTimeDay: {},
        serveTimeHours: {},
        count: 1,
        serviceId: "",
        firstEnter: !0,
        currCoupon: {
            price: 0,
            id: ""
        },
        submitStatus: !0
    },
    minus: function() {
        this.data.count = this.data.count < 2 ? 1 : --this.data.count, this.data.allServePrice = (this.data.count * this.data.servePrice).toFixed(2), 
        this.data.allPayPrice = (this.data.allServePrice - parseInt(this.data.currCoupon.price)).toFixed(2), 
        this.setData({
            count: this.data.count,
            allServePrice: this.data.allServePrice,
            allPayPrice: this.data.allPayPrice
        });
    },
    plus: function() {
        this.data.count++, this.data.allServePrice = (this.data.count * this.data.servePrice).toFixed(2), 
        this.data.allPayPrice = (this.data.allServePrice - parseInt(this.data.currCoupon.price)).toFixed(2), 
        this.setData({
            count: this.data.count,
            allServePrice: this.data.allServePrice,
            allPayPrice: this.data.allPayPrice
        });
    },
    submitOrder: function() {
        var t = this;
        this.data.hasDefaultAddr ? this.data.serveTimeText ? this.data.submitStatus && (this.data.submitStatus = !1, 
        wx.showLoading({
            title: ""
        }), e.default.serveOrderAdd("/serviceOrder/add", {
            addressId: this.data.defaultAddr.id,
            contactName: this.data.defaultAddr.name,
            contactPhone: this.data.defaultAddr.phone,
            couponId: this.data.currCoupon.id,
            detailAddr: this.data.defaultAddr.address,
            serviceDate: this.data.serveTimeDay.timestamp,
            serviceId: this.data.serviceId,
            serviceMount: this.data.count,
            timeInterval: this.data.serveTimeHours.name,
            timeIntervalId: this.data.serveTimeHours.id
        }).then(function(e) {
            wx.removeStorageSync("currCoupon"), wx.setStorageSync("orderDelete", !0), setTimeout(function() {
                wx.hideLoading();
            }, 300), t.data.submitStatus = !0, 1 == t.data.serveData.type.value ? wx.redirectTo({
                url: "../paySubmit/index?orderSn=" + e.result.orderSn
            }) : (wx.showToast({
                title: "预约成功",
                icon: "success",
                duration: 800
            }), setTimeout(function() {
                wx.switchTab({
                    url: "../orderList/index"
                });
            }, 500));
        }, function(e) {
            setTimeout(function() {
                wx.hideLoading();
            }, 300), t.data.submitStatus = !0;
        })) : a.default.show({
            type: "text",
            timer: 1e3,
            text: "请选择服务时间"
        }) : a.default.show({
            type: "text",
            timer: 1e3,
            text: "请选择服务地址"
        });
    },
    bindMultiPickerChange: function(t) {
        var e = t.detail.value;
        this.data.serveTimeDay = this.data.serveTimePicker[0][e[0]], this.data.serveTimeHours = this.data.serveTimePicker[1][e[1]], 
        console.log(this.data.serveTimeDay), console.log(this.data.serveTimeHours), this.data.serveTimeText = this.data.serveTimeDay.name.slice(0, 6) + " " + this.data.serveTimeHours.name, 
        this.setData({
            serveTimeText: this.data.serveTimeText
        });
    },
    bindMultiPickerColumnChange: function(t) {
        console.log(t.detail);
        var e = t.detail;
        0 == e.column && (this.data.serveTimePicker[1] = this.data.timePickerData[e.value].intervals.concat()), 
        this.setData({
            serveTimePicker: this.data.serveTimePicker
        });
    },
    onLoad: function(t) {
        var a = this;
        this.data.serveData = wx.getStorageSync("appointmentData"), this.data.servePrice = parseFloat(this.data.serveData.price).toFixed(2), 
        this.data.allServePrice = (this.data.count * this.data.servePrice).toFixed(2), this.data.allPayPrice = this.data.allServePrice, 
        this.setData({
            serveData: this.data.serveData,
            allServePrice: this.data.allServePrice,
            allPayPrice: this.data.allPayPrice,
            serviceId: t.id
        }), e.default.appointmentData("/serviceOrder/preOrder").then(function(t) {
            a.data.timePickerData = t.result.nextTenDays, a.data.defaultAddr = t.result.defaultAddr, 
            a.data.hasDefaultAddr = 0 != Object.keys(t.result.defaultAddr).length, t.result.nextTenDays.forEach(function(t) {
                var e = {
                    name: t.name,
                    timestamp: t.timestamp
                };
                a.data.serveTimePicker[0].push(e);
            }), a.data.serveTimePicker[1] = t.result.nextTenDays[0].intervals.concat(), a.setData({
                defaultAddr: a.data.defaultAddr,
                hasDefaultAddr: a.data.hasDefaultAddr,
                serveTimePicker: a.data.serveTimePicker
            });
        });
    },
    onHide: function() {
        this.data.firstEnter = !1, this.data.currCoupon.id || wx.removeStorageSync("currCoupon");
    },
    onShow: function() {
        var t = this;
        this.data.firstEnter || (e.default.appointmentData("/serviceOrder/preOrder").then(function(e) {
            t.data.defaultAddr = e.result.defaultAddr, t.data.hasDefaultAddr = 0 != Object.keys(e.result.defaultAddr).length, 
            t.setData({
                defaultAddr: t.data.defaultAddr,
                hasDefaultAddr: t.data.hasDefaultAddr
            });
        }), wx.getStorageSync("currCoupon") ? this.data.currCoupon = wx.getStorageSync("currCoupon") : this.data.currCoupon = {
            price: 0,
            id: ""
        }, this.data.serveData = wx.getStorageSync("appointmentData"), this.data.servePrice = parseFloat(this.data.serveData.price).toFixed(2), 
        this.data.allServePrice = (this.data.count * this.data.servePrice).toFixed(2), this.data.allPayPrice = this.data.allServePrice - parseInt(this.data.currCoupon.price) > 0 ? (this.data.allServePrice - parseInt(this.data.currCoupon.price)).toFixed(2) : "0.00", 
        this.setData({
            serveData: this.data.serveData,
            allServePrice: this.data.allServePrice,
            allPayPrice: this.data.allPayPrice
        }), this.setData({
            currCoupon: this.data.currCoupon
        }));
    }
});