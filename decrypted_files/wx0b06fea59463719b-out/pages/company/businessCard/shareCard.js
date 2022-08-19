var e = getApp(), t = require("../../../common.js");

Page({
    isloading: !1,
    url: !1,
    data: {
        baseUrl: e.globalData.siteBaseUrl,
        isSuccess: !1,
        canSave: !0
    },
    onLoad: function(a) {
        var n = this;
        e.registerGlobalFunctions(n), t.initCommonModules(), this.setData({
            queryparams: a,
            scrviewFlag: !1,
            companyName: a.companyName,
            cardid: a.id,
            siteid: a.SiteID,
            username: a.username,
            position: a.position,
            baseUrl: e.globalData.siteBaseUrl,
            mobile: a.mobile,
            email: a.email,
            personImg: a.personImg,
            nothingHeight: wx.getSystemInfoSync().windowHeight
        }), wx.getSystemInfo({
            success: function(e) {
                wx.setStorageSync("userSystemInfo", e);
            }
        }), this.downLoadImg(), this.getQrCode();
    },
    onShow: function() {
        var e = this;
        wx.getSetting({
            success: function(t) {
                "" != wx.getStorageSync("canSaveImg") && "false" == wx.getStorageSync("canSaveImg") && (t.authSetting["scope.writePhotosAlbum"] ? e.setData({
                    canSave: !0
                }) : e.setData({
                    canSave: !1
                }));
            }
        });
    },
    downLoadImg: function() {
        var e = this, t = e.data.baseUrl + "/images/wxapp/wxapp_code_text.png", a = e.data.baseUrl + "/images/wxapp/wxapp_code_err.png";
        wx.downloadFile({
            url: t,
            success: function(t) {
                e.setData({
                    codeTextImg: t.tempFilePath
                }, function() {
                    wx.downloadFile({
                        url: a,
                        success: function(t) {
                            e.setData({
                                errTextImg: t.tempFilePath
                            });
                        }
                    });
                });
            }
        });
    },
    getQrCode: function() {
        var t = this;
        e.sendRequest({
            url: "/index.php?c=Front/WxApp/BaseApi&a=getBusinessCardQrCode&ID=" + t.data.cardid,
            method: "GET",
            success: function(e) {
                t.data.email ? t.drawImage(e) : t.drawImageOther(e);
            },
            fail: function(e) {},
            hideLoading: !0
        });
    },
    drawImage: function(e) {
        var t = this;
        wx.showLoading({
            title: "加载中...",
            mask: !0
        });
        var a = t.data.baseUrl + t.data.personImg, n = wx.getStorageSync("userSystemInfo").screenWidth, s = Math.round(13 / 375 * n), i = n / 750 * 630, o = n / 750 * 940;
        t.setData({
            canvasWidth: parseInt(i),
            canvasHeight: parseInt(o),
            buttonTop: parseInt(o) + 24
        });
        var r = "normal bold " + s + "px sans-serif", l = wx.createCanvasContext("myCanvas");
        l.setFillStyle("white"), l.fillRect(0, 0, i, o);
        var d = 280 / 375 * n, c = .08 * n + i, g = .04 * n, u = .064 * n, m = t.data.companyName, h = t.data.username, f = t.data.position, w = t.data.mobile, x = t.data.email, S = (l.measureText("一").width, 
        d - l.measureText("一").width), p = 0, y = 0, v = 1;
        l.setFontSize(14), l.setFillStyle("#333");
        for (var I = 0; I < m.length; I++) {
            if (p += l.measureText(m[I]).width, v > 1 && (d = S), p > d) {
                if (l.fillText(m.substring(y, I), g, c), v > 1) {
                    var T = g + l.measureText(m.substring(y, I)).width;
                    l.fillText("…", T, c);
                    break;
                }
                c += u, p = l.measureText("一").width, y = I, v++;
            }
            I == m.length - 1 && l.fillText(m.substring(y, I + 1), g, c);
        }
        for (var F = c + u + 16 / 375 * n, b = c + u + 17 / 375 * n, D = 0, C = 0; C < h.length; C++) D += l.measureText(h[C]).width;
        var P = g + (Math.round(D) + 12) / 375 * n, L = Math.round(11 / 375 * n);
        l.setFontSize(L), l.setFillStyle("#999"), l.fillText(f, P, b);
        var b = b + 38 / 375 * n, L = Math.round(.032 * n);
        l.setFontSize(L), l.setFillStyle("#333"), l.fillText(w, g, b), wx.setStorageSync("deposited", b);
        var b = b + 23 / 375 * n, L = Math.round(.032 * n);
        l.setFontSize(L), l.setFillStyle("#333"), l.fillText(x, g, b), wx.downloadFile({
            url: a,
            success: function(a) {
                l.drawImage(a.tempFilePath, 0, 0, i, i), e.success ? wx.downloadFile({
                    url: e.data.product_qrcode,
                    success: function(e) {
                        m = 0;
                        wx.getStorageSync("deposited") && (m = wx.getStorageSync("deposited"));
                        var a = e.tempFilePath, s = 220 / 375 * n, d = m - 68 / 375 * n, c = .2 * n;
                        l.drawImage(a, s, d, c, c);
                        var u = t.data.codeTextImg, m = d + 86 / 375 * n, f = .576 * n, w = 80 / 375 * n, x = 10 / 375 * n;
                        l.drawImage(u, f, m, w, x), setTimeout(function() {
                            var e = Math.round(.04 * n);
                            l.setFontSize(e), r = "normal bold " + e + "px sans-serif", l.font = r, l.setFillStyle("#333333"), 
                            l.fillText(h, g, F), l.draw(!1, function() {
                                wx.canvasToTempFilePath({
                                    x: 0,
                                    y: 0,
                                    width: i,
                                    height: o,
                                    destWidth: i * wx.getStorageSync("userSystemInfo").pixelRatio,
                                    destHeight: o * wx.getStorageSync("userSystemInfo").pixelRatio,
                                    quality: 1,
                                    fileType: "png",
                                    canvasId: "myCanvas",
                                    success: function(e) {
                                        t.setData({
                                            shareImage: e.tempFilePath,
                                            changeImageShow: !0
                                        }), setTimeout(function() {
                                            wx.hideLoading(), t.setData({
                                                hideCanvas: !0
                                            }), wx.getStorageSync("userSystemInfo").system.split(" ")[0];
                                        }, 1e3);
                                    },
                                    fail: function(e) {
                                        wx.hideLoading();
                                    }
                                });
                            });
                        }, 2e3);
                    },
                    fail: function(e) {
                        console.log(e, "缓存二维码图片失败");
                    }
                }) : wx.downloadFile({
                    url: t.data.baseUrl + "/images/wxapp/unpublished.png",
                    success: function(e) {
                        u = 0;
                        wx.getStorageSync("deposited") && (u = wx.getStorageSync("deposited"));
                        var a = 226 / 375 * n, s = u - 62 / 375 * n, d = 65 / 375 * n;
                        l.drawImage(e.tempFilePath, a, s, d, d);
                        var c = t.data.errTextImg, u = s + 86 / 375 * n, m = .576 * n, f = 80 / 375 * n, w = 10 / 375 * n;
                        l.drawImage(c, m, u, f, w), setTimeout(function() {
                            var e = Math.round(.04 * n);
                            l.setFontSize(e), r = "normal bold " + e + "px sans-serif", l.font = r, l.setFillStyle("#333333"), 
                            l.fillText(h, g, F), l.draw(!1, function() {
                                wx.canvasToTempFilePath({
                                    x: 0,
                                    y: 0,
                                    width: i,
                                    height: o,
                                    destWidth: i * wx.getStorageSync("userSystemInfo").pixelRatio,
                                    destHeight: o * wx.getStorageSync("userSystemInfo").pixelRatio,
                                    quality: 1,
                                    fileType: "png",
                                    canvasId: "myCanvas",
                                    success: function(e) {
                                        t.setData({
                                            shareImage: e.tempFilePath,
                                            changeImageShow: !0
                                        }), setTimeout(function() {
                                            wx.hideLoading(), t.setData({
                                                hideCanvas: !0
                                            }), wx.getStorageSync("userSystemInfo").system.split(" ")[0];
                                        }, 1e3);
                                    },
                                    fail: function(e) {
                                        wx.hideLoading();
                                    }
                                });
                            });
                        }, 2e3);
                    },
                    fail: function(e) {
                        console.log(e, "缓存二维码图片失败");
                    }
                });
            },
            fail: function(e) {
                console.log(e, "缓存产品图片失败");
            }
        });
    },
    drawImageOther: function(e) {
        var t = this;
        wx.showLoading({
            title: "加载中...",
            mask: !0
        });
        var a = t.data.baseUrl + t.data.personImg, n = wx.getStorageSync("userSystemInfo").screenWidth, s = Math.round(13 / 375 * n), i = n / 750 * 630, o = n / 750 * 940;
        t.setData({
            canvasWidth: parseInt(i),
            canvasHeight: parseInt(o),
            buttonTop: parseInt(o) + 24
        });
        var r = "normal bold " + s + "px sans-serif", l = wx.createCanvasContext("myCanvas");
        l.setFillStyle("white"), l.fillRect(0, 0, i, o);
        var d = 280 / 375 * n, c = .08 * n + i, g = .04 * n, u = .064 * n, m = t.data.companyName, h = t.data.username, f = t.data.position, w = t.data.mobile, x = (l.measureText("一").width, 
        d - l.measureText("一").width), S = 0, p = 0, y = 1;
        l.setFontSize(14), l.setFillStyle("#333");
        for (var v = 0; v < m.length; v++) {
            if (S += l.measureText(m[v]).width, y > 1 && (d = x), S > d) {
                if (l.fillText(m.substring(p, v), g, c), y > 1) {
                    var I = g + l.measureText(m.substring(p, v)).width;
                    l.fillText("…", I, c);
                    break;
                }
                c += u, S = l.measureText("一").width, p = v, y++;
            }
            v == m.length - 1 && l.fillText(m.substring(p, v + 1), g, c);
        }
        for (var T = c + u + 26 / 375 * n, F = c + u + .072 * n, b = 0, D = 0; D < h.length; D++) b += l.measureText(h[D]).width;
        var C = g + (Math.round(b) + 12) / 375 * n, P = Math.round(11 / 375 * n);
        l.setFontSize(P), l.setFillStyle("#999"), l.fillText(f, C, F);
        var F = F + .08 * n, P = Math.round(.032 * n);
        l.setFontSize(P), l.setFillStyle("#333"), l.fillText(w, g, F), wx.setStorageSync("deposited", F), 
        wx.downloadFile({
            url: a,
            success: function(a) {
                l.drawImage(a.tempFilePath, 0, 0, i, i), e.success ? wx.downloadFile({
                    url: e.data.product_qrcode,
                    success: function(e) {
                        m = 0;
                        wx.getStorageSync("deposited") && (m = wx.getStorageSync("deposited"));
                        var a = e.tempFilePath, s = 220 / 375 * n, d = m - 68 / 375 * n, c = .2 * n;
                        l.drawImage(a, s, d, c, c);
                        var u = t.data.codeTextImg, m = d + 86 / 375 * n, f = .576 * n, w = 80 / 375 * n, x = 10 / 375 * n;
                        l.drawImage(u, f, m, w, x), setTimeout(function() {
                            var e = Math.round(.04 * n);
                            l.setFontSize(e), r = "normal bold " + e + "px sans-serif", l.font = r, l.setFillStyle("#333333"), 
                            l.fillText(h, g, T), l.draw(!1, function() {
                                wx.canvasToTempFilePath({
                                    x: 0,
                                    y: 0,
                                    width: i,
                                    height: o,
                                    destWidth: i * wx.getStorageSync("userSystemInfo").pixelRatio,
                                    destHeight: o * wx.getStorageSync("userSystemInfo").pixelRatio,
                                    quality: 1,
                                    fileType: "png",
                                    canvasId: "myCanvas",
                                    success: function(e) {
                                        t.setData({
                                            shareImage: e.tempFilePath,
                                            changeImageShow: !0
                                        }), setTimeout(function() {
                                            wx.hideLoading(), t.setData({
                                                hideCanvas: !0
                                            }), wx.getStorageSync("userSystemInfo").system.split(" ")[0];
                                        }, 1e3);
                                    },
                                    fail: function(e) {
                                        wx.hideLoading();
                                    }
                                });
                            });
                        }, 2e3);
                    },
                    fail: function(e) {
                        console.log(e, "缓存二维码图片失败");
                    }
                }) : wx.downloadFile({
                    url: t.data.baseUrl + "/images/wxapp/unpublished.png",
                    success: function(e) {
                        u = 0;
                        wx.getStorageSync("deposited") && (u = wx.getStorageSync("deposited"));
                        var a = 226 / 375 * n, s = u - .16 * n, d = 65 / 375 * n;
                        l.drawImage(e.tempFilePath, a, s, d, d);
                        var c = t.data.errTextImg, u = s + 86 / 375 * n, m = .576 * n, f = 80 / 375 * n, w = 10 / 375 * n;
                        l.drawImage(c, m, u, f, w), setTimeout(function() {
                            var e = Math.round(.04 * n);
                            l.setFontSize(e), r = "normal bold " + e + "px sans-serif", l.font = r, l.setFillStyle("#333333"), 
                            l.fillText(h, g, T), l.draw(!1, function() {
                                wx.canvasToTempFilePath({
                                    x: 0,
                                    y: 0,
                                    width: i,
                                    height: o,
                                    destWidth: i * wx.getStorageSync("userSystemInfo").pixelRatio,
                                    destHeight: o * wx.getStorageSync("userSystemInfo").pixelRatio,
                                    quality: 1,
                                    fileType: "png",
                                    canvasId: "myCanvas",
                                    success: function(e) {
                                        t.setData({
                                            shareImage: e.tempFilePath,
                                            changeImageShow: !0
                                        }), setTimeout(function() {
                                            wx.hideLoading(), t.setData({
                                                hideCanvas: !0
                                            }), wx.getStorageSync("userSystemInfo").system.split(" ")[0];
                                        }, 1e3);
                                    },
                                    fail: function(e) {
                                        wx.hideLoading();
                                    }
                                });
                            });
                        }, 2e3);
                    },
                    fail: function(e) {
                        console.log(e, "缓存二维码图片失败");
                    }
                });
            },
            fail: function(e) {
                console.log(e, "缓存产品图片失败");
            }
        });
    },
    ontranspond: function() {
        var t = this;
        e.sendRequest({
            url: "/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=updateShareForwardingAmount&ID=" + t.data.cardid + "&SiteID=" + t.data.siteid,
            method: "GET",
            success: function(e) {
                t.isloading = !1, e.success;
            },
            fail: function(e) {
                t.isloading = !1;
            },
            hideLoading: !0
        });
    },
    saveImageToPhotosAlbum: function() {
        wx.showLoading({
            title: "保存中...",
            mask: !0
        });
        var e = this;
        wx.saveImageToPhotosAlbum({
            filePath: e.data.shareImage,
            success: function(t) {
                e.ontranspond(), wx.hideLoading(), wx.setStorageSync("canSaveImg", "true"), wx.showToast({
                    title: "已保存到相册",
                    icon: "success"
                });
            },
            fail: function(t) {
                (t.errMsg.indexOf("auth deny") > -1 || t.errMsg.indexOf("auth denied") > -1) && (e.setData({
                    canSave: !1
                }), wx.setStorageSync("canSaveImg", "false")), wx.hideLoading();
            }
        });
    },
    clickImage: function(e) {
        var t = e.target.dataset.src;
        wx.previewImage({
            current: t,
            urls: [ t ],
            fail: function() {
                console.log("fail");
            },
            complete: function() {
                console.info("点击图片了");
            }
        }), wx.hideLoading();
    },
    openSet: function() {
        wx.getStorageSync("userSystemInfo") && this.compareVersion("2.0.7", wx.getStorageSync("userSystemInfo").SDKVersion) > -1 && wx.openSetting({});
    },
    compareVersion: function(e, t) {
        e = e.split("."), t = t.split(".");
        for (var a = Math.max(e.length, t.length); e.length < a; ) e.push("0");
        for (;t.length < a; ) t.push("0");
        for (var n = 0; n < a; n++) {
            var s = parseInt(e[n]), i = parseInt(t[n]);
            if (s > i) return 1;
            if (s < i) return -1;
        }
        return 0;
    }
});