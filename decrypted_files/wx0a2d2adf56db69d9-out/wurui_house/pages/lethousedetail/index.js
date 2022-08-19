function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e, a, i = require("../../resource/js/htmlToWxml.js"), s = (require("../../resource/js/images.js"), 
getApp());

Page((a = {
    data: (e = {
        height: 0,
        imgwidth: 750,
        imgheight: 600,
        current: 0,
        images: {},
        autoplay: !0,
        interval: 3e3,
        duration: 1e3,
        title: "",
        address: "",
        lat: 0,
        lng: 0,
        id: 0
    }, t(e, "title", ""), t(e, "thumb", ""), t(e, "code", ""), t(e, "buildarea", ""), 
    t(e, "housetype", ""), t(e, "special", ""), t(e, "companyinfo", ""), t(e, "roomtype", ""), 
    t(e, "payway", ""), t(e, "money", ""), t(e, "agentid", ""), t(e, "hidden", !0), 
    t(e, "showmsg", !0), e),
    onLoad: function(t) {
        wx.setNavigationBarTitle({
            title: wx.getStorageSync("companyinfo").name
        });
        var e = this;
        if (e.data.id > 0) e.data.id; else {
            t.id;
            e.data.id = t.id;
        }
        e.getlethousedetail();
    },
    goMap: function(t) {
        var e = this;
        console.log("ffffff"), wx.openLocation({
            latitude: parseFloat(e.data.lat),
            longitude: parseFloat(e.data.lng),
            scale: 18,
            name: e.data.title,
            address: e.data.address
        });
    },
    doCall: function(t) {
        var e = t.currentTarget.dataset.tel;
        wx.makePhoneCall({
            phoneNumber: e,
            success: function(t) {
                console.log("拨打电话成功！");
            },
            fail: function(t) {
                console.log(t), console.log("拨打电话失败！");
            }
        });
    },
    toAgentDetail: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/wurui_house/pages/agentdetail/index?id=" + e
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading(), this.onLoad();
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getlethousedetail: function() {
        var t = this, e = wx.getStorageSync("userInfo");
        s.util.request({
            url: "entry/wxapp/getlethousedetail",
            data: {
                id: t.data.id,
                sessionid: e.sessionid,
                uid: e.memberInfo.uid
            },
            success: function(e) {
                if (!e.data.message.errno) {
                    var a = i.html2json(e.data.data.list.content);
                    t.data.title = e.data.data.list.title, t.data.address = e.data.data.list.address, 
                    t.data.lat = e.data.data.list.lat, t.data.lng = e.data.data.list.lng, t.data.thumb = "https://www.0572dq.com/attachment/" + e.data.data.list.thumb, 
                    t.data.houseareaid = e.data.data.list.houseareaid, t.data.companyinfo = wx.getStorageSync("companyinfo").name, 
                    t.data.special = e.data.data.list.special, t.data.roomtype = e.data.data.list.roomtype, 
                    t.data.payway = e.data.data.list.payway, t.data.money = e.data.data.list.money, 
                    t.data.housearea = e.data.data.list.housearea, t.data.housetypename = e.data.data.list.housetypename, 
                    t.data.agentid = e.data.data.list.agentid, t.data.agentname = e.data.data.list.agentname, 
                    t.data.agentthumb = e.data.data.list.agentthumb, t.data.agenttel = e.data.data.list.agenttel, 
                    wx.setNavigationBarTitle({
                        title: t.data.title
                    }), t.setData({
                        data: e.data.data.list,
                        piclist: e.data.data.piclist,
                        content: a,
                        ispay: e.data.data.ispay
                    });
                }
            },
            complete: function() {
                wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
            }
        });
        var a = s.globalData.appid, o = s.globalData.appsecret;
        s.util.request({
            url: "entry/wxapp/getcode",
            data: {
                appid: a,
                appsecret: o,
                page: "wurui_house/pages/lethousedetail/index?",
                sqlname: "wurui_house_lethouseinfo",
                id: t.data.id
            },
            success: function(e) {
                if (!e.data.errno) {
                    t.data.code = e.data;
                    var a = new Promise(function(e, a) {
                        wx.getImageInfo({
                            src: t.data.code,
                            success: function(t) {
                                console.log(t), e(t);
                            }
                        });
                    }), i = new Promise(function(e, a) {
                        wx.getImageInfo({
                            src: t.data.thumb,
                            success: function(t) {
                                console.log(t), e(t);
                            }
                        });
                    });
                    Promise.all([ a, i ]).then(function(e) {
                        console.log(e);
                        var a = wx.createCanvasContext("shareImg"), i = t.data.title.split(""), s = "", o = [];
                        a.setFontSize(18), a.setFillStyle("#000");
                        for (u = 0; u < i.length; u++) a.measureText(s).width < 250 ? s += i[u] : (u--, 
                        o.push(s), s = "");
                        if (o.push(s), o.length > 2) {
                            for (var n = o.slice(0, 2), l = n[1], d = "", r = [], u = 0; u < l.length && a.measureText(d).width < 220; u++) d += l[u];
                            r.push(d);
                            var c = r[0] + "...";
                            n.splice(1, 1, c), o = n;
                        }
                        a.restore(), a.setFillStyle("#ffffff"), a.fillRect(0, 0, 700, 800), a.setFillStyle("#000000");
                        for (var h = 0; h < o.length; h++) a.setFillStyle("#000000"), a.setFontSize(32.9), 
                        a.fillText(o[h], 20, 40 + 40 * h);
                        a.setStrokeStyle("#DDDDDD"), a.lineTo(500, 130), a.lineTo(20, 130), a.stroke(), 
                        a.beginPath(), a.lineTo(500, 230), a.lineTo(20, 230), a.setFontSize(23.1), a.fillText("小区", 50, 170), 
                        a.setFontSize(.042 * 700), a.fillText(t.data.housearea, 20, 220), a.setFontSize(23.1), 
                        a.fillText("户型", 250, 170, 500), a.setFontSize(.042 * 700), a.fillText(t.data.roomtype, 200, 220), 
                        a.setFontSize(23.1), a.fillText(t.data.payway, 440, 170, 500), a.setFontSize(.042 * 700), 
                        a.setFillStyle("red"), a.fillText(t.data.money, 410, 220, 500), a.fillText("/月", 480, 220, 500), 
                        a.setFillStyle("#000000"), a.setFillStyle("#000000"), a.setTextAlign("left"), a.setFillStyle("#000000"), 
                        a.setFontSize(25.9), a.setTextAlign("center"), a.setFillStyle("#000000"), a.setFontSize(25.9), 
                        a.setTextAlign("center"), a.drawImage(e[1].path, 20, 300, 500, 250), a.drawImage(e[0].path, 345, 560, 140, 122), 
                        a.setTextAlign("left"), a.setFontSize(.032 * 700), a.fillText("长按图片识别二维码", 20, 600), 
                        a.fillText("查看更多房源", 50, 630), a.stroke(), a.draw();
                    });
                }
            }
        });
    },
    share: function() {
        var t = this;
        wx.showLoading({
            title: "努力生成中..."
        }), wx.canvasToTempFilePath({
            x: 0,
            y: 0,
            width: 545,
            height: 800,
            destWidth: 545,
            destHeight: 800,
            canvasId: "shareImg",
            success: function(e) {
                console.log(e.tempFilePath), t.setData({
                    prurl: e.tempFilePath,
                    hidden: !1
                }), wx.hideLoading();
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    closetype: function(t) {
        this.data.hidden = !0, this.setData({
            hidden: this.data.hidden
        });
    },
    save: function() {
        var t = this;
        wx.saveImageToPhotosAlbum({
            filePath: t.data.prurl,
            success: function(e) {
                wx.showModal({
                    content: "图片已保存到相册，赶紧晒一下吧~",
                    showCancel: !1,
                    confirmText: "好哒",
                    confirmColor: "#72B9C3",
                    success: function(e) {
                        e.confirm && (console.log("用户点击确定"), t.setData({
                            hidden: !0
                        }));
                    }
                });
            }
        });
    },
    jump: function(t) {
        wx.switchTab({
            url: "/wurui_house/pages/index/index"
        });
    }
}, t(a, "onShareAppMessage", function() {
    return {
        title: this.data.title + "-" + wx.getStorageSync("companyinfo").name,
        path: "/wurui_house/pages/lethousedetail/index?id=" + this.data.id
    };
}), t(a, "checkuser", function(t) {
    var e = this, t = t, a = wx.getStorageSync("userInfo");
    return console.log(a), a ? a.memberInfo.uid ? void s.util.request({
        url: "entry/wxapp/checkuserinfo",
        data: {
            sessionid: a.sessionid,
            uid: a.memberInfo.uid
        },
        success: function(e) {
            console.log("payyyy"), 0 == e.data.data.error ? t.doServices() : 2 == e.data.data.error && t.doElseServices();
        }
    }) : (s.util.getUserInfo(), !1) : (s.util.getUserInfo(function(t) {
        e.getlethousedetail();
    }), !1);
}), t(a, "saveuserinfo", function(t) {
    var e = this, a = t.detail.value.name, i = t.detail.value.tel;
    e.data.showmsg = !0;
    var o = wx.getStorageSync("userInfo");
    "" != a ? "" != i ? s.util.request({
        url: "entry/wxapp/saveuserinfo",
        data: {
            sessionid: o.sessionid,
            uid: o.memberInfo.uid,
            name: a,
            tel: i
        },
        success: function(t) {
            if (0 != t.data.errno) return wx.hideLoading(), void wx.showModal({
                title: "失败",
                content: t.data.msg,
                showCancel: !1
            });
            wx.showToast({
                title: "操作成功",
                icon: "success",
                duration: 2e3
            }), e.setData({
                showmsg: e.data.showmsg
            });
        }
    }) : wx.showModal({
        title: "提示",
        content: "请填写您的手机号",
        showCancel: !1
    }) : wx.showModal({
        title: "提示",
        content: "请填写您的姓名",
        showCancel: !1
    });
}), t(a, "closemsg", function(t) {
    this.data.showmsg = !0, this.setData({
        showmsg: this.data.showmsg
    });
}), a));