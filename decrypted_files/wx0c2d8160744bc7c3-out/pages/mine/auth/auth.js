var t = getApp(), a = t.globalData.domain;

Page({
    data: {
        array: [ "女", "男" ],
        index: 0
    },
    onLoad: function(t) {
        this.getLocation();
    },
    changeSex: function(t) {
        this.setData({
            index: t.detail.value
        });
    },
    changeUnit: function(t) {
        this.setData({
            unitIndex: t.detail.value
        });
    },
    changeStreet: function(t) {
        this.setData({
            streetIndex: t.detail.value
        });
        var a = this.data.streetIdArray[t.detail.value];
        this.getCommunitList(a), this.getStreetUnit(a);
    },
    changeCommunity: function(t) {
        this.setData({
            communityIndex: t.detail.value
        });
        var a = this.data.communityIdArray[t.detail.value];
        this.getCommunityUnit(a);
    },
    getStreetUnit: function(t) {
        "-1" == t ? that.getLocationData(that.data.latitude, that.data.longitude) : this.getSecurityUnit(t);
    },
    getCommunityUnit: function(t) {
        if ("-1" == t) {
            var a = this.data.streetAreaIdArray[this.data.streetIndex];
            "-1" == a ? that.getLocationData(that.data.latitude, that.data.longitude) : this.getSecurityUnit(a);
        } else this.getSecurityUnit(t);
    },
    getSecurityUnit: function(t) {
        var e = this;
        wx.request({
            url: a + "/mine/getSecurityUnit",
            data: {
                areaId: t
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                1 == t.data.code ? e.handleUnitList(t.data.unitList) : wx.showModal({
                    title: "温馨提示",
                    content: t.data.msg,
                    success: function(t) {
                        t.confirm && e.getLocationData(e.data.latitude, e.data.longitude);
                    }
                });
            },
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    getCommunitList: function(t) {
        if ("-1" != t) {
            var e = this;
            wx.request({
                url: a + "/mine/getCommunitList",
                data: {
                    areaId: t
                },
                header: {
                    "content-type": "application/json"
                },
                success: function(t) {
                    1 == t.data.code ? e.handleCommunitList(t.data.communityList) : wx.showToast({
                        title: t.data.msg,
                        icon: "loading",
                        duration: 2e3
                    });
                },
                fail: function(t) {},
                complete: function(t) {}
            });
        } else this.handleCommunitList(null);
    },
    handleCommunitList: function(t) {
        var a = new Array(), e = new Array();
        if (this.setData({
            communityIndex: 0
        }), a[0] = "请选择", e[0] = "-1", null != t) for (var n = 0; n < t.length; n++) a[a.length] = t[n].area_name, 
        e[e.length] = t[n].area_id;
        this.setData({
            communityNameArray: a
        }), this.setData({
            communityIdArray: e
        });
    },
    getLocation: function() {
        wx.showLoading({
            title: "请求数据中，请稍后..."
        });
        var t = this;
        wx.getLocation({
            type: "wgs84",
            success: function(a) {
                var e = a.latitude, n = a.longitude;
                t.setData({
                    latitude: e
                }), t.setData({
                    longitude: n
                }), t.getLocationData(e, n);
            },
            fail: function(a) {
                t.getLocationFail();
            }
        });
    },
    getLocationData: function(t, e) {
        var n = this;
        wx.request({
            url: a + "/mine/selectArea",
            data: {
                latitude: t,
                longitude: e
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                1 == t.data.code ? (n.setData({
                    area: t.data.address
                }), n.handleStreetList(t.data.streetList), n.handleCommunitList(null), n.handleUnitList(t.data.unitList)) : wx.showToast({
                    title: t.data.msg,
                    icon: "loading",
                    duration: 2e3
                }), wx.hideLoading();
            },
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    getLocationFail: function() {
        wx.showToast({
            title: "定位失败，请换一个信号好的位置，重新定位！",
            icon: "loading",
            duration: 2e3
        }), setTimeout(function() {
            wx.switchTab({
                url: "../mine/mine"
            });
        }, 2e3);
    },
    handleStreetList: function(t) {
        var a = new Array(), e = new Array();
        this.setData({
            streetIndex: 0
        }), a[0] = "请选择", e[0] = "-1";
        for (var n = 0; n < t.length; n++) a[a.length] = t[n].area_name, e[e.length] = t[n].area_id;
        this.setData({
            streetNameArray: a
        }), this.setData({
            streetIdArray: e
        });
    },
    handleUnitList: function(t) {
        var a = new Array(), e = new Array();
        this.setData({
            unitIndex: 0
        });
        for (var n = 0; n < t.length; n++) a[a.length] = t[n].unit_name, e[e.length] = t[n].unit_code;
        this.setData({
            unitNameArray: a
        }), this.setData({
            unitCodeArray: e
        });
    },
    formSubmit: function(e) {
        this.validateData(e) && wx.login({
            success: function(n) {
                n.code ? wx.request({
                    url: a + "/mine/authenticateXd?js_code=" + n.code,
                    data: e.detail.value,
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(a) {
                        1 == a.data.code ? wx.setStorage({
                            key: "userId",
                            data: a.data.userId,
                            success: function(a) {
                                t.globalData.auth = !0, wx.showModal({
                                    title: "温馨提示",
                                    content: "认证成功，请耐心等待审核。",
                                    success: function(t) {
                                        t.confirm && wx.reLaunch({
                                            url: "/pages/first-page/firstPage"
                                        });
                                    }
                                });
                            }
                        }) : (wx.showToast({
                            title: "认证失败！",
                            icon: "warn",
                            duration: 2e3
                        }), console.log(a.data.msg));
                    }
                }) : console.log("获取用户登录状态失败：" + n.msg);
            }
        });
    },
    validateData: function(t) {
        var a = this, e = !0, n = t.detail.value;
        return "" == n.name ? e = a.errorMsg("姓名不能为空！") : "" == n.phone ? e = a.errorMsg("电话不能为空！") : 11 != n.phone.length ? e = a.errorMsg("请输入正确的11位电话号码！") : "" == n.unit_code && (e = a.errorMsg("请选择单位！")), 
        e;
    },
    errorMsg: function(t) {
        return wx.showToast({
            title: t,
            icon: "warn",
            duration: 2e3
        }), !1;
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});