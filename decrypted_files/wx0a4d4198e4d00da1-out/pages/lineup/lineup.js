function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var r = e.apply(this, arguments);
        return new Promise(function(e, t) {
            function n(o, a) {
                try {
                    var u = r[o](a), s = u.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void t(e);
                }
                if (!u.done) return Promise.resolve(s).then(function(e) {
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

function _classCallCheck(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, r) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !r || "object" != typeof r && "function" != typeof r ? e : r;
}

function _inherits(e, r) {
    if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function, not " + typeof r);
    e.prototype = Object.create(r && r.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _createClass = function() {
    function e(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(r, t, n) {
        return t && e(r.prototype, t), n && e(r, n), r;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../../lib/core.js"), lineup = function(e) {
    function r() {
        var e, t, n, o;
        _classCallCheck(this, r);
        for (var a = arguments.length, u = Array(a), s = 0; s < a; s++) u[s] = arguments[s];
        return t = n = _possibleConstructorReturn(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [ this ].concat(u))), 
        n.config = {
            navigationBarTitleText: "排队拿号"
        }, n.components = {}, n.data = {
            phonenumber: 0,
            isonOrder: !1,
            dataObj: {},
            numsindex: 0,
            currentSkin: {}
        }, n.methods = {
            inputPhonenumber: function(e) {
                this.phonenumber = e.detail.value, this.$apply();
            },
            formaline: function() {
                function e(e) {
                    return r.apply(this, arguments);
                }
                var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
                    var t, n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return t = r.detail.formId, e.next = 3, _core.core.formId(t);

                          case 3:
                            if (0 == this.phonenumber) {
                                e.next = 12;
                                break;
                            }
                            return e.next = 6, _core.core.PutSortQueueMsg(this.phonenumber);

                          case 6:
                            if (n = e.sent, !n.isok) {
                                e.next = 10;
                                break;
                            }
                            return e.next = 10, _core.core.GetUserInSortQueuesPlanMsg(this);

                          case 10:
                            e.next = 13;
                            break;

                          case 12:
                            _core.tools.showModal("信息未完善", !1);

                          case 13:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            openlocation: function() {
                function e() {
                    return r.apply(this, arguments);
                }
                var r = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var r;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _core.core.getStoreConfig();

                          case 2:
                            r = e.sent, wx.openLocation({
                                latitude: r.storeInfo.Lat,
                                longitude: r.storeInfo.Lng,
                                address: r.storeInfo.Address,
                                scale: 14
                            });

                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            refreshqueue: function() {
                function e(e) {
                    return r.apply(this, arguments);
                }
                var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
                    var t;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return t = r.detail.formId, e.next = 3, _core.core.formId(t);

                          case 3:
                            return e.next = 5, _core.core.GetUserInSortQueuesPlanMsg(this);

                          case 5:
                            return e.next = 7, _core.tools.loading("刷新成功", "success");

                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            cancelqueue: function() {
                function e(e) {
                    return r.apply(this, arguments);
                }
                var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
                    var t, n, o;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return t = r.detail.formId, e.next = 3, _core.core.formId(t);

                          case 3:
                            return e.next = 5, _core.tools.showModal("是否确认取消排队？");

                          case 5:
                            if (n = e.sent, !n.confirm) {
                                e.next = 13;
                                break;
                            }
                            return e.next = 9, _core.core.CancelSortQueue(this.dataObj.sortQueue.id);

                          case 9:
                            if (o = e.sent, !o.isok) {
                                e.next = 13;
                                break;
                            }
                            return e.next = 13, _core.core.GetUserInSortQueuesPlanMsg(this);

                          case 13:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }()
        }, o = t, _possibleConstructorReturn(n, o);
    }
    return _inherits(r, e), _createClass(r, [ {
        key: "onLoad",
        value: function() {
            function e() {
                return r.apply(this, arguments);
            }
            var r = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _core.tools.setPageSkin(this);

                      case 2:
                        return e.next = 4, _core.core.GetUserInSortQueuesPlanMsg(this);

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onShow",
        value: function() {
            var e = this;
            setTimeout(function() {
                e.timeInter = setInterval(function() {
                    1 == e.isonOrder && _core.core.GetUserInSortQueuesPlanMsg(e);
                }, 5e3);
            }, 5e3);
        }
    }, {
        key: "onHide",
        value: function() {
            clearInterval(this.timeInter);
        }
    }, {
        key: "onUnload",
        value: function() {
            clearInterval(this.timeInter);
        }
    } ]), r;
}(_wepy2.default.page);

exports.default = lineup;