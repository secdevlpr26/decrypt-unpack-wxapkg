function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function o(n, a) {
                try {
                    var c = t[n](a), u = c.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void r(e);
                }
                if (!c.done) return Promise.resolve(u).then(function(e) {
                    o("next", e);
                }, function(e) {
                    o("throw", e);
                });
                e(u);
            }
            return o("next");
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

var _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../lib/core.js"), com_icon = function(e) {
    function t() {
        var e, r, o, n;
        _classCallCheck(this, t);
        for (var a = arguments.length, c = Array(a), u = 0; u < a; u++) c[u] = arguments[u];
        return r = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(c))), 
        o.data = {}, o.methods = {
            changeState: function() {
                this.$emit("showIcon");
            },
            goIcon: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            4 != Number(t) && 5 != Number(t) && this.$emit("showIcon"), e.t0 = Number(t), e.next = 0 === e.t0 ? 4 : 1 === e.t0 ? 11 : 2 === e.t0 ? 13 : 3 === e.t0 ? 15 : 4 === e.t0 ? 17 : 5 === e.t0 ? 19 : 21;
                            break;

                          case 4:
                            return e.next = 6, _core.tools.showLoading();

                          case 6:
                            return e.next = 8, _core.canvas.getShare();

                          case 8:
                            return this.$emit("showCanvas"), wx.hideLoading(), e.abrupt("break", 21);

                          case 11:
                            return _core.tools.goNewPage("/pages/good/goodSubLst"), e.abrupt("break", 21);

                          case 13:
                            return _core.tools.goNewPage("/pages/good/goodShopCar"), e.abrupt("break", 21);

                          case 15:
                            return _core.tools.goNewPage("/pages/discount/reductionLst"), e.abrupt("break", 21);

                          case 17:
                            return _core.tools.goRedirecto("/pages/index/index?currentPageIndex=0"), e.abrupt("break", 21);

                          case 19:
                            return _core.tools.onPageScroll(), e.abrupt("break", 21);

                          case 21:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }()
        }, n = r, _possibleConstructorReturn(o, n);
    }
    return _inherits(t, e), t;
}(_wepy2.default.component);

exports.default = com_icon;