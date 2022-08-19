function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a, e = require("../../resource/js/htmlToWxml.js"), i = (require("../../resource/js/images.js"), 
getApp());

Page(t({
    data: (a = {
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
    }, t(a, "title", ""), t(a, "thumb", ""), t(a, "code", ""), t(a, "buildarea", ""), 
    t(a, "special", ""), t(a, "companyinfo", ""), t(a, "housetype", ""), t(a, "housearea", ""), 
    t(a, "hidden", !0), t(a, "housestyle", ""), t(a, "area", ""), t(a, "piclist", ""), 
    t(a, "agentid", ""), t(a, "agentname", ""), t(a, "agentthumb", ""), t(a, "agenttel", ""), 
    t(a, "showmsg", !0), a),
    onLoad: function(t) {
        wx.setNavigationBarTitle({
            title: wx.getStorageSync("companyinfo").name
        });
        var a = this;
        if (this.data.id > 0) n = this.data.id; else {
            var n = t.id;
            this.data.id = t.id;
        }
        var s = this;
        wx.getSystemInfo({
            success: function(t) {
                s.setData({
                    screenHeight: t.windowHeight,
                    screenWidth: t.windowWidth
                });
            }
        }), i.util.request({
            url: "entry/wxapp/getoldhousedetail",
            data: {
                id: n
            },
            success: function(t) {
                if (!t.data.message.errno) {
                    var i = e.html2json(t.data.data.list.content);
                    a.data.title = t.data.data.list.title, a.data.address = t.data.data.list.address, 
                    a.data.lat = t.data.data.list.lat, a.data.lng = t.data.data.list.lng, a.data.thumb = "https://www.0572dq.com/attachment/" + t.data.data.list.thumb, 
                    a.data.houseareaid = t.data.data.list.houseareaid, a.data.housestyle = t.data.data.list.housestyle, 
                    a.data.area = t.data.data.list.area, a.data.saleprice = t.data.data.list.saleprice, 
                    a.data.companyinfo = wx.getStorageSync("companyinfo").name, a.data.special = t.data.data.list.special, 
                    a.data.housearea = t.data.data.list.housearea, a.data.agentid = t.data.data.list.agentid, 
                    a.data.agentname = t.data.data.list.agentname, a.data.agentthumb = t.data.data.list.agentthumb, 
                    a.data.agenttel = t.data.data.list.agenttel, a.data.perprice = t.data.data.list.perprice, 
                    wx.setNavigationBarTitle({
                        title: a.data.title
                    }), a.setData({
                        data: t.data.data.list,
                        piclist: t.data.data.piclist,
                        content: i
                    });
                }
            },
            complete: function() {
                wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
            }
        });
        var o = i.globalData.appid, l = i.globalData.appsecret;
        i.util.request({
            url: "entry/wxapp/getcode",
            data: {
                appid: o,
                appsecret: l,
                page: "wurui_house/pages/oldhousedetail/index?",
                sqlname: "wurui_house_oldhouseinfo",
                id: n
            },
            success: function(t) {
                if (!t.data.errno) {
                    a.data.code = t.data;
                    var e = new Promise(function(t, e) {
                        wx.getImageInfo({
                            src: a.data.code,
                            success: function(a) {
                                console.log(a), t(a);
                            }
                        });
                    }), i = new Promise(function(t, e) {
                        wx.getImageInfo({
                            src: a.data.thumb,
                            success: function(a) {
                                console.log(a), t(a);
                            }
                        });
                    });
                    Promise.all([ e, i ]).then(function(t) {
                        console.log(t);
                        var e = wx.createCanvasContext("shareImg"), i = a.data.title.split(""), n = "", s = [];
                        e.setFontSize(18), e.setFillStyle("#000");
                        for (c = 0; c < i.length; c++) e.measureText(n).width < 250 ? n += i[c] : (c--, 
                        s.push(n), n = "");
                        if (s.push(n), s.length > 2) {
                            for (var o = s.slice(0, 2), l = o[1], d = "", r = [], c = 0; c < l.length && e.measureText(d).width < 220; c++) d += l[c];
                            r.push(d);
                            var u = r[0] + "...";
                            o.splice(1, 1, u), s = o;
                        }
                        e.restore(), e.setFillStyle("#ffffff"), e.fillRect(0, 0, 700, 800), e.setFillStyle("#000000");
                        for (var h = 0; h < s.length; h++) e.setFillStyle("#000000"), e.setFontSize(32.9), 
                        e.fillText(s[h], 20, 40 + 40 * h);
                        e.setStrokeStyle("#DDDDDD"), e.lineTo(500, 130), e.lineTo(20, 130), e.stroke(), 
                        e.beginPath(), e.lineTo(500, 230), e.lineTo(20, 230), e.setFontSize(23.1), e.fillText("小区", 35, 170), 
                        e.setFontSize(.042 * 700), e.fillText(a.data.housearea, 20, 220), e.setFontSize(23.1), 
                        e.fillText("户型", 250, 170, 500), e.setFontSize(.042 * 700), e.fillText(a.data.housestyle, 220, 220), 
                        e.setFontSize(23.1), e.fillText("面积(㎡)", 430, 170, 500), e.setFontSize(.042 * 700), 
                        e.fillText(a.data.area, 430, 220, 500), e.setFillStyle("#000000"), e.setTextAlign("left"), 
                        e.setFillStyle("red"), e.setFontSize(32), e.fillText(a.data.saleprice, 20, 275, 500), 
                        e.fillText("万元", 100, 275, 500), e.setFillStyle("#000000"), e.setFontSize(25.9), 
                        e.setTextAlign("center"), e.setFillStyle("#000000"), e.setFontSize(25.9), e.setTextAlign("center"), 
                        e.drawImage(t[1].path, 20, 300, 500, 250), e.drawImage(t[0].path, 345, 560, 140, 122), 
                        e.setTextAlign("left"), e.setFontSize(.032 * 700), e.fillText("长按图片识别二维码", 20, 600), 
                        e.fillText("查看更多房源", 50, 630), e.stroke(), e.draw();
                    });
                }
            }
        });
    },
    goMap: function(t) {
        var a = this;
        console.log(a.data.lat), console.log(a.data.lng), wx.openLocation({
            latitude: a.data.lat,
            longitude: a.data.lng,
            scale: 28,
            name: a.data.title,
            address: a.data.address
        });
    },
    doCall: function(t) {
        console.log(t.currentTarget);
        var a = t.currentTarget.dataset.tel;
        wx.makePhoneCall({
            phoneNumber: a,
            success: function() {
                console.log("拨打电话成功！");
            },
            fail: function() {
                console.log("拨打电话失败！");
            }
        });
    },
    toAgentDetail: function(t) {
        var a = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/wurui_house/pages/agentdetail/index?id=" + a
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
            height: 771,
            destWidth: 545,
            destHeight: 771,
            canvasId: "shareImg",
            success: function(a) {
                console.log(a.tempFilePath), t.setData({
                    prurl: a.tempFilePath,
                    hidden: !1
                }), wx.hideLoading();
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    jump: function(t) {
        wx.switchTab({
            url: "/wurui_house/pages/index/index"
        });
    },
    save: function() {
        var t = this;
        wx.saveImageToPhotosAlbum({
            filePath: t.data.prurl,
            success: function(a) {
                wx.showModal({
                    content: "图片已保存到相册，赶紧晒一下吧~",
                    showCancel: !1,
                    confirmText: "好哒",
                    confirmColor: "#72B9C3",
                    success: function(a) {
                        a.confirm && (console.log("用户点击确定"), t.setData({
                            hidden: !0
                        }));
                    }
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    closetype: function(t) {
        this.data.hidden = !0, this.setData({
            hidden: this.data.hidden
        });
    },
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading(), this.onLoad();
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {}
}, "onShareAppMessage", function() {
    return console.log(this.data.id), {
        title: this.data.title + "-" + wx.getStorageSync("companyinfo").name,
        path: "/wurui_house/pages/oldhousedetail/index?id=" + this.data.id
    };
}));