var a = getApp(), t = !1, e = "";

Page({
    data: {
        styleConfig: a.globalData.styleConfig,
        addressList: [],
        provincArray: [],
        cityArray: [],
        areaArray: [],
        provincIndex: "",
        cityIndex: "",
        areaIndex: "",
        provincId: "",
        cityId: "",
        areaId: "",
        addressInfo: {},
        provinceChange: !1,
        cityChange: !1,
        isHidden: !0
    },
    onLoad: function() {
        this.getAddressList(), this.getProvince();
    },
    getAddressList: function() {
        var t = this;
        wx.request({
            url: a.globalData.comUrl + "tabs_getCustomerAddressList.action",
            data: {
                current: 1,
                memberId: a.getMemberId()
            },
            success: function(e) {
                console.log(e.data);
                var i = a.getJsonData(e.data);
                t.setData({
                    addressList: i.pageList
                }), wx.hideLoading();
            }
        });
    },
    getAddressInfo: function() {
        this.setData({
            addressInfo: wx.getStorageSync("addressInfo" + a.globalData.autoId)
        });
        var t = this.data.addressInfo.indexList[0];
        this.setData({
            provincIndex: t,
            provincId: this.data.provincArray[t].provinceId
        }), this.getCity(this.data.provincId);
    },
    provinceChange: function(a) {
        var t = this;
        t.setData({
            provincIndex: a.detail.value,
            provincId: t.data.provincArray[a.detail.value].provinceId,
            cityIndex: "",
            areaIndex: "",
            provinceChange: !0
        }), t.getCity(t.data.provincId);
    },
    cityChange: function(a) {
        var t = this;
        t.setData({
            cityIndex: a.detail.value,
            cityId: t.data.cityArray[a.detail.value].cityId,
            areaIndex: "",
            cityChange: !0
        }), t.getArea(t.data.cityId);
    },
    areaChange: function(a) {
        var t = this;
        this.setData({
            areaIndex: a.detail.value,
            areaId: t.data.areaArray[a.detail.value].districtId
        });
    },
    getProvince: function() {
        var t = this;
        wx.request({
            url: a.globalData.comUrl + "tabs_getProvinceList.action",
            success: function(e) {
                t.setData({
                    provincArray: a.getJsonData(e.data)
                });
                wx.getStorageSync("addressInfo" + a.globalData.autoId);
            },
            fail: function() {
                a.hint("获取省份失败！");
            }
        });
    },
    getCity: function(t) {
        var e = this;
        wx.request({
            url: a.globalData.comUrl + "tabs_getCityByProvinceId.action",
            data: {
                provinceId: t
            },
            success: function(t) {
                if (e.setData({
                    cityArray: a.getJsonData(t.data)
                }), !e.data.provinceChange) {
                    var i = e.data.addressInfo.indexList[1];
                    e.setData({
                        cityIndex: i,
                        cityId: e.data.cityArray[i].cityId
                    }), e.getArea(e.data.cityId);
                }
            },
            fail: function() {
                a.hint("获取对应市区失败！");
            }
        });
    },
    getArea: function(t) {
        var e = this;
        wx.request({
            url: a.globalData.comUrl + "tabs_getDistrictByCityId.action",
            data: {
                cityId: t
            },
            success: function(t) {
                if (e.setData({
                    areaArray: a.getJsonData(t.data)
                }), !e.data.cityChange) {
                    var i = e.data.addressInfo.indexList[2];
                    e.setData({
                        areaIndex: i,
                        areaId: e.data.areaArray[i].districtId
                    });
                }
            },
            fail: function() {
                a.hint("获取对应区域失败！");
            }
        });
    },
    addAddress: function() {
        this.setData({
            isHidden: !1,
            provincIndex: "",
            cityIndex: "",
            areaIndex: ""
        });
    },
    editTap: function(a) {
        t = !0, e = a.currentTarget.dataset.info.id, this.setData({
            isHidden: !1,
            addressInfo: {
                name: a.currentTarget.dataset.info.contactPerson,
                phone: a.currentTarget.dataset.info.mobilePhone,
                address: a.currentTarget.dataset.info.address
            },
            provincIndex: "",
            cityIndex: "",
            areaIndex: ""
        });
    },
    deleteTap: function(t) {
        var e = this;
        console.log(t.currentTarget.dataset.info), wx.showModal({
            content: "确定要删除该地址吗",
            success: function(i) {
                i.confirm && (wx.showLoading({
                    title: ""
                }), wx.request({
                    url: a.globalData.comUrl + "tabs_deleteCustomerAddress.action",
                    data: {
                        id: t.currentTarget.dataset.info.id
                    },
                    success: function(a) {
                        e.getAddressList();
                    }
                }));
            }
        });
    },
    closeBtn: function() {
        t = !1, this.setData({
            isHidden: !0
        });
    },
    setDefault: function(t) {
        var e = this;
        wx.request({
            url: a.globalData.comUrl + "tabs_setDefaultCustomerAddress.action",
            data: {
                id: t.currentTarget.dataset.id,
                memberId: a.getMemberId()
            },
            success: function(t) {
                console.log(t.data);
                a.getJsonData(t.data);
                e.getAddressList();
            }
        });
    },
    addressSubmit: function(i) {
        var d = this, s = /^1[3|4|5|8|7][0-9]\d{4,8}$/;
        if ("" != i.detail.value.name) if ("" != i.detail.value.phone) if (s.test(i.detail.value.phone)) if ("" != d.data.provincIndex) if ("" != d.data.cityIndex) if ("" != d.data.areaId) if ("" != i.detail.value.address) {
            var n = {
                address: i.detail.value.address,
                area: d.data.areaId,
                city: d.data.cityId,
                province: d.data.provincId,
                contactPerson: i.detail.value.name,
                memberId: a.getMemberId(),
                mobilePhone: i.detail.value.phone,
                isdefaults: 0
            };
            t && (n.id = e), wx.request({
                url: a.globalData.comUrl + "tabs_addCustomerAddress.action",
                data: n,
                success: function(a) {
                    t = !1, d.getAddressList(), d.setData({
                        isHidden: !0
                    });
                }
            });
        } else a.hint("请输入详细地址"); else a.hint("请输入省市区"); else a.hint("请输入省市区"); else a.hint("请输入省市区"); else a.hint("请输入正确的手机号码"); else a.hint("请输入手机号码"); else a.hint("收货人不能为空！");
    }
});