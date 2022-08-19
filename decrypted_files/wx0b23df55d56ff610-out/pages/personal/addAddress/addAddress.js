var e, t = require("../../../comm/script/config"), s = (require("../../../comm/script/fetch"), 
require("../../../util/util")), a = getApp(), c = require("../../../comm/script/qqmap-wx-jssdk.js"), d = require("../../../component/message/message.js"), i = require("../../../utils/server");

Page({
    onChange: function(e) {
        this.setData({
            selectedAddress: e
        }), this.getCityId();
    },
    data: {
        message: {},
        searchType: "0",
        namefocus: !1,
        addressfocus: !1,
        selectedAddress: {},
        contacts: "",
        selectedGenderId: "1",
        hasSubmited: !1,
        genderList: [ {
            gender: "先生",
            genderId: "1"
        }, {
            gender: "女士",
            genderId: "2"
        } ],
        defaultImg: "https://pic.hiweixiu.com/hiweixiu-app/weapp/img/170204012.png",
        checkedImg: "https://pic.hiweixiu.com/hiweixiu-app/weapp/img/170204013.png"
    },
    chooseSearchType: function() {
        var e = this;
        e.chooseLocation();
    },
    chooseLocation: function() {
        var e = this;
        wx.getSetting({
            success: function(t) {
                t.authSetting["scope.userLocation"] ? e.wxchooseLocation() : wx.authorize({
                    scope: "scope.userLocation",
                    success: function() {
                        e.wxchooseLocation();
                    },
                    fail: function() {
                        wx.showModal({
                            title: "提醒",
                            content: "您拒绝盐城手机维修获取您的位置，这将导致不能正常下单，点击确定按钮，重新授权Hi维修",
                            success: function(e) {
                                e.confirm ? wx.openSetting() : e.cancel;
                            }
                        });
                    }
                });
            }
        });
    },
    wxchooseLocation: function() {
        var t = this, s = new Object();
        wx.chooseLocation({
            success: function(a) {
                var c = a.name, d = a.address;
                e.reverseGeocoder({
                    location: {
                        latitude: a.latitude,
                        longitude: a.longitude
                    },
                    success: function(e) {
                        var a = e.result;
                        s.address_name = c, s.address_desc = d, s.address = c + "" + d, s.districtID = a.ad_info.adcode, 
                        s.lng = a.location.lng, s.lat = a.location.lat, s.province = a.ad_info.province, 
                        s.city = a.ad_info.city, s.district = a.ad_info.district, t.setData({
                            selectedAddress: s
                        });
                    },
                    fail: function(e) {},
                    complete: function(e) {
                        wx.showLoading({
                            title: "获取地址中",
                            mask: !0
                        }), t.getCityId();
                    }
                });
            }
        });
    },
    goToSearchAddress: function(e) {
        wx.navigateTo({
            url: "../searchAddress/searchAddress"
        });
    },
    onLoad: function(t) {
        this.setData({
            t: t.type
        }), wx.getSetting || wx.showModal({
            title: "提示",
            content: "当前微信版本过低，无法正常使用该功能，请升级到最新微信版本后重试。",
            success: function(e) {
                e.confirm ? wx.navigateBack() : e.cancel && wx.navigateBack();
            }
        });
        var s = JSON.parse(t.selectedAddress), d = this;
        e = new c({
            key: "ZMGBZ-XORRU-7L7VC-4PU2Q-3E652-R3F44"
        }), d.setData({
            selectedAddress: s,
            contacts: s.contacts,
            searchType: a.globalData.configLists.location_switch
        });
    },
    getCityId: function() {
        var e = this, t = e.data.selectedAddress;
        i.getJSON("/User/checkCity", {
            district: t.district
        }, function(s) {
            "200" == s.data.code ? (t.cityID = s.data.city_id, t.districtID = s.data.district_id, 
            e.setData({
                selectedAddress: t
            }), wx.hideLoading()) : (wx.hideLoading(), t.cityID = "", 2 == e.data.t && (t.cityID = 200), 
            e.setData({
                selectedAddress: t
            }));
        });
    },
    creatAddress: function(e) {
        var t = this;
        t.data.selectedAddress.selectedGenderId = t.data.selectedGenderId, t.data.selectedAddress.contacts = t.data.contacts, 
        wx.setStorage({
            key: "address",
            data: t.data.selectedAddress
        }), wx.navigateBack({
            delta: 1
        });
    },
    inputName: function(e) {
        this.setData({
            contacts: e.detail.value,
            focus: !0
        });
    },
    inputAddress: function(e) {
        var t = this;
        t.data.selectedAddress.address_desc = e.detail.value, t.setData({
            focus: !0
        });
    },
    selectAddress: function(e) {
        wx.navigateTo({
            url: "../../personal/searchAddress/searchAddress"
        });
    },
    selectGender: function(e) {
        var t = e.currentTarget.id;
        t && this.setData({
            selectedGenderId: t
        });
    },
    submit: function(e) {
        var a = this;
        if (a.data.hasSubmited) d.show.call(a, {
            content: "添加中，请稍后",
            icon: "tip"
        }); else {
            if (s.isBlank(a.data.contacts)) return d.show.call(a, {
                content: "请填写姓名",
                icon: "tip"
            }), !1;
            if (s.isBlank(a.data.selectedAddress.address_desc)) return d.show.call(a, {
                content: "请填写详细地址",
                icon: "tip"
            }), !1;
            if (a.data.selectedAddress.address = a.data.selectedAddress.address_name + " " + a.data.selectedAddress.address_desc, 
            s.isBlank(a.data.selectedAddress.cityID)) return d.show.call(a, {
                content: "城市未开通",
                icon: "tip"
            }), void wx.removeStorageSync(t.storageKeys.selectedAddress);
            a.setData({
                hasSubmited: !0
            }), a.creatAddress();
        }
    },
    stopTouchMove: function() {},
    stopTap: function() {}
});