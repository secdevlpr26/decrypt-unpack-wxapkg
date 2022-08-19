var a = getApp();

Page({
    data: {
        date: "",
        time: "",
        productName: "",
        branchName: "",
        branchId: "",
        styleConfig: a.globalData.styleConfig
    },
    onLoad: function(a) {
        this.getNowFormatDate(), this.getFlexiForm(), this.setData({
            productName: a.productName,
            branchName: a.branchName,
            branchId: a.branchId
        });
    },
    getFlexiForm: function() {
        wx.request({
            url: a.globalData.comUrl + "tabs_getFlexiForm.action",
            data: {
                customizeTabId: a.globalData.customizeTabId["Flexi-Form-Booking"]
            },
            success: function(e) {
                var t = a.getJsonData(e.data);
                console.log(t);
            }
        });
    },
    getNowFormatDate: function() {
        var a = new Date(), e = a.getMonth() + 1, t = a.getDate(), l = a.getHours(), i = a.getMinutes();
        e >= 1 && e <= 9 && (e = "0" + e), t >= 0 && t <= 9 && (t = "0" + t), l >= 1 && l <= 9 && (l = "0" + l), 
        i >= 1 && i <= 9 && (i = "0" + i);
        var o = a.getFullYear() + "-" + e + "-" + t, n = l + ":" + i;
        console.log(o), console.log(n), this.setData({
            date: o,
            time: n
        });
    },
    bindDateChange: function(a) {
        console.log("picker发送选择改变，携带值为", a.detail.value), this.setData({
            date: a.detail.value
        });
    },
    bindTimeChange: function(a) {
        console.log("picker发送选择改变，携带值为", a.detail.value), this.setData({
            time: a.detail.value
        });
    },
    formSubmit: function(e) {
        var t = this;
        console.log(e.detail.value);
        var l = /^1[3|4|5|8|7][0-9]\d{4,8}$/;
        if ("" != e.detail.value.name && 0 !== e.detail.value.name.trim().length) if ("" != e.detail.value.phone) if (l.test(e.detail.value.phone)) {
            var i = "", o = "";
            "" == e.detail.value.remarks ? (i = "姓名,电话,预约日期,预约时间", o = e.detail.value.name + "," + e.detail.value.phone + "," + e.detail.value.date + "," + e.detail.value.time) : (i = "姓名,电话,预约日期,预约时间,留言", 
            o = e.detail.value.name + "," + e.detail.value.phone + "," + e.detail.value.date + "," + e.detail.value.time + "," + e.detail.value.remarks), 
            wx.showToast({
                title: "预约中...",
                icon: "loading",
                duration: 1e4,
                mask: !0
            }), wx.request({
                url: a.globalData.comUrl + "tabs_saveFlexiForm",
                data: {
                    projectId: a.globalData.projectInfo.appId,
                    customizeTabId: a.globalData.customizeTabId["Flexi-Form-Booking"],
                    token: "html5",
                    fieldKey: i,
                    fieldValue: o,
                    productName: t.data.productName,
                    branchName: t.data.branchName,
                    branchId: t.data.branchId,
                    memberId: a.getMemberId()
                },
                success: function(e) {
                    wx.hideToast();
                    var t = a.getJsonData(e.data);
                    wx.redirectTo({
                        url: "bh-detail/bh-detail?id=" + t.id
                    });
                },
                fail: function() {
                    wx.hideToast(), a.hint("预约失败");
                }
            });
        } else this.warn("请输入正确的电话号码"); else this.warn("请输入电话号码!"); else this.warn("姓名不能为空!");
    },
    warn: function(a) {
        wx.showToast({
            title: a,
            image: "../../../img/warn.png",
            duration: 2e3
        });
    }
});