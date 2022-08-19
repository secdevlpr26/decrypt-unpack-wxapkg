function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var t, a = getApp();

Page({
    data: (t = {
        areamsg: !0,
        decmsg: !0,
        household: !0,
        letwayhouse: !0,
        typemsg: !0,
        paypemsg: !0,
        housemap: !0,
        ismaster: !0,
        tag: !1,
        houseareaid: 0,
        housetype: 0,
        decorate: "",
        letway: "",
        title: "",
        area: "",
        floor: "",
        money: ""
    }, e(t, "housetype", ""), e(t, "payway", ""), e(t, "housenumber", ""), e(t, "fdname", ""), 
    e(t, "fdtel", ""), e(t, "direction", ""), e(t, "year", ""), e(t, "content", ""), 
    e(t, "address", ""), e(t, "housearea", ""), e(t, "special", ""), e(t, "imagelist", []), 
    e(t, "houselabel", ""), e(t, "uploadimagelist", []), e(t, "checks", [ {
        name: "宽带网",
        value: "宽带网",
        checked: !1
    }, {
        name: "电视",
        value: "电视",
        checked: !1
    }, {
        name: "洗衣机",
        value: "洗衣机",
        checked: !1
    }, {
        name: "空调",
        value: "空调",
        checked: !1
    }, {
        name: "厨房",
        value: "厨房",
        checked: !1
    }, {
        name: "床",
        value: "床",
        checked: !1
    }, {
        name: "家具",
        value: "家具",
        checked: !1
    }, {
        name: "有线电视",
        value: "有线电视",
        checked: !1
    } ]), e(t, "letwayList", [ {
        name: "整租",
        value: 1,
        checked: !1
    }, {
        name: "合租",
        value: 2,
        checked: !1
    }, {
        name: "住宅",
        value: 3,
        checked: !1
    }, {
        name: "商铺",
        value: 4,
        checked: !1
    }, {
        name: "写字楼",
        value: 5,
        checked: !1
    } ]), e(t, "letwayCheck", 1), t),
    onLoad: function(e) {
        var t = this;
        wx.setNavigationBarTitle({
            title: "发布出租"
        }), t.checkuser({
            doServices: function() {
                t.oldhouseinit();
            },
            doElseServices: function() {
                t.oldhouseinit();
            }
        });
    },
    oldhouseinit: function(e) {
        var t = this, s = wx.getStorageSync("userInfo");
        a.util.request({
            url: "entry/wxapp/Getpubinit",
            data: {
                sessionid: s.sessionid,
                uid: s.memberInfo.uid
            },
            success: function(e) {
                e.data.message.errno || t.setData({
                    citylist: e.data.data.arealist
                });
            }
        }), a.getLocationInfo(function(e) {
            t.setData({
                longitude: e.longitude,
                latitude: e.latitude,
                markers: [ {
                    id: 0,
                    iconPath: "../../resource/images/marker_checked.png",
                    longitude: e.longitude,
                    latitude: e.latitude,
                    width: 30,
                    height: 30
                } ]
            });
        }), wx.getSystemInfo({
            success: function(e) {
                t.setData({
                    map_width: e.windowWidth,
                    map_height: e.windowWidth,
                    controls: [ {
                        id: 1,
                        iconPath: "../../resource/images/marker_checked.png",
                        position: {
                            left: e.windowWidth / 2 - 8,
                            top: e.windowWidth / 2 - 16,
                            width: 30,
                            height: 30
                        },
                        clickable: !0
                    } ]
                });
            }
        });
    },
    upload: function(e) {
        var t = this, e = e;
        t.checkuser({
            doServices: function() {
                t.doupload(e);
            },
            doElseServices: function() {
                t.doupload(e);
            }
        });
    },
    toMessage: function(e) {
        wx.navigateTo({
            url: "/wurui_house/pages/message/index"
        });
    },
    savepubinfo: function(e) {
        var t = wx.getStorageSync("userInfo"), s = (e.detail.value.title, e.detail.value.area), i = (e.detail.value.floor, 
        e.detail.value.direction, e.detail.value.year, e.detail.value.housearea), o = (e.detail.value.address, 
        this.data.special), n = this.data.houselabel, d = e.detail.value.money, u = this.data.houseareaid, l = e.detail.value.fdname, c = e.detail.value.fdtel, r = this.data.payway, h = this.data.letway, g = e.detail.value.content, m = e.detail.value.housenumber, u = this.data.houseareaid, p = this.data.decorate, f = this.data.housetype;
        if ("" != i) if ("" != d) {
            var w = this.data.uploadimagelist.join("@"), y = {
                sessionid: t.sessionid,
                uid: t.memberInfo.uid,
                uploadimagelist_str: w,
                houseareaid: u,
                decorate: p,
                letway: h,
                housetype: f,
                area: s,
                housearea: i,
                special: o,
                houselabel: n,
                money: d,
                housenumber: m,
                payway: r,
                fdname: l,
                fdtel: c,
                content: g
            };
            a.util.request({
                url: "entry/wxapp/savesapubinfo",
                data: y,
                success: function(e) {
                    if (0 != e.data.errno) return wx.hideLoading(), void wx.showModal({
                        title: "失败",
                        content: e.data.data.msg,
                        showCancel: !1
                    });
                    wx.showToast({
                        title: "提交成功",
                        icon: "success",
                        duration: 2e3,
                        success: function(e) {
                            console.log(e), wx.navigateTo({
                                url: "/wurui_house/pages/myletpub/index"
                            });
                        }
                    });
                }
            });
        } else wx.showModal({
            title: "提示",
            content: "请输入出租价格",
            showCancel: !1
        }); else wx.showModal({
            title: "提示",
            content: "请输入小区名称",
            showCancel: !1
        });
    },
    onReady: function() {},
    showarea: function(e) {
        this.data.areamsg = !1, this.setData({
            areamsg: this.data.areamsg
        });
    },
    selectarea: function(e) {
        this.data.houseareaid = e.currentTarget.dataset.id;
        var t = e.currentTarget.dataset.name;
        this.setData({
            areaname: t
        }), this.closemsg();
    },
    selectdec: function(e) {
        this.data.decorate = e.currentTarget.dataset.id;
        var t = e.currentTarget.dataset.id;
        this.setData({
            decorate: t
        }), this.closedec();
    },
    Renting: function(e) {
        this.data.letway = e.currentTarget.dataset.id;
        e.currentTarget.dataset.id;
        var t = e.currentTarget.dataset.name;
        this.setData({
            letwayname: t
        }), this.closelet();
    },
    roomctdec: function(e) {
        this.data.payway = e.currentTarget.dataset.id;
        var t = e.currentTarget.dataset.id, t = e.currentTarget.dataset.name;
        this.setData({
            payway: t
        }), this.closeroom();
    },
    selecttype: function(e) {
        this.data.housetype = e.currentTarget.dataset.id;
        e.currentTarget.dataset.id;
        var t = e.currentTarget.dataset.name;
        this.setData({
            housetypename: t
        }), this.closetype();
    },
    showdec: function() {
        this.data.decmsg = !1, this.setData({
            decmsg: this.data.decmsg
        });
    },
    houseInter: function() {
        this.data.household = !1, this.setData({
            household: this.data.household
        });
    },
    showtype: function() {
        this.data.typemsg = !1, this.setData({
            typemsg: this.data.typemsg
        });
    },
    Payment: function() {
        this.data.letwayhouse = !1, this.setData({
            letwayhouse: this.data.letwayhouse
        });
    },
    showmap: function() {
        this.data.housemap = !1, this.setData({
            housemap: this.data.housemap
        });
    },
    getmap: function() {
        this.getLngLat();
    },
    getLngLat: function() {
        var e = this;
        this.mapCtx = wx.createMapContext("map4select"), this.mapCtx.getCenterLocation({
            success: function(t) {
                var a = t.longitude + "," + t.latitude;
                e.data.lng = t.longitude, e.data.lat = t.latitude, e.setData({
                    longitude: t.longitude,
                    latitude: t.latitude,
                    housemap: !0,
                    map: a,
                    markers: [ {
                        id: 0,
                        iconPath: "../../resource/images/marker_checked.png",
                        longitude: t.longitude,
                        latitude: t.latitude,
                        width: 30,
                        height: 30
                    } ]
                });
            }
        });
    },
    closemsg: function(e) {
        this.data.areamsg = !0, this.setData({
            areamsg: this.data.areamsg
        });
    },
    closetype: function(e) {
        this.data.typemsg = !0, this.setData({
            typemsg: this.data.typemsg
        });
    },
    closement: function(e) {
        this.data.paypemsg = !0, this.setData({
            paypemsg: this.data.paypemsg
        });
    },
    closedec: function(e) {
        this.data.decmsg = !0, this.setData({
            decmsg: this.data.decmsg
        });
    },
    closeroom: function(e) {
        this.data.household = !0, this.setData({
            household: this.data.household
        });
    },
    closelet: function(e) {
        this.data.letwayhouse = !0, this.setData({
            letwayhouse: this.data.letwayhouse
        });
    },
    closemap: function(e) {
        this.data.housemap = !0, this.setData({
            housemap: this.data.housemap
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    uploadimg: function(e, t) {
        var s = a.util.geturl({
            url: "entry/wxapp/upload"
        }), t = t;
        wx.showToast({
            icon: "loading",
            title: "正在上传"
        });
        var i = this;
        wx.uploadFile({
            url: s,
            filePath: e[0],
            name: "file",
            header: {
                "Content-Type": "multipart/form-data"
            },
            formData: {
                session_token: wx.getStorageSync("session_token")
            },
            success: function(e) {
                var a = e.data;
                if ("string" == typeof a && (a = JSON.parse(a.trim())), 200 == e.statusCode) for (var s = a.data.path, o = 0; o < i.data.uploadimagelist.length; o++) o + 1 == t && (i.data.uploadimagelist[o] = s); else wx.showModal({
                    title: "提示",
                    content: "上传失败",
                    showCancel: !1
                });
            },
            fail: function(e) {
                wx.showModal({
                    title: "提示",
                    content: "上传失败",
                    showCancel: !1
                });
            },
            complete: function() {
                wx.hideToast();
            }
        });
    },
    checkboxChange: function(e) {
        var t = e.detail.value;
        this.data.houselabel = t.join(",");
    },
    radioChange: function(e) {
        var t = e.detail.value;
        this.data.special = t.join(",");
    },
    checkuser: function(e) {
        var t = this, e = e, s = wx.getStorageSync("userInfo");
        return console.log(s), s ? s.memberInfo.uid ? void a.util.request({
            url: "entry/wxapp/checkuserinfo",
            data: {
                sessionid: s.sessionid,
                uid: s.memberInfo.uid
            },
            success: function(t) {
                console.log("payyyy"), 0 == t.data.data.error ? e.doServices() : 2 == t.data.data.error && e.doElseServices();
            }
        }) : (a.util.getUserInfo(), !1) : (a.util.getUserInfo(function(e) {
            t.getlethousedetail();
        }), !1);
    },
    clicks: function(e) {
        var t = e.currentTarget.dataset.index, a = this.data.checks;
        0 == a[t].checked ? a[t].checked = !0 : a[t].checked = !1, this.setData({
            checks: a
        }), this.radioChange(e);
    },
    uploadPicture: function(e) {
        var t = this, a = t.data.imagelist;
        wx.chooseImage({
            count: 9,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                var s = e.tempFilePaths;
                a = a.concat(s), t.setData({
                    imagelist: a
                });
                t.data.uploadimagelist.length;
                t.uploadPictures(s);
            }
        });
    },
    deletePicture: function(e) {
        var t = this, a = parseInt(e.currentTarget.dataset.id), s = t.data.uploadimagelist, i = t.data.imagelist;
        s.splice(a, 1), i.splice(a, 1), t.setData({
            uploadimagelist: s,
            imagelist: i
        }), console.log("uploadimagelist：" + t.data.uploadimagelist), console.log("imagelist:" + t.data.imagelist);
    },
    uploadPictures: function(e) {
        var t = e.uploadImagekey ? e.uploadImagekey : 0, s = a.util.geturl({
            url: "entry/wxapp/upload"
        });
        wx.showToast({
            icon: "loading",
            title: "正在上传"
        });
        var i = this;
        wx.uploadFile({
            url: s,
            filePath: e[t],
            name: "file",
            header: {
                "Content-Type": "multipart/form-data"
            },
            formData: {
                session_token: wx.getStorageSync("session_token")
            },
            success: function(e) {
                var t = e.data;
                if ("string" == typeof t && (t = JSON.parse(t.trim())), 200 == e.statusCode) {
                    var a = t.data.path, s = i.data.uploadimagelist;
                    s = s.concat(a), i.setData({
                        uploadimagelist: s
                    });
                } else wx.showModal({
                    title: "提示",
                    content: "上传失败",
                    showCancel: !1
                });
            },
            fail: function(e) {
                wx.showModal({
                    title: "提示",
                    content: "上传失败",
                    showCancel: !1
                });
            },
            complete: function() {
                ++t == e.length ? (wx.hideToast(), wx.showModal({
                    title: "提示",
                    content: "上传成功",
                    showCancel: !1
                })) : (e.uploadImagekey = t, i.uploadPictures(e));
            }
        });
    },
    letwayCheck: function(e) {
        var t = this, a = parseInt(e.currentTarget.dataset.id);
        t.setData({
            letwayCheck: a,
            letway: a
        });
    }
});