var e = getApp();

Page({
    data: {
        areamsg: !0,
        decmsg: !0,
        typemsg: !0,
        housemap: !0,
        ismaster: !0,
        houseareaid: 0,
        housetype: 0,
        decorate: "",
        title: "",
        saleprice: 0,
        perprice: 0,
        housestyle: "",
        content: "",
        housenumber: "",
        area: "",
        floor: "",
        name: "",
        tel: "",
        direction: "",
        year: "",
        address: "",
        housearea: "",
        special: "",
        imagelist: [],
        lng: 0,
        lat: 0,
        uploadimagelist: []
    },
    onLoad: function(e) {
        var t = this;
        wx.setNavigationBarTitle({
            title: "发布出售"
        }), t.checkuser({
            doServices: function() {
                t.oldhouseinit();
            },
            doElseServices: function() {
                t.oldhouseinit();
            }
        });
    },
    oldhouseinit: function(t) {
        var a = this, i = wx.getStorageSync("userInfo");
        e.util.request({
            url: "entry/wxapp/Getpubinit",
            data: {
                sessionid: i.sessionid,
                uid: i.memberInfo.uid
            },
            success: function(e) {
                e.data.message.errno || a.setData({
                    citylist: e.data.data.arealist
                });
            }
        }), e.getLocationInfo(function(e) {
            a.setData({
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
                a.setData({
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
    savepubinfo: function(t) {
        var a = wx.getStorageSync("userInfo"), i = (t.detail.value.title, t.detail.value.saleprice), s = (t.detail.value.perprice, 
        t.detail.value.housestyle, t.detail.value.housenumber), o = t.detail.value.area, n = (t.detail.value.floor, 
        t.detail.value.name), l = t.detail.value.tel, d = (t.detail.value.direction, t.detail.value.year, 
        t.detail.value.housearea), u = (t.detail.value.address, t.detail.value.content), c = this.data.special, r = this.data.lng, h = this.data.lat, g = this.data.houseareaid, p = this.data.decorate, m = this.data.housetype;
        if ("" != i) if ("" != l) if ("" != d) {
            var f = this.data.uploadimagelist;
            if (f.length < 2) wx.showModal({
                title: "提示",
                content: "上传图片不少于2张",
                showCancel: !1
            }); else {
                var w = f.join("@"), v = {
                    sessionid: a.sessionid,
                    uid: a.memberInfo.uid,
                    uploadimagelist_str: w,
                    houseareaid: g,
                    decorate: p,
                    housetype: m,
                    longitude: r,
                    latitude: h,
                    saleprice: i,
                    housenumber: s,
                    content: u,
                    area: o,
                    name: n,
                    tel: l,
                    housearea: d,
                    special: c
                };
                e.util.request({
                    url: "entry/wxapp/savepubinfo",
                    data: v,
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
                                    url: "/wurui_house/pages/mypub/index"
                                });
                            }
                        });
                    }
                });
            }
        } else wx.showModal({
            title: "提示",
            content: "请输入小区名称",
            showCancel: !1
        }); else wx.showModal({
            title: "提示",
            content: "请输入号码",
            showCancel: !1
        }); else wx.showModal({
            title: "提示",
            content: "请输入出售总价",
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
        var t = e.currentTarget.dataset.id, a = e.currentTarget.dataset.name;
        this.setData({
            decorate: t,
            decoratename: a
        }), this.closedec();
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
    showtype: function() {
        this.data.typemsg = !1, this.setData({
            typemsg: this.data.typemsg
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
    closedec: function(e) {
        this.data.decmsg = !0, this.setData({
            decmsg: this.data.decmsg
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
    uploadimg: function(t, a) {
        var i = e.util.geturl({
            url: "entry/wxapp/upload"
        }), a = a;
        wx.showToast({
            icon: "loading",
            title: "正在上传"
        });
        var s = this;
        wx.uploadFile({
            url: i,
            filePath: t[0],
            name: "file",
            header: {
                "Content-Type": "multipart/form-data"
            },
            formData: {
                session_token: wx.getStorageSync("session_token")
            },
            success: function(e) {
                var t = e.data;
                if ("string" == typeof t && (t = JSON.parse(t.trim())), 200 == e.statusCode) for (var i = t.data.path, o = 0; o < s.data.uploadimagelist.length; o++) o + 1 == a && (s.data.uploadimagelist[o] = i); else wx.showModal({
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
        this.data.special = t.join(",");
    },
    checkuser: function(t) {
        var a = this, t = t, i = wx.getStorageSync("userInfo");
        return console.log(i), i ? i.memberInfo.uid ? void e.util.request({
            url: "entry/wxapp/checkuserinfo",
            data: {
                sessionid: i.sessionid,
                uid: i.memberInfo.uid
            },
            success: function(e) {
                console.log("payyyy"), 0 == e.data.data.error ? t.doServices() : 2 == e.data.data.error && t.doElseServices();
            }
        }) : (e.util.getUserInfo(), !1) : (e.util.getUserInfo(function(e) {
            a.getlethousedetail();
        }), !1);
    },
    uploadPicture: function(e) {
        var t = this, a = t.data.imagelist;
        wx.chooseImage({
            count: 9,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                var i = e.tempFilePaths;
                a = a.concat(i), t.setData({
                    imagelist: a
                });
                t.data.uploadimagelist.length;
                t.uploadPictures(i);
            }
        });
    },
    deletePicture: function(e) {
        var t = this, a = parseInt(e.currentTarget.dataset.id), i = t.data.uploadimagelist, s = t.data.imagelist;
        i.splice(a, 1), s.splice(a, 1), t.setData({
            uploadimagelist: i,
            imagelist: s
        }), console.log("uploadimagelist：" + t.data.uploadimagelist), console.log("imagelist:" + t.data.imagelist);
    },
    uploadPictures: function(t) {
        var a = t.uploadImagekey ? t.uploadImagekey : 0, i = e.util.geturl({
            url: "entry/wxapp/upload"
        });
        wx.showToast({
            icon: "loading",
            title: "正在上传"
        });
        var s = this;
        wx.uploadFile({
            url: i,
            filePath: t[a],
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
                    var a = t.data.path, i = s.data.uploadimagelist;
                    i = i.concat(a), s.setData({
                        uploadimagelist: i
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
                ++a == t.length ? (wx.hideToast(), wx.showModal({
                    title: "提示",
                    content: "上传成功",
                    showCancel: !1
                })) : (t.uploadImagekey = a, s.uploadPictures(t));
            }
        });
    }
});