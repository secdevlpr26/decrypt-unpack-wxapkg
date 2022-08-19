var a = getApp();

Page({
    data: {
        title: "",
        special: "",
        imagelist: [],
        uploadimagelist: [ "", "", "", "", "", "" ],
        true1: !0,
        true2: !0,
        true3: !0,
        true4: !0,
        true5: !0,
        true6: !0,
        arealist: [],
        toplist: [],
        areaid: 0,
        toplistid: 0
    },
    onLoad: function(a) {
        var t = this;
        wx.setNavigationBarTitle({
            title: "个人发布二手房-" + wx.getStorageSync("companyinfo").name
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
        var e = this, i = wx.getStorageSync("userInfo");
        a.util.request({
            url: "entry/wxapp/Getpubinit",
            data: {
                sessionid: i.sessionid,
                uid: i.memberInfo.uid
            },
            success: function(a) {
                a.data.message.errno || (e.data.arealist = a.data.data.arealist, e.data.toplist = a.data.data.toplist, 
                e.setData({
                    arealist: a.data.data.arealist,
                    toplist: a.data.data.toplist
                }));
            }
        });
    },
    bindAreaChange: function(a) {
        var t = this.data.arealist;
        t && (this.data.areaid = t[a.detail.value].id), this.setData({
            arealist: t,
            areaidindex: a.detail.value
        });
    },
    bindToplistChange: function(a) {
        var t = this.data.toplist;
        t && (this.data.toplistid = t[a.detail.value].id), this.setData({
            toplist: t,
            toplistidindex: a.detail.value
        });
    },
    upload: function(a) {
        var t = this, a = a;
        t.checkuser({
            doServices: function() {
                t.doupload(a);
            },
            doElseServices: function() {
                t.doupload(a);
            }
        });
    },
    doupload: function(a) {
        var t = this, e = parseInt(a.currentTarget.dataset.id);
        switch (e) {
          case 1:
            if (0 == t.data.true1) return;
            break;

          case 2:
            if (0 == t.data.true2) return;
            break;

          case 3:
            if (0 == t.data.true3) return;
            break;

          case 4:
            if (0 == t.data.true4) return;
            break;

          case 5:
            if (0 == t.data.true5) return;
            break;

          case 6:
            if (0 == t.data.true6) return;
        }
        var i, s, o, n, r, u;
        wx.chooseImage({
            count: 1,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                var l = a.tempFilePaths;
                switch (e) {
                  case 1:
                    if (i = l, console.log(t.data.true1), 0 == t.data.true1) return;
                    t.data.true1 = !1;
                    break;

                  case 2:
                    s = l, t.data.true2 = !1;
                    break;

                  case 3:
                    o = l, t.data.true3 = !1;
                    break;

                  case 4:
                    n = l, t.data.true4 = !1;
                    break;

                  case 5:
                    r = l, t.data.true5 = !1;
                    break;

                  case 6:
                    u = l, t.data.true6 = !1;
                }
                t.setData({
                    imgurl1: i,
                    imgurl2: s,
                    imgurl3: o,
                    imgurl4: n,
                    imgurl5: r,
                    imgurl6: u,
                    true1: t.data.true1,
                    true2: t.data.true2,
                    true3: t.data.true3,
                    true4: t.data.true4,
                    true5: t.data.true5,
                    true6: t.data.true6
                }), t.data.imagelist.push(l), t.uploadimg(l, e);
            }
        });
    },
    delupload: function(a) {
        var t = this, e = parseInt(a.currentTarget.dataset.id);
        switch (e) {
          case 1:
            t.setData({
                imgurl1: "",
                true1: !0
            });
            break;

          case 2:
            t.setData({
                imgurl2: "",
                true2: !0
            });
            break;

          case 3:
            t.setData({
                imgurl3: "",
                true3: !0
            });
            break;

          case 4:
            t.setData({
                imgurl4: "",
                true4: !0
            });
            break;

          case 5:
            t.setData({
                imgurl5: "",
                true5: !0
            });
            break;

          case 6:
            t.setData({
                imgurl6: "",
                true6: !0
            });
        }
        for (var i = 0; i < this.data.uploadimagelist.length; i++) i + 1 == e && (this.data.uploadimagelist[i] = "");
        console.log(this.data.uploadimagelist);
    },
    savepubinfo: function(t) {
        var e = this, i = wx.getStorageSync("userInfo"), s = t.detail.value.content, o = t.detail.value.name, n = t.detail.value.tel, r = this.data.areaid, u = this.data.special;
        if (console.log(this.data.areaid), "" != s) if (u) {
            var l = this.data.uploadimagelist;
            if (l.length < 2) wx.showModal({
                title: "提示",
                content: "上传图片不少于2张",
                showCancel: !1
            }); else if ("" != o) if ("" != n) if (0 != r) {
                var d = l.join("@"), c = this.data.toplistid, p = {
                    sessionid: i.sessionid,
                    uid: i.memberInfo.uid,
                    uploadimagelist_str: d,
                    content: s,
                    special: u,
                    name: o,
                    tel: n,
                    houseareaid: r,
                    saletype: 1,
                    avatarUrl: i.wxInfo.avatarUrl,
                    toplistid: c
                };
                a.util.request({
                    url: "entry/wxapp/savesaleinfo",
                    data: p,
                    success: function(t) {
                        if (e.data.toplistid > 0) {
                            var i = e.data.toplistid, s = t.data.data.saleinfoid, o = wx.getStorageSync("userInfo");
                            wx.showModal({
                                title: "确认支付",
                                content: "确认支付？",
                                success: function(t) {
                                    t.confirm && a.util.request({
                                        url: "entry/wxapp/Salepay",
                                        data: {
                                            toplistid: i,
                                            ordertype: "puboldhouse",
                                            pid: s,
                                            sessionid: o.sessionid,
                                            uid: o.memberInfo.uid
                                        },
                                        success: function(a) {
                                            console.log(a), a.data && a.data.data && wx.requestPayment({
                                                timeStamp: a.data.data.timeStamp,
                                                nonceStr: a.data.data.nonceStr,
                                                package: a.data.data.package,
                                                signType: "MD5",
                                                paySign: a.data.data.paySign,
                                                success: function(a) {
                                                    console.log(a), wx.showToast({
                                                        title: "提交成功",
                                                        icon: "success",
                                                        duration: 2e3,
                                                        success: function(a) {
                                                            console.log(a), wx.navigateTo({
                                                                url: "/wurui_house/pages/mysalepub/index?id=1"
                                                            });
                                                        }
                                                    });
                                                },
                                                fail: function(a) {}
                                            });
                                        },
                                        fail: function(a) {
                                            console.log(a);
                                        }
                                    });
                                }
                            });
                        } else {
                            if (0 != t.data.errno) return wx.hideLoading(), void wx.showModal({
                                title: "失败",
                                content: t.data.data.msg,
                                showCancel: !1
                            });
                            wx.showToast({
                                title: "提交成功",
                                icon: "success",
                                duration: 2e3,
                                success: function(a) {
                                    console.log(a), wx.navigateTo({
                                        url: "/wurui_house/pages/mysalepub/index?id=1"
                                    });
                                }
                            });
                        }
                    }
                });
            } else wx.showModal({
                title: "提示",
                content: "请选择地区",
                showCancel: !1
            }); else wx.showModal({
                title: "提示",
                content: "请输入手机号",
                showCancel: !1
            }); else wx.showModal({
                title: "提示",
                content: "请输入联系人",
                showCancel: !1
            });
        } else wx.showModal({
            title: "提示",
            content: "请选择房屋特色",
            showCancel: !1
        }); else wx.showModal({
            title: "提示",
            content: "请输入二手房描述",
            showCancel: !1
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    uploadimg: function(t, e) {
        var i = a.util.geturl({
            url: "entry/wxapp/upload"
        }), e = e;
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
            success: function(a) {
                var t = JSON.parse(a.data);
                if (200 == a.statusCode) for (var i = t.data.path, o = 0; o < s.data.uploadimagelist.length; o++) o + 1 == e && (s.data.uploadimagelist[o] = i); else wx.showModal({
                    title: "提示",
                    content: "上传失败",
                    showCancel: !1
                });
            },
            fail: function(a) {
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
    checkboxChange: function(a) {
        var t = a.detail.value;
        this.data.special = t.join(",");
    },
    checkuser: function(t) {
        var e = this, t = t, i = wx.getStorageSync("userInfo");
        return console.log(i), i ? i.memberInfo.uid ? void a.util.request({
            url: "entry/wxapp/checkuserinfo",
            data: {
                sessionid: i.sessionid,
                uid: i.memberInfo.uid
            },
            success: function(a) {
                console.log("payyyy"), 0 == a.data.data.error ? t.doServices() : 2 == a.data.data.error && t.doElseServices();
            }
        }) : (a.util.getUserInfo(), !1) : (a.util.getUserInfo(function(a) {
            e.getlethousedetail();
        }), !1);
    }
});