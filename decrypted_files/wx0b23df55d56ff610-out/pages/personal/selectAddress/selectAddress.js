var t, e = require("../../../comm/script/qqmap-wx-jssdk.js"), a = require("../../../comm/script/config");

Page({
    data: {
        markers: [],
        currentId: "0",
        latitude: "",
        longitude: "",
        addressList: [],
        allAddressList: [],
        officeBuilding: [],
        livingBuilding: [],
        schoolBuilding: [],
        section: [ {
            name: "全部",
            id: "0",
            keyword: "公司企业"
        }, {
            name: "写字楼",
            id: "1",
            keyword: "写字楼"
        }, {
            name: "小区",
            id: "2",
            keyword: "小区"
        }, {
            name: "学校",
            id: "3",
            keyword: "学校"
        } ]
    },
    onLoad: function() {
        var a = this;
        t = new e({
            key: "ZOGBZ-3PBW5-2WNID-QSSNY-UKPD5-FPF25"
        }), this.mapCtx = wx.createMapContext("map"), wx.getLocation({
            type: "wgs84",
            success: function(t) {
                a.setData({
                    longitude: t.longitude,
                    latitude: t.latitude
                });
            }
        }), this.getLngLat();
    },
    getLngLat: function() {
        var t = this;
        this.mapCtx.getCenterLocation({
            success: function(e) {
                t.setData({
                    longitude: e.longitude,
                    latitude: e.latitude,
                    controls: [ {
                        id: 1,
                        iconPath: "../../../img/yhpj_dqwz.png",
                        position: {
                            left: 150,
                            top: 95,
                            width: 20,
                            height: 20
                        },
                        clickable: !0
                    } ],
                    markers: [ {
                        id: 0,
                        iconPath: "https://pic.hiweixiu.com/hiweixiu-app/weapp/img/yhpj_dqwz.png",
                        longitude: e.longitude,
                        latitude: e.latitude,
                        width: 18,
                        height: 28
                    } ]
                }), t.searchAddress();
            },
            fail: function(t) {
                wx.showModal({
                    title: t.errMsg
                });
            }
        });
    },
    regionchange: function(t) {
        "end" === t.type && (this.setData({
            allAddressList: [],
            officeBuilding: [],
            livingBuilding: [],
            schoolBuilding: []
        }), this.getLngLat());
    },
    searchAddress: function() {
        var e = this;
        t.search({
            keyword: e.data.section[e.data.currentId].keyword,
            location: {
                latitude: e.data.latitude,
                longitude: e.data.longitude
            },
            page_size: 20,
            success: function(t) {
                switch (e.setData({
                    addressList: t.data
                }), e.data.currentId) {
                  case "0":
                    e.setData({
                        allAddressList: t.data
                    });
                    break;

                  case "1":
                    e.setData({
                        officeBuilding: t.data
                    });
                    break;

                  case "2":
                    e.setData({
                        livingBuilding: t.data
                    });
                    break;

                  case "3":
                    e.setData({
                        schoolBuilding: t.data
                    });
                }
            },
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    handleTap: function(t) {
        var e = this, a = t.currentTarget.id;
        this.mapCtx.getCenterLocation({
            success: function(t) {
                var i = t.latitude, s = t.longitude;
                if (e.data.longitude === s && e.data.latitude === i) switch (a) {
                  case "0":
                    e.data.allAddressList.length < 1 ? e.searchAddress() : e.setData({
                        addressList: e.data.allAddressList
                    });
                    break;

                  case "1":
                    e.data.officeBuilding.length < 1 ? e.searchAddress() : e.setData({
                        addressList: e.data.officeBuilding
                    });
                    break;

                  case "2":
                    e.data.livingBuilding.length < 1 ? e.searchAddress() : e.setData({
                        addressList: e.data.livingBuilding
                    });
                    break;

                  case "3":
                    e.data.schoolBuilding.length < 1 ? e.searchAddress() : e.setData({
                        addressList: e.data.schoolBuilding
                    });
                } else e.searchAddress();
                a && e.setData({
                    currentId: a
                });
            }
        });
    },
    goToSearchAddress: function(t) {
        wx.redirectTo({
            url: "../../personal/searchAddress/searchAddress"
        });
    },
    selectAddress: function(t) {
        var e = t.currentTarget.dataset.idx, i = this.data.addressList[e], s = new Object();
        s.address_name = i.title, s.address_desc = i.address, s.address = i.title + " " + i.address, 
        s.districtID = i.ad_info.adcode, s.lng = i.location.lng, s.lat = i.location.lat, 
        s.province = i.ad_info.province, s.city = i.ad_info.city, s.district = i.ad_info.district, 
        s.cityID = "", wx.setStorageSync(a.storageKeys.selectedAddress, s), wx.navigateBack({
            delta: 1
        });
    },
    stopTouchMove: function() {},
    stopTap: function() {}
});