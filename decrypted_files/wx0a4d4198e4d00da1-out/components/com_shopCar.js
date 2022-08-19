function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(o, i) {
                try {
                    var s = t[o](i), u = s.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void r(e);
                }
                if (!s.done) return Promise.resolve(u).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(u);
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

var _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../lib/core.js"), com_shopCar = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var i = arguments.length, s = Array(i), u = 0; u < i; u++) s[u] = arguments[u];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        n.config = {}, n.props = {
            currentCom: {
                type: Object
            },
            isshowselect: {
                type: Boolean,
                default: !1
            }
        }, n.methods = {
            preview: function(e) {
                _core.tools.preViewShow(e);
            },
            hideMask: function() {
                this.$emit("hideMask");
            },
            setNum: function(e) {
                this.$emit("setNum", e);
            },
            changeSpec: function(e) {
                var t = e.currentTarget.dataset, r = [ t.p, t.c ], n = r[0], o = r[1];
                this.$emit("changeSpec", n, o);
            },
            add: function(e) {
                this.$emit("add", e);
            },
            less: function(e) {
                this.$emit("less", e);
            },
            addShop: function(e) {
                this.$emit("goShop", e);
            },
            addShopFuc: function(e) {
                console.log("e", e), this.$emit("goShopFuc", e);
            },
            getUser: function() {
                function e(e, r) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
                    var n, o;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return t && t.detail && (n = r, r = t, t = n), e.next = 3, _core.tools.getRnUser(r);

                          case 3:
                            if (this.currentCom.userInfo = e.sent, this.$apply(), 0 != this.currentCom.userInfo.newUser) {
                                e.next = 13;
                                break;
                            }
                            if ("buy" != t && "shop" != t) {
                                e.next = 13;
                                break;
                            }
                            return this.showShopCar = !0, e.next = 10, pro.resetPro(this.vm, t, "good");

                          case 10:
                            o = e.sent, this.currentCom = o, this.$apply();

                          case 13:
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

exports.default = com_shopCar;