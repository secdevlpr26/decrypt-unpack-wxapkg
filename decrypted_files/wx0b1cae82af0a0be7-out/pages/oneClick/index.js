function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../../utils/api")), a = e(require("../../common/toast/toast"));

getApp();

Page({
    data: {
        serveTimePicker: [ [], [] ],
        serveTimeDay: {},
        serveTimeHours: {},
        serveMenusList: [],
        disabledBtn: !1,
        remark: "",
        serveMenu: {},
        serveTimeText: "",
        firstEnter: !0
    },
    bindPickerChange: function(e) {
        var t = e.detail.value;
        this.data.serveMenu = this.data.serveMenusList[t], this.setData({
            serveMenu: this.data.serveMenu
        });
    },
    bindMultiPickerChange: function(e) {
        var t = e.detail.value;
        this.data.serveTimeDay = this.data.serveTimePicker[0][t[0]], this.data.serveTimeHours = this.data.serveTimePicker[1][t[1]], 
        console.log(this.data.serveTimeDay), console.log(this.data.serveTimeHours), this.data.serveTimeText = this.data.serveTimeDay.name.slice(0, 6) + " " + this.data.serveTimeHours.name, 
        this.setData({
            serveTimeText: this.data.serveTimeText
        });
    },
    bindMultiPickerColumnChange: function(e) {
        console.log(e.detail);
        var t = e.detail;
        0 == t.column && (this.data.serveTimePicker[1] = this.data.timePickerData[t.value].intervals.concat()), 
        this.setData({
            serveTimePicker: this.data.serveTimePicker
        });
    },
    onLoad: function(e) {
        var a = this;
        t.default.serveMenusList("/service/menuList").then(function(e) {
            e.result.forEach(function(e) {
                var t = {
                    name: e.name,
                    id: e.id
                };
                a.data.serveMenusList.push(t);
            }), a.setData({
                serveMenusList: a.data.serveMenusList
            });
        }), t.default.appointmentData("/serviceOrder/preOrder").then(function(e) {
            a.data.timePickerData = e.result.nextTenDays, a.data.defaultAddr = e.result.defaultAddr, 
            a.data.hasDefaultAddr = 0 != Object.keys(e.result.defaultAddr).length, e.result.nextTenDays.forEach(function(e) {
                var t = {
                    name: e.name,
                    timestamp: e.timestamp
                };
                a.data.serveTimePicker[0].push(t);
            }), a.data.serveTimePicker[1] = e.result.nextTenDays[0].intervals.concat(), a.setData({
                defaultAddr: a.data.defaultAddr,
                hasDefaultAddr: a.data.hasDefaultAddr,
                serveTimePicker: a.data.serveTimePicker
            });
        });
    },
    onHide: function() {
        this.data.firstEnter = !1;
    },
    onShow: function() {
        var e = this;
        this.data.firstEnter || (this.disabledBtn = !1, t.default.appointmentData("/serviceOrder/preOrder").then(function(t) {
            e.data.defaultAddr = t.result.defaultAddr, e.data.hasDefaultAddr = 0 != Object.keys(t.result.defaultAddr).length, 
            e.setData({
                defaultAddr: e.data.defaultAddr,
                hasDefaultAddr: e.data.hasDefaultAddr
            });
        }));
    },
    editRemark: function(e) {
        var t = e.detail.value;
        return t = t.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, ""), t = t.replace(/(^\s+)|\s+$/g, ""), 
        this.data.remark = t, t;
    },
    oneClickOrder: function() {
        var e = this;
        this.data.hasDefaultAddr ? this.data.serveMenu.name ? this.data.serveTimeText ? this.data.disabledBtn || (this.data.disabledBtn = !0, 
        wx.showLoading({
            title: ""
        }), console.log(this.data.defaultAddr), t.default.oneClickOrder("/serviceOrder/addOneButtonOrder", {
            addressId: this.data.defaultAddr.id,
            contactName: this.data.defaultAddr.name,
            contactPhone: this.data.defaultAddr.phone,
            remark: this.data.remark,
            detailAddr: this.data.defaultAddr.address,
            serviceDate: this.data.serveTimeDay.timestamp,
            serviceFirstCategoryId: this.data.serveMenu.id,
            timeInterval: this.data.serveTimeHours.name,
            timeIntervalId: this.data.serveTimeHours.id
        }).then(function(t) {
            e.data.disabledBtn = !1, setTimeout(function() {
                wx.hideLoading();
            }, 300), wx.showToast({
                title: "预约成功",
                icon: "success",
                duration: 800
            }), wx.setStorageSync("orderDelete", !0), setTimeout(function() {
                wx.switchTab({
                    url: "../orderList/index"
                });
            }, 500);
        }, function(t) {
            setTimeout(function() {
                wx.hideLoading();
            }, 300), e.data.disabledBtn = !1;
        })) : a.default.show({
            type: "text",
            timer: 1500,
            text: "请选择服务时间"
        }) : a.default.show({
            type: "text",
            timer: 1500,
            text: "请选择服务类型"
        }) : a.default.show({
            type: "text",
            timer: 1500,
            text: "请选择服务地址"
        });
    }
});