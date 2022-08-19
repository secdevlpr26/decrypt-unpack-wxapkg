var t = getApp();

Page({
    data: {
        areamsg: !0,
        decmsg: !0,
        typemsg: !0,
        roommsg: !0,
        letwaymsg: !0,
        housemap: !0,
        ismaster: !0,
        houseareaid: 0,
        roomid: 0,
        letway: 0,
        housetype: 0,
        decorate: "",
        title: "",
        saleprice: 0,
        perprice: 0,
        housestyle: "",
        area: "",
        floor: "",
        direction: "",
        year: "",
        address: "",
        housearea: "",
        special: "",
        houselabel: "",
        imagelist: [],
        lng: 0,
        lat: 0,
        uploadimagelist: [ "", "", "", "", "", "" ],
        true1: !0,
        true2: !0,
        true3: !0,
        true4: !0,
        true5: !0,
        true6: !0
    },
    onLoad: function(t) {
        var e = this;
        wx.setNavigationBarTitle({
            title: "中介发布出租房-" + wx.getStorageSync("companyinfo").name
        }), e.checkuser({
            doServices: function() {
                e.oldhouseinit();
            },
            doElseServices: function() {
                e.oldhouseinit();
            }
        });
    },
    oldhouseinit: function(e) {
        var a = this, s = wx.getStorageSync("userInfo");
        t.util.request({
            url: "entry/wxapp/Getpubinit",
            data: {
                sessionid: s.sessionid,
                uid: s.memberInfo.uid
            },
            success: function(t) {
                t.data.message.errno || (0 == t.data.data.ismaster && (a.data.ismaster = !1, a.setData({
                    ismaster: a.data.ismaster
                })), a.setData({
                    citylist: t.data.data.arealist
                }));
            }
        }), t.getLocationInfo(function(t) {
            a.setData({
                longitude: t.longitude,
                latitude: t.latitude,
                markers: [ {
                    id: 0,
                    iconPath: "../../resource/images/marker_checked.png",
                    longitude: t.longitude,
                    latitude: t.latitude,
                    width: 30,
                    height: 30
                } ]
            });
        }), wx.getSystemInfo({
            success: function(t) {
                a.setData({
                    map_width: t.windowWidth,
                    map_height: t.windowWidth,
                    controls: [ {
                        id: 1,
                        iconPath: "../../resource/images/marker_checked.png",
                        position: {
                            left: t.windowWidth / 2 - 8,
                            top: t.windowWidth / 2 - 16,
                            width: 30,
                            height: 30
                        },
                        clickable: !0
                    } ]
                });
            }
        });
    },
    upload: function(t) {
        var e = this, t = t;
        e.checkuser({
            doServices: function() {
                e.doupload(t);
            },
            doElseServices: function() {
                e.doupload(t);
            }
        });
    },
    toMessage: function(t) {
        wx.navigateTo({
            url: "/wurui_house/pages/message/index"
        });
    },
    doupload: function(t) {
        var e = this, a = parseInt(t.currentTarget.dataset.id);
        switch (a) {
          case 1:
            if (0 == e.data.true1) return;
            break;

          case 2:
            if (0 == e.data.true2) return;
            break;

          case 3:
            if (0 == e.data.true3) return;
            break;

          case 4:
            if (0 == e.data.true4) return;
            break;

          case 5:
            if (0 == e.data.true5) return;
            break;

          case 6:
            if (0 == e.data.true6) return;
        }
        var s, i, o, n, r, d;
        wx.chooseImage({
            count: 1,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                var l = t.tempFilePaths;
                switch (a) {
                  case 1:
                    if (s = l, console.log(e.data.true1), 0 == e.data.true1) return;
                    e.data.true1 = !1;
                    break;

                  case 2:
                    i = l, e.data.true2 = !1;
                    break;

                  case 3:
                    o = l, e.data.true3 = !1;
                    break;

                  case 4:
                    n = l, e.data.true4 = !1;
                    break;

                  case 5:
                    r = l, e.data.true5 = !1;
                    break;

                  case 6:
                    d = l, e.data.true6 = !1;
                }
                e.setData({
                    imgurl1: s,
                    imgurl2: i,
                    imgurl3: o,
                    imgurl4: n,
                    imgurl5: r,
                    imgurl6: d,
                    true1: e.data.true1,
                    true2: e.data.true2,
                    true3: e.data.true3,
                    true4: e.data.true4,
                    true5: e.data.true5,
                    true6: e.data.true6
                }), e.data.imagelist.push(l), e.uploadimg(l, a);
            }
        });
    },
    delupload: function(t) {
        var e = this, a = parseInt(t.currentTarget.dataset.id);
        switch (a) {
          case 1:
            e.setData({
                imgurl1: "",
                true1: !0
            });
            break;

          case 2:
            e.setData({
                imgurl2: "",
                true2: !0
            });
            break;

          case 3:
            e.setData({
                imgurl3: "",
                true3: !0
            });
            break;

          case 4:
            e.setData({
                imgurl4: "",
                true4: !0
            });
            break;

          case 5:
            e.setData({
                imgurl5: "",
                true5: !0
            });
            break;

          case 6:
            e.setData({
                imgurl6: "",
                true6: !0
            });
        }
        for (var s = 0; s < this.data.uploadimagelist.length; s++) s + 1 == a && (this.data.uploadimagelist[s] = "");
        console.log(this.data.uploadimagelist);
    },
    savepubinfo: function(e) {
        var a = wx.getStorageSync("userInfo"), s = e.detail.value.title, i = e.detail.value.money, o = e.detail.value.payway, n = e.detail.value.roomtype, r = e.detail.value.area, d = e.detail.value.floor, l = e.detail.value.direction, u = e.detail.value.year, c = e.detail.value.housearea, h = e.detail.value.address, g = this.data.special, m = this.data.houselabel, w = this.data.lng, f = this.data.lat;
        if (0 != this.data.houseareaid) {
            var p = this.data.houseareaid;
            if ("" != this.data.decorate) {
                var y = this.data.decorate;
                if (0 != this.data.housetype) {
                    var v = this.data.housetype;
                    if (0 != this.data.roomid) {
                        var x = this.data.roomid;
                        if (0 != this.data.letway) {
                            var k = this.data.letway;
                            if (0 != w && 0 != f) if ("" != s) if ("" != i) if ("" != o) if ("" != n) if ("" != r) if ("" != d) if ("" != l) if ("" != u) if ("" != c) if ("" != h) if (m) if (g) {
                                var b = this.data.uploadimagelist;
                                if (b.length < 2) wx.showModal({
                                    title: "提示",
                                    content: "上传图片不少于2张",
                                    showCancel: !1
                                }); else {
                                    var D = b.join("@"), C = {
                                        sessionid: a.sessionid,
                                        uid: a.memberInfo.uid,
                                        uploadimagelist_str: D,
                                        houseareaid: p,
                                        decorate: y,
                                        housetype: v,
                                        roomid: x,
                                        letway: k,
                                        longitude: w,
                                        latitude: f,
                                        title: s,
                                        money: i,
                                        payway: o,
                                        roomtype: n,
                                        area: r,
                                        floor: d,
                                        direction: l,
                                        year: u,
                                        housearea: c,
                                        address: h,
                                        special: g,
                                        houselabel: m
                                    };
                                    t.util.request({
                                        url: "entry/wxapp/saveletpubinfo",
                                        data: C,
                                        success: function(t) {
                                            if (0 != t.data.errno) return wx.hideLoading(), void wx.showModal({
                                                title: "失败",
                                                content: t.data.data.msg,
                                                showCancel: !1
                                            });
                                            wx.showToast({
                                                title: "提交成功",
                                                icon: "success",
                                                duration: 2e3,
                                                success: function(t) {
                                                    console.log(t), wx.navigateTo({
                                                        url: "/wurui_house/pages/myletpub/index"
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            } else wx.showModal({
                                title: "提示",
                                content: "请选择房源配套",
                                showCancel: !1
                            }); else wx.showModal({
                                title: "提示",
                                content: "请选择租房特色",
                                showCancel: !1
                            }); else wx.showModal({
                                title: "提示",
                                content: "请输入租房地址",
                                showCancel: !1
                            }); else wx.showModal({
                                title: "提示",
                                content: "请输入租房小区",
                                showCancel: !1
                            }); else wx.showModal({
                                title: "提示",
                                content: "请输入租房年代",
                                showCancel: !1
                            }); else wx.showModal({
                                title: "提示",
                                content: "请输入租房朝向",
                                showCancel: !1
                            }); else wx.showModal({
                                title: "提示",
                                content: "请输入租房楼层",
                                showCancel: !1
                            }); else wx.showModal({
                                title: "提示",
                                content: "请输入租房面积",
                                showCancel: !1
                            }); else wx.showModal({
                                title: "提示",
                                content: "请输入房型",
                                showCancel: !1
                            }); else wx.showModal({
                                title: "提示",
                                content: "请输入付款方式",
                                showCancel: !1
                            }); else wx.showModal({
                                title: "提示",
                                content: "请输入租金",
                                showCancel: !1
                            }); else wx.showModal({
                                title: "提示",
                                content: "请输入标题",
                                showCancel: !1
                            }); else wx.showModal({
                                title: "提示",
                                content: "请设置位置",
                                showCancel: !1
                            });
                        } else wx.showModal({
                            title: "提示",
                            content: "请选择租房方式",
                            showCancel: !1
                        });
                    } else wx.showModal({
                        title: "提示",
                        content: "请选择房间数",
                        showCancel: !1
                    });
                } else wx.showModal({
                    title: "提示",
                    content: "请选择租房类型",
                    showCancel: !1
                });
            } else wx.showModal({
                title: "提示",
                content: "请选择装修",
                showCancel: !1
            });
        } else wx.showModal({
            title: "提示",
            content: "请选择区域",
            showCancel: !1
        });
    },
    onReady: function() {},
    showarea: function(t) {
        this.data.areamsg = !1, this.setData({
            areamsg: this.data.areamsg
        });
    },
    selectarea: function(t) {
        this.data.houseareaid = t.currentTarget.dataset.id;
        var e = t.currentTarget.dataset.name;
        this.setData({
            areaname: e
        }), this.closemsg();
    },
    selectdec: function(t) {
        this.data.decorate = t.currentTarget.dataset.id;
        var e = t.currentTarget.dataset.id;
        this.setData({
            decorate: e
        }), this.closedec();
    },
    selecttype: function(t) {
        this.data.housetype = t.currentTarget.dataset.id;
        t.currentTarget.dataset.id;
        var e = t.currentTarget.dataset.name;
        this.setData({
            housetypename: e
        }), this.closetype();
    },
    selectroom: function(t) {
        this.data.roomid = t.currentTarget.dataset.id;
        t.currentTarget.dataset.id;
        var e = t.currentTarget.dataset.name;
        this.setData({
            roomname: e
        }), this.closeroom();
    },
    selectletway: function(t) {
        this.data.letway = t.currentTarget.dataset.id;
        t.currentTarget.dataset.id;
        var e = t.currentTarget.dataset.name;
        this.setData({
            letwayname: e
        }), this.closeletway();
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
    showroom: function() {
        this.data.roommsg = !1, this.setData({
            roommsg: this.data.roommsg
        });
    },
    showletway: function() {
        this.data.letwaymsg = !1, this.setData({
            letwaymsg: this.data.letwaymsg
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
        var t = this;
        this.mapCtx = wx.createMapContext("map4select"), this.mapCtx.getCenterLocation({
            success: function(e) {
                var a = e.longitude + "," + e.latitude;
                t.data.lng = e.longitude, t.data.lat = e.latitude, t.setData({
                    longitude: e.longitude,
                    latitude: e.latitude,
                    housemap: !0,
                    map: a,
                    markers: [ {
                        id: 0,
                        iconPath: "../../resource/images/marker_checked.png",
                        longitude: e.longitude,
                        latitude: e.latitude,
                        width: 30,
                        height: 30
                    } ]
                });
            }
        });
    },
    closemsg: function(t) {
        this.data.areamsg = !0, this.setData({
            areamsg: this.data.areamsg
        });
    },
    closetype: function(t) {
        this.data.typemsg = !0, this.setData({
            typemsg: this.data.typemsg
        });
    },
    closeroom: function(t) {
        this.data.roommsg = !0, this.setData({
            roommsg: this.data.roommsg
        });
    },
    closeletway: function(t) {
        this.data.letwaymsg = !0, this.setData({
            letwaymsg: this.data.letwaymsg
        });
    },
    closedec: function(t) {
        this.data.decmsg = !0, this.setData({
            decmsg: this.data.decmsg
        });
    },
    closemap: function(t) {
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
    uploadimg: function(e, a) {
        var s = t.util.geturl({
            url: "entry/wxapp/upload"
        }), a = a;
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
            success: function(t) {
                var e = JSON.parse(t.data);
                if (200 == t.statusCode) for (var s = e.data.path, o = 0; o < i.data.uploadimagelist.length; o++) o + 1 == a && (i.data.uploadimagelist[o] = s); else wx.showModal({
                    title: "提示",
                    content: "上传失败",
                    showCancel: !1
                });
            },
            fail: function(t) {
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
    checkboxChange: function(t) {
        var e = t.detail.value;
        this.data.special = e.join(",");
    },
    checkboxChangehouse: function(t) {
        var e = t.detail.value;
        this.data.houselabel = e.join(",");
    },
    checkuser: function(e) {
        var a = this, e = e, s = wx.getStorageSync("userInfo");
        return console.log(s), s ? s.memberInfo.uid ? void t.util.request({
            url: "entry/wxapp/checkuserinfo",
            data: {
                sessionid: s.sessionid,
                uid: s.memberInfo.uid
            },
            success: function(t) {
                console.log("payyyy"), 0 == t.data.data.error ? e.doServices() : 2 == t.data.data.error && e.doElseServices();
            }
        }) : (t.util.getUserInfo(), !1) : (t.util.getUserInfo(function(t) {
            a.getlethousedetail();
        }), !1);
    }
});