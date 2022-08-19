function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}

function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), ComSimilar = function(t) {
    function e() {
        var t, n, i, o;
        _classCallCheck(this, e);
        for (var r = arguments.length, s = Array(r), l = 0; l < r; l++) s[l] = arguments[l];
        return n = i = _possibleConstructorReturn(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(s))), 
        i.props = {
            onSelectAfter: {
                type: Function,
                default: null
            },
            list: {
                type: Array,
                default: []
            },
            isCancel: {
                type: [ Boolean, String ],
                default: !1,
                twoWay: !0
            },
            placeholder: {
                type: String,
                default: "搜索"
            },
            bgColor: {
                type: String,
                default: "#fff"
            }
        }, i.data = {
            cacheList: [],
            isStretch: !1
        }, i.methods = {
            show: function() {
                this.isCancel = !this.isCancel;
            },
            select: function(t) {
                var e = t.currentTarget.dataset.item, n = this, i = this.$parent || null;
                wx.showToast({
                    title: "选择成功",
                    icon: "success",
                    duration: 666
                }), "function" == typeof this.onSelectAfter && this.onSelectAfter.call(i, e), setTimeout(function() {
                    n.isCancel = !n.isCancel, n.$apply();
                }, 666);
            },
            handleInput: function(t) {
                var e = t.detail.value, n = this.list, i = [];
                if ("" == e) return void (this.list = this.cacheList);
                n.forEach(function(t) {
                    var n = t.title;
                    new RegExp("^(" + e + ")").test(n) && i.push(t);
                }), i.length ? this.list = i : (wx.showToast({
                    title: "匹配失败",
                    icon: "loading",
                    duration: 500
                }), this.list = this.cacheList);
            },
            setList: function(t) {
                this.cacheList = this.list = t;
            }
        }, o = n, _possibleConstructorReturn(i, o);
    }
    return _inherits(e, t), e;
}(_wepy2.default.component);

exports.default = ComSimilar;