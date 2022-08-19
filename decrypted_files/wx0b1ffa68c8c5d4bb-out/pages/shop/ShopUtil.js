var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, e = (getApp(), {
    addProcuctToCart: function(t, e, o, n, i, s) {
        var l = {
            Action: "Add",
            ProductID: t,
            SkuID: e,
            Num: o || 1,
            type: n
        }, a = this, u = a.getApp(), c = a.getPage();
        u.sendRequest({
            url: "/index.php?c=Front/WxApp/ShopApi&a=addToCart",
            method: "POST",
            data: l,
            success: function(l) {
                l.success ? i && i(l) : 1 == l.needLogin ? u.login({
                    forcereg: function() {
                        a.showRegUI({
                            onRegOrBindSuccess: function() {
                                c.setData({
                                    showUserReg: !1
                                }), a.addProcuctToCart(t, e, o, n, i);
                            }
                        });
                    },
                    success: function() {
                        a.addProcuctToCart(t, e, o, n, i);
                    }
                }) : (setTimeout(function() {
                    wx.showToast({
                        title: "  " + l.msg,
                        image: "../../images/choose-type_21.png",
                        duration: 1e3
                    });
                }, 500), s && s(l));
            },
            fail: function(t) {
                u.showModal({
                    title: "提示",
                    content: t
                });
            }
        });
    },
    AddCollection: function(t, e) {
        var o = this, n = o.getApp(), i = o.getPage();
        n.sendRequest({
            url: "/index.php?c=Front/WxApp/ShopApi&a=saveCollPro&collProID=" + t,
            method: "GET",
            success: function(s) {
                s.success ? (wx.showToast({
                    title: "已收藏",
                    image: "../../images/collected.png",
                    duration: 1e3
                }), i.setData({
                    collection: !0
                }), e && e(s)) : 1 == s.needLogin ? n.login({
                    forcereg: function() {
                        o.showRegUI({
                            onRegOrBindSuccess: function() {
                                i.setData({
                                    showUserReg: !1
                                }), o.AddCollection(t);
                            }
                        });
                    }
                }) : n.showModal({
                    title: "提示",
                    content: "操作失败：" + s.msg
                });
            },
            fail: function(t) {},
            hideLoading: !0
        });
    },
    CancelCollection: function(t, e) {
        var o = this, n = o.getApp(), i = o.getPage();
        n.sendRequest({
            url: "/index.php?c=Front/WxApp/ShopApi&a=cancelCollPro&collProID=" + t,
            method: "GET",
            success: function(s) {
                s.success ? (wx.showToast({
                    title: "已取消",
                    image: "../../images/cancle.png",
                    duration: 1e3
                }), i.setData({
                    collection: !1
                }), e && e(s)) : 1 == s.needLogin ? n.login({
                    forcereg: function() {
                        o.showRegUI({
                            onRegOrBindSuccess: function() {
                                i.setData({
                                    showUserReg: !1
                                }), o.CancelCollection(t);
                            }
                        });
                    }
                }) : n.showModal({
                    title: "提示",
                    content: "操作失败：" + s.msg
                });
            },
            fail: function(t) {},
            hideLoading: !0
        });
    },
    getInputValue: function(t, e) {
        wx.createSelectorQuery().select(t).fields({
            properties: [ "value" ]
        }, function(t) {
            e(t);
        }).exec();
    },
    getCoupon: function(t, e) {
        var o = this, n = o.getApp(), i = o.getPage();
        n.getCoupon(t, function(t) {
            e && e(t);
        }, null, function() {
            o.showRegUI({
                onRegOrBindSuccess: function() {
                    i.setData({
                        showUserReg: !1
                    }), o.getCoupon(t, e);
                }
            });
        });
    },
    showRegUI: function(t) {
        var e = this, o = e.getPage(), n = e.getApp();
        o.setData({
            showUserReg: !0,
            hasMember: !1,
            VCodeCountDown: 0
        }), o.hideRegUI || (o.hideRegUI = function() {
            o.setData({
                showUserReg: !1
            }), t.onClose && t.onClose();
        }), o.getUserRegVCode || (o.getUserRegVCode = function(t) {
            e.getInputValue("#userreg-mobile", function(t) {
                if (!t.value || !/^1[0-9]{10}$/.test(t.value)) return n.showModal({
                    title: "提示",
                    content: "请输入正确的手机号"
                }), !1;
                o.setData({
                    VCodeCountDown: 45
                }), n.getVerifyCode(t.value, "", function() {
                    var t = setInterval(function() {
                        o.setData({
                            VCodeCountDown: o.data.VCodeCountDown - 1
                        }), o.data.VCodeCountDown <= 0 && clearInterval(t);
                    }, 1e3);
                }, function() {
                    o.setData({
                        VCodeCountDown: 0
                    });
                });
            });
        }), o.changeUserRegType || (o.changeUserRegType = function(t) {
            var e = t.currentTarget.dataset.hasmember;
            o.setData({
                hasMember: "1" == e
            });
        }), o.onRegFormSubmit = null, o.onRegFormSubmit || (o.onRegFormSubmit = function(o) {
            var i = o.detail.value;
            o.detail.value.mobile ? o.detail.value.vcode ? (i.userInfo = n.globalData.userInfo, 
            i.type = "1" == o.detail.value.hasmember ? "bind" : "reg", e.doRegOrBind(i, {
                success: t ? t.onRegOrBindSuccess : null
            })) : n.showModal({
                title: "提示",
                content: "请输入验证码"
            }) : n.showModal({
                title: "提示",
                content: "请输入正确的手机号"
            });
        });
    },
    doRegOrBind: function(e, o) {
        var n = this.getApp(), i = this.getPage(), s = null, l = null;
        "object" == (void 0 === o ? "undefined" : t(o)) ? (s = o.success, l = o.fail) : s = o, 
        n.sendRequest({
            url: "/index.php?c=Front/WxApp/ShopApi&a=regOrBindUser",
            method: "POST",
            data: e,
            success: function(t) {
                t.success ? (t.WebUserID && (n.globalData.WebUserID = t.WebUserID, wx.setStorageSync("invite", t.WebUserID)), 
                i.setData({
                    showUserReg: !1
                }), s ? s(t) : n.showModal({
                    title: "提示",
                    content: "操作成功"
                })) : l ? l(t) : n.showModal({
                    title: "提示",
                    content: "操作失败：" + t.msg
                });
            },
            fail: function(t) {
                n.showModal({
                    title: "提示",
                    content: "操作失败：" + t
                });
            }
        });
    },
    getApp: function(t) {
        function e() {
            return t.apply(this, arguments);
        }
        return e.toString = function() {
            return t.toString();
        }, e;
    }(function() {
        return getApp();
    }),
    getPage: function() {
        return getCurrentPages()[getCurrentPages().length - 1];
    },
    loadCouponList: function(t, e) {
        var o = this, n = getApp();
        n.sendRequest({
            url: "/index.php?c=Front/WxApp/ServiceApi&a=getCouponListWithUserNum",
            method: "GET",
            success: function(i) {
                if (i.success) {
                    if (!t) for (s = 0; s < i.list.length; s++) 0 == i.list[s].CanGet && (n.removeArrayItem(i.list, s), 
                    s--);
                    for (var s = 0; s < i.list.length; s++) {
                        if (i.list[s].beginTime = i.list[s].BeginTime.split(" ")[0].split("-").join(".") + " " + i.list[s].BeginTime.split(" ")[1].split(":")[0] + ":" + i.list[s].BeginTime.split(" ")[1].split(":")[1], 
                        0 == i.list[s].Type) if (i.list[s].Amount < 100 && i.list[s].Amount > 10) {
                            if (0 == i.list[s].Amount.split("")[1]) l = i.list[s].Amount.split("")[0]; else var l = i.list[s].Amount.split("").join(".");
                            i.list[s].amount = l;
                        } else 100 == i.list[s].Amount ? i.list[s].amount = i.list[s].Amount.split("")[0] + i.list[s].Amount.split("")[1] : i.list[s].Amount < 10 && i.list[s].Amount > 0 ? i.list[s].amount = "0." + i.list[s].Amount : i.list[s].amount = i.list[s].Amount; else i.list[s].amount = i.list[s].Amount;
                        if ("0" === i.list[s].EndTimeType) {
                            var a = i.list[s].TimeLimit.split(" ")[1].split(":")[0] + ":" + i.list[s].TimeLimit.split(" ")[1].split(":")[1];
                            i.list[s].timeLimit = i.list[s].TimeLimit.split(" ")[0].split("-").join(".") + " " + a;
                        } else i.list[s].timeLimit = i.list[s].TimeLimit;
                        var u = i.list[s].Available;
                        parseInt(i.list[s].UserLimit) > 0 && (u = parseInt(i.list[s].UserLimit) - parseInt(i.list[s].UserCount)) > i.list[s].Available && (u = i.list[s].Available), 
                        i.list[s].UserCanGetNum = u;
                    }
                    e && e(i);
                } else 1 == i.needLogin && n.login({
                    forcereg: function() {
                        o.showRegUI({
                            onRegOrBindSuccess: function() {
                                page.setData({
                                    showUserReg: !1
                                }), o.loadCouponList(t, e);
                            }
                        });
                    }
                });
            },
            fail: function(t) {
                console.log("getCouponListWithUserNum fail");
            }
        });
    }
});

module.exports = e;