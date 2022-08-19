var e = getApp();

Page({
    data: {
        title: "",
        special: "",
        imagelist: [],
        uploadimagelist: [ "", "", "", "", "", "" ],
        arealist: [],
        toplist: [],
        areaid: 0,
        toplistid: 0,
        decmsg: !0,
        decorate: "",
        checks: [ {
            name: "中介勿扰",
            value: "中介勿扰",
            checked: !1
        }, {
            name: "全款买房",
            value: "全款买房",
            checked: !1
        }, {
            name: "带车位",
            value: "带车位",
            checked: !1
        }, {
            name: "交通便利",
            value: "交通便利",
            checked: !1
        }, {
            name: "双证齐全",
            value: "双证齐全",
            checked: !1
        }, {
            name: "电梯房",
            value: "电梯房",
            checked: !1
        } ]
    },
    onLoad: function(e) {
        var t = this;
        wx.setNavigationBarTitle({
            title: "发布求购"
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
                e.data.message.errno || (a.data.arealist = e.data.data.arealist, a.data.toplist = e.data.data.toplist, 
                a.setData({
                    arealist: e.data.data.arealist,
                    toplist: e.data.data.toplist
                }));
            }
        });
    },
    bindAreaChange: function(e) {
        var t = this.data.arealist;
        t && (this.data.areaid = t[e.detail.value].id), this.setData({
            arealist: t,
            areaidindex: e.detail.value
        });
    },
    bindToplistChange: function(e) {
        var t = this.data.toplist;
        t && (this.data.toplistid = t[e.detail.value].id), this.setData({
            toplist: t,
            toplistidindex: e.detail.value
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
    savepubinfo: function(t) {
        var a = wx.getStorageSync("userInfo"), i = t.detail.value.content, s = t.detail.value.name, o = t.detail.value.tel, n = this.data.areaid, d = this.data.special;
        if ("" != i) if (d) {
            var l = this.data.uploadimagelist;
            if (l.length < 2) wx.showModal({
                title: "提示",
                content: "上传图片不少于2张",
                showCancel: !1
            }); else if ("" != s) if ("" != o) if (0 != n) {
                var c = l.join("@"), u = this.data.toplistid, r = {
                    sessionid: a.sessionid,
                    uid: a.memberInfo.uid,
                    uploadimagelist_str: c,
                    housedescription: i,
                    special: d,
                    cusname: s,
                    cusphone: o,
                    houseaddress: n,
                    saletype: 4,
                    avatarUrl: a.wxInfo.avatarUrl,
                    toplistid: u,
                    status: 1
                };
                e.util.request({
                    url: "entry/wxapp/Saverentinfo",
                    data: r,
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
                                    url: "/wurui_house/pages/myseek/index"
                                });
                            }
                        });
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
            content: "请输入求租房描述",
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
                var t = JSON.parse(e.data);
                if (200 == e.statusCode) for (var i = t.data.path, o = 0; o < s.data.uploadimagelist.length; o++) o + 1 == a && (s.data.uploadimagelist[o] = i); else wx.showModal({
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
    showdec: function() {
        this.data.decmsg = !1, this.setData({
            decmsg: this.data.decmsg
        });
    },
    closedec: function(e) {
        this.data.decmsg = !0, this.setData({
            decmsg: this.data.decmsg
        });
    },
    selectdec: function(e) {
        this.data.decorate = e.currentTarget.dataset.name;
        var t = e.currentTarget.dataset.name;
        this.data.areaid = e.currentTarget.dataset.id, this.setData({
            decorate: t
        }), this.closedec();
    },
    clicks: function(e) {
        var t = e.currentTarget.dataset.index, a = this.data.checks;
        0 == a[t].checked ? a[t].checked = !0 : a[t].checked = !1, this.setData({
            checks: a
        }), this.radioChange(e);
    }
});