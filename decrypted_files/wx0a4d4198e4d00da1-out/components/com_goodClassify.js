function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
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

var _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../lib/core.js"), com_goodClassify = function(e) {
    function t() {
        var e, o, r, n;
        _classCallCheck(this, t);
        for (var i = arguments.length, s = Array(i), a = 0; a < i; a++) s[a] = arguments[a];
        return o = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        r.components = {}, r.data = {
            typeIndex: 0
        }, r.methods = {
            pathSear: function(e) {
                _core.tools.goNewPage("/pages/good/goodSearch?buyType=" + e.btnType);
            },
            selChange: function(e) {
                this.typeIndex = e, this.$apply();
            },
            seloneType: function(e, t) {
                var o = {
                    typeid: e,
                    title: t,
                    goods: this.$parent.data.currentPage.coms.find(function(e) {
                        return "goodlist" == e.type;
                    })
                };
                this.$parent.$preload("vm", o), this.$parent.$navigate("/pages/good/goodProLst");
            },
            selallType: function(e, t) {
                var o = {
                    isFirstType: 0,
                    typeid: e[t].FirstGoodType.id,
                    title: e[t].FirstGoodType.name,
                    goods: this.$parent.data.currentPage.coms.find(function(e) {
                        return "goodlist" == e.type;
                    })
                };
                this.$parent.$preload("vm", o), this.$parent.$navigate("/pages/good/goodProLst");
            },
            selallFirst: function(e) {
                var t = [];
                e.forEach(function(e, o) {
                    t.push(e.FirstGoodType.id);
                });
                var o = {
                    title: "全部",
                    typeid: t.join(","),
                    isFirstType: 0,
                    goods: this.$parent.data.currentPage.coms.find(function(e) {
                        return "goodlist" == e.type;
                    })
                };
                this.$parent.$preload("vm", o), this.$parent.$navigate("/pages/good/goodProLst");
            }
        }, n = o, _possibleConstructorReturn(r, n);
    }
    return _inherits(t, e), t;
}(_wepy2.default.component);

exports.default = com_goodClassify;