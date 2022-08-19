function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _classCallCheck(e, o) {
    if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, o) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !o || "object" != typeof o && "function" != typeof o ? e : o;
}

function _inherits(e, o) {
    if ("function" != typeof o && null !== o) throw new TypeError("Super expression must either be null or a function, not " + typeof o);
    e.prototype = Object.create(o && o.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(e, o) : e.__proto__ = o);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../lib/core.js"), com_miaoSha = function(e) {
    function o() {
        var e, t, r, n;
        _classCallCheck(this, o);
        for (var i = arguments.length, a = Array(i), s = 0; s < i; s++) a[s] = arguments[s];
        return t = r = _possibleConstructorReturn(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(a))), 
        r.components = {}, r.props = {}, r.methods = {
            goMore: function(e) {
                _core.tools.goNewPage("/pages/miaoSha/more?id=" + e);
            },
            goDeal: function(e, o) {
                _core.tools.goNewPage("/pages/miaoSha/detail?id=" + e + "&title=" + o);
            },
            goTip: function(e, o, t, r, n) {
                console.log("goTip-start", e, o, t, r, n);
                var i = r + "_" + n;
                console.log(i, "goTip-end"), n ? _core.core.miaoShaTip(e, o, this.$parent, "1", t, i) : _core.core.miaoShaTip(e, o, this.$parent, "2", t);
            }
        }, n = t, _possibleConstructorReturn(r, n);
    }
    return _inherits(o, e), o;
}(_wepy2.default.component);

exports.default = com_miaoSha;