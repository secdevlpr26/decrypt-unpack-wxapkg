require("../../../util/qqmap-wx-jssdk.js");

var e, a = require("../../../../utils/util.js"), t = getApp().globalData.httpUrl, s = !1;

Page({
    data: {
        cartArr: [ {
            name: "男",
            value: "男",
            checked: !0
        }, {
            name: "女",
            value: "女",
            checked: !1
        } ],
        sex: "男",
        name: "",
        telphone: "",
        address: "",
        countryIndex: 6,
        region: [],
        savedAddress: !1,
        longitude: "",
        latitude: "",
        addName: "",
        addJw: "",
        province: "",
        city: "",
        district: ""
    },
    sexChange: function(a) {
        e.setData({
            sex: a.detail.value
        });
    },
    changeRegin: function(a) {
        console.log("选择了什么区", a.detail.value), e.setData({
            region: a.detail.value
        }), wx.request({
            url: t + "skmembermodel/selLonAndLatByAddress",
            data: {
                wechatUserAddressAddress: a.detail.value + "," + e.data.addName
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                console.log("小修改省市区---", a.data);
                a.data;
                e.data.region[2] == e.data.region0[2] ? console.log("我是一样的") : (console.log("我是不一样的"), 
                e.setData({
                    longitude: a.data.lat,
                    latitude: a.data.lng
                }));
            }
        });
    },
    bindNameInput: function(a) {
        e.setData({
            name: a.detail.value
        });
    },
    bindTelInput: function(a) {
        e.setData({
            telphone: a.detail.value
        });
    },
    bindAddressInput: function(a) {
        e.setData({
            address: a.detail.value
        });
    },
    onLoad: function(s) {
        e = this, console.log("options------------------", s), a.getShareInfos(e, t), a.setCompanyId(e, s), 
        a.setStoreId(e), a.setStoreInfo(e);
        var d = s.type;
        console.log(d), e.setData({
            addressType: d
        });
        var o = s.address;
        o ? wx.getLocation({
            type: "wgs84",
            success: function(a) {
                console.log("获取经纬度", a), e.setData({
                    longi: a.longitude,
                    latit: a.latitude
                });
            },
            fail: function(e) {
                console.log("为嘛获取不到经纬===》", e);
            }
        }) : wx.getStorage({
            key: "jwd",
            success: function(a) {
                var t = a.data.longitude, s = a.data.latitude;
                console.log("获取-----", a), e.setData({
                    longitude: t,
                    latitude: s,
                    longi: t,
                    latit: s
                }), e.ssq();
            }
        }), console.log(s), console.log("options.type ==> " + s.type), o ? (e.setData({
            addressId: o
        }), wx.request({
            url: t + "skmembermodel/selAddressByid",
            data: {
                wechatUserAddressId: o
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                console.log("res.data ==> "), console.log(a.data);
                var t = e.data.region;
                t = a.data.wechatUserAddressAddress.split(",");
                for (var s = e.data.cartArr, o = a.data.wechatUserAddressReceiverName, n = a.data.wechatUserAddressReceiverPhoneNum, r = a.data.wechatUserAddressFullAddress.split(","), l = 0; l < r.length; l++) console.log("看看经纬度====>", r[l]), 
                r[l];
                var i = r[0], c = r[1];
                for (var u in s) s[u].value == a.data.wechatUserAddressSex ? s[u].checked = !0 : s[u].checked = !1;
                e.setData({
                    addressInfo: a.data,
                    addressType: d,
                    title: "修改地址",
                    region: t,
                    region0: t,
                    cartArr: s,
                    name: o,
                    telphone: n,
                    addName: i,
                    address: c
                });
            }
        })) : e.setData({
            addressType: d,
            title: "新增地址"
        });
    },
    ssq: function() {
        wx.request({
            url: t + "skmembermodel/getLocation",
            data: {
                lng: e.data.longitude,
                lat: e.data.latitude
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                console.log(e.data.longitude, "经度", e.data.latitude, "维度");
                var t = a.data.province, s = a.data.city, d = a.data.district, o = [];
                o.push(t), o.push(s), o.push(d), e.setData({
                    region: o,
                    region0: o,
                    province: t,
                    city: s,
                    district: d
                });
            }
        });
    },
    onReady: function() {},
    closeTk: function() {
        e.setData({
            displa: !1
        });
    },
    onShow: function() {
        e = this, wx.onSocketMessage(function(t) {
            console.log("===========接收到服务器信息=============="), console.log(t.data), a.getTkInfos(e, t), 
            a.playMusic(e, t);
        }), wx.onSocketClose(function() {
            console.log("=======webSocket已关闭========="), wx.getStorage({
                key: "userId",
                success: function(e) {
                    a.conSocket(e.data, t);
                }
            });
        }), wx.getStorage({
            key: "addName",
            success: function(a) {
                var t = a.data;
                e.setData({
                    addName: t
                });
            }
        }), wx.removeStorage({
            key: "addName",
            success: function(e) {}
        }), wx.getStorage({
            key: "addJw",
            success: function(a) {
                for (var t = a.data.split(","), s = 0; s < t.length; s++) console.log("看看经纬度====>", t[s]), 
                t[s];
                console.log("经度====>", t[0]), console.log("纬度====>", t[1]), e.setData({
                    longitude: t[0],
                    latitude: t[1]
                });
            }
        }), wx.removeStorage({
            key: "addJw",
            success: function(e) {}
        });
    },
    onHide: function() {},
    onUnload: function() {
        a.closeSock();
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh(), e = this, setTimeout(function() {
            e.onPullDownRefresh();
        }, 500);
    },
    onReachBottom: function() {},
    seAddress: function() {
        var a = e.data.region[1];
        console.log("获得的城市==>", a), wx.setStorage({
            key: "saddress",
            data: a
        });
        var s = e.data.region;
        wx.request({
            url: t + "skmembermodel/selLonAndLatByAddress",
            data: {
                wechatUserAddressAddress: s
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                var t = a.data;
                e.data.region[2] == e.data.region0[2] ? (console.log("我是一样的"), wx.setStorage({
                    key: "re",
                    data: {
                        lng: e.data.longi,
                        lat: e.data.latit
                    }
                })) : (console.log("我是不一样的"), wx.setStorage({
                    key: "re",
                    data: t
                })), setTimeout(function() {
                    wx.navigateTo({
                        url: "../seAddress/seAddress"
                    });
                }, 50);
            }
        });
    },
    onShareAppMessage: function() {
        return {
            title: e.data.shareTitle,
            desc: "",
            imageUrl: e.data.shareImgUrl,
            path: "/pages/index/index?storeId=" + e.data.storeId + "&companyId=" + e.data.companyId,
            success: function(e) {
                console.log("转发成功");
            },
            fail: function(e) {
                console.log("转发失败");
            }
        };
    },
    saveAddress: function() {
        var e = this;
        if (!s) {
            s = !0;
            var a = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
            if (null == e.data.name || "" == e.data.name) return e.setData({
                popErrorMsg: "姓名不能为空"
            }), void e.ohShitfadeOut();
            if (!e.data.savedAddress) {
                if (null == e.data.telphone || "" == e.data.telphone) return e.setData({
                    popErrorMsg: "手机号不能为空"
                }), void e.ohShitfadeOut();
                if (!a.test(e.data.telphone)) return e.setData({
                    popErrorMsg: "手机号码格式错误"
                }), void e.ohShitfadeOut();
                if (null == e.data.address || "" == e.data.address) return e.setData({
                    popErrorMsg: "详细地址不能为空"
                }), void e.ohShitfadeOut();
                if (null == e.data.addName || "" == e.data.addName) return e.setData({
                    popErrorMsg: "收货地址不能为空"
                }), void e.ohShitfadeOut();
                e.setData({
                    savedAddress: !0
                }), wx.getStorage({
                    key: "userId",
                    success: function(a) {
                        var d = void 0;
                        d = "新增地址" == e.data.title ? t + "skmembermodel/insertAddress" : t + "skmembermodel/updateAddress";
                        var o = e.data.addName + "," + e.data.address;
                        setTimeout(function() {
                            wx.request({
                                url: d,
                                data: {
                                    wechatUserAddressId: e.data.addressId,
                                    wechatUserAddressWechatUserId: a.data,
                                    wechatUserAddressFullAddress: o,
                                    wechatUserAddressIsDefault: "0",
                                    wechatUserAddressReceiverName: e.data.name,
                                    wechatUserAddressReceiverPhoneNum: e.data.telphone,
                                    wechatUserAddressAddress: e.data.region,
                                    wechatUserAddressSex: e.data.sex,
                                    addressType: e.data.addressType,
                                    longitude: e.data.latitude,
                                    latitude: e.data.longitude
                                },
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                success: function(a) {
                                    wx.setStorage({
                                        key: "addressType",
                                        data: e.data.addressType
                                    }), wx.setStorage({
                                        key: "onshow",
                                        data: !0
                                    }), wx.navigateBack();
                                },
                                complete: function(e) {
                                    s = !1;
                                }
                            });
                        }, 1e3);
                    }
                });
            }
        }
    },
    ohShitfadeOut: function() {
        var a = setTimeout(function() {
            e.setData({
                popErrorMsg: ""
            }), clearTimeout(a);
        }, 3e3);
    }
});