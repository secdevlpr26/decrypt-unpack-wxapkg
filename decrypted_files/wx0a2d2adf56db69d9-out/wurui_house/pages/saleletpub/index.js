var t = getApp();

Page({
    data: {
        title: "",
        special: "",
        imagelist: [],
        uploadimagelist: [ "", "", "", "", "", "" ],
        true6: !0,
        arealist: [],
        toplist: [],
        rent: [],
        areaid: 0,
        toplistid: 0,
        rentid: 0,
        decmsg: !0,
        rentmsg: !0,
        decorate: "",
        decrent: "",
        checks: [ {
            name: "中介勿扰",
            value: "中介勿扰",
            checked: !1
        }, {
            name: "拎包入住",
            value: "拎包入住",
            checked: !1
        }, {
            name: "带厨卫",
            value: "带厨卫",
            checked: !1
        }, {
            name: "交通便利",
            value: "交通便利",
            checked: !1
        }, {
            name: "电梯房",
            value: "电梯房",
            checked: !1
        } ]
    },
    onLoad: function(t) {
        var e = this;
        wx.setNavigationBarTitle({
            title: "发布求租"
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
        var a = this, i = wx.getStorageSync("userInfo");
        t.util.request({
            url: "entry/wxapp/Getpubinit",
            data: {
                sessionid: i.sessionid,
                uid: i.memberInfo.uid
            },
            success: function(t) {
                t.data.message.errno || (a.data.arealist = t.data.data.arealist, a.data.toplist = t.data.data.toplist, 
                a.data.rent = t.data.data.rent, a.setData({
                    arealist: t.data.data.arealist,
                    toplist: t.data.data.toplist,
                    rent: t.data.data.rent
                }));
            }
        });
    },
    bindAreaChange: function(t) {
        var e = this.data.arealist;
        e && (this.data.areaid = e[t.detail.value].id), this.setData({
            arealist: e,
            areaidindex: t.detail.value
        });
    },
    bindToplistChange: function(t) {
        var e = this.data.toplist;
        e && (this.data.toplistid = e[t.detail.value].id), this.setData({
            toplist: e,
            toplistidindex: t.detail.value
        });
    },
    bindRentChange: function(t) {
        var e = this.data.rent;
        e && (this.data.rentid = e[t.detail.value].id), this.setData({
            rent: e,
            rentidindex: t.detail.value
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
    savepubinfo: function(e) {
        var a = wx.getStorageSync("userInfo"), i = e.detail.value.content, s = e.detail.value.name, n = e.detail.value.tel, d = this.data.areaid, o = this.data.special;
        if ("" != i) if (o) {
            var c = this.data.uploadimagelist;
            if (c.length < 2) wx.showModal({
                title: "提示",
                content: "上传图片不少于2张",
                showCancel: !1
            }); else if ("" != s) if ("" != n) if (0 != d) {
                var r = c.join("@"), l = this.data.toplistid, u = {
                    sessionid: a.sessionid,
                    uid: a.memberInfo.uid,
                    uploadimagelist_str: r,
                    housedescription: i,
                    special: o,
                    cusname: s,
                    cusphone: n,
                    houseaddress: d,
                    saletype: 4,
                    avatarUrl: a.wxInfo.avatarUrl,
                    toplistid: l,
                    status: 2
                };
                t.util.request({
                    url: "entry/wxapp/Saverentinfo",
                    data: u,
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
                                    url: "/centsung_house/pages/myseek/index"
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
    checkboxChange: function(t) {
        var e = t.detail.value;
        this.data.special = e.join(",");
    },
    checkuser: function(e) {
        var a = this, e = e, i = wx.getStorageSync("userInfo");
        return console.log(i), i ? i.memberInfo.uid ? void t.util.request({
            url: "entry/wxapp/checkuserinfo",
            data: {
                sessionid: i.sessionid,
                uid: i.memberInfo.uid
            },
            success: function(t) {
                console.log("payyyy"), 0 == t.data.data.error ? e.doServices() : 2 == t.data.data.error && e.doElseServices();
            }
        }) : (t.util.getUserInfo(), !1) : (t.util.getUserInfo(function(t) {
            a.getlethousedetail();
        }), !1);
    },
    showdec: function() {
        this.data.decmsg = !1, this.setData({
            decmsg: this.data.decmsg
        });
    },
    closedec: function(t) {
        this.data.decmsg = !0, this.setData({
            decmsg: this.data.decmsg
        });
    },
    selectdec: function(t) {
        this.data.decorate = t.currentTarget.dataset.name;
        var e = t.currentTarget.dataset.name;
        this.data.areaid = t.currentTarget.dataset.id, this.setData({
            decorate: e
        }), this.closedec();
    },
    showrent: function() {
        this.data.rentmsg = !1, this.setData({
            rentmsg: this.data.rentmsg
        });
    },
    closerent: function(t) {
        this.data.rentmsg = !0, this.setData({
            rentmsg: this.data.rentmsg
        });
    },
    selectrent: function(t) {
        this.data.decrent = t.currentTarget.dataset.rentprice;
        var e = t.currentTarget.dataset.rentprice;
        this.data.rentid = t.currentTarget.dataset.id, this.setData({
            decrent: e
        }), this.closerent();
    },
    clicks: function(t) {
        var e = t.currentTarget.dataset.index, a = this.data.checks;
        0 == a[e].checked ? a[e].checked = !0 : a[e].checked = !1, this.setData({
            checks: a
        }), this.radioChange(t);
    }
});