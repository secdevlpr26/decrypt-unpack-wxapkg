function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(o, u) {
                try {
                    var i = t[o](u), c = i.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(c).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(c);
            }
            return n("next");
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

var _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../lib/core.js"), com_coup = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var u = arguments.length, i = Array(u), c = 0; c < u; c++) i[c] = arguments[c];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.methods = {
            useMyCoupon: function(e) {
                this.$emit("useMyCoupon", e);
            },
            useCoupon: function() {
                this.$emit("useCoupon");
            },
            getCoupon: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var r, n, o, u, i;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return r = t.currentTarget.dataset, n = r.mid, o = r.id, u = n, void 0 == n && (u = o), 
                            e.next = 7, _core.core.getCoupon(u);

                          case 7:
                            i = e.sent, _core.tools.showModal(i.msg, !1);

                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }()
        }, o = r, _possibleConstructorReturn(n, o);
    }
    return _inherits(t, e), t;
}(_wepy2.default.component);

exports.default = com_coup;