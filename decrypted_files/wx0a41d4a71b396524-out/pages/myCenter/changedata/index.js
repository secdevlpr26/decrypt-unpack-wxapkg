var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../utils/WxValidate")), a = require("../../../utils/config.js"), t = getApp(), d = "";

Page({
    data: {
        date: "2016-09-01",
        start: "1919-01-01",
        end: "2019-10-01"
    },
    onLoad: function() {
        d = wx.getStorageSync("3rdsession");
        var e = this;
        e.getMemberInfo(), e.initValidate(), e.getNowTime();
    },
    bindDateChange: function(e) {
        this.setData({
            date: e.detail.value
        });
    },
    getNowTime: function() {
        var e = new Date(), a = e.getFullYear(), t = e.getMonth(), d = e.getDate();
        this.setData({
            end: a + "-" + (t + 1) + "-" + d
        });
    },
    getMemberInfo: function() {
        var e = this;
        wx.request({
            url: a.getMemberInfo,
            data: {
                sessionKey: d,
                scId: t.globalData.schoolId
            },
            success: function(a) {
                console.log("res.data.date.readerInfo", a.data.date.readerInfo), console.log("res.data.date.address.area", a.data.date.address), 
                200 == a.data.type ? null == a.data.date.address || null == a.data.date.address.area ? e.setData({
                    userinfo: a.data.date.readerInfo,
                    date: a.data.date.readerInfo.birthday,
                    locationAddress: "",
                    address: ""
                }) : e.setData({
                    userinfo: a.data.date.readerInfo,
                    date: a.data.date.readerInfo.birthday,
                    locationAddress: a.data.date.address.area,
                    address: a.data.date.address.address
                }) : wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            },
            fail: function(e) {
                wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    formSubmit: function(e) {
        var s = this, o = e.detail.value;
        if (console.log("表单提交数据", e.detail.value), console.log("日期", s.data.date), !this.WxValidate.checkForm(o)) {
            var n = this.WxValidate.errorList[0];
            return this.showModal(n), !1;
        }
        var r = s.data.date ? s.data.date : "2009-09-01", i = o.userName, l = o.area, u = o.address;
        wx.request({
            url: a.updateMemberInfo,
            data: {
                sessionKey: d,
                scId: t.globalData.schoolId,
                name: i,
                birthday: r,
                address: u,
                area: l
            },
            success: function(e) {
                console.log("修改资料", e), 200 == e.data.type ? wx.showToast({
                    title: e.data.content,
                    icon: "success",
                    duration: 3e3,
                    success: function() {
                        setTimeout(function() {
                            wx.navigateBack();
                        }, 2e3);
                    }
                }) : wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            },
            fail: function(e) {
                wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    addOpenMap: function() {
        var e = this;
        wx.chooseLocation({
            success: function(a) {
                e.setData({
                    locationAddress: a.address
                });
            }
        });
    },
    showModal: function(e) {
        wx.showModal({
            content: e.msg,
            showCancel: !1
        });
    },
    initValidate: function() {
        var a = {
            userName: {
                required: !0,
                userName: !0,
                maxlength: 45
            },
            area: {
                required: !0,
                area: !0,
                maxlength: 100
            },
            address: {
                required: !0,
                address: !0,
                maxlength: 100
            }
        }, t = {
            userName: {
                required: "请输入姓名",
                email: "请输入正确的邮箱"
            },
            area: {
                required: "请选择服务地址"
            },
            address: {
                required: "请输入详细地址"
            }
        };
        this.WxValidate = new e.default(a, t);
    }
});