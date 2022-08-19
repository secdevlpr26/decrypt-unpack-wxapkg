function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e, a = require("../../resource/js/htmlToWxml.js"), s = (require("../../resource/js/images.js"), 
getApp());

Page((e = {
    data: {
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
        id: 0,
        thumb: "",
        code: "",
        housetypename: "",
        houseprice: "",
        buildarea: "",
        housetype: "",
        companyinfo: "",
        hidden: !0,
        piclist: "",
        areaname: "",
        productspecial: "",
        showmsg: !0,
        date: "2018-6-29",
        time: "12:01",
        isopen: 0
    },
    onLoad: function(t) {
        wx.setNavigationBarTitle({
            title: wx.getStorageSync("companyinfo").name
        });
        var e = this;
        if (this.data.id > 0) i = this.data.id; else {
            var i = t.id;
            this.data.id = t.id;
        }
        s.util.request({
            url: "entry/wxapp/getnewhousedetail",
            data: {
                id: i
            },
            success: function(t) {
                if (!t.data.message.errno) {
                    var s = a.html2json(t.data.data.list.content);
                    e.data.title = t.data.data.list.housename, e.data.address = t.data.data.list.houseaddress, 
                    e.data.housetype = t.data.data.list.housetype, e.data.housetypename = t.data.data.list.housetypename, 
                    e.data.houseprice = t.data.data.list.houseprice, e.data.thumb = "https://www.0572dq.com/attachment/" + t.data.data.list.thumb, 
                    e.data.lat = t.data.data.list.lat, e.data.lng = t.data.data.list.lng, e.data.piclist = t.data.data.piclist, 
                    e.data.housecase = t.data.data.housecase, e.data.casephone = t.data.data.casephone, 
                    e.data.houseareaid = t.data.data.list.houseareaid, e.data.companyinfo = wx.getStorageSync("companyinfo").name, 
                    e.data.productspecial = t.data.data.list.productspecial, e.data.areaname = t.data.data.list.areaname, 
                    e.data.agentid = t.data.data.list.agentid, e.data.agentname = t.data.data.list.agentname, 
                    e.data.agentthumb = t.data.data.list.agentthumb, e.data.agenttel = t.data.data.list.agenttel, 
                    wx.setNavigationBarTitle({
                        title: e.data.title
                    }), e.setData({
                        data: t.data.data.list,
                        housepic: t.data.data.housepic,
                        houseplan: t.data.data.houseplan,
                        piclist: t.data.data.piclist,
                        housecase: t.data.data.housecase,
                        casephone: t.data.data.casephone,
                        content: s
                    });
                }
            },
            complete: function() {
                wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
            }
        });
        var n = s.globalData.appid, o = s.globalData.appsecret;
        s.util.request({
            url: "entry/wxapp/getcode",
            data: {
                appid: n,
                appsecret: o,
                page: "wurui_house/pages/newhousedetail/index?",
                sqlname: "wurui_house_houseinfo",
                id: i
            },
            success: function(t) {
                if (!t.data.errno) {
                    e.data.code = t.data;
                    var a = new Promise(function(t, a) {
                        wx.getImageInfo({
                            src: e.data.code,
                            success: function(e) {
                                console.log(e), t(e);
                            }
                        });
                    }), s = new Promise(function(t, a) {
                        wx.getImageInfo({
                            src: e.data.thumb,
                            success: function(e) {
                                console.log(e), t(e);
                            }
                        });
                    });
                    Promise.all([ a, s ]).then(function(t) {
                        console.log(t);
                        var a = wx.createCanvasContext("shareImg"), s = e.data.productspecial.split(""), i = "", n = [];
                        a.setFontSize(18), a.setFillStyle("#000");
                        for (u = 0; u < s.length; u++) a.measureText(i).width < 250 ? i += s[u] : (u--, 
                        n.push(i), i = "");
                        if (n.push(i), n.length > 2) {
                            for (var o = n.slice(0, 2), d = o[1], l = "", r = [], u = 0; u < d.length && a.measureText(l).width < 220; u++) l += d[u];
                            r.push(l);
                            var c = r[0] + "...";
                            o.splice(1, 1, c), n = o;
                        }
                        a.restore(), a.setFillStyle("#ffffff"), a.fillRect(0, 0, 700, 800), a.setFillStyle("#000000");
                        for (var h = 0; h < n.length; h++) a.setFillStyle("#000000"), a.setFontSize(32.9), 
                        a.fillText(n[h], 20, 40 + 40 * h);
                        a.setStrokeStyle("#DDDDDD"), a.lineTo(500, 130), a.lineTo(20, 130), a.stroke(), 
                        a.beginPath(), a.lineTo(500, 230), a.lineTo(20, 230), a.setFontSize(23.1), a.fillText("小区", 35, 170), 
                        a.setFontSize(.042 * 700), a.fillText(e.data.title, 20, 220), a.setFontSize(23.1), 
                        a.fillText("区域", 250, 170, 500), a.setFontSize(.042 * 700), a.fillText(e.data.areaname, 240, 220), 
                        a.setFontSize(23.1), a.fillText("户型", 450, 170, 500), a.setFontSize(.042 * 700), 
                        a.fillText(e.data.housetypename, 450, 220, 500), a.setFillStyle("#000000"), a.setTextAlign("left"), 
                        a.setFillStyle("red"), a.setFontSize(32), a.fillText(e.data.houseprice, 20, 275, 500), 
                        a.fillText("元/㎡", 130, 275, 500), a.setFillStyle("#000000"), a.setFontSize(25.9), 
                        a.setTextAlign("center"), a.setFillStyle("#000000"), a.setFontSize(25.9), a.setTextAlign("center"), 
                        a.drawImage(t[1].path, 20, 300, 500, 250), a.drawImage(t[0].path, 345, 560, 140, 122), 
                        a.setTextAlign("left"), a.setFontSize(.032 * 700), a.fillText("长按图片识别二维码", 20, 600), 
                        a.fillText("查看更多房源", 50, 630), a.stroke(), a.draw();
                    });
                }
            }
        });
    },
    binduserinfo: function(t) {
        var e = this;
        e.data.showmsg = !1;
        var a = wx.getStorageSync("userInfo");
        s.util.request({
            url: "entry/wxapp/getuserinfo",
            data: {
                sessionid: a.sessionid,
                uid: a.memberInfo.uid
            },
            success: function(t) {
                e.setData({
                    user: t.data.data,
                    showmsg: e.data.showmsg
                });
            }
        });
    },
    closemsg: function(t) {
        this.data.showmsg = !0, this.setData({
            showmsg: this.data.showmsg
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
    closetype: function(t) {
        this.data.hidden = !0, this.setData({
            hidden: this.data.hidden
        });
    },
    goMap: function(t) {
        var e = this;
        wx.openLocation({
            latitude: parseFloat(e.data.lat),
            longitude: parseFloat(e.data.lng),
            scale: 18,
            name: e.data.title,
            address: e.data.address
        });
    },
    jump: function(t) {
        wx.switchTab({
            url: "/wurui_house/pages/index/index"
        });
    },
    doCall: function(t) {
        console.log(t.currentTarget);
        var e = t.currentTarget.dataset.tel;
        wx.makePhoneCall({
            phoneNumber: e,
            success: function() {
                console.log("拨打电话成功！");
            },
            fail: function() {
                console.log("拨打电话失败！");
            }
        });
    },
    bindDateChange: function(t) {
        this.setData({
            date: t.detail.value
        });
    },
    bindTimeChange: function(t) {
        this.setData({
            time: t.detail.value
        });
    },
    saveuserinfo: function(t) {
        var e = this, a = t.detail.value.contactname, i = t.detail.value.contactphone, n = t.detail.value.referrer, o = t.detail.value.date + " " + t.detail.value.time, d = e.data.title, l = e.data.housetype, r = e.data.address, u = e.data.houseareaid;
        e.data.showmsg = !0;
        var c = wx.getStorageSync("userInfo");
        "" != a ? "" != i ? /^1[345678]\d{9}$/.test(i) ? 11 == i.length ? s.util.request({
            url: "entry/wxapp/savehousecontact",
            data: {
                sessionid: c.sessionid,
                uid: c.memberInfo.uid,
                name: a,
                tel: i,
                title: d,
                housetype: l,
                address: r,
                houseareaid: u,
                contacttime: o,
                referrer: n
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
            content: "请填写十一位手机号码",
            showCancel: !1
        }) : wx.showModal({
            title: "提示",
            content: "请填写正确的手机号码",
            showCancel: !1
        }) : wx.showModal({
            title: "提示",
            content: "请填写您的手机号",
            showCancel: !1
        }) : wx.showModal({
            title: "提示",
            content: "请填写您的姓名",
            showCancel: !1
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
    onShareAppMessage: function() {}
}, t(e, "onShareAppMessage", function() {
    return {
        title: this.data.title + "-" + wx.getStorageSync("companyinfo").name,
        path: "/wurui_house/pages/newhousedetail/index?id=" + this.data.id
    };
}), t(e, "previewImage", function(t) {
    var e = t.currentTarget.id;
    wx.previewImage({
        current: e,
        urls: this.data.casephone
    });
}), t(e, "previewImage1", function(t) {
    var e = t.currentTarget.id;
    wx.previewImage({
        current: e,
        urls: this.data.housecase
    });
}), t(e, "openDetail", function(t) {
    this.setData({
        isopen: 1
    });
}), t(e, "closeDetail", function(t) {
    this.setData({
        isopen: 0
    });
}), t(e, "toAgentDetail", function(t) {
    var e = t.currentTarget.dataset.id;
    wx.navigateTo({
        url: "/wurui_house/pages/agentdetail/index?id=" + e
    });
}), e));