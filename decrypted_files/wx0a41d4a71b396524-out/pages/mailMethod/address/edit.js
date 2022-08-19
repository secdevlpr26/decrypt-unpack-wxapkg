var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../utils/WxValidate.js")), a = require("../../../utils/config.js"), t = require("../../../utils/qqmap-wx-jssdk.min.js"), o = (require("../../../utils/promise.js"), 
new t({
    key: a.addressPSW
})), n = (getApp(), ""), s = "", i = 0, r = 0, d = 0;

Page({
    data: {
        region: [ "重庆市", "重庆市", "渝中区" ],
        customItem: "全部"
    },
    onLoad: function(e) {
        var a = this, t = e.id;
        s = wx.getStorageSync("3rdsession"), n = wx.getStorageSync("schoolId"), a.loadaddr(t), 
        a.initValidate();
    },
    addOpenMap: function() {
        var e = this;
        wx.chooseLocation({
            success: function(a) {
                e.setData({
                    locationAddress: a.address,
                    currentDetailedAddress: a.name
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    loadaddr: function(e) {
        var t = this;
        wx.request({
            url: a.editPage,
            data: {
                id: e
            },
            success: function(e) {
                200 == e.data.type ? (console.log(e), t.setData({
                    address: e.data.date,
                    locationAddress: e.data.date.area
                })) : wx.showToast({
                    title: e.data.content,
                    icon: "none"
                });
            },
            fail: function(e) {
                wx.showToast({
                    title: "网络异常，请稍后重试",
                    icon: "none"
                }), reject("error");
            }
        });
    },
    bindRegionChange: function(e) {
        console.log("点击按钮"), console.log(e);
        var a = e.detail.value;
        "全部" != a[1] && "全部" != a[2] && this.setData({
            region: e.detail.value,
            isShowPoint: !0,
            locationAddress: e.detail.value[0] + e.detail.value[1] + e.detail.value[2]
        });
    },
    analysisAddress: function(e, a) {
        var t = this;
        o.geocoder({
            address: e,
            success: function(e) {
                i = 1, console.log("地址解析"), r = e.result.location.lng, d = e.result.location.lat, 
                t.formSubmit(a);
            },
            fail: function(e) {
                i = -1, wx.showModal({
                    content: "地址输入有误",
                    showCancel: !1
                }), i = 0;
            },
            complete: function(e) {}
        });
    },
    formSubmit: function(e) {
        var t = this, o = e.detail.value;
        if (console.log("form发生了submit事件，携带数据为：", e.detail.value), !this.WxValidate.checkForm(o)) {
            var l = this.WxValidate.errorList[0];
            return this.showModal(l), !1;
        }
        if (0 == i) return t.analysisAddress(o.area, e), !1;
        if (-1 == i) return !1;
        i = 0, console.log("经度" + r), console.log("纬度" + d);
        var u = o.userName, c = o.phone, f = o.area, h = o.address, g = o.id, w = o.isDefault, m = o.isDel;
        wx.request({
            url: a.editAddress,
            data: {
                sessionKey: s,
                schoolId: n,
                userName: u,
                phone: c,
                area: f,
                address: h,
                id: g,
                isDefault: w,
                isDel: m
            },
            success: function(e) {
                200 == e.data.type ? wx.navigateTo({
                    url: "index"
                }) : wx.showToast({
                    title: e.data.content,
                    icon: "none"
                });
            },
            fail: function(e) {
                wx.showToast({
                    title: "网络异常，请稍后重试",
                    icon: "none"
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
            phone: {
                required: !0,
                tel: !0,
                maxlength: 11
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
                required: "请输入联系人姓名",
                email: "请输入正确的邮箱"
            },
            phone: {
                required: "请输入手机号",
                tel: "请输入正确的手机号"
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