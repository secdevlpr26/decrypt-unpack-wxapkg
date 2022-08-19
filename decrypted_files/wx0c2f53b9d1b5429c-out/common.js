var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, t = getApp(), a = null, o = {
    registerGlobalVar: function(e, t) {
        this[e] = t;
    },
    loadPageModules: function(e) {
        var a = this;
        e.refresh && a.clearInterval();
        var o = getCurrentPages()[getCurrentPages().length - 1], n = "HomeIndex";
        e.page && (n = e.page);
        var i = o.route.match(/(CustomPage_\d+)_tabbar/i);
        i && i.length > 1 && (n = i[1]);
        var r = decodeURIComponent(e.scene || ""), s = r.match(/sharepage=(CustomPage_\d+)/i);
        s && s.length > 1 && (n = s[1]), console.log("page:" + n, "scene:" + r), this.sendRequest({
            url: "/index.php?c=front/WxApp/PageApi&a=getPageModules&publish=1&sortcol=ShowOrder&page=" + n + "&justCache=" + a.getConfig().ModuleDataJustFromCache,
            method: "POST",
            success: function(e) {
                if (e.success) try {
                    e.modules.forEach(function(e) {
                        e.CouponList && e.CouponList.forEach(function(e) {
                            if (e.beginTime = e.BeginTime.split(" ")[0].split("-").join("."), 0 == e.Type ? e.Amount = (e.Amount / 10).toString().replace(/([\.[1-9])0+$/, "$1").replace(/\.$/, "") : e.Amount = e.Amount.replace(/([\.[1-9])0+$/, "$1").replace(/\.$/, ""), 
                            "0" === e.EndTimeType) {
                                var t = e.TimeLimit.split(" ")[1].split(":")[0] + ":" + e.TimeLimit.split(" ")[1].split(":")[1];
                                e.timeLimit = e.TimeLimit.split(" ")[0].split("-").join(".") + " " + t;
                            } else e.timeLimit = e.TimeLimit;
                        }), "ModuleServiceList" === e.ModuleType && e.ProList && e.ProList.length > 0 && e.ProList.forEach(function(e) {
                            for (var a = e.ImgUrl.split("/"), o = 0; o < a.length; o++) /product/.test(a[o]) && (e.ImgUrl = "/comdata/" + t.globalData.siteId + "/product/" + a[a.length - 1]);
                        });
                    }), o.setData({
                        modules: e.modules
                    }), e.pageTitle && !/homeindex/i.test(n) && (wx.setNavigationBarTitle({
                        title: e.pageTitle
                    }), o.setData({
                        pageTitle: e.pageTitle,
                        url: o.route + (o.options.id ? "?id=" + o.options.id : "")
                    })), a.setFloatLayerInfo(e.appinfo.FloatLayerSetting), a.setCopyrightInfo(e.appinfo.CopyrightSetting), 
                    a.CACHEKEY = e.cachekey, a.getPurchaseLimit();
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    var i = e.toString();
                    wx.showModal({
                        title: "提示",
                        showCancel: !1,
                        content: i
                    });
                } else console.log("getPageModules fail：" + e.msg);
            },
            options: e,
            fail: function(e) {
                console.log("getPageModules fail");
            }
        });
    },
    clearInterval: function(e) {
        function t() {
            return e.apply(this, arguments);
        }
        return t.toString = function() {
            return e.toString();
        }, t;
    }(function() {
        clearInterval(a);
    }),
    getPurchaseLimit: function() {
        var e = this, t = getCurrentPages()[getCurrentPages().length - 1];
        a = setInterval(function() {
            var o = t.data.modules;
            try {
                for (var n = 0; n < o.length; ++n) if ("ModuleSecKill" === o[n].ModuleType) {
                    var i = o[n].ActivityInfo, r = i.remainingTime;
                    0 == --r && (e.loadPageModules(!0), clearInterval(a));
                    var s = e.forMatterTime(r), l = s.hours, u = s.minutes, c = s.seconds;
                    i.remainingTime = r, i.remainingTimeHours = l, i.remainingTimeMinutes = u, i.remainingTimeSeconds = c, 
                    o[n].ActivityInfo = i, e.setModuleData(o[n].ModuleID, o[n]);
                }
            } catch (e) {}
        }, 1e3);
        setInterval(function() {
            var o = t.data.modules;
            try {
                for (var n = 0; n < o.length; ++n) if ("ModuleSecKill" === o[n].ModuleType) {
                    var i = o[n].ActivityInfo, r = i.morningInterval;
                    0 == --r && (e.loadPageModules(!0), clearInterval(a)), i.morningInterval = r, o[n].ActivityInfo = i, 
                    e.setModuleData(o[n].ModuleID, o[n]);
                }
            } catch (e) {}
        }, 1e3);
    },
    registerGlobalFunc: function() {
        var e = getCurrentPages()[getCurrentPages().length - 1], t = this;
        e.setData({
            globaldata: {
                appGlobalData: getApp().globalData,
                sysInfo: wx.getSystemInfoSync()
            }
        }), e.shareAppMessage = function(e) {
            t.shareAppMessage(e);
        }, e.getPageUrl = function(e, a) {
            t.getPageUrl(e, a);
        }, e.navTo = function(a) {
            var o = a.currentTarget.dataset.linktype, n = a.currentTarget.dataset.linkid, i = a.currentTarget.dataset.linknorepeat;
            if ("string" == typeof i && "1" == i) {
                if (1 == e.data.navGoIng) return;
                e.data.navGoIng = !0, setTimeout(function() {
                    e.data.navGoIng = !1;
                }, 500);
            }
            var r = [], s = a.currentTarget.dataset.linkdata;
            if ("string" == typeof s) try {
                if (s = JSON.parse(s)) for (var l in s) {
                    var u = s[l];
                    "string" != typeof u && "number" != typeof u || (r[l] = u);
                }
            } catch (e) {}
            t.navTo(o, n, r);
        }, e.M_doSearch = function(a) {
            t.doSearch(a, e);
        }, e.M_onSearchInput = function(e) {}, e.M_onSearchInputFocus = function(e) {
            var a = e.currentTarget.dataset.moduleid;
            t.setModuleData(a, {
                HidePlaceHolder: 1
            });
        }, e.M_onSearchInputBlur = function(a) {
            t.onSearchInput(a, e);
        }, e.M_slideImgLoad = function(a) {
            t.slideImgLoad(a, e);
        }, e.M_getCoupon = function(a) {
            t.getCoupon(a, e);
        }, e.onChooseImg = function(a) {
            t.onChooseImg(a, e);
        }, e.onCustomFormSubmit = function(a) {
            t.onCustomFormSubmit(a, e);
        }, e.onCustomFormSelectChange = function(a) {
            t.onCustomFormSelectChange(a, e);
        }, e.onCustomFormDateChange = function(a) {
            t.onCustomFormDateChange(a, e);
        }, e.onCustomFormTimeChange = function(a) {
            t.onCustomFormTimeChange(a, e);
        }, e.onCustomFormDateTap = function(a) {
            t.onCustomFormDateTap(a, e);
        }, e.onCustomFormDateTimeChange = function(a) {
            t.onCustomFormDateTimeChange(a, e);
        }, e.onCustomFormDateTimeClear = function(a) {
            t.onCustomFormDateTimeClear(a, e);
        }, e.onCustomRegionChange = function(a) {
            t.onCustomRegionChange(a, e);
        }, e.onCustomFormTextInputChange = function(a) {
            t.onCustomFormTextInputChange(a, e);
        }, e.onCustomFormCheckboxChange = function(a) {
            t.onCustomFormCheckboxChange(a, e);
        }, e.onCustomFormRadioChange = function(a) {
            t.onCustomFormRadioChange(a, e);
        }, e.onClickMap = function(e) {
            return t.getLocation(e.currentTarget.dataset.lat, e.currentTarget.dataset.lng, e.currentTarget.dataset.title, e.currentTarget.dataset.addr), 
            !1;
        }, e.ImgchangeVideo = function(e) {
            t.setModuleData(e.currentTarget.dataset.moduleid, {
                WxappShow: !1
            });
        }, e.appPhoneCall = getApp().phoneCall, this.setCopyrightInfo();
    },
    initCommonModules: function() {
        this.setCopyrightInfo(), this.setFloatLayerInfo();
    },
    setCopyrightInfo: function(e) {
        var t = this;
        if (!e) {
            var a = getApp();
            if (!(a.globalData && Object.keys(a.globalData.baseInfo).length > 0)) return void t.sendRequest({
                url: "/index.php?c=Front/WxApp/JsonApi&a=getBaseInfo",
                method: "POST",
                hideLoading: !0,
                success: function(e) {
                    e.success && t.setCopyrightInfoToPage(e.info.CopyrightSetting);
                }
            });
            e = a.globalData.baseInfo.CopyrightSetting;
        }
        t.setCopyrightInfoToPage(e);
    },
    setCopyrightInfoToPage: function(e) {
        var t = {};
        try {
            t = JSON.parse(e) || {};
        } catch (e) {}
        var a = "", o = "";
        1 == t.Enable && (o += "container-copyright", 1 == t.ShowIcon ? 1 == t.DisplayType ? (a += " leftRight", 
        o += " container-copyright-leftRight") : (a += " topBottom", o += " container-copyright-topBottom") : (a += " noIcon", 
        o += " container-copyright-noIcon")), t.copyrightClassName = a, t.contentClassName = o, 
        this.getCurPage().setData({
            copyrightInfo: t
        });
    },
    setFloatLayerInfo: function(e, t) {
        u = this;
        if (!e) {
            var a = getApp();
            if (a.globalData && a.globalData.baseInfo && (e = (t = a.globalData.baseInfo).FloatLayerSetting), 
            !e) return void u.sendRequest({
                url: "/index.php?c=Front/WxApp/JsonApi&a=getBaseInfo",
                method: "POST",
                hideLoading: !0,
                success: function(e) {
                    e.success && u.setFloatLayerInfo(e.info.FloatLayerSetting || {}, e.info);
                }
            });
        }
        var o = {};
        try {
            o = JSON.parse(e) || {};
        } catch (e) {}
        o = this.adjustFloatLayer(o);
        var n = this.getCurPage(), i = this.getFloatLayerCurPageName(), r = !1;
        /productdetail/i.test(i) && /(meirong)|(peixun)|(shop)|(yunzhi)/i.test(t.Industry) && (r = !0);
        var s = 0;
        1 == o.EnableCustomService && s++, 1 == o.EnableTel && 1 == o.EnableNormalBtnShow && s++, 
        n.setData({
            floatLayerInfo: o,
            hasBottomBar: r,
            btnCount: s
        });
        var l = !1;
        if (n.setData({
            scrollTopCurrent: 0,
            scrollBottomNum: 0
        }), 1 == o.EnableNormalBtnShow) {
            n.onPageScroll = function(e) {
                l = !(e.scrollTop - this.data.scrollTopCurrent > 0), this.data.scrollBottomNum && this.data.scrollBottomNum < e.scrollTop && (l = !1), 
                e.scrollTop < 50 && (l = !1), this.setData({
                    showTopFlag: l,
                    scrollTopCurrent: e.scrollTop
                });
            }, n.scrollToTop = function(e) {
                wx.pageScrollTo({
                    scrollTop: 0,
                    duration: 500
                });
            }, n.onReachBottom = function(e) {
                this.setData({
                    showTopFlag: !1,
                    scrollBottomNum: this.data.scrollTopCurrent - 10
                });
            };
            var u = this;
            n.goToHomeIndex = function() {
                u.navTo("HomeIndex");
            };
        }
    },
    adjustFloatLayer: function(e) {
        var a = this.getCurPage(), o = (e = e || a.data.floatLayerInfo || {}).ShowPages || "", n = this.getFloatLayerCurPageName(), i = new RegExp(n, "i").test(o);
        e.Enable = 1, e.EnableCustomService = 1 == e.EnableCustomService && i ? 1 : 0;
        var r = /(homeindex)|(productdetail)|(servicedetail)|(custompage)/i.test(n);
        e.EnableNormalBtnShow = r ? 1 : 0;
        var s = 1 == this.getCurPage().options.fromShare, l = decodeURIComponent(a.options.scene || "").match(/sharepage=(CustomPage_\d+)/i);
        l && l.length > 1 && (s = !0);
        var u = s && /(productdetail)|(servicedetail)|(custompage)/i.test(n) && /(meirong)|(peixun)|(meifa)|(jianshen)|(jianzhan)/i.test(t.globalData.baseInfo.Industry);
        return u = u || s && /custompage/i.test(n), e.EnableGoToHomeIndex = u ? 1 : 0, e;
    },
    getFloatLayerCurPageName: function() {
        var e = this.getCurPage().route, t = null;
        return /(pages\/shop\/index)|(pages\/index)|(pages\/company\/index)/i.test(e) ? t = "homeindex" : /mycenter/i.test(e) ? t = "usercenter" : /orderdetail/i.test(e) ? t = "orderdetail" : /productdetail/i.test(e) ? t = "productdetail" : /reserve-by-person/i.test(e) ? t = "servicedetail" : /reserve-by-product/i.test(e) ? t = "servicedetail" : /custompage/i.test(e) && (t = /tabbar/i.test(e) ? e.replace(/.*(custompage_\d+).*/, "$1") : "custompage_" + getCurrentPages()[getCurrentPages().length - 1].data.optionsData.id), 
        t;
    },
    setPopupFromShare: function() {
        var e = this, t = this.getCurPage();
        1 == t.options.fromShare && (t.goToHomeIndex = function() {
            e.navTo("HomeIndex");
        }, t.setData({
            showPopupFromShare: 1
        }));
    },
    getCurPage: function() {
        return getCurrentPages()[getCurrentPages().length - 1];
    },
    CONFIG: {},
    CACHEKEY: "",
    getConfig: function() {
        return this.CONFIG.SITEID || (this.CONFIG = function() {
            var e = wx.getExtConfigSync();
            return e.ext ? e.ext : require("/config.js");
        }()), this.CONFIG;
    },
    URLCONFIG: null,
    getUrlConfig: function() {
        return this.URLCONFIG || (this.URLCONFIG = function() {
            try {
                return require("/urlconfig.js");
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                return {};
            }
        }()), this.URLCONFIG;
    },
    getUrlByLinkType: function(t, a, o) {
        var n = {};
        n.HomeIndex = "/pages/index", n.UserCenter = "/pages/ucenter/index", n.ShopCart = "/pages/shop/shopcart", 
        n.AboutUs = "/pages/company/aboutus", n.ContactUs = "/pages/company/contact", n.ProductList = "/pages/productlist", 
        n.ProductClass = "/pages/productlist?classid=$id", n.ProductDetail = "/pages/productdetail?id=$id", 
        n.NewsList = "/pages/newslist", n.NewsClass = "/pages/newslist?classid=$id", n.NewsDetail = "/pages/newsdetail?id=$id", 
        n.CaseList = "/pages/company/caselist", n.CaseClass = "/pages/company/caselist?classid=$id", 
        n.CaseDetail = "/pages/company/casedetail?id=$id";
        var i = this.getUrlConfig();
        for (var r in i) "object" == e(i[r]) ? n[r] = i[r].url : n[r] = i[r];
        var s = n[t];
        if (s && (s = s.replace("$id", a), "object" == (void 0 === o ? "undefined" : e(o)) && o)) for (var r in o) s.indexOf("?") > -1 ? s += "&" + r + "=" + encodeURI(o[r]) : s += "?" + r + "=" + encodeURI(o[r]);
        return s;
    },
    navTo: function(e, t, a) {
        if ("OneKeyPhoneCall" != e) if ("OneKeyNav" != e) {
            "miniprogram" === e ? wx.navigateToMiniProgram({
                appId: a.appid,
                path: a.path,
                extraData: {},
                envVersion: "develop"
            }) : "h5" === e && wx.navigateTo({
                url: "/pages/webview/webview?path=" + a.h5
            });
            var o = this.getUrlByLinkType(e, t, a);
            o && ("HomeIndex" == e ? wx.reLaunch({
                url: o
            }) : this.navToUrl(o));
        } else getApp().getLocation(); else getApp().phoneCall();
    },
    navToUrl: function(e) {
        if (e.indexOf("?") > -1) for (var t = {}, a = e.split("?")[1].split("&"), o = 0; o < a.length; o++) {
            var n = a[o].split("=");
            t[this.trim(n[0])] = this.trim(n[1]);
        }
        wx.navigateTo({
            url: e
        });
    },
    shareAppMessage: function(t) {
        var a = "pages/index", o = getApp().globalData.appTitle, n = getApp().globalData.appDescription;
        return "object" == (void 0 === t ? "undefined" : e(t)) ? (t.url && (a = t.url), 
        t.title && (o = t.title), t.desc && (n = t.desc)) : "string" == typeof t && t && (a = t), 
        {
            title: o,
            desc: n,
            path: a
        };
    },
    getPageUrl: function(e, t) {
        var a = getCurrentPages()[getCurrentPages().length - 1].__route__, o = [];
        for (var n in t) o.push(n + "=" + t[n]);
        return o.length > 0 && (a += "?" + o.join("&")), e.setData({
            pageurl: a
        }), a;
    },
    onChooseImg: function(e, a) {
        var o = this, n = e.currentTarget.dataset.col;
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(i) {
                var r = i.tempFilePaths;
                t.uploadRequest({
                    url: "/index.php?c=Front/WxApp/ServiceApi&a=uploadImg",
                    filePath: r[0],
                    name: "makeAnAppointment",
                    success: function(t) {
                        var i = JSON.parse(t);
                        i.tempFilePaths = r[0], i.col = n, o.setCustomFormPageData(e, a, i);
                    },
                    fail: function(e) {},
                    complete: function(e) {
                        wx.hideLoading();
                    }
                });
            }
        });
    },
    onCustomFormSubmit: function(e, a) {
        this.validateForm(e.detail.value) && t.sendRequest({
            url: "/index.php?c=Front/WxApp/JsonApi&a=saveCustomFormData",
            method: "POST",
            data: e.detail.value,
            success: function(e) {
                if (e.success) {
                    t.showModal({
                        title: "提示",
                        content: "提交成功"
                    });
                    var o = a.data.globaldata || {};
                    o.customformvalues = {}, a.setData({
                        globaldata: o
                    });
                } else t.showModal({
                    title: "提示",
                    content: "提交失败：" + e.msg
                });
            },
            fail: function(e) {
                t.showModal({
                    title: "提示",
                    content: "提交失败：" + e
                });
            }
        });
    },
    validateForm: function(e) {
        var a = {};
        for (var o in e) if (o.indexOf("-fieldID") > -1) {
            var n = e[o];
            a[n] = {
                fieldName: e[n + "-fieldName"],
                fieldType: e[n + "-fieldType"],
                checkType: e[n + "-fieldCheckType"],
                require: "1" == e[n + "-fieldRequire"]
            };
        }
        var i = {
            2: "^[0-9]+$",
            3: "^1\\d{10}$",
            4: "^\\d{3,4}\\-\\d{6,9}$",
            5: "^((1\\d{10})|(\\d{3,4}\\-\\d{6,9}))$",
            6: "^[a-z\\d]+([\\-_\\.][a-z\\d]+)*@([a-z\\d]+[\\-\\.]*)+\\.[a-z\\d]{2,5}$",
            7: "^[1-9]\\d{5}(18|19|([23]\\d))\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$",
            8: "^\\d{4}\\-\\d{1,2}\\-\\d{1,2}\\s+\\d{1,2}:\\d{1,2}$"
        };
        for (var r in e) if (a[r]) {
            if ("string" == typeof e[r] && (e[r] = e[r].replace(/(^\s*)|(\s*$)/g, "")), a[r] && a[r].require) {
                if (!e[r]) return t.showModal({
                    title: "提示",
                    content: "请输入" + a[r].fieldName
                }), !1;
                if (e[r] instanceof Array && 0 == e[r].length) return t.showModal({
                    title: "提示",
                    content: "请输入" + a[r].fieldName
                }), !1;
            }
            var s = a[r].checkType;
            if ("8" == a[r].fieldType && (s = "8"), i[s]) {
                var l = new RegExp(i[s], "i");
                if (e[r] && !l.test(e[r])) return t.showModal({
                    title: "提示",
                    content: a[r].fieldName + "格式不正确"
                }), !1;
            }
        }
        return !0;
    },
    onCustomFormTextInputChange: function(e, t) {
        var a = e.detail.value;
        this.setCustomFormPageData(e, t, a);
    },
    onCustomFormRadioChange: function(e, t) {
        var a = e.detail.value;
        this.setCustomFormPageData(e, t, a);
    },
    onCustomFormSelectChange: function(e, t) {
        var a = e.currentTarget.dataset.array[e.detail.value];
        this.setCustomFormPageData(e, t, a);
    },
    onCustomFormCheckboxChange: function(e, t) {
        var a = e.detail.value;
        this.setCustomFormPageData(e, t, a);
    },
    onCustomFormDateChange: function(e, t) {
        var a = e.detail.value;
        this.setCustomFormPageData(e, t, a);
    },
    onCustomFormTimeChange: function(e, t) {
        var a = e.detail.value;
        this.setCustomFormPageData(e, t, a);
    },
    onCustomRegionChange: function(e, t) {
        var a = new Array();
        for (var o in e.detail.value) a.push(e.detail.value[o]);
        var n = a.join(",");
        this.setCustomFormPageData(e, t, n);
    },
    setCustomFormPageData: function(e, t, a) {
        var o = e.currentTarget.dataset.col, n = t.data.globaldata || {}, i = n.customformvalues || {};
        i[o + "val"] = a.path ? a.path : a, i[o + "valimg"] = a.tempFilePaths ? a.tempFilePaths : "", 
        n.customformvalues = i, t.setData({
            globaldata: n
        });
    },
    doSearch: function(e, t) {
        var a = this.trim(e.detail.value);
        if (a) {
            var o = getApp().globalData.baseInfo.Industry, n = "";
            n = (n = "meifa" == o || "peixun" == o || "meirong" == o || "jianshen" == o ? this.getUrlByLinkType("ServiceList", 0) : this.getUrlByLinkType("ProductList", 0)).indexOf("?") > -1 ? n + "&keyword=" + a : n + "?keyword=" + a, 
            wx.navigateTo({
                url: n
            });
        }
    },
    onSearchInput: function(e, t) {
        var a = this.trim(e.detail.value), o = e.currentTarget.dataset.moduleid;
        a ? this.setModuleData(o, {
            HidePlaceHolder: 1
        }) : this.setModuleData(o, {
            HidePlaceHolder: 0
        });
    },
    getCoupon: function(e, t) {
        var a = this, o = t.data.globaldata || {};
        if (o.gettingCoupon) console.log("不能重复点击领取按钮"); else {
            o.gettingCoupon = !0, t.setData({
                globaldata: o
            }), setTimeout(function() {
                o.gettingCoupon = !1, t.setData({
                    globaldata: o
                });
            }, 2e3);
            var n = function() {
                a.loadModuleData(e.currentTarget.dataset.moduleid), wx.showToast({
                    title: "领取成功",
                    icon: "success",
                    duration: 3e3
                });
            }, i = function(e, t) {
                getApp().getCoupon(e, t);
            };
            getApp().getCoupon(e.currentTarget.dataset.couponid, n, null, function() {
                a.ShopUtil.showRegUI({
                    onRegOrBindSuccess: function() {
                        t.setData({
                            showUserReg: !1
                        }), i(couponid, n);
                    }
                });
            });
        }
    },
    loadModuleData: function(e) {
        var t = this;
        t.sendRequest({
            hideLoading: !0,
            url: "/index.php?c=Front/WxApp/PageApi&a=getModuleData&moduleId=" + e + "&cachekey=" + t.CACHEKEY + "&justCache=" + t.getConfig().ModuleDataJustFromCache,
            method: "GET",
            success: function(a) {
                if (a.success) {
                    a.data.CouponList && a.data.CouponList.length > 0 && a.data.CouponList.forEach(function(e) {
                        if (e.beginTime = e.BeginTime.split(" ")[0].split("-").join("."), 0 == e.Type ? e.Amount = (e.Amount / 10).toString().replace(/([\.[1-9])0+$/, "$1").replace(/\.$/, "") : e.Amount = e.Amount.replace(/([\.[1-9])0+$/, "$1").replace(/\.$/, ""), 
                        "0" === e.EndTimeType) {
                            var t = e.TimeLimit.split(" ")[1].split(":")[0] + ":" + e.TimeLimit.split(" ")[1].split(":")[1];
                            e.timeLimit = e.TimeLimit.split(" ")[0].split("-").join(".") + " " + t;
                        } else e.timeLimit = e.TimeLimit;
                    });
                    for (var o = t.getCurPage(), n = o.data.modules, i = 0; i < n.length; i++) parseInt(n[i].ModuleID) == parseInt(e) && (n[i] = a.data);
                    o.setData({
                        modules: n
                    });
                }
            },
            fail: function(e) {
                console.log("loadModuleData fail");
            }
        });
    },
    setModuleData: function(e, t) {
        for (var a = this.getCurPage(), o = a.data.modules, n = 0; n < o.length; n++) if (parseInt(o[n].ModuleID) == parseInt(e)) for (var i in t) o[n][i] = t[i];
        a.setData({
            modules: o
        });
    },
    slideImgLoad: function(e, t) {
        var a = this.getImageSize(e), o = e.currentTarget.dataset.moduleid;
        t.data["slide" + o] || (t.data.globaldata.slideheight || (t.data.globaldata.slideheight = {}), 
        t.data.globaldata.slideheight[o] = a.imageHeight, t.data["slide" + o] = !0);
    },
    getImageSize: function(e) {
        var t = {}, a = e.detail.width, o = e.detail.height, n = o / a;
        return wx.getSystemInfo({
            success: function(e) {
                var i = e.windowWidth, r = e.windowHeight;
                n < r / i ? (t.imageWidth = i, t.imageHeight = i * o / a) : (t.imageHeight = r, 
                t.imageWidth = r * a / o);
            }
        }), t;
    },
    trim: function(e) {
        return e.replace(/(^\s*)|(\s*$)/g, "");
    },
    showToast: function(e) {
        wx.showToast({
            title: e.title,
            icon: e.icon,
            duration: e.duration || 1500,
            success: function(t) {
                "function" == typeof e.success && e.success(t);
            },
            fail: function(t) {
                "function" == typeof e.fail && e.fail(t);
            },
            complete: function(t) {
                "function" == typeof e.complete && e.complete(t);
            }
        });
    },
    hideToast: function() {
        wx.hideToast();
    },
    showModal: function(e) {
        wx.showModal({
            title: e.title || "提示",
            content: e.content,
            showCancel: e.showCancel || !1,
            cancelText: e.cancelText || "取消",
            cancelColor: e.cancelColor || "#000000",
            confirmText: e.confirmText || "确定",
            confirmColor: e.confirmColor || "#3CC51F",
            success: function(t) {
                t.confirm ? "function" == typeof e.confirm && e.confirm(t) : "function" == typeof e.cancel && e.cancel(t);
            },
            fail: function(t) {
                "function" == typeof e.fail && e.fail(t);
            },
            complete: function(t) {
                "function" == typeof e.complete && e.complete(t);
            }
        });
    },
    forMatterTime: function(e) {
        var t = parseInt(e / 60 / 60 % 24, 10), a = parseInt(e / 60 % 60, 10), o = parseInt(e % 60, 10);
        return t = this.checkTime(t), a = this.checkTime(a), o = this.checkTime(o), {
            hours: t,
            minutes: a,
            seconds: o
        };
    },
    checkTime: function(e) {
        return e < 10 && (e = "0" + e), e;
    },
    getLocationByAddress: function(e, t, a, o) {
        var n = this, i = {
            url: "/index.php?c=Front/WxApp/Amap&a=geo",
            data: {
                addr: o
            },
            success: function(i) {
                i.success ? wx.openLocation({
                    name: a,
                    address: o,
                    longitude: Number(t),
                    latitude: Number(e),
                    scale: 15
                }) : n.showModal({
                    content: "" + i.msg
                });
            }
        };
        n.sendRequest(i);
    },
    getLocation: function(e, t, a, o) {
        e = Number(e), t = Number(t), e > 0 && t > 0 ? wx.openLocation({
            name: a,
            address: o,
            longitude: t,
            latitude: e
        }) : this.getLocationByAddress(e, t, a, o);
    },
    modifyPostParam: function(e) {
        var t, a, o, n, i, r, s = "";
        for (t in e) if ((a = e[t]) instanceof Array) for (r = 0; r < a.length; ++r) n = a[r], 
        (i = {})[t + "[" + r + "]"] = n, s += this.modifyPostParam(i) + "&"; else if (a instanceof Object) for (o in a) n = a[o], 
        (i = {})[t + "[" + o + "]"] = n, s += this.modifyPostParam(i) + "&"; else void 0 !== a && null !== a && (s += encodeURIComponent(t) + "=" + encodeURIComponent(a) + "&");
        return s.length ? s.substr(0, s.length - 1) : s;
    },
    sendRequest: function(e, a, o) {
        void 0 === o && (o = 0);
        var n, i = this, r = e.data || {}, s = e.header;
        r.app_id = this.getConfig().APPID, this.getConfig().SITEID && (r.InitSiteID = this.getConfig().SITEID), 
        this.getConfig().DATAID && (r.dataId = this.getConfig().DATAID), getApp().globalData.PSESSID && (r.PSESSID = getApp().globalData.PSESSID), 
        getApp().globalData.WebUserID && (r.WebUserID = getApp().globalData.WebUserID), 
        n = a ? a + e.url : this.getConfig().SITEBASEURL + e.url, this.getConfig().ADD_QUERYSTRING && (n.indexOf("?") > -1 ? n += "&" + this.getConfig().ADD_QUERYSTRING : n += "?" + this.getConfig().ADD_QUERYSTRING);
        var l = wx.getStorageSync("invite");
        n.toLowerCase().indexOf("regorbinduser") > -1 && l && (r.invite = l), e.method && ("post" == e.method.toLowerCase() && (r = this.modifyPostParam(r), 
        s = s || {
            "content-type": "application/x-www-form-urlencoded;"
        }), e.method = e.method.toUpperCase()), e.hideLoading || e.options.refresh || wx.showToast({
            title: "加载中...",
            icon: "loading"
        }), wx.request({
            url: n,
            data: r,
            method: e.method || "GET",
            header: s || {
                "content-type": "application/json"
            },
            success: function(a) {
                if (a.statusCode && 200 != a.statusCode) return wx.hideToast(), void wx.showModal({
                    content: "" + a.errMsg
                });
                e.hideLoading || wx.hideToast(), !a.data || a.data.success || 1 != a.data.needAuthorized ? "function" == typeof e.success && e.success(a.data) : t.showModal({
                    title: "提示",
                    content: a.data.msg
                });
            },
            fail: function(t) {
                o < 3 ? setTimeout(function() {
                    i.sendRequest(e, a, ++o);
                }, 1e3) : (wx.showModal({
                    content: "请求失败 " + t.errMsg
                }), "function" == typeof e.fail && e.fail(t.data));
            },
            complete: function(t) {
                "function" == typeof e.complete && e.complete(t.data);
            }
        });
    },
    findTabBarPageByLinkType: function(e) {
        var t = this.getUrlByLinkType(e);
        return this.findTabBarPage(t + "_tabbar");
    },
    findTabBarPage: function(e) {
        var t = null;
        try {
            if (e) var a = (e = (e || "").replace(/_tabbar$/i, "").replace(/^\/+/, "")) + "_tabbar"; else a = this.getCurPage().route + "_tabbar";
            for (var o = require("tabbarlist.js"), n = Object.keys(o) || [], i = 0; i < n.length; i++) if (a === n[i]) {
                t = a;
                break;
            }
        } catch (e) {}
        return t;
    },
    checkToReLaunchTabBarPage: function() {
        var e = this.findTabBarPage();
        e && (e = "/" + e.replace(/^\/+/, ""), wx.switchTab({
            url: e,
            fail: function(e) {
                console.log(e, "cant switchTab");
            }
        }));
    }
};

module.exports = o;