var e = getApp(), t = (require("../../components/utils/imgutil.js"), require("../../common.js"));

Page({
    isloading: !1,
    url: !1,
    data: {
        canvasShow: !0,
        baseUrl: e.globalData.siteBaseUrl,
        isSuccess: !1
    },
    onLoad: function(a) {
        var i = this;
        i.url = e.getPageUrl(i, a), e.registerGlobalFunctions(i), t.initCommonModules(), 
        this.setData({
            queryparams: a,
            scrviewFlag: !1,
            productId: a.productId,
            productName: a.name,
            price: a.price,
            productImg: a.productImg,
            SiteID: a.SiteID,
            nothingHeight: wx.getSystemInfoSync().windowHeight
        }), wx.getSystemInfo({
            success: function(e) {
                wx.setStorageSync("userSystemInfo", e);
            }
        }), this.getQrCode();
    },
    onShow: function() {},
    getQrCode: function() {
        var t = this;
        e.sendRequest({
            url: "/index.php?c=Front/WxApp/BaseApi&a=getProductQrCode&productid=" + t.data.productId,
            method: "GET",
            success: function(a) {
                if (a.success) {
                    wx.showLoading({
                        title: "加载中...",
                        mask: !0
                    }), t.setData({
                        canvasShow: !0
                    });
                    var i = e.globalData.siteBaseUrl + "/comdata/" + t.data.SiteID + "/product/" + t.data.productImg + "?norewrite=1";
                    t.setData({
                        prImg: i,
                        qrimg: a.data.product_qrcode
                    }), wx.downloadFile({
                        url: i,
                        success: function(i) {
                            t.setData({
                                Imgpath: i.tempFilePath
                            }), wx.downloadFile({
                                url: a.data.product_qrcode,
                                success: function(a) {
                                    t.setData({
                                        qrcode_temp: a.tempFilePath
                                    });
                                    var i = t.data.Imgpath, o = t.data.qrcode_temp, s = t.data.price, n = wx.getStorageSync("userSystemInfo").screenWidth, r = Math.round(13 / 375 * n), l = n / 750 * 630, c = n / 750 * 1024;
                                    t.setData({
                                        canvasWidth: parseInt(l),
                                        canvasHeight: parseInt(c)
                                    });
                                    var d = "normal bold " + r + "px sans-serif", u = t.data.productName, g = e.globalData.appTitle, h = wx.createCanvasContext("myCanvas");
                                    h.setFillStyle("white"), h.fillRect(0, 0, l, c), h.drawImage(i, 0, 0, l, l);
                                    var f = .72 * n, m = .064 * n + l, w = 13 / 375 * n, p = .064 * n, x = (h.measureText("一").width, 
                                    0), v = 0, I = 1, S = f - h.measureText("一").width;
                                    h.setFontSize(14), h.setFillStyle("#333");
                                    for (var T = 0; T < u.length; T++) {
                                        if (x += h.measureText(u[T]).width, I > 1 && (f = S), x > f) {
                                            if (h.fillText(u.substring(v, T), w, m), I > 1) {
                                                console.log(u.substring(v, T));
                                                var y = w + h.measureText(u.substring(v, T)).width;
                                                h.fillText("…", y, m);
                                                break;
                                            }
                                            m += p, x = h.measureText("一").width, v = T, I++;
                                        }
                                        T == u.length - 1 && h.fillText(u.substring(v, T + 1), w, m);
                                    }
                                    h.setFontSize(14), h.setFillStyle("#333"), h.setTextAlign("left"), h.font = d, h.fillText("￥" + s, w, m + p), 
                                    h.beginPath(), h.setStrokeStyle("#ddd");
                                    var F = m + p + .032 * n;
                                    h.setLineWidth(.5), h.moveTo(w, F), h.lineTo(l - w, F), h.stroke();
                                    var b = F + .128 * n, D = Math.round(.04 * n);
                                    h.setFontSize(D), h.setFillStyle("#333333"), h.fillText(g, w, b);
                                    var L = b + 25 / 375 * n, P = Math.round(.032 * n);
                                    h.setFontSize(P), h.setFillStyle("#999"), h.fillText("长按识别二维码", w, L);
                                    var q = 205 / 375 * n, C = F + 16 / 375 * n, k = .208 * n;
                                    h.drawImage(o, q, C, k, k), h.draw(!1, function() {
                                        wx.canvasToTempFilePath({
                                            x: 0,
                                            y: 0,
                                            width: l,
                                            height: c,
                                            destWidth: 4 * l,
                                            destHeight: 4 * c,
                                            quality: 1,
                                            fileType: "png",
                                            canvasId: "myCanvas",
                                            success: function(e) {
                                                t.setData({
                                                    shareImage: e.tempFilePath
                                                }), setTimeout(function() {
                                                    wx.hideLoading();
                                                }, 1e3);
                                            },
                                            fail: function(e) {
                                                wx.hideLoading();
                                            }
                                        });
                                    }), setTimeout(function() {
                                        wx.hideLoading();
                                    }, 800);
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
                } else t.failImage(a);
            },
            fail: function(e) {},
            hideLoading: !0
        });
    },
    failImage: function(e) {
        this.setData({
            canvasShow: !1
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
            success: function(e) {
                wx.hideLoading(), wx.showToast({
                    title: "已保存到相册",
                    icon: "success"
                });
            },
            fail: function(e) {
                console.log(e, 456), (e.errMsg.indexOf("auth deny") > -1 || e.errMsg.indexOf("auth denied") > -1) && wx.openSetting({
                    success: function(e) {}
                }), wx.hideLoading();
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
    bit: function() {
        console.log(123);
    }
});