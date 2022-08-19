function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../utils/api")), a = t(require("../../common/toast/toast"));

getApp();

Page({
    data: {
        isDefault: !1,
        Latitude: null,
        Longitude: null,
        location: "",
        address: "",
        name: "",
        mobile: null,
        detailAddr: "",
        addressId: ""
    },
    onLoad: function(t) {
        var a = this;
        this.data.isEdit = 0 != Object.keys(t).length, this.data.isEdit && (wx.showLoading({
            title: "加载中"
        }), this.data.addressId = t.id, e.default.getDataAddr("/serviceAddress/getData", {
            addressId: t.id
        }).then(function(t) {
            setTimeout(function() {
                wx.hideLoading();
            }, 300), a.setData({
                Latitude: t.result.Latitude,
                Longitude: t.result.Longitude,
                location: t.result.location,
                address: t.result.address,
                detailAddr: t.result.detailAddr,
                addressId: t.result.id,
                isDefault: t.result.isDefault,
                mobile: t.result.mobile,
                name: t.result.name
            });
        }));
    },
    onShow: function() {
        var t = wx.getStorageSync("search_addr");
        t && this.setData({
            Latitude: t.Latitude,
            Longitude: t.Longitude,
            location: t.name,
            address: t.address
        });
    },
    onUnload: function() {
        wx.removeStorageSync("search_addr");
    },
    validatePhone: function(t) {
        return t.detail.value.replace(/\D+/g, "");
    },
    validateEmoji: function(t) {
        var e = t.detail.value;
        return e = e.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, "");
    },
    switch2Change: function(t) {
        this.setData({
            isDefault: t.detail.value
        });
    },
    formSubmit: function(t) {
        var d = this, i = t.detail.value;
        console.log(i), i.name ? /^1[23456789]\d{9}$/.test(i.phone) ? i.addr ? i.mark ? e.default.updateAddr("/serviceAddress/update", {
            address: this.data.address,
            consignee: i.name,
            addressId: this.data.addressId,
            detailAddr: i.mark,
            isDefault: i.isDefault ? 1 : 0,
            latitude: this.data.Latitude,
            longitude: this.data.Longitude,
            mobile: i.phone,
            location: i.addr
        }).then(function(t) {
            if (d.data.isEdit) return wx.showToast({
                title: "修改成功",
                icon: "success",
                duration: 800
            }), void setTimeout(function() {
                wx.navigateBack();
            }, 800);
            wx.showToast({
                title: "添加成功",
                icon: "success",
                duration: 800
            }), setTimeout(function() {
                wx.navigateBack();
            }, 800);
        }) : a.default.show({
            type: "text",
            timer: 1500,
            text: "请输入门牌地址"
        }) : a.default.show({
            type: "text",
            timer: 1500,
            text: "请输入服务地址"
        }) : a.default.show({
            type: "text",
            timer: 1500,
            text: "请输入正确的联系电话"
        }) : a.default.show({
            type: "text",
            timer: 1500,
            text: "请输入联系人"
        });
    }
});