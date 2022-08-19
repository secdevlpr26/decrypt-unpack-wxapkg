var t, e = require("../../../utils/server");

Page({
    isDefault: !1,
    formSubmit: function(a) {
        var i, n, s, r = this.data.mobile, o = this.data.zipcode, d = this.data.consignee, c = this.data.address, u = getApp().globalData.userInfo.user_id;
        0 == this.data.regionObjects.length ? (i = this.data.provincev, n = this.data.cityvalue, 
        s = this.data.district) : (i = this.data.provinceObjects[this.data.provinceIndex].id, 
        n = this.data.cityObjects[this.data.cityIndex].id, s = this.data.regionObjects[this.data.regionIndex].id);
        var h = this;
        e.postJSON("/User/editAddress/user_id/" + u + "/address_id/" + t, {
            user_id: u,
            mobile: r,
            zipcode: o,
            consignee: d,
            address: c,
            is_default: 1,
            country: 1,
            twon: 0,
            province: i,
            city: n,
            district: s,
            address_id: t
        }, function(t) {
            1 == t.data.status && (wx.showToast({
                title: "保存成功",
                duration: 1e3
            }), 1 == h.data.returnTo ? setTimeout(function() {
                wx.navigateTo({
                    url: "../../order/ordersubmit/index"
                });
            }, 1e3) : wx.navigateBack());
        });
    },
    nameChange: function(t) {
        var e = t.detail.value;
        this.setData({
            consignee: e
        });
    },
    addressChange: function(t) {
        var e = t.detail.value;
        this.setData({
            address: e
        });
    },
    phoneChange: function(t) {
        var e = t.detail.value;
        this.setData({
            mobile: e
        });
    },
    yzChange: function(t) {
        var e = t.detail.value;
        this.setData({
            zipcode: e
        });
    },
    data: {
        current: 0,
        province: [],
        city: [],
        region: [],
        town: [],
        provinceObjects: [],
        cityObjects: [],
        regionObjects: [],
        townObjects: [],
        areaSelectedStr: "请选择省市区",
        maskVisual: "hidden",
        provinceName: "请选择"
    },
    getArea: function(t, a) {
        e.getJSON("/User/getArea/parent_id/" + t, function(t) {
            a(t.data.result);
        });
    },
    onLoad: function(t) {
        var e = t.returnTo;
        this.setData({
            returnTo: e
        });
        var a = this;
        this.getArea(0, function(t) {
            for (var e = [], i = 0; i < t.length; i++) e[i] = t[i].name;
            a.setData({
                province: e,
                provinceObjects: t
            });
        }), this.setDefault(), this.loadAddress(t);
    },
    loadAddress: function(a) {
        var i = this, n = getApp().globalData.userInfo.user_id;
        void 0 != a.objectId && (t = a.objectId, e.getJSON("/User/get_address/user_id/" + n + "/id/" + a.objectId, function(t) {
            var e = t.data.result;
            i.setData({
                areaSelectedStr: e.city,
                mobile: e.mobile,
                zipcode: e.zipcode,
                address: e.address,
                consignee: e.consignee,
                district: e.district,
                cityvalue: e.cityvalue,
                provincev: e.province
            });
        }));
    },
    setDefault: function() {
        var t = this, e = AV.User.current(), a = new AV.Query("Address");
        a.equalTo("user", e), a.count().then(function(e) {
            e <= 0 && (t.isDefault = !0);
        });
    },
    cascadePopup: function() {
        var t = wx.createAnimation({
            duration: 500,
            timingFunction: "ease-in-out"
        });
        this.animation = t, t.translateY(-285).step(), this.setData({
            animationData: this.animation.export(),
            maskVisual: "show"
        });
    },
    cascadeDismiss: function() {
        this.animation.translateY(285).step(), this.setData({
            animationData: this.animation.export(),
            maskVisual: "hidden"
        });
    },
    provinceTapped: function(t) {
        var e = t.currentTarget.dataset.index;
        this.setData({
            provinceName: this.data.province[e],
            regionName: "",
            townName: "",
            provinceIndex: e,
            cityIndex: -1,
            regionIndex: -1,
            townIndex: -1,
            region: [],
            town: []
        });
        var a = this;
        this.getArea(this.data.provinceObjects[e].id, function(t) {
            for (var e = [], i = 0; i < t.length; i++) e[i] = t[i].name;
            a.setData({
                cityName: "请选择",
                city: e,
                cityObjects: t
            }), a.setData({
                current: 1
            });
        });
    },
    cityTapped: function(t) {
        var e = t.currentTarget.dataset.index;
        this.setData({
            cityIndex: e,
            regionIndex: -1,
            townIndex: -1,
            cityName: this.data.city[e],
            regionName: "",
            townName: "",
            town: []
        });
        var a = this;
        this.getArea(this.data.cityObjects[e].id, function(t) {
            for (var e = [], i = 0; i < t.length; i++) e[i] = t[i].name;
            a.setData({
                regionName: "请选择",
                region: e,
                regionObjects: t
            }), a.setData({
                current: 2
            });
        });
    },
    regionTapped: function(t) {
        var e = t.currentTarget.dataset.index;
        this.setData({
            regionIndex: e,
            townIndex: -1,
            regionName: this.data.region[e],
            townName: ""
        });
        var a = this;
        this.getArea(this.data.regionObjects[e].id, function(t) {
            if (0 == t.length) {
                var e = a.data.provinceName + a.data.cityName + a.data.regionName;
                return a.setData({
                    areaSelectedStr: e
                }), void a.cascadeDismiss();
            }
            for (var i = [], n = 0; n < t.length; n++) i[n] = t[n].name;
            a.setData({
                townName: "请选择",
                town: i,
                townObjects: t
            }), a.setData({
                current: 3
            });
        });
    },
    townTapped: function(t) {
        var e = t.currentTarget.dataset.index;
        this.setData({
            townIndex: e,
            townName: this.data.town[e]
        });
        var a = this.data.provinceName + this.data.cityName + this.data.regionName + this.data.townName;
        this.setData({
            areaSelectedStr: a
        }), this.cascadeDismiss();
    },
    currentChanged: function(t) {
        var e = t.detail.current;
        this.setData({
            current: e
        });
    },
    changeCurrent: function(t) {
        var e = t.currentTarget.dataset.current;
        this.setData({
            current: e
        });
    }
});