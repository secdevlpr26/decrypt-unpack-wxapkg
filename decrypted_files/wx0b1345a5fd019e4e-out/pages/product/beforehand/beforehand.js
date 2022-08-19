var e = getApp();

Page({
    data: {
        date: "",
        time: "",
        productName: "",
        branchName: "",
        branchId: "",
        mtype: e.globalData.ext.hotel,
        totalDays: 1,
        nowDate: "",
        comeDateInfo: "",
        leaveDateInfo: "",
        styleConfig: e.globalData.styleConfig
    },
    onLoad: function(e) {
        this.getNowFormatDate(), this.getFlexiForm(), this.setData({
            productName: e.productName,
            branchName: e.branchName,
            branchId: e.branchId,
            roomType: e.roomType
        });
    },
    onShow: function() {
        this.getComeAndGoTime();
    },
    onUnload: function() {
        wx.removeStorageSync("comeDate" + e.globalData.autoId), wx.removeStorageSync("comeDate" + e.globalData.autoId);
    },
    getComeAndGoTime: function() {
        if (1 == this.data.mtype && 2 == this.data.roomType) {
            var a = wx.getStorageSync("comeDate" + e.globalData.autoId), t = wx.getStorageSync("leaveDate" + e.globalData.autoId), o = new Date();
            if (a && t) this.setData({
                nowDate: o.getMonth() + 1 + "月" + o.getDate() + "日",
                comeDateInfo: a,
                leaveDateInfo: t,
                totalDays: e.DateDiff(t.re, a.re)
            }); else {
                var l = o.getFullYear() + "-" + (o.getMonth() + 1) + "-" + o.getDate(), n = e.calculatDateBydays(l, 1), i = n.split("-");
                a = {
                    date: o.getMonth() + 1 + "月" + o.getDate() + "日",
                    week: e.getWeek(l),
                    re: l
                }, t = {
                    date: i[1] + "月" + i[2] + "日",
                    week: e.getWeek(n),
                    re: n
                }, this.setData({
                    nowDate: o.getMonth() + 1 + "月" + o.getDate() + "日",
                    comeDateInfo: a,
                    leaveDateInfo: t
                });
            }
        }
    },
    selectBookingTime: function() {
        wx.navigateTo({
            url: "../../order/calendar/calendar"
        });
    },
    getFlexiForm: function() {
        wx.request({
            url: e.globalData.comUrl + "tabs_getFlexiForm.action",
            data: {
                customizeTabId: e.globalData.customizeTabId["Flexi-Form-Booking"]
            },
            success: function(a) {
                var t = e.getJsonData(a.data);
                console.log(t);
            }
        });
    },
    getNowFormatDate: function() {
        var e = new Date(), a = e.getMonth() + 1, t = e.getDate(), o = e.getHours(), l = e.getMinutes();
        a >= 1 && a <= 9 && (a = "0" + a), t >= 0 && t <= 9 && (t = "0" + t), o >= 1 && o <= 9 && (o = "0" + o), 
        l >= 1 && l <= 9 && (l = "0" + l);
        var n = e.getFullYear() + "-" + a + "-" + t, i = o + ":" + l;
        console.log(n), console.log(i), this.setData({
            date: n,
            time: i
        });
    },
    bindDateChange: function(e) {
        console.log("picker发送选择改变，携带值为", e.detail.value), this.setData({
            date: e.detail.value
        });
    },
    bindTimeChange: function(e) {
        console.log("picker发送选择改变，携带值为", e.detail.value), this.setData({
            time: e.detail.value
        });
    },
    formSubmit: function(a) {
        var t = this;
        console.log(a.detail.value);
        var o = /^1[34578]\d{9}$/;
        if ("" != a.detail.value.name && 0 !== a.detail.value.name.trim().length) if ("" != a.detail.value.phone) if (o.test(a.detail.value.phone)) {
            var l = "", n = "";
            1 == t.data.mtype && 2 == t.data.roomType ? "" == a.detail.value.remarks ? (l = "姓名,电话,入住日期,离店日期", 
            n = a.detail.value.name + "," + a.detail.value.phone + "," + t.data.comeDateInfo.re + "," + t.data.leaveDateInfo.re) : (l = "姓名,电话,入住日期,离店日期,留言", 
            n = a.detail.value.name + "," + a.detail.value.phone + "," + t.data.comeDateInfo.re + "," + t.data.leaveDateInfo.re + "," + a.detail.value.remarks) : "" == a.detail.value.remarks ? (l = "姓名,电话,预约日期,预约时间", 
            n = a.detail.value.name + "," + a.detail.value.phone + "," + a.detail.value.date + "," + a.detail.value.time) : (l = "姓名,电话,预约日期,预约时间,留言", 
            n = a.detail.value.name + "," + a.detail.value.phone + "," + a.detail.value.date + "," + a.detail.value.time + "," + a.detail.value.remarks), 
            wx.showToast({
                title: "预约中...",
                icon: "loading",
                duration: 1e4,
                mask: !0
            }), wx.request({
                url: e.globalData.comUrl + "tabs_saveFlexiForm",
                data: {
                    projectId: e.globalData.projectInfo.appId,
                    customizeTabId: e.globalData.customizeTabId["Flexi-Form-Booking"],
                    token: "html5",
                    fieldKey: l,
                    fieldValue: n,
                    productName: t.data.productName,
                    branchName: t.data.branchName,
                    branchId: t.data.branchId,
                    memberId: e.getMemberId()
                },
                success: function(a) {
                    wx.hideToast();
                    var t = e.getJsonData(a.data);
                    wx.redirectTo({
                        url: "bh-detail/bh-detail?id=" + t.id
                    });
                },
                fail: function() {
                    wx.hideToast(), e.hint("预约失败");
                }
            });
        } else this.warn("请输入正确的电话号码"); else this.warn("请输入电话号码!"); else this.warn("姓名不能为空!");
    },
    warn: function(e) {
        wx.showToast({
            title: e,
            image: "../../../img/warn.png",
            duration: 2e3
        });
    }
});