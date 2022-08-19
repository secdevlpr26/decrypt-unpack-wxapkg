function t(t, s, e) {
    return s in t ? Object.defineProperty(t, s, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[s] = e, t;
}

var s, e, o = require("../../../utils/server"), a = require("../../../utils/wxParse/wxParse.js");

Page((s = {
    data: {
        shareAlert: !1,
        fenishare: !1,
        saveimgsrc: "",
        windowWidth: 230,
        scale: 2,
        bgPath: "",
        qrPath: "",
        buys: !1,
        bh: 0,
        goods: {},
        current: 0,
        tabStates: [ !0, !1, !1 ],
        tabClasss: [ "text-select", "text-normal", "text-normal" ],
        galleryHeight: getApp().screenWidth,
        tab: 0,
        goods_num: 1,
        textStates: [ "view-btns-text-normal", "view-btns-text-select" ],
        pos: 0,
        scroll: "index0"
    },
    phone: function() {
        wx.makePhoneCall({
            phoneNumber: getApp().globalData.userInfo.mobile1
        });
    },
    home: function(t) {
        wx.redirectTo({
            url: "../../seller/goods?id=" + this.data.goods.store.store_id
        });
    },
    subsoksbtn: function() {
        this.setData({
            buys: !1
        });
    },
    gbimg: function() {
        this.setData({
            buys: !1
        });
    },
    specification: function(t) {
        var s = t.currentTarget.dataset.type;
        this.setData({
            t: s
        }), this.setData({
            buys: !0
        });
    },
    bug: function() {
        var t = this.data.goods, s = "";
        if (null != t.goods.goods_spec_list) for (var e = 0; e < t.goods.goods_spec_list.length; e++) for (var a = 0; a < t.goods.goods_spec_list[e].length; a++) 1 == t.goods.goods_spec_list[e][a].isClick && (s = "" == s ? t.goods.goods_spec_list[e][a].item_id : s + "_" + t.goods.goods_spec_list[e][a].item_id);
        var i = getApp(), d = this, r = d.data.goods.goods.goods_id, n = s, g = i.globalData.openid, c = d.data.goods_num, l = "0";
        i.globalData.userInfo && (l = i.globalData.userInfo.user_id), o.getJSON("/Cart/addCart", {
            goods_id: r,
            goods_spec: n,
            session_id: g,
            goods_num: c,
            user_id: l
        }, function(t) {
            1 == t.data.status ? (wx.showToast({
                title: "已加入购物车",
                icon: "success",
                duration: 2e3
            }), wx.navigateTo({
                url: "../createOrder/createOrder"
            })) : wx.showToast({
                title: t.data.msg,
                icon: "error",
                duration: 2e3
            });
        });
    },
    closetap: function(t) {
        this.setData({
            shareAlert: !1
        });
    },
    saveimg: function() {
        var t = this;
        console.log(this.data.saveimgsrc), wx.saveImageToPhotosAlbum({
            filePath: this.data.saveimgsrc,
            success: function(s) {
                wx.showModal({
                    title: "存图成功",
                    content: "图片成功保存到相册了，去发朋友圈噻~",
                    showCancel: !1,
                    confirmText: "好哒",
                    confirmColor: "#72B9C3",
                    success: function(s) {
                        s.confirm && console.log("用户点击确定"), t.hideShareImg();
                    }
                });
            }
        });
    },
    writeTextOnCanvas: function(t, s, e, o) {
        var a = this;
        console.log(t, s, e, o);
        for (var i = s, o = o.substr(0, 28), d = 1; function(t) {
            for (var s = t.length, e = 0, o = 0; o < s; o++) t.charCodeAt(o) > 128 ? e += 2 : e += 1;
            return e;
        }(o) > 0; d++) {
            var r = function(t, s) {
                for (var e = t.length, o = e, a = 0, i = 0; i < e; i++) if (t.charCodeAt(i) > 128) {
                    if (!(a + 2 < s)) {
                        o = i;
                        break;
                    }
                    a += 2;
                } else {
                    if (!(a + 1 < s)) {
                        o = i;
                        break;
                    }
                    a += 1;
                }
                return o;
            }(o, e);
            t.fillText(o.substr(0, r).replace(/^\s+|\s+$/, ""), a.data.windowWidth / 4.452173913043478, d * i + a.data.windowHeight / 1.9), 
            o = o.substr(r);
        }
    },
    drowimg: function(t, s) {
        var e = this, o = e.data.windowWidth, a = e.data.windowHeight, i = wx.createCanvasContext("myCanvas");
        i.setFillStyle("white"), i.rect(0, 0, o, a), i.fill(), i.drawImage(t, (o - 210) / 2, a / 20, 210, 210), 
        i.drawImage("/images/s2.png", o - 29, 10, o / 11.03448275862069, a / 3.2411575562700965), 
        i.drawImage("/images/s4.png", 0, e.data.windowHeight / 1.9 + 5, o / 5.171717171717172, a / 17.92), 
        i.setFillStyle("#333333"), i.font = "Microsoft YaHei", i.setFontSize(o / 21), i.textBaseline = "center", 
        this.writeTextOnCanvas(i, 20, 25, e.data.goods.goods.goods_name), i.setFontSize(o / 20), 
        i.setFillStyle("#e69101"), i.fillText("￥" + e.data.goods.goods.shop_price, 71.875, a / 1.62 + 20), 
        i.setStrokeStyle("#dddddd"), i.moveTo(0, a / 1.5272727272727273 + 10), i.lineTo(o, a / 1.5272727272727273 + 10), 
        i.stroke(), i.drawImage(s, o / 12.8, a / 1.5272727272727273 + 20, o / 3.5, o / 3.5), 
        i.drawImage("/images/s5.png", o / 2.2857142857142856, a / 1.5272727272727273 + 50, o / 2.1069958847736627, a / 13.667796610169491), 
        i.drawImage("/images/s6.png", 0, a - 33.75, o, o / 465 * 54), i.draw(), setTimeout(function() {
            wx.hideLoading(), wx.canvasToTempFilePath({
                x: 0,
                y: 0,
                width: 2 * o,
                height: 2 * a + 100,
                destWidth: 2 * o,
                destHeight: 2 * a + 100,
                canvasId: "myCanvas",
                success: function(t) {
                    console.log("朋友圈分享图生成成功:" + t.tempFilePath), e.setData({
                        saveimgsrc: t.tempFilePath
                    });
                },
                fail: function(t) {
                    console.log("生成图片失败"), console.log(t);
                }
            });
        }, 500);
    },
    tapshare: function() {
        if (this.setData({
            shareAlert: !0,
            fenishare: !1
        }), this.data.saveimgsrc) return !1;
        wx.showLoading({
            title: "生成中..."
        }), this.onShareImg();
    },
    show: function(t) {
        var s = this.data.saveimgsrc;
        wx.previewImage({
            current: "",
            urls: [ s ]
        });
    },
    propClick: function(t) {
        for (var s = t.currentTarget.dataset.pos, e = t.currentTarget.dataset.index, o = this.data.goods, a = 0; a < o.goods.goods_spec_list[e].length; a++) a == s ? o.goods.goods_spec_list[e][s].isClick = 1 : o.goods.goods_spec_list[e][a].isClick = 0;
        this.setData({
            goods: o
        }), this.checkPrice();
    },
    addCollect: function(t) {
        var s = t.currentTarget.dataset.id;
        console.log(s);
        var e = getApp().globalData.userInfo.user_id;
        o.getJSON("/Goods/collectGoods/user_id/" + e + "/goods_id/" + s + "/type/0", function(t) {
            wx.showToast({
                title: t.data.msg,
                icon: "success",
                duration: 2e3
            });
        });
    },
    bindMinus: function(t) {
        var s = this.data.goods_num;
        s > 1 && s--, this.setData({
            goods_num: s
        });
    },
    bindManual: function(t) {
        parseInt(t.currentTarget.dataset.index);
        var s = t.detail.value;
        this.setData({
            goods_num: s
        });
    },
    bindPlus: function(t) {
        var s = this.data.goods_num;
        s++, this.setData({
            goods_num: s
        });
    },
    getCurrentPageUrlWithArgs: function() {
        var t = getCurrentPages(), s = t[t.length - 1], e = s.route, o = s.options, a = e + "?";
        for (var i in o) a += i + "=" + o[i] + "&";
        return a = a.substring(0, a.length - 1);
    },
    onLoad: function(t) {
        o = this;
        wx.getSystemInfo({
            success: function(t) {
                var s = t.windowWidth, e = t.windowHeight;
                o.setData({
                    windowWidth: s,
                    windowHeight: e
                });
            }
        }), this.setData({
            bh: wx.getSystemInfoSync().windowHeight
        });
        var s = t.objectId;
        void 0 != t.user_id && (getApp().globalData.fuser_id = t.user_id, getApp().globalData.goods_id = s), 
        e = s, this.getGoodsById(s);
        getApp();
        var o = this;
    },
    tapfriendshare: function() {
        this.setData({
            fenishare: !0
        });
    },
    closefenishare: function() {
        this.setData({
            fenishare: !1
        });
    },
    sharehaoyou: function() {
        this.setData({
            fenishare: !1
        });
    },
    tabClick: function(t) {
        var s = t.currentTarget.dataset.index, e = [ "text-normal", "text-normal", "text-normal" ];
        e[s] = "text-select", this.setData({
            tabClasss: e,
            tab: s
        });
    },
    getGoodsById: function(t) {
        var s = this;
        o.getJSON("/Goods/goodsInfo1/id/" + t, function(t) {
            var e = t.data.result;
            s.setData({
                goods: e
            }), a.wxParse("article", "html", e.goods.goods_content, s, 5), e.goods_spec_list && (e.goods_spec_list[0][0].select = "select"), 
            s.setData({
                goods: e,
                cindex: 0
            }), s.checkPrice();
        });
    },
    onShareImg: function() {
        var t = this.getCurrentPageUrlWithArgs(), s = this;
        wx.downloadFile({
            url: "https" + this.data.goods.gallery[0].image_url.substr(4),
            success: function(e) {
                200 === e.statusCode && (s.setData({
                    bgPath: e.tempFilePath
                }), wx.request({
                    url: "https://xcx001.ycdongxu.com/index.php/WXAPI/Qrcode/getcode",
                    data: {
                        path: t,
                        width: 50
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(t) {
                        wx.downloadFile({
                            url: "https" + t.data.qrcode.slice(4),
                            success: function(t) {
                                200 === t.statusCode && (s.setData({
                                    qrPath: t.tempFilePath
                                }), s.drowimg(s.data.bgPath, s.data.qrPath), console.log("商品图片：" + s.data.bgPath, "商品小程序码" + s.data.qrPath));
                            }
                        });
                    }
                }));
            }
        });
    },
    checkPrice: function() {
        var t = this.data.goods, s = "";
        if (console.log("-------" + t.goods.shop_price), this.setData({
            price: t.goods.shop_price
        }), null != t.goods.goods_spec_list && void 0 != t.goods.goods_spec_list && 0 != t.goods.goods_spec_list.length) {
            for (a = 0; a < t.goods.goods_spec_list.length; a++) for (var e = 0; e < t.goods.goods_spec_list[a].length; e++) 1 == t.goods.goods_spec_list[a][e].isClick && (s = "" == s ? t.goods.goods_spec_list[a][e].item_id : s + "_" + t.goods.goods_spec_list[a][e].item_id);
            console.log(s);
            for (var o = s.split("_"), a = 0; a < o.length; a++) o[a] = parseInt(o[a]);
            o.sort(function(t, s) {
                return t - s;
            }), s = "";
            for (a = 0; a < o.length; a++) s = "" == s ? o[a] : s + "_" + o[a];
            console.log(s);
            var i = t.spec_goods_price[s].price;
            console.log(i), this.setData({
                price: i
            });
        }
    }
}, t(s, "bug", function(t) {
    var s = t.currentTarget.dataset.type;
    this.setData({
        t: s
    });
    var e = this.data.goods, a = "";
    if (null != e.goods.goods_spec_list) for (var i = 0; i < e.goods.goods_spec_list.length; i++) for (var d = 0; d < e.goods.goods_spec_list[i].length; d++) 1 == e.goods.goods_spec_list[i][d].isClick && (a = "" == a ? e.goods.goods_spec_list[i][d].item_id : a + "_" + e.goods.goods_spec_list[i][d].item_id);
    var r = getApp(), n = this, g = n.data.goods.goods.goods_id, c = a, l = r.globalData.openid, u = n.data.goods_num, h = "0";
    h = r.globalData.userInfo.user_id, o.getJSON("/Cart/addCart", {
        goods_id: g,
        goods_spec: c,
        session_id: l,
        goods_num: u,
        user_id: h
    }, function(t) {
        1 == t.data.status ? (0 == s && wx.navigateTo({
            url: "../createOrder/createOrder"
        }), wx.showToast({
            title: "已加入购物车",
            icon: "success",
            duration: 2e3
        })) : wx.showToast({
            title: t.data.msg,
            icon: "error",
            duration: 2e3
        });
    });
}), t(s, "cart", function() {
    wx.switchTab({
        url: "../createOrder/createOrder"
    });
}), t(s, "addCart", function() {
    return void wx.switchTab({
        url: "../createOrder/createOrder"
    });
}), t(s, "showCartToast", function() {
    wx.showToast({
        title: "已加入购物车",
        icon: "success",
        duration: 1e3
    }), wx.switchTab({
        url: "../createOrder/createOrder"
    });
}), t(s, "previewImage", function(t) {
    wx.previewImage({
        current: this.data.goods.get("images")[parseInt(t.currentTarget.dataset.current)],
        urls: this.data.goods.get("images")
    });
}), t(s, "onShareAppMessage", function() {
    var t = getApp().globalData.userInfo.user_id;
    console.log("/pages/goods/detail/detail?objectId=" + e + "&user_id=" + t);
    var s = "/pages/goods/detail/detail?objectId=" + e + "&user_id=" + t;
    return console.log(s), {
        imageUrl: this.data.goods.goods.original_img,
        title: this.data.goods.goods.goods_name,
        desc: this.data.goods.store.store_name,
        path: s
    };
}), t(s, "numberSub", function(t) {
    var s = t.currentTarget.dataset.index, e = this.data.cindex, o = this.data.goods, a = o.goods_spec_list[0][e].item_id, i = o.goods_spec_list[1][s].item_id, d = "";
    d = a > i ? i + "_" + a : a + "_" + i, console.log(d), o.spec_goods_price[d].num > 0 && o.spec_goods_price[d].num--, 
    this.setData({
        goods: o
    });
}), t(s, "numberAdd", function(t) {
    var s = t.currentTarget.dataset.index, e = this.data.cindex, o = this.data.goods, a = o.goods_spec_list[0][e].item_id, i = o.goods_spec_list[1][s].item_id, d = "";
    d = a > i ? i + "_" + a : a + "_" + i, console.log(d), o.spec_goods_price[d].num++, 
    this.setData({
        goods: o
    });
}), t(s, "cselect", function(t) {
    for (var s = t.currentTarget.dataset.index, e = this.data.goods, o = 0; o < e.goods_spec_list[0].length; o++) e.goods_spec_list[0][o].select = "";
    e.goods_spec_list[0][s].select = "select", this.setData({
        goods: e,
        cindex: s
    });
}), t(s, "left", function() {
    if (0 == this.data.pos) ; else {
        var t = this.data.pos - 1;
        this.setData({
            pos: t,
            scroll: "index" + t
        });
    }
}), t(s, "right", function() {
    if (this.data.pos > 2) ; else {
        var t = this.data.pos + 1;
        this.setData({
            pos: t,
            scroll: "index" + t
        });
    }
}), t(s, "sure", function() {
    var t = this.data.goods, s = this.data.goods.spec_goods_price, e = this, a = 0;
    for (var i in s) i = s[i], a += parseInt(i.num);
    console.log(a), a < parseInt(this.data.goods.goods.weight) ? wx.showToast({
        title: "批发量少于" + this.data.goods.goods.weight + "件"
    }) : o.getJSON("/Cart/updateSpec", {
        user_id: getApp().globalData.userInfo.user_id,
        goods_id: t.goods.goods_id,
        spec: JSON.stringify(s)
    }, function(t) {
        e.setData({
            buys: !1
        }), 0 == e.data.t && wx.switchTab({
            url: "../createOrder/createOrder"
        }), wx.showToast({
            title: "加入购物车成功"
        });
    });
}), t(s, "hideAttrPicker", function() {
    this.setData({
        buys: !1
    });
}), s));