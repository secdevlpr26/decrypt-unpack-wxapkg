function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(o, i) {
                try {
                    var s = t[o](i), a = s.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void n(e);
                }
                if (!s.done) return Promise.resolve(a).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(a);
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

var _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../lib/core.js"), _lodashGet = require("./../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), com_code = function(e) {
    function t() {
        var e, n, r, o;
        _classCallCheck(this, t);
        for (var i = arguments.length, s = Array(i), a = 0; a < i; a++) s[a] = arguments[a];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        r.config = {
            usingComponents: {}
        }, r.components = {}, r.props = {
            vm: {
                type: Object
            },
            isOverflow: String
        }, r.data = {}, r.methods = {
            hidemask: function() {
                this.$emit("hideCode"), this.$apply();
            },
            saveQrcode: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var n = this;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            wx.canvasToTempFilePath({
                                x: 0,
                                y: 0,
                                width: .8 * wx.getSystemInfoSync().windowWidth,
                                height: .6 * wx.getSystemInfoSync().windowHeight,
                                canvasId: "buildCode",
                                success: function(e) {
                                    wx.saveImageToPhotosAlbum({
                                        filePath: e.tempFilePath,
                                        success: function() {
                                            function e(e) {
                                                return t.apply(this, arguments);
                                            }
                                            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                                                return regeneratorRuntime.wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                      case 0:
                                                        return e.next = 2, _core.tools.loading("图片保存成功", "success");

                                                      case 2:
                                                      case "end":
                                                        return e.stop();
                                                    }
                                                }, e, n);
                                            }));
                                            return e;
                                        }(),
                                        fail: function() {
                                            function e(e) {
                                                return t.apply(this, arguments);
                                            }
                                            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                                                return regeneratorRuntime.wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                      case 0:
                                                        if (!t.errMsg.includes("saveImageToPhotosAlbum:fail auth deny") && !t.errMsg.includes("saveImageToPhotosAlbum:fail:auth denied")) {
                                                            e.next = 3;
                                                            break;
                                                        }
                                                        return e.next = 3, _core.tools.showModal("授权后才可使用,请点击右上角‘关于小程序’进行相关设置", !1);

                                                      case 3:
                                                      case "end":
                                                        return e.stop();
                                                    }
                                                }, e, n);
                                            }));
                                            return e;
                                        }()
                                    });
                                }
                            });

                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }()
        }, o = n, _possibleConstructorReturn(r, o);
    }
    return _inherits(t, e), t;
}(_wepy2.default.component);

exports.default = com_code;