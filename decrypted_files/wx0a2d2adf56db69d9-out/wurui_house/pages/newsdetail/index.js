require("../../resource/js/htmlToWxml.js");

var t = require("../../resource/wxParse/wxParse.js"), e = getApp();

Page(function(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}({
    data: {
        id: 0,
        title: "",
        thumb: "",
        code: "",
        buildarea: "",
        housetype: "",
        content: "",
        hidden: !0,
        showmsg: !0
    },
    imageLoad: function(t) {
        var e = imageUtil.imageUtil(t);
        this.setData({
            imagewidth: e.imageWidth,
            imageheight: e.imageHeight
        });
    },
    onLoad: function(a) {
        if (wx.setNavigationBarTitle({
            title: wx.getStorageSync("companyinfo").name
        }), this.data.id > 0) i = this.data.id; else {
            var i = a.id;
            this.data.id = a.id;
        }
        console.log(i);
        var n = this;
        e.util.request({
            url: "entry/wxapp/getnewsdetail",
            data: {
                id: i
            },
            success: function(e) {
                if (!e.data.message.errno) {
                    n.data.title = e.data.data.title, n.data.content = e.data.data.content, n.data.thumb = "https://www.0572dq.com/attachment/" + e.data.data.thumb, 
                    n.data.companyinfo = wx.getStorageSync("companyinfo").name, wx.setNavigationBarTitle({
                        title: "房产资讯"
                    }), n.setData({
                        data: e.data.data,
                        content: t.wxParse("article", "html", e.data.data.content, n, 5)
                    });
                }
            },
            complete: function() {
                wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
            }
        });
        var o = e.globalData.appid, s = e.globalData.appsecret;
        e.util.request({
            url: "entry/wxapp/getcode",
            data: {
                appid: o,
                appsecret: s,
                page: "wurui_house/pages/newsdetail/index?",
                sqlname: "wurui_house_content",
                id: i
            },
            success: function(t) {
                if (!t.data.errno) {
                    n.data.code = t.data;
                    var e = new Promise(function(t, e) {
                        wx.getImageInfo({
                            src: n.data.code,
                            success: function(e) {
                                console.log(e), t(e);
                            }
                        });
                    }), a = new Promise(function(t, e) {
                        wx.getImageInfo({
                            src: n.data.thumb,
                            success: function(e) {
                                console.log(e), t(e);
                            }
                        });
                    });
                    Promise.all([ e, a ]).then(function(t) {
                        console.log(t);
                        var e = wx.createCanvasContext("shareImg"), a = n.data.title.split(""), i = "", o = [];
                        e.setFontSize(18), e.setFillStyle("#000");
                        for (r = 0; r < a.length; r++) e.measureText(i).width < 350 ? i += a[r] : (r--, 
                        o.push(i), i = "");
                        if (o.push(i), o.length > 2) {
                            for (var s = o.slice(0, 2), d = s[1], l = "", c = [], r = 0; r < d.length && e.measureText(l).width < 220; r++) l += d[r];
                            c.push(l);
                            var u = c[0] + "...";
                            s.splice(1, 1, u), o = s;
                        }
                        e.restore(), e.setFillStyle("#ffffff"), e.fillRect(0, 0, 700, 710), e.setFillStyle("#000000"), 
                        e.setFontSize(.042 * 700);
                        for (var h = 0; h < o.length; h++) e.setFillStyle("#000000"), e.setFontSize(25.9), 
                        e.fillText(o[h], 20, 40 + 40 * h);
                        e.drawImage(t[1].path, 20, 350, 500, 320), e.drawImage(t[0].path, 345, 180, 160, 160), 
                        e.setTextAlign("left"), e.fillText("长按图片查看咨询", 20, 300), e.stroke(), e.draw();
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
            height: 771,
            destWidth: 545,
            destHeight: 771,
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
    jump: function(t) {
        wx.switchTab({
            url: "/wurui_house/pages/index/index"
        });
    },
    onReady: function() {},
    closetype: function(t) {
        this.data.hidden = !0, this.setData({
            hidden: this.data.hidden
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading(), this.onLoad();
    },
    onReachBottom: function() {
        wx.showNavigationBarLoading(), this.onLoad();
    },
    onShareAppMessage: function() {}
}, "onShareAppMessage", function() {
    return {
        title: this.data.title + "-" + wx.getStorageSync("companyinfo").name,
        path: "/wurui_house/pages/newsdetail/index?id=" + this.data.id
    };
}));