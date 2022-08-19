function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, o) {
            function n(r, a) {
                try {
                    var i = t[r](a), s = i.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void o(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(s);
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
});

var _createClass = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), _core = require("./../../lib/core.js"), miniapp = function(e) {
    function t() {
        var e, o, n, r;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
        return o = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationBarTitleText: "注册账号",
            usingComponents: {
                "wxc-toast": "../../packages/@minui/wxc-toast/dist/index"
            }
        }, n.data = {
            regType: [ "成为代理商", "开发小程序" ],
            formData: {
                opentype: 0,
                agentqrcodeid: 0,
                phone: ""
            },
            count: "",
            showCountDown: !0,
            isDisabled: !1,
            toast: {
                show: !1,
                msg: ""
            }
        }, n.methods = {
            selectType: function(e) {
                this.formData.opentype = e;
            },
            getPhoneValue: function(e) {
                this.formData.phone = e.detail.value;
            },
            getCode: function() {
                "" == this.formData.phone ? _core.tools.ShowToast("请先填入手机号", this) : this.GetVaildCode();
            },
            formReg: function(e) {
                this.isDisabled = !0;
                var t = e.detail.value;
                for (var o in t) this.formData[o] = t[o];
                this.SaveUserInfo();
            }
        }, r = o, _possibleConstructorReturn(n, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "GetVaildCode",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.core.GetVaildCode(this.formData);

                      case 2:
                        t = e.sent, 1 == t.code ? (this.showCountDown = !1, _core.tools.ShowToast(t.Msg, this), 
                        this.countDown()) : _core.tools.ShowToast(t.Msg, this);

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "SaveUserInfo",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.core.SaveUserInfo(this.formData);

                      case 2:
                        t = e.sent, t.isok ? _core.tools.showModal("注册成功") : (_core.tools.ShowToast(t.Msg, this), 
                        this.isDisabled = !1, this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "countDown",
        value: function() {
            var e = this, t = 60, o = setInterval(function() {
                t > 1 ? (t--, e.count = t + "s", e.$apply()) : (clearInterval(o), e.showCountDown = !0, 
                e.$apply());
            }, 1e3);
        }
    }, {
        key: "onLoad",
        value: function(e) {
            _core.tools.setPageSkin(this), this.formData.agentqrcodeid = e.id;
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(miniapp, "pages/index/miniapp"));