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

var _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../lib/core.js"), com_newsLst = function(e) {
    function t() {
        var e, o, n, r;
        _classCallCheck(this, t);
        for (var s = arguments.length, i = Array(s), c = 0; c < s; c++) i[c] = arguments[c];
        return o = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.methods = {
            selNav: function(e, t) {
                this.$emit("newsSel", e, t);
            },
            goDlt: function(e) {
                _core.tools.goNewPage("/pages/news/news?id=" + e);
            },
            setInput: function(e) {
                this.$emit("setInput", e);
            },
            confirm: function(e) {
                this.$parent.data.vm_com_newlst = _core.tools.resetArray(this.$parent.data.vm_com_newlst), 
                this.$parent.data.vm_com_newlst.ids = e, _core.core.getNewsLst(this.$parent.data.vm_com_newlst, this.$parent);
            }
        }, r = o, _possibleConstructorReturn(n, r);
    }
    return _inherits(t, e), t;
}(_wepy2.default.component);

exports.default = com_newsLst;