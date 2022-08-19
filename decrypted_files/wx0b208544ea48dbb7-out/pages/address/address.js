function t(t, e, i) {
    return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = i, t;
}

var e = getApp(), i = e.globalData.config.base;

Page({
    data: {
        province: [ {
            id: 0,
            name: "请选择省份",
            level: 1,
            parent_id: 0
        } ],
        city: [ {
            id: 0,
            name: "请选择城市",
            level: 2,
            parent_id: 1
        } ],
        district: [ {
            id: 0,
            name: "请选择区域",
            level: 3,
            parent_id: 2
        } ],
        street: [ {
            id: 0,
            name: "请选择街道",
            level: 4,
            parent_id: 3
        } ],
        addressInfo: {
            province: {
                index: 0,
                id: 0
            },
            city: {
                index: 0,
                id: 0
            },
            district: {
                index: 0,
                id: 0
            },
            street: {
                index: 0,
                id: 0
            },
            iphone: "",
            name: "",
            address: "",
            isDefault: !0
        },
        isDefault: !0
    },
    onLoad: function(t) {
        console.log(t);
        var e = this;
        t.first && this.setData({
            first: !0
        }), this.setData({
            addressId: t.id ? t.id : 0
        }), this.setAddress(0, "province", function() {
            t.id && e.fillAddress(t.id);
        });
    },
    onShareAppMessage: function() {
        return {
            title: e.globalData.config.title,
            path: "/pages/index/index?upperuid=" + (wx.getStorageSync("myuid") || wx.getStorageSync("parentuid") || param.upperuid)
        };
    },
    onReady: function() {},
    onShow: function() {},
    changeDefault: function() {
        var t = this.data.addressInfo.isDefault, e = this.data.addressInfo;
        t ? (this.data.addressInfo.isDefault = !1, this.setData({
            addressInfo: e
        })) : (this.data.addressInfo.isDefault = !0, this.setData({
            addressInfo: e
        }));
    },
    choiceAddress: function(t) {
        var e = this, i = t.currentTarget.dataset.setname, d = t.detail.value, s = e.data.addressInfo;
        if ("province" == i) {
            var a = e.data.province[d].id;
            s[i].id = e.data.province[d].id, s[i].index = d, e.setAddress(a, "city", function() {
                s.city.id = e.data.city[0].id, s.city.index = 0;
                var t = e.data.city[0].id;
                e.setAddress(t, "district", function() {
                    s.district.id = e.data.district[0].id, s.district.index = 0;
                    var t = e.data.district[0].id;
                    e.setAddress(t, "street", function() {
                        s.street.id = e.data.street[0].id, s.street.index = 0, e.setData({
                            addressInfo: s
                        });
                    });
                });
            });
        } else if ("city" == i) {
            s[i].id = e.data.city[d].id, s[i].index = d;
            var r = e.data.city[d].id;
            e.setAddress(r, "district", function() {
                s.district.id = e.data.district[0].id, s.district.index = 0;
                var t = e.data.district[0].id;
                e.setAddress(t, "street", function() {
                    s.street.id = e.data.street[0].id, s.street.index = 0, e.setData({
                        addressInfo: s
                    });
                });
            });
        } else if ("district" == i) {
            var n = e.data.district[d].id;
            s[i].id = e.data.district[d].id, s[i].index = d, e.setAddress(n, "street", function() {
                s.street.id = e.data.street[0].id, s.street.index = 0, e.setData({
                    addressInfo: s
                });
            });
        } else "street" == i && (s[i].id = e.data.street[d].id, s[i].index = d, e.setData({
            addressInfo: s
        }));
    },
    setAddress: function(e, d, s) {
        var a = this;
        wx.request({
            url: i + "Mobile/Api/getRegion?parent_id=" + e,
            method: "GET",
            header: {
                "content-type": "application"
            },
            success: function(e) {
                a.setData(t({}, d, e.data)), s && s();
            }
        });
    },
    fillAddress: function(t) {
        var d = e.globalData.userKey, s = this;
        console.log(8899), wx.request({
            url: i + "Mobile/UserApi/address_list",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                userkey: d
            },
            success: function(e) {
                var i = e.data.filter(function(e, i) {
                    return e.address_id.toString() === t.toString();
                })[0];
                i.name = i.consignee, i.iphone = i.mobile, s.setData({
                    addressInfo: i,
                    isDefault: i.isDefault
                });
                var d = i.province, a = i.city, r = i.district, n = i.twon;
                i.province = {};
                s.data.province.filter(function(t, e) {
                    if (t.id === d) return i.province.id = t.id, i.province.index = e, t.id === d;
                })[0];
                i.province.index = i.province.index || 0, s.setAddress(d, "city", function() {
                    i.city = {};
                    s.data.city.filter(function(t, e) {
                        if (t.id === a) return i.city.id = t.id, i.city.index = e, t.id === a;
                    })[0];
                    s.setAddress(a, "district", function() {
                        i.district = {};
                        s.data.district.filter(function(t, e) {
                            if (t.id === r) return i.district.id = t.id, i.district.index = e, t.id === r;
                        })[0];
                        s.setAddress(r, "street", function() {
                            i.street = {};
                            s.data.street.filter(function(t, e) {
                                if (t.id === n) return i.street.id = t.id, i.street.index = e, t.id === n;
                            })[0];
                            s.setData({
                                addressInfo: i
                            });
                        });
                    });
                });
            }
        });
    },
    inputInfo: function(t) {
        var e = t.currentTarget.dataset.name, i = this.data.addressInfo;
        i[e] = t.detail.value, this.setData({
            addressInfo: i
        });
    },
    submitAddress: function() {
        var t = /^1[3|4|5|7|8|9]{1}(\d+){9}$/, d = e.globalData.userKey, s = this, a = this.data.addressInfo, r = a.province.id, n = a.city.id, o = a.district.id, c = a.street.id, u = a.name, f = a.iphone, l = a.address, p = a.isDefault;
        if (c = void 0 === c ? "" : c, console.log(111), this.data.addressId && 0 != this.data.addressId) {
            var v = this.data.addressId;
            t.test(f) && l && u && wx.request({
                url: i + "/Mobile/UserApi/edit_address_deal",
                method: "GET",
                header: {
                    "content-type": "application"
                },
                data: {
                    id: v,
                    userkey: d,
                    consignee: u,
                    country: 1,
                    province: r,
                    city: n,
                    district: o,
                    twon: c,
                    address: l,
                    mobile: f,
                    zipcode: "",
                    is_default: p ? 1 : 0
                },
                success: function(t) {
                    0 == t.data.error ? wx.redirectTo({
                        url: "../addressbook/addressbook"
                    }) : wx.showModal({
                        title: "提示",
                        content: "修改失败",
                        showCancel: !1,
                        success: function(t) {}
                    });
                }
            });
        } else t.test(f) && l && u ? wx.request({
            url: i + "Mobile/UserApi/add_address",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                userkey: d,
                consignee: u,
                country: 1,
                province: r,
                city: n,
                district: o,
                twon: c,
                address: l,
                mobile: f,
                zipcode: "",
                is_default: p ? 1 : 0
            },
            success: function(t) {
                var e = s.data.first;
                e ? wx.navigateBack() : 0 != t.data.error && "添加成功" != t.data.msg || e ? wx.showModal({
                    title: "提示",
                    content: "添加失败",
                    showCancel: !1,
                    success: function(t) {}
                }) : wx.redirectTo({
                    url: "../addressbook/addressbook"
                });
            }
        }) : wx.showModal({
            title: "提示",
            content: "请输入正确信息",
            showCancel: !1,
            success: function(t) {}
        });
    }
});