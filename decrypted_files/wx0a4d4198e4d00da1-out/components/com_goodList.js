function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, o) {
            function r(i, n) {
                try {
                    var s = t[i](n), c = s.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void o(e);
                }
                if (!s.done) return Promise.resolve(c).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(c);
            }
            return r("next");
        });
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _createClass = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var r = t[o];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, o, r) {
        return o && e(t.prototype, o), r && e(t, r), t;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../lib/core.js"), _com_goodLabel = require("./com_goodLabel.js"), _com_goodLabel2 = _interopRequireDefault(_com_goodLabel), com_goodList = function(e) {
    function t() {
        var e, o, r, i;
        _classCallCheck(this, t);
        for (var n = arguments.length, s = Array(n), c = 0; c < n; c++) s[c] = arguments[c];
        return o = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        r.config = {
            usingComponents: {
                "wxc-abnor": "../../packages/@minui/wxc-abnor/dist/index"
            }
        }, r.data = {
            vm_gd: {
                topIndex: 0,
                sort: !1
            },
            fifterLst: [],
            fifterShow: !1,
            showInput: !1
        }, r.props = {
            currentCom: {
                type: Object,
                default: {}
            }
        }, r.$repeat = {
            vm: {
                com: "comlabel",
                props: ""
            },
            lst: {
                com: "comlabel",
                props: ""
            }
        }, r.$props = {
            comlabel: {
                "xmlns:v-bind": {
                    value: "",
                    for: "lst",
                    item: "good_item",
                    index: "index",
                    key: "key"
                },
                "v-bind:vm.sync": {
                    value: "good_item.plabelstr_array",
                    for: "lst",
                    item: "good_item",
                    index: "index",
                    key: "key"
                },
                class: {
                    value: "mt20",
                    for: "lst",
                    item: "good_item",
                    index: "index",
                    key: "key"
                }
            }
        }, r.$events = {}, r.components = {
            comlabel: _com_goodLabel2.default
        }, r.methods = {
            handlerFocus: function(e) {
                this.showInput = "" != e.detail.value;
            },
            clickSearch: function() {
                this.showInput = !0;
            },
            pathSear: function(e) {
                _core.tools.goNewPage("/pages/good/goodSearch?buyType=" + e.btnType);
            },
            pathClassify: function(e, t, o) {
                for (var r = [], i = 0, n = t[e].length; i < n; i++) {
                    var s = t[e][i];
                    r.push(s.id);
                }
                r = r.join(","), _core.tools.goNewPage("/pages/good/goodType?index=" + e + "&ids=" + r + "&style=" + o);
            },
            search: function(e) {
                var t = this.$parent, o = t.data.vm_com_goodLst, r = t.data.currentPage.coms[0];
                o = _core.tools.resetArray(o), o.search = e.detail.value, o.exttypes = "", o.pricesort = "", 
                _core.core.getGoodsListRequest(o, r, t), _core.tools.onPageScroll();
            },
            navFunc: function(e) {
                var t = this.$parent, o = t.data.vm_com_goodLst, r = t.data.currentPage.coms[0];
                o = _core.tools.resetArray(o), o.typeid = e, o.exttypes = "", o.pricesort = "", 
                _core.core.getGoodsListRequest(o, r, t), _core.tools.onPageScroll();
            },
            selectFifter: function(e, t) {
                var o = "", r = [];
                this.fifterLst[e].child[t].sel = !this.fifterLst[e].child[t].sel;
                for (var i = 0, n = this.fifterLst.length; i < n; i++) for (var s = 0, c = this.fifterLst[i].child.length; s < c; s++) this.fifterLst[i].child[s].sel && (o = this.fifterLst[i].item.TypeId + "-" + this.fifterLst[i].child[s].TypeId, 
                r.push(o), this.exttypes = r);
            },
            fifterCheck: function() {
                var e = this.$parent, t = e.data.currentPage.coms[0], o = e.data.vm_com_goodLst;
                o.exttypes = this.exttypes.join(","), o = _core.tools.resetArray(o), o.pricesort = "", 
                o.saleCountSort = "", _core.core.getGoodsListRequest(o, t, e), _core.tools.onPageScroll(), 
                this.fifterShow = !1, this.$apply();
            },
            fifterClear: function() {
                for (var e = 0, t = this.fifterLst.length; e < t; e++) for (var o = 0, r = this.fifterLst[e].child.length; o < r; o++) this.fifterLst[e].child[o].sel = !1;
                this.exttypes = [];
            },
            changeTop: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Number(e), t = this.$parent, o = t.data.vm_com_goodLst, r = t.data.currentPage.coms[0];
                o = _core.tools.resetArray(o), this.vm_gd.topIndex = e, o.pricesort = "", o.saleCountSort = "", 
                1 == e ? o.saleCountSort = "desc" : 2 == e ? this.vm_gd.sort && 2 == this.vm_gd.topIndex ? (this.vm_gd.sort = !1, 
                o.pricesort = "desc") : (this.vm_gd.sort = !0, o.pricesort = "asc") : 3 == e && this.getFifter(this.currentCom), 
                this.$apply(), _core.core.getGoodsListRequest(o, r, t);
            },
            goNav: function(e, t) {
                _core.tools.pathGood(e.id, t.btnType, t.isShowPrice);
            },
            showMask: function() {
                function e(e, o) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, o) {
                    var r, i, n, s, c, a, u;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if ("buy" != o.btnType) {
                                e.next = 22;
                                break;
                            }
                            return e.next = 3, _core.core.getGoodInfo(t.id, !0);

                          case 3:
                            for (r = e.sent, i = Number(r.LimitDiscountPrice), n = Number(r.discountPrice), 
                            r.itemPrice = parseFloat(r.priceStr).toFixed(2), r.danMaiPrice = parseFloat(r.priceStr).toFixed(2), 
                            r.yuanJiaPrice = parseFloat(r.originalPrice).toFixed(2), r.stock = r.stock, r.specInfo = "", 
                            r.specId = "", r.totalCount = 1, r.priceStr = parseFloat(r.price).toFixed(2), r.btn = o.btnType, 
                            r.type = "good", r.discountP = null != r.LimitDiscountDetail && 1 == r.LimitDiscountDetail.Status && i > 0 && i <= n ? i : n, 
                            r.isShowLimitP = null != r.LimitDiscountDetail && (1 == r.LimitDiscountDetail.Status && i > 0 && i <= n), 
                            s = 0, c = r.pickspecification.length; s < c; s++) for (a = 0, u = r.pickspecification[s].items.length; a < u; a++) r.pickspecification[s].items[a].sel = !1;
                            this.$emit("showMask", r), e.next = 23;
                            break;

                          case 22:
                            _core.tools.pathGood(t.id, o.btnType, o.isShowPrice);

                          case 23:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }()
        }, i = o, _possibleConstructorReturn(r, i);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "getFifter",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var o, r, i, n, s, c, a, u;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.core.goodFifter();

                      case 2:
                        for (o = e.sent, r = o.msg, i = [], n = function(e, t) {
                            var o = r.filter(function(e) {
                                return e.ParentId == t.TypeId;
                            });
                            i.push({
                                item: t,
                                child: o
                            });
                        }, s = 0; c = t.goodExtCat[s++]; ) n(s, c);
                        for (s = 0; c = i[s++]; ) for (a = 0; u = c.child[a++]; ) 1 == u.sel && (u.sel = !1);
                        this.fifterLst = i, this.fifterShow = !0, this.$apply();

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.component);

exports.default = com_goodList;