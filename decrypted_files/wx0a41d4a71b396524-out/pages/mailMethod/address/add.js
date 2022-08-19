var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../utils/WxValidate.js")), t = require("../../../utils/config.js"), a = new (require("../../../utils/qqmap-wx-jssdk.min.js"))({
    key: t.addressPSW
}), o = getApp(), n = "", s = "", i = 0, r = 0, d = 0;

Page({
    data: {},
    getCurrentPosition: function() {
        var e = this;
        wx.getLocation({
            type: "wgs84",
            success: function(t) {
                t.latitude, t.longitude, t.speed, t.accuracy;
                o.globalData.lat = t.latitude, o.globalData.long = t.longitude, a.reverseGeocoder({
                    location: {
                        latitude: Number(t.latitude),
                        longitude: Number(t.longitude)
                    },
                    success: function(t) {
                        e.setData({
                            currentPosition: t.result.address,
                            locationAddress: t.result.formatted_addresses.recommend
                        });
                    }
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
    addOpenMap: function() {
        var e = this;
        wx.chooseLocation({
            success: function(t) {
                e.setData({
                    locationAddress: t.address,
                    currentDetailedAddress: t.name
                });
            }
        });
    },
    onLoad: function(e) {
        var t = this;
        s = wx.getStorageSync("3rdsession"), n = wx.getStorageSync("schoolId"), t.getCurrentPosition(), 
        t.initValidate();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    bindRegionChange: function(e) {
        var t = e.detail.value;
        "全部" != t[1] && "全部" != t[2] && this.setData({
            region: e.detail.value,
            isShowPoint: !0,
            locationAddress: e.detail.value[0] + e.detail.value[1] + e.detail.value[2]
        });
    },
    analysisAddress: function(e, t) {
        var o = this;
        a.geocoder({
            address: e,
            success: function(e) {
                i = 1, console.log("地址解析"), r = e.result.location.lng, d = e.result.location.lat, 
                o.formSubmit(t);
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
        var a = this, o = e.detail.value;
        if (console.log("form发生了submit事件，携带数据为：", e.detail.value), !this.WxValidate.checkForm(o)) {
            var l = this.WxValidate.errorList[0];
            return this.showModal(l), !1;
        }
        if (0 == i) return a.analysisAddress(o.area, e), !1;
        if (-1 == i) return !1;
        i = 0, console.log("经度" + r), console.log("纬度" + d);
        var u = o.userName, c = o.phone, f = o.area, h = o.address, g = o.isDefault;
        wx.request({
            url: t.saveAddress,
            data: {
                sessionKey: s,
                schoolId: n,
                userName: u,
                phone: c,
                area: f,
                address: h,
                isDefault: g
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
        var t = {
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
        }, a = {
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
        this.WxValidate = new e.default(t, a);
    }
});