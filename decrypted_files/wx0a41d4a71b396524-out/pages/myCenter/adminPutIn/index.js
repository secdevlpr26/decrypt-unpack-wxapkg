function t(t, a, o) {
    return a in t ? Object.defineProperty(t, a, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = o, t;
}

var a = require("../../../utils/config.js");

Page({
    data: {
        formData: {
            schoolId: "",
            schoolName: "",
            isbn: "",
            barCode: "",
            clientId: ""
        }
    },
    onLoad: function(a) {
        this.setData(t({}, "formData.schoolId", a.schoolId));
    },
    onReady: function() {},
    onShow: function() {},
    formInput: function(a) {
        var o = a.currentTarget.dataset.name;
        console.log("值改变", a), this.setData(t({}, "formData." + o, a.detail.value));
    },
    scanCode: function(a) {
        var o = this, n = a.currentTarget.dataset.type;
        wx.scanCode({
            onlyFromCamera: !0,
            scanType: [ "barCode" ],
            success: function(a) {
                console.log("条码返回值", a);
                var e = a.result;
                e.trim() ? o.setData(t({}, "formData." + n, e)) : wx.showToast({
                    title: "识别识别！",
                    icon: "none"
                });
            }
        });
    },
    warehousing: function() {
        var t = this;
        if (!t.formDataValidate()) return !1;
        var o = t.data.formData;
        wx.request({
            method: "POST",
            url: a.adminPutIn + "?schoolId=" + o.schoolId + "&isbn=" + o.isbn + "&barCode=" + o.barCode,
            success: function(a) {
                wx.hideLoading(), 200 == a.data.type ? wx.showModal({
                    title: "入库成功",
                    content: a.data.content,
                    showCancel: !1,
                    success: function(a) {
                        a.confirm && t.formClear();
                    }
                }) : wx.showToast({
                    title: a.data.content,
                    icon: "none"
                });
            },
            fail: function(t) {
                wx.hideLoading(), wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    launch: function() {
        var t = this;
        if (!t.formDataValidate(1)) return !1;
        var o = t.data.formData;
        wx.request({
            method: "POST",
            url: a.adminPutIn + "?schoolId=" + o.schoolId + "&isbn=" + o.isbn + "&barCode=" + o.barCode + "&clientId=" + o.clientId,
            success: function(a) {
                wx.hideLoading(), 200 == a.data.type ? wx.showModal({
                    title: "投放成功",
                    content: a.data.content,
                    showCancel: !1,
                    success: function(a) {
                        a.confirm && t.formClear();
                    }
                }) : wx.showToast({
                    title: a.data.content,
                    icon: "none"
                });
            },
            fail: function(t) {
                wx.hideLoading(), wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    formDataValidate: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, a = "";
        return this.data.formData.schoolId.trim() || (a = "未获取到租户，请重新登录管理员。"), this.data.formData.isbn.trim() || (a = "isbn号不得为空"), 
        this.data.formData.barCode.trim() || (a = "条码号不得为空"), 0 == t || this.data.formData.clientId.trim() || (a = "设备编号不得为空"), 
        !a || (wx.showToast({
            title: a,
            icon: "none"
        }), !1);
    },
    formClear: function() {
        var a;
        this.setData((a = {}, t(a, "formData.isbn", ""), t(a, "formData.barCode", ""), t(a, "formData.clientId", ""), 
        a));
    }
});