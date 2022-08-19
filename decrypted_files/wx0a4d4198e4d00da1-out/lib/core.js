function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
        return a;
    }
    return Array.from(e);
}

function _defineProperty(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function r(n, o) {
                try {
                    var s = t[n](o), i = s.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void a(e);
                }
                if (!s.done) return Promise.resolve(i).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(i);
            }
            return r("next");
        });
    };
}

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _addr = require("./addr.js"), _addr2 = _interopRequireDefault(_addr), _lodash = require("./lodash.get.js"), _lodash2 = _interopRequireDefault(_lodash), _utils = require("./utils.js"), _wxParse = require("./wxParse/wxParse.js"), reConnectTimer = null, isConnecting = !1, isFirst = !0, _index = -1, appVerison = "2.60", isRequest = !0, compare = function(e, t) {
    return e.sort < t.sort ? 1 : e.sort > t.sort ? -1 : e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
}, pro = {
    choosePro: function(e, t, a, r, n) {
        var o = [], s = [], i = e.pickspecification, u = e.GASDetailList, c = [ i[t], i[t].items[a] ], d = c[0], l = c[1];
        tools.showLoading(), d.items.length > 0 && d.items.forEach(function(e) {
            e.id != l.id ? e.sel = !1 : e.sel = !e.sel;
        });
        for (var p, f = 0; p = i[f++]; ) for (var g, h = 0; g = p.items[h++]; ) if (g.sel) {
            var m = [ p.name, g.name ], b = m[0], y = m[1], x = b + ":" + y;
            o.push(g.id), s.push(x);
        }
        e.specId = o.join("_"), e.specInfo = s.join(" ");
        var w = u.find(function(t) {
            return t.id == e.specId;
        });
        switch (r) {
          case "good":
            e = this.goodSel(w, e);
            break;

          case "miaosha":
            e = this.miaoShaSel(w, e);
            break;

          case "group":
            e = this.groupSel(w, e, n);
        }
        return e.pickspecification[t] = d, wx.hideLoading(), e;
    },
    goodSel: function(e, t) {
        if (e) {
            var a = parseFloat(e.LimitDiscountPrice), r = parseFloat(e.discountPrice);
            t.stock = e.stock, t.selImg = e.imgUrl ? e.imgUrl : t.img, t.itemPrice = parseFloat(e.price).toFixed(2), 
            t.danMaiPrice = parseFloat(e.price.mul(t.totalCount)).toFixed(2), t.yuanJiaPrice = parseFloat(e.originalPrice).toFixed(2), 
            t.discountP = null != t.LimitDiscountDetail && 1 == t.LimitDiscountDetail.Status && a > 0 && a <= r ? a.toFixed(2) : r.toFixed(2), 
            t.isShowLimitP = null != t.LimitDiscountDetail && !!(1 == t.LimitDiscountDetail.Status && a > 0 && a <= r), 
            t.limitStatus = null != t.LimitDiscountDetail ? t.LimitDiscountDetail.Status : 0, 
            t.limitDiscountP = a, t.isShowFixedLimitP = t.isShowLimitP;
        } else t.selImg = t.img, t.itemPrice = t.priceStr, t.danMaiPrice = t.priceStr, t.yuanJiaPrice = parseFloat(t.originalPrice).toFixed(2);
        return t;
    },
    miaoShaSel: function(e, t) {
        return e ? (t.stock = e.stock, t.selImg = e.imgUrl ? e.imgUrl : t.img, t.itemPrice = parseFloat(e.discountPrice).toFixed(2), 
        t.danMaiPrice = parseFloat(e.discountPrice).toFixed(2), t.yuanJiaPrice = parseFloat(e.price).toFixed(2)) : (t.itemPrice = t.discountPricestr, 
        t.danMaiPrice = t.discountPricestr, t.selImg = t.img, t.yuanJiaPrice = parseFloat(t.price).toFixed(2)), 
        t;
    },
    groupSel: function(e, t, a) {
        return e ? (t.stock = e.stock, t.selImg = e.imgUrl ? e.imgUrl : t.img, 1 == a ? t.groupPrice = parseFloat(e.groupPrice).toFixed(2) : t.danMaiPrice = parseFloat(e.price).toFixed(2), 
        t.itemPrice = 1 == a ? t.groupPrice : t.danMaiPrice, t.yuanJiaPrice = parseFloat(e.originalPrice).toFixed(2)) : (t.selImg = t.img, 
        t.danMaiPrice = t.priceStr, t.yuanJiaPrice = t.originalPrice, t.stock = t.GASDetailList[0].stock, 
        t.groupPrice = t.GASDetailList[0].groupPrice, t.itemPrice = 1 == a ? t.groupPrice : t.danMaiPrice), 
        t;
    },
    addPro: function(e, t, a, r) {
        var n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, o = e.totalCount, s = 0, i = (e.LimitBuy, 
        {
            count: o,
            price: s
        });
        if (e.pickspecification.length) {
            var u = e.GASDetailList.find(function(t) {
                return t.id == e.specId;
            });
            if (void 0 == u) return tools.ShowToast("请先选择规格", a), i;
            if (s = "good" == t ? u.price : "miaosha" == t ? u.discountPrice : 1 == r ? u.groupPrice : u.price, 
            "miaosha" != t && (n.Specs && -1 == n.Specs[0].Stock || !n.Specs)) e.stockLimit ? o < u.stock ? o++ : tools.ShowToast("库存不足", a) : o++; else {
                o < (n.Specs && n.Specs.find(function(t) {
                    return t.Id == e.specId;
                })).Stock ? o++ : tools.ShowToast("库存不足", a);
            }
        } else s = "good" == t ? e.price : "miaosha" == t ? e.discountPrice : 1 == Number(r) ? e.EntGroups.GroupPrice.div(100) : e.price, 
        "miaosha" != t ? e.stockLimit ? o < e.stock ? o++ : tools.ShowToast("库存不足", a) : o++ : o < n.Stock ? o++ : tools.ShowToast("库存不足", a);
        return this.getDayStock(e, o) && "miaosha" != t && (tools.ShowToast("库存不足", a), 
        o--), this.getLimitBuy(e, o) && "miaosha" != t && (tools.ShowToast("已超过限购数量", a), 
        o--), i.count = o, i.price = s, i;
    },
    getDayStock: function(e, t, a, r) {
        return e.DayStock > 0 && ("goodscar" == a ? r > e.DayStock : e.UserBuyCount + t > e.DayStock);
    },
    getLimitBuy: function(e, t, a, r) {
        return e.LimitBuy > 0 && ("goodscar" == a ? r > e.LimitBuy : e.UserBuyCount + t > e.LimitBuy);
    },
    lessPro: function(e) {
        var t = e.totalCount;
        return t > 1 && t--, t;
    },
    resetPro: function(e, t, a, r) {
        switch (e.totalCount = "good" == a ? e.StartBuy || 1 : 1, console.log("totalCount", e.totalCount), 
        a) {
          case "good":
            e.itemPrice = parseFloat(e.priceStr).toFixed(2), e.danMaiPrice = parseFloat(e.priceStr).mul(e.totalCount).toFixed(2), 
            e.yuanJiaPrice = parseFloat(e.originalPrice).toFixed(2);
            break;

          case "miaosha":
            e.itemPrice = parseFloat(e.discountPricestr).toFixed(2), e.danMaiPrice = parseFloat(e.discountPricestr).toFixed(2), 
            e.yuanJiaPrice = e.priceStr;
            break;

          case "group":
            e.isgroup = Number(r), e.danMaiPrice = e.priceStr, e.yuanJiaPrice = e.EntGroups.OriginalPriceStr, 
            e.groupPrice = e.GASDetailList.length ? e.GASDetailList[0].groupPrice : e.EntGroups.GroupPriceStr, 
            e.itemPrice = 1 == e.isgroup ? e.groupPrice : e.danMaiPrice;
        }
        console.log("danMaiPrice", e.danMaiPrice), e.stock = e.stockStr, e.specInfo = "", 
        e.specId = "", e.display = t, e.priceStr = parseFloat(e.price).toFixed(2);
        for (var n = 0, o = e.pickspecification.length; n < o; n++) for (var s = 0, i = e.pickspecification[n].items.length; s < i; s++) e.pickspecification[n].items[s].sel = !1;
        return e;
    },
    orderPro: function(e, t, a) {
        var r = {}, n = 0, o = 0;
        return r.list = [], "good" == t ? (n = e.itemPrice, o = e.originalPrice) : (n = e.itemPrice, 
        o = e.yuanJiaPrice), r.list.push({
            ImgUrl: e.selImg,
            oldPrice: o,
            SpecInfo: e.specInfo,
            Introduction: e.name,
            discount: e.discount,
            discountPrice: n,
            discountP: e.discountP,
            isShowLimitP: e.isShowLimitP,
            limitStatus: e.limitStatus,
            limitDiscountP: e.LimitDiscountPrice,
            isShowFixedLimitP: e.isShowLimitP,
            goodid: e.id,
            Count: e.totalCount,
            type: t
        }), r.goodid = e.id, r.totalCount = e.totalCount, r.totalPrice = e.discountPricestr, 
        r.totalPrice = "good" == t || "miaosha" == t ? e.danMaiPrice : 1 == a ? Number(Number(e.yuanJiaPrice).mul(Number(e.totalCount))).toFixed(2) : e.danMaiPrice, 
        r;
    },
    useCoupon: function(e, t, a) {
        var r = e[a];
        if ("" != r.GoodsIdStr) {
            var n = r.GoodsIdStr.split(","), o = t.filter(function(e, t) {
                return n.includes(e.goodid.toString());
            }), s = 0;
            if (o.length > 0 && o.forEach(function(e) {
                s += (Number(e.discountPrice) || 0).mul(Number(e.Count));
            }), 0 == o.length) return tools.showModal("订单中没有优惠券指定的商品！", !1), null;
            if (r.LimitMoney > 0 && 100 * s < r.LimitMoney) return tools.showModal("指定商品满" + r.LimitMoneyStr + "元才能使用此优惠券！", !1), 
            null;
        }
        return r;
    }
}, tools = {
    updateMiniapp: function() {
        var e = wx.getUpdateManager();
        e.onCheckForUpdate(function(e) {}), e.onUpdateReady(function() {
            wx.showModal({
                title: "更新提示",
                content: "新版本已经准备好，是否重启应用？",
                success: function(t) {
                    t.confirm && e.applyUpdate();
                }
            });
        }), e.onUpdateFailed(function() {
            wx.showModal({
                title: "更新提示",
                content: "新版本下载失败，请手动删除小程序",
                showCancel: !1
            });
        });
    },
    getSystem: function() {
        parseFloat(wx.getSystemInfoSync().SDKVersion) < 1.9 || void 0 == wx.getSystemInfoSync().SDKVersion ? tools.showModal("当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试", !1) : tools.updateMiniapp();
    },
    resetArray: function(e) {
        return Object.assign(e, {
            ispost: !1,
            loadall: !1,
            list: [],
            pageindex: 1
        }), e;
    },
    upload: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "img", t = arguments[1], a = 3;
        return new Promise(function(r, n) {
            "img" == e && wx.chooseImage({
                success: function(n) {
                    function o() {
                        tools.showLoading();
                        var n = void 0 == t ? _addr2.default.Upload : t;
                        wx.uploadFile({
                            url: n,
                            filePath: u[s],
                            name: "file",
                            formData: {
                                filetype: e
                            },
                            success: function(e) {
                                var t = JSON.parse(e.data);
                                t.result ? (s += 1, i.push(t.msg)) : r(""), a <= 0 && tools.showModal("上传失败，请重试", !1), 
                                s < u.length ? (--a, o()) : r(i);
                            },
                            complete: function() {
                                wx.hideLoading();
                            }
                        }).onProgressUpdate(function(e) {
                            tools.loading("上传中" + e.progress + "%");
                        });
                    }
                    var s = 0, i = [], u = n.tempFilePaths;
                    o();
                }
            });
        });
    },
    uploadImg: function(e, t, a) {
        return new Promise(function(r, n) {
            var o = void 0 == a ? _addr2.default.Upload : a;
            wx.uploadFile({
                url: o,
                filePath: e[t],
                name: "file",
                formData: {
                    filetype: "img"
                },
                success: function(e) {
                    r(e);
                },
                fail: function(e) {
                    r(e);
                },
                complete: function() {}
            }).onProgressUpdate(function(e) {
                tools.loading("上传中" + e.progress + "%");
            });
        });
    },
    pathNav: function() {
        function e(e, a, r, n) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a, r, n) {
            var o, s, i, u, c;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (o = _wepy2.default.$instance, s = a.imgurl || a.img, i = n, u = (0, _lodash2.default)(a, "urltype", ""), 
                    e.t0 = (0, _lodash2.default)(o.globalData, "pages", ""), e.t0) {
                        e.next = 9;
                        break;
                    }
                    return e.next = 8, core.getPageSetting();

                  case 8:
                    e.t0 = e.sent;

                  case 9:
                    if (c = e.t0, "" !== u) {
                        e.next = 14;
                        break;
                    }
                    tools.oldGo(t, a, s, r), e.next = 44;
                    break;

                  case 14:
                    e.t1 = Number(u), e.next = -1 === e.t1 ? 17 : 0 === e.t1 ? 19 : 1 === e.t1 ? 21 : 2 === e.t1 ? 23 : 3 === e.t1 ? 25 : 4 === e.t1 ? 30 : 5 === e.t1 ? 32 : 6 === e.t1 ? 34 : 7 === e.t1 ? 36 : 8 === e.t1 ? 38 : 9 === e.t1 ? 40 : 10 === e.t1 ? 42 : 44;
                    break;

                  case 17:
                    return tools.pathMethod(t, s), e.abrupt("break", 44);

                  case 19:
                    return tools.pathPage(a, c, i, r), e.abrupt("break", 44);

                  case 21:
                    return tools.goNewMiniapp(a.appid, a.path), e.abrupt("break", 44);

                  case 23:
                    return tools.pathFunc(a, t, s), e.abrupt("break", 44);

                  case 25:
                    if (0 != a.items.length) {
                        e.next = 28;
                        break;
                    }
                    return tools.loading("未设置产品", "none"), e.abrupt("return");

                  case 28:
                    return tools.pathGood(a.items[0].id, a.btnType, a.items[0].showprice), e.abrupt("break", 44);

                  case 30:
                    return tools.pathGoodCat(a, r), e.abrupt("break", 44);

                  case 32:
                    return tools.pathGo(a, "/pages/group2/group2?id="), e.abrupt("break", 44);

                  case 34:
                    return tools.pathGo(a, "/pages/bargain/bargain?id="), e.abrupt("break", 44);

                  case 36:
                    return tools.pathGo(a, "/pages/group/group?id="), e.abrupt("break", 44);

                  case 38:
                    return tools.pathGoodSmallCat(a, r), e.abrupt("break", 44);

                  case 40:
                    return tools.pathMiaoSha(a), e.abrupt("break", 44);

                  case 42:
                    return tools.pathGo(a, "/pages/news/news?id="), e.abrupt("break", 44);

                  case 44:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    oldGo: function(e, t, a, r) {
        switch (e) {
          case "bottomnav":
            if (-1 == t.url) return void tools.loading("未设置跳转", "none");
            core.renderPage(r, Number(t.url)), tools.onPageScroll();
            break;

          case "img":
            tools.preViewShow(a);
        }
    },
    pathGo: function(e, t) {
        if (0 == e.itemstype.length) return void tools.loading("未设置跳转", "none");
        tools.goNewPage(t + e.itemstype[0].id);
    },
    pathGood: function(e, t, a, r) {
        var n = {
            id: e,
            btn: t,
            showprice: a,
            sale: r
        };
        tools.goNewPage("/pages/good/good?para=" + JSON.stringify(n));
    },
    pathMethod: function(e, t) {
        "img" == e || "slider" == e || "magicCube" == e ? tools.preViewShow(t) : tools.loading("未设置跳转", "none");
    },
    pathGoodCat: function(e, t) {
        var a = {}, r = _wepy2.default.$instance, n = r.globalData.switchInfo;
        a.typeid = e.itemstype[0].id, a.title = e.itemstype[0].name, a.isFirstType = n.SeondTypeOpen ? 0 : 1, 
        a.goods = {
            showBig: !!n.SeondTypeOpen,
            goodShowType: "small",
            btnType: e.btnType,
            isShowPrice: !0
        }, t.$preload("vm", a), t.$navigate("/pages/good/goodProLst");
    },
    pathGoodSmallCat: function(e, t) {
        var a = {};
        a.typeid = e.itemstype[0].id, a.title = e.itemstype[0].name, a.isFirstType = 1, 
        a.goods = {
            showBig: !1,
            goodShowType: "small",
            btnType: e.btnType,
            isShowPrice: !0
        }, t.$preload("vm", a), t.$navigate("/pages/good/goodProLst");
    },
    pathPage: function(e, t, a, r) {
        if (Number(_index) != Number(a)) return e.url >= (t.pages && t.pages.length) ? void tools.loading("未设置跳转", "none") : void (-1 == e.url ? tools.loading("未设置跳转", "none") : "_blank" == e.target ? (_index = -1, 
        getCurrentPages().length >= 8 ? tools.goRedirecto("/pages/index/index?currentPageIndex=" + e.url) : tools.goNewPage("/pages/index/index?currentPageIndex=" + e.url)) : (tools.showLoading(), 
        _index = "" === a ? -1 : a, core.renderPage(r, Number(e.url)), tools.onPageScroll()));
    },
    pathFunc: function(e, t, a) {
        return -1 == e.furl ? void tools.pathMethod(t, a) : "" != e.furl && "string" == typeof e.furl ? void tools.goNewPage("/" + e.furl + "?type=3") : void (4 == e.furl && tools.sceneQrcode(Number(e.url)));
    },
    pathMiaoSha: function(e) {
        var t = e.itemstype[0].id;
        tools.goNewPage("/pages/miaoSha/more?id=" + t);
    },
    setPageSkin: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = 0, r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "pages", ""), 
                    e.t0) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 6, core.getPageSetting();

                  case 6:
                    e.t0 = e.sent;

                  case 7:
                    n = e.t0, o = (0, _lodash2.default)(n, "pages", ""), o && (a = o[0].skin), wx.setNavigationBarColor({
                        frontColor: _utils.skin[a].color,
                        backgroundColor: _utils.skin[a].bgcolor
                    }), t.currentSkin = _utils.skin[a].type, t.activeColor = _utils.skin[a].bgcolor, 
                    t.$apply();

                  case 14:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    TimeShow: function(e, t) {
        var a = t, r = e, n = [ "days", "hours", "min", "seconds" ], o = new Date(r) - new Date();
        if (o > 0) n = _utils.timeTools.getRemainTimeQueue(o).join(":"); else {
            var s = new Date(a) - new Date();
            n = s <= 0 ? "00:00:00" : _utils.timeTools.getRemainTimeQueue(s).join(":");
        }
        return n;
    },
    phoneFunc: function(e) {
        e ? wx.makePhoneCall({
            phoneNumber: e
        }) : tools.loading("未设置电话", "none");
    },
    goNewMiniapp: function(e, t) {
        wx.navigateToMiniProgram({
            path: t,
            appId: e,
            success: function(e) {},
            fail: function(e) {
                tools.showModal(e, !1);
            }
        });
    },
    sceneQrcode: function(e) {
        var t = this, a = _wepy2.default.$instance.globalData;
        wx.scanCode({
            onlyFromCamera: !0,
            success: function() {
                function r(e) {
                    return n.apply(this, arguments);
                }
                var n = _asyncToGenerator(regeneratorRuntime.mark(function r(n) {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (void 0 != n.path) {
                                t.next = 4;
                                break;
                            }
                            tools.showModal("亲，该二维码有误", !1), t.next = 8;
                            break;

                          case 4:
                            return a.storecodeid = n.path.split("?scene=")[1], t.next = 7, tools.loading("扫码成功", "success");

                          case 7:
                            -1 != e && tools.goRedirecto("/pages/index/index?currentPageIndex=" + e);

                          case 8:
                          case "end":
                            return t.stop();
                        }
                    }, r, t);
                }));
                return r;
            }()
        });
    },
    onPageScroll: function() {
        wx.pageScrollTo({
            scrollTop: 0,
            duration: 300
        });
    },
    setPageTitle: function(e) {
        wx.setNavigationBarTitle({
            title: e
        });
    },
    preViewShow: function(e, t) {
        var a = [];
        t ? a = t : a.push(e), wx.previewImage({
            current: e,
            urls: a
        });
    },
    showLoading: function(e) {
        var t = e || "加载中...";
        wx.showLoading({
            title: t,
            mask: !0
        });
    },
    goNewPage: function(e) {
        wx.navigateTo({
            url: e
        });
    },
    goBack: function(e) {
        wx.navigateBack({
            delta: e
        });
    },
    goRedirecto: function(e) {
        wx.redirectTo({
            url: e
        });
    },
    goLaunch: function(e) {
        wx.reLaunch({
            url: e
        });
    },
    copy: function(e) {
        wx.setClipboardData({
            data: e,
            success: function(e) {
                wx.getClipboardData({
                    success: function(e) {
                        tools.loading("复制成功", "success");
                    }
                });
            }
        });
    },
    chooseAddress: function() {
        return new Promise(function(e, t) {
            wx.chooseAddress({
                success: function(t) {
                    e(t);
                },
                fail: function(t) {
                    e(t);
                }
            });
        });
    },
    showModal: function(e, t, a) {
        return void 0 == t && (t = !0), new Promise(function(r, n) {
            wx.showModal({
                title: void 0 == a ? "提示" : a,
                content: e,
                showCancel: t,
                success: function(e) {
                    r(e);
                }
            });
        });
    },
    ShowToast: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return a.toast.show = !0, a.toast.msg = t, a.$apply(), e.next = 5, tools.throttle(1500);

                  case 5:
                    a.toast.show = !1, a.$apply();

                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    loading: function(e, t) {
        wx.showToast({
            title: e,
            icon: t || "loading",
            duration: 1500
        });
    },
    ChangeDateFormat: function(e) {
        if (null != e) {
            if (e.indexOf("/Date") < 0) return e;
            var t = new Date(parseInt(e.replace("/Date(", "").replace(")/", ""), 10)), a = _utils.timeTools.patchTime(t.getMonth() + 1), r = _utils.timeTools.patchTime(t.getDate()), n = _utils.timeTools.patchTime(t.getHours()), o = _utils.timeTools.patchTime(t.getMinutes()), s = _utils.timeTools.patchTime(t.getSeconds());
            return t.getFullYear() + "-" + a + "-" + r + " " + n + ":" + o + ":" + s;
        }
        return "";
    },
    chooseImg: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8;
        return new Promise(function(t, a) {
            wx.chooseImage({
                count: e,
                sizeType: [ "original", "compressed" ],
                sourceType: [ "album", "camera" ],
                success: function() {
                    function e(e) {
                        return a.apply(this, arguments);
                    }
                    var a = _asyncToGenerator(regeneratorRuntime.mark(function e(a) {
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                t(a);

                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return e;
                }()
            });
        });
    },
    richChange: function(e, t) {
        return e ? (e = e.replace(/[<]br[\/][>]/g, '<div style="height:20px"></div>').replace(/&nbsp;/g, '<span style="margin-left:16rpx;"></span>').replace(/[<][\/]p[>][<]p[>]/g, "<div></div>"), 
        (0, _wxParse.wxParse)("description", "html", e || "", t, 5)) : "";
    },
    getRnUser: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, n = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    !a || 1 !== a || !t.detail.errMsg.includes("getPhoneNumber:fail user deny")) {
                        e.next = 4;
                        break;
                    }
                    return e.abrupt("return", n);

                  case 4:
                    if (!t.detail.errMsg.includes("getUserInfo:fail auth deny")) {
                        e.next = 6;
                        break;
                    }
                    return e.abrupt("return", n);

                  case 6:
                    return o = {
                        iv: t.detail.iv,
                        data: t.detail.encryptedData
                    }, r.globalData.encrypted = o, e.next = 10, core.loginUserInfo(r.globalData.encrypted);

                  case 10:
                    return s = e.sent, e.abrupt("return", s);

                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    checkSession: function() {
        return new Promise(function(e, t) {
            wx.checkSession({
                success: function() {
                    console.log("有效", "检查登陆状态"), e(!0);
                },
                fail: function() {
                    console.log("失效", "检查登陆状态"), e(!1);
                }
            });
        });
    },
    getLocation: function() {
        return new Promise(function(e, t) {
            wx.getLocation({
                type: "wgs84",
                success: function(t) {
                    e(t);
                },
                fail: function(t) {
                    tools.showModal("若要使用地位,请点击右上角‘关于小程序’进行相关设置", !1), e("");
                },
                complete: function() {}
            });
        });
    },
    throttle: function(e) {
        return new Promise(function(t) {
            setTimeout(function() {
                t();
            }, e);
        });
    },
    judgeTimeIsToday: function(e) {
        var t = new Date(e.split(" ")[0]), a = new Date(), r = a.getFullYear(), n = a.getMonth() + 1, o = a.getDate(), s = new Date(r + "/" + n + "/" + o);
        return parseInt(s - t) / 1e3 / 60 / 60 / 24;
    },
    judgeTimeIsOverdue: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, a = new Date(Date.parse(e.replace(/-/g, "/"))), r = new Date(), n = r.getTime() - a.getTime();
        return console.log("judgeTimeIsOverdue", n, Math.floor(n / 1e3 / 60 / 60 / 24)), 
        n < 0 ? 0 : Math.floor(n / 1e3 / 60 / 60 / 24) >= t;
    },
    getNowDate: function() {
        function e(e) {
            return e < 10 ? "0" + e : e;
        }
        var t = new Date();
        return t.getFullYear() + "-" + e(t.getMonth() + 1) + "-" + e(t.getDate()) + " " + e(t.getHours()) + ":" + e(t.getMinutes()) + ":" + e(t.getSeconds());
    }
}, pay = {
    PayOrder: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n, o, s, i, u;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "aid", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getAid();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (r = e.t0, e.t1 = (0, _lodash2.default)(a.globalData, "userInfo", ""), e.t1) {
                        e.next = 12;
                        break;
                    }
                    return e.next = 11, core.getUserInfo();

                  case 11:
                    e.t1 = e.sent;

                  case 12:
                    return n = e.t1, e.next = 15, http.post(_addr2.default.PayOrder, {
                        aid: r,
                        openId: n.OpenId,
                        orderid: t.orderid,
                        type: t.type
                    });

                  case 15:
                    if (o = e.sent, !o.result) {
                        e.next = 24;
                        break;
                    }
                    return s = JSON.parse(o.obj), e.next = 20, pay.wxpay(s);

                  case 20:
                    return i = e.sent, e.abrupt("return", i);

                  case 24:
                    if (!o.obj) {
                        e.next = 33;
                        break;
                    }
                    if (u = o.obj.split('"'), !u[7].includes("mch_id参数格式错误") && !o.obj.includes("mch_id参数长度有误")) {
                        e.next = 31;
                        break;
                    }
                    return e.next = 29, tools.showModal("商户秘钥错误", !1);

                  case 29:
                    e.next = 33;
                    break;

                  case 31:
                    return e.next = 33, tools.showModal(o.msg, !1);

                  case 33:
                    return e.abrupt("return", "");

                  case 34:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    wxpay: function(e) {
        var t = _wepy2.default.$instance;
        return new Promise(function(a, r) {
            wx.requestPayment({
                appId: t.globalData.appid,
                timeStamp: e.timeStamp,
                nonceStr: e.nonceStr,
                package: e.package,
                signType: e.signType,
                paySign: e.paySign,
                success: function(e) {
                    a(e);
                },
                fail: function(e) {
                    a(e);
                },
                complete: function(e) {
                    a(e);
                }
            });
        });
    },
    AddOrderNew: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, r = a.globalData.appid, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 6, core.getUserInfo();

                  case 6:
                    e.t0 = e.sent;

                  case 7:
                    return n = e.t0, e.abrupt("return", http.post(_addr2.default.AddPayOrderNew, {
                        appId: r,
                        openid: n.OpenId,
                        userId: n.Id,
                        ordertype: t.order,
                        paytype: t.paytype,
                        jsondata: t.jsondata
                    }));

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    deleteLastFormId: function() {
        var e = _wepy2.default.$instance;
        http.post(_addr2.default.deleteLastFormId, {
            appid: e.globalData.appid,
            openid: e.globalData.userInfo.OpenId
        });
    }
}, http = {
    postJson: function(e, t) {
        if (t = t || {}, t.appVerison = appVerison, !e.includes("GetSesionKey")) {
            var a = _wepy2.default.$instance, r = (0, _lodash2.default)(a.globalData, "userInfo", "");
            t.sessionkey = r && r.loginSessionKey;
        }
        return new Promise(function(a, r) {
            if (!isRequest) return a("");
            wx.request(Object.assign({}, _utils.req.json, {
                url: e,
                data: t,
                method: "POST",
                fail: function(e) {
                    ("request:fail url not in domain list" == e.errMsg || e.errMsg.includes("request:fail parameter error")) && (tools.showModal("请配置正确的请求域名", !1), 
                    wx.hideLoading());
                },
                success: function(e) {
                    a(200 == e.statusCode ? e.data : "");
                }
            }));
        });
    },
    post: function(e, t) {
        if (console.log("post", e), t = t || {}, t.appVerison = appVerison, !e.includes("GetSesionKey")) {
            var a = _wepy2.default.$instance, r = (0, _lodash2.default)(a.globalData, "userInfo", "");
            t.sessionkey = r && r.loginSessionKey;
        }
        return new Promise(function(a, r) {
            if (!isRequest) return a("");
            wx.request(Object.assign({}, _utils.req.urlencoded, {
                url: e,
                data: t,
                method: "POST",
                fail: function(e) {
                    ("request:fail url not in domain list" == e.errMsg || e.errMsg.includes("request:fail parameter error")) && (tools.showModal("请配置正确的请求域名", !1), 
                    wx.hideLoading());
                },
                success: function(e) {
                    a(200 == e.statusCode ? e.data : "");
                }
            }));
        });
    },
    get: function(e, t) {
        if (t = t || {}, t.appVerison = appVerison, !e.includes("GetSesionKey")) {
            var a = _wepy2.default.$instance, r = (0, _lodash2.default)(a.globalData, "userInfo", "");
            t.sessionkey = r && r.loginSessionKey;
        }
        return new Promise(function(a, r) {
            if (!isRequest) return a("");
            wx.request(Object.assign({}, _utils.req.urlencoded, {
                url: e,
                data: t,
                fail: function(e) {
                    ("request:fail url not in domain list" == e.errMsg || e.errMsg.includes("request:fail parameter error")) && (tools.showModal("请配置正确的请求域名", !1), 
                    wx.hideLoading());
                },
                success: function(e) {
                    a(200 == e.statusCode ? e.data : "");
                }
            }));
        });
    }
}, core = {
    senduserauth: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, r = a.globalData.appid, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 6, core.getUserInfo();

                  case 6:
                    e.t0 = e.sent;

                  case 7:
                    return n = e.t0, e.abrupt("return", http.post(_addr2.default.senduserauth, {
                        tel: t,
                        sendType: 8,
                        appid: r,
                        openId: n.OpenId
                    }));

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    Submitauth: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return n = e.t0, e.abrupt("return", http.post(_addr2.default.Submitauth, {
                        tel: t,
                        openId: n.OpenId,
                        authCode: a
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getUserCode: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.abrupt("return", http.post(_addr2.default.GetUserCode, {
                        tel: t,
                        openId: r.OpenId,
                        sendType: 12
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    loginUserInfo: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n, o, s, i, u, c;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (console.log(55555555555), a = _wepy2.default.$instance, r = a.globalData.appid, 
                    "" != (n = (0, _lodash2.default)(a.globalData, "userInfo", ""))) {
                        e.next = 11;
                        break;
                    }
                    return e.next = 7, core.login();

                  case 7:
                    return o = e.sent, e.next = 10, core.wxLogin(o);

                  case 10:
                    n = e.sent;

                  case 11:
                    return e.next = 13, http.post(_addr2.default.loginByThirdPlatform, {
                        appId: r,
                        iv: t.iv,
                        data: t.data,
                        userId: n.Id
                    });

                  case 13:
                    if (s = e.sent, s.isok) {
                        e.next = 26;
                        break;
                    }
                    if ("系统繁忙" != s.Msg) {
                        e.next = 26;
                        break;
                    }
                    return console.log("解密失败，发起二次解密请求"), e.next = 19, core.login();

                  case 19:
                    return i = e.sent, e.next = 22, core.wxLogin(i);

                  case 22:
                    return n = e.sent, e.next = 25, http.post(_addr2.default.loginByThirdPlatform, {
                        appId: r,
                        iv: t.iv,
                        data: t.data,
                        userId: n.Id
                    });

                  case 25:
                    s = e.sent;

                  case 26:
                    if (!s.isok) {
                        e.next = 36;
                        break;
                    }
                    return u = (0, _lodash2.default)(s.dataObj, "HeadImgUrl", ""), c = (0, _lodash2.default)(s.dataObj, "NickName", ""), 
                    null == u && (u = ""), null == c && (c = ""), s.dataObj.newUser = "" == u || "" == c, 
                    a.globalData.userInfo = s.dataObj, e.abrupt("return", s.dataObj);

                  case 36:
                    tools.showModal(s.Msg, !1);

                  case 37:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    wxLogin: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return a = _wepy2.default.$instance.globalData.appid, e.next = 3, http.post(_addr2.default.WxLogin, {
                        code: t,
                        appId: a,
                        needAppsr: global.independentUpdate ? 1 : 0
                    });

                  case 3:
                    if (r = e.sent, !r.isok) {
                        e.next = 13;
                        break;
                    }
                    return n = (0, _lodash2.default)(r.dataObj, "HeadImgUrl", ""), o = (0, _lodash2.default)(r.dataObj, "NickName", ""), 
                    null == n && (n = ""), null == o && (o = ""), r.dataObj.newUser = "" == n || "" == o, 
                    e.abrupt("return", r.dataObj);

                  case 13:
                    tools.showModal(r.Msg, !1), wx.hideLoading();

                  case 15:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getUserInfo: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, a, r, n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (console.log(4444444444), t = _wepy2.default.$instance, !(a = (0, _lodash2.default)(t.globalData, "userInfo", ""))) {
                        e.next = 7;
                        break;
                    }
                    if (!(r = tools.checkSession())) {
                        e.next = 7;
                        break;
                    }
                    return e.abrupt("return", a);

                  case 7:
                    return e.next = 9, core.login();

                  case 9:
                    if (!(n = e.sent)) {
                        e.next = 16;
                        break;
                    }
                    return e.next = 13, core.wxLogin(n);

                  case 13:
                    return o = e.sent, t.globalData.userInfo = o, e.abrupt("return", o);

                  case 16:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    login: function() {
        return new Promise(function(e, t) {
            wx.login({
                success: function(t) {
                    e(t.code);
                }
            });
        });
    },
    getAid: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, a, r, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return t = _wepy2.default.$instance, a = (0, _lodash2.default)(t.globalData, "aid", ""), 
                    r = t.globalData.appid, e.next = 5, core.getVipInfo();

                  case 5:
                    if (core.appSwitch(), !a) {
                        e.next = 10;
                        break;
                    }
                    return e.abrupt("return", a);

                  case 10:
                    return e.next = 12, http.post(_addr2.default.Getaid, {
                        appid: r
                    });

                  case 12:
                    if (n = e.sent, !n.isok) {
                        e.next = 18;
                        break;
                    }
                    return t.globalData.aid = n.msg, t.globalData.isAgent = n.IsAgent, t.globalData.xcxName = n.data && n.data.XcxName, 
                    e.abrupt("return", n.msg);

                  case 18:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getVipInfo: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, a, r, n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(t.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (a = e.t0, "" == (r = (0, _lodash2.default)(t.globalData, "vipInfo", ""))) {
                        e.next = 10;
                        break;
                    }
                    return e.abrupt("return", r);

                  case 10:
                    return e.next = 12, http.get(_addr2.default.GetVipInfo, {
                        appid: t.globalData.appid,
                        uid: a.Id
                    });

                  case 12:
                    if (n = e.sent, !n.isok) {
                        e.next = 22;
                        break;
                    }
                    return e.next = 16, core.valueMoney();

                  case 16:
                    return o = e.sent, n.model.valueMoney = o.saveMoneySetUser.AccountMoneyStr, t.globalData.vipInfo = n.model, 
                    e.abrupt("return", n.model);

                  case 22:
                    return e.abrupt("return", "");

                  case 23:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    formId: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    r = e.t0, http.post(_addr2.default.commitFormId, {
                        appid: a.globalData.appid,
                        openid: r.OpenId,
                        formid: t
                    });

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    valueMoney: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return t = _wepy2.default.$instance, a = t.globalData.userInfo, e.abrupt("return", http.get(_addr2.default.getSaveMoneySetUser, {
                        appid: t.globalData.appid,
                        openid: a.OpenId
                    }));

                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getGoodByids: function() {
        function e(e, a, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a, r) {
            var n, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (n = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(n.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return o = e.t0, e.next = 9, http.post(_addr2.default.GetGoodsByids, {
                        ids: t,
                        levelid: a || "",
                        goodShowType: r || "",
                        userid: o.Id
                    });

                  case 9:
                    if (s = e.sent, !s.isok) {
                        e.next = 14;
                        break;
                    }
                    return e.abrupt("return", s.msg);

                  case 14:
                    return e.abrupt("return", "");

                  case 15:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getGoodList: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = _wepy2.default.$instance, "object" === _typeof(t.typeid) && (t.typeid = t.typeid.join(",")), 
                    n = r.globalData.aid, o = r.globalData.vipInfo, s = (0, _lodash2.default)(a, "goodShowType", ""), 
                    e.abrupt("return", http.get(_addr2.default.GetGoodsList, {
                        aid: n,
                        goodShowType: s,
                        typeid: t.typeid,
                        search: t.search || "",
                        exttypes: t.exttypes || "",
                        pagesize: t.pagesize,
                        pricesort: t.pricesort || "",
                        pageindex: t.pageindex,
                        levelid: o.levelid || "",
                        isFirstType: t.isFirstType,
                        saleCountSort: t.saleCountSort || ""
                    }));

                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    groupInfo: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return a = _wepy2.default.$instance, e.abrupt("return", http.post(_addr2.default.GetGroupDetail, {
                        appId: a.globalData.appid,
                        groupId: t
                    }));

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getGoodType: function(e) {
        return http.post(_addr2.default.GetGoodTypeList, {
            appid: _wepy2.default.$instance.globalData.appid,
            ids: e
        });
    },
    getPageConfig: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(t.globalData, "aid", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getAid();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return a = e.t0, e.abrupt("return", http.post(_addr2.default.GetPageSetting, {
                        aid: a
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getPageSetting: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(t.globalData, "pages", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getPageConfig();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (a = e.t0, !a.isok) {
                        e.next = 15;
                        break;
                    }
                    "string" == typeof a.msg.pages && (a.msg.pages = JSON.parse(a.msg.pages));
                    try {
                        for (r = a.msg.pages && a.msg.pages.length; r--; ) a.msg.pages[r].def_name.includes("产品预约") && a.msg.pages.splice(r, 1);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        console.log("循环pages", r);
                    }
                    return t.globalData.appConfig = a, t.globalData.pages = a.msg, e.abrupt("return", a.msg);

                  case 15:
                    return e.abrupt("return", a);

                  case 16:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    iconStatus: function() {
        function e(e, a, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a, r) {
            var n, o, s, i;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (n = {}, o = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(o.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 6, core.getUserInfo();

                  case 6:
                    e.t0 = e.sent;

                  case 7:
                    return s = e.t0, console.log("iconStatus", t, a), e.next = 11, _utils.un.icon(t, a);

                  case 11:
                    if (n = e.sent, n.userInfo = s, n.showState = !1, n.backUp = !1, 0 != a) {
                        e.next = 20;
                        break;
                    }
                    return e.next = 18, core.getReductionLst(0);

                  case 18:
                    i = e.sent, n.reduction = !!i.length;

                  case 20:
                    r.vm_com_icon = n, r.$apply();

                  case 22:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    comPonents: function(e, t, a) {
        for (var r = 0, n = e.length; r < n; r++) {
            var o = e[r];
            switch (o.type) {
              case "form":
                o.items.forEach(function(e, t) {
                    if ("radio" == e.type) {
                        for (var a = [], r = 0, n = e.items.length; r < n; r++) a.push(e.items[r].name);
                        e.array = a;
                    }
                });
                break;

              case "goodlist":
                "6" == o.GoodCatNavStyle ? core.getGoodLstType(o, a) : core.getGoodLst(o, t, a);
                break;

              case "bgaudio":
                _wepy2.default.$instance.globalData.hasMusicComs = !0;
            }
        }
    },
    renderPage: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n, o = this;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "aid", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getAid();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    n = e.t0, http.post(_addr2.default.GetPageSettingUpdateTime, {
                        aid: n
                    }).then(function() {
                        var e = _asyncToGenerator(regeneratorRuntime.mark(function e(n) {
                            var s, i, u, c, d, l, p;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if ("" != (s = (0, _lodash2.default)(r.globalData, "pages", "")) && n.msg == s.updatetime) {
                                        e.next = 6;
                                        break;
                                    }
                                    return r.globalData.pages = "", e.next = 5, core.getPageSetting();

                                  case 5:
                                    s = e.sent;

                                  case 6:
                                    if (!("string" == typeof s.msg && s.msg.includes("小程序没有设置页面") || s.pages && 0 == s.pages.length)) {
                                        e.next = 10;
                                        break;
                                    }
                                    return tools.showModal("小程序未配置页面", !1), wx.hideLoading(), e.abrupt("return");

                                  case 10:
                                    if (!(a < 0 || a > (s.pages && s.pages.length))) {
                                        e.next = 14;
                                        break;
                                    }
                                    return tools.showModal("页面不存在", !1), wx.hideLoading(), e.abrupt("return");

                                  case 14:
                                    if (i = (0, _lodash2.default)(s, "MeConfig", ""), u = s.pages && s.pages[a]) {
                                        e.next = 18;
                                        break;
                                    }
                                    return e.abrupt("return");

                                  case 18:
                                    return i && (t.vm_com_bottom = i), console.log(s.pages), t.vm_com_status = {}, t.currentPage = u, 
                                    t.currentPageIndex = a, t.$apply(), e.next = 26, Promise.all([ tools.setPageTitle(u.name), tools.setPageSkin(t), core.comPonents(u.coms, a, t), core.iconStatus(u.coms, a, t), core.getCoupShow(a, t), core.logoSwitch(t) ]);

                                  case 26:
                                    if (wx.hideLoading(), -1 == (c = (0, _lodash2.default)(t.vm_com_status, a.toString(), -1))) {
                                        e.next = 30;
                                        break;
                                    }
                                    return e.abrupt("return");

                                  case 30:
                                    for (d = 0, l = u.coms.length; d < l; d++) core.renderCom(a, d, u.coms[d], t);
                                    _index = -1, -1 == c && (t.vm_com_status[a.toString()] = !0), p = u.coms.findIndex(function(e) {
                                        return "good" == e.type;
                                    }), t.goodOneIndex = p, t.hasBottomNav = u.coms.some(function(e) {
                                        return "bottomnav" == e.type;
                                    }), t.$apply();

                                  case 37:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, o);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }());

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    renderCom: function(e, t, a, r) {
        var n = [], o = e + "_" + t;
        switch (a.type) {
          case "slider":
            a.current = 0;
            break;

          case "good":
            n.push(core.goodRequest(o, a, r));
            break;

          case "news":
            "all" == a.listmode || "pick" == a.listmode && 0 == a.list.length ? n.push(core.allNews(o, a, r)) : n.push(core.chooseNews(o, a, r));
            break;

          case "live":
            var s = {
                list: a.items.slice(0, 3),
                num: a.items.length
            };
            r.vm_com_live[o] = s;
            break;

          case "cutprice":
            n.push(core.bargain(o, a, r));
            break;

          case "richtxt":
            r.vm_com_rich[o] = tools.richChange(a.content, r);
            break;

          case "joingroup":
            n.push(core.joingroupRequest(o, a, r));
            break;

          case "entjoingroup":
            n.push(core.getEngroupIds(o, a, r));
            break;

          case "bgaudio":
            if (a.src) {
                (0, _lodash2.default)(_wepy2.default.$instance.globalData, "musicPause", !0) && (a.playAudio = !0, 
                a.scrollShow = !1, wx.playBackgroundAudio({
                    dataUrl: a.src
                }));
            }
            break;

          case "flashdeal":
            n.push(core.getMiaoSha(o, a.flashDealId, r));
            break;

          case "newslist":
            var i = [];
            if (0 == a.newsCat.length) return;
            for (var u = 0, c = a.newsCat.length; u < c; u++) i.push(a.newsCat[u].id);
            i.length && (i = i.join(",")), r.vm_com_newlst.ids = i, r.vm_com_newlst.ids_array = i, 
            r.vm_com_newlst.loadall = !1, r.vm_com_newlst.pageindex = 1, r.vm_com_newlst.list = [], 
            n.push(core.getNewsLst(r.vm_com_newlst, r));
            break;

          case "form":
            var d = {
                time: {},
                name: {},
                phone: {},
                pickIndex: {},
                pickTime: {},
                showPicker: {},
                showXia: {},
                writeCodeVal: "",
                upload: {},
                uploadImgs: [],
                timeOutCode: 60,
                getCodeVal: 0
            };
            r.vm_com_form[o] = d;
        }
        Promise.all(n), r.$apply();
    },
    getGoodLstType: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n, o, s, i, u;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = [], n = !0, t.goodCat.forEach(function(e, t) {
                        r.push(e.id);
                    }), o = r.join(","), e.next = 6, core.getGoodType(o);

                  case 6:
                    if (s = e.sent, s.isok) {
                        if (0 != t.goodCat[0].parentId) {
                            for (i = 0, u = s.dataObj.length; i < u; i++) s.dataObj[0].SecondGoodTypes.push(s.dataObj[i].FirstGoodType);
                            n = !1;
                        } else n = !0;
                        a.vm_com_classify.list = s.dataObj, a.vm_com_classify.showfirst = n, a.$apply();
                    }

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getGoodLst: function(e, t, a) {
        var r = [], n = _wepy2.default.$instance, o = n.globalData.showBIG, s = n.globalData.goodCat[t];
        console.log("getGoodLst", o, s, t);
        var i = tools.resetArray(a.vm_com_goodLst), u = (0, _lodash2.default)(e.goodCat[0], "parentId", -1);
        i.goodCatArray[t] = e.goodCat, 0 === u ? (i.showMore = !0, s && 1 == s.length ? i.isFirstType = o ? 0 : 1 : i.isFirstType = o ? 0 : s && s.length > 1 ? 1 : 0, 
        i.goodCat[t] = s && s.length ? s : e.goodCat) : (i.isFirstType = 1, i.showMore = !1, 
        i.goodCat[t] = e.goodCat), i.goodCat[t].length && (i.goodCat[t].forEach(function(e, t) {
            r.push(e.id);
        }), i.goodCat[t] = i.goodCat[t].sort(compare)), i.showgoodAll = 1 != i.goodCat[t].length, 
        i.typeid = r, i.alltypeid = r.join(","), core.getGoodsListRequest(i, e, a), n.globalData.goodCat = [];
    },
    getCoupShow: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n, o, s, i, u;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, !(n = (0, _lodash2.default)(r.globalData, "coupHidden", ""))) {
                        e.next = 4;
                        break;
                    }
                    return e.abrupt("return");

                  case 4:
                    if (!Number(t)) {
                        e.next = 6;
                        break;
                    }
                    return e.abrupt("return");

                  case 6:
                    return e.next = 8, core.getStoreCoup(1, 5);

                  case 8:
                    if (o = e.sent, o.postdata.length) {
                        for (s = 0, i = o.postdata.length; s < i; s++) o.postdata[s].isGet = !1, o.postdata[s].coupBtnText = "领取";
                        a.coupHidden = o.postdata.length > 0, a.vm_com_coupList = o.postdata, a.$apply(), 
                        r.globalData.coupHidden = a.coupHidden;
                    }
                    if (!(u = (0, _lodash2.default)(r.globalData, "showsigninFloat", ""))) {
                        e.next = 13;
                        break;
                    }
                    return e.abrupt("return");

                  case 13:
                    0 == a.coupHidden && core.showSignin(a);

                  case 14:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getMiaoSha: function() {
        function e(e, a, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a, r) {
            var n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    n = {}, o = _wepy2.default.$instance, http.post(_addr2.default.GetFlashDeal, {
                        appId: o.globalData.appid,
                        openId: o.globalData.userInfo.OpenId,
                        flashDealIds: a
                    }).then(function(e) {
                        if (e.isok) if (e.dataObj) {
                            if (n = e.dataObj[0], n.more = !0, n.isList = !1, 0 == n.State || 3 == n.State) return n.show = !1, 
                            r.vm_com_miaosha[t] = n, void r.$apply();
                            n.show = !0, n.Item.length > 4 && n.Item.splice(4, n.Item.length);
                            for (var o = 0, s = n.Item.length; o < s; o++) n.Item[o].FlashDealItemStock > 0 ? n.Item[o].saleRate = Number(n.Item[o].Sale).div(Number(n.Item[o].FlashDealItemStock).add(Number(n.Item[o].Sale))).mul(100).toFixed(0) : n.Item[o].saleRate = 100;
                            n.useOldOrNew = !!n.Item[0].FlashDealItemStock, r.vm_com_miaosha[t] = n, r.$apply(), 
                            core.miaoShaCountDown(n, r, a, t);
                        } else n.show = !1, r.vm_com_miaosha[t] = n, r.$apply();
                    });

                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getMiaoShaMore: function(e, t) {
        var a = _wepy2.default.$instance, r = {};
        http.post(_addr2.default.GetFlashDeal, {
            appId: a.globalData.appid,
            openId: a.globalData.userInfo.OpenId,
            flashDealIds: e
        }).then(function(a) {
            if (a.isok && a.dataObj) {
                r = a.dataObj[0], r.more = !1, r.isList = !0, r.description = r.description.split("\n"), 
                r.description = r.description.length && r.description.map(function(e) {
                    return e.substring(2);
                }) || [];
                for (var n = 0, o = r.Item.length; n < o; n++) r.Item[n].FlashDealItemStock > 0 ? r.Item[n].saleRate = Number(r.Item[n].Sale).div(Number(r.Item[n].FlashDealItemStock).add(Number(r.Item[n].Sale))).mul(100).toFixed(0) : r.Item[n].saleRate = 100;
                r.useOldOrNew = !!r.Item[0].FlashDealItemStock, t.vm = r, t.$apply(), core.miaoShaCountDown(r, t, e);
            }
        });
    },
    miaoShaTip: function(e, t, a, r, n, o) {
        var s = _wepy2.default.$instance;
        http.post(_addr2.default.AddFlashSubscribe, {
            appId: s.globalData.appid,
            openId: s.globalData.userInfo.OpenId,
            flashItemId: e,
            goodId: t
        }).then(function(t) {
            t.isok && (tools.ShowToast("已设模板消息请您留意微信消息", a), a.miaoShaCutDown && clearInterval(a.miaoShaCutDown), 
            a.miaoDeal && clearInterval(a.miaoDeal), 1 == Number(r) ? core.getMiaoSha(o, n, a) : 2 == Number(r) ? core.getMiaoShaMore(n, a) : core.miaoShaDeail(e, a));
        });
    },
    miaoShaCountDown: function() {
        function e(e, a, r, n) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a, r, n) {
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, core.calMiaoShaCut(t, a, r, n);

                  case 2:
                    a.miaoShaCutDown = setInterval(function(e) {
                        core.calMiaoShaCut(t, a, r, n);
                    }, 1e3);

                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    calMiaoShaCut: function(e, t, a, r) {
        var n = !1, o = [], s = _utils.timeTools.getTimeSpan(e.Begin), i = _utils.timeTools.getTimeSpan(e.End);
        s > 0 ? (n = !0, o = _utils.timeTools.formatMillisecond(s), o.push(n)) : (n = !1, 
        i <= 0 ? (o = [ "00", "00", "00", "00" ], clearInterval(t.miaoShaCutDown), r ? core.getMiaoSha(r, a, t) : core.getMiaoShaMore(a, t)) : o = _utils.timeTools.formatMillisecond(i), 
        o.push(n)), e.countDownArray = o, t.vm = e, t.$apply();
    },
    goodRequest: function() {
        function e(e, a, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a, r) {
            var n, o, s, i, u, c;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (n = [], a.items.forEach(function(e, t) {
                        n.push(e.id);
                    }), !(n.length > 0)) {
                        e.next = 15;
                        break;
                    }
                    if (o = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(o.globalData, "vipInfo", ""), 
                    e.t0) {
                        e.next = 9;
                        break;
                    }
                    return e.next = 8, core.getVipInfo();

                  case 8:
                    e.t0 = e.sent;

                  case 9:
                    return s = e.t0, i = (0, _lodash2.default)(a, "goodShowType", ""), e.next = 13, 
                    core.getGoodByids(n.join(","), s.levelid, i);

                  case 13:
                    u = e.sent, u && (c = {
                        list: u
                    }, r.vm_com_good[t] = c, r.$apply());

                  case 15:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getGoodsListRequest: function() {
        function e(e, a, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a, r) {
            var n, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!t.ispost && !t.loadall) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return");

                  case 2:
                    if (t.ispost || (t.ispost = !0), "object" === _typeof(t.typeid) && (t.typeid = t.typeid.join(",")), 
                    n = _wepy2.default.$instance, o = n.globalData.aid, e.t0 = (0, _lodash2.default)(n.globalData, "vipInfo", ""), 
                    e.t0) {
                        e.next = 11;
                        break;
                    }
                    return e.next = 10, core.getVipInfo();

                  case 10:
                    e.t0 = e.sent;

                  case 11:
                    s = e.t0, http.get(_addr2.default.GetGoodsList, {
                        aid: o,
                        typeid: t.typeid,
                        search: t.search,
                        exttypes: t.exttypes,
                        pagesize: t.pagesize,
                        pricesort: t.pricesort,
                        pageindex: t.pageindex,
                        isFirstType: t.isFirstType,
                        levelid: (0, _lodash2.default)(s, "levelid", ""),
                        goodShowType: (0, _lodash2.default)(a, "goodShowType", ""),
                        saleCountSort: t.saleCountSort
                    }).then(function(e) {
                        t.ispost = !1, 1 == e.isok && (t.list[t.pageindex] = e.postdata.goodslist, e.postdata.goodslist.length >= t.pagesize ? t.pageindex += 1 : t.loadall = !0, 
                        console.log(t), r.vm_com_goodLst = t, r.$apply());
                    });

                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    goodFifter: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return t = _wepy2.default.$instance.globalData.aid, e.abrupt("return", http.post(_addr2.default.GetExtTypes, {
                        aid: t
                    }));

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    joingroupRequest: function() {
        function e(e, a, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a, r) {
            var n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    n = [], o = _wepy2.default.$instance.globalData.aid, a.items.forEach(function(e, t) {
                        n.push(e.id);
                    }), n.length > 0 && http.post(_addr2.default.GetGroupByIds, {
                        aid: o,
                        ids: n.join(",")
                    }).then(function(e) {
                        if (e) {
                            var a = {};
                            a.list = e.postdata, r.vm_com_group[t] = a, r.$apply();
                        }
                    });

                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    bargain: function() {
        function e(e, a, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a, r) {
            var n, o, s, i;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    n = [], o = _wepy2.default.$instance, s = o.globalData.userInfo, a.items.forEach(function(e, t) {
                        n.push(e.id);
                    }), i = n.join(","), n.length > 0 && http.get(_addr2.default.GetBargainList, {
                        appid: o.globalData.appid,
                        ids: i
                    }).then(function(e) {
                        e.length > 0 && (e.forEach(function(e) {
                            e.startDateStr = e.startDateStr.replace(/-/g, "/"), e.endDateStr = e.endDateStr.replace(/-/g, "/");
                        }), r.vm_com_bargain[t] = e, r.vm_com_user = s, r.$apply(), core.bargainCount(e, r, t));
                    });

                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    bargainCount: function(e, t, a) {
        var r = this;
        t.barCount = setInterval(_asyncToGenerator(regeneratorRuntime.mark(function n() {
            return regeneratorRuntime.wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    return r.next = 2, core.barCountDown(e, t);

                  case 2:
                    t.vm_com_bargain[a] = r.sent, t.$apply();

                  case 4:
                  case "end":
                    return r.stop();
                }
            }, n, r);
        })), 1e3);
    },
    barCountDown: function(e) {
        if (e.length > 0) for (var t = e.length - 1; t >= 0; t--) {
            var a = e[t];
            if (0 == a.RemainNum) a.time = [ "00", "00", "00", "00" ]; else {
                var r = _utils.timeTools.getTimeSpan(a.startDateStr), n = _utils.timeTools.getTimeSpan(a.endDateStr);
                if (r > 0) {
                    var o = _utils.timeTools.formatMillisecond(r);
                    a.time = o;
                } else if (n <= 0) a.time = [ "00", "00", "00", "00" ], a.stateStr = "已失效"; else {
                    var o = _utils.timeTools.formatMillisecond(n);
                    a.time = o, a.stateStr = "进行中";
                }
            }
        }
        return e;
    },
    getEngroupIds: function() {
        function e(e, a, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a, r) {
            var n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    n = [], a.items.forEach(function(e, t) {
                        n.push(e.id);
                    }), o = _wepy2.default.$instance.globalData.aid, n.length > 0 && http.get(_addr2.default.GetEntGroupByIds, {
                        aid: o,
                        ids: n.join(",")
                    }).then(function(e) {
                        if (e.isok) {
                            var a = {
                                list: e.postdata
                            }, n = "vm_com_group2." + t;
                            r.setData(_defineProperty({}, n, a));
                        }
                    });

                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    formRequest: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "aid", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getAid();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (n = e.t0, e.t1 = (0, _lodash2.default)(r.globalData, "userInfo", ""), e.t1) {
                        e.next = 12;
                        break;
                    }
                    return e.next = 11, core.getUserInfo();

                  case 11:
                    e.t1 = e.sent;

                  case 12:
                    return o = e.t1, e.abrupt("return", http.post(_addr2.default.SaveUserForm, {
                        aid: n,
                        uid: o.Id,
                        formdatajson: t,
                        comename: a,
                        storecodeid: (0, _lodash2.default)(r.globalData, "storecodeid", 0)
                    }));

                  case 14:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    submitForm: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n, o, s = this;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (wx.showNavigationBarLoading(), r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "aid", ""), 
                    e.t0) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 6, core.getAid();

                  case 6:
                    e.t0 = e.sent;

                  case 7:
                    if (n = e.t0, e.t1 = (0, _lodash2.default)(r.globalData, "userInfo", ""), e.t1) {
                        e.next = 13;
                        break;
                    }
                    return e.next = 12, core.getUserInfo();

                  case 12:
                    e.t1 = e.sent;

                  case 13:
                    o = e.t1, http.post(_addr2.default.SaveSubscribeForm, {
                        aid: n,
                        uid: o.Id,
                        remark: t.remark,
                        formId: t.formId,
                        buyMode: t.buyMode,
                        formdatajson: t.datajson
                    }).then(function() {
                        var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
                            var n, o;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (!r.isok) {
                                        e.next = 38;
                                        break;
                                    }
                                    if (1 != t.buyMode) {
                                        e.next = 23;
                                        break;
                                    }
                                    if (0 != a.vm.goodInfo.price) {
                                        e.next = 6;
                                        break;
                                    }
                                    return tools.loading("预约成功", "success"), wx.hideNavigationBarLoading(), e.abrupt("return");

                                  case 6:
                                    return n = {
                                        orderid: r.obj.citymorderId,
                                        type: 1
                                    }, e.next = 9, pay.PayOrder(n);

                                  case 9:
                                    if ("" == (o = e.sent) || !o.errMsg.includes("requestPayment:ok")) {
                                        e.next = 17;
                                        break;
                                    }
                                    return tools.loading("预约成功", "success"), e.next = 14, tools.throttle(2e3);

                                  case 14:
                                    tools.goBack(1), e.next = 20;
                                    break;

                                  case 17:
                                    return e.next = 19, pay.deleteLastFormId();

                                  case 19:
                                    tools.loading("取消支付", "none");

                                  case 20:
                                    wx.hideNavigationBarLoading(), e.next = 36;
                                    break;

                                  case 23:
                                    if (2 != t.buyMode) {
                                        e.next = 31;
                                        break;
                                    }
                                    return tools.loading("预约成功", "success"), wx.hideNavigationBarLoading(), e.next = 28, 
                                    tools.throttle(2e3);

                                  case 28:
                                    tools.goBack(1), e.next = 36;
                                    break;

                                  case 31:
                                    return tools.loading("预约成功", "success"), wx.hideNavigationBarLoading(), e.next = 35, 
                                    tools.throttle(2e3);

                                  case 35:
                                    tools.goBack(1);

                                  case 36:
                                    e.next = 40;
                                    break;

                                  case 38:
                                    tools.showModal(r.msg, !1), wx.hideNavigationBarLoading();

                                  case 40:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, s);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }());

                  case 15:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    subMore: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = t.vm, !a.ispost && !a.loadall) {
                        e.next = 3;
                        break;
                    }
                    return e.abrupt("return");

                  case 3:
                    if (a.ispost || (a.ispost = !0), r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "aid", ""), 
                    e.t0) {
                        e.next = 10;
                        break;
                    }
                    return e.next = 9, core.getAid();

                  case 9:
                    e.t0 = e.sent;

                  case 10:
                    if (n = e.t0, e.t1 = (0, _lodash2.default)(r.globalData, "userInfo", ""), e.t1) {
                        e.next = 16;
                        break;
                    }
                    return e.next = 15, core.getUserInfo();

                  case 15:
                    e.t1 = e.sent;

                  case 16:
                    o = e.t1, http.get(_addr2.default.GetSubscribeFormDetail, {
                        aid: n,
                        uid: o.Id,
                        pageindex: a.pageindex,
                        pagesize: a.pagesize
                    }).then(function(e) {
                        if (a.ispost = !1, e.isok) {
                            var r = e.list.length;
                            r >= a.pagesize ? a.pageindex += 1 : a.loadall = !0, r > 0 && (a.list = [].concat(_toConsumableArray(a.list), _toConsumableArray(e.list)));
                            for (var n = 0; n < r; n++) {
                                var o = e.list[n];
                                o.formdatajson = (o.formdatajson || "").split(","), o.remark = JSON.parse(o.remark);
                                for (var s = 0, i = o.formdatajson.length; s < i; s++) {
                                    if (-1 == o.formdatajson[s].search(":")) {
                                        o.formdatajson.find(function(e) {
                                            return "地址" == e[0];
                                        })[1] += o.formdatajson[s];
                                    }
                                    o.formdatajson[s] = o.formdatajson[s].split(":");
                                }
                                for (var u = 0, c = o.formdatajson.length; u < c; u++) {
                                    if ("预约时间" == o.formdatajson[u][0]) {
                                        var d = o.formdatajson[u][1];
                                        o.effective = _utils.timeTools.getTimeSpan(_utils.timeTools.ChangeDateFormat(d));
                                        break;
                                    }
                                    o.effective = 1;
                                }
                            }
                            t.vm = a, t.$apply();
                        }
                    });

                  case 18:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getNewsLst: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance.globalData.aid, !t.ispost && !t.loadall) {
                        e.next = 3;
                        break;
                    }
                    return e.abrupt("return");

                  case 3:
                    t.ispost || (t.ispost = !1), http.get(_addr2.default.GetNewsList, {
                        aid: r,
                        typeid: t.ids,
                        pageIndex: t.pageindex,
                        pageSize: t.pagesize,
                        keyMsg: t.search
                    }).then(function(e) {
                        t.ispost = !1, e.isok && (e.data.forEach(function(e, t) {
                            e.addtime = tools.ChangeDateFormat(e.addtime);
                        }), e.data.length >= t.pagesize ? t.pageindex += 1 : t.loadall = !0, e.data.length > 0 && (t.list = [].concat(_toConsumableArray(t.list), _toConsumableArray(e.data))), 
                        a.vm_com_newlst = t, a.$apply());
                    });

                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    allNews: function() {
        function e(e, a, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a, r) {
            var n, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    n = {}, o = a.typeid, s = _wepy2.default.$instance.globalData.aid, http.get(_addr2.default.GetNewsList, {
                        aid: s,
                        typeid: o,
                        liststyle: a.liststyle
                    }).then(function(e) {
                        e && e.isok && (e.allcount > e.data.length ? n.showmore = !0 : n.showmore = !1, 
                        n.list = e.data, "pick" == a.listmode && 0 == a.list.length && a.num > 0 && (n.list = e.data.slice(0, a.num)), 
                        n.list.forEach(function(e, t) {
                            e.addtime = tools.ChangeDateFormat(e.addtime), e.content = [];
                        }), r.vm_com_news[t] = n, r.$apply());
                    });

                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    chooseNews: function() {
        function e(e, a, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a, r) {
            var n, o, s, i, u, c, d;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    for (n = [], o = [], s = Number(a.num), i = a.list.length > s, u = 0, c = a.list.length; u < c; u++) i ? u < s && n.push(a.list[u].id) : n.push(a.list[u].id), 
                    o.push(a.list[u].id);
                    d = n.join(","), n.length > 0 && http.get(_addr2.default.GetNewsInfoByids, {
                        ids: d,
                        liststyle: a.liststyle
                    }).then(function(e) {
                        if (e && e.isok && e.msg.length > 0) {
                            var a = {
                                ids: o,
                                list: e.msg,
                                showmore: i
                            };
                            a.list.forEach(function(e, t) {
                                e.addtime = tools.ChangeDateFormat(e.addtime), e.content = [];
                            }), r.vm_com_news[t] = a, r.$apply();
                        }
                    });

                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getNewInfo: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n, o = this;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "storeConfig", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getStoreConfig();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    n = e.t0, http.get(_addr2.default.GetNewsInfo, {
                        id: t,
                        appid: (0, _lodash2.default)(r.globalData, "appid", ""),
                        openId: (0, _lodash2.default)(r.globalData.userInfo, "OpenId", ""),
                        version: 2
                    }).then(function() {
                        var e = _asyncToGenerator(regeneratorRuntime.mark(function e(s) {
                            var i;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (!s.isok) {
                                        e.next = 23;
                                        break;
                                    }
                                    i = s.msg, i.imgurl_fmt = i.img_fmt, i.slideimgs_fmt && "" != i.slideimgs && (i.slideimgs_fmt = i.slideimgs_fmt.split("|"), 
                                    i.slideimgs = i.slideimgs.split(",")), i.payinfo && (0 == Number(i.payinfo.PayAmount) && (i.ispaid = !0), 
                                    i.playContent = !(!i.ispay || 0 != i.ispaid), i.payinfo.PayAmount = i.payinfo.PayAmount.div(100).toFixed(2)), 
                                    i.playVideo = !1, i.playAudio = !1, i.isShowBtn = !1, i.payMask = !1, i.selIndex = 0, 
                                    i.userInfo = r.globalData.userInfo, i.valuemoney = r.globalData.vipInfo.valueMoney, 
                                    i.RecommendedItem && a.getHotList(i.RecommendedItem), i.addtime = tools.ChangeDateFormat(i.addtime), 
                                    i.content_fmt = tools.richChange(i.content, a), i.wxServer = n.storeInfo.funJoinModel.wxServer, 
                                    i.suggestSwitch = n.storeInfo.funJoinModel.RelatedSuggestionSwitch, a.vm = i, a.$apply(), 
                                    tools.setPageTitle(i.title), core.UpdateNewsPV(t, a), e.next = 26;
                                    break;

                                  case 23:
                                    return e.next = 25, tools.showModal(s.msg || "页面不存在", !1);

                                  case 25:
                                    tools.goBack(1);

                                  case 26:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, o);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }());

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    addShopCar: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.abrupt("return", http.post(_addr2.default.addGoodsCarData, {
                        qty: t.count,
                        goodid: t.pid,
                        isgroup: t.isgroup,
                        SpecInfo: t.SpecInfo,
                        openid: r.OpenId,
                        attrSpacStr: t.specId,
                        newCartRecord: t.record,
                        appId: a.globalData.appid,
                        SpecImg: (0, _lodash2.default)(t, "img", ""),
                        flashItemId: t.flashItemId || 0
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    shopCarList: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (r = e.t0, e.t1 = (0, _lodash2.default)(a.globalData, "vipInfo", ""), e.t1) {
                        e.next = 12;
                        break;
                    }
                    return e.next = 11, core.getVipInfo();

                  case 11:
                    e.t1 = e.sent;

                  case 12:
                    n = e.t1, http.get(_addr2.default.getGoodsCarData_new, {
                        appId: a.globalData.appid,
                        openid: r.OpenId,
                        levelid: n.levelid || 0
                    }).then(function(e) {
                        if (1 == e.isok) {
                            var a = Object.keys(e.postdata).length, r = [];
                            if (a) for (var n = 0; n < a; n++) {
                                var o = e.postdata[n], s = o.goodsMsg;
                                if (null != s && -1 != o.State) {
                                    if (s.pickspecification) {
                                        s.pickspecification = JSON.parse(s.pickspecification);
                                        for (var i = 0, u = s.pickspecification.length; i < u; i++) for (var c = 0, d = s.pickspecification[i].items.length; c < d; c++) s.pickspecification[i].items[c].sel = !1;
                                    }
                                    if (s.GASDetailList.length > 0) for (var l = 0, p = s.GASDetailList.length; l < p; l++) {
                                        var f = s.GASDetailList[l];
                                        if (f.id == o.SpecIds) {
                                            o.discountP = null != s.LimitDiscountDetail && 1 == s.LimitDiscountDetail.Status && f.LimitDiscountPrice > 0 && f.LimitDiscountPrice <= f.discountPrice ? f.LimitDiscountPrice.toFixed(2) : f.discountPrice.toFixed(2), 
                                            o.limitDiscountP = s.LimitDiscountPrice, o.isShowLimitP = null != s.LimitDiscountDetail && !!(1 == s.LimitDiscountDetail.Status && f.LimitDiscountPrice > 0 && f.LimitDiscountPrice <= f.discountPrice), 
                                            o.limitStatus = null != s.LimitDiscountDetail ? s.LimitDiscountDetail.Status : 0;
                                            break;
                                        }
                                    } else o.discountP = null != s.LimitDiscountDetail && 1 == s.LimitDiscountDetail.Status && s.LimitDiscountPrice > 0 && s.LimitDiscountPrice <= s.discountPrice ? s.LimitDiscountPrice.toFixed(2) : s.discountPrice.toFixed(2), 
                                    o.limitDiscountP = s.LimitDiscountPrice, o.isShowLimitP = null != s.LimitDiscountDetail && !!(1 == s.LimitDiscountDetail.Status && s.LimitDiscountPrice > 0 && s.LimitDiscountPrice <= s.discountPrice), 
                                    o.limitStatus = null != s.LimitDiscountDetail ? s.LimitDiscountDetail.Status : 0;
                                    o.style = 0, r.push(o);
                                }
                            } else r = [];
                            console.log("validArr", r), t.vm.list = r, t.$apply();
                        } else tools.showModal(e.msg, !1);
                    });

                  case 14:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    update: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.abrupt("return", http.postJson(_addr2.default.updateOrDeleteGoodsCarData, {
                        openid: r.OpenId,
                        appid: a.globalData.appid,
                        function: t.date,
                        goodsCarModel: t.model
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getStoreConfig: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, a, r, n, o, s, i, u;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = _wepy2.default.$instance, a = !1, e.t0 = (0, _lodash2.default)(t.globalData.pages, "pages", ""), 
                    e.t0) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 6, core.getPageSetting();

                  case 6:
                    e.t0 = e.sent;

                  case 7:
                    r = e.t0, n = 0, o = r.length;

                  case 9:
                    if (!(n < o)) {
                        e.next = 20;
                        break;
                    }
                    if (!(s = r[n].coms.find(function(e) {
                        return e.type.includes("contactShopkeeper");
                    }))) {
                        e.next = 16;
                        break;
                    }
                    return s.openService && (a = !!s.serverType.includes("wxServer")), e.abrupt("break", 20);

                  case 16:
                    a = !1;

                  case 17:
                    n++, e.next = 9;
                    break;

                  case 20:
                    if (!(i = (0, _lodash2.default)(t.globalData, "storeConfig", ""))) {
                        e.next = 25;
                        break;
                    }
                    return e.abrupt("return", i);

                  case 25:
                    return e.next = 27, http.get(_addr2.default.GetStoreInfo, {
                        appId: t.globalData.appid
                    });

                  case 27:
                    if (u = e.sent, !u.isok) {
                        e.next = 32;
                        break;
                    }
                    return u.postData.storeInfo.funJoinModel.wxServer = a, t.globalData.storeConfig = u.postData, 
                    e.abrupt("return", u.postData);

                  case 32:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    addMinOrder: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "aid", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getAid();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (r = e.t0, e.t1 = (0, _lodash2.default)(a.globalData, "userInfo", ""), e.t1) {
                        e.next = 12;
                        break;
                    }
                    return e.next = 11, core.getUserInfo();

                  case 11:
                    e.t1 = e.sent;

                  case 12:
                    return n = e.t1, e.abrupt("return", http.post(_addr2.default.addMiniappGoodsOrder, {
                        aid: r,
                        appId: a.globalData.appid,
                        openid: n.OpenId,
                        goodCarIdStr: t.carId,
                        wxaddressjson: t.address,
                        orderjson: t.order,
                        buyMode: t.buyMode,
                        getWay: t.getWay,
                        isgroup: t.isgroup,
                        groupid: t.groupid,
                        goodtype: t.goodtype,
                        couponlogid: t.couponlogid,
                        zqstoreName: (0, _lodash2.default)(t, "storename", ""),
                        salesManRecordId: (0, _lodash2.default)(t, "salesManRecordId", 0),
                        storecodeid: (0, _lodash2.default)(a.globalData, "storecodeid", 0),
                        discountType: (0, _lodash2.default)(t, "discountType", 0),
                        flashItemID: (0, _lodash2.default)(t, "flashDealId", ""),
                        zqStoreId: (0, _lodash2.default)(t, "zqStoreId", "")
                    }));

                  case 14:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    orderDtl: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n, o, s, i, u, c;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return n = e.t0, e.next = 9, http.get(_addr2.default.getMiniappGoodsOrderById, {
                        appid: r.globalData.appid,
                        openid: n.OpenId,
                        orderId: t
                    });

                  case 9:
                    if (o = e.sent, 1 == o.isok) {
                        for (s = o.postdata, i = 0, u = s.goodOrderDtl.length; i < u; i++) c = s.goodOrderDtl[i], 
                        c.ImgUrl = c.goodImgUrl, c.Introduction = c.goodname, c.SpecInfo = c.orderDtl.SpecInfo, 
                        c.discountPrice = c.orderDtl.priceStr, c.oldPrice = c.orderDtl.originalPriceStr, 
                        c.Count = c.orderDtl.Count, c.type = "good";
                        a.vm_order = s, a.$apply();
                    }

                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    minOlt: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = t.vm, r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 6, core.getUserInfo();

                  case 6:
                    e.t0 = e.sent;

                  case 7:
                    if (n = e.t0, !a.ispost && !a.loadall) {
                        e.next = 10;
                        break;
                    }
                    return e.abrupt("return");

                  case 10:
                    a.ispost || (a.ispost = !0), http.get(_addr2.default.getMiniappGoodsOrder, {
                        appId: r.globalData.appid,
                        openid: n.OpenId,
                        State: a.state,
                        pageindex: a.pageindex,
                        pagesize: a.pagesize
                    }).then(function(e) {
                        a.ispost = !1, e.isok && (e.postdata.length >= a.pagesize ? a.pageindex += 1 : a.loadall = !0, 
                        e.postdata.length > 0 && (a.list = [].concat(_toConsumableArray(a.list), _toConsumableArray(e.postdata))), 
                        t.vm.list = a.list, t.vm.pageindex = a.pageindex, t.vm.ispost = a.ispost, t.vm.loadall = a.loadall, 
                        t.condition = a.state, t.$apply());
                    });

                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    oltState: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.abrupt("return", http.post(_addr2.default.updateMiniappGoodsOrderState, {
                        appid: a.globalData.appid,
                        openid: r.OpenId,
                        orderId: t.orderId,
                        State: t.state
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    bargainDlt: function() {
        function e(e, a, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a, r) {
            var n, o, s, i = this;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (n = {}, o = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(o.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 6, core.getUserInfo();

                  case 6:
                    e.t0 = e.sent;

                  case 7:
                    s = e.t0, http.get(_addr2.default.GetBargain, {
                        UserId: s.Id,
                        appid: o.globalData.appid,
                        Id: t
                    }).then(function() {
                        var e = _asyncToGenerator(regeneratorRuntime.mark(function e(o) {
                            var u, c, d, l;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (!o.isok) {
                                        e.next = 37;
                                        break;
                                    }
                                    if (n.obj = o.obj, !n.obj.stateStr.includes("已失效")) {
                                        e.next = 7;
                                        break;
                                    }
                                    return e.next = 5, tools.showModal("该砍价已失效", !1);

                                  case 5:
                                    return tools.goBack(1), e.abrupt("return");

                                  case 7:
                                    if (n.obj.startDateStr && n.obj.endDateStr && (n.obj.startDateStr = n.obj.startDateStr.replace(/-/g, "/"), 
                                    n.obj.startDateStr = n.obj.endDateStr.replace(/-/g, "/")), n.num = 4, n.userInfo = s, 
                                    n.haveCreatOrder = o.haveCreatOrder, a.vm = n, a.$apply(), !r.length) {
                                        e.next = 21;
                                        break;
                                    }
                                    n.buid = r[0], u = n.obj.BargainUserList.find(function(e) {
                                        return e.Id == n.buid;
                                    }), u && (n.bargainUImg = u.ShopLogoUrl, n.bargainUname = u.ShopName, 8 != u.State && (n.currentPrice = u.CurrentPriceStr)), 
                                    core.cutPrice(n.buid, a, 1, t, r), Number(n.currentPrice) == Number(n.obj.FloorPriceStr) ? n.precent = "100%" : n.precent = core.compBarPrice(n.obj.OriginalPriceStr, n.currentPrice), 
                                    e.next = 34;
                                    break;

                                  case 21:
                                    for (n.bargainUImg = s.HeadImgUrl, n.bargainUname = s.NickName, c = 0, d = n.obj.BargainUserList.length; c < d; c++) s.Id == n.obj.BargainUserList[c].UserId && 8 != n.obj.BargainUserList[c].State && (n.currentPrice = n.obj.BargainUserList[c].CurrentPriceStr);
                                    if (Number(n.currentPrice) == Number(n.obj.FloorPriceStr) ? n.precent = "100" : n.precent = core.compBarPrice(n.obj.OriginalPriceStr, n.currentPrice), 
                                    !n.haveCreatOrder) {
                                        e.next = 33;
                                        break;
                                    }
                                    return n.isFriend = 0, e.next = 29, tools.showModal("您已经下过单了，请进入砍价单查看详情!");

                                  case 29:
                                    l = e.sent, l.confirm && a.$navigate("/pages/bargain/bargainList"), e.next = 34;
                                    break;

                                  case 33:
                                    core.addBargain(t, a, r);

                                  case 34:
                                    a.barCutDown = setInterval(_asyncToGenerator(regeneratorRuntime.mark(function e() {
                                        return regeneratorRuntime.wrap(function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                              case 0:
                                                return e.next = 2, tools.TimeShow(n.obj.startDateStr, n.obj.startDateStr);

                                              case 2:
                                                a.vm.time = e.sent, a.vm.time = a.vm.time.split(":"), a.$apply();

                                              case 5:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e, i);
                                    })), 1e3), e.next = 40;
                                    break;

                                  case 37:
                                    return e.next = 39, tools.showModal(o.msg, !1);

                                  case 39:
                                    tools.goBack(1);

                                  case 40:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, i);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }());

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    addBargain: function() {
        function e(e, a, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a, r) {
            var n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (n = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(n.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    o = e.t0, http.post(_addr2.default.AddBargainUser, {
                        Id: t,
                        UserId: o.Id,
                        UserName: o.NickName
                    }).then(function(e) {
                        e.isok ? (core.cutPrice(e.buid, a, 0, t, r), a.vm.buid = e.buid, a.$apply()) : tools.showModal(e.msg, !1);
                    });

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    cutPrice: function() {
        function e(e, a, r, n, o) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a, r, n, o) {
            var s, i, u;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (s = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(s.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    i = e.t0, u = a.vm, http.post(_addr2.default.cutprice, {
                        UserId: i.Id,
                        buid: t
                    }).then(function(e) {
                        var t = {};
                        switch (e.code) {
                          case -1:
                            u.isFriend = r, tools.showModal(e.msg, !1);
                            break;

                          case 0:
                            0 == e.obj ? t.content = "您已砍过,自砍倒计时1分钟！" : (t.timeArray = JSON.stringify(e.obj).split("."), 
                            1 == t.timeArray.length ? t.timeArray[1] = 0 : t.timeArray[1] = parseInt(.6 * parseInt(t.timeArray[1])), 
                            t.content = "您已砍过," + t.timeArray[0] + "小时" + t.timeArray[1] + "分钟之后才能继续自砍"), tools.showModal(t.content, !1), 
                            u.isFriend = 0, u.barShow = !1;
                            break;

                          case 1:
                            tools.showModal(e.msg, !1), u.isFriend = 1;
                            break;

                          case 2:
                            i.NickName == e.BargainedUserName ? u.isFriend = 0 : u.isFriend = 1, u.currentPrice = e.price, 
                            u.precent = core.compBarPrice(u.obj.OriginalPriceStr, e.price), u.BargainedUserName = e.BargainedUserName, 
                            u.barShow = !0, u.cutprice = e.cutprice, a.vm = u, a.bargainShow = !0;
                        }
                        a.vm = u, a.$apply();
                    });

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    compBarPrice: function(e, t) {
        var a = Number(e).sub(Number(t)), r = Number(e).sub(a), n = 100 - Number(r).div(Number(e)).mul(100);
        return parseFloat(n).toFixed(2);
    },
    bargainList: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (r = e.t0, n = t.vm, !n.ispost && !n.loadall) {
                        e.next = 10;
                        break;
                    }
                    return e.abrupt("return");

                  case 10:
                    n.ispost || (n.ispost = !0), http.post(_addr2.default.GetBargainUserList, {
                        appId: a.globalData.appid,
                        UserId: r.Id,
                        pageIndex: n.pageindex,
                        pageSize: n.pagesize,
                        State: n.state
                    }).then(function(e) {
                        if (n.ispost = !1, e.isok) {
                            for (var a = 0, r = e.obj.length; a < r; a++) "" == e.obj[a].GoodsFreightStr && (e.obj[a].GoodsFreightStr = "0.00"), 
                            e.obj[a].CreateDateStr = e.obj[a].CreateDateStr.split(" "), e.obj[a].CreateOrderTimeStr = e.obj[a].CreateOrderTimeStr.split(" ");
                            e.obj.length >= n.pagesize ? n.pageindex += 1 : n.loadall = !0, e.obj.length > 0 && (n.list = [].concat(_toConsumableArray(n.list), _toConsumableArray(e.obj))), 
                            t.vm = n, t.$apply();
                        }
                    });

                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    barShare: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, http.post(_addr2.default.GetBargainRecordList, {
                        buid: t,
                        pageIndex: 1,
                        pageSize: 100
                    });

                  case 2:
                    if (r = e.sent, r.isok) {
                        for (n = r.obj, o = 0, s = n.length; o < s; o++) n[o].CreateDate = tools.ChangeDateFormat(n[o].CreateDate);
                        a.vm.HelpCut = n, a.$apply();
                    } else tools.showModal(r.msg, !1);

                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getAddress: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, a, r, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(t.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return a = e.t0, e.next = 9, http.get(_addr2.default.GetUserWxAddress, {
                        appid: t.globalData.appid,
                        userid: a.Id
                    });

                  case 9:
                    if (r = e.sent, !(n = r.obj.WxAddress.WxAddress)) {
                        e.next = 16;
                        break;
                    }
                    return n = JSON.parse(n), e.abrupt("return", n);

                  case 16:
                    return e.abrupt("return", "");

                  case 17:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    addBarOrder: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.abrupt("return", http.post(_addr2.default.AddBargainOrder, {
                        AppId: a.globalData.appid,
                        UserId: r.Id,
                        buid: t.buid,
                        address: JSON.stringify(t.address),
                        Remark: t.Remark,
                        PayType: t.PayType,
                        getWay: t.address.modeId || 0,
                        storeName: t.address.name || ""
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getBarPrice: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n, o = this;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    n = e.t0, http.post(_addr2.default.GetBargainUser, {
                        buid: t,
                        userid: n.Id
                    }).then(function() {
                        var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
                            var n, s;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (!r.isok) {
                                        e.next = 7;
                                        break;
                                    }
                                    n = {
                                        list: [],
                                        totalCount: 1,
                                        fee: r.obj.Freight,
                                        buid: t,
                                        totalPrice: r.obj.curPrcie,
                                        originalPrice: r.obj.curPrcie
                                    }, n.list.push({
                                        ImgUrl: r.obj.ImgUrl,
                                        oldPrice: "",
                                        SpecInfo: "",
                                        Introduction: r.obj.BName,
                                        discount: 100,
                                        discountPrice: r.obj.curPrcie,
                                        Count: 1
                                    }), a.$preload("vm_order", n), a.$navigate("/pages/bargain/bargainOrder"), e.next = 11;
                                    break;

                                  case 7:
                                    return e.next = 9, tools.showModal("您已经下过单了，请进入砍价单查看详情!");

                                  case 9:
                                    s = e.sent, s.confirm && a.$navigate("/pages/bargain/bargainList");

                                  case 11:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, o);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }());

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getShare: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    n = e.t0, tools.showLoading(), http.post(_addr2.default.GetShareCutPrice, {
                        appId: r.globalData.appid,
                        UserId: n.Id,
                        buid: t.buid,
                        bId: t.bId
                    }).then(function(e) {
                        e.isok ? (a.vm.qrcode = e.qrcode, a.$apply(), canvas.barCanvas(e.qrcode, a)) : (tools.showModal(e.msg, !1), 
                        wx.hideLoading());
                    });

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getBarOlt: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return n = e.t0, e.next = 9, http.post(_addr2.default.GetOrderDetail, {
                        buid: t,
                        AppId: r.globalData.appid,
                        UserId: n.Id
                    });

                  case 9:
                    o = e.sent, s = o.obj.OrderDetail, e.t1 = s.State, e.next = 3 === e.t1 ? 14 : 5 === e.t1 ? 16 : 6 === e.t1 ? 18 : 7 === e.t1 ? 20 : 8 === e.t1 ? 22 : 24;
                    break;

                  case 14:
                    return s.State = -4, e.abrupt("break", 24);

                  case 16:
                    return s.State = 0, e.abrupt("break", 24);

                  case 18:
                    return s.State = 2, e.abrupt("break", 24);

                  case 20:
                    return s.State = 1, e.abrupt("break", 24);

                  case 22:
                    return s.State = 3, e.abrupt("break", 24);

                  case 24:
                    s.GetWayStr = 0 == s.GetWay ? "商家配送" : 1 == s.GetWay ? "到店自取" : "到店消费", s.type = 1 == s.GetWay || 2 == s.GetWay ? "bGood" : "", 
                    s.GetWay = 0 == s.GetWay ? 1 : 1 == s.GetWay ? 0 : 6, s.QtyCount = 1, s.BuyMode = s.PayType, 
                    s.OrderNum = s.OrderId, s.TablesNo = s.OrderId, s.PayDateStr = s.BuyTimeStr, s.Address = s.AddressDetail, 
                    s.OrderId = s.CityMordersId, s.Message = s.Remark || null, s.AccepterTelePhone = s.TelNumber, 
                    s.AccepterName = s.AddressUserName, s.OnlyGoodsMoney = s.CurrentPriceStr, s.CreateDateStr = s.CreateOrderTimeStr, 
                    s.BuyPriceStr = s.PayAmount, s.DistributeDateStr = tools.ChangeDateFormat(s.SendGoodsTime), 
                    s.AcceptDateStr = tools.ChangeDateFormat(s.ConfirmReceiveGoodsTime), a.vm_order.freightPrice = parseFloat(Number(s.FreightFee).div(100)).toFixed(2), 
                    a.vm_order.goodOrder = s, a.vm_order.goodOrderDtl = [], a.vm_order.stateRemark = s.StateStr, 
                    a.vm_order.goodOrderDtl.push({
                        ImgUrl: s.ImgUrl,
                        Introduction: s.BName,
                        discountPrice: s.CurrentPriceStr,
                        discount: 100,
                        Count: 1
                    }), a.$apply();

                  case 48:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    confirmBar: function() {
        function e(e, a, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a, r) {
            var n, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (n = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(n.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return o = e.t0, e.next = 9, http.post(_addr2.default.ConfirmReceive, {
                        buid: t,
                        userid: o.Id,
                        appId: n.globalData.appid
                    });

                  case 9:
                    if (s = e.sent, !s.isok) {
                        e.next = 22;
                        break;
                    }
                    if (0 != r) {
                        e.next = 17;
                        break;
                    }
                    return a.vm = tools.resetArray(a.vm), e.next = 15, core.bargainList(a);

                  case 15:
                    e.next = 19;
                    break;

                  case 17:
                    return e.next = 19, core.getBarOlt(t, a);

                  case 19:
                    tools.loading("收货成功", "success"), e.next = 23;
                    break;

                  case 22:
                    tools.showModal(s.msg, !1);

                  case 23:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    updateWxCard: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    r = e.t0, http.post(_addr2.default.UpdateWxCard, {
                        appid: a.globalData.appid,
                        UserId: r.Id,
                        type: 2
                    }).then(function(e) {
                        e.msg.includes("还未生成会员卡(请到后台设置同步微信会员卡)") || core.getWxCard(r.Id, t);
                    });

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getWxCard: function(e, t) {
        var a = _wepy2.default.$instance;
        http.get(_addr2.default.GetWxCardCode, {
            appid: a.globalData.appid,
            UserId: e,
            type: 2
        }).then(function(e) {
            var a = !1;
            a = !!e.isok && null == e.obj, t.vm.wxCard = a, t.$apply();
        });
    },
    getCardSign: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, a, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(t.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return a = e.t0, e.abrupt("return", http.get(_addr2.default.GetCardSign, {
                        appid: t.globalData.appid,
                        UserId: a.Id,
                        type: 2,
                        cardType: r,
                        cardId: n,
                        fuwuHaoName: o
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    saveWxCard: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    n = e.t0, http.post(_addr2.default.SaveWxCardCode, {
                        appid: r.globalData.appid,
                        UserId: n.Id,
                        code: t,
                        type: 2
                    }).then(function(e) {
                        e.isok && core.updateWxCard(a);
                    });

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    UpdateCouponWxCode: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, a, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(t.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return a = e.t0, e.abrupt("return", http.get(_addr2.default.UpdateCouponWxCode, {
                        appid: t.globalData.appid,
                        UserId: a.Id,
                        couponlogId: r,
                        code: n
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    SetWxCouponsUnavailable: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.abrupt("return", http.get(_addr2.default.SetWxCouponsUnavailable, {
                        appid: a.globalData.appid,
                        UserId: r.Id,
                        couponlogId: t
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getPrice: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, a, r, n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return t = _wepy2.default.$instance, e.next = 3, http.get(_addr2.default.getSaveMoneySetList, {
                        appid: t.globalData.appid
                    });

                  case 3:
                    if (a = e.sent, !a.isok) {
                        e.next = 10;
                        break;
                    }
                    for (r = a.saveMoneySetList, n = 0, o = r.length; n < o; n++) r[n].sel = !1;
                    return e.abrupt("return", r);

                  case 10:
                    return e.abrupt("return", "");

                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getSaveList: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.next = 9, core.getPrice();

                  case 9:
                    n = e.sent, t.vm_save.price = n, t.vm_save.user = r, t.$apply();

                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    addSavePrice: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.abrupt("return", http.post(_addr2.default.addSaveMoneySet, {
                        appid: a.globalData.appid,
                        openid: r.OpenId,
                        saveMoneySetId: t
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getMoneyRec: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, r = t.vm_record, !r.ispost && !r.loadall) {
                        e.next = 4;
                        break;
                    }
                    return e.abrupt("return");

                  case 4:
                    if (r.ispost || (r.ispost = !0), e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 10;
                        break;
                    }
                    return e.next = 9, core.getUserInfo();

                  case 9:
                    e.t0 = e.sent;

                  case 10:
                    return n = e.t0, tools.showLoading(), e.next = 14, http.post(_addr2.default.GetPayLogList, {
                        appid: a.globalData.appid,
                        openid: n.OpenId,
                        pageindex: r.pageindex,
                        pagesize: r.pagesize
                    });

                  case 14:
                    o = e.sent, o.isok ? (r.ispost = !1, r.list[r.pageindex] = o.dataObj, t.vm_record = r, 
                    o.dataObj.length >= r.pagesize ? r.pageindex += 1 : r.loadall = !0, t.$apply()) : tools.showModal(o.Msg, !1), 
                    wx.hideLoading();

                  case 17:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    initGroupInfo: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n, o, s, i, u;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "storeConfig", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getStoreConfig();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (n = e.t0, t) {
                        e.next = 13;
                        break;
                    }
                    return e.next = 10, tools.showModal("团购不存在！", !1);

                  case 10:
                    return e.next = 12, tools.goBack(1);

                  case 12:
                    return e.abrupt("return");

                  case 13:
                    return e.next = 15, core.groupInfo(t);

                  case 15:
                    if (o = e.sent, o.isok) {
                        e.next = 22;
                        break;
                    }
                    return e.next = 19, tools.showModal(o.msg, !1);

                  case 19:
                    return e.next = 21, tools.goBack(1);

                  case 21:
                    return e.abrupt("return");

                  case 22:
                    for (s = o.groupdetail, s.slideimgs = [], s.slideimgs_fmt = [], i = 0, u = s.ImgList.length; i < u; i++) s.slideimgs_fmt.push(s.ImgList[i].thumbnail), 
                    s.slideimgs.push(s.ImgList[i].filepath);
                    s.GroupUserList && s.GroupUserList.length > 0 && (s.GroupUserList = s.GroupUserList.slice(0, 5)), 
                    s.GroupSponsorList && s.GroupSponsorList.length > 0 && (s.GroupSponsorList = s.GroupSponsorList.slice(0, 2)), 
                    s.content_fmt = tools.richChange(s.Description, a), s.ValidDateStart = s.ValidDateStart.replace(/-/g, "/"), 
                    s.ValidDateEnd = s.ValidDateEnd.replace(/-/g, "/"), s.imswitch = n.storeInfo.funJoinModel.imSwitch, 
                    a.vm_group = s, a.$apply();

                  case 34:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    groupTime: function(e, t) {
        var a = 0, r = "00:00:00", n = t.replace(/-/g, "/"), o = e.replace(/-/g, "/"), s = [ "days", "hours", "min", "seconds" ], i = new Date(o) - new Date(), u = "";
        if (i > 0) s = _utils.timeTools.getRemainTimeQueue(i), u = "距离开始", a = -1; else {
            var c = new Date(n) - new Date();
            if (c <= 0) return u = "已结束", {
                timeInter: "00:00:00",
                fromTheEnd_txt: u,
                groupstate: 0
            };
            s = _utils.timeTools.getRemainTimeQueue(c), u = "距离结束", a = 1;
        }
        return r = s[0] + "天" + s[1] + "时" + s[2] + "分" + s[3] + "秒", {
            timeInter: r,
            groupstate: a,
            fromTheEnd_txt: u
        };
    },
    initCountDown: function(e) {
        if (null != e.GroupSponsorList) {
            var t = e.GroupSponsorList;
            if (t.length > 0) {
                for (var a = t.length - 1; a >= 0; a--) {
                    var r = _utils.timeTools.getTimeSpan(t[a].ShowEndTime);
                    if (r <= 0) t.splice(a, 1); else {
                        var n = _utils.timeTools.formatMillisecond(r), o = "";
                        o += n[0] + ":" + n[1] + ":" + n[2] + ":" + n[3], t[a].countdown = o;
                    }
                }
                return t;
            }
            return "";
        }
    },
    groupLstCountDowm: function(e) {
        var t = e, a = _utils.timeTools.getTimeSpan(t.ShowDate);
        if (a <= 0) t.splice(i, 1); else {
            var r = _utils.timeTools.formatMillisecond(a), n = "";
            n += r[1] + ":" + r[2] + ":" + r[3], t.countdown = n;
        }
        return t;
    },
    groupRece: function(e) {
        return http.post(_addr2.default.RecieveGoods, {
            guid: e
        });
    },
    addGroup: function(e) {
        return http.post(_addr2.default.AddGroup, {
            Jsondata: JSON.stringify(e)
        });
    },
    canPay: function(e) {
        var t = _wepy2.default.$instance;
        http.post(_addr2.default.CancelPay, {
            guid: e,
            appId: t.globalData.appid
        });
    },
    paySuccess: function(e) {
        var t = _wepy2.default.$instance;
        return http.post(_addr2.default.GetPaySuccessGroupDetail, {
            appId: t.globalData.appid,
            gsid: e.gsid,
            orderid: e.orderid,
            paytype: e.paytype
        });
    },
    getOlt: function(e) {
        var t = _wepy2.default.$instance;
        return http.get(_addr2.default.GetGroupOrderDetail, {
            appId: t.globalData.appid,
            guid: e
        });
    },
    groupShare: function(e) {
        var t = e, a = "/pages/group/groupInvite?id=" + t.GroupSponsorId;
        return {
            title: "￥" + t.DiscountPrice / 100 + "元就能购买" + t.GroupName + ",一起来拼团吧！",
            path: a,
            imageUrl: t.ImgUrl,
            success: function(e) {
                tools.loading("转发成功", "success");
            }
        };
    },
    getGroupList: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, r = t.vm, !r.ispost && !r.loadall) {
                        e.next = 4;
                        break;
                    }
                    return e.abrupt("return");

                  case 4:
                    if (r.ispost || (r.ispost = !0), e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 10;
                        break;
                    }
                    return e.next = 9, core.getUserInfo();

                  case 9:
                    e.t0 = e.sent;

                  case 10:
                    return n = e.t0, e.next = 13, http.post(_addr2.default.GetMyGroupList, {
                        appId: a.globalData.appid,
                        userId: n.Id,
                        t: r.state,
                        pageIndex: r.pageindex,
                        pageSize: r.pagesize
                    });

                  case 13:
                    o = e.sent, o.isok ? (r.ispost = !1, t.vm.list[r.pageindex] = o.postdata, o.postdata.length < r.pagesize ? r.loadall = !0 : r.pageindex += 1, 
                    t.$apply()) : tools.showModal(o.msg, !1);

                  case 15:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    myGroupDlt: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.abrupt("return", http.post(_addr2.default.GetMyGroupDetail, {
                        appId: a.globalData.appid,
                        userId: r.Id,
                        groupsponId: t
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    groupInvite: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n, o, s, i, u, c, d = this;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return n = e.t0, e.next = 9, http.post(_addr2.default.GetInvitePageData, {
                        appId: r.globalData.appid,
                        gsid: t
                    });

                  case 9:
                    o = e.sent, o.isok ? (s = !1, i = o.postdata, i.content_fmt = tools.richChange(i.Description, a), 
                    i.GroupUserList.length > 0 && (u = i.GroupUserList.find(function(e) {
                        return e.Id == n.Id;
                    }), s = void 0 != u), i.GroupUserList.length >= 4 ? (i.GroupUserList = i.GroupUserList.slice(0, 4), 
                    i.NeedNum_fmt = 0) : i.NeedNum + i.GroupUserList.length <= 4 ? i.NeedNum_fmt = i.NeedNum : i.NeedNum_fmt = 4 - i.GroupUserList.length, 
                    a.isingroup = s, a.vm_dlt = i, a.$apply(), c = a, c.cutDown = setInterval(function() {
                        var e = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                            var a, r;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return a = i.ValidDateStart, r = i.ValidDateEnd, e.next = 4, core.groupTime(a, r);

                                  case 4:
                                    c.time = e.sent, c.$apply();

                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, d);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(), 1e3)) : tools.showModal(o.msg, !1);

                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    groupIng: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, r = t.vm, !r.ispost && !r.loadall) {
                        e.next = 4;
                        break;
                    }
                    return e.abrupt("return");

                  case 4:
                    return r.ispost || (r.ispost = !0), e.next = 7, http.post(_addr2.default.GetGroupList, {
                        appId: a.globalData.appid,
                        state: r.state,
                        pageIndex: r.pageindex
                    });

                  case 7:
                    n = e.sent, n.isok ? (r.ispost = !1, t.vm.list[r.pageindex] = n.postdata, n.postdata.length < r.pagesize ? r.loadall = !0 : r.pageindex += 1, 
                    t.$apply()) : tools.showModal(n.msg, !1);

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getMinOrderId: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.abrupt("return", http.get(_addr2.default.getMiniappGoodsOrderById, {
                        appid: a.globalData.appid,
                        openid: r.OpenId,
                        orderId: t
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getEntGroup: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, r = t.vm, !r.ispost && !r.loadall) {
                        e.next = 4;
                        break;
                    }
                    return e.abrupt("return");

                  case 4:
                    if (r.ispost || (r.ispost = !0), e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 10;
                        break;
                    }
                    return e.next = 9, core.getUserInfo();

                  case 9:
                    e.t0 = e.sent;

                  case 10:
                    n = e.t0, http.post(_addr2.default.GetMyGroupList2, {
                        appId: a.globalData.appid,
                        userId: n.Id,
                        state: r.state,
                        pageIndex: r.pageindex
                    }).then(function(e) {
                        1 == e.isok ? (r.ispost = !1, e.postdata && (e = core.group2State(e), e.postdata.length >= r.pagesize ? r.pageindex += 1 : r.loadall = !0, 
                        e.postdata.length > 0 && (r.list = [].concat(_toConsumableArray(r.list), _toConsumableArray(e.postdata)))), 
                        t.vm = r, t.$apply()) : tools.showModal(e.msg, !1);
                    });

                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    group2State: function(e) {
        for (var t = 0, a = e.postdata.length; t < a; t++) {
            var r = e.postdata[t], n = 0;
            r.goodList.forEach(function(e) {
                n += Number(e.Count);
            }), r.groupNum = n, 3 == r.state && (r.showMark = "已完成", r.state = 4), 0 == r.groupstate && 0 == r.state && (r.showMark = "待付款", 
            r.state = 0), 2 == r.groupstate && 1 == r.state && (r.showMark = "待发货", r.state = 5), 
            2 == r.groupstate && 8 == r.state && (r.showMark = "待发货", r.state = 5), -4 == r.groupstate && -4 == r.state && (r.showMark = "未成团", 
            r.state = 1), 0 == r.groupstate && -1 == r.state && (r.showMark = "订单失效", r.state = 6), 
            1 == r.groupstate && -1 == r.state && (r.showMark = "订单失效", r.state = 6), 2 == r.groupstate && -1 == r.state && (r.showMark = "订单失效", 
            r.state = 6), 1 == r.groupstate && 8 == r.state && (r.showMark = "未成团", r.state = 1), 
            1 == r.groupstate && 1 == r.state && (r.showMark = "未成团", r.state = 1), 2 == r.groupstate && 2 == r.state && (r.showMark = "待收货", 
            r.state = 9), 2 == r.groupstate && -4 == r.state && (r.showMark = "退款成功", r.state = 7), 
            -4 == r.groupstate && -1 == r.state && (r.showMark = "已过期", r.state = 8);
        }
        return e;
    },
    groupConfrim: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n, o = this;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    n = e.t0, http.post(_addr2.default.updateMiniappGoodsOrderState, {
                        appid: r.globalData.appid,
                        openid: n.OpenId,
                        orderId: t.Id,
                        State: t.state
                    }).then(function() {
                        var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (1 != r.isok) {
                                        e.next = 13;
                                        break;
                                    }
                                    if (a.vm = tools.resetArray(a.vm), 3 != t.state) {
                                        e.next = 7;
                                        break;
                                    }
                                    return e.next = 5, tools.loading("收货成功", "success");

                                  case 5:
                                    e.next = 9;
                                    break;

                                  case 7:
                                    return e.next = 9, tools.loading("取消订单成功", "success");

                                  case 9:
                                    return e.next = 11, core.getEntGroup(a);

                                  case 11:
                                    e.next = 14;
                                    break;

                                  case 13:
                                    tools.showModal(r.msg, !1);

                                  case 14:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, o);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }());

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    group2Share: function(e) {
        var t = "/pages/group2/group2Share?id=" + e.id;
        return {
            title: e.name,
            path: t,
            imageUrl: e.img,
            success: function(e) {
                tools.loading("转发成功", "success");
            }
        };
    },
    getAddresslt: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n, o, s, i, u, c;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (r = e.t0, e.t1 = (0, _lodash2.default)(a.globalData, "storeConfig", ""), e.t1) {
                        e.next = 12;
                        break;
                    }
                    return e.next = 11, core.getStoreConfig();

                  case 11:
                    e.t1 = e.sent;

                  case 12:
                    return n = e.t1, e.next = 15, http.post(_addr2.default.GetUserAddress, {
                        userId: r.Id
                    });

                  case 15:
                    if (o = e.sent, !o.isok) {
                        e.next = 30;
                        break;
                    }
                    for (s = o.data, i = 0, u = s.length; i < u; i++) s[i].address = s[i].province + s[i].city + s[i].district + s[i].street, 
                    s[i].IDCard = null == s[i].IDCard ? {} : s[i].IDCard;
                    if (0 != n.storeInfo.funJoinModel.openExpress || !n.storeInfo.funJoinModel.openInvite && !n.storeInfo.funJoinModel.openToStoreConsume) {
                        e.next = 25;
                        break;
                    }
                    return n.storeInfo.funJoinModel.openInvite ? t.selIndex = 1 : t.selIndex = 6, e.next = 23, 
                    tools.getLocation();

                  case 23:
                    c = e.sent, c ? (t.vm_more.lat = c.latitude, t.vm_more.lng = c.longitude, core.GetStorePickPlace(t.vm_more, t), 
                    t.$apply()) : core.GetStorePickPlace(t.vm_more, t);

                  case 25:
                    t.vm_addr.express = s, t.vm_addr.selflst = n, t.$apply(), e.next = 31;
                    break;

                  case 30:
                    tools.showModal(o.msg, !1);

                  case 31:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    GetStorePickPlace: function(e, t) {
        var a = _wepy2.default.$instance;
        e.ispost || e.loadall || (e.ispost || (e.ispost = !0), http.get(_addr2.default.GetStorePickPlace, {
            appId: a.globalData.appid,
            lng: (0, _lodash2.default)(e, "lng", ""),
            lat: (0, _lodash2.default)(e, "lat", ""),
            pageIndex: (0, _lodash2.default)(e, "pageIndex", ""),
            pageSize: (0, _lodash2.default)(e, "pageSize", "")
        }).then(function(a) {
            a.isok && (e.ispost = !1, a.dataObj.placeList.length < e.pageSize ? e.loadall = !0 : e.pageIndex += 1, 
            a.dataObj.placeList.length > 0 && (e.list = [].concat(_toConsumableArray(e.list), _toConsumableArray(a.dataObj.placeList))), 
            t.vm_more = e, t.$apply());
        }));
    },
    delAddress: function(e) {
        return http.post(_addr2.default.DeleteUserAddress, {
            id: e
        });
    },
    saveAddress: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.abrupt("return", http.post(_addr2.default.EditUserAddress, {
                        id: t.id,
                        userid: r.Id,
                        isdefault: t.isdefault,
                        contact: t.contact,
                        phone: t.phone,
                        province: t.province,
                        city: t.city,
                        district: t.district,
                        street: t.street
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getFreight: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.abrupt("return", http.post(_addr2.default.GetFreightFee, {
                        appId: a.globalData.appid,
                        openId: r.OpenId,
                        goodCartIds: t.cartid,
                        province: (0, _lodash2.default)(t, "province", ""),
                        city: (0, _lodash2.default)(t, "city", ""),
                        flashItemId: (0, _lodash2.default)(t, "flashId", ""),
                        isgroup: (0, _lodash2.default)(t, "isgroup", ""),
                        groupid: (0, _lodash2.default)(t, "groupid", ""),
                        discountType: (0, _lodash2.default)(t, "discountType", ""),
                        couponlogid: (0, _lodash2.default)(t, "couponlogid", "")
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getLive: function(e) {
        var t = /https?:\/\/vzan.com\/live\/tvchat-(\d+).*/gi.exec(e);
        if (!t) return void tools.showModal("播放地址不正确", !1);
        var a = t[1];
        return http.post(_addr2.default.live, {
            tpid: a
        });
    },
    getCoup: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, n = a.vmMycoupon, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 6, core.getUserInfo();

                  case 6:
                    e.t0 = e.sent;

                  case 7:
                    if (o = e.t0, "" != t && (n.goodsInfo = JSON.stringify(t.list.map(function(e, t) {
                        return {
                            goodid: e.goodid,
                            totalprice: Number(e.discountPrice) * e.Count * 100
                        };
                    }))), !n.ispost && !n.loadall) {
                        e.next = 11;
                        break;
                    }
                    return e.abrupt("return");

                  case 11:
                    return n.ispost || (n.ispost = !0), n.goodsId = t.goodid, e.next = 15, http.post(_addr2.default.GetMyCouponList, {
                        state: n.state,
                        goodsId: (0, _lodash2.default)(n, "goodsId", ""),
                        goodsInfo: (0, _lodash2.default)(n, "goodsInfo", ""),
                        pageIndex: n.pageindex,
                        userId: o.Id,
                        appId: r.globalData.appid
                    });

                  case 15:
                    s = e.sent, s.isok && (n.ispost = !1, s.postdata.length >= n.pagesize ? n.pageindex += 1 : n.loadall = !0, 
                    n.list = [].concat(_toConsumableArray(n.list), _toConsumableArray(s.postdata)), 
                    a.vmMycoupon = n, a.$apply());

                  case 17:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getCoupon: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.next = 9, http.post(_addr2.default.GetCoupon, {
                        appId: a.globalData.appid,
                        userId: r.Id,
                        couponId: t
                    });

                  case 9:
                    if (n = e.sent, !(n.isok && n.WxCouponsCardId && n.FuwuHaoName)) {
                        e.next = 15;
                        break;
                    }
                    return e.next = 13, core.getCardSign(1, n.WxCouponsCardId, n.FuwuHaoName);

                  case 13:
                    o = e.sent, null != o && o.isok && (s = {
                        signature: o.obj.signature,
                        timestamp: o.obj.timestamp
                    }, s = JSON.stringify(s), wx.addCard({
                        cardList: [ {
                            cardId: o.obj.cardId,
                            cardExt: s
                        } ],
                        success: function() {
                            function e(e) {
                                return t.apply(this, arguments);
                            }
                            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        return console.log(t), e.next = 3, core.UpdateCouponWxCode(n.couponlogId, t.cardList[0].code);

                                      case 3:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e, this);
                            }));
                            return e;
                        }()
                    }));

                  case 15:
                    return e.abrupt("return", n);

                  case 16:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getStoreCoup: function(e, t) {
        var a = _wepy2.default.$instance, r = a.globalData.userInfo, n = t;
        return http.post(_addr2.default.GetStoreCouponList, {
            appId: a.globalData.appid,
            goodstype: -1,
            userId: r.Id,
            IsShowTip: e || "",
            state: n
        });
    },
    getReduction: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.abrupt("return", http.post(_addr2.default.GetReductionCard, {
                        userId: r.Id,
                        openId: r.OpenId,
                        orderId: t.orderid,
                        couponsId: t.couponsid
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getReductionLst: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n, o, s, i;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, n = (0, _lodash2.default)(r.globalData, "aid", ""), 
                    o = (0, _lodash2.default)(r.globalData, "userInfo", ""), e.t0 = (0, _lodash2.default)(r.globalData, "storeConfig", ""), 
                    e.t0) {
                        e.next = 8;
                        break;
                    }
                    return e.next = 7, core.getStoreConfig();

                  case 7:
                    e.t0 = e.sent;

                  case 8:
                    return s = e.t0, e.next = 11, http.post(_addr2.default.GetReductionCardList, {
                        aid: n,
                        userId: o.Id,
                        openId: o.OpenId,
                        storeId: s.storeInfo.Id
                    });

                  case 11:
                    if (i = e.sent, !i.isok) {
                        e.next = 19;
                        break;
                    }
                    if (0 != Number(t)) {
                        e.next = 17;
                        break;
                    }
                    return e.abrupt("return", i.coupons);

                  case 17:
                    a.vm = i.coupons, a.$apply();

                  case 19:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getInterInfo: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(t.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return a = e.t0, e.abrupt("return", http.post(_addr2.default.GetUserIntegral, {
                        appId: t.globalData.appid,
                        userId: a.Id
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    interPro: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return a = _wepy2.default.$instance, e.abrupt("return", http.post(_addr2.default.GetExchangeActivityList, {
                        appId: a.globalData.appid,
                        type: t.type,
                        pageindex: t.pageindex,
                        pagesize: t.pagesize
                    }));

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    interRule: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return t = _wepy2.default.$instance, e.abrupt("return", http.post(_addr2.default.GetStoreRules, {
                        appId: t.globalData.appid
                    }));

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    interRecord: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.abrupt("return", http.post(_addr2.default.GetUserIntegralLogs, {
                        appId: a.globalData.appid,
                        userId: r.Id,
                        pageindex: t.pageindex,
                        pagesize: t.pagesize
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    interDlt: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return a = _wepy2.default.$instance, e.abrupt("return", http.post(_addr2.default.GetExchangeActivity, {
                        appId: a.globalData.appid,
                        id: t
                    }));

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    interOrder: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.abrupt("return", http.post(_addr2.default.AddExchangeActivityOrder, {
                        userId: r.Id,
                        appId: a.globalData.appid,
                        activityId: t.id,
                        address: t.address,
                        way: t.way
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    interLst: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.abrupt("return", http.post(_addr2.default.GetExchangeActivityOrders, {
                        userId: r.Id,
                        appId: a.globalData.appid,
                        pageindex: t.pageindex,
                        pagesize: t.pagesize
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    interConfirm: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.abrupt("return", http.post(_addr2.default.ConfirmReciveGood, {
                        userId: r.Id,
                        appId: a.globalData.appid,
                        orderId: t
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getMiniSale: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.abrupt("return", http.get(_addr2.default.GetMiniAppSaleManConfig, {
                        UserId: r.Id,
                        appId: a.globalData.appid,
                        parentSalesManId: t
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    postApply: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return n = e.t0, e.abrupt("return", http.post(_addr2.default.ApplySalesman, {
                        UserId: n.Id,
                        appId: r.globalData.appid,
                        TelePhone: t,
                        parentSalesManId: a
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getSaleInfo: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.abrupt("return", http.get(_addr2.default.GetSalesManUserInfo, {
                        UserId: t || r.Id,
                        appId: a.globalData.appid
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getSaleLst: function(e) {
        var t = _wepy2.default.$instance;
        return http.get(_addr2.default.GetSalesmanGoodsList, {
            appId: t.globalData.appid,
            goodsName: e.search,
            sortType: e.state,
            pageIndex: e.pageindex,
            pageSize: e.pagesize
        });
    },
    getSaleRecord: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return n = e.t0, o = (0, _lodash2.default)(t, "pageindex", 1), s = (0, _lodash2.default)(t, "pagesize", 10), 
                    e.abrupt("return", http.get(_addr2.default.GetSalesManRecordOrder, {
                        appId: r.globalData.appid,
                        UserId: a || n.Id,
                        pageIndex: o,
                        pageSize: s
                    }));

                  case 10:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getSaleManRecord: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n, o, s, i;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, n = (0, _lodash2.default)(t, "state", 0), o = (0, 
                    _lodash2.default)(t, "pageindex", 1), s = (0, _lodash2.default)(t, "pagesize", 10), 
                    e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), e.t0) {
                        e.next = 9;
                        break;
                    }
                    return e.next = 8, core.getUserInfo();

                  case 8:
                    e.t0 = e.sent;

                  case 9:
                    return i = e.t0, e.abrupt("return", http.get(_addr2.default.GetSalesManRecordUser, {
                        appId: r.globalData.appid,
                        UserId: a || i.Id,
                        pageIndex: o,
                        pageSize: s,
                        state: n
                    }));

                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    bindSale: function(e) {
        var t = _wepy2.default.$instance;
        return http.get(_addr2.default.GetSalesManRecord, {
            appId: t.globalData.appid,
            goodsId: e || "",
            salesManId: t.globalData.saleId
        });
    },
    bindShip: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return n = e.t0, e.abrupt("return", http.post(_addr2.default.BindRelationShip, {
                        appId: r.globalData.appid,
                        userId: n.Id,
                        goodsId: t,
                        salesManRecordId: a
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    updateRecordId: function(e) {
        var t = _wepy2.default.$instance;
        http.post(_addr2.default.UpdateSalesManRecord, {
            appId: t.globalData.appid,
            salesManRecordId: e,
            state: 1
        });
    },
    applyCash: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.abrupt("return", http.post(_addr2.default.DrawCashApply, {
                        appId: a.globalData.appid,
                        UserId: r.Id,
                        drawCashMoney: t
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    updateSaleManAccount: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (r = e.t0, e.t1 = (0, _lodash2.default)(a.globalData, "aid", ""), e.t1) {
                        e.next = 12;
                        break;
                    }
                    return e.next = 11, core.getAid();

                  case 11:
                    e.t1 = e.sent;

                  case 12:
                    return n = e.t1, e.abrupt("return", http.post(_addr2.default.UpdateSaleManAccount, {
                        aid: n,
                        userId: r.Id,
                        account: t.account,
                        type: t.type
                    }));

                  case 14:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    GetSaleManRelationList: function(e) {
        var t = _wepy2.default.$instance;
        return http.post(_addr2.default.GetSaleManRelationList, {
            appId: t.globalData.appid,
            saleManId: e.saleManId,
            pageSize: e.pagesize,
            pageIndex: e.pageindex
        });
    },
    cashRecordlst: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.abrupt("return", http.get(_addr2.default.GetDrawCashApplyList, {
                        appId: a.globalData.appid,
                        UserId: r.Id,
                        pageIndex: t.pageindex,
                        pageSize: t.pagesize
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    payByStore: function() {
        function e(e, a, r, n, o, s, i) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a, r, n, o, s, i) {
            var u, c, d, l;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (u = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(u.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (c = e.t0, e.t1 = (0, _lodash2.default)(u.globalData, "vipInfo", ""), e.t1) {
                        e.next = 12;
                        break;
                    }
                    return e.next = 11, core.getVipInfo();

                  case 11:
                    e.t1 = e.sent;

                  case 12:
                    if (d = e.t1, e.t2 = (0, _lodash2.default)(u.globalData, "aid", ""), e.t2) {
                        e.next = 18;
                        break;
                    }
                    return e.next = 17, core.getAid();

                  case 17:
                    e.t2 = e.sent;

                  case 18:
                    return l = e.t2, e.abrupt("return", http.post(_addr2.default.PayByStoredvalue, {
                        appid: u.globalData.appid,
                        aid: l,
                        userId: c.Id,
                        openId: c.OpenId,
                        levelid: d.levelid,
                        couponid: null == t ? 0 : t.Id,
                        money: Number(Number(100 * a).toFixed(0)),
                        money_cal: Number(Number(r).toFixed(0)),
                        money_coupon: n,
                        money_vip: o,
                        payway: s,
                        discountType: i
                    }));

                  case 20:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    payByStoreSuccess: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.abrupt("return", http.post(_addr2.default.StoredvalueOrderInfo, {
                        orderid: t,
                        openId: r.OpenId
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    connectSocket: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = _wepy2.default.$instance, !t.globalData.wxState) {
                        e.next = 3;
                        break;
                    }
                    return e.abrupt("return");

                  case 3:
                    if (e.t0 = (0, _lodash2.default)(t.globalData, "userInfo", ""), e.t0) {
                        e.next = 8;
                        break;
                    }
                    return e.next = 7, core.getUserInfo();

                  case 7:
                    e.t0 = e.sent;

                  case 8:
                    if (a = e.t0, !t.globalData.ws && !isConnecting) {
                        e.next = 11;
                        break;
                    }
                    return e.abrupt("return");

                  case 11:
                    isConnecting = !0, wx.connectSocket({
                        url: _addr2.default.ws + "?appId=" + t.globalData.appid + "&userId=" + a.Id + "&isFirst=" + isFirst,
                        header: {
                            "content-type": "application/json"
                        },
                        method: "GET",
                        fail: function(e) {
                            "failed: Error in connection establishment" == e.errMsg && console.log("请配置正确的socket请求域名");
                        }
                    }), wx.onSocketOpen(function(e) {
                        if (t.globalData.ws = !0, isConnecting = !1, reConnectTimer && (clearTimeout(reConnectTimer), 
                        reConnectTimer = null), t.globalData.msgQueue.length > 0) {
                            for (var a = 0, r = t.globalData.msgQueue.length; a < r; a++) core.sendMessage(t.globalData.msgQueue[a]);
                            t.globalData.msgQueue = [], wx.hideLoading();
                        }
                    }), wx.onSocketError(function(e) {
                        console.log("请配置正确的socket请求域名"), t.globalData.ws = !1, isConnecting = !1;
                    }), wx.onSocketClose(function(e) {
                        isFirst = !1, t.globalData.ws = !1, isConnecting = !1, core.reConnect();
                    }), wx.onSocketMessage(function(e) {
                        var t = e.data, a = getCurrentPages(), r = a[a.length - 1], n = r.data.fuserInfo, o = r.data.tuserInfo;
                        if ("string" == typeof t && (t = JSON.parse(t)), "pages/im/chat" == r.route) {
                            var s = r.data.vm.list;
                            (t.fuserId == n.userid && t.tuserId == o.userid || t.fuserId == o.userid && t.tuserId == n.userid) && (s.push(t), 
                            r.setData({
                                "vm.list": s,
                                "vm.lastids": t.ids
                            }));
                        }
                    });

                  case 17:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    reConnect: function() {
        _wepy2.default.$instance.globalData.wxState || (reConnectTimer && (clearTimeout(reConnectTimer), 
        reConnectTimer = null), reConnectTimer = setTimeout(function() {
            core.connectSocket();
        }, 3e3));
    },
    sendMessage: function(e) {
        var t = _wepy2.default.$instance;
        "object" === (void 0 === e ? "undefined" : _typeof(e)) && (e = JSON.stringify(e)), 
        t.globalData.ws ? wx.sendSocketMessage({
            data: e
        }) : t.globalData.msgQueue.push(e);
    },
    getContactList: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!t.ispost && !t.loadall) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return");

                  case 2:
                    if (t.ispost || (t.ispost = !0), r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 9;
                        break;
                    }
                    return e.next = 8, core.getUserInfo();

                  case 8:
                    e.t0 = e.sent;

                  case 9:
                    n = e.t0, http.post(_addr2.default.GetContactList, {
                        appId: r.globalData.appid,
                        fuserId: n.Id,
                        pageIndex: t.pageindex,
                        pageSize: t.pagesize,
                        fuserType: 0,
                        ver: 1
                    }).then(function(e) {
                        e.isok ? (t.ispost = !1, e.data.length >= t.pagesize ? t.pageindex += 1 : t.loadall = !0, 
                        t.list = [].concat(_toConsumableArray(t.list), _toConsumableArray(e.data)), t.list.forEach(function(e) {
                            e.style = 0;
                        }), a.vm = t, a.$apply()) : tools.showModal(e.msg, !1);
                    });

                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    AddContact: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    r = e.t0, http.post(_addr2.default.AddContact, {
                        appId: a.globalData.appid,
                        fuserId: r.Id,
                        tuserId: t
                    });

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    DelContact: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.abrupt("return", http.post(_addr2.default.DeleteMyConcat, {
                        appId: a.globalData.appid,
                        fuserId: r.Id,
                        tuserId: t
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getHistory: function() {
        function e(e, a, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a, r) {
            var n, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (n = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(n.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (o = e.t0, !a.ispost && !a.loadall) {
                        e.next = 9;
                        break;
                    }
                    return e.abrupt("return");

                  case 9:
                    return a.ispost = !0, e.next = 12, http.post(_addr2.default.GetHistory, {
                        appId: n.globalData.appid,
                        fuserId: o.Id,
                        tuserId: t,
                        id: a.lastid,
                        fuserType: 0,
                        ver: 1
                    });

                  case 12:
                    s = e.sent, s && s.isok ? (s.data.length < a.pagesize ? a.loadall = !0 : a.loadall = !1, 
                    s.data.length > 0 && (a.list = s.data.concat(a.list), 0 === a.lastid ? (a.lastid = a.list[0].Id, 
                    a.lastids = a.list[a.list.length - 1].ids) : (a.lastid = a.list[0].Id, a.lastids = a.list[0].ids))) : a.loadall = !0, 
                    a.ispost = !1, r.vm = a, r.$apply();

                  case 17:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    gochat: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, a, r, n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(t.globalData, "storeConfig", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getStoreConfig();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    a = e.t0, a.storeInfo && a.storeInfo.funJoinModel && (a.storeInfo.kfInfo && a.storeInfo.funJoinModel.imSwitch ? (r = (0, 
                    _lodash2.default)(a.storeInfo.kfInfo, "uid", ""), n = (0, _lodash2.default)(a.storeInfo.kfInfo, "nickName", "").replace(/\s/gi, ""), 
                    o = (0, _lodash2.default)(a.storeInfo.kfInfo, "headImgUrl", ""), tools.goNewPage("/pages/im/chat?userid=" + r + "&nickname=" + n + "&headimg=" + o)) : tools.showModal("商家已关闭在线客服", !1));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    appSwitch: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, a, r, n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return t = _wepy2.default.$instance, a = t.globalData.appid, e.next = 4, http.get(_addr2.default.GetFunctionList, {
                        appid: a
                    });

                  case 4:
                    if (r = e.sent, !r.isok) {
                        e.next = 11;
                        break;
                    }
                    for (n = 0, o = r.dataObj.list.length; n < o; n++) r.dataObj.list[n].title.includes("我的预约单") && (r.dataObj.list[n].url = "/pages/good/goodSubLst");
                    return t.globalData.switchInfo = r.dataObj, e.abrupt("return", r.dataObj);

                  case 11:
                    if ("401" != r.code) {
                        e.next = 18;
                        break;
                    }
                    return t.globalData.switchInfo = "", tools.goLaunch("/pages/index/overdue"), isRequest = !1, 
                    e.abrupt("return", "");

                  case 18:
                    return t.globalData.switchInfo = "", e.abrupt("return", "");

                  case 20:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getVerson: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return t = _wepy2.default.$instance.globalData.appid, e.next = 3, http.get(_addr2.default.GetVersonId, {
                        appid: t
                    });

                  case 3:
                    if (a = e.sent, !a.isok) {
                        e.next = 8;
                        break;
                    }
                    return e.abrupt("return", a.dataObj);

                  case 8:
                    return e.abrupt("return", "");

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    logoSwitch: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, r = a.globalData.appid, !(n = a.globalData.logo)) {
                        e.next = 8;
                        break;
                    }
                    t.vm_com_logo = n, t.$apply(), e.next = 22;
                    break;

                  case 8:
                    return e.next = 10, http.get(_addr2.default.GetAgentConfigInfo, {
                        appid: r
                    });

                  case 10:
                    if (o = e.sent, 1 != o.isok) {
                        e.next = 21;
                        break;
                    }
                    return s = o.AgentConfig, e.next = 15, core.getVerson();

                  case 15:
                    s.openPath = e.sent, a.globalData.logo = s, t.vm_com_logo = s, t.$apply(), e.next = 22;
                    break;

                  case 21:
                    tools.showModal(o.msg, !1);

                  case 22:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    sendUser: function(e, t) {
        return http.post(_addr2.default.SendUserAdvisory, {
            Phone: e,
            username: t,
            source: 1,
            type: 5
        });
    },
    getPhoneCode: function(e) {
        return http.post(_addr2.default.SendUserAuthCode, {
            phonenum: e,
            type: 1
        });
    },
    getUserRegi: function(e) {
        return http.post(_addr2.default.SaveUserInfo, {
            phone: e.phone,
            password: e.password,
            code: e.code,
            address: e.address,
            sourcefrom: "小程序",
            agentqrcodeid: 0
        });
    },
    postValue: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = _wepy2.default.$instance, n = r.globalData.appid, e.next = 4, core.getUserInfo();

                  case 4:
                    o = e.sent, http.post(_addr2.default.AddManyGoodsComment, {
                        appid: n,
                        userId: o.Id,
                        orderId: t.orderid,
                        goodsType: t.goodsType,
                        listJson: JSON.stringify(t.list),
                        sessionkey: (0, _lodash2.default)(o, "loginSessionKey", "")
                    }).then(function(e) {
                        e.isok ? (a.vm.showMask = !0, a.$apply()) : tools.showModal(e.Msg, !1);
                    });

                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getGoodsValue: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, r = a.globalData.appid, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 6, core.getUserInfo();

                  case 6:
                    e.t0 = e.sent;

                  case 7:
                    return n = e.t0, e.abrupt("return", http.post(_addr2.default.GetUserGoodsCommentList, {
                        appid: r,
                        userid: n.Id,
                        pageIndex: (0, _lodash2.default)(t, "pageindex", 1),
                        pageSize: (0, _lodash2.default)(t, "pagesize", 10),
                        haveimg: (0, _lodash2.default)(t, "sel", -1)
                    }));

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getShowGoodValue: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, r = a.globalData.appid, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 6, core.getUserInfo();

                  case 6:
                    e.t0 = e.sent;

                  case 7:
                    return n = e.t0, e.abrupt("return", http.post(_addr2.default.GetGoodsCommentList, {
                        appid: r,
                        userid: n.Id,
                        goodsid: (0, _lodash2.default)(t, "goodsid", "") || t,
                        pageIndex: (0, _lodash2.default)(t, "pageindex", 1),
                        pageSize: (0, _lodash2.default)(t, "pagesize", 10),
                        haveimg: (0, _lodash2.default)(t, "sel", -1)
                    }));

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    pointValue: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, r = a.globalData.appid, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 6, core.getUserInfo();

                  case 6:
                    e.t0 = e.sent;

                  case 7:
                    return n = e.t0, e.abrupt("return", http.post(_addr2.default.PointsGoodsComment, {
                        id: t,
                        appid: r,
                        userid: n.Id
                    }));

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    GetVaildCode: function(e) {
        var t = {
            type: 1,
            phonenum: e.phone,
            agentqrcodeid: e.agentqrcodeid
        };
        return http.post(_addr2.default.GetVaildCode, t);
    },
    SaveUserInfo: function(e) {
        return http.post(_addr2.default.SaveUserInfo, e);
    },
    GetTableNoQrCode: function(e) {
        var t = _wepy2.default.$instance.globalData.appid;
        return http.post(_addr2.default.GetTableNoQrCode, {
            appid: t,
            orderid: e,
            bussinessAppid: "wxe569b2c80b845da7"
        });
    },
    payCtOrder: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return a = _wepy2.default.$instance, e.next = 3, http.post(_addr2.default.addPayContentOrder, {
                        appId: a.globalData.appid,
                        openId: a.globalData.userInfo.OpenId,
                        contentId: t.id,
                        buyMode: t.mode
                    });

                  case 3:
                    if (r = e.sent, !r.isok) {
                        e.next = 8;
                        break;
                    }
                    return e.abrupt("return", r.dataObj);

                  case 8:
                    return tools.showModal(r.Msg, !1), e.abrupt("return", !1);

                  case 10:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    miaoShaDeail: function(e, t) {
        var a = this, r = _wepy2.default.$instance;
        http.post(_addr2.default.GetFlashItem, {
            appId: r.globalData.appid,
            openId: r.globalData.userInfo.OpenId,
            flashItemID: e
        }).then(function() {
            var e = _asyncToGenerator(regeneratorRuntime.mark(function e(n) {
                var o, s, i, u, c, d;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!n.isok) {
                            e.next = 38;
                            break;
                        }
                        if (o = n.dataObj, o.goodInfo.selImg = o.goodInfo.img, o.goodInfo.pickspecification) for (o.goodInfo.pickspecification = JSON.parse(o.goodInfo.pickspecification), 
                        s = 0, i = o.goodInfo.pickspecification.length; s < i; s++) for (u = 0, c = o.goodInfo.pickspecification[s].length; u < c; u++) o.goodInfo.pickspecification[s].items[u].sel = !1;
                        if (e.t0 = (0, _lodash2.default)(r.globalData, "storeConfig", ""), e.t0) {
                            e.next = 9;
                            break;
                        }
                        return e.next = 8, core.getStoreConfig();

                      case 8:
                        e.t0 = e.sent;

                      case 9:
                        d = e.t0, o.store = d.storeInfo.funJoinModel, o.content_fmt = o.goodInfo.description.replace(/[<]br[\/][>]/g, '<div style="height:20px"></div>'), 
                        o.content_fmt = o.goodInfo.description.replace(/&nbsp;/g, '<span style="margin-left:16rpx;"></span>'), 
                        o.content_fmt = o.goodInfo.description.replace(/[<][\/]p[>][<]p[>]/g, "<div></div>"), 
                        o.content_fmt = tools.richChange(o.goodInfo.description, t), o.goodInfo.danMaiPrice = o.goodInfo.discountPricestr, 
                        o.goodInfo.yuanJiaPrice = o.goodInfo.priceStr, o.goodInfo.itemPrice = o.goodInfo.discountPricestr, 
                        o.goodInfo.priceArr = o.goodInfo.discountPricestr.split("."), o.goodInfo.stockStr = o.goodInfo.stock, 
                        o.goodInfo.totalCount = 1, o.goodInfo.specId = "", o.goodInfo.type = "miaosha", 
                        o.type = "miaosha", o.state = o.goodInfo.state, console.log("begin", _utils.timeTools.getTimeSpan(o.flashPayInfo.begin)), 
                        o.isBegin = !(_utils.timeTools.getTimeSpan(o.flashPayInfo.begin) > 0), o.isEnd = !(_utils.timeTools.getTimeSpan(o.flashPayInfo.end) > 0), 
                        o.userInfo = r.globalData.userInfo, o.goodInfo.VideoPath ? o.goodInfo.isPlay = !1 : t.vShow = !1, 
                        o.goodInfo.slidearr = o.goodInfo.slideimgs.length && o.goodInfo.slideimgs.split(",") || [], 
                        o.flashPayInfo.useOldOrNew = !(!o.flashPayInfo.Specs || o.flashPayInfo.Specs && o.flashPayInfo.Specs.length > 0 && -1 == o.flashPayInfo.Specs[0].Stock), 
                        tools.setPageTitle(o.goodInfo.name), t.vm = o, t.$apply(), core.handleMiaoDetailDeal(o, t), 
                        e.next = 41;
                        break;

                      case 38:
                        return e.next = 40, tools.showModal(n.Msg, !1);

                      case 40:
                        tools.goBack(1);

                      case 41:
                      case "end":
                        return e.stop();
                    }
                }, e, a);
            }));
            return function(t) {
                return e.apply(this, arguments);
            };
        }());
    },
    handleMiaoDetailDeal: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, core.calMiaoDetailCut(t, a);

                  case 2:
                    a.miaoDeal = setInterval(function(e) {
                        core.calMiaoDetailCut(t, a);
                    }, 1e3);

                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    calMiaoDetailCut: function(e, t) {
        var a = !1, r = [], n = _utils.timeTools.getTimeSpan(e.flashPayInfo.begin), o = _utils.timeTools.getTimeSpan(e.flashPayInfo.end);
        n > 0 ? (a = !0, r = _utils.timeTools.formatMillisecond(n), r.push(a)) : (a = !1, 
        o <= 0 ? (r = [ "00", "00", "00", "00" ], clearInterval(t.miaoDeal)) : r = _utils.timeTools.formatMillisecond(o), 
        r.push(a)), t.setData({
            "vm.countDownArray": r
        });
    },
    showSignin: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "storeConfig", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getStoreConfig();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    r = e.t0, n = r.storeInfo.funJoinModel.PlayCardConfigModel, n && (o = n.ShowPage, 
                    t.showsigninFloat = 1 == o, t.signinRules = n, a.globalData.showsigninFloat = t.showsigninFloat, 
                    core.getUserPlayCard(t), t.$apply());

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    storeInfo: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "storeConfig", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getStoreConfig();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    r = e.t0, t.signinRules = r.storeInfo.funJoinModel.PlayCardConfigModel, t.$apply();

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getUserPlayCard: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.abrupt("return", http.get(_addr2.default.GetUserPlayCard, {
                        appId: a.globalData.appid,
                        userId: r.Id
                    }).then(function(e) {
                        e.isok ? e.dataObj && (e.dataObj.listPlayCardLog.forEach(function(e, a) {
                            e.dateStr = t.singinDate[a];
                        }), t.userSignin = e.dataObj, t.$apply()) : tools.showModal(e.Msg, !1);
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    playCard: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.abrupt("return", http.post(_addr2.default.PlayCard, {
                        appId: a.globalData.appid,
                        userId: r.Id
                    }).then(function(e) {
                        e.isok ? (e.dataObj.listPlayCardLog.forEach(function(e, a) {
                            e.dateStr = t.singinDate[a];
                        }), t.userSignin = e.dataObj, t.$apply()) : tools.showModal(e.Msg, !1);
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    addQrCodeScanRecord: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if ("" != t) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return");

                  case 2:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 8;
                        break;
                    }
                    return e.next = 7, core.getUserInfo();

                  case 7:
                    e.t0 = e.sent;

                  case 8:
                    return r = e.t0, e.abrupt("return", http.post(_addr2.default.AddQrCodeScanRecord, {
                        appId: a.globalData.appid,
                        openId: r.OpenId,
                        qrCodeId: t
                    }));

                  case 10:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    UpdateNewsPV: function(e, t) {
        http.post(_addr2.default.UpdateNewsPV, {
            id: e
        }).then(function(e) {
            e.isok && (t.vm.Pv = t.vm.Pv + 1, t.$apply());
        });
    },
    GetAllVipRights: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n = this;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "vipInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getVipInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    r = e.t0, http.post(_addr2.default.GetAllVipRights, {
                        appId: a.globalData.appid
                    }).then(function() {
                        var e = _asyncToGenerator(regeneratorRuntime.mark(function e(a) {
                            var o, s;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (!a.isok) {
                                        e.next = 7;
                                        break;
                                    }
                                    for (o = 0, s = a.dataObj.length; o < s; o++) r.levelInfo.level == a.dataObj[o].level && (o + 1 == a.dataObj.length ? t.vm.index = a.dataObj.length : t.vm.index = o + 1);
                                    t.vm.list = a.dataObj, t.vm.info = r, t.$apply(), e.next = 10;
                                    break;

                                  case 7:
                                    return e.next = 9, tools.showModal(a.Msg, !1);

                                  case 9:
                                    tools.goBack(1);

                                  case 10:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, n);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }());

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    GetFullReductionByAid: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return t = (0, _lodash2.default)(_wepy2.default.$instance.globalData, "aid", ""), 
                    e.next = 3, http.post(_addr2.default.GetFullReductionByAid, {
                        aid: t
                    });

                  case 3:
                    if (a = e.sent, !a.isok) {
                        e.next = 10;
                        break;
                    }
                    if (!a.dataObj) {
                        e.next = 9;
                        break;
                    }
                    return e.abrupt("return", a.dataObj);

                  case 9:
                    return e.abrupt("return", null);

                  case 10:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    GetBargainFreightFee: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.next = 9, http.post(_addr2.default.GetBargainFreightFee, {
                        city: t.city,
                        buid: t.build,
                        province: t.province,
                        openId: r.OpenId,
                        appId: a.globalData.appid
                    });

                  case 9:
                    if (n = e.sent, !n.isok) {
                        e.next = 14;
                        break;
                    }
                    return e.abrupt("return", n.dataObj);

                  case 14:
                    return e.abrupt("return", "");

                  case 15:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    GetOrderRecordCount: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(t.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return a = e.t0, e.next = 9, http.get(_addr2.default.GetOrderRecordCount, {
                        openid: a.OpenId,
                        appId: t.globalData.appid
                    });

                  case 9:
                    if (r = e.sent, !r.isok) {
                        e.next = 14;
                        break;
                    }
                    return e.abrupt("return", r.opostdata);

                  case 14:
                    return e.abrupt("return", "");

                  case 15:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getGoodInfo: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n, o, s, i, u, c, d, l;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "vipInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getVipInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (n = e.t0, e.t1 = (0, _lodash2.default)(r.globalData, "userInfo", ""), e.t1) {
                        e.next = 12;
                        break;
                    }
                    return e.next = 11, core.getUserInfo();

                  case 11:
                    e.t1 = e.sent;

                  case 12:
                    return o = e.t1, e.next = 15, http.get(_addr2.default.GetGoodInfo, {
                        pid: t,
                        version: 2,
                        levelid: n.levelid,
                        appid: r.globalData.appid,
                        userId: o.Id
                    });

                  case 15:
                    if (s = e.sent, !s.isok) {
                        e.next = 30;
                        break;
                    }
                    if (i = s.msg, i.userInfo = o, i.hotGoods = s.hotGoods, i.imgurl = s.msg.img, i.selImg = s.msg.img, 
                    i.imgurl_fmt = s.msg.img_fmt, i.slideimgs && i.slideimgs_fmt && (i.slideimgs = i.slideimgs.split(","), 
                    i.slideimgs_fmt = i.slideimgs_fmt.split("|")), i.pickspecification) for (i.pickspecification = JSON.parse(i.pickspecification), 
                    u = 0, c = i.pickspecification.length; u < c; u++) for (d = 0, l = i.pickspecification[u].length; d < l; d++) i.pickspecification[u].items[d].sel = !1;
                    return i.content_fmt = tools.richChange(i.description, this), a || tools.setPageTitle(i.name), 
                    e.abrupt("return", i);

                  case 30:
                    return e.next = 32, tools.showModal(s.msg, !1);

                  case 32:
                    tools.goBack(1);

                  case 33:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    CancelOrder: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, core.getUserInfo();

                  case 2:
                    return a = e.sent, e.next = 5, http.post(_addr2.default.CancelOrder, {
                        orderId: t,
                        sessionkey: (0, _lodash2.default)(a, "loginSessionKey", ""),
                        State: 19
                    });

                  case 5:
                    if (r = e.sent, tools.showModal(r.Msg, !1), !r.isok) {
                        e.next = 11;
                        break;
                    }
                    return e.abrupt("return", !0);

                  case 11:
                    return e.abrupt("return", !1);

                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    PendPayCancelOrder: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, http.post(_addr2.default.CancelOrder, {
                        orderId: t
                    });

                  case 2:
                    if (a = e.sent, tools.showModal(a.Msg, !1), !a.isok) {
                        e.next = 8;
                        break;
                    }
                    return e.abrupt("return", !0);

                  case 8:
                    return e.abrupt("return", !1);

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getSub: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return t = (0, _lodash2.default)(_wepy2.default.$instance.globalData, "aid", ""), 
                    e.next = 3, http.get(_addr2.default.GetSubscribePageSetting, {
                        aid: t
                    });

                  case 3:
                    if (a = e.sent, !a.isok) {
                        e.next = 12;
                        break;
                    }
                    return a.page = JSON.parse(a.page), a.page.coms[0].openpay = a.funJoinModel.OpenYuyuePay, 
                    a.page.coms[0].paycount = a.funJoinModel.YuyuePayCount, a.page.coms[0].paytype = a.funJoinModel.YuyuePayType, 
                    e.abrupt("return", a.page.coms[0]);

                  case 12:
                    return e.abrupt("return", "");

                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    saveIDCardInfo: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.abrupt("return", http.post(_addr2.default.CheckIDCard, {
                        userId: Number(r.Id),
                        appId: a.globalData.appid,
                        addressId: Number(t.addressId),
                        imgUrl: t.faceImg,
                        backImgUrl: t.backImg,
                        name: t.idCardName,
                        idCard: t.idCardNum
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getAddressItem: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.next = 9, http.post(_addr2.default.GetUserAddress, {
                        userId: r.Id
                    });

                  case 9:
                    return n = e.sent, e.abrupt("return", new Promise(function(e, a) {
                        if (n.isok) {
                            for (var r = n.data, o = 0, s = r.length; o < s; o++) if (r[o].id == t) {
                                r[o].address = r[o].province + r[o].city + r[o].district + r[o].street, r[o].IDCard = null == r[o].IDCard ? {} : r[o].IDCard, 
                                e(r[o]);
                                break;
                            }
                        } else tools.showModal(n.msg, !1);
                    }));

                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getUserInviteInfo: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, a, r, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(t.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (a = e.t0, e.t1 = (0, _lodash2.default)(t.globalData, "aid", ""), e.t1) {
                        e.next = 12;
                        break;
                    }
                    return e.next = 11, core.getAid();

                  case 11:
                    e.t1 = e.sent;

                  case 12:
                    return r = e.t1, e.next = 15, http.post(_addr2.default.GetUserInviteInfo, {
                        aid: r,
                        userId: a.Id
                    });

                  case 15:
                    return n = e.sent, e.abrupt("return", new Promise(function(e, t) {
                        n.isok ? e(n.obj) : tools.showModal(n.msg, !1);
                    }));

                  case 17:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getInviteList: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = a.vm, n = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(n.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 6, core.getUserInfo();

                  case 6:
                    e.t0 = e.sent;

                  case 7:
                    if (o = e.t0, e.t1 = (0, _lodash2.default)(n.globalData, "aid", ""), e.t1) {
                        e.next = 13;
                        break;
                    }
                    return e.next = 12, core.getAid();

                  case 12:
                    e.t1 = e.sent;

                  case 13:
                    if (s = e.t1, !r.ispost && !r.loadall) {
                        e.next = 16;
                        break;
                    }
                    return e.abrupt("return");

                  case 16:
                    r.ispost || (r.ispost = !0), http.post(_addr2.default.GetInviteList, {
                        aid: s,
                        userId: o.Id,
                        inviteType: t,
                        pageSize: r.pagesize,
                        pageIndex: r.pageindex
                    }).then(function(e) {
                        r.ispost = !1, null != e.obj && e.obj.length > 0 && (e.obj.length >= r.pagesize ? r.pageindex += 1 : r.loadall = !0, 
                        e.obj.length > 0 && (r.list = [].concat(_toConsumableArray(r.list), _toConsumableArray(e.obj))), 
                        a.vm = r, a.$apply());
                    });

                  case 18:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    moneyRecharge: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, r = a.globalData.appid, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 6, core.getUserInfo();

                  case 6:
                    e.t0 = e.sent;

                  case 7:
                    return n = e.t0, e.abrupt("return", http.post(_addr2.default.SaveMoneyRecharge, {
                        appid: r,
                        openid: n.OpenId,
                        chargeLevel: t.chargeLevel,
                        money: t.money,
                        inviteUserId: t.inviteUserId
                    }));

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getUserReward: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = t.vm, r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 6, core.getUserInfo();

                  case 6:
                    e.t0 = e.sent;

                  case 7:
                    if (n = e.t0, e.t1 = (0, _lodash2.default)(r.globalData, "aid", ""), e.t1) {
                        e.next = 13;
                        break;
                    }
                    return e.next = 12, core.getAid();

                  case 12:
                    e.t1 = e.sent;

                  case 13:
                    if (o = e.t1, !a.ispost && !a.loadall) {
                        e.next = 16;
                        break;
                    }
                    return e.abrupt("return");

                  case 16:
                    a.ispost || (a.ispost = !0), http.post(_addr2.default.GetUserReward, {
                        aid: o,
                        userId: n.Id,
                        pageSize: a.pagesize,
                        pageIndex: a.pageindex
                    }).then(function(e) {
                        a.ispost = !1;
                        var r = e.obj;
                        null != r && r.length > 0 && (r.length > 0 && r.forEach(function(e) {
                            e.byway = e.Remark.split("】")[0].substring(1);
                        }), r.length >= a.pagesize ? a.pageindex += 1 : a.loadall = !0, r.length > 0 && (a.list = [].concat(_toConsumableArray(a.list), _toConsumableArray(r))), 
                        t.vm = a, t.$apply());
                    });

                  case 18:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getAgentLevelList: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = t.vm, r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 6, core.getUserInfo();

                  case 6:
                    e.t0 = e.sent;

                  case 7:
                    if (n = e.t0, e.t1 = (0, _lodash2.default)(r.globalData, "aid", ""), e.t1) {
                        e.next = 13;
                        break;
                    }
                    return e.next = 12, core.getAid();

                  case 12:
                    e.t1 = e.sent;

                  case 13:
                    if (o = e.t1, !a.ispost && !a.loadall) {
                        e.next = 16;
                        break;
                    }
                    return e.abrupt("return");

                  case 16:
                    a.ispost || (a.ispost = !0), http.post(_addr2.default.GetAgentLevelList, {
                        aid: o,
                        storeId: 0,
                        pageSize: a.pagesize,
                        pageIndex: a.pageindex,
                        sessionkey: (0, _lodash2.default)(n, "loginSessionKey", "")
                    }).then(function(e) {
                        a.ispost = !1;
                        var r = e.dataObj;
                        e.isok && (r.length >= a.pagesize ? a.pageindex += 1 : a.loadall = !0, r.length > 0 && (a.list = [].concat(_toConsumableArray(a.list), _toConsumableArray(r))), 
                        t.chooseType = a.list[0].Id, t.needPay = Number(a.list[0].AgentPriceStr), t.vm = a, 
                        t.$apply());
                    });

                  case 18:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getAgentUserInfo: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n, o, s, i, u;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "aid", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getAid();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (n = e.t0, !(o = (0, _lodash2.default)(r.globalData, "isAgent", !1))) {
                        e.next = 29;
                        break;
                    }
                    if (!(s = (0, _lodash2.default)(r.globalData, "agentUserInfo", ""))) {
                        e.next = 12;
                        break;
                    }
                    return e.abrupt("return", s);

                  case 12:
                    if (e.t1 = (0, _lodash2.default)(r.globalData, "userInfo", ""), e.t1) {
                        e.next = 17;
                        break;
                    }
                    return e.next = 16, core.getUserInfo();

                  case 16:
                    e.t1 = e.sent;

                  case 17:
                    return i = e.t1, e.next = 20, http.post(_addr2.default.GetAgentUserInfo, {
                        aid: n,
                        userId: a || i.Id,
                        storeId: 0,
                        pageUrl: "pages/agent/levelChoose",
                        reflesh: t || !1,
                        sessionkey: (0, _lodash2.default)(i, "loginSessionKey", "")
                    });

                  case 20:
                    if (u = e.sent, !u.isok) {
                        e.next = 26;
                        break;
                    }
                    return r.globalData.agentUserInfo = u.dataObj, e.abrupt("return", u.dataObj);

                  case 26:
                    return e.abrupt("return", 0);

                  case 27:
                    e.next = 30;
                    break;

                  case 29:
                    return e.abrupt("return", 2);

                  case 30:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    addPayOrder: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, r = a.globalData.appid, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 6, core.getUserInfo();

                  case 6:
                    e.t0 = e.sent;

                  case 7:
                    if (n = e.t0, e.t1 = (0, _lodash2.default)(a.globalData, "aid", ""), e.t1) {
                        e.next = 13;
                        break;
                    }
                    return e.next = 12, core.getAid();

                  case 12:
                    e.t1 = e.sent;

                  case 13:
                    return e.t2 = e.t1, e.t3 = t.chargeLevel, e.t4 = t.inviteUserId, e.t5 = n.Id, o = {
                        aid: e.t2,
                        storeId: 0,
                        agentLevelId: e.t3,
                        parentAgentId: e.t4,
                        userId: e.t5
                    }, e.abrupt("return", http.post(_addr2.default.AddPayOrder, {
                        userId: n.Id,
                        appid: r,
                        ordertype: 3001028,
                        buyprice: t.money,
                        paytype: 1,
                        jsondata: JSON.stringify(o),
                        sessionkey: (0, _lodash2.default)(n, "loginSessionKey", "")
                    }));

                  case 19:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    applyDrawCash: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (r = e.t0, e.t1 = (0, _lodash2.default)(a.globalData, "aid", ""), e.t1) {
                        e.next = 12;
                        break;
                    }
                    return e.next = 11, core.getAid();

                  case 11:
                    e.t1 = e.sent;

                  case 12:
                    return n = e.t1, e.abrupt("return", http.post(_addr2.default.ApplyDrawCash, {
                        aid: n,
                        userId: r.Id,
                        money: t,
                        sessionkey: (0, _lodash2.default)(r, "loginSessionKey", "")
                    }));

                  case 14:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getApplyDrawCashLog: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = t.vm, r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 6, core.getUserInfo();

                  case 6:
                    e.t0 = e.sent;

                  case 7:
                    if (n = e.t0, e.t1 = (0, _lodash2.default)(r.globalData, "aid", ""), e.t1) {
                        e.next = 13;
                        break;
                    }
                    return e.next = 12, core.getAid();

                  case 12:
                    e.t1 = e.sent;

                  case 13:
                    if (o = e.t1, !a.ispost && !a.loadall) {
                        e.next = 16;
                        break;
                    }
                    return e.abrupt("return");

                  case 16:
                    a.ispost || (a.ispost = !0), http.post(_addr2.default.GetApplyDrawCashLog, {
                        aid: o,
                        userId: n.Id,
                        storeId: 0,
                        pageSize: a.pagesize,
                        pageIndex: a.pageindex,
                        sessionkey: (0, _lodash2.default)(n, "loginSessionKey", "")
                    }).then(function(e) {
                        a.ispost = !1;
                        var r = e.dataObj;
                        e.isok && (r.count >= a.pagesize ? a.pageindex += 1 : a.loadall = !0, r.count > 0 && (a.list = [].concat(_toConsumableArray(a.list), _toConsumableArray(r.list))), 
                        t.vm = a, t.$apply());
                    });

                  case 18:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getMyFoundationAgent: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = t.vm, n = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(n.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 6, core.getUserInfo();

                  case 6:
                    e.t0 = e.sent;

                  case 7:
                    if (o = e.t0, e.t1 = (0, _lodash2.default)(n.globalData, "aid", ""), e.t1) {
                        e.next = 13;
                        break;
                    }
                    return e.next = 12, core.getAid();

                  case 12:
                    e.t1 = e.sent;

                  case 13:
                    if (s = e.t1, !r.ispost && !r.loadall) {
                        e.next = 16;
                        break;
                    }
                    return e.abrupt("return");

                  case 16:
                    r.ispost || (r.ispost = !0), http.post(_addr2.default.GetMyFoundationAgent, {
                        aid: s,
                        userId: a || o.Id,
                        storeId: 0,
                        pageIndex: r.pageindex,
                        pageSize: r.pagesize,
                        sessionkey: (0, _lodash2.default)(o, "loginSessionKey", "")
                    }).then(function(e) {
                        r.ispost = !1;
                        var a = e.dataObj;
                        e.isok && (a.count >= r.pagesize ? r.pageindex += 1 : r.loadall = !0, a.count > 0 && (r.list = [].concat(_toConsumableArray(r.list), _toConsumableArray(a.list))), 
                        t.vm = r, t.$apply());
                    });

                  case 18:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getCommissionLogList: function() {
        function e(e, a, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a, r) {
            var n, o, s, i;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (n = t.vm, o = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(o.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 6, core.getUserInfo();

                  case 6:
                    e.t0 = e.sent;

                  case 7:
                    if (s = e.t0, e.t1 = (0, _lodash2.default)(o.globalData, "aid", ""), e.t1) {
                        e.next = 13;
                        break;
                    }
                    return e.next = 12, core.getAid();

                  case 12:
                    e.t1 = e.sent;

                  case 13:
                    if (i = e.t1, !n.ispost && !n.loadall) {
                        e.next = 16;
                        break;
                    }
                    return e.abrupt("return");

                  case 16:
                    n.ispost || (n.ispost = !0), http.post(_addr2.default.GetCommissionLogList, {
                        aid: i,
                        userId: r || s.Id,
                        storeId: 0,
                        type: a,
                        pageIndex: n.pageindex,
                        pageSize: n.pagesize,
                        sessionkey: (0, _lodash2.default)(s, "loginSessionKey", "")
                    }).then(function(e) {
                        n.ispost = !1;
                        var a = e.dataObj;
                        e.isok && (null != a.list && a.list.length >= n.pagesize ? n.pageindex += 1 : n.loadall = !0, 
                        null != a.list && a.list.length > 0 && (n.list = [].concat(_toConsumableArray(n.list), _toConsumableArray(a.list))), 
                        t.vm = n, t.$apply());
                    });

                  case 18:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getLuckyDrawInfo: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (r = e.t0, e.t1 = (0, _lodash2.default)(a.globalData, "aid", ""), e.t1) {
                        e.next = 12;
                        break;
                    }
                    return e.next = 11, core.getAid();

                  case 11:
                    e.t1 = e.sent;

                  case 12:
                    n = e.t1, http.post(_addr2.default.GetLuckyDrawInfo, {
                        aid: n,
                        userId: r.Id
                    }).then(function(e) {
                        e.code && (t.luckDraw = e.obj.Config, t.availableTimes = e.obj.AvailableTimes, t.count = e.obj.Config.Goods.length, 
                        t.angel = 360 / t.count, t.isLoading = !0, t.$apply());
                    });

                  case 14:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    luckyDraw: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, a, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(t.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (a = e.t0, e.t1 = (0, _lodash2.default)(t.globalData, "aid", ""), e.t1) {
                        e.next = 12;
                        break;
                    }
                    return e.next = 11, core.getAid();

                  case 11:
                    e.t1 = e.sent;

                  case 12:
                    return r = e.t1, e.abrupt("return", http.post(_addr2.default.LuckyDraw, {
                        aid: r,
                        userId: a.Id
                    }));

                  case 14:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    fillInRewardInfo: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (n = e.t0, e.t1 = (0, _lodash2.default)(r.globalData, "aid", ""), e.t1) {
                        e.next = 12;
                        break;
                    }
                    return e.next = 11, core.getAid();

                  case 11:
                    e.t1 = e.sent;

                  case 12:
                    return o = e.t1, e.abrupt("return", http.post(_addr2.default.FillInRewardInfo, {
                        aid: o,
                        appId: r.globalData.appid,
                        openId: n.OpenId,
                        name: t.drawName,
                        phone: t.drawPhone,
                        address: t.drawAddress,
                        recordId: a
                    }));

                  case 14:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getUserRewardRecord: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (console.log(3333333333333), r = t.userReward, n = _wepy2.default.$instance, 
                    e.t0 = (0, _lodash2.default)(n.globalData, "userInfo", ""), e.t0) {
                        e.next = 8;
                        break;
                    }
                    return e.next = 7, core.getUserInfo();

                  case 7:
                    e.t0 = e.sent;

                  case 8:
                    if (o = e.t0, e.t1 = (0, _lodash2.default)(n.globalData, "aid", ""), e.t1) {
                        e.next = 14;
                        break;
                    }
                    return e.next = 13, core.getAid();

                  case 13:
                    e.t1 = e.sent;

                  case 14:
                    if (s = e.t1, !r.ispost && !r.loadall) {
                        e.next = 17;
                        break;
                    }
                    return e.abrupt("return");

                  case 17:
                    r.ispost || (r.ispost = !0), http.post(_addr2.default.GetUserRewardRecord, {
                        aid: s,
                        userId: a ? 0 : o.Id,
                        pageIndex: r.pageindex,
                        pageSize: r.pagesize
                    }).then(function(e) {
                        r.ispost = !1;
                        var a = e.obj;
                        e.code && (null != a && a.length >= r.pagesize ? r.pageindex += 1 : r.loadall = !0, 
                        null != a && a.length > 0 && (r.list = [].concat(_toConsumableArray(r.list), _toConsumableArray(a))), 
                        r.list = r.list.map(function(e) {
                            return e.AddTime && (e.AddTime = tools.ChangeDateFormat(e.AddTime)), e;
                        }), t.userReward = r, t.$apply());
                    });

                  case 19:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }()
}, canvas = {
    getShare: function() {
        var e = this, t = _wepy2.default.$instance, a = .82 * wx.getSystemInfoSync().windowWidth, r = .75 * wx.getSystemInfoSync().windowHeight, n = wx.createCanvasContext("firstCanvas");
        http.get(_addr2.default.GetShare, {
            appId: t.globalData.appid
        }).then(function() {
            var o = _asyncToGenerator(regeneratorRuntime.mark(function o(s) {
                var i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!s.isok) {
                            e.next = 14;
                            break;
                        }
                        return e.next = 3, _utils.canvasTools.pathStatus(s.obj, a, r);

                      case 3:
                        i = e.sent, t.globalData.adImg = s.obj.ADImg.length ? s.obj.ADImg[0].url : "", t.globalData.adTitle = s.obj.ADTitle, 
                        n.drawImage(i.bg.tempFilePath, 0, 0, a, r), 1 == i.status && n.drawImage(i.icon.tempFilePath, i.xicon, i.yicon, i.wicon, i.hicon), 
                        n.drawImage(i.img.tempFilePath, i.xstore, i.ystore, i.wstore, i.hstore), n.drawImage(i.qrcode.tempFilePath, i.xqrcode, i.yqrcode, i.wqrcode, i.hqrcode), 
                        4 != i.status && (n.setFillStyle("rgba(0, 0, 0, 0.2)"), n.fillRect(i.xng, i.yng, i.wng, i.hng), 
                        n.setFontSize(16), n.setFillStyle("#ffffff"), n.fillText(i.name, i.xname, i.yname), 
                        n.setFontSize(13), n.fillText(i.content, i.xcon, i.ycon), n.setFontSize(10), 3 != i.status ? (n.setFillStyle("#DACACA"), 
                        n.fillText("长按进入店铺", i.xtxt, i.ytxt)) : n.setFillStyle("#ffffff"), n.fillText("长按二维码", i.xtxt1, i.ytxt1)), 
                        n.draw(), e.next = 15;
                        break;

                      case 14:
                        tools.showModal(s.msg, !1);

                      case 15:
                      case "end":
                        return e.stop();
                    }
                }, o, e);
            }));
            return function(e) {
                return o.apply(this, arguments);
            };
        }());
    },
    getQrcode: function(e, t) {
        var a = this, r = _wepy2.default.$instance;
        http.get(_addr2.default.GetProductQrcode, {
            version: 2,
            pid: e.pid,
            showQrcode: 1,
            typeName: e.type,
            recordId: e.recordId,
            showprice: e.showprice,
            appId: r.globalData.appid,
            productType: e.protype || 0,
            flashItemId: e.flashId || ""
        }).then(function() {
            var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
                var n, o, s, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!r.isok) {
                            e.next = 35;
                            break;
                        }
                        return e.next = 3, _utils.canvasTools.pathCanvas(r.dataObj.qrCode, t);

                      case 3:
                        n = e.sent, o = .82 * wx.getSystemInfoSync().windowWidth, s = .75 * wx.getSystemInfoSync().windowHeight, 
                        i = wx.createCanvasContext("firstCanvas"), i.setFillStyle("white"), i.fillRect(0, 0, o, s), 
                        i.drawImage(n.img.tempFilePath, 0, 0, o, o), i.drawImage(n.qrcode.tempFilePath, .64 * o, .74 * s, .23 * o, .23 * o), 
                        i.setFontSize(12), i.setFillStyle("#FF6700"), i.fillText("长按查看商品", .65 * o, .96 * s), 
                        i.setFontSize(14), i.setFillStyle("#333333"), i.fillText(n.title.substr(0, 9), .1 * o, .77 * s), 
                        i.fillText(n.title.substr(9, 9), .1 * o, .81 * s), i.fillText(n.title.substr(18, 9), .1 * o, .85 * s), 
                        0 != n.price && (i.setFontSize(14), i.setFillStyle("#9C9C9C"), i.fillText("原价", .1 * o, .91 * s), 
                        i.fillText("￥" + n.price, .2 * o, .91 * s)), i.fillText("现价", .1 * o, .96 * s), 
                        i.setFontSize(20), i.setFillStyle("#FF6700"), i.fillText(n.disprice, .25 * o, .96 * s), 
                        i.setFontSize(14), i.setFillStyle("#FF6700"), i.fillText("￥", .2 * o, .96 * s), 
                        i.draw(), t.showCanvas = !0, t.vm.isPlay = !1, t.showToggleBtn = !1, t.$apply(), 
                        wx.createVideoContext("ctvideo").stop(), e.next = 36;
                        break;

                      case 35:
                        tools.showModal(r.Msg, !1);

                      case 36:
                        wx.hideLoading();

                      case 37:
                      case "end":
                        return e.stop();
                    }
                }, e, a);
            }));
            return function(t) {
                return e.apply(this, arguments);
            };
        }());
    },
    barCanvas: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n, o, s, i, u, c;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, _utils.canvasTools.downFile(t.replace(/^http:/, "https:"));

                  case 2:
                    return r = e.sent, e.next = 5, _utils.canvasTools.downFile("https://j.vzan.cc/miniapp/img/enterprise/bn-share.png");

                  case 5:
                    n = e.sent, o = wx.getSystemInfoSync().windowWidth, s = wx.getSystemInfoSync().windowHeight, 
                    i = wx.createCanvasContext("bargainCanvas"), u = "￥", c = a.vm.obj.FloorPriceStr, 
                    i.drawImage(n.tempFilePath, 0, 0, .8 * o, .74 * s), i.drawImage(r.tempFilePath, .25 * o, .25 * s, .3 * o, .3 * o), 
                    i.setFontSize(25), i.setFillStyle("white"), i.fillText(u, .23 * o, .17 * s), i.setFontSize(35), 
                    i.setFillStyle("white"), i.fillText(c, .29 * o, .17 * s), i.draw(), wx.hideLoading(), 
                    a.vm.barShow = !1, a.barCanvas = !0, a.$apply();

                  case 24:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getSellCanvas: function() {
        function e(e, a, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a, r) {
            var n, o, s = this;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return n = _wepy2.default.$instance, e.next = 3, core.bindSale(t);

                  case 3:
                    if (o = e.sent, !o.isok) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 7, core.updateRecordId(o.obj);

                  case 7:
                    tools.showLoading(), http.get(_addr2.default.GetProductQrcode, {
                        saleManId: a,
                        storeSale: 1,
                        recordId: o.obj,
                        appId: n.globalData.appid
                    }).then(function() {
                        var e = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                            var a, n, i, u;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (!t.isok) {
                                        e.next = 20;
                                        break;
                                    }
                                    return e.next = 3, _utils.canvasTools.downFile(t.dataObj.qrCode.replace(/^http:/, "https:"));

                                  case 3:
                                    a = e.sent, n = wx.getSystemInfoSync().windowWidth, i = wx.getSystemInfoSync().windowHeight, 
                                    u = wx.createCanvasContext("sellCanvas"), u.setFillStyle("white"), u.fillRect(0, 0, n, i), 
                                    u.setFontSize(16), u.setFillStyle("#333333"), u.setTextAlign("center"), u.fillText(r.vm.nickName, .38 * n, .07 * i), 
                                    u.drawImage(a.tempFilePath, .13 * n, .12 * i, .5 * n, .5 * n), u.draw(), r.record = o.obj, 
                                    r.showMask = !0, r.$apply(), e.next = 21;
                                    break;

                                  case 20:
                                    tools.showModal(t.Msg, !1);

                                  case 21:
                                    wx.hideLoading();

                                  case 22:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, s);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }());

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getSellQrcode: function(e, t) {
        var a = this, r = _wepy2.default.$instance;
        tools.showLoading(), http.get(_addr2.default.GetProductQrcode, {
            saleManId: e,
            applySale: 1,
            appId: r.globalData.appid
        }).then(function() {
            var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
                var n, o, s, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!r.isok) {
                            e.next = 19;
                            break;
                        }
                        return e.next = 3, _utils.canvasTools.downFile(r.dataObj.qrCode.replace(/^http:/, "https:"));

                      case 3:
                        n = e.sent, o = wx.getSystemInfoSync().windowWidth, s = wx.getSystemInfoSync().windowHeight, 
                        i = wx.createCanvasContext("sellCanvas"), i.setFillStyle("white"), i.fillRect(0, 0, o, s), 
                        i.setFontSize(16), i.setFillStyle("#333333"), i.setTextAlign("center"), i.fillText(t.vm.nickName, .38 * o, .07 * s), 
                        i.drawImage(n.tempFilePath, .13 * o, .12 * s, .5 * o, .5 * o), i.draw(), t.showMask = !0, 
                        t.$apply(), e.next = 20;
                        break;

                      case 19:
                        tools.showModal(r.Msg, !1);

                      case 20:
                        wx.hideLoading();

                      case 21:
                      case "end":
                        return e.stop();
                    }
                }, e, a);
            }));
            return function(t) {
                return e.apply(this, arguments);
            };
        }());
    },
    getInviteCanvas: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, a, r = this;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(t.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    a = e.t0, tools.showLoading(), http.post(_addr2.default.GetInviteQRCode, {
                        appid: t.globalData.appid,
                        userId: a.Id
                    }).then(function() {
                        var e = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                            var a, n, o, s, i, u;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (!t.isok) {
                                        e.next = 22;
                                        break;
                                    }
                                    return a = "http://j.vzan.cc/miniapp/img/enterprise/invite_bg.png", e.next = 4, 
                                    _utils.canvasTools.downFile(t.obj.replace(/^http:/, "https:"));

                                  case 4:
                                    return n = e.sent, e.next = 7, _utils.canvasTools.downFile(a.replace(/^http:/, "https:"));

                                  case 7:
                                    o = e.sent, s = wx.getSystemInfoSync().windowWidth, i = wx.getSystemInfoSync().windowHeight, 
                                    u = wx.createCanvasContext("inviteCanvas"), u.drawImage(o.tempFilePath, 0, -64, s, 1.4 * i), 
                                    u.setFontSize(14), u.setFillStyle("#fff"), u.setTextAlign("center"), u.fillText("扫一扫立即加入", .5 * s, .61 * i + .4 * s), 
                                    u.setFillStyle("#fff"), u.fillRect(.3 * s, .57 * i, .4 * s, .4 * s), u.drawImage(n.tempFilePath, .32 * s, .58 * i, .36 * s, .36 * s), 
                                    u.draw(), e.next = 23;
                                    break;

                                  case 22:
                                    tools.showModal(t.Msg, !1);

                                  case 23:
                                    wx.hideLoading();

                                  case 24:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, r);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }());

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    buildQrcode: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, _utils.canvasTools.downFile(t.InviteImgUrl.replace(/^http:/, "https:"));

                  case 2:
                    a = e.sent, r = wx.getSystemInfoSync().windowWidth / 750, n = wx.createCanvasContext("buildCode"), 
                    n.setFillStyle("white"), n.fillRect(0, 0, 600 * r, 700 * r), n.drawImage(a.tempFilePath, 51 * r, 70 * r, 500 * r, 500 * r), 
                    n.setFontSize(16), n.setFillStyle("#333"), n.setTextAlign("center"), n.fillText("扫码进入注册页面", 300 * r, 620 * r), 
                    n.draw(), wx.hideLoading();

                  case 14:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }()
}, album = {
    pathAlbum: function(e, t, a, r, n) {
        tools.goNewPage("/pages/album/album?coverImg=" + e + "&coverTime=" + t + "&allowDownload=" + n + "&ids=" + a + "&title=" + r);
    },
    getAlbumList: function() {
        function e(e, a, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a, r) {
            var n, o, s, i, u, c, d;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (n = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(n.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (o = e.t0, e.t1 = (0, _lodash2.default)(n.globalData, "aid", ""), e.t1) {
                        e.next = 12;
                        break;
                    }
                    return e.next = 11, core.getAid();

                  case 11:
                    e.t1 = e.sent;

                  case 12:
                    if (s = e.t1, i = (0, _lodash2.default)(o, "loginSessionKey", ""), u = [], a.items.forEach(function(e, t) {
                        u.push(e.ID);
                    }), !(u.length > 0)) {
                        e.next = 21;
                        break;
                    }
                    return c = [], e.next = 20, http.get(_addr2.default.GetAlbumList, {
                        aid: s,
                        sessionKey: i,
                        ids: u.join(",")
                    }).then(function(e) {
                        e.obj.list.forEach(function(e) {
                            1 === e.State && c.push(e);
                        });
                    });

                  case 20:
                    c.length > 0 && (d = {
                        list: c,
                        ids: u
                    }, r.vm_com_album[t] = d, r.$apply());

                  case 21:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getAlbumListByIDs: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var a, r, n, o, s, i;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (r = e.t0, e.t1 = (0, _lodash2.default)(a.globalData, "aid", ""), e.t1) {
                        e.next = 12;
                        break;
                    }
                    return e.next = 11, core.getAid();

                  case 11:
                    e.t1 = e.sent;

                  case 12:
                    return n = e.t1, o = (0, _lodash2.default)(r, "loginSessionKey", ""), e.next = 16, 
                    http.get(_addr2.default.GetAlbumList, {
                        aid: n,
                        sessionKey: o,
                        ids: t
                    });

                  case 16:
                    return s = e.sent, i = [], s.obj.list.forEach(function(e) {
                        1 === e.State && i.push(e);
                    }), e.abrupt("return", i);

                  case 20:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    viewAlbum: function(e, t, a, r) {
        tools.goNewPage("/pages/album/albumDetail?albumId=" + e + "&name=" + t + "&allowDownload=" + r + "&poster=" + a);
    },
    getAlbumDetail: function() {
        function e(e, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
            var r, n, o, s, i;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (n = e.t0, e.t1 = (0, _lodash2.default)(r.globalData, "aid", ""), e.t1) {
                        e.next = 12;
                        break;
                    }
                    return e.next = 11, core.getAid();

                  case 11:
                    e.t1 = e.sent;

                  case 12:
                    return o = e.t1, s = (0, _lodash2.default)(n, "loginSessionKey", ""), e.next = 16, 
                    http.get(_addr2.default.GetAlbumMaterialList, {
                        aid: o,
                        sessionKey: s,
                        albumId: t,
                        pageIndex: a,
                        pageSize: 20
                    });

                  case 16:
                    return i = e.sent, e.abrupt("return", i);

                  case 18:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }()
};

module.exports = {
    http: http,
    core: core,
    pay: pay,
    canvas: canvas,
    tools: tools,
    pro: pro,
    album: album
};