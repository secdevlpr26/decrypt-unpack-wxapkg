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

var _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../lib/core.js"), com_loaderImg = function(e) {
    function t() {
        var e, r, o, n;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), l = 0; l < a; l++) i[l] = arguments[l];
        return r = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        o.components = {}, o.props = {
            extraClass: {
                type: String,
                default: ""
            },
            extraImgClass: {
                type: String,
                default: ""
            },
            realSrc: {
                type: String,
                default: ""
            },
            mode: {
                type: String,
                default: "aspectFill"
            }
        }, o.data = {
            defaultSrc: "http://i2.vzan.cc/temp/image/png/2019/6/19/170115a5b38450c7064371a5ce15a68e7122ac.png",
            hiddenDefault: !1,
            loaded: !1
        }, o.methods = {
            onDefaultSrcLoad: function() {
                this.hiddenDefault = !0, this.$apply();
            },
            onRealSrcLoad: function() {
                this.loaded = !0, this.$apply();
            }
        }, n = r, _possibleConstructorReturn(o, n);
    }
    return _inherits(t, e), t;
}(_wepy2.default.component);

exports.default = com_loaderImg;