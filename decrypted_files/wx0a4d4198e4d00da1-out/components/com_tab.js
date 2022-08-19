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
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), Tab = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var i = arguments.length, a = Array(i), l = 0; l < i; l++) a[l] = arguments[l];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        n.props = {
            onClickAfter: {
                type: String,
                default: ""
            },
            scroll: {
                type: [ Boolean, String ],
                default: !1
            },
            activeIndex: {
                type: [ Number, String ],
                default: 0
            },
            bgColor: {
                type: String,
                default: "#fff"
            },
            isFixed: {
                type: [ Boolean, String ],
                default: !1
            },
            list: {
                type: Array,
                default: []
            },
            specialWidth: {
                type: Object,
                default: {
                    width: "",
                    index: ""
                }
            },
            color: {
                type: String,
                default: ""
            },
            scrollLeft: {
                type: Number,
                default: 0
            }
        }, n.data = {
            nodeRefs: [],
            targetWidth: 0,
            targetLeft: 0
        }, n.methods = {
            move: function(e) {
                var t = e.currentTarget.dataset.index, r = this.$parent || null, n = e.currentTarget.dataset.state;
                this.activeIndex = t, this.targetLeft = this.getIterateLeft(t) + "px", this.targetWidth = this.nodeRefs[t].width + "px", 
                this.onClickAfter && "function" == typeof r[this.onClickAfter] && r[this.onClickAfter](n);
            }
        }, o = r, _possibleConstructorReturn(n, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "init",
        value: function() {
            var e = this;
            setTimeout(function() {
                var t = e;
                wx.createSelectorQuery().selectAll(".com-tab-item").boundingClientRect(function(e) {
                    t.nodeRefs = e, t.targetWidth = e[t.activeIndex].width + "px", t.targetLeft = t.getIterateLeft(t.activeIndex) + "px", 
                    t.$apply();
                }).exec();
            }, 300);
        }
    }, {
        key: "getIterateLeft",
        value: function(e) {
            for (var t = 0, r = 0; r < e; r++) t += this.nodeRefs[r].width;
            return t;
        }
    }, {
        key: "onLoad",
        value: function() {
            this.init();
        }
    } ]), t;
}(_wepy2.default.component);

exports.default = Tab;