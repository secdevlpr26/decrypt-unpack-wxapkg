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

var _createClass = function() {
    function e(e, t) {
        for (var s = 0; s < t.length; s++) {
            var i = t[s];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    return function(t, s, i) {
        return s && e(t.prototype, s), i && e(t, i), t;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), swipeDelete = function(e) {
    function t() {
        var e, s, i, n;
        _classCallCheck(this, t);
        for (var o = arguments.length, r = Array(o), a = 0; a < o; a++) r[a] = arguments[a];
        return s = i = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(r))), 
        i.props = {
            swipeData: {
                type: Object,
                default: []
            },
            swipeItemH: {
                type: String,
                default: "128rpx"
            }
        }, i.data = {
            startX: null,
            moveX: null
        }, i.methods = {
            ts: function(e) {
                1 === e.touches.length && (this.startX = e.touches[0].clientX, this.moveX = e.touches[0].clientX);
            },
            tm: function(e) {
                if (1 === e.touches.length) {
                    var t = this.moveX - e.touches[0].clientX;
                    this.moveX = e.touches[0].clientX, this.swipeData.style - t < -140 ? this.swipeData.style = -140 : this.swipeData.style - t > 0 ? this.swipeData.style = 0 : this.swipeData.style = this.swipeData.style - t, 
                    this.setData({
                        swipeData: this.props.swipeData
                    });
                }
            },
            te: function(e) {
                1 === e.changedTouches.length && (this.swipeData.style <= -70 ? this.swipeData.style = -140 : this.swipeData.style = 0, 
                this.setData({
                    swipeData: this.props.swipeData
                }));
            },
            handleRightBtnTap: function(e) {
                e = JSON.parse(JSON.stringify(e)), delete e.style, this.$emit("delItem", e);
            }
        }, n = s, _possibleConstructorReturn(i, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onReady",
        value: function() {
            this.swipeData.style = 0;
        }
    } ]), t;
}(_wepy2.default.component);

exports.default = swipeDelete;