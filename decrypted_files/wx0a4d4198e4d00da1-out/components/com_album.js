function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(o, a) {
                try {
                    var u = t[o](a), i = u.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void r(e);
                }
                if (!u.done) return Promise.resolve(i).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(i);
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

var _createClass = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../lib/core.js"), _lodashGet = require("./../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), com_album = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, u = Array(a), i = 0; i < a; i++) u[i] = arguments[i];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(u))), 
        n.data = {
            albumList: [],
            albumIds: []
        }, n.props = {
            currentCom: {
                type: Object,
                default: null,
                twoWay: !0
            }
        }, n.methods = {
            goAlbum: function(e) {
                _core.album.pathAlbum(e.currentTarget.dataset.cover, e.currentTarget.dataset.covertime, e.currentTarget.dataset.ids, e.currentTarget.dataset.title, e.currentTarget.dataset.allowdownload);
            },
            viewDetail: function(e) {
                _core.album.viewAlbum(e.currentTarget.dataset.albumid, e.currentTarget.dataset.name, e.currentTarget.dataset.poster, e.currentTarget.dataset.allowdownload);
            }
        }, o = r, _possibleConstructorReturn(n, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e, t) {}
    }, {
        key: "getAlbumListOfCom",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r, n, o = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = this, r = _wepy2.default.$instance, e.t0 = (0, _lodashGet2.default)(r.globalData, "pages", ""), 
                        e.t0) {
                            e.next = 7;
                            break;
                        }
                        return e.next = 6, _core.core.getPageSetting();

                      case 6:
                        e.t0 = e.sent;

                      case 7:
                        n = e.t0, console.log(this.currentPage), console.log(n), n.pages.forEach(function(e) {
                            e.coms.forEach(function(e) {
                                if ("album" === e.type) return t.albumList = e.items, o.$apply(), !0;
                            });
                        }), this.albumList.forEach(function(e) {
                            o.albumIds.push(e.ID);
                        });

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.component);

exports.default = com_album;