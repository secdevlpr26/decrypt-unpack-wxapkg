var t = getApp(), a = (require("../../components/utils/imgutil.js"), require("../../common.js"));

Page({
    isloading: !1,
    bannerLoaded: !1,
    url: !1,
    firstload: !0,
    optionsData: {},
    onShareAppMessage: function() {
        return t.shareAppMessage({
            url: this.url,
            title: this.data.productInfo.Name
        });
    },
    onLoad: function(t) {
        this.optionsData = t;
    },
    loadData: function(e) {
        var n = this;
        n.optionsData = e, n.url = t.getPageUrl(n, e), t.registerGlobalFunctions(n), a.initCommonModules(), 
        this.setData({
            queryparams: e,
            hasrefunds: ""
        }), wx.getSystemInfo({
            success: function(t) {
                wx.setStorageSync("userSystemInfo", t);
            }
        }), wx.getLocation({
            type: "wgs84",
            success: function(t) {
                var a = t.latitude, e = t.longitude;
                n.setData({
                    lat: a,
                    lng: e
                }), n.loadOrder({
                    lat: a,
                    lng: e
                });
            },
            fail: function(t) {
                console.log(t, "获取位置失败"), n.loadOrder({
                    lat: "",
                    lng: ""
                });
            }
        });
    },
    onUnload: function() {
        clearTimeout(this.data.timer);
    },
    onShow: function() {
        this.loadData(this.optionsData);
    },
    onPageScroll: function() {},
    changeData: function(t) {
        this.loadOrder();
    },
    backtrack: function() {
        var t = getCurrentPages();
        if (t.length > 1) {
            var a = t[t.length - 2];
            a && a.changeData([]);
        }
    },
    data: {
        pintuan_group_id: "",
        currentTab: 0,
        baseUrl: t.globalData.siteBaseUrl,
        shows: !0,
        qrcodeBtn: !1,
        timer: ""
    },
    changePaymentWay: function(t) {
        this.data.balanceNumber - this.data.TotalMoeny < 0 || this.setData({
            paymentFlag: t.currentTarget.dataset.paymentflag
        });
    },
    closePaymentPlug: function() {
        var t = this;
        wx.showModal({
            title: "提示",
            content: "您确定要放弃支付吗？",
            success: function(a) {
                a.confirm ? t.setData({
                    paymentPlugShow: !1,
                    curOrderId: ""
                }) : a.cancel && console.log("用户点击取消");
            }
        });
    },
    showPaymentPlug: function(t) {
        this.getBalanceNumber();
        var a = t.currentTarget.dataset.orderid;
        this.setData({
            paymentPlugShow: !0,
            balanceflagNum: this.data.balanceNumber - this.data.TotalMoeny < 0,
            paymentFlag: this.data.balanceNumber - this.data.TotalMoeny > 0 ? "1" : "2",
            curOrderId: a
        });
    },
    getBalanceNumber: function() {
        var a = this;
        t.sendRequest({
            url: "/index.php?c=Front/WxApp/BaseApi&a=getBalance",
            method: "POST",
            success: function(t) {
                t.success && a.setData({
                    balanceNumber: t.balance
                });
            },
            fail: function(a) {
                t.showModal({
                    title: "提示",
                    content: "操作失败：" + a
                });
            }
        });
    },
    loadOrder: function(a) {
        var e = this;
        if (!e.isloading) {
            e.isloading = !0;
            var n = 0;
            e.data.queryparams.id && (n = e.data.queryparams.id), t.sendRequest({
                url: "/index.php?c=Front/WxApp/ShopApi&a=OrderDetail&ID=" + n + "&lat=" + a.lat + "&lng=" + a.lng,
                method: "GET",
                success: function(o) {
                    if (e.isloading = !1, o.success) {
                        0 == o.data.Status && (o.data.Status = "未付款"), (1 == o.data.Status && -1 == o.data.OrderType || 7 == o.data.Status && -1 == o.data.OrderType) && (o.data.Status = "等待卖家发货"), 
                        (1 == o.data.Status && 1 == o.data.groupp_Status || 7 == o.data.Status && 1 == o.data.groupp_Status) && (o.data.Status = "已付款，未成团"), 
                        (1 == o.data.Status && 2 == o.data.groupp_Status || 7 == o.data.Status && 2 == o.data.groupp_Status) && (o.data.Status = "已成团，等待卖家发货"), 
                        3 != o.data.Status && 8 != o.data.Status || (o.data.Status = "等待买家收货"), 2 == o.data.Status && (o.data.Status = "已完成"), 
                        6 == o.data.Status && (o.data.Status = "退款完成"), 9 == o.data.Status && (o.data.Status = "已付款，未取货"), 
                        4 == o.data.Status && (o.data.Status = "交易关闭"), 1 == o.data.Status && 23 == o.data.OrderType && (o.data.Status = "等待买家收货");
                        for (var i = 0; i < o.data.ProductList.length; i++) o.data.ProductList[i].RefundStatus ? o.data.ProductList[i].hasrefunds = !0 : o.data.ProductList[i].hasrefunds = !1;
                        if (e.setData({
                            orderinfo: o.data,
                            siteID: t.globalData.baseInfo.SiteID
                        }), o.data.pintuan_group_id && e.setData({
                            pintuan_group_id: o.data.pintuan_group_id
                        }), "2" === o.data.OrderInfo.GetProductType) {
                            var r = JSON.parse(o.data.OrderInfo.PickupInfo);
                            e.setData({
                                pickUserName: r.pickUserName,
                                pickUserPhone: r.pickUserPhone
                            }), "已完成" === o.data.Status ? clearTimeout(e.data.timer) : (a.again || e.getPickUpCode(n), 
                            e.setInterval());
                        }
                    } else console.log("getProductInfo fail：" + o.msg);
                },
                fail: function(t) {
                    e.isloading = !1, console.log("getProductInfo fail");
                },
                hideLoading: !!a.again
            });
        }
    },
    setInterval: function() {
        var t = this;
        t.setData({
            timer: setTimeout(function() {
                console.log("执行了"), wx.getLocation({
                    type: "wgs84",
                    success: function(a) {
                        var e = a.latitude, n = a.longitude;
                        t.loadOrder({
                            lat: e,
                            lng: n,
                            again: !0
                        });
                    },
                    fail: function(a) {
                        console.log(a, "获取位置失败"), clearTimeout(t.data.timer);
                    }
                });
            }, 5e3)
        });
    },
    getPickUpCode: function(a) {
        var e = this;
        t.sendRequest({
            url: "/index.php?c=Front/WxApp/ShopApi&a=getPickUpCode&ID=" + a,
            method: "GET",
            hideLoading: !0,
            success: function(t) {
                t.success ? (e.setData({
                    qrCodeUrl: t.qrCodeUrl,
                    pickupCode: t.code
                }), wx.downloadFile({
                    url: t.qrCodeUrl,
                    success: function(a) {
                        var n = wx.getStorageSync("userSystemInfo").screenWidth, o = n / 750 * 450, i = n / 750 * 500;
                        e.setData({
                            canvasWidth: parseInt(o),
                            canvasHeight: parseInt(i)
                        });
                        var r = n / 750 * 322, s = (o - r) / 2, d = a.tempFilePath, u = "取货号  " + t.code, c = wx.createCanvasContext("myCanvas");
                        c.setFillStyle("white"), c.fillRect(0, 0, o, i), c.drawImage(d, s, 20, r, r);
                        var l = .008 * n + s;
                        c.setFontSize(12), c.setFillStyle("#999"), c.setTextAlign("center"), c.fillText("出示二维码给商家扫一扫", o / 2, l + r);
                        var g = .08 * n + l;
                        c.setFontSize(15), c.setFillStyle("#000"), c.setTextAlign("center"), c.fillText(u, o / 2, g + r), 
                        c.draw(), setTimeout(function() {
                            wx.canvasToTempFilePath({
                                x: 0,
                                y: 0,
                                width: o,
                                height: i,
                                destWidth: 4 * o,
                                destHeight: 4 * i,
                                quality: 1,
                                fileType: "jpg",
                                canvasId: "myCanvas",
                                success: function(t) {
                                    e.setData({
                                        pickupImg: t.tempFilePath,
                                        qrcodeBtn: !0
                                    });
                                },
                                fail: function(t) {
                                    console.log("生成图片失败");
                                }
                            });
                        }, 1e3);
                    }
                })) : console.log(t);
            }
        });
    },
    goRefunds: function(t) {
        var a = t.currentTarget.dataset.orderid, e = t.currentTarget.dataset.pkey;
        wx.navigateTo({
            url: "refundreson?orderid=" + a + "&pkey=" + e
        });
    },
    goRefundsuc: function(t) {
        var a = t.currentTarget.dataset.orderid, e = t.currentTarget.dataset.pkey;
        wx.navigateTo({
            url: "refundsuc?orderid=" + a + "&pkey=" + e
        });
    },
    goRefundfail: function(t) {
        var a = t.currentTarget.dataset.orderid, e = t.currentTarget.dataset.pkey;
        wx.navigateTo({
            url: "refundfail?orderid=" + a + "&pkey=" + e
        });
    },
    goRefundsWuliu: function(t) {
        var a = t.currentTarget.dataset.pkey;
        wx.navigateTo({
            url: "refundswuliu?pkey=" + a
        });
    },
    ConfirmReceive: function(a) {
        var e = this, n = a.currentTarget.dataset.orderid, o = a.detail.formId;
        return wx.showModal({
            title: "提示",
            content: "确定收货吗？",
            success: function(a) {
                a.confirm ? t.sendRequest({
                    url: "/index.php?c=Front/WxApp/ShopApi&a=ConfirmReceiving&orderid=" + n + "&formid=" + o,
                    method: "GET",
                    success: function(t) {
                        e.isloading = !1, t.success ? e.loadOrder(!0) : console.log("getProductList fail：" + t.msg);
                    },
                    fail: function(t) {
                        e.isloading = !1, console.log("getProductList fail");
                    }
                }) : a.cancel && console.log("用户点击取消");
            }
        }), !1;
    },
    goKuaidiUrl: function(t) {
        var a = t.currentTarget.dataset.company, e = t.currentTarget.dataset.postid;
        wx.navigateTo({
            url: "kuaidi100?company=" + a + "&postid=" + e
        });
    },
    DelOrder: function(a) {
        var e = a.currentTarget.dataset.orderid;
        wx.showModal({
            title: "提示",
            content: "确定取消订单吗？",
            success: function(a) {
                a.confirm ? t.sendRequest({
                    url: "/index.php?c=Front/WxApp/ShopApi&a=cancelOrder&orderid=" + e,
                    method: "GET",
                    success: function(t) {
                        this.isloading = !1, t.success ? wx.reLaunch({
                            url: "userorder?status=0"
                        }) : console.log("getProductList fail：" + t.msg);
                    },
                    fail: function(t) {
                        this.isloading = !1, console.log("getProductList fail");
                    }
                }) : a.cancel && console.log("用户点击取消");
            }
        });
    },
    goPinTuanDetail: function(t) {
        t.currentTarget.dataset.group;
        var a = this;
        a.setData({
            buttonClicked: !0
        }), setTimeout(function() {
            a.setData({
                buttonClicked: !1
            });
        }, 500), wx.navigateTo({
            url: "../fightGroups/fightgroups?pintuan_group_id=" + a.data.pintuan_group_id
        });
    },
    Gopay: function(a) {
        var e = this.data.curOrderId, n = a.detail.formId, o = this, i = function(a) {
            var e = function() {
                o.loadOrder(!0), wx.navigateTo({
                    url: "orderdetail?id=" + a
                });
            };
            t.sendRequest({
                url: "/index.php?c=front/WxApp/ShopApi&a=payOrder",
                method: "POST",
                data: {
                    OrderID: a,
                    formid: n
                },
                success: function(a) {
                    a.success ? (o.loadOrder(!0), t.showModal({
                        title: "提示",
                        content: "支付成功",
                        confirm: e
                    })) : t.showModal({
                        title: "提示",
                        content: "支付失败：" + a.msg
                    });
                },
                fail: function(a) {
                    t.showModal({
                        title: "提示",
                        content: "支付失败：" + a
                    }), o.loadOrder(!0);
                }
            });
        };
        !function(a) {
            "1" === o.data.paymentFlag ? (o.setData({
                paymentPlugShow: !1
            }), i(a)) : "2" === o.data.paymentFlag && t.wxPay(a, {
                success: function() {
                    funcOnPaySuccess(a);
                },
                fail: function(t) {
                    wx.redirectTo({
                        url: "orderdetail?id=" + a
                    });
                }
            });
        }(e);
    },
    navbarTap: function(t) {
        this.setData({
            currentTab: t.currentTarget.dataset.idx
        });
    },
    call: function() {
        wx.makePhoneCall({
            phoneNumber: this.data.orderinfo.OrderInfo.PickupMobile
        });
    },
    navigation: function() {
        var t = this, a = Number(t.data.orderinfo.OrderInfo.Lantitude), e = Number(t.data.orderinfo.OrderInfo.Longtitude);
        a > 0 && e > 0 && wx.openLocation({
            name: t.data.orderinfo.OrderInfo.PickupStoreName,
            address: t.data.orderinfo.OrderInfo.PickupAddress,
            longitude: Number(e),
            latitude: Number(a)
        });
    },
    saveImageToPhotosAlbum: function() {
        wx.showLoading({
            title: "保存中...",
            mask: !0
        });
        var t = this;
        wx.saveImageToPhotosAlbum({
            filePath: t.data.pickupImg,
            success: function(t) {
                wx.hideLoading(), wx.showToast({
                    title: "已保存到相册",
                    icon: "success"
                });
            },
            fail: function(t) {
                (t.errMsg.indexOf("auth deny") > -1 || t.errMsg.indexOf("auth denied") > -1) && wx.openSetting({
                    success: function(t) {}
                }), wx.hideLoading();
            }
        });
    },
    magnify: function(t) {
        if (this.data.qrcodeBtn) {
            var a = t.target.dataset.src;
            wx.previewImage({
                current: a,
                urls: [ a ],
                fail: function() {
                    console.log("fail");
                },
                complete: function() {
                    console.info("点击图片了");
                }
            });
        }
    }
});