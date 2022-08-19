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
                    var a = t[i](n), c = a.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void o(e);
                }
                if (!a.done) return Promise.resolve(c).then(function(e) {
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

var _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../lib/core.js"), _com_goodLabel = require("./com_goodLabel.js"), _com_goodLabel2 = _interopRequireDefault(_com_goodLabel), _com_loaderImg = require("./com_loaderImg.js"), _com_loaderImg2 = _interopRequireDefault(_com_loaderImg), com_goodLst = function(e) {
    function t() {
        var e, o, r, i;
        _classCallCheck(this, t);
        for (var n = arguments.length, a = Array(n), c = 0; c < n; c++) a[c] = arguments[c];
        return o = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        r.$repeat = {
            vm: {
                com: "comlabel",
                props: ""
            }
        }, r.$props = {
            comlabel: {
                "xmlns:v-bind": {
                    value: "",
                    for: "vm",
                    item: "good_item",
                    index: "index",
                    key: "key"
                },
                "v-bind:vm.sync": {
                    value: "good_item.plabelstr_array",
                    for: "vm",
                    item: "good_item",
                    index: "index",
                    key: "key"
                },
                class: {
                    value: "mt20",
                    for: "vm",
                    item: "good_item",
                    index: "index",
                    key: "key"
                }
            }
        }, r.$events = {}, r.components = {
            comlabel: _com_goodLabel2.default,
            comLoaderImg: _com_loaderImg2.default
        }, r.data = {}, r.methods = {
            goNav: function(e, t) {
                _core.tools.pathGood(e.id, t.btnType, t.isShowPrice);
            },
            showMask: function() {
                function e(e, o) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, o) {
                    var r, i, n, a, c, s, u;
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
                            r.itemPrice = parseFloat(r.priceStr).toFixed(2), r.danMaiPrice = parseFloat(r.priceStr).mul(r.StartBuy).toFixed(2), 
                            r.yuanJiaPrice = parseFloat(r.originalPrice).toFixed(2), r.stock = r.stock, r.specInfo = "", 
                            r.specId = "", r.totalCount = r.StartBuy || 1, r.priceStr = parseFloat(r.price).toFixed(2), 
                            r.btn = o.btnType, r.type = "good", r.discountP = null != r.LimitDiscountDetail && 1 == r.LimitDiscountDetail.Status && i > 0 && i <= n ? i : n, 
                            r.isShowLimitP = null != r.LimitDiscountDetail && (1 == r.LimitDiscountDetail.Status && i > 0 && i <= n), 
                            a = 0, c = r.pickspecification.length; a < c; a++) for (s = 0, u = r.pickspecification[a].items.length; s < u; s++) r.pickspecification[a].items[s].sel = !1;
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
    return _inherits(t, e), t;
}(_wepy2.default.component);

exports.default = com_goodLst;